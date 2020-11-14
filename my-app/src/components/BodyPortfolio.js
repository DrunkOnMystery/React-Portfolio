import React from "react";
import Project from "./Project";
import projects from "../../projects.json"


function BodyPortfolio() {
    return (
        <div className="BodyPortfolio">
            <main class="card-container">
                <div class="row">
                    {projects.map((item, i) => (
                        <Project
                            key={i}
                            title={item.title}
                            image_src={item.image_src}
                            url={item.url}
                            github={item.github}
                            description={item.description}
                            />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default BodyPortfolio;