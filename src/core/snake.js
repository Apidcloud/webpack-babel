const mime = require('mime');

export default class Snake {
    constructor(name) {
        console.log(mime.getType('txt'));
        console.log(mime.getExtension('text/plain')); 
    }

    async move(meters) {

        const dress = () => {
            console.log("Dressing....");
        };

        (async () => {
            console.log('before sleeping');
            await asyncSleep(1000);
            //console.log('after sleeping');
        })();

        dress();
        console.log("Slithering...");
    }
}

export let TESTSYMBOL = Symbol('##########AnotherSymbol');

function asyncSleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}