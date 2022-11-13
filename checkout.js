

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


document.getElementById("paybtn").addEventListener("click",makepay) 

function makepay () {
    
    alert("Your order is accepted");

    setTimeout(function () {
      alert("Thank you for shopping with us. Your order is being Packed and will be delivered shortly.");
      window.location = "index.html";
    }, 3000);
}
