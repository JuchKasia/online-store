/* eslint-disable @typescript-eslint/no-unused-vars */
import * as cat from './index';
import '../index';

import { list } from '../list';
// export const cat = 'category file work';
// console.log('this is file category');
// console.log("from category file "+cat.listCategory);

export const basket = [{}];
basket.length = 0;
export let descrpiptQuantity = 1;
export const desk: ({ id: number; title: string; brand: string; category: string; description: string; price: number; discount: number; stock: number; size: string; color: string; images: string[]; } | { id: number; title: string; brand: string; category: string; description: string; price: number; stock: number; size: string; color: string; images: string[]; discount?: undefined; })[] = [];

export let basketPrice = 0;
export function sizeFilter(){
  const way = document.querySelector('.way');
  for (let i=0; i < cat.sizeLabel.length; i++) {
    let count = 0;
  // console.log(cat.sizeLabel[i]);
     for (let j = 0; j < cat.listCategory.length; j++) {
      // console.log('cat.listCategory[i] '+cat.listCategory[j]==cat.sizeLabel[i].innerHTML)
       if (cat.sizeLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].size) {
         count++;
       }
     }
     cat.sizeLabel[i].innerHTML = cat.sizeLabel[i].innerHTML.slice(0, 2) + ` (` + `${count}` + ')';
  
   }
if(cat.forLocal.size.size>0&&way.innerHTML.split(" ")[way.innerHTML.split(" ").length-1]!="size"){
  way.innerHTML = way.innerHTML+' size';
} else if(cat.forLocal.size.size==0&&way.innerHTML.split(" ")[way.innerHTML.split(" ").length-1]=="size"){
  way.innerHTML = way.innerHTML.split(" ").slice(0,-1).join(' ');
}
// console.log('forlocal '+ cat.forLocal)
// localStorage.setItem('forLocal',JSON.stringify(cat.forLocal));
}

export function colorFilter(){
  // const way = document.querySelector('.way');
  for (let i=0; i < cat.colorLabel.length; i++) {
   let countColor = 0;
    
    for (let j = 0; j < cat.listCategory.length; j++) {
      if (cat.colorLabel[i].innerHTML.split(' ')[0] == cat.listCategory[j].color) {
        countColor++;
      }
    }
    
    cat.colorLabel[i].innerHTML = cat.colorLabel[i].innerHTML.split(' ')[0] + ` (` + `${countColor}` + ')';
  }
  // if(cat.forLocal.color.size>0){
  //   console.log("way.innerHTML ");
  // }
  // console.log('forlocal '+ cat.forLocal.color)
  // localStorage.setItem('forLocal',JSON.stringify(cat.forLocal));
}

const cartProductsCount = document.querySelector('.cart-products-count');
// const cartProductsCount = document.querySelector('.cart-products-count-value');
const cartProductsValue = document.querySelector('.cart-products-value');
const cpv = document.querySelector('.cart-products-value').innerHTML.split(' ')[0];
// console.log(typeof +cartProductsCount.innerHTML);


  const addcards = document.querySelectorAll('.btn-add-to-cart');
  const btnEyeCart = document.querySelectorAll('.btn-eye-cart');
  const main = document.querySelector('.main');
  const pageDescription = document.querySelector('.pageDescription');
  const descriptionPage = document.querySelector('.description');
  
console.log(desk)
  for(let i = 0;i<addcards.length;i++){
    
    addcards[i].addEventListener('click',function(){
      basket.push(cat.listCategory[i]);
      basketPrice+=cat.listCategory[i].price
      cartProductsCount.innerHTML = basket.length+"";
    cartProductsValue.innerHTML = cpv+basketPrice;
    });
    btnEyeCart[i].addEventListener('click',function(){
      desk.pop();
      main.classList.add('non');
      pageDescription.classList.remove('non');
      descriptionPage.classList.remove('non');
        desk.push(cat.listCategory[i]);
        buildDescription();
        buildBestDeck();
    });
  }

  //  setInterval(function(){
  //   cartProductsCount.innerHTML = basket.length+"";
  //   cartProductsValue.innerHTML = cpv+basketPrice;
  //  },500)

  const containerCart = document.querySelector('.header-cart');
  const basketPage = document.querySelector('.basket-page');
 
// console.log(containerCart);
  containerCart.addEventListener('click',function(){
    console.log('conta')
main.classList.add('non');
basketPage.classList.remove('non');
  });

 const itemLink = document.querySelectorAll('.item__link')[0].addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
 })
 const itemLink4 = document.querySelectorAll('.item__link')[4].addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
 })
const logoLink = document.querySelector('.logo-link').addEventListener('click',function(){
  main.classList.remove('non');
  basketPage.classList.add('non');
  pageDescription.classList.add('non');
  descriptionPage.classList.add('non');
});

const deskMainImage = document.querySelector('.desk-main-image');
const mainImFirst = document.querySelector('.main-im-first');
const secondImFirst = document.querySelector('.main-im-second');
const blockInfWay=document.querySelector(".block-inf-way"); 
// const blockInfCategory=document.querySelector(".block-inf-category"); 
const blockInfPrice=document.querySelector(".block-inf-price"); 
const blockInfSize=document.querySelector(".block-inf-size"); 
const blockInfColor=document.querySelector(".block-inf-color"); 
const blockInfQuantity=document.querySelector(".block-inf-quantity"); 
// const baskBaseValue=document.querySelector(".desk-base-value"); 
const baskUp=document.querySelector(".bask-up"); 
const baskDown=document.querySelector(".bask-down"); 
const descripInf=document.querySelector(".descrip-inf");
const descriptionCard = document.querySelector('.descriptionCard'); 
const descBaseValue = document.querySelector('.desc-base-value');
const daskUp = document.querySelector('.dask-up');
const daskDown = document.querySelector('.dask-down');
const descripInfText = document.querySelector('.descrip-inf-text')


function buildDescription(){
  const way = document.querySelector('.way');
 deskMainImage.setAttribute('src',`${desk[0].images[0]}`);
 mainImFirst.setAttribute('src',`${desk[0].images[1]}`);
 secondImFirst.setAttribute('src',`${desk[0].images[2]}`);
  blockInfWay.innerHTML= way.innerHTML;
  // blockInfCategory.innerHTML = 
  blockInfPrice.innerHTML ="$"+ desk[0].price;
  blockInfSize.innerHTML = "Size : " + desk[0].size;
  blockInfColor.innerHTML ="Color : "+ desk[0].color;
  descBaseValue.innerHTML = descrpiptQuantity+"";
  descripInf.innerHTML = desk[0].description;
  const descripDescrip = document.querySelector('.descrip-descrip').addEventListener('click',function(){
    descripInfText.innerHTML = desk[0].description;
   });
   const descripDetal = document.querySelector('.descrip-detal').addEventListener('click',function(){
  if(desk[0].brand=="Dior"){
    descripInfText.innerHTML = "";
    descriptionCard.setAttribute('src',`../assets/svg/dior.svg`);
  }else if(desk[0].brand=="Prada"){
    descripInf.innerHTML = "";
    descriptionCard.setAttribute('src',`../assets/svg/prada.svg`);
  }else if(desk[0].brand=="Valentino"){
    descripInf.innerHTML = "";
    descriptionCard.setAttribute('src',`../assets/svg/valentino.svg`);
  }else if(desk[0].brand=="Versace"){
    descripInf.innerHTML = "";
    descriptionCard.setAttribute('src',`../assets/svg/versace.svg`);
  }else if(desk[0].brand=="Gucci"){
    descripInf.innerHTML = "";
    descriptionCard.setAttribute('src',`../assets/svg/icons8-gucci.svg`);
  }
   });
   
}
daskUp.addEventListener('click', function(){
    descBaseValue.innerHTML = ++descrpiptQuantity+"";
   });
   daskDown.addEventListener('click', function(){
    if(descrpiptQuantity==1){
      descriptionPage.classList.add('non');
      pageDescription.classList.add('non');
      main.classList.remove('non');
    }
    descBaseValue.innerHTML = --descrpiptQuantity+"";
   });
const descSellIm = document.querySelectorAll('.desc-sell-im');
const descSellTxt = document.querySelectorAll('.desc-sell-txt');
const descSellPrice = document.querySelectorAll('.desc-sell-price');

function buildBestDeck(){
for(let i = 0;i<descSellIm.length;i++){
  descSellIm[i].setAttribute('src',`${list[cat.arrayForCardsDesc[i]].images}`);
  descSellTxt[i].innerHTML = list[cat.arrayForCardsDesc[i]].description;
  descSellPrice[i].innerHTML = list[cat.arrayForCardsDesc[i]].price+" $";
}
}

const descriptionButton = document.querySelector('.description-button');
// добавление в типо карзину простое отоброжение 
descriptionButton.addEventListener('click',function(){
basket.push(desk[0]);
cartProductsCount.innerHTML = descrpiptQuantity+"";
cartProductsValue.innerHTML = cpv+desk[0].price*descrpiptQuantity;
});



// basket 