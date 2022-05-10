import React from "react";
import '../assets/styles/pagenot.css';

function PageNot(){

    return(
        <>
        <body>
        <div className="error-container">
        <h1 >404</h1>
        <p className="return">
            Take me back to <a href="../">EShop</a>
        </p>
        </div>
        </body>
        </>
    )
};
export default PageNot;