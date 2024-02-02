
const app = document.querySelector('#app');
const body = document.querySelector('body');
let left = document.querySelector("#left"); 
let right = document.querySelector("#right"); 
const coolId = document.querySelector("#cool");
const filterCategory = document.querySelector("#filterCategorie");
const arrow = document.querySelector("#arrow")
const divPhone = document.querySelector("#smartphones")
const divLaptops = document.querySelector("#laptops")
const divFragrances = document.querySelector("#fragrances")
const divSkincare = document.querySelector("#skincare")
const divGroceries = document.querySelector("#groceries")
const divHomeDecoration = document.querySelector("#homeDecoration")
const monnaie = "$";
let a = 0; 
let v = 0
let products; 
let imageResponse; 
let responseAsJsonImage;
let productsImage;
let imgBtn;
let f = 1;
let result;

let response = await fetch("https://dummyjson.com/products"); 
let responseAsJson = await response.json(); 
products = responseAsJson.products; 
let copie = products
console.log(products)
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

}
category()


filterCategory.addEventListener('click',()=>{

  if(filterCategory.value === 'all'){
    divPhone.style.display='none';
    divLaptops.style.display='none';
    divFragrances.style.display='none';
    divSkincare.style.display='none';
    divGroceries.style.display='none';
    divHomeDecoration.style.display='none';
    app.style.display = 'flex';
    arrow.style.display='block';
    creerArticle(a);
  }

  else if(filterCategory.value === 'smartphones'){

    divPhone.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divLaptops.style.display='none';
    divFragrances.style.display='none';
    divSkincare.style.display='none';
    divGroceries.style.display='none';  
    divHomeDecoration.style.display='none';  
    divPhone.style.display='flex';

    for(let n=0; n<5;n++){
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgPhone");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divPhone.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImg = document.querySelectorAll('.imgPhone')
      tableauImg[n].addEventListener('click', ()=>{
        v=0
        creerDetailPhone(v, n)
      });
  
      function creerDetailPhone(index, o){
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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailPhone(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailPhone(v,n);
          }) 
    }
    
  }
    
}
  else if(filterCategory.value === 'laptops'){
    divLaptops.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divPhone.style.display='none';
    divSkincare.style.display='none';
    divGroceries.style.display='none';
    divHomeDecoration.style.display='none';    
    divLaptops.style.display='flex';
    let z = -1;
    for(let n=5; n<10;n++){
      z++
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgLaptops");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divLaptops.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImgLaptops = document.querySelectorAll('.imgLaptops')
          tableauImgLaptops[z].addEventListener('click', ()=>{
            v=0
            creerDetailLaptops(v, n)
          });
  

  
      function creerDetailLaptops(index, o){
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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailLaptops(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailLaptops(v,n);
          }) 
    }
    
  }
   
  }

  else if(filterCategory.value === 'fragrances'){
    divFragrances.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divPhone.style.display='none';
    divLaptops.style.display='none';
    divSkincare.style.display='none';
    divGroceries.style.display='none';
    divHomeDecoration.style.display='none';
    divFragrances.style.display='flex';
    let z = -1;
    for(let n=10; n<15;n++){
      z++
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgFragrances");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divFragrances.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImgFragrances = document.querySelectorAll('.imgFragrances')

          tableauImgFragrances[z].addEventListener('click', ()=>{

            v=0
            creerDetailFragrances(v, n)
          });
  

  
      function creerDetailFragrances(index, o){

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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailFragrances(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailFragrances(v,n);
          }) 
    }
    
  }
   
  }

  else if(filterCategory.value === 'skincare'){
    divSkincare.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divPhone.style.display='none';
    divLaptops.style.display='none';
    divFragrances.style.display='none';
    divGroceries.style.display='none'; 
    divHomeDecoration.style.display='none';   
    divSkincare.style.display='flex';
    let z = -1;
    for(let n=15; n<20;n++){
      z++
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgSkincare");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divSkincare.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImgSkincare = document.querySelectorAll('.imgSkincare')
          tableauImgSkincare[z].addEventListener('click', ()=>{
            v=0
            creerDetailSkincare(v, n)
          });
  

  
      function creerDetailSkincare(index, o){
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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailSkincare(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailSkincare(v,n);
          }) 
    }
    
  }
  }

  else if(filterCategory.value === 'groceries'){
    divGroceries.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divPhone.style.display='none';
    divLaptops.style.display='none';
    divFragrances.style.display='none';
    divSkincare.style.display='none';
    divHomeDecoration.style.display='none';    
    divGroceries.style.display='flex';
    let z = -1;
    for(let n=20; n<25;n++){
      z++
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgGroceries");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divGroceries.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImgGroceries = document.querySelectorAll('.imgGroceries')
          tableauImgGroceries[z].addEventListener('click', ()=>{
            v=0
            creerDetailGroceries(v, n)
          });
  

  
      function creerDetailGroceries(index, o){
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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailGroceries(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailGroceries(v,n);
          }) 
    }
    
  }
  }

  else if(filterCategory.value === 'home-decoration'){
    divHomeDecoration.textContent='';
    app.style.display = 'none';
    arrow.style.display='none';
    divPhone.style.display='none';
    divLaptops.style.display='none';
    divFragrances.style.display='none';
    divSkincare.style.display='none';
    divHomeDecoration.style.display='flex';
    let z = -1;
    for(let n=25; n<30;n++){
      z++
      left.style.display = 'none';
      right.style.display = 'none';
      let article = document.createElement('article');
      article.setAttribute('class','articleTrie')
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
    
      img.setAttribute('src',products[n].images[0]); 
      img.setAttribute('class', "imgHomeDecoration");
      
      h2.textContent = products[n].title;
      p.textContent = products[n].price + " " + monnaie;
    
      divHomeDecoration.appendChild(article);
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(p);
        let tableauImgHomeDecoration = document.querySelectorAll('.imgHomeDecoration')
          tableauImgHomeDecoration[z].addEventListener('click', ()=>{
            v=0
            creerDetailHomeDecoration(v, n)
          });
  

  
      function creerDetailHomeDecoration(index, o){
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
          imgId.setAttribute('src', products[o].images[index]);
          imgId.setAttribute('class', "imgId");
          paragrapheDescription.textContent = products[o].description;
    
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
            
            if(v == 0){
              v = products[n].images.length-1;
            }
            else{
              v--;
            }
            creerDetailHomeDecoration(v,n);
          })
          
          droiteBtn.addEventListener('click', ()=>{
            if(v == products[n].images.length-1){
              v=0;
            }
            else{
              v++;
            }
            creerDetailHomeDecoration(v,n);
          }) 
    }
    
  }
  }
})



creerArticle(a);

async function creerArticle(index) {

    imageResponse = await fetch("https://dummyjson.com/products/" + (a+1));
    responseAsJsonImage = await imageResponse.json();
    productsImage = responseAsJsonImage;

  app.textContent = '';
  arrow.textContent="";
 left = document.createElement('button')
 right = document.createElement('button')

 left.setAttribute('id','left')
 left.setAttribute('class', 'leftArrow')

 right.setAttribute('id', 'right')
 right.setAttribute('class','rightArrow')

  arrow.appendChild(left)
  arrow.appendChild(right)
  
  let iconLeft = document.createElement('i')
  let iconRight = document.createElement('i')

  left.appendChild(iconLeft)
  right.appendChild(iconRight)

  iconLeft.setAttribute('class','fa-solid fa-angle-left')
  iconRight.setAttribute('class','fa-solid fa-angle-right')

  let article = document.createElement('article');
  article.setAttribute('class', 'article')
  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let p = document.createElement('p');

  img.setAttribute('src',products[index].images[0]); 
  img.setAttribute('class', "img");
  
  h2.textContent = products[index].title;
  p.textContent = products[index].price + " " + monnaie;

  app.appendChild(article);
  article.appendChild(h2);
  article.appendChild(img);
  article.appendChild(p);

  img.addEventListener('click', ()=>{creerDetail(v)});

  const leftBtn = document.querySelector('#left')
  
leftBtn.addEventListener('click', ()=>{ 

  if(a == 0){ 
    a = products.length - 1; 
  } 
  else { 
    a--; 
  } 
  v=0;
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
    v=0;
    creerArticle(a); 
  });
}
  function creerDetail(index){
    coolId.textContent='';
    coolId.style.display = 'block';
    left.disabled = 'true';
    right.disabled = 'true';

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




      let gaucheBtn = document.querySelector('#gauche');
      let droiteBtn = document.querySelector('#droite');

      gaucheBtn.addEventListener('click', ()=>{

        if(v == 0){
          v = productsImage.images.length-1;
        }
        else{
          v--;
        }
        creerDetail(v);
      })
      
      droiteBtn.addEventListener('click', ()=>{

        if(v == productsImage.images.length-1){
          v=0;
        }
        else{
          v++;
        }
        creerDetail(v);
      }) 
  }
    



  