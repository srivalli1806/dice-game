function rollDice() {
    var list = document.querySelectorAll('img'); // selects dice images

    const first = Math.floor(Math.random() * 6) + 1;
    const imageFirst = 'assets/dice' + first + '.png';
    list[0].setAttribute('src', imageFirst);

    const second = Math.floor(Math.random() * 6) + 1;
    const imageSecond = 'assets/dice' + second + '.png';
    list[1].setAttribute('src', imageSecond);

    if (first < second) {
        document.querySelector('h1').innerHTML = 'The winner is User 2';
    } else if (first > second) {
        document.querySelector('h1').innerHTML = 'The winner is User 1';
    } else {
        document.querySelector('h1').innerHTML = 'It is a tie/draw!';
    }
}