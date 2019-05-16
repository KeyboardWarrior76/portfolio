import { terminalDisplay } from "./Terminal";
import { Utils } from "handlebars";


const UTIL = function(nodeArr) {

    const updateScroll = (element) => {
        element.scrollTop = element.scrollHeight;
    };

    ///// CODE THAT CHAINS STARTS HERE /////
    const createAppendP = (parentNode, text, ...classes) => {
        let node = document.createElement("p");
        node.textContent = text;

        if(classes.length > 0) classes.forEach((item) => node.classList.add(item));
        
        parentNode.appendChild(node);
        updateScroll(terminalDisplay);

        return UTIL();
    };
    //^^^ note that this functions doesn't return nodes

    const createManyPs = ( ...text) => {
        const newArr = text.map((item, index, arr) => {
            let node = document.createElement("p");
            node.textContent = item;
            return node;
        });

        return UTIL(newArr);
    };

    const mapClasses = (...classes) => {
        const newArr = nodeArr.map((nodeItem, index, arr) => {
            classes.forEach((classItem) => {
                nodeItem.classList.add(classItem);
            });
            return nodeItem;
        });
        return UTIL(newArr);
    };

    const asyncAppendArr = (parentNode, delay = 30) => {
        if(parentNode !== null) {
            return new Promise((resolve, reject) => {
                
                const timeoutAppend = () => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if(nodeArr.length > 0) {
                                parentNode.appendChild(nodeArr[0]);
                                nodeArr.shift();
                                updateScroll(parentNode);
                                resolve(timeoutAppend(nodeArr[0]));
                            }
                                resolve("finished");
                        }, delay);
                    });
                };

                timeoutAppend()
                .then((data) => {
                    resolve(data);
                });

            });
        }
    };

    return {
        updateScroll,
        createAppendP,

        createManyPs,
        asyncAppendArr,
        mapClasses,
    };
};


export { UTIL };