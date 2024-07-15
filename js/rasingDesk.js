document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");
  const products = [
    {
      name: "JOY worker Desk",
      brand: "JOY Worker",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '23.6"D x 47.2"W x 28.3"H',
      photo: 1,
    },
    {
      name: "Vivo Desk",
      brand: "VIVO",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '24"D x 55"W x 45"H',
      photo: 2,
    },
    {
      name: "ErGear Desk",
      brand: "ErGear",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '24"D x 55"W x 45"H',
      photo: 3,
    },
    {
      name: "VIVO Desk Version-2",
      brand: "VIVO",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '25.5"D x 32"W x 6.5"H',
      photo: 4,
    },
    {
      name: "Uncaged Desk",
      brand: "Uncaged Ergonomics",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '30"D x 60"W x 46.7"H',
      photo: 5,
    },
    {
      name: "FEZIBO Triple Motor",
      brand: "FEZIBO",
      specialFeature: "Electric",
      adjustable: "true",
      dimension: '62.99"D x 47.24"W x 29.53"H',
      photo: 6,
    },
  ];
  const displayProducts = () => {
    products.forEach((product, i) => {
      let newDiv = document.createElement("div");
      newDiv.className = "grid-item";
      newDiv.innerHTML = `
    <div class="img-holder">
      <img src="./public/products/${i + 1}/photo-1.png" alt="" />
    </div>
    <div class="contact">
      <h2>${product.name}</h2>
      <div class="detail">
        <p>Brand</p>
        <p><strong>${product.brand}</strong></p>
        <p>Special Feature</p>
        <p><strong>${product.specialFeature}</strong></p>
        <p>Adjustable</p>
        <p>
          ${
            product.adjustable
          } <img src="./public/icon/circle-check-256.png" alt="" />
        </p>
        <p>Dimensions</p>
        <p>${product.dimension}</p>
      </div>
      <div class="btn-holder">
      <div class="qty-input">
      <button class="qty-count" type="button">
        <img src="./public/icon/Minus-256.png" alt="" />
      </button>
      <input
        class="product-qty"
        type="number"
        name="product-qty"
        min="0"
        max="100"
        value="1"
        step="0.01"
      />
      <button class="qty-count" data-action="add" type="button">
        <img src="./public/icon/Plus-256.png" alt="" />
      </button>
    </div>
        <div class="btn-container">
          <button class="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
      container.appendChild(newDiv);
    });
  };

  displayProducts();
});
