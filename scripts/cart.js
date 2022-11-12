import {navbar,transitions} from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
transitions()

let cartData= JSON.parse(localStorage.getItem("cart"))
console.log('cartData:', cartData)

let itemCount = document.getElementById("itemCount")
itemCount.innerText= `[ ${cartData.length} ]`
// let cartt = document.getElementById("cartt")
// cartt.innerText=cartData.length;
let CARTvalue=cartData.length


let TotalCartPrice=0
for(let i=0;i<cartData.length;i++){
    TotalCartPrice+=cartData[i].price
}


let tbody = document.querySelector("tbody")
const append = (data) => {
    tbody.innerHTML=null
    data.forEach((el,i)=>{
        let count=1
        let tr =document.createElement("tr")

        let img =document.createElement("img")
        img.src=el.image
        // -------------------------------------------
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
        // ---------------------------------------------

        let td1 = document.createElement("td")
        td1.append(img,des)
        td1.setAttribute("id","td1")
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
            CARTvalue++;
            itemCount.innerText=`[ ${CARTvalue} ]`;
            // cartt.innerText=CARTvalue
            }
        })

        minus.onclick=()=>{
            if(count==1){
                removeData(data,i)
                CARTvalue--;
                itemCount.innerText=`[ ${CARTvalue} ]`;
                TotalCartPrice-=el.price
                console.log('TotalCartPrice:', TotalCartPrice)
                document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
                document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`
                // cartt.innerText=CARTvalue
            }else{
            count--;
            number.innerText=count
            td3.innerText = `INR ${count*el.price}`;
            TotalCartPrice-=el.price
            console.log('TotalCartPrice:', TotalCartPrice)
            document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
            document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`
            CARTvalue--;
            itemCount.innerText=`[ ${CARTvalue} ]`;
            // cartt.innerText=CARTvalue
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
    append(NSData)
    // localStorage.setItem("cartData",JSON.stringify(NSData))
}

document.querySelector(".ItemSubtotal").innerText=`INR ${TotalCartPrice}.00`
document.querySelector(".EstimateTotal").innerText=`INR ${TotalCartPrice+99}.00`