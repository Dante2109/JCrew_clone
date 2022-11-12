import {navbar,transitions} from "../Components/navbar.js"
document.getElementById("navbar").innerHTML=navbar()
transitions()

let cartData=[
    {
        image: "https://www.jcrew.com/s7-img-facade/BJ706_YD2387?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name: "Shirt1",
        description: "Secret Wash cotton poplin shirt",
        size: "XI",
        quantity:2,
        price: 7699,
      
    },
    {
        image: "https://www.jcrew.com/s7-img-facade/BJ705_WX4266?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Shirt2",
        description: "Secret Wash cotton poplin shirt",
        size: "XI",
        quantity:2,
        price: 9499,
    },
    {
        image: "https://www.jcrew.com/s7-img-facade/BE996_YD2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        name:"Shirt3",
        description: "mens Broken-in organic cotton oxford shirt",
        size: "XI",
        quantity:2,
        price: 7399,
    },
    
]
let itemCount = document.getElementById("itemCount")
itemCount.innerText= `[ ${cartData.length} ]`
let cartt = document.getElementById("cartt")
cartt.innerText=cartData.length;
let CARTvalue=cartData.length


let TotalCartPrice=0
for(let i=0;i<cartData.length;i++){
    TotalCartPrice+=cartData[i].price
}
console.log(TotalCartPrice)


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
            CARTvalue++;
            itemCount.innerText=`[ ${CARTvalue} ]`;
            cartt.innerText=CARTvalue
            }
        })

        minus.onclick=()=>{
            if(count==1){
                removeData(data,i)
                CARTvalue--;
                itemCount.innerText=`[ ${CARTvalue} ]`;
                TotalCartPrice-=el.price
                console.log('TotalCartPrice:', TotalCartPrice)
                cartt.innerText=CARTvalue
            }else{
            count--;
            number.innerText=count
            td3.innerText = `INR ${count*el.price}`;
            TotalCartPrice-=el.price
            console.log('TotalCartPrice:', TotalCartPrice)
            CARTvalue--;
            itemCount.innerText=`[ ${CARTvalue} ]`;
            cartt.innerText=CARTvalue
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