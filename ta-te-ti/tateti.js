const reset = document.getElementById('resetBtn')
const cardElements = []
for (let i = 1; i <= 9; i++){
    cardElements.push(document.getElementById(`card${i}`));
}

cardElements.forEach(cardElements => {
    cardElements.addEventListener('click', function() {
        cardElements.value = true;
    });
});

function start(){
    
}

function restart(){
    cardElements.forEach(cardElements => {
        cardElements.value = false;
    });
}
reset.addEventListener('click', restart)