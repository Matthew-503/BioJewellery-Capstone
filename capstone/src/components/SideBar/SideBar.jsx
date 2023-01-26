// import React from "react";
// import { Stack } from "@mui/material";

// import { categories } from '../../constants';
// import './SideBar.css'

// const SideBar = ({ selectedCategory, setSelectedCategory }) => {
//     <div className="sidebar">
//         <div class="grid-container">
//             <Stack
//                 direction="row"
//                 sx={{
//                     overflowY: "auto",
//                     height: { sx: "auto", md: "95%" },
//                     flexDirection: { md: "column" },
//                 }}
//             >
//                 {categories.map((category) => (
//                     <button
//                         className="category-btn grid-item"
//                         onClick={() => setSelectedCategory(category.name)}
//                         style={{
//                             background: category.name === selectedCategory && "#FC1503",
//                             color: "#000000",
//                         }}
//                         key={category.name}
//                     >
//                         <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e", marginRight: "15px" }} className='grid-item'>
//                             {category.icon}
//                         </span>
//                         <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }} className='grid-item sidebar__content'>
//                             {category.name}
//                         </span>
//                     </button>
//                 ))}
//             </Stack>
//         </div>

//     </div>
// };


import React from "react";
import { Stack } from "@mui/material";

import { categories } from '../../constants';
import './SideBar.css'

const Categories = ({ selectedCategory, setSelectedCategory }) => (
    <div className="sidebar">
        <div class="grid-container">
            <Stack
                direction="row"
                sx={{
                    overflowY: "auto",
                    height: { sx: "auto", md: "95%" },
                    flexDirection: { md: "column" },
                }}
            >
                {categories.map((category) => (
                    <button
                        className="category-btn grid-item"
                        onClick={() => setSelectedCategory(category.name)}
                        style={{
                            background: category.name === selectedCategory && "#bcf6b1",
                            color: "#000000",
                        }}
                        key={category.name}
                    >
                        <span style={{ color: category.name === selectedCategory ? "black" : "#072d2e", marginRight: "15px" }} className='grid-item'>
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
);

export default Categories;