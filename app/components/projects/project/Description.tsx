import { ProjectContentProps } from "@/app/lib/constants";
import { H2, H4 } from "../../ui/Headings";

export const DescriptionContent = ({
  content,
}: {
  content: ProjectContentProps;
}) => {
  const { type, info } = content;

  return (
    <div className="space-y-4">
      <H2>{type}</H2>
      {Array.isArray(info) ? (
        <ul className="list-inside list-disc">
          {info.map((info, id) => (
            <li key={id} className="text-lg">
              {info}
            </li>
          ))}
        </ul>
      ) : (
        <p>{info}</p>
      )}
    </div>
  );
};

export const DescriptionDetail = ({
  detail,
}: {
  detail: ProjectContentProps;
}) => {
  const { type, info } = detail;

  return (
    <div className="space-y-2">
      <H4>{type}</H4>
      {Array.isArray(info) ? (
        <ul className="list-inside list-disc">
          {info.map((info, id) => (
            <li className="text-copy-light" key={id}>
              {info}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-copy-light">{detail.info}</p>
      )}
    </div>
  );
};
