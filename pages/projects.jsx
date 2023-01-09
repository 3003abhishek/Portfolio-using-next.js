import Link from "next/link";
import React from "react";

function Projects({data}){
   let {items}=data;
   
    return(
        <div>
         <h1>Projects</h1>

         <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr",gridTemplateRows:"repeat(4,1fr",height:"800px"}}>

            {items.map((el)=>{
             return(
                <div key={el.id}>

                 <Link href={el.html_url}><h3>{el.name}</h3></Link>
                 <br></br>
                 <Link href={el.html_url}>fork_count:{el.forks}</Link>
                 <br></br>
                 <Link href={el.html_url}>star_count:{el.stars}0</Link>
                 <br></br>
                 <Link href={el.html_url}>{el.language}</Link>
                 <br></br>

                </div>
             )
            })}
         </div>
        </div>
        
    )
}




export async function getServerSideProps(context) {

    let res=await fetch("https://api.github.com/search/repositories?q=user:3003abhishek+fork:true&sort=updated&per_page=10&type=Repositories");
    let data=await res.json();
    
    return {
      props: {
        data:data
      }, 
    }
  }





export default Projects;







