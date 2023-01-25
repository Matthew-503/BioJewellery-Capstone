import React from 'react';
import './Article.css';
import { Link, useParams } from "react-router-dom"

const Article = ({ imgUrl, text, link }) => {
    const {id} = useParams()
    return (
        <>
            <div className="gpt3__blog-container_article">
                <div className="gpt3__blog-container_article-image">
                    <img src={imgUrl} alt="blog" />

                    <div class='text-on-image'>
                        <h3 >
                            {text}
                        </h3>
                    </div>

                    <button class='click__button'>
                        <Link to={link}>Click</Link>
                    </button>

                </div>
            </div>

            {/* <div className="head-text">
                <div className="head-image">
                    <img src={imgUrl} alt="blog" />
                </div>
                <div class='text-on-image'>
                    <h3> Welcome to my Blog </h3>
                    <p> FREEEEDOM </p>
                </div>
            </div> */}
        </>

    )
}

export default Article