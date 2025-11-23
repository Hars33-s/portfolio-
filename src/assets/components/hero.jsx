import React from "react";


const Hero=()=>{
return(
    <section className="w-full h-screen flex flex-col items-center bg-black">
<nav className="w-64 h-screen fixed top-0 left-0 flex flex-col  px-8 py-6 shadow-md bg-black border-r border-white z-50">

  {/* Top Section */}
  <h1 className="text-2xl font-bold cursor-pointer text-white">
    Harsh Chhabda
  </h1>
  <h2 className="text-xl text-white/50   cursor-pointer   "> CSE Student </h2>

  {/* Middle Nav Links */}
  <ul className="flex flex-col gap-6 text-lg font-medium mt-10">
    <li>
      <a href="#about" className="hover:text-blue-600 transition-colors text-white">
        About
      </a>
    </li>
    <li>
      <a href="#projects" className="hover:text-blue-600 transition-colors text-white">
        Projects
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-blue-600 transition-colors text-white">
        Contact
      </a>
    </li>
  </ul>

</nav>

<div className=" max-w-2xl h-screen flex flex-col  items-center justify-center gap-4 px-20 mt-20">
<div className="flex flex-col gap-2">
<span className="text-xl font-semibold text-white">Full Stack Website Developer </span>
<span className="text-lg text-gray-600">Computer Science student passionate about full-stack development, AI integration, and creating impactful solutions using modern web technologies. </span>
</div>


<a
href="
https://rohitresume.blob.core.windows.net/harshcv/Harsh chhabda resume.pdf"
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