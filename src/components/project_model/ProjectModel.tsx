interface ProjectModel {
    projectName: string,
    description: string,
    technologies: string,
    link: string
}

export default function ProjectModel({projectName, description, technologies, link}: ProjectModel) {
    return(
        <div className="grid grid-cols-2">
            <div className="h-[29.563rem] p-5">
                <p className="mb-6">{projectName}</p>
                <p className="w-[20rem] mb-6 break-words text-gray-700">{description}</p>
                <p className="text-gray-500">{technologies}</p>
                <p className="mt-[15rem] font-bold">{link}</p>
            </div>
            <div className="h-[29.563rem]">
                <img className="h-full" src="https://www.ferasdodesign.com.br/wp-content/uploads/2023/02/2-paisagem_de_praia_com_mar_azul_e_coqueiro_na_areia_feras_do_design_gratis.jpg" alt="" />
            </div>
        </div>
    )
}