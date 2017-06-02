export {
    isEqual,
    isFunction
};

function isEqual(a, b) {
    if (isFunction(a.equals)) {
        return a.equals(b);
    }

    return a === b;
}

function isFunction(obj) {
    return typeof obj === "function";
}