import React from 'react';
import Rating from '../Rating/Rating';

// import images from '../../constants/images';
import './ReviewBlock.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {replyReview } from '../../features/reviewFeatures/reviewSlice'
import { useNavigate } from "react-router-dom";

const ReviewBlock = ({ review }) => {
    const { user } = useSelector((state) => state.auth);
    const [showForm, setShowForm] = useState(false);
    const [replyText, setReplyText] = useState("");
    const { selectedProduct } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      // call your onClick function here with replyText as a parameter
      console.log("Reply submitted:", replyText);
      setShowForm(false);
      setReplyText("");
    }
    
    const handleCancel = () => {
        setShowForm(false);
        setReplyText("");
    };

    const onClick = (e) =>{
        e.preventDefault()
       
        dispatch(replyReview({"reply":replyText, "reviewId":review._id}))
        window.location.reload();
    }

    return (
        // <div className='review'>
        //     <table className='review__table'>
        //         <tbody>
        //             <tr>
        //                 <td>
        //                     <p>
        //                         {customerDefaultName}
        //                     </p>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     <Rating starRating={stars} className="review__rating" />
        //                     {customerDefaultTitle}
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <td colSpan={2}>
        //                     {customerDefaultDescription}
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div >

        <div className='review'>
            <div className='review__header'>
                <div className="review__rating">
                    <Rating starRating={review.rating} />
                </div>

                <h3 className='review__header-title'>
                    {review.title}
                </h3>
            </div>

            <p className='review__detail'>
                {review.comment}
            </p>

            <p className='review__name'>
                {review.name}
            </p>
            {user.user.type === "Admin" && review.reply === "false" &&
                <div>
                    <button onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Hide Reply Form" : "Reply"}
                    </button>
                    {showForm && (
                        <form onSubmit={handleSubmit}>
                            <label>
                                Reply:
                                <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                            </label>
                            <button type="submit" onClick={onClick}>Reply</button>
                            <button type="button" onClick={handleCancel}>Cancel</button>
                        </form>
                    )}
                </div>
            }


            {review.reply !== "false" &&
                <div>
                    <h4 className='review__header-title'>
                        Biojewelry Response
                    </h4>
                    <p className='review__detail'>
                        {review.reply}
                    </p>
                </div>
            }


        </div>

    );
};

export default ReviewBlock;