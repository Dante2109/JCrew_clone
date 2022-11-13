import {navbar,transitions} from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

import footer from "../Components/footer.js"
document.getElementById("footer").innerHTML = footer();

transitions()
// ---------------------------------------------------------------------------

let cartData= JSON.parse(localStorage.getItem("cart"))
let cartvalue = JSON.parse(localStorage.getItem("cartvalue")) || 0
let estimatedTotal = JSON.parse(localStorage.getItem("estimatedTotal")) || 0

// ------------------------------------------------------------
let itemCount = document.getElementById("itemCount")
itemCount.innerText= `[ ${cartData.length} ]`
// cartvalue.innerText=cartData.length;
let TotalCartValue=cartData.length
document.getElementById("cartvalue").innerText=TotalCartValue

let TotalCartPrice=0
for(let i=0;i<cartData.length;i++){
    TotalCartPrice+=cartData[i].price
}
localStorage.setItem("cartvalue",JSON.stringify(TotalCartValue))
localStorage.setItem("estimatedTotal",JSON.stringify(TotalCartPrice+99))
// ----------------------------------------------------------

let tbody = document.querySelector("tbody")
const append = (data) => {
    tbody.innerHTML=null
    data.forEach((el,i)=>{
        let count=1
        let tr =document.createElement("tr")
        ////////////////////////////////////////////////////
        let img =document.createElement("img")
        img.src=el.image

        let name=document.createElement("p")
        name.innerText=el.name

        let description=document.createElement("p")
        description.innerText=el.description

        let size=document.createElement("p")
        size.innerText=`Size: ${el.size}`

        let remove=document.createElement("p")
        remove.innerText="Remove"
        remove.setAttribute("class","remove")
        remove.addEventListener("click",()=>{
            removeData(data,i)
        })
        let des = document.createElement("div")
        des.setAttribute("id","des")
        des.append(name,description,size,remove)

        let td1 = document.createElement("td")
        td1.setAttribute("id","td1")
        td1.append(img,des)


// *******************************************************
        let wrapper = document.createElement("div")
        wrapper.id="wrapper"
        let minus=document.createElement("span");
        minus.className="minus";
        minus.innerText="- "
        // 
        let number=document.createElement("span");
        number.className="nums";
        number.innerText=count;
        // 
        let plus=document.createElement("span");
        plus.className="plus";
        plus.innerText=" +";

        let td3 = document.createElement("td")
        td3.className="td3"
        td3.innerText = `INR ${count*el.price}`

        
        plus.addEventListener("click",()=>{
            if(count==4){
                alert("Maximum limit for the product is reached")
            }else{
            count++
            number.innerText=count;
            td3.innerText = `INR ${count*el.price}`
            TotalCartPrice+=el.price
            console.log('TotalCartPrice:', TotalCartPrice)
            document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
            document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`
            TotalCartValue++;
            itemCount.innerText=`[ ${TotalCartValue} ]`;
            document.getElementById("cartvalue").innerText=TotalCartValue
            localStorage.setItem("cartvalue",JSON.stringify(TotalCartValue))
            localStorage.setItem("estimatedTotal",JSON.stringify(TotalCartPrice+99))
            // cartvalue.innerText=TotalCartValue
            }
        })

        minus.onclick=()=>{
            if(count==1){
                removeData(data,i)

                TotalCartPrice-=el.price
                console.log('TotalCartPrice:', TotalCartPrice)
                document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
                document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`
                localStorage.setItem("cartvalue",JSON.stringify(TotalCartValue))
                document.getElementById("cartvalue").innerText=TotalCartValue
                localStorage.setItem("estimatedTotal",JSON.stringify(TotalCartPrice+99))
                // cartvalue.innerText=TotalCartValue
            }else{
            count--;
            number.innerText=count
            td3.innerText = `INR ${count*el.price}`;
            TotalCartPrice-=el.price
            console.log('TotalCartPrice:', TotalCartPrice)
            document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
            document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`
            TotalCartValue--;
            itemCount.innerText=`[ ${TotalCartValue} ]`;
            localStorage.setItem("cartvalue",JSON.stringify(TotalCartValue))
            document.getElementById("cartvalue").innerText=TotalCartValue
            localStorage.setItem("estimatedTotal",JSON.stringify(TotalCartPrice+99))
            // cartvalue.innerText=TotalCartValue
            }
        }

        wrapper.append(minus,number,plus);

        let td2 = document.createElement("td")
        td2.append(wrapper)
// ************************************************************
        tr.append(td1,td2,td3)
        tbody.append(tr)
    })

}
append(cartData)

function removeData(data,index){
    let NSData= data.filter((el,i)=>{
        return i!=index
    })
    TotalCartValue--
    itemCount.innerText=`[ ${TotalCartValue} ]`;
    document.getElementById("cartvalue").innerText=TotalCartValue
    localStorage.setItem("cartvalue",JSON.stringify(TotalCartValue))
    append(NSData)
    localStorage.setItem("cart",JSON.stringify(NSData))
}

document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`

localStorage.setItem("estimatedTotal",JSON.stringify(TotalCartPrice+99))

/////////////////////////////////////////////////////////////////////////////////
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

if(cartvalue==0){
    document.querySelector(".Shipping").innerText=`INR 0.00`
    document.querySelector(".EstimateTotal").innerText=`INR 0.00`;
    let butttton=document.getElementById("checkoutBtn");
    butttton.onclick=(event)=>{
        alert("Your cart is empty! Please add items to your Cart");
        event.preventDefault()
    }  
}