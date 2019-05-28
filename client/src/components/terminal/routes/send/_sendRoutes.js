import { terminalDisplay } from "../../Terminal";
import { state } from "../../state";
import { UTIL } from "../../terminalUtilities";
import axios from "axios";

///// FUNCTIONS /////
const sendMessage = (event) => {
    if(state.inputWaiting.isTrue === false) {

        if( (state.userName !== null && state.userMessage !== null) 
          ||(state.userEmail !== null && state.userMessage !== null)) {

            UTIL()
            .createManyPs(
                ' ',
                `Name: ${state.userName? state.userName: "none"}`,
                `Email: ${state.userEmail? state.userEmail: "none"}`,
                `Message: ${state.userMessage? state.userMessage: "none"}`,
                ' ',
                `Would you like to send a message with these details? (yes/no)`)
            .asyncAppendArr(terminalDisplay);

            state.inputWaiting.setEvent("send --message");

        } else {
            UTIL()
            .createManyPs(
                ' ',
                `Name: ${state.userName? state.userName: "none"}`,
                `Email: ${state.userEmail? state.userEmail: "none"}`,
                `Message: ${state.userMessage? state.userMessage: "none"}`,
                ' ',
                `I'm sorry, but you need at least a name or email, and a message`)
            .asyncAppendArr(terminalDisplay);
        }


    } else { 
        if(event.value === "yes") {
            axios.post("/api/send_message", { message: `\nName: ${state.userName? state.userName: "none"} \nEmail: ${state.userEmail? state.userEmail: "none"} \nMessage: ${state.userMessage? state.userMessage: "none"}`})
            .then((res) => console.log("success"))
            .catch((err) => console.log("failed to send message"));
            UTIL().createAppendP(
                terminalDisplay,
                "!!!!!  Message Sent  !!!!!",
                "green"
            );
            state.inputWaiting.reset();

        } else if(event.value === "no") {
            UTIL().createAppendP(
                terminalDisplay,
                "Message Not Sent"
            );
            state.inputWaiting.reset();

        } else {
            UTIL().createAppendP(
                terminalDisplay,
                'Sorry, please enter yes or no'
            );
        }
    } 
};

///// ROUTES /////
const sendRoutes = (terminal) => {
    //send message
    terminal.addListener("send --message", sendMessage);
    terminal.addListener("send -message", sendMessage);
    terminal.addListener("send message", sendMessage);
    terminal.addListener("send -m", sendMessage);
    terminal.addListener("send", sendMessage);
};

export { sendRoutes };