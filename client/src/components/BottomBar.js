import React from "react";


class BottomBar extends React.Component {
    state = { words: "", wordsFinished: true, cancelWords: false };


    componentDidMount() {
        this.renderStatus();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selected !== prevProps.selected) {
            if(this.state.wordsFinished) {
                this.renderStatus();
            } else {
                // if the previous words aren't finished typing
                // then cancel the current recursive function
                this.setState({ cancelWords: true });
            }
        }
    }


    asyncAppendWords = (text, delay) => {
        let textArr = text.split("");
        let count = 0;

        this.setState({ wordsFinished: false });

        const asyncUpdate = () => {
            if(textArr.length !== count && !this.state.cancelWords) {
                setTimeout(() => {
                    this.setState({ words: this.state.words + textArr[count] });
                    count ++;
                    return asyncUpdate()
                }, delay);
            } else if(this.state.cancelWords) {
                // When componentDidUpdate signals to cancel the function
                // reset the status completely and recall the renderstatus
                // function now that the props have changed
                this.setState({ words: "", cancelWords: false }, () => {
                    return this.renderStatus();
                })
            } else {
                this.setState({ wordsFinished: true });
            }
        }

        asyncUpdate();
    }


    renderStatus = () => {
        switch(this.props.selected) {
            case("about"):
                this.setState({ words: "" })
                this.asyncAppendWords("Viewing Personal Information", 75);
            break;
            case("work"):
                this.setState({ words: "" })
                this.asyncAppendWords("Viewing Prior Work History", 75);
        break;
            case("contact"):
                this.setState({ words: "" })
                this.asyncAppendWords("Attempting To Contact Creator", 75);
        break;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="bottom-bar">
                <div className="bottom-bar__left">

                </div>
                <div className="bottom-bar__right">
                    <div className="bottom-bar__status">
                        { this.state.words }
                    </div>
                </div>
            </div>
        )
    }
}

export { BottomBar };