function onlyCharacter(str) {
    let result = "";

    if (typeof str !== 'string') {
        return 'Invalid';
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                result = result + str[i];
            }
        }
    }

    return result.toUpperCase();
}

console.log(onlyCharacter("  h e llo wor   ld"));