var mensData = [

    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ706_YD2387?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        color:"NEW COLOR",
        name: "Secret Wash cotton poplin shirt",
      price: 699,
      
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ705_WX4266?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"NEW COLOR",
         name: "Secret Wash cotton poplin shirt",
        price: 945,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BE996_YD2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"BEST SELLER",
        name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BE996_YD2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        color:"BEST SELLER",
        color:"NEW COLOR",
        name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,

    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BF792_YD2123_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        
        color:"BEST SELLER",
        name: " MEN'S REEBOK RUNNING ASTRO BOOSTER PANTS ",
      price: 1440,
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ446_YD0240?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
      
        color:"NEW COLOR",
         name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
   
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BJ497_YD0222_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
       name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
 
    },
    {
      image_url:
        "https://www.jcrew.com/s7-img-facade/BL160_YD2416_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        color:"NEW COLOR",
        name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
    },
    {
        image_url:
          "https://www.jcrew.com/s7-img-facade/BK216_WZ0434?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
          color:"NEW COLOR",
          name: "MEN'S REEBOK TRAINING WORKOUT  TEE ",
        price: 1299,
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
    let special=document.createElement("p")
    special.innerText=el.color

    let Name=document .createElement("p")
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