import Hero from "./components/home/Hero";
import MyStory from "./components/home/MyStory";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";

export default function Home() {
  return (
    <main className="space-y-60">
      <Hero />
      <Projects />
      <Skills />
      <MyStory />
    </main>
  );
}
