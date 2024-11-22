import React, { useState, useEffect } from "react";
import img1 from "../../assets/img-1.jpg"
import img2 from "../../assets/img-2.jpg"
import img3 from "../../assets/img-3.jpg"
import img4 from "../../assets/img-4.jpg"
import img5 from "../../assets/img-5.jpg"
import img6 from "../../assets/img-6.jpg"
import img7 from "../../assets/img-7.jpg"

export default function Feature() {
  const [scroll, setScroll] = useState(0); // State to track the current scroll position
  const [scrollAmount, setScrollAmount] = useState(240); // Default scroll amount
  const maxScroll = 5; // Total number of items in the carousel

  useEffect(() => {
    // Adjust scroll amount based on screen size
    const updateScrollAmount = () => {
      if (window.innerWidth < 768) {
        setScrollAmount(340); // Increase scroll for small screens
      } else {
        setScrollAmount(240); // Default scroll for larger screens
      }
    };

    updateScrollAmount(); // Set initial value
    window.addEventListener("resize", updateScrollAmount); // Update on window resize

    return () => window.removeEventListener("resize", updateScrollAmount); // Cleanup
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScroll((prev) => {
        return prev < (maxScroll - 1) * scrollAmount ? prev + scrollAmount : 0;
      });
    }, 4000); // 4 seconds interval

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [scrollAmount]);

  return (
    <div className="flex flex-col items-center px-4">
      {/* Text Section */}
      <div className="flex flex-col items-center mb-5 text-center">
        <h2 className="text-2xl font-normal text-gray-800 mb-0">Core Features</h2>
        <p className="text-gray-500 w-[20rem] md:w-[30rem] sm:w-[20rem] text-base sm:text-sm">
          Cras ultricies mi eu turpis hendrerit fringilla vestibulum ante ipsum primis in faucibus at cubilia Curae.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-[20rem] lg:w-[45rem] flex">
        <div
          className="flex gap-5 justify-center items-center"
          style={{
            transform: `translateX(-${scroll}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {/* Carousel Items */}
          {[
            { img: img1, heading: "Perfect Solution", para: "Duis leo sed fringilla mauris sit Donec sodales sagittis magna." },
            { img: img2, heading: "Performance", para: "Suspendisse pulvinar augue venenatis sem libero volutpat." },
            { img: img3, heading: "Businesses", para: "Duis leo sed fringilla mauris sit Donec sodales sagittis magna." },
            { img: img4, heading: "Marketing", para: "Cras ultricies mi eu turpis hendrerit ante ipsum faucibus" },
            { img: img5, heading: "Digital Design", para: "Integer ante arcu accumsan a consectetuer eget ut mauris." },
            { img: img6, heading: "Best Service", para: "Curabitur ligula sapien tincidunt non euismod imperdiet leo." },
            { img: img7, heading: "Good Performance", para: "Placerat dolor lectus quis orci consectetuer vestibulum elit." },
          ].map(({ img, heading, para }, index) => (
            <div
              key={index}
              className={`relative bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center w-[20rem] h-[15rem] sm:w-[14rem] sm:h-[10rem] overflow-hidden rounded-lg`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full  bg-black bg-opacity-30"></div>
              <div className="relative z-10 px-4">
                <h5 className="text-lg font-normal text-white mb-2 transition-transform duration-300 transform hover:translate-y-[-10px]">
                  {heading}
                </h5>
                <p className="text-gray-300 text-sm sm:text-xs w-[13rem] sm:w-[10rem] leading-[25.2px] transition-transform duration-300 transform hover:translate-y-[-10px]">
                  {para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
