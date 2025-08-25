async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error(res.status);
  return res.json(); // returnerar data för vidare användning
}

async function init() {
  try {
    const products = await fetchProducts();
    renderData(products);
  } catch (err) {
    console.error("Kunde inte hämta produkter:", err);
    // ev. visa felmeddelande i UI
  }
}

init();

function renderData(products) {
  
    const productsContainer = document.querySelector('.products');
    

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        `;
        productsContainer.appendChild(productDiv);
    })
  
}

/*
[
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        "rating": {
            "rate": 3.9,
            "count": 120
        },
    }
]
*/