import React, { useState } from "react";
import "./FAQ.css"

import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineQuestionMark } from "react-icons/md";


export default function FAQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Black Edge Tech?",
            answer: "Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement.",
        },
        {
            question: "What services do you offer?",
            answer: "We offer web development, designing, and customization services for your business needs.",
        },
        {
            question: "How can I contact you?",
            answer: "You can contact us via email or through our website's contact form.",
        },
    ];

    return (
        <>
            <div className="faq-main">
                <div className="faq-left">
                    <h5 className="faq-primary-heading">FAQ</h5>
                    <h2 className="faq-secondary-heading">Most common question about our services</h2>
                    <button className="faq-btn">View All</button>
                </div>
                <div className="faq-right">
                    <div className="faq-container">
                        <div className="faq-items">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <div
                                        className={`faq-question ${activeIndex === index ? "active" : ""}`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div style={{alignItems:"center" , display:"flex", gap:"20px"}}>
                                        <MdOutlineQuestionMark size="20px" className="quesion-mark"/> 
                                        {faq.question}
                                        </div>

                                        <span className="faq-icon">{activeIndex === index ? <FaAngleDown/>: <FaAngleRight/>}</span>
                                    </div>
                                    {activeIndex === index && (
                                         <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                                         <p>{faq.answer}</p>
                                       </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
