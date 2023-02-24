import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Rating, ReviewBlock, FeatureBlock } from '..';

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
    var customerDefaultDescription = "Default Description";

    //Default Variable for review block
    var productFeatureName = "Name";
    var productFeatureType = "Type";
    var productFeatureColor = "Color";

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
                <div>
                    {myProfession === "Description" && (
                        <FeatureBlock
                            productFeatureName={productFeatureName}
                            productFeatureType={productFeatureType}
                            productFeatureColor={productFeatureColor}
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

                </div>
            </div>
        </>
    );
};

export default SwitchProductDetail;