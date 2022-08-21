function receivesAFunction(callback) {
    return (callback());
}
receivesAFunction(function () { return "Cafe Kaya" });

function returnsANamedFunction() {
    return function namedFunction() {
        return ("Shix birthday")
    };
}


function returnsAnAnonymousFunction() {
    return () => {
        "fun times"
    }
};