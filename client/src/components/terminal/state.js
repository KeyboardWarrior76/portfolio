
const state = {
    command: null,
    argument: null,
    value: null,

    userName: null,
    userEmail: null,
    userMessage: null,

    inputWaiting: {
        event: null,
        isTrue: false,
        getEvent: function() {
            return this.event;
        },
        setEvent: function(commandAndArgument) {
            this.event = commandAndArgument;
            this.isTrue = true;
        },
        reset: function() {
            this.event = null;
            this.isTrue = false;
        }
    }

};

export { state };