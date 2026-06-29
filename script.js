console.log("Projeto BFO V2 carregado.");

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
