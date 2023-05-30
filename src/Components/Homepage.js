import React from 'react'
import ContactSection from './ContactSection'
import Forms from './Forms'
import OurMission from './OurMission'
import Testimonals from './Testimonals'

function Hompage() {
  return (
    <>
      <Forms />

      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/swift.jpg" alt="content" />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Easy Booking</h1>
                <p className="leading-relaxed mb-3">Booking a local taxi with us is very easy, from anywhere, at any time by web or phone & we are also available Online Chat 24/7.</p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/bg-car.jpg  " alt="content" />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">24/7 Customer Care</h1>
                <p className="leading-relaxed mb-3">A dedicated 24x7 customer support team always at your service to help solve any problem.</p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16  rounded-lg overflow-hidden text-center relative">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/taxi-bg.jpg" alt="content" />

                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">24/7 Availability</h1>
                <p className="leading-relaxed mb-3">24/7 Local Drop Cabs in Bangalore at affordable prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonals />
      <OurMission />

      <ContactSection />
    </>
  )
}

export default Hompage
