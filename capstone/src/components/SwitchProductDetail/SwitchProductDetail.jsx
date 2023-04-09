import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Rating, ReviewBlock, DescriptionBlock } from '..';
import { useDispatch, useSelector } from 'react-redux';
import './SwitchProductDetail.css';

const SwitchProductDetail = (productName) => {
    const detailswitch = ["Description", "Review"];
    const [myProfession, setMyProfession] = useState("Description");

   
    var stars = 3;

    //Default Variable for review block
    var customerDefaultName = "Very Cool Name";
    var customerDefaultTitle = "Default Title";
    var customerDefaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
 
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);
 
 

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
                           
                        />
                    )}

                    {myProfession === "Review" && (
                         reviews.length > 0 ? (
                            <ReviewBlock reviews={reviews} />
                          ) : (
                            <p>no reviews yet!</p>
                          )
                    )}

                </p>
            </div>
        </>
    );
};

export default SwitchProductDetail;