import React from "react";
import anime from "animejs";


class Meteor extends React.Component {
    state = { clicked: false, finished: false }

    blastRef = React.createRef();

    onMeteorClick = (event) => {
        this.setState({ clicked: true });
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.state.clicked === true && prevState.clicked !== true) {
            anime({
                targets: this.blastRef.current,
                scale: 5,
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
            }).finished.then(() => {
                this.setState({ finished: true })
            });
        };
    }

    render() {
        const { left, top, size } = this.props;
        console.log(this.state.finished)
        if (this.state.finished) return null;
        else if(this.state.clicked) return (
            <div 
                className="meteor-blast" 
                ref={this.blastRef} 
                style={{
                    left,
                    top,
                    height: size,
                    width: size,
                }}
            ></div>
        ); else return (
            <img 
                src={require("../images/meteor-1.svg")} 
                alt="metoer" 
                className="metoer"
                onClick={this.onMeteorClick}
                style={{
                    left,
                    top,
                    height: size,
                    width: size,
                    transform: `rotate(${Math.random()* 360}deg)`,
                }}
            />
        )
    }
}


export { Meteor };