import { terminalDisplay } from "../../Terminal";
import { state } from "../../state";
import { UTIL } from "../../terminalUtilities";

///// FUNCTION /////
const setEmail = (event) => {
    if(!event.value) return null;
    const email = event.value;
    state.userEmail = email;

    UTIL().createAppendP(
        terminalDisplay,
        `Email Set Successfully: ${email}`,
        "green"
    );
};

const setName = (event) => {
    if(!event.value) return null;
    const name = event.value;
    state.userName = name;

    UTIL().createAppendP(
        terminalDisplay,
        `Name Set Successfully: ${name}`,
        "green"
    );
};

const setMessage = (event) => {
    if(!event.value) return null;
    const message = event.value;
    state.userMessage = message;

    UTIL().createAppendP(
        terminalDisplay,
        `Message Set Successfully: ${message}`,
        "green"
    );
};

///// ROUTES /////



const setRoutes = (terminal) => {
    
    //set email
    terminal.addListener("set --email", setEmail);
    terminal.addListener("set -email", setEmail);
    terminal.addListener("set email", setEmail);
    terminal.addListener("set -e", setEmail);
    
    //set name
    terminal.addListener("set --name", setName);
    terminal.addListener("set -name", setName);
    terminal.addListener("set name", setName);
    terminal.addListener("set -n", setName);

    //set message
    terminal.addListener("set --message", setMessage);
    terminal.addListener("set -message", setMessage);
    terminal.addListener("set message", setMessage);
    terminal.addListener("set -m", setMessage);

};


export { setRoutes };