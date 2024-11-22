import React,{useState , useEffect} from 'react'
import "./Firewall.css"

import img1 from "../../assets/firewall-1.png"
import img2 from "../../assets/firewall-2.png"
import img3 from "../../assets/firewall-3.png"
import img4 from "../../assets/firewall-4.png"
import img5 from "../../assets/firewall-5.png"

export default function Firewall() {
    const [scroll, setScroll] = useState(0); 
    const scrollAmount = 340; 
    const maxScroll = 3; 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setScroll((prev) => {
               
                return prev < (maxScroll - 1) * scrollAmount ? prev + scrollAmount : 0;
            });
        }, 4000);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="firewall-main">
                <div className="firewall-carousal" style={{
                    transform: `translateX(-${scroll}px)`, // Dynamically translate based on `scroll`
                    transition: "transform 0.5s ease-in-out", // Smooth transition
                }}>
                    <div className="firewall-carousal-items">
                        <img src={img1} alt="" className='firewall-img' style={{ width: "115px" }} />
                        <h4 className="firewall-carousal-item-heading">IT Design</h4>
                        <p className="firewall-carousal-item-para">
                            Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
                        </p>
                        <a className="firewall-carousal-item-btn">Discover More</a>
                    </div>
                    <div className="firewall-carousal-items">
                        <img src={img2} alt="" className='firewall-img' />
                        <h4 className="firewall-carousal-item-heading">Data Security</h4>
                        <p className="firewall-carousal-item-para">
                            Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
                        </p>
                        <a className="firewall-carousal-item-btn">Discover More</a>
                    </div>
                    <div className="firewall-carousal-items">
                        <img src={img3} alt="" className='firewall-img' style={{ width: "138px" }} />
                        <h4 className="firewall-carousal-item-heading">Business Reform</h4>
                        <p className="firewall-carousal-item-para">
                            Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
                        </p>
                        <a className="firewall-carousal-item-btn">Discover More</a>
                    </div>
                    <div className="firewall-carousal-items">
                        <img src={img4} alt="" className='firewall-img' />
                        <h4 className="firewall-carousal-item-heading">Firewall Advance</h4>
                        <p className="firewall-carousal-item-para">
                            Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
                        </p>
                        <a className="firewall-carousal-item-btn">Discover More</a>
                    </div>
                    <div className="firewall-carousal-items">
                        <img src={img5} alt="" className='firewall-img' />
                        <h4 className="firewall-carousal-item-heading">IT Management</h4>
                        <p className="firewall-carousal-item-para">
                            Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.
                        </p>
                        <a className="firewall-carousal-item-btn">Discover More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
