import React from "react";
import "./category.css";
import Search from "../../Search/search"

function Category() {
    
      return(
        <div className="categoryBox">
            <ul>
                <li><a href="#">Actor</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Sport</a></li>
                <li><a href="#">Entertainment</a></li>
            </ul>
            <Search></Search>
        </div>
    
      )
    
  }
  
  export default Category;