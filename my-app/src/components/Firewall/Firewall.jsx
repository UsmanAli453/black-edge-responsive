import React, { useState, useEffect } from "react";
import img1 from "../../assets/firewall-1.png";
import img2 from "../../assets/firewall-2.png";
import img3 from "../../assets/firewall-3.png";
import img4 from "../../assets/firewall-4.png";
import img5 from "../../assets/firewall-5.png";

export default function Firewall() {
  const [scroll, setScroll] = useState(0);
  const scrollAmount = 340; // Amount to scroll for each item
  const [maxScroll, setMaxScroll] = useState(3);

  useEffect(() => {
    const updateMaxScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        setMaxScroll(5);

      } else if (screenWidth <= 1024) {
        setMaxScroll(4);

      } else {
        setMaxScroll(3);

      }
    };

    updateMaxScroll(); // Set initially

    window.addEventListener("resize", updateMaxScroll); // Listen to resize events
    return () => window.removeEventListener("resize", updateMaxScroll); // Cleanup listener
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScroll((prev) =>
        prev < (maxScroll - 1) * scrollAmount ? prev + scrollAmount : 0
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [maxScroll, scrollAmount]);

  return (
    <div className="overflow-hidden flex w-[20rem] md:w-[63rem] sm:w-[20rem] mx-auto my-4">
      <div
        className="flex gap-5 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${scroll}px)`,
        }}
      >
        <div
          className="flex flex-col justify-between items-center text-center p-5 w-[20rem] h-[30rem] shadow-md border border-gray-300 rounded-lg"
        >
          <img src={img1}  className="w-[110px] mb-4" />

          <div className="flex flex-col flex-grow items-center">
            <h4 className="text-xl font-semibold text-[#0e2b3d] mb-2">IT Design</h4>
            <p className="text-sm text-gray-600 leading-6 w-[18rem] mb-4">Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.</p>
          </div>

          <a
            href="#"
            className="px-8 py-3 border border-gray-300 rounded-full text-[#0e2b3d] font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>
        <div
          className="flex flex-col justify-between items-center text-center p-5 w-[20rem] h-[30rem] shadow-md border border-gray-300 rounded-lg"
        >
          <img src={img2}  className="w-[150px] mb-4" />

          <div className="flex flex-col flex-grow items-center">
            <h4 className="text-xl font-semibold text-[#0e2b3d] mb-2">Data Security</h4>
            <p className="text-sm text-gray-600 leading-6 w-[18rem] mb-4">Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.</p>
          </div>

          <a
            href="#"
            className="px-8 py-3 border border-gray-300 rounded-full text-[#0e2b3d] font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>
        <div
          className="flex flex-col justify-between items-center text-center p-5 w-[20rem] h-[30rem] shadow-md border border-gray-300 rounded-lg"
        >
          <img src={img3}  className="w-[140px] mb-4" />

          <div className="flex flex-col flex-grow items-center">
            <h4 className="text-xl font-semibold text-[#0e2b3d] mb-2">Business Reform</h4>
            <p className="text-sm text-gray-600 leading-6 w-[18rem] mb-4">Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.</p>
          </div>

          <a
            href="#"
            className="px-8 py-3 border border-gray-300 rounded-full text-[#0e2b3d] font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>
        <div
          className="flex flex-col justify-between items-center text-center p-5 w-[20rem] h-[30rem] shadow-md border border-gray-300 rounded-lg"
        >
          <img src={img4}  className="w-[150px] mb-4" />

          <div className="flex flex-col flex-grow items-center">
            <h4 className="text-xl font-semibold text-[#0e2b3d] mb-2">Firewall Advance</h4>
            <p className="text-sm text-gray-600 leading-6 w-[18rem] mb-4">"Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.</p>
          </div>

          <a
            href="#"
            className="px-8 py-3 border border-gray-300 rounded-full text-[#0e2b3d] font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>
        <div
          className="flex flex-col justify-between items-center text-center p-5 w-[20rem] h-[30rem] shadow-md border border-gray-300 rounded-lg"
        >
          <img src={img5}  className="w-[170px] mb-4" />

          <div className="flex flex-col flex-grow items-center">
            <h4 className="text-xl font-semibold text-[#0e2b3d] mb-2">IT Management</h4>
            <p className="text-sm text-gray-600 leading-6 w-[18rem] mb-4">Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.</p>
          </div>

          <a
            href="#"
            className="px-8 py-3 border border-gray-300 rounded-full text-[#0e2b3d] font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            Discover More
          </a>
        </div>



      </div>
    </div>
  );
}
