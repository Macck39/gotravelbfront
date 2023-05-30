    import React, { useState } from 'react';
    import { useJsApiLoader, StandaloneSearchBox } from '@react-google-maps/api';

    const libraries = ['places'];

    const MapAutocompleteInput = ({ label, name, placeholder, onPlaceChange, onCalculateDistance }) => {
        const [inputValue, setInputValue] = useState('');
        const [searchBox, setSearchBox] = useState(null);
        const handlePlacesChanged = (google) => {
            const places = searchBox.getPlaces();
            if (places && places.length > 0) {
            const selectedPlace = places[0];
            const location = selectedPlace.geometry.location;
            const lat = location.lat();
            const lng = location.lng();
            const label = selectedPlace.formatted_address;
            setInputValue(label); 
            onPlaceChange(name, { label, lat, lng });
            }
        };
        const handleInputValueChange = (event) => {
        setInputValue(event.target.value);
        };
    
        const handleSearchBoxLoad = (ref) => {
        setSearchBox(ref);
        };
        const { isLoaded    } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries,
        });
    
        return (
        <div className="form-group">
            {isLoaded ? (
            <StandaloneSearchBox
                onLoad={handleSearchBoxLoad}
                onPlacesChanged={handlePlacesChanged}
            >
                <input
                type="text"
                name={name}
                id={name}
                className='p-2 w-full rounded-lg outline-none border-2 border-gray-300'
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputValueChange}
                />
            </StandaloneSearchBox>
            ) : (
            <input
                type="text"
                name={name}
                id={name}
                className='p-2 w-full rounded-lg outline-none border-2 border-gray-300'
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputValueChange}
                disabled
            />
            )}
        </div>
        );
    };
    

    export default MapAutocompleteInput;
