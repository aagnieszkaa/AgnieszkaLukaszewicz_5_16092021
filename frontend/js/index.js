
    fetch("http://localhost:3000/api/teddies")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(jsonListTeddies) {
       showCards(jsonListTeddies);

        });

        function showCards(jsonListTeddies){
            for(let jsonTeddy of jsonListTeddies){
                let teddy = new Product(jsonTeddy);
                let div = document.querySelector(".teddy-cards");
                div.innerHTML += `

                  <li class="card mb-3 text-center bg-light  col-12 col-md-5">
                  <img src="${teddy.imageUrl}" alt="Photo de jouet" class="image img-fluid card-img-top">
                    <div class="card-body">
                      <a href="product.html?id=${teddy._id}" class="stretched-link card-title link h5">${teddy.name}</a>
                      <p class="card-text">${teddy.getFormattedPrice()}</p>
                    </div>
                  </li>

                `
            };
        }

      