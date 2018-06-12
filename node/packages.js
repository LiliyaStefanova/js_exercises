const semver = require("semver");


// ~ allows path versions
// ^ allows anything but a major version
// version only freezes the version
console.log(semver.satisfies("2.19.0", "^2.18.1"));
console.log(semver.satisfies("3.0.0", "^2.18.5"));