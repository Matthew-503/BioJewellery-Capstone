import React from "react";
import { Stack } from "@mui/material";
import { images } from '../../constants';
import { empAccountCategory } from '../../constants';
import './EmpSidebar.css'

const EmpSidebar = ({ selectedCategory, setSelectedCategory }) => (
    <div className="empaccount__sidebar">
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

                <div className="empaccount__sidebar-img">
                    <img src={images.avatar} alt="G_overlay" />
                    <h1>
                        Ya Boi EMP
                    </h1>
                </div>

                {empAccountCategory.map((category) => (
                    <button
                        className="category-btn empaccount__grid-item"
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            background: category.name === selectedCategory && "#bcf6b1",
                            color: "#000000",
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e" }} className='empaccount__grid-item'>
                            {category.icon}
                        </span>
                        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='empaccount__grid-item empsidebar__content'>
                            {category.name}
                        </span>
                    </button>
                ))}
            </Stack>
        </div>
    </div>
);

export default EmpSidebar;