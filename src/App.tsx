import AboutMe from "./components/about_me/AboutMe"
import Header from "./components/header/Header"
import ProjectModel from "./components/project_model/ProjectModel"
import "./index.css"

function App() {
  return (
    <>
      <Header/>
      <main className="mt-[20%] flex flex-col">
        <AboutMe/>
        <section className="flex mt-[15rem] flex-col gap-[5rem] justify-center px-[10rem]">
          <h1 className="text-center text-xl">PROJECTS</h1>
          <ProjectModel description="KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK" link="SADASDASJDIASDIJASDASDIJADS" projectName="sadasdiasdasd" technologies="asdasdasdasidjasd"/>
          <ProjectModel description="KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK" link="SADASDASJDIASDIJASDASDIJADS" projectName="sadasdiasdasd" technologies="asdasdasdasidjasd"/>
        </section>
      </main>
    </>
  )
}

export default App
