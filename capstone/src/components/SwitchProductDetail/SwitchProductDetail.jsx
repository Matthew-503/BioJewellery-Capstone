import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Rating, ReviewBlock, DescriptionBlock } from '..';

import './SwitchProductDetail.css';

const SwitchProductDetail = () => {
    const detailswitch = ["Description", "Review"];
    const [myProfession, setMyProfession] = useState("Description");

    var productName = null;
    var price = null;
    var description = null;
    var stars = 3;

    //Default Variable for review block
    var customerDefaultName = "Very Cool Name";
    var customerDefaultTitle = "Default Title";
    var customerDefaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    
    return (
        <>
             <div className="switch">
                <br />
                <div
                    className="switch_tab"
                    role="group"
                    aria-label="Basic example"
                >
                    {detailswitch.map(profession => (
                        <button
                            type="button"
                            key={profession}
                            className={"switch__button"}
                            onClick={() => setMyProfession(profession)}
                        >
                            {profession}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col text-center">
                <p>
                    {myProfession === "Description" && (
                        <DescriptionBlock
                            productFeatureName="Name"
                            productFeatureType="Type"
                            productFeatureColor="Type"
                            reviewStarRating={stars}
                        />
                    )}

                    {myProfession === "Review" && (
                        <ReviewBlock
                            customerUsername={customerDefaultName}
                            customerDescription={customerDefaultDescription}
                            customerTitle={customerDefaultTitle}
                            reviewStarRating={stars}
                        />
                    )}

                </p>
            </div> 
        </>
    );
};

export default SwitchProductDetail;