let products =  {
    data: [{
        productName: "Regular  White Y-Shirt",
        category:"Topwear",
        price:"30",
        image: "img/T shirt3.jpeg"
    },
    {
        productName: "Beige Short Skirt",
        category:"Watch",
        price:"69",
        image: "img/t-shirt1.jpeg"
    },
    {
        productName: "Sporty Smart Watch",
        category:"Watch",
        price:"84",
        image: "img/t-shirt4.jpeg"
    },
    {
        productName: "R White Y-Shirt",
        category:"Jacket",
        price:"30",
        image: "img/t-shirt2.jpeg"
    },
    {
        productName: "gular White Y-Shirt",
        category:"Topwear",
        price:"66",
        image: "img/t-shirt4.jpeg"
    },
   {
        productName: "Regul  White Y-Shirt",
        category:"Watch",
        price:"30",
        image: "img/t-shirt2.jpeg"
    },
    {
        productName: "Haight  White Y-Shirt",
        category:"Bottomwear",
        price:"49",
        image: "img/T shirt3.jpeg"
    },
    {
        productName: "Haight  White Y-Shirt",
        category:"Bottomwear",
        price:"49",
        image: "img/t-shirt4.jpeg"
    },
    {
        productName: "Haight  White Y-Shirt",
        category:"Bottomwear",
        price:"49",
        image: "img/t-shirt2.jpeg"
    },

],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card)
}


function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else {
                button.classList.remove("active");
            }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "all"){
            element.classList.remove("hide");
        }
        else {
            if(element.classList.contains(value)) {
                element.classList.remove("hide");
            }

            else {
                element.classList.add("hide");
            }
        }
    })

}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput)

    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else {
            cards[index].classList.add("hide");
        }
    })
})

window.onload = () => {
    filterProduct("all");

}
