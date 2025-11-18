import React from "react";
const projects = [
  {
    title: "AI Mentor",
    description: "An intelligent and interactive AI-powered mentorship platform designed to help students and professionals navigate their career journey with ease. The platform offers resume enhancement, cover letter generation, interview preparation (with smart quizzes), and real-time industry insights — all personalized and powered by artificial intelligence",
    tech: ["React.js "," Next.js", "Tailwind CSS","Node.js","PostgreSQL","OpenAI API "],
    link: "https://github.com/Hars33-s/AI-Mentor"
  },
  {
    title: "Portfolio Website",
    description: "A smooth and modern portfolio with animations made for my college project .",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/Hars33-s/AI-Mentor"
  },
  {
    title: "Spotify-clone",
    description: "A Js project which runs as a music player .",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://github.com/Hars33-s/spotify-clone"
  }
];


const Project=()=>{
    return(


<section id="projects" className="w-full px-6 py-20 bg-black text-white">
  <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

  <div className="flex flex-col gap-10 max-w-4xl mx-auto">
    {projects.map((p, i) => (
      <div key={i} className="p-6 border border-white rounded-2xl bg-[#111] shadow-lg hover:scale-[1.02] transition-all">
        <h3 className="text-2xl font-semibold">{p.title}</h3>

        {/* fallback to either field and ensure it's visible */}
        <p className="block text-gray-300 mt-2 text-base leading-relaxed">
          {p.description ?? p.desc ?? "No description provided."}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.map((t, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-800 rounded-lg text-sm">{t}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

    )
}

export default Project;