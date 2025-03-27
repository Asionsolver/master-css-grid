let cards = document.querySelectorAll('.card-container');
let container = document.querySelector('.container');
// console.log(container);
function rotateCard() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains('away')) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;

        }
        else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

rotateCard();

window.addEventListener('scroll', () => {
    let distance = window.innerHeight / 2;
    console.log(distance);
    let topValue = container.getBoundingClientRect().top;
    let index = -1 * (topValue / distance + 1);
    index = Math.floor(index);
    for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add('away');
        } else {
            cards[i].classList.remove('away');
        }
    }
    rotateCard();
});

