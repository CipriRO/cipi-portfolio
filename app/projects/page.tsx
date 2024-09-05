import ProjectsList from "../components/projects/ProjectsList";
import { H1 } from "../components/ui/Headings";

const page = () => {
  return (
    <main className="space-y-20">
      <div className="space-y-3">
        <H1>
          My <span className="text-primary">Best</span> Creations
          <span className="text-primary">.</span>
        </H1>
        <p className="max-w-[600px] text-copy-light">High performance web applications using the latest technologies.</p>
      </div>

      <ProjectsList />
    </main>
  );
};
export default page;
