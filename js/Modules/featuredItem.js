export default function featuredItem() {
  const item = {
    productTitle: "Gas Cap Handy Wrench",
    productTagline: "A Tool for People with Arthritis",
    productLink: "#",
    productAttributes: {
      attribute1: "Designed to ease the pain of arthritis!",
      attribute2: "Durable, lightweight, reinforced plastic!",
      attribute3: "Flat design fits in glove compartment!"
    },
    learnMoreLink: "#",
    imgFileNames: ["product-blue.png", "product-red.png", "product-purple.png"]
  };

  const title = document.querySelector("#featured-title");
  const tagline = document.querySelector("#featured-tagline");
  const link = document.querySelector("#featured-link");
  const attribute1 = document.querySelector("#featured-attribute1");
  const attribute2 = document.querySelector("#featured-attribute2");
  const attribute3 = document.querySelector("#featured-attribute3");
  const learnMore = document.querySelector("#featured-learnMore");
  const image = document.querySelector("#featured-image");

  title.textContent = item.productTitle;
  tagline.textContent = item.productTagline;
  link.setAttribute("href", item.productLink);
  attribute1.textContent = item.productAttributes.attribute1;
  attribute2.textContent = item.productAttributes.attribute2;
  attribute3.textContent = item.productAttributes.attribute3;
  learnMore.setAttribute("href", item.learnMoreLink);

  // Changed featured item image every 3 seconds
  const images = item.imgFileNames;
  image.setAttribute("src", `./assets/featured/${images[0]}`);

  let index = 1;
  setInterval(function() {
    image.setAttribute("src", `./assets/featured/${images[index]}`);
    if (index === images.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }, 3500);
}
