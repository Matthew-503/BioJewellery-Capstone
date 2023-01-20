import React from 'react';
import { BsStar, BsFillStarFill } from 'react-icons/bs';
// import images from '../../constants/images';
import './Rating.css';

const Rating = ({ starRating }) => {
    var stars = Array(5);
    for (let i = 0; i < stars.length; i++){
        stars[i] = starRating >= (i + 1) ? <BsFillStarFill /> : <BsStar />
    }
    return (
        stars
    );
};

export default Rating;