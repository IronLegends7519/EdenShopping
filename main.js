let app = document.querySelector('#app') 
let left = document.querySelector("#left"); 
let right = document.querySelector("#right"); 
const coolId = document.querySelector("#cool")
let monnaie = "$" 
let a = 0; 
let products; 
let imageResponse; 
let responseAsJsonImage;
let productsImage;
let img;
let imgBtn;
let f = 1

let response = await fetch("https://dummyjson.com/products"); 
let responseAsJson = await response.json(); 
products = responseAsJson.products; 




creerArticle(a) 
async function creerArticle(index) {
  imageResponse = await fetch("https://dummyjson.com/products/" + (a+1)) 
responseAsJsonImage = await imageResponse.json();
productsImage = responseAsJsonImage;
  app.textContent = '' 
  let article = document.createElement('article') 
  let h2 = document.createElement('h2') 
  img = document.createElement('img') 
  let p = document.createElement('p') 
  img.setAttribute('src',products[index].images[0]) 
  img.setAttribute('class', "img")
  
  h2.textContent = products[index].title 
  p.textContent = products[index].price + " " + monnaie 
  app.appendChild(article) 
  article.appendChild(h2) 
  article.appendChild(img) 
  article.appendChild(p) 

  
  img.addEventListener('click', ()=>{
    coolId.textContent=''
    let btnClose = document.createElement('button')
    btnClose.setAttribute('id','btnClose')
    coolId.appendChild(btnClose)
    for(let i = 0; i<productsImage.images.length;i++){

      let imgId = document.createElement('img')
      imgId.setAttribute('src', productsImage.images[i])
      imgId.setAttribute('class', "imgId")
      coolId.appendChild(imgId)
    }
    btnClose.addEventListener('click', ()=>{

        left.disabled = false
        right.disabled = false
        coolId.style.display = 'none'
    })

      coolId.style.display = 'block'
      left.disabled = 'true'
      right.disabled = 'true'


  })
} 
  
left.addEventListener('click', ()=>{ 
  if(a == 0){ 
    a = products.length - 1; 
  } 
  else { 
    a-- 
  } 
  creerArticle(a) 
}) 

  right.addEventListener('click', ()=>{ 
    
    if(a == products.length-1){ 
      a = 0; 
    } 
    else { 
      a++ 
    } 
    creerArticle(a) 
  }) 







