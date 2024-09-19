const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) { //wrong wayy
//     console.log(key);
// }

// Iterate over keys
for (const key of map.keys()) {
    console.log(key);
}

// Iterate over values
for (const value of map.values()) {
    console.log(value);
}

// Iterate over key-value pairs
for (const [key, value] of map.entries()) {
    console.log(key, ':-', value);
}
