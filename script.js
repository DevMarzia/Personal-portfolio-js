document.addEventListener('DOMContentLoaded', () => {

    // ------------------------ NAVBAR MENU ------------------------
  
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle hamburger e nav menu al click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
  
    // Rimuovo la classe 'active' dai menu quando un link viene cliccato
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
  
     // Chiudo il menu al momento dello scroll
    window.addEventListener('scroll', () => {
      if (hamburger.classList.contains('active')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      }
    });
  });
  
    // ------------------------ EMAIL ------------------------
    
    emailjs.init("OG4kp_nwEjiwow8yh");
  
      const form = document.getElementById('contact-form');
  
      form.addEventListener('submit', function(event) {
          event.preventDefault();
  
          const formData = {
              user_name: document.getElementById('username').value,
              company: document.getElementById('company').value,
              user_email: document.getElementById('email').value,
              message: document.getElementById('message').value
          };
  
          const submitButton = form.querySelector('input[type="submit"]');
          submitButton.value = 'Invio in corso...';
          submitButton.disabled = true;
  
          emailjs.send("service_36neiqi", "template_c480ceg", formData)
              .then(function(response) {
                  console.log("SUCCESS!", response.status, response.text);
                  alert("Messaggio inviato con successo!");
                  form.reset();
              })
              .catch(function(error) {
                  console.log("FAILED...", error);
                  alert("Si è verificato un errore nell'invio del messaggio. Riprova più tardi.");
              })
              .finally(function() {
                  submitButton.value = 'Invia il messaggio';
                  submitButton.disabled = false;
              });
      });
  });
  // ------------------------ BACK TO TOP --------------------------
  
  // Questo event listener può rimanere fuori dal DOMContentLoaded 
  // perché si riferisce all'evento scroll
  document.addEventListener("scroll", () => {
    const backToTop = document.querySelector(".back-to-top");
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
  
    if (scrollPosition >= documentHeight - 100) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
  });
  
  
  
  