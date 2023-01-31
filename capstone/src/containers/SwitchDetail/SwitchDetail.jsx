import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Rating, ReviewBlock, FeatureBlock } from '../../components';

import './SwitchDetail.css';

const Zoom = () => {
    const detailswitch = ["Feature", "Review"];
    const [myProfession, setMyProfession] = useState("Feature");

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
                <p>
                    {myProfession === "Feature" && (
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

                </p>
            </div>
        </>
    );
};

// const ProfessionImage = ({ src }) => {
//     const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//     return (
//         <animated.img
//             src={src}
//             alt=""
//             style={{ width: "250px", height: "250px", ...props }}
//         />
//     );
// };

export default Zoom;