import { terminalDisplay } from "../../Terminal";
import { UTIL } from "../../terminalUtilities";

///// FUNCTIONS /////

///// ROUTES /////
const clearRoutes = (terminal) => { 
    terminal.addListener("clear", () => {
        terminalDisplay.innerHTML = "";
    });
};


export { clearRoutes };