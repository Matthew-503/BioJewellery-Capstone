import React from 'react';
import './Article.css';

const Article = ({ imgUrl, text }) => {
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
                        Click
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