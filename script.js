const products = [
    {
        name: "Origin Black Premium Tea",
        image: "images/product1.jpg"
    },

    {
        name: "Ela Gold Cardamom Tea",
        image: "images/product2.png"
    },

    {
        name: "Misty Green Whole Leaf Green Tea",
        image: "images/product3.jpg"
    },

    {
       name: "Morning Mist Green Tea Bag",
       image: "images/product4.jpg"
    }
];

let current = 0;

function updateProduct(){

    document.getElementById("product-image").src =
        products[current].image;

    document.getElementById("product-name").innerText =
        products[current].name;

    document.getElementById("selected-product").value =
        products[current].name;
}

function nextSlide(){

    current++;

    if(current >= products.length){
        current = 0;
    }

    updateProduct();
}

function prevSlide(){

    current--;

    if(current < 0){
        current = products.length - 1;
    }

    updateProduct();
}