function totalFine(fare) {
    if (typeof fare !== 'number' || isNaN(fare) || fare <= 0) {
        return 'Invalid';
    } else {
        return fare + fare * (20 / 100) + 30;
    }
}


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