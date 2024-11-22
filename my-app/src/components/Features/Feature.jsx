import React, { useState, useEffect } from "react";
import "./Feature.css";

export default function Feature() {
    const [scroll, setScroll] = useState(0); // State to track the current scroll position
    const scrollAmount = 340; // Amount to scroll for each item
    const maxScroll = 5; // Total number of items in the carousel

    useEffect(() => {   
        const intervalId = setInterval(() => {
            setScroll((prev) => {
                // Reset scroll when reaching the end
                return prev < (maxScroll - 1) * scrollAmount ? prev + scrollAmount : 0;
            });
        }, 4000); // 5 seconds interval

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="feature-main">
                <div className="feature-text">
                    <h2 className="feature-heading">Core Features</h2>
                    <p className="feature-para">
                        Cras ultricies mi eu turpis hendrerit fringilla vestibulum ante ipsum primis in faucibus at cubilia Curae.
                    </p>
                </div>
                <div className="feature-carousal">
                    <div
                        className="carousal-items"
                        style={{
                            transform: `translateX(-${scroll}px)`, // Dynamically translate based on `scroll`
                            transition: "transform 0.5s ease-in-out", // Smooth transition
                        }}
                    >
                        {/* Carousel Items */}
                        <div className="carousal-item img-1">
                            <h5 className="carousal-item-heading">Perfect Solution</h5>
                            <p className="carousal-item-para">
                                Maecenas tempus quam at tellus quam at libero.
                            </p>
                        </div>
                        <div className="carousal-item img-2">
                            <h5 className="carousal-item-heading">Performance</h5>
                            <p className="carousal-item-para">
                                Suspendisse pulvinar augue venenatis sem libero volutpat.
                            </p>
                        </div>
                        <div className="carousal-item img-3">
                            <h5 className="carousal-item-heading">Businesses</h5>
                            <p className="carousal-item-para">
                                Duis leo sed fringilla mauris sit Donec sodales sagittis magna.
                            </p>
                        </div>
                        <div className="carousal-item img-4">
                            <h5 className="carousal-item-heading">Marketing</h5>
                            <p className="carousal-item-para">
                                Cras ultricies mi eu turpis hendrerit ante ipsum faucibus
                            </p>
                        </div>
                        <div className="carousal-item img-5">
                            <h5 className="carousal-item-heading">Digital Design</h5>
                            <p className="carousal-item-para">
                                Integer ante arcu accumsan a consectetuer eget ut mauris.
                            </p>
                        </div>
                        <div className="carousal-item img-6">
                            <h5 className="carousal-item-heading">Best Service</h5>
                            <p className="carousal-item-para">
                                Curabitur ligula sapien tincidunt non euismod imperdiet leo.
                            </p>
                        </div>
                        <div className="carousal-item img-7">
                            <h5 className="carousal-item-heading">Good Performance</h5>
                            <p className="carousal-item-para">
                                Placerat dolor lectus quis orci consectetuer vestibulum elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
