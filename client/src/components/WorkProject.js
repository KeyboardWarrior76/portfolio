import React from "react";


class WorkProject extends React.Component {
    state = { mousedOver: false }

    vidRef = React.createRef();

    onMouseOver = (event) => {
        this.vidRef.current.play()
    }

    onMouseEnter = (event) => {
        this.vidRef.current.play()
    }

    onMouseLeave = (event) => {
        this.vidRef.current.pause()
    }


    render() {
        const { project, currentProject, index, setCurrentProject } = this.props;
        return (
            <div 
                className={
                    currentProject === index
                    ? "project project__selected"
                    : "project"
                }
                onClick={() => setCurrentProject(index)}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {  currentProject === index
                    ? null
                    : <p className="project__title">{ project.title }</p>
                }
                <div className="project__video-container">
                    <video 
                        loop
                        src={require(`../videos/${project.video}`)} 
                        alt="project" 
                        className="project__video-thumbnail"
                        ref={this.vidRef}
                        // codecs="H.264/MPEG-4"
                    ></video>
                </div>
            </div>
        )
    }
}


export { WorkProject };