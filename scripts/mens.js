var mensData = [

    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ706_YD2387?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        color:"NEW COLOR",
        name: "Secret Wash cotton poplin shirt",
      price: 7699,
      
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ705_WX4266?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"NEW COLOR",
         name: "Secret Wash cotton poplin shirt",
        price: 9499,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BE996_YD2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"BEST SELLER",
        name: "mens Broken-in organic cotton oxford shirt",
        price: 7399,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BE996_YD2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"BEST SELLER",
        color:"NEW COLOR",
        name: "Broken-in henley",
        price: 2699,

    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BF792_YD2123_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"BEST SELLER",
        name: "screct wash organic cotton shirt",
      price: 6440,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ446_YD0240?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        color:"NEW COLOR",
         name: "Brushed twill shirt ",
       price: 10999,
   
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ497_YD0222_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
       name: "Midweight fnnel work shirt",
      price: 7699,
 
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BL160_YD2416_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
        name: "Cotton cashmere shirt",
      price: 5299,
    },
      {
        image_url:
          "https://www.jcrew.com/s7-img-facade/BB121_WX6913?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          color:"NEW COLOR",
          name: "Ludlow topcoat in wool-cahhmere",
        price: 5299,
      },
      {
        image_url:
          "https://www.jcrew.com/s7-img-facade/BJ274_HT1029?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          color:"NEW COLOR",
          name: "Broken-in henley",
        price: 4299,
      },
      {
        image_url:
          "https://www.jcrew.com/s7-img-facade/AQ431_WX8499?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          color:"NEW COLOR",
          name: "mens Broken-in henley",
         price: 2699,
      },
      {
        image_url:
          "https://www.jcrew.com/s7-img-facade/J1851_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          color:"NEW COLOR",
          name: "mens Garment-dyed slub cotton polo shirt",
          
        price: 5299,
      },
      
  

      
    
  ];
    let menarr=JSON.parse(localStorage.getItem("clothes")) ||[];
    display(mensData)

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
   menarr.push(el);
   localStorage.setItem("",JSON.stringify(menarr))

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