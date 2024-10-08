import { skills } from "@/app/lib/constants";
import { H2, H4 } from "../ui/Headings";

const Skills = () => {
  return (
    <section className="space-y-9">
      <H2>
        Skills<span className="text-primary">.</span>
      </H2>

      <div className="grid grid-cols-[repeat(auto-fit,_200px)] gap-24">
        {skills.map((skill, id) => (
          <Column key={id} title={skill.title} contents={skill.contents} />
        ))}
      </div>
    </section>
  );
};
export default Skills;

export type SkillProps = { title: string; contents: string[] };

const Column = ({ title, contents }: SkillProps) => (
  <div className="space-y-3">
    <H4>{title}</H4>
    <div className="space-y-0.5">
      {contents.map((content, id) => (
        <p key={id} className="text-copy-light">
          {content}
        </p>
      ))}
    </div>
  </div>
);
