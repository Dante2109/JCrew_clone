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

let container = document.getElementById("cartItems")
let tbody = document.querySelector("tbody")
const append = (data) => {
    tbody.innerHTML=null
    data.forEach((el,i)=>{
        let tr =document.createElement("tr")

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
        td1.append(img,des)
        td1.setAttribute("id","td1")

        let td2 = document.createElement("td")
        td2.innerText = el.quantity

        let td3 = document.createElement("td")
        td3.innerText = `INR ${el.price}`
        
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