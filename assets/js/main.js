//SCROLL REVEAL

ScrollReveal().reveal('h1', {
  duration: 1000,
  scale: 0.5,
  reset: false
});

ScrollReveal().reveal('h2', {
  duration: 2000,
  scale: 0.3,
  reset: false
});

ScrollReveal().reveal('.impair', {
  rotate: { x: 0, y: 0, z: -180 },
  duration: 800,
  distance: '50px',
  origin: 'left',
  delay: 200,
  interval: 200,
  reset: true
});
ScrollReveal().reveal('.pair', {
  rotate: { x: 0, y: 0, z: 180 },
  duration: 1000,
  distance: '50px',
  origin: 'right',
  delay: 400,
  interval: 300,
  reset: true
});

ScrollReveal().reveal('.diplomes', {
  duration: 1500,
  reset: true,
  delay: 300,
  interval: 200,
  viewFactor: 0.2
});

ScrollReveal().reveal('.jobs', {
  duration: 2500,
  reset: true,
  delay: 200,
  interval: 200,
  viewFactor: 0.2
});

ScrollReveal().reveal('.titreReal', {
  duration: 2000,
  reset: true,
  viewFactor: 0.2
});

ScrollReveal().reveal('#langue1', {
  duration: 1500,
  rotate: { x: 90, y: 0, z: 0 },
  origin: 'bottom',
  delay: 400,
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('#langue2', {
  duration: 1500,
  rotate: { x: 90, y: 0, z: 0 },
  origin: 'bottom',
  delay: 400,
  reset: true,
  viewFactor: 0.2
});
ScrollReveal().reveal('.contact', {
  duration: 3000,
  delay: 100,
  origin: 'top',
  reset: true,
  viewFactor: 0.2
});

//fixed NAVBAR

window.onscroll = function () { fixedNavbar(), scrollFunction() };
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

/*
listForm.forEach(function (element) {
  element.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch("url-traitement.php", {
      method: "POST",
      body: formData
    })
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((texteServeur) => {
        console.log(texteServeur);
        var baliseConfirmation = document.querySelector("form .confirmation");
        baliseConfirmation.innerHTML = texteServeur;
      });
  });
});
var listeFormAjax = document.querySelectorAll("form.ajax");
listeFormAjax.forEach(function (formulaire) {
  // on ajoute un event listener sur 'submit'
  formulaire.addEventListener('submit', function (event) {
    event.preventDefault(); // bloque l'envoi classique du formulaire

    // JE PEUX ENVOYE
  });
})
*/