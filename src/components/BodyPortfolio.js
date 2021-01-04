import React from "react";
import Project from "./Project";
import projects from "./../projects.json"
import '../styles/style.css';


function BodyPortfolio() {
    return (
        <div className="BodyPortfolio"  class="main">
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
                            technologies={item.technologies}
                            />
                    ))}
                </div>
                <div>
                    <ul>Ben's Programming Skills:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>NodeJS</li>
                    <li>JSX</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default BodyPortfolio;