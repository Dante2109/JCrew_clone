
let menData = JSON.parse(localStorage.getItem("men")) || []
let womenData = JSON.parse(localStorage.getItem("women")) || []


let tbody = document.querySelector("tbody")
const append = (data) => {
    tbody.innerHTML=null
    data.forEach((el,i)=>{
        let tr =document.createElement("tr")

        let img =document.createElement("img")
        img.src=el.image
        let td1 = document.createElement("td")
        td1.append(img)

        let td2 = document.createElement("td")
        td2.innerText = el.name

        let td3 = document.createElement("td")
        td3.innerText = el.price

        let td4 = document.createElement("td")
        td4.innerText = el.rDate

        let td5 = document.createElement("td")
        td5.innerText = el.quantity

        
        let td6 = document.createElement("td")
        td6.innerText = "Remove"
        td6.setAttribute("class","red")
        td6.addEventListener("click",()=>{
            removeData(data,i,el.type)
        })
        let td7 = document.createElement("td")
        td7.innerText = "Update-Price"
        td7.setAttribute("class","green")
        td7.addEventListener("click",()=>{
            updateData(data,i,el.type)
        })
        
        let td8 = document.createElement("td")
        td8.innerText = el.description
        
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(tr)
    })

}

function removeData(data,index,type){
    let NSData= data.filter((el,i)=>{
        return i!=index
    })
    append(NSData)
    localStorage.setItem(type,JSON.stringify(NSData))
}
function updateData(data,i,type){
    const new_price = prompt( `Enter new price`)
    data[i].price=new_price
    localStorage.setItem(type,JSON.stringify(data))
    append(data)
}



let addProduct = document.getElementById("add_product")
addProduct.onclick = () => {

    let image = document.getElementById("image").value
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let rDate = document.getElementById("rDate").value
    let category = document.getElementById("category").value
    let quantity = document.getElementById("quantity").value
    let type = document.getElementById("section").value
    let description = document.getElementById("description").value

    let obj = {
        image,
        name,
        price,
        rDate,
        category,
        quantity,
        type,
        description,
    }    

    if(type=="men"){
        menData.push(obj)
        localStorage.setItem("men",JSON.stringify(menData))
        append(menData)
    }else if(type=="women"){
        womenData.push(obj)
        localStorage.setItem("women",JSON.stringify(womenData))
        append(womenData)
    }    
}    
let mData = JSON.parse(localStorage.getItem("men")) || []
let wData = JSON.parse(localStorage.getItem("women")) || []
let selectMen = document.getElementById("selectMen").onclick=()=>{
    append(mData)
}

let selectWomen = document.getElementById("selectWomen").onclick=()=>{
    append(wData)
}
