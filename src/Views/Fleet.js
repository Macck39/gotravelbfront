import React from "react";

const Fleet = () => {
  return (
    <div className="md:mx-10 mt-8">
      <h3 className="text-center text-xl font-semibold mb-4">Fleet of cars</h3>
      <p className="px-32">
        Gotravrlb has a fleet of cars to meet your transportation needs. Whether
        you're traveling for work or pleasure, we can get you where you need to
        go with ease and comfort.
      </p>
      {/* <div>
        <div className='flex w-full'>
        <img className="h-40 w-1/2 object-cover" src="/images/fleet-1.jpeg" alt="content"/>
            <img className='w-1/2 h-72 object-contain object-center object-fill' src='/images/fleet-2.jpeg'/>
        </div>
        <div className='flex'>
            <img src='/images/fleet-3.jpeg'/>
            <img src='/images/fleet-4.jpeg'/>
        </div>
      </div> */}
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 w-full md:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/Fleet-6.png"
                alt="content"
              />
            </div>
          </div>
          <div className="p-4 w-full md:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/fleet-2.jpeg"
                alt="content"
              />
            </div>
          </div>
          <div className="p-4 w-full md:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/fleet-3.jpeg"
                alt="content"
              />
            </div>
          </div>
          {/* <div className="p-4 w-full md:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/swift.jpg"
                alt="content"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
