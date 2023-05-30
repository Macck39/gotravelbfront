import React from "react";

function ContactSection() {
  return (
    <div>
      {/* <section className="py-6 dark:bg-gray-600 dark:text-gray-50 bg-contain" style={{backgroundImage:'url("/images/taxi-bg.jpg")'}}> */}
      <section className="py-6 dark:bg-gray-600 dark:text-gray-50">

        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
          Experience Great Support
          </h1>
          <p className="text-xl font-medium text-center">
          Our team comes with several years of industry experience, and comprise of a highly motivated set of specialists. We are a experienced, dedicated and energetic team
          </p>
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-indigo-500 text-white text-uppercase">
            Reach Our Support Team
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
