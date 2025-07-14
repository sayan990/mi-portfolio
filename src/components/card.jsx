function Card({ imageUrl, title, description, skills, githubUrl, websiteUrl }) {
    return (
      <>
           <div className="flex-shrink-0 w-72 bg-[#333333] rounded-2xl p-4 shadow-lg">
      <div className="bg-[#333333] rounded-xl p-4 mb-4">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-lg mb-2" />
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white mb-2">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-400 text-gray-800 text-xs px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-row gap-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-400 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors"
        >
            <img src="/GH-logo.png" alt="github" className="w-10 h-6" />
            Github
        </a>
        </div>
        <div className="flex flex-row gap-2">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-400 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-500 transition-colors"
        >
            <img src="/logo_web.jpg" alt="website" className="w-6 h-6" />
            WebSite
        </a>
        </div>
      </div>
    </div>
      </>
    )
  }
  
  export default Card