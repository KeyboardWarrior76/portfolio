import React from "react";
import anime from "animejs";
import { ScreenChange } from "./ScreenChange";


class Work extends React.Component {

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

    render() {
        return (
            <>
                <div className="work" ref={this.workRef} >
                    Work Page Goes Here
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