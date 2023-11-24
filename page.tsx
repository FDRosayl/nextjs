/*import React from "react"
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
  export default <Home></Home*/
import React from "react"
import Link from 'next/link'
import image from 'next/image' 
function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog">Blog Post</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
        </li>

      <li>
        <Link href="/cource">cource</Link>
        </li>
     
    </ul>

  )
}
 
export default Home
