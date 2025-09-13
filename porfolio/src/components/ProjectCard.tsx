type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  codeLink: string;
  demoLink: string;
};

function ProjectCard({
  title,
  description,
  image,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
        <a href={codeLink} className="text-blue-600 hover:underline mr-4">
          Ver código
        </a>
        <a href={demoLink} className="text-blue-600 hover:underline">
          Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
