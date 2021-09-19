let confirmationMessage = document.querySelector(".cardConfirmation");
let params = (new URL(document.location)).searchParams;
let id = params.get('orderId'); 
let price = params.get('orderPrice'); 
confirmationMessage.innerHTML =
    `
        <div class="card-body">
        <h5 class="card-title">Merci pour votre commande numéro ${id} !</h5>
        <p class="card-text">Le prix total de votre commande est de ${price}.</p>
        </div>
    `