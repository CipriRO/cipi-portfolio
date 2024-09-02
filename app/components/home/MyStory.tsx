import { H2 } from "../ui/Headings";

const MyStory = () => {
  return (
    <section className="space-y-9">
      <H2>
        My Story<span className="text-primary">.</span>
      </H2>
      <p className="whitespace-pre-line">
        {`I started my journey in web development in 2020 when a friend challenged me to build an e-commerce store website without any previous experience. The project was a complete mess, but it inspired me to dive deep into web development.
        
        Since then, I have been constantly learning new frameworks and technologies, primarily through tutorials and documentation. I especially like using Next.js because of its integrated features and performance. I prioritize staying informed about the most recent industry trends in order to continue enhancing my skills.`}
      </p>
    </section>
  );
};
export default MyStory;
