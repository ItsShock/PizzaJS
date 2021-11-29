fetch("https://raw.githubusercontent.com/alexsimkovich/patronage/main/api/data.json")
.then(data => data.json())
.then(data => {
    let valueCurrency = 0;
    let id = 0;
    data.forEach(element => {
        const shoppingCart = document.querySelector(".shoppingCart");
        const pizzas = document.querySelector(".pizzas");
        const box = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const ingredients = document.createElement("p");
        const price = document.createElement("h4");
        const btn = document.createElement("button");
        const totalPrice = document.querySelector(".totalPrice");
        
        box.className = "box";
        ingredients.className = "ingredients";
        btn.className = "btn";
        
        img.src = element.image;
        img.className = "img";
        
        title.innerHTML = element.title;
        
        ingredients.innerHTML = element.ingredients;
        
        price.innerHTML = element.price.toFixed(2) + " zł";
        
        btn.innerHTML = "Dodaj do koszyka";
        
        box.appendChild(img);
        box.appendChild(title);
        box.appendChild(ingredients);
        box.appendChild(price);
        box.appendChild(btn);
        pizzas.appendChild(box);


        btn.addEventListener("click", (e) => {
            valueCurrency = valueCurrency + element.price;

            const pizza = document.createElement("div");
            pizza.className = "pizzaList";
            const pizzaLi = document.createElement("li");
            pizzaLi.className = "pizzaLi";
            const pizzaPrice = document.createElement("p");
            pizzaPrice.className = "pizzaPrice";
            const btnRemove = document.createElement("button");
            btnRemove.className = "btnRemove";
            btnRemove.innerText = "X";
            
            pizzaLi.innerText = title.textContent;
            pizzaPrice.innerText = price.textContent;

            pizza.id = id++;
            console.log(pizza.id)
            pizza.appendChild(pizzaLi);
            pizza.appendChild(pizzaPrice);
            pizza.appendChild(btnRemove);
            
            totalPrice.innerText = "Całkowita cena: " + valueCurrency.toFixed(2);

            shoppingCart.prepend(pizza);
 
            btnRemove.addEventListener("click", (e) => {
                pizza.remove();
                valueCurrency = valueCurrency - element.price;
                if( valueCurrency != 0)
                {
                    totalPrice.innerText = "Całkowita cena: " + valueCurrency.toFixed(2);
                }
                else
                {
                    totalPrice.innerText = "Głodny? Zamów naszą pizzę";
                }
            })
        })

    });
    
})
.catch(err => console.log(err));