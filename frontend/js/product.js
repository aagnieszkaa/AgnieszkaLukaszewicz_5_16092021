let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id);

/*fetch a faire pour recuperer les cards, 
boucle sur les couleurs, select vide js dans innerHTML + 
boucle sur le tableau appendChild dans select, 
bouton ajoutez au panier
liste deroulante de quantite ou input,
localStorage pour le panier*/
fetch("http://localhost:3000/api/teddies/" + id)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(jsonSpecificTeddy) {
   showTeddy(jsonSpecificTeddy);
    });

    function showTeddy(jsonSpecificTeddy){
    let div = document.querySelector(".teddy-card");
    let specificTeddy = new SpecificProduct(jsonSpecificTeddy);
    div.innerHTML +=
    `<div class="card mb-3">
        <img src="${specificTeddy.imageUrl}" alt="Photo de jouet" class="card-img-top image img-fluid">
        <div class="card-body">
            <h5 class="card-title">${specificTeddy.name}</h5>
            <p class="card-text">
            <form>
                <label for="color-select">Choisissez la couleur :</label>
                <select name="colors" id="color-select"></select>
            </form>
            <form>
                <label for="quantity">Quantité : </label>
                <input type="number" id="quantity" name="quantity" min="1" max="10">
            </form>
                <ul>
                    <li>ID : ${specificTeddy._id}</li>
                    <li>Description : ${specificTeddy.description}</li>
                    <li>Prix : ${specificTeddy.getFormattedPrice()}</li>
                    <li id="totalPrice">Prix total : </li>
                </ul>
            </p>
            <div class="d-flex justify-content-center">
                <a class="btn btn-primary" role="button" id="cartButton">Ajoutez au panier</a>
            </div>
        </div>
    </div>` 
    specificTeddy.getColor();
    specificTeddy.getSumPrice();
    clickAddToCart(specificTeddy);

}


