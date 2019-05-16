import { terminalDisplay } from "../../Terminal";
import { UTIL } from "../../terminalUtilities";

///// FUNCITONS /////
const help = (event) => {
    UTIL()
    .createManyPs(
        ' ',
        ':*:*:*: HELP SECTION :*:*:*:',
        ' ',
        'DOCUMENTATION',
        ' ',
        `help           -----> basic help command. Type me when you need to know something`,
        'help --please  -----> what a nice way of asking. thank you..',
        ' ',
        'set  --name <name>        -----> sets your name for when you want to send a mesage',
        'set  --email <email>      -----> sets your email for when you want to send a mesage',
        'set  --message <message>  -----> sets a message to be sent with your name and email',
        ' ',
        'send --message  -----> after setting name/email and message parameters, this command',
        '                       will send the message and your information to my database',
        '                       where I can view it privately',
        ' ',
        'GENERAL INSTRUCTIONS',
        ' ',
        'FIRST:    use "set --name", "set --email", and "set --message",',
        '          to prepare your message to be sent',
        ' ',
        'SECOND:   use "send --message" to review your information, and enter yes to send',
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




