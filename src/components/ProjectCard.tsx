interface ProjectCardProps {
  title: string;
  description?: string;
  technologies?: string[];
  image?: string;
  link?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies = [],
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <article
      className="bg-[rgba(10,20,30,0.85)] rounded-lg shadow-lg overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.03)" }}
    >
      {image && (
        <div
          className="w-full h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-300 text-sm mb-4">{description}</p>
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(100,150,200,0.12)",
                  color: "#00ffff",
                  border: "1px solid rgba(100,150,200,0.25)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded"
              style={{
                backgroundColor: "rgba(100,150,200,0.18)",
                color: "#00ffff",
              }}
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded"
              style={{
                backgroundColor: "rgba(100,150,200,0.12)",
                color: "#00ffff",
                border: "1px solid rgba(100,150,200,0.25)",
              }}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
