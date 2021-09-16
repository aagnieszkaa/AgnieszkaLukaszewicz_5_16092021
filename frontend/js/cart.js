
   class CartLine{
    constructor(jsonCartLine){
        jsonCartLine && Object.assign(this, jsonCartLine);
    }};

    class Cart{
        constructor(jsonCartLines){
            jsonCartLines && Object.assign(this, jsonCartLines);
        }
        addToCart(cartLine){
            /*check, si true accumulation de la quantite, sinon ajouter setItem(dans save et l'appeler)
            pusher cartLine
            else - this.jsonCartLines.push(cartLine);
            */
           
        }
        save(jsonCartLines){
            let stringifiedTeddy = JSON.stringify(jsonCartLines);
            localStorage.setItem("object", stringifiedTeddy);
        }
        /*
        remove
        check - verifier si ds local storage elle existe deja, return true ou false, 
        id de l'article en parametre
        boucle sur jsonCartLines._id, quand il le trouve == true
        save(jsonstringify(jsonCartLines))
        this.jsonCartLines - local Storage

        */
    };

function clickAddToCart(specificTeddy){
    let cartButton = document.getElementById('cartButton');
    console.log(specificTeddy);
      
    cartButton.addEventListener('click', function (e){
        e.preventDefault();
        let quantity = parseInt(document.getElementById('quantity').value);

        let jsonCartLine = {
            id : specificTeddy._id,
            name : specificTeddy.name,
            price : specificTeddy.price,
            quantity : quantity
        };
        let cartLine = new CartLine(jsonCartLine);
        let jsonCartLines = getCartLines();
        let cart = new Cart(jsonCartLines);
        cart.addToCart(cartLine);
         })
};

function getCartLines(){
    let listCartLines = localStorage.getItem("cart");
    if (listCartLines !== null){
        return JSON.parse(listCartLines);
    }else {
        return [];
    } /**/  
}

   /*let stringifiedTeddy = JSON.stringify(specificTeddy);
    function setCartItem(stringifiedTeddy){ 
        localStorage.setItem("object", stringifiedTeddy);
    }*/

