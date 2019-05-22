import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";
import { WorkPane } from "./WorkPane";
import { WorkProject } from "./WorkProject";


class Work extends React.Component {
    state = {
        currentProject: null,
        projects: [
        {
            video: "beakr.mp4", 
            title: "Beakr", 
            github: "https://github.com/devpointlabs/beakr",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        {
            video: "trollo.mp4", 
            title: "Trollo", 
            github: "https://github.com/3mpirical/trollo",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        {
            video: "monghoul.mp4", 
            title: "Monghoul", 
            github: "https://github.com/3mpirical/monghoul",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        {
            video: "blackjack.mp4", 
            title: "BlackJack", 
            github: "https://github.com/3mpirical/cherokee-casino",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        {
            video: "commercify.mp4", 
            title: "Commercify", 
            github: "https://github.com/3mpirical/departments-react",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        {
            video: "social-lite.mp4", 
            title: "Social-Lite", 
            github: "https://github.com/3mpirical/social-lite",
            live: null,
            description: "Tousled vape yr, bespoke banjo pickled quinoa activated charcoal cliche venmo DIY authentic fingerstache. Kickstarter gentrify messenger bag tumeric hot chicken poke twee snackwave banjo bespoke. Vaporware unicorn aesthetic snackwave meggings flannel four dollar toast hell of. Marfa offal lo-fi occupy unicorn selvage skateboard yuccie.",
        },
        ]
    }

    workRef = React.createRef();

    componentDidUpdate(prevProps) {
        if(!prevProps.loaded && this.props.loaded) {
            anime({
                targets: this.workRef.current,
                opacity: 1,
                duration: 500,
                easing: "linear",
            })
        }
    }

    setCurrentProject = (currentProject) => {
        this.setState({ currentProject });
    }

    renderProjects = () => {
        return this.state.projects.map((project, index) => (
            <WorkProject 
                project={project}
                index={index}
                currentProject={this.state.currentProject}
                setCurrentProject={this.setCurrentProject}
                key={index}
            />
        ))
    }

    render() {
        const { projects, currentProject } = this.state;
        return (
            <>
                <div className="work" ref={this.workRef} >
                    <div className="projects">
                        { this.renderProjects() }
                    </div>
                    
                    <div className="work-pane-container">
                        {
                            typeof currentProject === "number"
                            ? <WorkPane project={projects[currentProject]} />
                            : (
                                <div className="select-project-prompt">
                                    Please Select A Project
                                </div>
                            )
                        }
                    </div>
                </div>
                <ScreenChange 
                    loaded={this.props.loaded} 
                    toggleScreenLoaded={this.props.toggleScreenLoaded} 
                />
            </>
        )
    }
}


export { Work };