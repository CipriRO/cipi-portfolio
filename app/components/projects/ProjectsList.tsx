import { projects } from "@/app/lib/constants";
import Project from "../ui/Project";

const ProjectsList = () => {
  return (
    <div className="space-y-14">
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
          variant="maxi"
        />
      ))}
    </div>
  );
};
export default ProjectsList;
