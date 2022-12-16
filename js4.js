// текущая страница выделяется
// чтобы это работало, нужно добаить к каждому пункту меню id
/*
window.addEventListener('load', function () {

    let currentPosition = document.location.pathname;
    currentPosition = currentPosition.substring(11, currentPosition.length);
    console.log(currentPosition)

    let one = document.getElementById('one');
    let one_href = one.getAttribute("href");

    let two = document.getElementById('two');
    let two_href = two.getAttribute("href");

    let three = document.getElementById('three');
    let three_href = three.getAttribute("href");

    let four = document.getElementById('three');
    let four_href = four.getAttribute("href")

    switch (currentPosition){
        case one_href:
            console.log("eee")
            one.classList.toggle("active");
            break;
        case two_href:
            two.classList.toggle("active");
            break;
        case three_href:
            three.classList.toggle("active");
            break;
        case four_href:
            four.classList.toggle("active");
            break;

    }

})
*/

/*
window.addEventListener('load', function () {

    let currentPosition = document.location.pathname;
    currentPosition = currentPosition.substring(5, currentPosition.length);

    let classes = document.getElementsByClassName("block");

    for (let i = 0; i < 4; i++) {
       var href = classes[i].getAttribute("href");
       if(href === currentPosition){
           classes[i].classList.toggle("active");
       }
    }
})
*/

