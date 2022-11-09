var womensData = [

    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/AS297_GR7081_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
        name: "Vintage cotton crewneck long-sleeve T-shirt",
      price:  2696,
      
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BF355_PK6709_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
         name: "Slim perfect-fit T-shirt",
        price: 4146,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BH925_RD5371_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"BEST SELLER",
        name: "New favorite tank top in vintage rib",
      price: 1399,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BL022_RD5745?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"NEW COLOR",
        name: "Tissue turtleneck",
      price: 4699,

    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BM342_GR7105_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"BEST SELLER",
        name: "Perfect-fit turtleneck with jewel buttons",
      price: 10499,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BM948_NA7294?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"NEW COLOR",
         name: "New chateau parka in Italian stadium-cloth",
      price: 21999,
   
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BL022_WT0002_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
       name: "Tissue turtleneck",
      price: 7699,
 
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BC108_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"NEW COLOR",
        name: "Ruched one-shoulder one-piece",
      price: 7299,
    },
    {
        image_url:
          "https://www.jcrew.com/s7-img-facade/BK251_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
          color:"NEW COLOR",
          name: "Kate straight-leg pant in four-season stretch",
        price: 13299,
      },
      
    
  ];
    let womenarr=JSON.parse(localStorage.getItem("clothes")) ||[];
    display(womensData)

   function display(Data){
    document.querySelector("#box").innerHTML=null;
    Data.forEach(function(el){
    let cont=document.createElement("div")

    let productName=document.createElement ("img")
    productName.src=el.image_url
    let special=document.createElement("h4")
    special.innerText=el.color

    let Name=document .createElement("h3")
    Name.innerText=el.name

    let price=document.createElement("p")
    price.innerText=el.price

    let button=document.createElement("button")
    button.innerText="add to cart";
    button.addEventListener("click",function(){
        toadd(el);

      });

    cont.append(productName,special,Name,price)

    document.querySelector("#box").append(cont)
  });
   }

  function toadd(el){
   womenarr.push(el);
   localStorage.setItem("",JSON.stringify(womenarr))

  }

// adding filters

  function sortbyprice(){
    let selected=document.querySelector("#SortbyPrice").value
      
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