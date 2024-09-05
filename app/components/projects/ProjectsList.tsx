import { projects } from "@/app/lib/constants";
import Project from "../ui/Project";

const ProjectsList = () => {
  return (
    <div className="space-y-14">
      {projects.map((project, id) => (
        <Project
          key={id}
          title={project.title}
          description={project.description}
          images={project.images}
          link={project.link}
          variant="maxi"
        />
      ))}
    </div>
  );
};
export default ProjectsList;
