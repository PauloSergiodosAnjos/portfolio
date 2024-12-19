interface ProjectModel {
    projectName: string,
    description: string,
    technologies: string,
    link: string,
    image: string
}

export default function ProjectModel({projectName, description, technologies, link, image}: ProjectModel) {
    return(
        <div className="grid grid-cols-2">
            <div className="h-[29.563rem] p-5 flex flex-col justify-between">
                <p className="mb-6">{projectName}</p>
                <p className="w-[20rem] mb-6 break-words text-gray-700">{description}</p>
                <p className="text-gray-500">{technologies}</p>
                    <p className="font-bold underline decoration-solid cursor-pointer w-fit">{link}</p>
            </div>
            <div className="h-[29.563rem]">
                <img className="h-full w-full" src={image} alt="" />
            </div>
        </div>
    )
}