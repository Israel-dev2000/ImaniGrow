
let section2 = document.querySelector("#section2")
        //  btn de choix des langues
// let langue= document.querySelector("#langue")
// langue.addEventListener("click",()=>{
//     section2.style.display="none"
//     divlangue.style.display="flex"
// })
                // sortir dans les langues
let retoursection2= document.querySelector("#retoursection2")
retoursection2.addEventListener("click",()=>{
    section2.style.display="flex"
    divlangue.style.display="none"

})
        
let divsortie = document.querySelector("#divsortie")

    //  btn principal de la sortie de l'application
let x = document.querySelector("#x")
x.addEventListener("click",()=>{
    section2.style.display="none"
    divsortie.classList.toggle("toggle")
})
    //    sortie app non
let non = document.querySelector("#non")
non.addEventListener("click",()=>{
    section2.style.display="flex"
     divsortie.classList.toggle("toggle")

})
        // sortie app oui
let body = document.querySelector("#body")
let oui = document.querySelector("#oui")
oui.addEventListener("click",()=>{
    body.style.display="none"
})

    //   apropos
let propos=document.querySelector("#propos")
propos.addEventListener("click",()=>{
    section2.style.display="none"
    apropos.classList.toggle("toggle")
})

let retour2 = document.querySelector("#retour2")
retour2.addEventListener("click",()=>{
    section2.style.display="flex"
    apropos.classList.toggle("toggle")

})
let music = document.querySelector("#music")
let novolume= document.querySelector("#novolume")
let volume = document.querySelector("#volume")
volume.addEventListener("click",()=>{
    novolume.classList.toggle("non")
    if (music.paused) {
        music.play();
    }else{
        music.pause();
    }

})


// logique de jeu



let jouer = document.querySelector("#jouer")
let btnjouer = document.querySelector("#btnjouer")
btnjouer.addEventListener("click",()=>{
    window.location.href = "typedequestions.html"
})
