import { projects } from "@/app/lib/constants";
import { H2 } from "../ui/Headings";
import Project from "../ui/Project";

const Projects = () => {
  return (
    <section className="space-y-9">
      <H2>
        My Projects<span className="text-primary">.</span>
      </H2>

      <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-14">
        {projects.map((project, id) => (
          <Project
            key={id}
            title={project.title}
            link={project.link}
            variant="mini"
            description={project.description}
            images={project.images}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
      <Project
        title={projects[0].title}
        link={projects[0].link}
        variant="maxi"
        description={projects[0].description}
        images={[
          "https://i.imgur.com/PG6KWZi.png",
          "https://i.imgur.com/pkE9zku.png",
        ]}
        imagePosition={projects[0].imagePosition}
      />
    </section>
  );
};
export default Projects;
