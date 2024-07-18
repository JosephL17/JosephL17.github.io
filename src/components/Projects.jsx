import React from "react"
import portfolio from "../data/portfolio"
import Portfolioitems from "./Portfolioitem"

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center ml-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project => (
                    <Portfolioitems
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        />
                ))}
            </div>
            {/* <h1 className="text-3xl font-bold">Projects</h1> */}
        </div>
    )
}

export default Projects