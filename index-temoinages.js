
let position = 0;

function moveSlide(direction){

    const cards = document.getElementById("cards-temoinages");

    position += direction;

    if(position < 0){
        position = 0;
    }


    if(position > 1){
        position = 1;
    }


    cards.style.transform =
    `translateX(-${position * 300}px)`;

}
