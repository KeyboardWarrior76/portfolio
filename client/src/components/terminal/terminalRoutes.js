import { helpRoutes } from "./routes/help/_helpRoutes";
import { setRoutes } from "./routes/set/_setRoutes"; 
import { sendRoutes } from "./routes/send/_sendRoutes"; 
import { askRoutes } from "./routes/ask/_askRoutes"; 
import { clearRoutes } from "./routes/clear/_clearRoutes";

const initTerminalRoutes = (terminal) => {
    helpRoutes(terminal);
    setRoutes(terminal);
    sendRoutes(terminal);
    askRoutes(terminal);
    clearRoutes(terminal);
};


export { initTerminalRoutes };