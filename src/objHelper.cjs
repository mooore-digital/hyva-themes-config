/**
 * Flatten Object into a flat Object
 *
 * @param {Object} obj - object to flatten
 * @returns Object - flattened object
 */
const flattenObj = (obj, separator = "-") => {
    let result = {};

    for (const i in obj) {
        if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + separator + j] = temp[j];
            }
        } else {
            result[i] = obj[i];
        }
    }

    return result;
};

/**
 * Removes all deep nested keys except the key that you want to keep
 *
 * @param {Object} obj
 * @param {string} keyToKeep - key to keep in the object
 * @returns Object - Same Object with only the selected key
 */
function removeAllExceptValue(obj, keyToKeep = "value") {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
            removeAllExceptValue(value);
        } else if (key !== keyToKeep) {
            delete obj[key];
        }
    }
    return obj;
}

/**
 * Turns a flat Object in to a deep nested Object,
 * based on the keys
 *
 * @param {string[]} keys - List of keys
 * @param {string | number | boolean} value - value for the deepest key
 * @param {Object} obj - new deep nested object
 */
function createObject(keys, value, obj) {
    let key = keys.shift();
    if (!obj.hasOwnProperty(key)) {
        obj[key] = keys.length > 0 ? {} : value;
    }
    if (keys.length > 0) createObject(keys, value, obj[key]);
}

module.exports = {
    flattenObj,
    removeAllExceptValue,
    createObject,
};
