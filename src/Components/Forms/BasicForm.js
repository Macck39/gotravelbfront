import { useState } from 'react'
import axios from 'axios';
import MapAutocompleteInput from './searchBox';


const BasicForm = () => {
  const [distance, setDistance] = useState("");
  const [loading, setLoading] = useState(false);
  const [directions, setDirections] = useState({
    pickupLat: '',
    pickupLng: '',
    dropLat: '',
    dropLng: ''
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNo: '',
    pickup: '',
    drop: '',
    pDate: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    pickup: '',
    drop: '',
    pDate: '',
    pTime: '',
    distance: ''
  })

  const handleInputChange = (fieldName, inputValue) => {
    let errors = { ...formErrors };
    switch (fieldName) {
      case "name":
        errors.name = inputValue.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "phoneNo":
        const phoneRegex = /^[0-9]{10}$/;
        errors.phoneNo = !phoneRegex.test(inputValue) ? "Phone number should be 10 digits" : "";
        break;
      case "pickup":
        errors.pickup = inputValue.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "drop":
        errors.drop = inputValue.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "pDate":
        errors.pDate = inputValue === "" ? "Please select a date" : "";
        errors.submit = ""; // Reset submit error when date is selected
        break;
      default:
        break;
    }
    setFormData((prevData) => ({ ...prevData, [fieldName]: inputValue }));
    setFormErrors(errors);
  };


  const handlePlaceChange = (name, value, google) => {
    console.log(name, "name place ");
    console.log(value, "value ")
    if (name === "pickup") {
      setFormData((prevData) => ({
        ...prevData,
        pickup: value.label,
      }));
      setDirections((prevData) => ({
        ...prevData,
        pickupLat: value.lat,
        pickupLng: value.lng,

      }));
    } else if (name === "drop") {
      setFormData((prevData) => ({
        ...prevData,
        drop: value.label,
      }));
      setDirections((prevData) => ({
        ...prevData,
        dropLat: value.lat,
        dropLng: value.lng,
      }));
      // calculateDistance();
    };
    // onPlaceChange(name, value, google);

  };




  const handleSubmit = async (event) => {
    event.preventDefault()

    let errors = { ...formErrors };
    let isValid = true;

    // Check for errors in error object
    Object.values(errors).forEach((value) => {
      if (value.length > 0) {
        // console.log("---------------")
        isValid = false;
      }
    });
    // console.log("errors", errors);
    // console.log("isValid", isValid);

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "pTime" && key !== "distance" && (value === undefined || value.trim().length === 0)) {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = "";
      }
    });

    if (!isValid) {
      errors.submit = "Please fill in all required fields";
      setFormErrors(errors);
      return;
    }

    errors.submit = "";
    setFormErrors(errors);

    const { pickup, drop } = formData;
    if (pickup !== "" && drop !== "") {
      try {
        const distance = await calculateDistance();
        console.log(distance, "distance");
        const updatedFormData = { ...formData, distance };
        setFormData(updatedFormData);
        const res = await axios.post('http://localhost:5000/api/cabrequest', updatedFormData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(updatedFormData,"updatedFormData");
          const reqRes = await res.data
          console.log(reqRes,"res")
      } catch (error) {
        console.error(error);
      } 
    } else {
      // Handle the case when either pickup or drop location is missing
      console.log("Missing pickup or drop location");
    }


  
  }

  const calculateDistance = () => {
    return new Promise((resolve, reject) => {
      console.log("---^^^^^^^-------")
      setDistance("");
      setLoading(true);

      // Calculate distance using the Google Maps Distance Matrix API
      const { pickup, drop } = formData;
      const { pickupLat, pickupLng, dropLat, dropLng } = directions;

      if (window.google && window.google.maps && pickup && drop) {
        const origin = new window.google.maps.LatLng(pickupLat, pickupLng);
        const destination = new window.google.maps.LatLng(dropLat, dropLng);
        const service = new window.google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin],
            destinations: [destination],
            travelMode: "DRIVING",
          },
          (response, status) => {
            if (status === "OK" && response.rows[0].elements[0].status === "OK") {
              const distance = response.rows[0].elements[0].distance.text;
              setDistance(distance);
                //  const updatedFormData = { ...formData, distance };
                // setFormData(updatedFormData);
              resolve(distance);
              setLoading(false);
            } else {
              setLoading(false);
              reject("Error calculating distance");
            }
          }
        );
      } else {
        setLoading(false);

      }
    })
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4 text-base flex justify-between'>
          <div className='w-1/2 mr-2'>
            <h4 className='mb-2 font-semibold'>Name</h4>
            <input
              className='p-2 w-full rounded-lg outline-none border-2 border-gray-300'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(event) => handleInputChange("name", event.target.value)}
              placeholder='Name'
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>
          <div className='w-1/2 ml-2'>
            <h4 className='mb-2 font-semibold'>Phone No</h4>
            <input className='p-2 w-full rounded-lg outline-none border-2 border-gray-300' type="text" id="phone_no" placeholder='Phone No'
              value={formData.phoneNo}
              name="phoneNo"
              onChange={(event) => handleInputChange("phoneNo", event.target.value)}
            />
            {formErrors.phoneNo && (
              <p className="text-red-500 text-sm">{formErrors.phoneNo}</p>
            )}
          </div>
        </div>
        <div className='mb-4 text-base flex justify-between'>
          <div className='w-1/2 mr-2'>
            <h4 className='mb-2 font-semibold'>Pick Place</h4>
            <MapAutocompleteInput
              value={formData.pickup}
              id="pickup"
              name="pickup"
              placeholder="Enter a location"
              onPlaceChange={handlePlaceChange}
              onCalculateDistance={calculateDistance}
              inputStyles={{ // Specify the desired input styles here
                border: '2px solid #d1d5db',
                borderRadius: '0.375rem',
                padding: '0.5rem',
                width: '100%',
              }}

            />
            {formErrors.pickup && (
              <p className="text-red-500 text-sm">{formErrors.pickup}</p>
            )}
          </div>
          <div className='w-1/2 ml-2'>
            <h4 className='mb-2 font-semibold'>Drop Place</h4>
            <MapAutocompleteInput
              value={formData.drop}
              name="drop"
              placeholder="Enter a location"
              onPlaceChange={handlePlaceChange}
              onCalculateDistance={calculateDistance}
            />
            {formErrors.drop && (
              <p className="text-red-500 text-sm">{formErrors.drop}</p>
            )}
          </div>
        </div><div className='flex justify-between'>
          <div className='mb-4 text-base'>
            <h4 className='mb-2 font-semibold'>PickUp Date</h4>
            <input className='p-2 w-full rounded-lg outline-none border-2 border-gray-300'
              name="pDate"
              value={formData.pDate}
              onChange={(event) => handleInputChange("pDate", event.target.value)}
              type="date" id="pickup_date" />
            {formErrors.pDate && (
              <p className="text-red-500 text-sm">{formErrors.pDate}</p>
            )}
          </div>
          <div className='mb-4 text-base'>
            <h4 className='mb-2 font-semibold'>PickUp Time</h4>
            <input className='p-2 w-full rounded-lg outline-none border-2 border-gray-300'
              name="pTime"
              value={formData.pTime}
              onChange={(event) => handleInputChange("pTime", event.target.value)}
              type="time" id="pickup_time" />

          </div>
        </div>
        <div className='flex justify-center items-center mt-4 flex-col'>
          <button type='submit' className='w-1/2 bg-[#70e772] py-2 rounded-lg text-base hover:bg-[#45c747]'>Submit</button>
          {formErrors.submit && (
            <p className="text-red-500 text-sm">{formErrors.submit}</p>
          )}
        </div>
      </form>
    </div>
  )

};

export default BasicForm;