function totalFine(fare) {
    if (typeof fare !== 'number' || isNaN(fare) || fare <= 0) {
        return 'Invalid';
    } else {
        return fare + fare * (20 / 100) + 30;
    }
}

console.log(totalFine(200));