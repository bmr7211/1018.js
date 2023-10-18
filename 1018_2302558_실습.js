function printHello() {
    console.log('Hello');
    console.log('Good Morning');
    console.log('집에 가고싶다');
}
printHello();

function log(message) {
    console.log(message);
}
log('hello@');
log(1234);

function changeName(obj) {
    obj.name = 'coder';

}
const jiyoon = { name : 'jiyoon'};
changeName(jiyoon);
console.log(jiyoon);

function showMessage(message, form = 'Unknown') {
    console.log(`${message} by ${form}`);
}
showMessage('Hi!');

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('Hanyang', "Women's University", 'jiyoon');

let globalMessage = 'golbal';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childeMessage = 'hello';
    }
    console.log(childeMessage);
}
printMessage();
