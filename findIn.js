// Get an object property based on a string
// e.g. findIn(nullableObject, "a.path[0].string")
function findIn(obj, path) {
    if (typeof obj === 'undefined' || obj === null) return undefined;

    const pathArray = convertSquareBracketsInPathStringToDots(path).split('.');
    while (pathArray.length) {
        const subkey = pathArray.shift();
        if (typeof obj[subkey] !== 'undefined' && obj[subkey] !== null) {
            obj = obj[subkey];
        } else {
            return undefined;
        }
    }

    return obj;
}

function convertSquareBracketsInPathStringToDots(path) {
    return path
        .replace(/\[(\w+)\]/g, '.$1') // convert [] indexes to dot indexes
        .replace(/^\./, ''); // strip any leading dot
}

exports.__esModule = true
exports["default"] = findIn;
exports["findIn"] = findIn;
exports["convertSquareBracketsInPathStringToDots"] = convertSquareBracketsInPathStringToDots;
module.exports = exports["default"];
