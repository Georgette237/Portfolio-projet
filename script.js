

// Scroll vers la section Projets quand on clique sur le bouton "Voir mes projets"
document.getElementById('voir-projets-btn').addEventListener('click', () => {
    document.getElementById('projets').scrollIntoView({ behavior: 'smooth' });
});

// Scroll vers la section Projets quand on clique sur le bouton "Voir mes competences"
document.getElementById('voir-projets-btn').addEventListener('click', () => {
    document.getElementById('competences').scrollIntoView({ behavior: 'smooth' });
});

// Scroll vers la section Projets quand on clique sur le bouton "contact"
document.getElementById('voir-projets-btn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Téléchargement fictif du CV (exemple)
document.getElementById('telecharger-cv').addEventListener('click', () => {
    alert('Téléchargement du CV en cours...');
    // Ici, vous pouvez ajouter un vrai lien pour télécharger un fichier, par exemple :
     window.location.href = 'fichier/Cv_KALDJOB.pdf';
});


// Simple gestion du formulaire contact pour empêcher l'envoi vide
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value;
  const nom = document.getElementById("nom").value;
  const sujet = document.getElementById("sujet").value;
  const message = document.getElementById("message").value;

  if (!prenom || !nom || !sujet || !message) {
    alert("Merci de remplir tous les champs.");
    return;
  }

  // Ici vous pouvez gérer l'envoi réel (ex: fetch API, integration backend)
  alert(`Merci ${prenom} pour votre message. Je vous répondrai rapidement !`);
  this.reset();
  //ton numero whatsapp
  const phone ="237691132190";
  //construction du message 
  const text = "prenom : " +prenom+ "" + "Nom :" +nom+ "" + "Sujet:"+sujet+ "" + "Message:"+message;
  const url="https://wa.me/" +phone+ "?text=" + text;

  //redirection vers whatsapp
  window.location.href=url;
});
