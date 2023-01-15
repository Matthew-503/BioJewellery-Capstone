import React from 'react';
import './Blog.css';
import { Article } from '../../components';
import { blog02, blog03, blog04, blog05 } from './imports.js';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupB">
                    <Article
                        imgUrl={blog02}
                        text="Popular"
                    />

                    <Article
                        imgUrl={blog03}
                        text="Trending"
                    />

                    <Article
                        imgUrl={blog04}
                        text="Most Saved"
                    />

                    <Article
                        imgUrl={blog05}
                        text="On Sale"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog