const checkbox = document.getElementById('sound_checkbox');
const label = document.getElementById('label_sound');
const hino = new Audio('audio/Avicii_-_The_Nights.mp3');

function playUSA(){
    hino.volume = 0.4;
    hino.play();
}

checkbox.addEventListener('change', function(){
    if(checkbox.checked == true){
        hino.pause();
        label.textContent = "";
        label.style.backgroundColor = "rgb(75, 75, 75)";
    }else{
        hino.play();
        label.textContent = "";
        label.style.backgroundColor = "";
    }
})

function changeFundo(){
    const buttonChecked = document.querySelector('input[name="contraste"]:checked').value;
    const body = document.querySelector("body")
    switch (buttonChecked){
        case 'normal':
            body.classList.remove("white");
            console.log("normal")
            break

        case 'branco':
            body.classList.toggle("white");
            console.log("branco")
            break

    }
}


let animationPlay = 0;
const header = document.getElementById("titulo_header")
const secondItem = header.children[0].childNodes[3];
const observer = new IntersectionObserver(entries =>{
    if(animationPlay == 0){
        if(entries[0].intersectionRatio < 0.7){
            header.classList.remove('animation_start')
            secondItem.classList.remove('animation_title_second');
        }else{
            header.classList.toggle('animation_start')
            secondItem.classList.toggle('animation_title_second');
            animationPlay = 1;
        }
    }
},{
    threshold: 0.7
})
observer.observe(header);



function irConteudo(){
    window.scrollTo(0, 1549);
}
function irRodape(){
    window.scrollTo(0, 2685);
}
 