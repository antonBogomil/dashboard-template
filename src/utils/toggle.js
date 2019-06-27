export default function toggle(array, value, matchField) {
    const result = array.slice(0);
    if (typeof value === "object" && matchField) {
        const finded = array.find((item) => {
            return item[matchField] === value
        });
        if (finded) {
            result.splice(array.indexOf(finded), 1);
        } else {
            result.push(value);
        }
    } else {
        if (array.indexOf(value) === -1) {
            result.push(value);
        } else {
            result.splice(array.indexOf(value), 1);
        }
    }
    return result
}
