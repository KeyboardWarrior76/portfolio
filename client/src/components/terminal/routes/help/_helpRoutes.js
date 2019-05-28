import { terminalDisplay } from "../../Terminal";
import { UTIL } from "../../terminalUtilities";

///// FUNCITONS /////
const help = (event) => {
    UTIL()
    .createManyPs(
        ' ',
        '__________DOCUMENTATION__________',
        ' ',
        `help                                     -----> basic help command. Type me when you need to know something`,
        `clear                                    -----> clears the terminal display`,
        `ask                                       -----> lists more information myself`,
        ' ',
        '__________SEND_A_MESSAGE__________',
        ' ',
        'set name <name>             -----> sets your name for when you want to send a mesage',
        'set email <email>             -----> sets your email for when you want to send a mesage',
        'set message <message>  -----> sets a message to be sent with your name and email',
        ' ',
        'send                                   -----> after setting name/email and message parameters, this command',
        '                                                       will send the message and your information to my database',
        '                                                       where I can view it privately',
        ' ',
        'FIRST:    use "set name <your_name>", "set email <your_email>", and "set message <your_message>",',
        '                to prepare your message to be sent.',
        ' ',
        'SECOND:   use "send" to review your information, and enter yes to send.',
        ' ')
    .asyncAppendArr(terminalDisplay);
};


const helpPlease = (event) => {
    UTIL().createAppendP(
        terminalDisplay, 
        "Look at you, being polite and using your manners..."
    );
};


///// ROUTES /////
const helpRoutes = function(terminal) {

    //help
    terminal.addListener("help", help);
    terminal.addListener("--help", help);
    terminal.addListener("-help", help);
    terminal.addListener("-h", help);

    //help please
    terminal.addListener("help --please", helpPlease);
    terminal.addListener("help -please", helpPlease);

};


export { helpRoutes };




