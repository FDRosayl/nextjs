import React from "react"
import Link from "next/link"
 function Home(){
  return (
   <body>
    <h1>Home</h1>
<Link href={"/about"}><h2>about</h2></Link>
<button ><h3>blog</h3></button>
<h4>contact</h4>
<h5>cource</h5>
</body>
   
   
      
  
  )
  }
  export default Home