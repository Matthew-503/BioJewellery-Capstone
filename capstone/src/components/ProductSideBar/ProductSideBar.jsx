import React from "react";
import { Stack } from "@mui/material";
import {  useDispatch } from "react-redux";
import { sortCategory } from '../../constants';
import './ProductSideBar.css'
import { sortProducts } from '../../features/productFeatures/productSlice';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    const dispatch = useDispatch()
    return(
    <div className="sidebar">
        <div class="grid-container">
            <Stack
                direction="row"
                sx={{
                    // overflowY: "auto",
                    height: 'auto',
                    flexDirection: { md: "column" },
                    alignItems: 'right',
                }}
            >
                {sortCategory.map((category) => (
                    <button
                        className="category-btn grid-item"
                        name={category.name}
                        onClick={() => {
                            setSelectedCategory(category.name)
                            dispatch(sortProducts(category.name))
                        }}
                        style={{
                            background: category.name === selectedCategory && "#bcf6b1",
                            color: "#000000",
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e" }} className='grid-item'>
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='grid-item sidebar__content'>
                            {category.name}
                        </span>
                    </button>
                ))}
            </Stack>
        </div>
    </div>
    )
    };

export default SideBar;