

///// A KEY POINT TO REMEMBER /////
// Two inputs first will be read as a command and an argument, not a command and a value.
// If you want a value to be read, there must be an argument.


const createTerminal = () => {

    const parseEvent = (event) => {
        const eventArrItems = event.split(" ");
        let command, argument, value;

        if (eventArrItems.length === 1) {
            command = eventArrItems[0];
            argument = null;
            value = null;
        } else if (eventArrItems.length <= 2) {
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
    
    

    class Terminal extends EventTarget {
        constructor() {
            super();
        }

        emitEvent(event) {
            let {command, argument, value} = parseEvent(event);
            let eventObj;

            if(value) value = trimValue(value);

            if(argument) {
                eventObj = new Event(`${command} ${argument}`);
            } else {
                eventObj = new Event(command);
            }
            
            eventObj.command = command;
            eventObj.argument = argument;
            eventObj.value = value;

            this.dispatchEvent(eventObj);
        }

        addListener(commandAndArgument, ...callbackArr) {
            this.addEventListener(commandAndArgument, (event) => {
                callbackArr.forEach((item) => {
                    item.call(this, event);
                });
            });
        }      
    }

    const terminal = new Terminal();
    return terminal;
};

const terminal = createTerminal();

export { terminal };


