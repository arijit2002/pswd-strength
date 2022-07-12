const { passwordStrength } = require('check-password-strength')

console.log(passwordStrength('asdfasdf').value)
// Too weak (It will return Too weak if the value doesn't match the RegEx conditions)

console.log(passwordStrength('asdf1234').value)
// Weak

console.log(passwordStrength('Asd1234!').value)
// Medium

console.log(passwordStrength('A@2asdF2020!!*').value)