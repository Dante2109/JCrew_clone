/////////////////Navbar and footer////////////////////
import { navbar,transitions } from "../Components/navbar.js";

import footer from "../Components/footer.js"
document.getElementById("footer").innerHTML = footer();

let carttvaluee=localStorage.getItem("cartvalue") || 0;

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar()
transitions()


let footerinput=document.getElementById("footerinput").value
let footerbutton=document.getElementById("footerbutton");
footerbutton.addEventListener("click",function(){
  alert("You are signed successfull for regular updates from J.Crew")
})

let logstatus=localStorage.getItem("loggedInstatus")
let accountt=document.getElementById("Myaccount")
let bhasad=document.getElementById("bhasad")
let logout=document.getElementById("Logout")
let signinvbtn=document.getElementById("SIGNINCLICK");
if(logstatus=="true"){
    bhasad.style.width="14%"
    accountt.innerText="My Account"
    signinvbtn.innerText=null
    signinvbtn.style.marginLeft="-30px"
    logout.innerText="Logout"
    logout.onclick  =()=>{
        Logout()
    }
    logout.style.cursor="pointer"
    accountt.style.cursor="pointer"
}


let Logout=()=>{
    console.log("akjfahkjalhfsj")
    let loggedInstatus=false;
    localStorage.setItem('loggedInstatus',JSON.stringify(loggedInstatus));
    bhasad.style.width="8%";
    accountt.innerHTML=null;
    logout.innerHTML=null;
    signinvbtn.innerText="Sign In"
}

///////////////////Navbar and footer//////////////////////////////



var womensData = [

    {
      image:
        "https://www.jcrew.com/s7-img-facade/AS297_GR7081_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"T-Shirt",
        description: "Vintage long-sleeve T-shirt",
      price:  2696,
      
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BF355_PK6709_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"New Shirt",
        description: "Slim perfect-fit T-shirt",
        price: 4146,
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BH925_RD5371_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"Top",
        description: "New favorite tank top ",
      price: 1399,
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BL022_RD5745?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Sweater",
        description: "Tissue turtleneck",
      price: 4699,

    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BM342_GR7105_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"jacket",
        description: "Perfect-fit turtleneck ",
      price: 10499,
      type:"women"

    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BM948_NA7294?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Sweater",
        description: "New chateau parka ",
      price: 21999,
      type:"women"
   
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BL022_WT0002_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"jacket",
        description: "Tissue turtleneck",
      price: 7699,
      type:"women"
 
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BC108_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Shoulder piece",
        description: "Ruched one-shoulder one-piece",
      price: 7299,
      type:"women"
    },
    {
        image:
          "https://www.jcrew.com/s7-img-facade/BK251_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"pant",
          description: "Kate straight-leg pant",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM534_NA6434_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Parka",
          description: "New Perfect Winter parka",
        price: 23999,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BK728_RD6052_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Skirt",
          description: "Sequin mini skirt",
        price: 3299,
        type:"women"
      },
      {
        image:"https://www.jcrew.com/s7-img-facade/BM897_SR0399_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"Sweater",
        description: "Fair Isle sweater-skirt",
        price: 7999,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM779_NA6434_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Beanie",
          description: "Ribbed pom-pom beanie",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM299_NA6821?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Wool Sweater",
          description: "Half-zip stretch wool sweater",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM538_WT0002_d7?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Coat",
          description: "New chateau puffer coat",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM165_BL6622_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Sweater",
          description: "Cable-knit rollneck sweater",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM692_EE3244?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Heels",
          description: "Colette mule heels",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BD613_SU3958_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Yarn",
          description: "Rollneck sweater in Supersoft yarn",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/H1891_EE1584?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Boots",
          description: "Perfect Winter boots with shearling",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM179_SR0404_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"sweater",
          description: "Fair Isle mockneck pullover sweater",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM301_SR0554_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"sweater",
          description: "Cable-knit mockneck pullover in stripe with",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM838_RD5371_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Clutch",
          description: "Florence convertible clutch ",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BN125_GR7084_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"skirt",
          description: "Velvet jeweled button-fron",
        price: 13299,
        type:"women"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM349_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Sleeve Shirt",
          description: "Feather-trim long-sleeve shirt",
        price: 13299,
        type:"women"
      },
  ];
    let womenarr=JSON.parse(localStorage.getItem("clothes")) ||[];
    display(womensData)
    let div=document.getElementById("SortbyPrice")
   div.addEventListener("change",sortbyprice)

   let div2=document.getElementById("SortbyName")
   div2.addEventListener("change",namesort)

   

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let womenArr=JSON.parse(localStorage.getItem("women"))|| []
      // console.log(cart)
      display(womenArr)

   function display(Data){
    if(Data==womensData){
    document.querySelector("#box").innerHTML=null;
    }
    Data.forEach(function(el){
    let div=document.createElement("div")

    let productImg=document.createElement ("img")
    productImg.src=el.image

    
    let size_value=false;
    let size_XS = document.createElement("button")
    size_XS.innerText="XS"
    size_XS.addEventListener("click",()=>{
      size_value = "XS";
      size_XS.style.fontWeight="700";
      size_XS.style.border="1px solid"
    })
    let size_S = document.createElement("button")
    size_S.innerText="S"
    size_S.addEventListener("click",()=>{
      size_value = "S";
      size_S.style.fontWeight="700";
      size_S.style.border="1px solid"
    })
    let size_M = document.createElement("button")
    size_M.innerText="M"
    size_M.addEventListener("click",()=>{
      size_value = "M"
      size_M.style.fontWeight="700";
      size_M.style.border="1px solid"
    })
    let size_L = document.createElement("button")
    size_L.innerText="L"
    size_L.addEventListener("click",()=>{
      size_value = "L"
      size_L.style.fontWeight="700";
      size_L.style.border="1px solid"
    })
    let size_XL = document.createElement("button")
    size_XL.innerText="XL"
    size_XL.addEventListener("click",()=>{
      size_value = "XL"
      size_XL.style.fontWeight="700";
      size_XL.style.border="1px solid"
    })
    let size_XXL = document.createElement("button")
    size_XXL.innerText="XXL"
    size_XXL.addEventListener("click",()=>{
      size_value = "XXL"
      size_XXL.style.fontWeight="700";
      size_XXL.style.border="1px solid"
    })
    let size = document.createElement("div")
    size.setAttribute("id","buttons")
    size.append(size_XS,size_S,size_M,size_L,size_XL,size_XXL)

    let name=document .createElement("h3")
    name.innerText=el.name
    name.className="name"
    
    let special=document.createElement("h4")
    special.innerText=el.description
    special.className="special"

    let price=document.createElement("p")
    price.innerText=`₹ ${el.price}`
    price.className="price"

    let button=document.createElement("button")
    button.innerText="ADD TO CART";
    button.addEventListener("click",function(){
      if(size_value){
      storeData(el.image,el.description,el.name,el.price,size_value);
      size_XS.style.fontWeight="400";
      size_XS.style.border="1px solid gray";
      size_value=false;
      carttvaluee++
      localStorage.setItem("cartvalue",carttvaluee);
      document.getElementById("cartvalue").innerText=carttvaluee
      }else{
        alert("Please Select the Size of the product")
      }
      });

    div.append(productImg,size,name,special,price,button)
    document.querySelector("#box").append(div)
    


  });
   }
  
  function storeData(productImg,name,special,price,sie_value){
   let obj={
    image:productImg,
    name:name,
    description:special,
    price:price,
    size:sie_value,
   }
   let NSdata = JSON.parse(localStorage.getItem("cart")) || [];
   console.log(NSdata)
   NSdata.push(obj)
   localStorage.setItem("cart",JSON.stringify(NSdata))
  }


  function sortbyprice(){
    let selected=document.querySelector("#SortbyPrice").value

       display(womensData)

      if(selected=="Price:High to low"){
        womensData.sort(function(a,b){
        return b.price - a.price
        });
        display(womensData)
      }
      if(selected=="Price:Low to high"){
        womensData.sort(function(a,b){
        return a.price - b.price
        });
        display(womensData)
      }
        
  }

  function namesort(){
      let selected=document.querySelector("#SortbyName").value
      console.log(selected)
      if(selected=="Ascending"){
        womensData.sort(function(a,b){
        if(a.name>b.name) return 1
        if(a.name<b.name) return -1
        return 0
      });
      display(womensData)
      }
      if(selected=="Descending"){
        womensData.sort(function(a,b){
        if(a.name>b.name) return -1
        if(a.name<b.name) return 1
        return 0
      });
      display(womensData)
     }
    }


    document.getElementById("cartvalue").innerText=carttvaluee