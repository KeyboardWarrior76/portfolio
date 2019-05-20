import React from "react";

const WorkPane = ({ project }) => {
    return (
        <>
            <div className="work-pane__video-container">
                <video 
                    controls
                    autoPlay
                    src={require(`../videos/${project.video}`)} 
                    alt="project overview" 
                    className="work-pane__video"
                ></video>
            </div>
            <div className="work-pane__header">
                <h2 className="work-pane__title" >{ project.title }</h2>

                <div className="links-container">
                    <a 
                        className="work-pane__github" 
                        href={project.github} 
                        target="_blank" 
                    >Github</a>
                    <a 
                        className="work-pane__live" 
                        href={project.live} 
                        target="_blank" 
                    >Live Site</a>
                </div>
            </div>
            <p className="work-pane__description" > { project.description } </p>
        </>
    )
}


export { WorkPane };