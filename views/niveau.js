let Faciles = document.querySelector("#Faciles")
let Moyennes = document.querySelector("#Moyennes")
let Difficiles = document.querySelector("#Difficiles")
let retour3 = document.querySelector("#retour3")


retour3.addEventListener("click",()=>{
   window.location.href="typedequestions.html" 
})
Faciles.addEventListener("click",()=>{
  localStorage.setItem("niveauchoisi","facile")
  window.location.href="Questions.html"
})

Moyennes.addEventListener("click",()=>{
  localStorage.setItem("niveauchoisi","moyen")
  window.location.href="Questions.html"
})

Difficiles.addEventListener("click",()=>{
  localStorage.setItem("niveauchoisi","difficile")
  window.location.href="Questions.html"
})
