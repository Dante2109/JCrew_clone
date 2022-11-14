

let cartCK = JSON.parse(localStorage.getItem("cart"));
// console.log(z);

function showckProd() {

    let finalDiv = document.getElementById("appendCart");

    cartCK.forEach(function(el){

        let major = document.createElement("div")
        major.id = "majorDiv";

        let mainDiv = document.createElement("div");
        mainDiv.id = "mainDIVid";

        let mainDiv2 = document.createElement("div");
        mainDiv2.id = "mainDIVid2";

        let prodName = document.createElement("p");
        prodName.innerText = `Item:${el.name}`;
        prodName.id = "ckprodName"

        let prodImg = document.createElement("img");
        prodImg.setAttribute("src",el.image)
        prodImg.id = "immmage";

        let nap = document.createElement("p");
        nap.innerText = `Size: ${el.size}`;

        let paisa = document.createElement("p");
        paisa.innerText = `Price: ₹ ${el.price}`;

        mainDiv.append(prodImg)
        mainDiv2.append(prodName,nap,paisa)
        major.append(mainDiv,mainDiv2)
        finalDiv.append(major)

    
    })
}

showckProd();

let total1=localStorage.getItem("estimatedTotal");

document.getElementById("paybtn").addEventListener("click",makepay) 

function makepay () {
    
    alert("Your order is accepted");

    setTimeout(function () {
      alert("Thank you for shopping with us. Your order is being Packed and will be delivered shortly.");
      window.location = "index.html";
    }, 3000);
    localStorage.setItem("estimatedTotal",0);
    localStorage.setItem("cart",JSON.stringify([]));
    localStorage.setItem("cartvalue",0);

}
document.getElementById("deliveryCount").innerText="INR 1710.00"



document.getElementById("itemsCount").innerText=`INR ${total1}.00`
document.getElementById("itemsCount").style.fontWeight="700"

document.getElementById("totalCost").innerText=`INR ${+total1+1710}.00`


document.querySelector("#std").addEventListener("click",()=>{
    document.querySelector("#std").checked=true;
document.querySelector("#exp").checked=false;
if(localStorage.getItem("cartvalue")==0){

    document.getElementById("deliveryCount").innerText="INR 0.00";

    document.getElementById("totalCost").innerText=`INR 0.00`;
    document.getElementById("itemsCount").innerText="0";
}else{
 
document.getElementById("deliveryCount").innerText="INR 1710.00"
document.getElementById("totalCost").innerText=`INR ${+total1+1710}.00`   
}
})


document.querySelector("#exp").addEventListener("click",()=>{
    document.querySelector("#std").checked=false;
document.querySelector("#exp").checked=true;
if(localStorage.getItem("cartvalue")==0){

    document.getElementById("deliveryCount").innerText="INR 0.00";

    document.getElementById("totalCost").innerText=`INR 0.00`;
    document.getElementById("itemsCount").innerText="0";
}else{

document.getElementById("deliveryCount").innerText="INR 2050.00"

document.getElementById("totalCost").innerText=`INR ${+total1+2050}.00`
}

})

if(localStorage.getItem("cartvalue")==0){

    document.getElementById("deliveryCount").innerText="INR 0.00";

    document.getElementById("totalCost").innerText=`INR 0.00`;
    document.getElementById("itemsCount").innerText="0";
}
