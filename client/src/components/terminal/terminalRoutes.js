import { helpRoutes } from "./routes/help/_helpRoutes";
import { setRoutes } from "./routes/set/_setRoutes"; 
import { sendRoutes } from "./routes/send/_sendRoutes"; 
import { askRoutes } from "./routes/ask/_askRoutes"; 

const initTerminalRoutes = (terminal) => {
    helpRoutes(terminal);
    setRoutes(terminal);
    sendRoutes(terminal);
    askRoutes(terminal);
};


export { initTerminalRoutes };