import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testimonals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const feedback = [
    {
      id: 1,
      name: 'Kishore Kumar Singh K',
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      id: 2,
      name: 'Kavya Dhurv',
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      id: 3,
      name: 'Gopal',
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
  ];
  return (
    <div className="md:ml-10 mx-4 md:mx-0">
      <div className="md:text-4xl text-center font-semibold mb-4">
        What our Customers say
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 md:w-3/5 flex justify-center items-center mb-8">
          <Slider
            {...settings}
            className="w-3/4 h-fit rounded-3xl border-2 border-blue-400 shadow-xl"
          >
            {feedback.map((comm) => (
              <div key={comm.id} className="p-4 md:py-10">
                {/* <div className="flex justify-center md:justify-start mb-4">
                  <img
                    className="md:h-13 md:w-13 rounded-full h-12 w-12"
                    src={comm.profilePic}
                    alt=""
                  />
                </div> */}
                <div className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
                </div>
                <p className="text-xs md:text-base font-semibold overflow-clip">
                  {comm.comment}
                </p>
                <p className="text-sm text-center mt-2 italic">- {comm.name}</p>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="hidden w-2/5 md:block relative overflow-hidden">
          <img
            className="w-full transform translate-x-36"
            src="images/connection.png"
            alt="Connection-pic"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Testimonals;