import { terminalDisplay } from "../../Terminal";
import { UTIL } from "../../terminalUtilities";

///// FUNCTIONS /////
const askGrewUp = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(terminalDisplay, ' ')
        .createAppendP(terminalDisplay, 'Where did I grow up?', "purple")
        .createManyPs(
            'I grew up in in Browns Mills, NJ;  a small town in the middle of the pine barrens',
            '(it\'s a massive forest of pine trees). You could drive to the beach in 40 minutes,',
            'and get to Philadelphia in an hour. Browns Mills is cozy, but you won\'t find much', 'opportunity there.'
        )
        .asyncAppendArr(terminalDisplay)
        .then((data) => resolve(data));
    });
};

const askCoding = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(terminalDisplay, ' ')
        .createAppendP(terminalDisplay, 'How did I start coding?', "purple")
        .createManyPs(
            'I first learned what programming was from Khan Academy. I used their website as',
            'a mathematics reference, but I randomly stumbled upon their Javascript section.',
            'From there I studied Javascript for a year and a half on Udemy, and bought hundreds',
            'of dollars of courses. Now I\'m making backends in Ruby/Ruby on Rails and',
            'Node.js/Express, interfaces with React and Sass, and I\'m starting to work with',
            'the Python and Rust Programming Languages.',
        )
        .asyncAppendArr(terminalDisplay)
        .then((data) => resolve(data));
    });
};

const askMove = (event) => {
    return new Promise((resolve, reject) => {
        UTIL()
        .createAppendP(terminalDisplay, ' ')
        .createAppendP(terminalDisplay, 'Why did I move to Salt Lake City?', "purple")
        .createManyPs(
            "I moved to Utah in May of 2017, to learn and work as a Hospital Pharmacy Technician.", "I found employment at Primary Children's Hospital, and a year later I began working", "in their Operating Room. I studied web development in my own time, but eventually I", "would find that studying with a full time job, and a hard one, does not typically allow for",
            "in depth learning of any subject. So, I decided to attend the University of Utah's",
            "Web Development Course with Devpoint Labs."
        )
        .asyncAppendArr(terminalDisplay)
        .then((data) => resolve(data));
    });
};


//----- put all other functions in here -----
const askEverything = (event) => {
    askGrewUp(event)
    .then(askMove)
    .then(askCoding);
};



///// ROUTES /////
const askRoutes = (terminal) => {
    //grew up
    terminal.addListener("ask --grew-up", askGrewUp);
    terminal.addListener("ask -grew-up", askGrewUp);
    terminal.addListener("ask grew-up", askGrewUp);
    terminal.addListener("ask grewup", askGrewUp);
    terminal.addListener("ask -gu", askGrewUp);

    //coding
    terminal.addListener("ask --coding", askCoding);
    terminal.addListener("ask -coding", askCoding);
    terminal.addListener("ask coding", askCoding);
    terminal.addListener("ask -c", askCoding);

    //move
    terminal.addListener("ask --move", askMove);
    terminal.addListener("ask -move", askMove);
    terminal.addListener("ask move", askMove);
    terminal.addListener("ask -m", askMove);

    //everything
    terminal.addListener("ask everything", askEverything);
    terminal.addListener("ask --everything", askEverything);
    terminal.addListener("ask -everything", askEverything);
    terminal.addListener("ask -e", askEverything);
    terminal.addListener("ask", askEverything);

};


export { askRoutes };