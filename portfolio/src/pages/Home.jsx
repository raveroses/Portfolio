import FirstSection from "../Component/FirstSection";
import Author from "../Component/Author";
import Project from "../Component/Project";
export default function Home() {
  return (
    <div className="w-full px-5 lg:px-100 md:px-20 flex flex-col my-80">
      <FirstSection />
      <Author />
      <Project/>
    </div>
  );
}
