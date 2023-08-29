import React from "react";
import AboutPicture from "../pictures/unsplash_-uHVRvDr7pg.png";
import Establishment from "../pictures/Rectangle 44.png";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={AboutPicture} alt="Image"/>
                    </div>
                    <div className="about-description">
                        <h2>About Us</h2>
                        <p>
                            JD Bank is a leading financial institution dedicated to providing
                            top-notch banking solutions. With a commitment to excellence and
                            innovation, we offer a wide range of services to meet the diverse
                            needs of our customers. At JD Bank, we take pride in being a
                            leading financial institution committed to delivering exceptional
                            banking solutions. Our journey is built on a foundation of
                            excellence, innovation, and a strong dedication to meeting the
                            diverse needs of our valued customers. With an unwavering focus on
                            client satisfaction, we strive to exceed expectations by providing
                            a comprehensive range of services that empower individuals,
                            families, and businesses to achieve their financial aspirations.
                        </p>
                    </div>
                </div>

                <div className="establishment-section">
                    <div className="establishment-content">
                        <div className="establishment-description">
                            <h2>Establishment</h2>
                            <p>
                                Founded in 1995, JD Bank has rapidly grown to become a trusted
                                partner for individuals and businesses. Our mission is to
                                empower our clients to achieve their financial goals through
                                strategic planning, personalized services, and cutting-edge
                                technology, we have been instrumental in helping our customers
                                turn their aspirations into reality. Guided by integrity,
                                transparency, and a deep commitment to community, we continue to
                                chart new paths in the financial landscape, ensuring that our
                                clients' financial well-being remains our top priority.
                            </p>
                        </div>
                        <div className="establishment-image">
                            <img src={Establishment} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
