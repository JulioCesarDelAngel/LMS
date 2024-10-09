import React from "react";
import { projects } from "../../Data/projects";

export default function Apps () {
    return (
        <section id="projects">
            <h1 className="text-center"><i class="bi bi-code-slash"></i></h1>
            <h3 className="text-center">Aplicaciones y colaboraciones</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    projects.map((project)=>(
                        <div className="col">
                            <div className="card h-50 w-50">
                                <div class="card-header bg-transparent border-info">
                                    <a className="card-title" href={project.link} target="_blank" rel="noreferrer">
                                        {project.titulo}
                                    </a>
                                </div>                            

                                <img src={project.imagen} className="card-img-top h-100 w-100" alt={project.titulo} />

                                <div class="card-footer bg-transparent border-info">
                                    <a className="card-text" href={project.git} target="_blank" rel="noreferrer">
                                    <i className="bi bi-github" style={{fontSize:"1rem",color: "white"}}></i>
                                    </a>                                
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}