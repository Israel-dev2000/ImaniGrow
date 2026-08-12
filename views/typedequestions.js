let retour3 = document.querySelector("#retour3")
retour3.addEventListener("click",()=>{
  window.location.href="accueil.html"
})
let section3 = document.querySelector("#section3")
let section2=document.querySelector("#section2")
let info = document.querySelector("#info")
info.addEventListener("click",()=>{
    section2.style.display="none"
    section3.classList.remove("hidden")
    
})
let retour4= document.querySelector("#retour4")
retour4.addEventListener("click",()=>{
  section2.style.display="flex"
  section3.classList.toggle("hidden")
})
let Personnages = document.querySelector("#Personnages")
let Livres = document.querySelector("#Livres")
let Miracles = document.querySelector("#Miracles")
let Evenements = document.querySelector("#Evenements")
let Citations = document.querySelector("#Citations")
let Histoires = document.querySelector("#Histoires")

Personnages.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","Personnages")
  window.location.href="niveau.html"
})

Livres.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","livres")
  window.location.href="niveau.html"
})

Miracles.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","Miracles")
  window.location.href="niveau.html"
})

Evenements.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","Evenements")
  window.location.href="niveau.html"
})

Citations.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","Citations")
  window.location.href="niveau.html"
})

Histoires.addEventListener("click",()=>{
  localStorage.setItem("themechoisi","Histoires")
  window.location.href="niveau.html"
})