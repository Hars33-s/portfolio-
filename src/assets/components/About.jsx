import React from "react";

const About=()=>{
    return(
       <section id="about" className="w-full min-h-screen flex items-center bg-black text-white justify-center px-8 py-20 ">
<div className="flex flex-col gap-4 max-w-3xl ">
<h2 className="text-4xl  text-white font-bold mb-4 justify-start">About Me</h2>


<span className="text-lg leading-relaxed text-white/50">
I'm a Computer Science Engineering student at Rungta College of Engineering and Technology with a strong passion for building scalable web applications. My expertise lies in the MERN stack, combined with hands-on experience in cloud technologies and AI integration.
</span>


<span className="text-lg leading-relaxed text-white/50">
As a member of the Google Developer Students Club, I've had the opportunity to mentor peers and work on impactful projects. I completed an AICTE-Edunet Foundation Front-End Web Development internship under IBM SkillsBuild, where I gained practical experience in real-world project development.
</span>


<span className="text-lg leading-relaxed text-white/50">
My interests span across MERN stack development, industry networking, teaching others, learning finance, and staying updated with the latest tech trends through blogs and continuous learning. I'm driven by problem-solving and delivering high-quality solutions that make a difference.
</span>
<div className="flex w-125 h-25 bg-black justify-between"><div className=" flex flex-col h-25 w-50 radius-[20px]  pl-7 gap-1 items-start justify-center border border-white rounded-xl ">
<span className="h-5 text-[15px]
"  > Location</span>
<span className="h-8 text-[20px]"> Bhilai, CG </span>
</div>
<div className="flex flex-col h-25 w-50 radius-[20px] rounded-xl border border-white pl-7 gap-1 items-start justify-center">
<span> Graduation</span>
<span> July, 2027</span>
</div>
</div>  </div>
</section>
    )
}

export default About;