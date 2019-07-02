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
            live: "https://boxing-toonie-23791.herokuapp.com",
            description: "Beakr is a Learning Management System, and capstone project for Devpoint Labs, made in a team of five people. I was personally responsible for creating the searchbars, student enrollments, CRUD actions on course-sections, units, and the interfaces to manage their many-many associations along with the vast majority of features for quizzes. **Login using \"test@test.com\" or \"student@test.com\" and \"password\", and note that Heroku's free tier may put servers to sleep**",
            technology: "Ruby, Ruby on Rails, Active Record, Postgresql, React, Styled Components, Cloudinary, Semantic UI React, Anime.js, Devise Token Auth"
        },
        {
            video: "trollo.mp4", 
            title: "Trollo", 
            github: "https://github.com/3mpirical/trollo",
            live: "https://hidden-mountain-13919.herokuapp.com",
            description: "Trollo is a \"Trello\" Clone with views made entirely from the Embedded Ruby templating engine (ERB), and Sass. The challenge for this project was to make a complex user interface without any Javascript, and to implement state by means of hidden checkboxes and radio buttons. **Login using \"fake@mail.com\" and \"password\", and note that Heroku's free tier may put servers to sleep**",
            technology: "Ruby, Ruby on Rails, Postgresql, Active Record, ERB, Sass, CSS3, Devise",
        },
        {
            video: "monghoul.mp4", 
            title: "Monghoul", 
            github: "https://github.com/3mpirical/monghoul",
            live: null,
            description: "Monghoul is a CLI and ORM for MongoDB inspired by ActiveRecord and Ruby on Rails. It currently allows the user to initiate a project directory, setup the mongodb URI, create model files, update the schema file, create migration files, run migrations, and run the seeds file. For every database monghoul connects to, the uri is stored in memory, so that model methods can access multiple databases from the same application.",
            technology: "Javascript, ES6, Node.js, MongoDB",
        },
        {
            video: "blackjack.mp4", 
            title: "BlackJack", 
            github: "https://github.com/3mpirical/cherokee-casino/tree/master/blackjack2",
            live: null,
            description: "Blackjack is one part of a larger 'casino' command line tool/game. It allows the user to play the card game of Blackjack against the dealer, and it records the outcomes. The game has 16 different files, and uses the MVC pattern via model, view, controller, and state modules. An event emitter is being used to send user input to their appropriate event handlers (dubbed \"routes\" in this application).",
            technology: "Ruby",
        },
        {
            video: "commercify.mp4", 
            title: "Commercify", 
            github: "https://github.com/3mpirical/departments-react",
            live: null,
            description: "Commercify is a Ruby on Rails and React Project where departments have many products which can be reviewed. Departments can have their products sorted by newest, oldest, lowest price, highest price, and alphabetical, via custom Controller Actions and SQL queries. The total rating is dynamically generated from each review.",
            technology: "Ruby, Ruby on Rails, Postgresql, ActiveRecord, React, Sass, CSS3",
        },
        {
            video: "social-lite.mp4", 
            title: "Social-Lite", 
            github: "https://github.com/3mpirical/social-lite",
            live: null,
            description: "Social Lite is an application that lets people search for other users, and befriend them. Authentication is handled via Devise Token Auth, and the searchbar is a custom component that detects when the user stops typing and sends an AJAX request to a controller action that searches the database via SQL Query.",
            technology: "Ruby, Ruby on Rails, Postgresql, ActiveRecord, React, Sass, CSS3, Devise Token Auth",
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