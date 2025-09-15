type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  codeLink: string;
  demoLink?: string;
  techs: string[];
};

function ProjectCard({
  title,
  description,
  image,
  codeLink,
  demoLink,
  techs,
}: ProjectCardProps) {
  return (
    <article className="relative group bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] min-h-[300px]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition duration-300 group-hover:blur-sm"
      />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
      </div>

      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center z-10">
        <h4 className="text-lg font-semibold mb-2">Tecnologías:</h4>
        <ul className="flex flex-wrap justify-center gap-2 mb-4">
          {techs.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-800 border border-gray-300 px-2 py-1 rounded text-sm font-mono cursor-default"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition shadow-md font-semibold cursor-pointer hover:scale-105"
          >
            Ver código en GitHub
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition shadow-md font-semibold cursor-pointer hover:scale-105"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
