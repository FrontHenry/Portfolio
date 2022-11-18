function animacaoBotaoContato() {
  let contato = document.getElementById("animation");

  if (document.getElementsByClassName("animation").length) {
    contato.classList.add("animation");
  } else {
    contato.classList.toggle("contato-action");
  }
}

//Apresentação 

document.getElementById("dh-1").addEventListener("click", function() {
  document.getElementById("dh-1").classList.add('mouseenter');
  document.getElementById("ap1").classList.add('mouseenter');
});

document.getElementById("ap1").addEventListener("mouseleave", function() {
  document.getElementById("ap1").classList.remove('mouseenter');
  document.getElementById("dh-1").classList.remove('mouseenter');
});
document.getElementById("dh-2").addEventListener("click", function() {
  document.getElementById("dh-2").classList.add('mouseenter');
  document.getElementById("ap2").classList.add('mouseenter');
});

document.getElementById("ap2").addEventListener("mouseleave", function() {
  document.getElementById("ap2").classList.remove('mouseenter');
  document.getElementById("dh-2").classList.remove('mouseenter');
});
document.getElementById("dh-3").addEventListener("click", function() {
  document.getElementById("dh-3").classList.add('mouseenter');
  document.getElementById("ap3").classList.add('mouseenter');
});

document.getElementById("ap3").addEventListener("mouseleave", function() {
  document.getElementById("ap3").classList.remove('mouseenter');
  document.getElementById("dh-3").classList.remove('mouseenter');
});
document.getElementById("dh-4").addEventListener("click", function() {
  document.getElementById("dh-4").classList.add('mouseenter');
  document.getElementById("ap4").classList.add('mouseenter');
});

document.getElementById("ap4").addEventListener("mouseleave", function() {
  document.getElementById("ap4").classList.remove('mouseenter');
  document.getElementById("dh-4").classList.remove('mouseenter');
});

