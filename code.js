// helloWorld function

function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if ((name === undefined) || (typeof name === 'boolean')) {
        name = helloWorld()
        return name;
}  else {
        return ("Hello, " + name + "!")
    }
}

function isFive() {
    return true || false;
}
