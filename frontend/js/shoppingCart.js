let cartProducts = getProductsInCartJSON();

let div = document.querySelector(".ordered-products");
let totalPrice = 0;

cartProducts.forEach(jsonCartProduct => {
    let cartProduct = new CartProduct(jsonCartProduct);
    let productTotalPrice = cartProduct.price * cartProduct.quantity;
    totalPrice += productTotalPrice;
    div.innerHTML += `
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">${cartProduct.name}</h5>
            <p class="card-text">
                <ul>
                    <li>Quantité : ${cartProduct.quantity}</li>
                    <li>Prix : ${cartProduct.getFormattedPrice()}</li>
                    <li>Prix total : ${_getFormattedPrice(productTotalPrice)}</li>
                </ul>
            </p>
        </div>
    </div>
    `
});

div = document.querySelector(".products-summary");
div.innerHTML += `
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">Récapitulatif de la commande</h5>
            <p class="card-text">
                <ul>
                    <li>Prix total : ${_getFormattedPrice(totalPrice)}</li>
                </ul>
            </p>
        </div>
    </div>
    `



        document.getElementById('orderButton').addEventListener('click', function (e){
            e.preventDefault();
            let contact = {
                    firstName : document.getElementById("prenom").value,
                    lastName : document.getElementById("nom").value,
                    address : document.getElementById("adresse").value,
                    city : document.getElementById("ville").value,
                    email : document.getElementById("mail").value
                }
                
            let products = [];
            getProductsInCartJSON().forEach(element => {
                for(i=0; i < element.quantity; i++)
                {
                    products.push(element.id);
                }  
            }); /*Boucle sur la quantité pour ajouter autant des 
            fois l'id particulier qu'on a choisi la quantité*/
            let data = {
                contact, products
            }
            
            fetch("http://localhost:3000/api/teddies/order",
            {
                method : "POST",
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                  },              
                body: JSON.stringify(data)
            }).then(response => response.json())
            .then(function(response){
                let orderResult = {
                    orderId : response.orderId,
                    orderPrice : _getFormattedPrice(totalPrice)
                }
                
                let stringifiedResult = JSON.stringify(orderResult);
                localStorage.setItem("orderResult", stringifiedResult);  
                console.log(orderResult);
                console.log(stringifiedResult);
                console.log(JSON.parse(localStorage.getItem("orderResult")))
            })
           .then(function(){
            let orderResult = JSON.parse(localStorage.getItem("orderResult"));
                window.location = `confirmationPage.html?orderId=${orderResult.orderId}&orderPrice=${orderResult.orderPrice}`;
            })
            .then(function(){
                /*let orderResult = JSON.parse(localStorage.getItem("orderResult"));
                console.log(orderResult);*/
                let confirmationMessage = document.querySelector(".cardConfirmation");
                confirmationMessage.innerHTML =
                `
                    <div class="card-body">
                    <h5 class="card-title">Merci pour votre commande numéro ${orderResult.orderId} !</h5>
                    <p class="card-text">Le prix total de votre commande est de ${orderResult.orderPrice}.</p>
                    </div>
                `
            })
        })
            
        document.querySelector(".clearButton").addEventListener("click", function(){
            localStorage.removeItem("cart");
            window.location.reload(true);
        });