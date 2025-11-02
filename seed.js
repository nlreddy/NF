const seedData = {
  vegetable: [

   {
        name: "Bottle Gourd",
        image: "images/farm_seedbank/bottlegourd.jpg",
        info: "Fast-growing variety, ideal for summer cultivation."
      },

    {
      name: "Gutti Beera",
      image: "images/farm_seedbank/guthi_beera.jpg",
      info: "High-yielding variety, suitable for organic farms."
    },
    {
      name: "Tomato",
      image: "images/farm_seedbank/tomoto.jpg",
      info: "Heirloom tomato with rich flavor and drought resistance."
    }




  ],
  wildfruit: [
    {
      name: "Wild Mango",
      image: "images/farm_seedbank/wild_mango.jpg",
      info: "Rich in antioxidants, grows well in dry zones."
    },

    {
          name: "Wild muskmelon",
          image: "images/farm_seedbank/putaan_pandu.jpg",
          info: "Rich in antioxidants, grows well in dry zones."
        }

  ],
  seasonalfruit: [
    {
      name: "Mango",
      image: "images/mango.jpg",
      info: "Traditional variety, sweet and fibrous, ideal for summer."
    }
  ],
  pulses: [
    {
      name: "Green Gram",
      image: "images/green-gram.jpg",
      info: "Fast-growing pulse, nitrogen fixer, great for rotation."
    }
  ],
  millets: [
    {
      name: "Foxtail Millet",
      image: "images/foxtail.jpg",
      info: "Ancient grain, drought-tolerant, high in fiber."
    }
  ]
};

function showCategory(category) {
  const gallery = document.getElementById("seedGallery");
  gallery.innerHTML = "";

  seedData[category].forEach(seed => {
    const card = document.createElement("div");
    card.className = "seed-card";
    card.innerHTML = `
      <img src="${seed.image}" alt="${seed.name}" />
      <h3>${seed.name}</h3>
      <p>${seed.info}</p>
    `;
    gallery.appendChild(card);
  });
}