// import React from "react";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <StContainer>
//     <div>Not To Do List</div>
//     <div>React</div>
//     </StContainer>
//   );
// };

// export default Header;

// const StContainer = styled.div`
//   border: 1px solid #ddd;
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
//   margin-bottom: 24px;
//   background-color: tomato;
// `;

import React from "react";

const Header = () => {
    return (
        <div style={{
            height: "60px", border: "1px solid #ddd",justifyContent: "space-between", 
            display:"flex", color:"white", fontSize:"30px", 
            alignItems:"center", backgroundColor:"tomato"}}>
        <div style={{marginLeft:"20px"}}><a href="/" style={{color:"white", textDecoration: "none"}}>What's your phone number?</a></div>
        <div style={{fontSize:"20px", marginRight:"20px"}}>React</div>
        </div>
    )
} 
export default Header;