let paupiettes = [];

fetch("paupiette.json")
.then(res => res.json())
.then(data => {
    paupiettes = data;

    if (paupiettes.length === 0) {
        document.getElementById("nom").innerText = "Aucune paupiette disponible";
        return;
    }

    paupietteDuJour();
})
.catch(error => {
    console.error("Erreur chargement JSON :", error);
    document.getElementById("nom").innerText = "Erreur de chargement";
});

function paupietteDuJour() {
    const today = new Date();
    const index = today.getDate() % paupiettes.length;
    afficher(paupiettes[index]);
}

function randomPaupiette() {
    const index = Math.floor(Math.random() * paupiettes.length);
    afficher(paupiettes[index]);
}

function afficher(p) {
    document.getElementById("nom").innerText = p.nom;
    document.getElementById("desc").innerText = p.description;
    document.getElementById("auteur").innerText = "par " + p.auteur;
    document.getElementById("image").src = p.image;
}
