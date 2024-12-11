// Fetch the JSON data
fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.getElementById("product-list");

        // Filter products with IDs 6 to 10
        const filteredProducts = data.filter(product => product.id >= 4 && product.id <= 6);

        // Render the filtered products
        filteredProducts.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product1");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div>
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p class="price">Price: ₱${product.Price.toFixed(2)}</p>
                </div>
            `;
            productList.appendChild(productItem);
        });
    })
    
    .catch((error) => {
        console.error("Error fetching the product data:", error);
    });
