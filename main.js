let response = await fetch("https://dummyjson.com/products");
let responseAsJson = await response.json();
let products = responseAsJson.products;



for(let i = 0; i<products.length;i++){
  let produit = products[i]
  let title = produit.title
  let price = produit.price
  let imageProduit = produit.images[0]
  
  const app = document.querySelector("#app")
  let article = document.createElement("article");
  let H2 = document.createElement("h2");
  let image = document.createElement("img");
  let paragraphe = document.createElement("p")
  let Monnaie = "€"


  app.appendChild(article)

article.appendChild(H2)
H2.textContent = title;

image.setAttribute("src",imageProduit)
article.appendChild(image)

article.appendChild(paragraphe)
paragraphe.textContent = price + " " + Monnaie

}











