import Card from './card';

function Experience() {
    return (
      <>
       <div className=" min-h-screen flex flex-col items-center py-10">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10 self-start ml-20">Experiencia</h2>
      <div className="flex items-center justify-center gap-8">
        <button className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-800 hover:bg-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex gap-6">
          <Card imageUrl="/img_home.png" title="Project 1" description="Description 1" skills={["HTML", "CSS", "JavaScript", "react", "nodejs"]} githubUrl="https://github.com" websiteUrl="https://example.com" />
          <Card imageUrl="/img_home.png" title="Project 2" description="Description 2" skills={["HTML", "CSS", "JavaScript", "react", "nodejs"]} githubUrl="https://github.com" websiteUrl="https://example.com" />
          <Card imageUrl="/img_home.png" title="Project 3" description="Description 3" skills={["HTML", "CSS", "JavaScript", "react", "nodejs"]} githubUrl="https://github.com" websiteUrl="https://example.com" />
        </div>

        <button className="w-12 h-12 flex items-center justify-center border border-gray-500 rounded-lg text-gray-800 hover:bg-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
      </>
    )
  }
  
  export default Experience