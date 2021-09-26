function _getFormattedPrice (price){
    let formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price / 100);
    return formattedPrice;
}

class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }
    getFormattedPrice (){
        return _getFormattedPrice(this.price);
    }
};

class SpecificProduct{
    constructor(jsonSpecificProduct){
        jsonSpecificProduct && Object.assign(this, jsonSpecificProduct);
    }
    getFormattedPrice (){
        return _getFormattedPrice(this.price);
    }
    getColor (){
        let colors = this.colors;
        for(let color of colors)
        {
            document.getElementById('color-select').innerHTML 
            += `<option value="${color}">${color}</option>`
        }
    }
    getSumPrice (){
        let quantityButton = document.getElementById('quantity');
        let pricePerOne = this.price / 100; 
        quantityButton.addEventListener('change', function(e){
            document.getElementById('totalPrice').innerHTML = 'Prix total : ' + Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(e.target.value * pricePerOne);
        });
    }
};

class CartProduct{
    constructor(jsonCartProduct){
        jsonCartProduct && Object.assign(this, jsonCartProduct);
    }
    getFormattedPrice (){
        return _getFormattedPrice(this.price);
    }
}