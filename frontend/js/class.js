class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }
    getFormattedPrice (){
        let price = this.price;
        let formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
        return formattedPrice;
    }
};

class SpecificProduct{
    constructor(jsonSpecificProduct){
        jsonSpecificProduct && Object.assign(this, jsonSpecificProduct);
    }
    getFormattedPrice (){
        let price = this.price;
        let formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
        return formattedPrice;
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
        let pricePerOne = this.price; 
        quantityButton.addEventListener('change', function(e){
            document.getElementById('totalPrice').innerHTML = 'Prix total : ' + Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(e.target.value * pricePerOne);
        });
    }
};

