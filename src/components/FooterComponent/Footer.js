
import React from "react";
import '../../assets/styles/footer.css';


function Foot(){
  const handleCLick=()=>{
    window.location.reload();
  }
    return(
        <>
        <div className="footer"
        style={{
          textAlign: 'center',
          
        }}
      >
        Eshop ©2022 Created by Alfina <a onClick={handleCLick}>S</a>
      </div>
        </>
    )
}

export default Foot;