import {
  DescriptionContent,
  DescriptionDetail,
} from "@/app/components/projects/project/Description";
import { H1 } from "@/app/components/ui/Headings";
import PhotoShuffle from "@/app/components/ui/photo-shuffle/PhotoShuffle";
import { ProjectContentProps } from "@/app/lib/constants";
import { getProjectById } from "@/app/lib/utils";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const project = getProjectById(id);
  if (!project) notFound();

  const { title, description, images, details, content } = project;

  return (
    <main className="space-y-14">
      <div className="space-y-4">
        <H1>
          {title}
          <span className="text-primary">.</span>
        </H1>
        <p className="max-w-[700px] text-copy-light">{description}</p>
      </div>

      <PhotoShuffle images={images} variant="maxi" />

      <ProjectDescription details={details} content={content} />
    </main>
  );
};
export default page;

const ProjectDescription = ({
  details,
  content,
}: {
  details: ProjectContentProps[];
  content: ProjectContentProps[];
}) => {
  return (
    <div className="flex flex-col items-start gap-10 min-[930px]:flex-row">
      <div className="top-5 flex w-full flex-wrap justify-between gap-6 rounded-3xl bg-foreground px-7 py-6 shadow-[0_2px_20px_rgba(0,_0,_0,_0.1)] min-[930px]:sticky min-[930px]:w-[350px]">
        {details.map((detail, id) => (
          <DescriptionDetail key={id} detail={detail} />
        ))}
      </div>

      <div className="grow-[9999] basis-[411px] space-y-11">
        {content.map((content, id) => (
          <DescriptionContent key={id} content={content} />
        ))}
      </div>
    </div>
  );
};
