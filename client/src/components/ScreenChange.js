import React from "react";
import anime from "animejs";


class ScreenChange extends React.Component {

    changeRef = React.createRef()
    cycleRef = React.createRef()

    componentDidMount() {

        anime.timeline({ duration: 1500})
        .add({
            targets: this.cycleRef.current,
            left: "100%",
            duration: 1250,
            easing: "linear",
        })
        .add({
            targets: this.changeRef.current,
            opacity: 0,
            duration: 250,
            easing: "linear",
        })
        .finished.then(() => {
            this.props.toggleScreenLoaded();
        });
    }

    render() {
        return (
            <div 
                className="screenchange" 
                ref={this.changeRef} 
                style={this.props.loaded? {display: "none"} : {display: "block"}}
            >
                <h2 className="screenchange__initializing" >-_-_ Initializing _-_-</h2>
                <img 
                    className="light-cycle"
                    src={require("../images/light-cycle.png")} 
                    alt="light cycle"
                    ref={this.cycleRef} 
                />
            </div>
        )
    }
}


export { ScreenChange };