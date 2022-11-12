// import { navbar,transitions } from "../Components/navbar.js";

// let navbar_div=document.getElementById("navbar");
// navbar_div.innerHTML=navbar(),transitions()



var mensData = [

    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ706_YD2387?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        name:"Shirt",
        description: "Secret Wash cotton poplin shirt",
      price: 7699,
      type:"men"
      
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ705_WX4266?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Checks Shirt",
         description: "Secret Wash cotton poplin shirt",
        price: 9499,
        type:"men"
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ068_WZ2239_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"jacket",
        description: "Nordic puffer vest with PrimaLoft",
        price: 7399,
        type:"men"
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ498_YD2283?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"New Shirt",
        description: "Broken-in henley",
        price: 2699,
        type:"men"

    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BF792_YD2123_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"Organic shirt",
        description: "screct wash organic cotton shirt",
      price: 6440,
      type:"men"
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ446_YD0240?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        name:"Best Seller",
         description: "Brushed twill shirt ",
       price: 10999,
       type:"men",
   
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BJ497_YD0222_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"Fnnel shirt",
       description: "Midweight fnnel work shirt",
      price: 7699,
      type:"men"
 
    },
    {
      image:
        "https://www.jcrew.com/s7-img-facade/BL160_YD2416_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        name:"Shirt",
        description: "Cotton cashmere shirt",
      price: 5299,
      type:"men"
    },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BB121_WX6913?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Coat",
          description: "Ludlow topcoat in wool-cahhmere",
        price: 5299,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BJ274_HT1029?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Sweater",
          description: "Broken-in henley",
        price: 4299,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/AQ431_WX8499?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Jacket",
          description: "mens Broken-in henley",
         price: 2699,
         type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/AZ972_SR0059_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Sweater",
          description: "Cashmere cable-knit sweater",
          
          price: 5299,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BL468_PP4057_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"sweater",
          description: "Rugby shirt in stripe",
          
        price: 7299,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BJ326_GR5673_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Pant",
          description: "Heritage 14 oz. fleece sweatpant",
          
        price: 9299,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM633_PP3889_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Scarf",
          description: "Joshua Ellis for cashmere scarf",
          
        price: 9999,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM156_YD2724?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Jacket",
          description: "Sherpa-lined corduroy shirt-jacket",
          
        price: 5299,
        type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM159_YD2595?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"New shirt",
          description: "Wool-blend Fair Isle workshirt",
          price: 7999,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/J1851_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Classic T-shirt",
          description: "Ludlow Classic-fit cocktail jacket", 
          price: 5299,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BK941_WZ2350_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"blazer",
          description: " mixed tartan English wool",
          price: 5299,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BK216_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Shirt",
          description: "Heavyweight chamois workshirt",
          price: 5299,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/AD603_WZ2168_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          name:"Jacket",
          description: "Nordic parka with PrimaLoft®",
          price: 5299,
          type:"men"
      },
      {
        image:
          "https://www.jcrew.com/s7-img-facade/BM331_SR0249?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          name:"Beanie",
          description: "Lambswool Fair Isle pom beanie",
          price: 5499,
          type:"men"
      },
   
    
  ];
  

  let div=document.getElementById("SortbyPrice")
  div.addEventListener("change",sortbyprice)
  let div2 =document.getElementById("SortbyName")
  div2.addEventListener("change",namesort)
  display(mensData)

  


    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let menArr=JSON.parse(localStorage.getItem("men"))|| []
      // console.log(cart)
      display(menArr)

   function display(Data){
    if(Data==mensData){
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
      size_value=false
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
      
      if(selected=="Price:High to low"){
        mensData.sort(function(a,b){
        return b.price - a.price
        });
        display(mensData)
      }
      if(selected=="Price:Low to high"){
        mensData.sort(function(a,b){
        return a.price - b.price
        });
        display(mensData)
      }
        
  }

  function namesort(){
      let selected=document.querySelector("#SortbyName").value
      console.log(selected)
      if(selected=="Ascending"){
        mensData.sort(function(a,b){
        if(a.name>b.name) return 1
        if(a.name<b.name) return -1
        return 0
      });
      display(mensData)
      }
      if(selected=="Descending"){
        mensData.sort(function(a,b){
        if(a.name>b.name) return -1
        if(a.name<b.name) return 1
        return 0
      });
      display(mensData)
     }
    }