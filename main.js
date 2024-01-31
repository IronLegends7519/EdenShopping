
const app = document.querySelector('#app');
const body = document.querySelector('body');
let left = document.querySelector("#left"); 
let right = document.querySelector("#right"); 
const coolId = document.querySelector("#cool");
const filterCategory = document.querySelector("#filterCategorie")
const monnaie = "$";
let a = 0; 
let i = 0;
let products; 
let imageResponse; 
let responseAsJsonImage;
let productsImage;
let img;
let imgBtn;
let f = 1;
let result;

let response = await fetch("https://dummyjson.com/products"); 
let responseAsJson = await response.json(); 
products = responseAsJson.products; 
  
let copie = products

function category(){
  result=[];
  for(let j = 0; j<copie.length;j+=5){
    result.push(copie[j].category)
  }
  for(let y = 0; y<result.length;y++){
    let option = document.createElement('option')
    option.setAttribute('id','optionCategory')
    option.textContent = result[y]
    filterCategory.appendChild(option)
  }
  console.log(result)
}
category()


filterCategory.addEventListener('click',()=>{
  console.log(filterCategory.value)
  if(filterCategory.value === 'all'){
    creerArticle(0);
    a=0
  }

  else if(filterCategory.value === 'smartphones'){
    console.log('bonjour')
    left.style.display = 'none';
    right.style.display = 'none';
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    img = document.createElement('img');
    let p = document.createElement('p');
  
    img.setAttribute('src',products[0].images[0]); 
    img.setAttribute('class', "img");
    
    h2.textContent = products[0].title;
    p.textContent = products[0].price + " " + monnaie;
  
    app.appendChild(article);
    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(p);
  
    img.addEventListener('click', ()=>{creerDetail(i)});

    function creerDetail(index){
  
      coolId.textContent='';
  
      let btnClose = document.createElement('button');
  
      btnClose.setAttribute('id','btnClose');
  
      coolId.appendChild(btnClose);
        
        let imgId = document.createElement('img');
        let gauche = document.createElement('button');
        let droite = document.createElement('button');
        let paragrapheDescription = document.createElement('p');
  
        gauche.setAttribute('id', 'gauche');
        droite.setAttribute('id','droite');
        imgId.setAttribute('src', productsImage.images[index]);
        imgId.setAttribute('class', "imgId");
        paragrapheDescription.textContent = productsImage.description;
  
        coolId.appendChild(gauche);
        coolId.appendChild(imgId);
        coolId.appendChild(droite);
        coolId.appendChild(paragrapheDescription);
      
      btnClose.addEventListener('click', ()=>{
  
          left.disabled = false;
          right.disabled = false;
          coolId.style.display = 'none';
      })
  
        coolId.style.display = 'block';
        left.disabled = 'true';
        right.disabled = 'true';
  
  
        let gaucheBtn = document.querySelector('#gauche');
        let droiteBtn = document.querySelector('#droite');
  
        gaucheBtn.addEventListener('click', ()=>{
  
          if(i == 0){
            i = productsImage.images.length-1;
          }
          else{
            i--;
          }
          creerDetail(i);
        })
        
        droiteBtn.addEventListener('click', ()=>{
  
          if(i == productsImage.images.length-1){
            i=0;
          }
          else{
            i++;
          }
          creerDetail(i);
        }) 
  }
  console.log('hello')
}
  else if(filterCategory.value === 'laptops'){
    creerArticle(5)
    a=5
  }

  else if(filterCategory.value === 'fragrances'){
    creerArticle(10)
    a=10
  }

  else if(filterCategory.value === 'skincare'){
    creerArticle(15)
    a=15
  }

  else if(filterCategory.value === 'groceries'){
    creerArticle(20)
    a=20
  }

  else if(filterCategory.value === 'home-decoration'){
    creerArticle(25)
    a=25
  }
})



creerArticle(a);

async function creerArticle(index) {

    imageResponse = await fetch("https://dummyjson.com/products/" + (a+1));
    responseAsJsonImage = await imageResponse.json();
    productsImage = responseAsJsonImage;

  app.textContent = '';

 left = document.createElement('button')
 right = document.createElement('button')

 left.setAttribute('id','left')
 left.setAttribute('class', 'leftArrow')

 right.setAttribute('id', 'right')
 right.setAttribute('class','rightArrow')

  body.appendChild(left)
  body.appendChild(right)

  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  img = document.createElement('img');
  let p = document.createElement('p');

  img.setAttribute('src',products[index].images[0]); 
  img.setAttribute('class', "img");
  
  h2.textContent = products[index].title;
  p.textContent = products[index].price + " " + monnaie;

  app.appendChild(article);
  article.appendChild(h2);
  article.appendChild(img);
  article.appendChild(p);

  img.addEventListener('click', ()=>{creerDetail(i)});

  const leftBtn = document.querySelector('#left')
  
leftBtn.addEventListener('click', ()=>{ 

  if(a == 0){ 
    a = products.length - 1; 
  } 
  else { 
    a--; 
  } 
  i=0;
  creerArticle(a);
}); 

  const rightBtn =  document.querySelector('#right')
  right.addEventListener('click', ()=>{ 
    
    if(a == products.length-1){ 
      a = 0; 
    } 
    else { 
      a++;
    } 
    i=0;
    creerArticle(a); 
  });
}
  function creerDetail(index){

    coolId.textContent='';

    let btnClose = document.createElement('button');

    btnClose.setAttribute('id','btnClose');

    coolId.appendChild(btnClose);
      
      let imgId = document.createElement('img');
      let gauche = document.createElement('button');
      let droite = document.createElement('button');
      let paragrapheDescription = document.createElement('p');

      gauche.setAttribute('id', 'gauche');
      droite.setAttribute('id','droite');
      imgId.setAttribute('src', productsImage.images[index]);
      imgId.setAttribute('class', "imgId");
      paragrapheDescription.textContent = productsImage.description;

      coolId.appendChild(gauche);
      coolId.appendChild(imgId);
      coolId.appendChild(droite);
      coolId.appendChild(paragrapheDescription);
    
    btnClose.addEventListener('click', ()=>{

        left.disabled = false;
        right.disabled = false;
        coolId.style.display = 'none';
    })

      coolId.style.display = 'block';
      left.disabled = 'true';
      right.disabled = 'true';


      let gaucheBtn = document.querySelector('#gauche');
      let droiteBtn = document.querySelector('#droite');

      gaucheBtn.addEventListener('click', ()=>{

        if(i == 0){
          i = productsImage.images.length-1;
        }
        else{
          i--;
        }
        creerDetail(i);
      })
      
      droiteBtn.addEventListener('click', ()=>{

        if(i == productsImage.images.length-1){
          i=0;
        }
        else{
          i++;
        }
        creerDetail(i);
      }) 
  }
    



  