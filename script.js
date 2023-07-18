const switchEl = document.querySelector('.switch input');
const monthlyCards = document.querySelector('.cards.monthly')
const annuallCards = document.querySelector('.cards.annuall')


switchEl.addEventListener('click', () => {
    if (switchEl.checked) {
        monthlyCards.style.display = 'flex'
        annuallCards.style.display = 'none'
    } else {
        monthlyCards.style.display = 'none'
        annuallCards.style.display = 'flex'
    }
})