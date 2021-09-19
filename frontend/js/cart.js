class Cart {
    productsInCart;

    constructor(products) {
        this.productsInCart = products;
    }
    addToCart(product) {
        var added = false;
        this.productsInCart.forEach(element => {
            if (element.id == product.id) {
                element.quantity += product.quantity;
                added = true;
            }
        });
        if (!added){
            this.productsInCart.push(product);
        }
    }
    save(){
        let stringifiedProductsInCart = JSON.stringify(this.productsInCart);
        localStorage.setItem("cart", stringifiedProductsInCart);
    };
}

function clickAddToCart(specificTeddy){
    let cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', function (e){
        e.preventDefault();
        let quantity = parseInt(document.getElementById('quantity').value);

        let jsonProductToAdd = {
            id : specificTeddy._id,
            name : specificTeddy.name,
            price : specificTeddy.price,
            quantity : quantity
        };
        let jsonProductsInCart = getProductsInCartJSON();
        let cart = new Cart(jsonProductsInCart);
        cart.addToCart(jsonProductToAdd);
        cart.save();

        document.querySelector(".confirmationAlert").innerHTML = 
        `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <h5 class="alert-heading">Vous avez ajouté un produit dans votre panier.</h5>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">Continuez les achats</span>
        </button>
        <button type="button" id="redirectionToCart">Panier</button>
        </div>`
        document.getElementById("redirectionToCart").addEventListener("click", function(){
            window.location.assign("shoppingCart.html");
        })
         })
};

function getProductsInCartJSON(){
    let productsInCart = localStorage.getItem("cart");
    if (productsInCart !== null){
        return JSON.parse(productsInCart);
    }else {
        return [];
    } 
}