import React from "react";


const Hero=()=>{
return(
    <section className="w-full h-screen flex flex-col items-center bg-black">
<nav className="w-full h-17 fixed top-0 left-0 flex items-center justify-between px-8 py-4  shadow-md bg-black border-b border-white z-50">
{/* Left Section */}
<h1 className="text-2xl font-bold cursor-pointer text-white ">Portfolio</h1>


{/* Right Section */}
<ul className="flex gap-8 text-lg font-medium ">
<li>
<a href="#about" className="hover:text-blue-600 transition-colors text-white">About</a>
</li>
<li>
<a href="#projects" className="hover:text-blue-600 transition-colors text-white   ">Projects</a>
</li>
<li>
<a href="#contact" className="hover:text-blue-600 transition-colors text-white ">Contact</a>
</li>
</ul>
</nav>
<div className=" max-w-2xl h-screen flex flex-col  items-center justify-center gap-4 px-20 mt-20">
<div className="flex flex-col gap-2">
<span className="text-xl font-semibold text-white">Full Stack Website Developer </span>
<span className="text-lg text-gray-600">Computer Science student passionate about full-stack development, AI integration, and creating impactful solutions using modern web technologies. </span>
</div>


<a
href="YOUR_AXURE_BLOB_LINK_HERE"
download
className="w-fit px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
>
Download Resume
</a>
</div>
</section>
)
}

export default Hero;