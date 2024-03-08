const pigeons = ['pigeon normal', 'pigeon blanc', 'pigeon rose'];

const ajouterAuPanier = indexPigeon => {
	const pigeonAuPanier = pigeons[indexPigeon];

	let panier;
	if (localStorage.getItem('panier')) {
		panier = localStorage.getItem('panier') + pigeonAuPanier;
	}

	localStorage.setItem('panier', panier);
};
