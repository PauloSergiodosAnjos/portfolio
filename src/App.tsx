import AboutMe from "./components/about_me/AboutMe"
import Header from "./components/header/Header"
import ProjectModel from "./components/project_model/ProjectModel"
import "./index.css"
import data from "./data.json"

function App() {
  return (
    <>
      <Header/>
      <main className="mt-[20%] flex flex-col">
        <AboutMe/>
        <section className="flex mt-[15rem] flex-col justify-center px-[10rem]">
          <h1 className="text-center text-xl mb-10">PROJECTS</h1>
          {data.map((project, i)=> (
            <div className="" key={i}>
              <ProjectModel description={project.description} image={project.image} link={project.link} projectName={project.projectName} technologies={project.technologies}/>
              {i < data.length - 1 && (
                <div className="flex justify-center">
                  <div className="border-t border-black my-10 w-[50rem]"></div>
                </div>
              )}
            </div>
          )
          )}
        </section>
      </main>
    </>
  )
}

export default App
