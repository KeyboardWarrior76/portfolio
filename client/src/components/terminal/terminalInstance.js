

///// A KEY POINT TO REMEMBER /////
// Two inputs first will be read as a command and an argument, not a command and a value.
// If you want a value to be read, there must be an argument.


const createTerminal = () => {

    const parseInput = (event) => {
        const eventArrItems = event.split(" ");
        let command, argument, value;
        
        if (eventArrItems.length === 1) {
            command = eventArrItems[0];
            argument = null;
            value = null;
        } else if (eventArrItems.length === 2) {
            command = eventArrItems[0];
            argument = eventArrItems[1];
            value = null;
        } 
        else {
            command = eventArrItems[0];
            argument = eventArrItems[1];
            value = eventArrItems.slice(2).join(" ");
        }
        
        return {
            command,
            argument,
            value,
        }
    };



    const trimValue = (value) => {
        if (value.charAt(0) === "'" || value.charAt(0) === "\"" ) {
            value = value.slice(1);
        } 
        if (value.charAt(value.length - 1) === "\"" || value.charAt(value.length - 1) ===  "'"){
            value = value.slice(0, value.length - 1);
        } 
        return value;
    };



    class Terminal {
        constructor() {
            this.callbackHash = {};
            this.defaultCallback = null;
        }

        addListener(event, callback) {
            const { callbackHash } = this;
            if(callbackHash[event]) callbackHash[event].push(callback);
            else callbackHash[event] = [callback];
        }

        emitEvent(input) {
            const { callbackHash, defaultCallback } = this;
            let {command, argument, value} = parseInput(input);
            const event = argument? `${command} ${argument}` : command;
            if(value) value = trimValue(value);

            if(callbackHash[event]) {
                callbackHash[event].forEach((callback) => {
                    callback({ command, argument, value });
                });
            } else if (defaultCallback) {
                defaultCallback.call({ command, argument, value });
            } else {
                return null;
            }
        }
        
        addDefaultListener(callback) {
            if(!this.defaultCallback) this.defaultCallback = callback;
            else console.log("ERROR: Only one default callback can be set in terminal emitter");
        }
    }

    return new Terminal();
};

const terminal = createTerminal();

export { terminal };


