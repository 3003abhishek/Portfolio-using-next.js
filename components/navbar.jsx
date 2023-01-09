import React from "react";
import Link from "next/link"
function Navbar(){
    return (
        <div style={{display:"flex",gap:"100px"}}>
            <div><Link href="/">Abhishek Jha</Link></div>
        <div>  <Link href="./projects">Projects</Link></div>
      
        


        </div>
    )
}

export default Navbar;
//GET https://api.github.com/users/3003abhishek