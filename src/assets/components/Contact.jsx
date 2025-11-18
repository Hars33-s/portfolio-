import React from "react";

const Contact=()=>{
    return(
 <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white">
  
  {/* Heading */}
  <h2 className=" font-bold mb-12 text-center">
    <span className="block text-4xl p-2 ">Get In Touch</span>
    <span className="block text-3xl p-2">Contact Me</span>
  </h2>

  {/* Contact Items */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">

    {/* Email */}
    <div className="p-6 border border-white rounded-xl shadow-md hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold mb-2">Email</h3>
      <p className="text-lg">
        <a href="mailto:your-chhabdaharsh0@gmail.com" className="hover:text-blue-500">
         chhabdaharsh0@gmail.com
        </a>
      </p>
    </div>

    {/* GitHub */}
    <div className="p-6 border border-white rounded-xl shadow-md hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold mb-2">GitHub</h3>
      <p className="text-lg">
        <a href="https://github.com/Hars33-s" target="_blank" className="hover:text-blue-500">
          github.com/Hars33-s
        </a>
      </p>
    </div>

    {/* LinkedIn */}
    <div className="p-6 border border-white rounded-xl shadow-md hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
      <p className="text-lg">
        <a href="https://www.linkedin.com/in/harsh-chhabda-b53ba834b" target="_blank" className="hover:text-blue-500">
          linkedin.com/in/harsh chhabda
        </a>
      </p>
    </div>

  </div>

</section>

    )
}

export default Contact;