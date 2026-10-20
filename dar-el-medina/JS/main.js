const modalPlat = document.getElementById('modalPlat');

modalPlat.addEventListener('show.bs.modal', (event) => {
  const bouton = event.relatedTarget;           // bouton cliqué
  const nom = bouton.getAttribute('data-nom');  // attribut data-nom
  modalPlat.querySelector('.modal-title').textContent = nom;
  // à compléter : image, description, prix
});
[
  {
    "id": 1,
    "nom": "Couscous au poisson",
    "categorie": "Plats",
    "prix": 28,
    "image": "https://picsum.photos/seed/couscous/600/400",
    "description": "Semoule fine, mérou et légumes de saison.",
    "nouveau": true
  },
  {
    "id": 2,
    "nom": "Brik à l'œuf",
    "categorie": "Entrées",
    "prix": 6,
    "image": "https://picsum.photos/seed/brik/600/400",
    "description": "Feuille de malsouka croustillante, œuf et thon.",
    "nouveau": false
  }
]
const liste = document.getElementById('liste-plats');

fetch('data/plats.json')
  .then((reponse) => reponse.json())
  .then((plats) => {
    liste.innerHTML = plats.map((plat) => `
      <div class="col">
        <!-- à compléter : la carte du plat -->
      </div>`).join('');
  })
  .catch((erreur) => {
    // à compléter : afficher une alerte Bootstrap .alert-danger
  });
