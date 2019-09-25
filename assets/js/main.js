//SCROLL REVEAL

ScrollReveal().reveal('h1', {
  duration: 1000,
  scale: 0.8,
  reset: false
});

ScrollReveal().reveal('h2', {
  duration: 2000,
  scale: 0.6,
  reset: false
});

ScrollReveal().reveal('.comp', {
  duration: 1500,
  distance: '20px',
  origin: 'bottom',
  //scale: 1,
  reset: true
});
ScrollReveal().reveal('.comp img', {
  duration: 2000,
  distance: '30px',
  origin: 'top',
  //scale: 1,
  reset: true
});

ScrollReveal().reveal('.diplomes', {
  duration: 2000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.jobs', {
  duration: 3000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.titreReal', {
  duration: 2000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('.reveallangues', {
  duration: 2000,
  distance: '0px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('#langue1', {
  duration: 1500,
  origin: 'left',
  distance: '100px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('#langue2', {
  duration: 2000,
  origin: 'right',
  distance: '90px',
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('.contact', {
  duration: 3000,
  origin: 'top',
  distance: '30px',
  reset: true,
  viewFactor: 0.2
});

//fixed NAVBAR

window.onscroll = function () {fixedNavbar(), scrollFunction()};
var navbar = document.querySelector("nav");
var mybutton = document.querySelector("#toTop");
var sticky = navbar.offsetTop;

function fixedNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//TO TOP BUTTON

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    $(mybutton).fadeIn(800);
  } else {
    $(mybutton).fadeOut(800)
  }
}
mybutton.addEventListener('click', function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, 900);
});

//SMOOTH SCROLLING TO ANCHORS

$('a[href*=\\#]').on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
});

//JS QUI ENVOIE LES INFOS DES FORM EN AJAX
var listForm = document.querySelectorAll("form.ajax");

listForm.forEach(function(element){
  element.addEventListener('submit', function(event){
    event.preventDefault();
    var formData = new FormData(this);
    fetch("url-traitement.php",{
      method: "POST",
      body: formData
    })
    .then((response)=>{
      console.log(response);
      return response.text();
    })
    .then((texteServeur)=>{
      console.log(texteServeur);
      var baliseConfirmation = document.querySelector("form .confirmation");
      baliseConfirmation.innerHTML = texteServeur;
    });
  });
});

/*
var listeFormAjax = document.querySelectorAll("form.ajax");
listeFormAjax.forEach(function (formulaire) {
  // on ajoute un event listener sur 'submit'
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // bloque l'envoi classique du formulaire

    // JE PEUX ENVOYE
  });
})
*/