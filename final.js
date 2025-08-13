function totalFine(fare) {
    if (typeof fare !== 'number' || isNaN(fare) || fare <= 0) {
        return 'Invalid';
    } else {
        return fare + fare * (20 / 100) + 30;
    }
}


function onlyCharacter(str) {
    let result = '';

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


function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object' || player1 === null || player2 === null) {
        return 'Invalid';
    }

    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2) {
        return player1.name;
    } else if (team2 < team1) {
        return player2.name;
    } else {
        return 'Tie';
    }
}