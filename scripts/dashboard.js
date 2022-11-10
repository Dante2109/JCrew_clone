let menData = JSON.parse(localStorage.getItem("men")) || []
let womenData = JSON.parse(localStorage.getItem("women")) || []


let container = document.getElementById("admin-container")
const append = (data) =>{
    container.innerHTML=null
    data.forEach((el,i)=>{
        let div = document.createElement("div")
        div.setAttribute("class","card")
        let image = document.createElement("img")
        let name = document.createElement("h3")
        let price = document.createElement("div")
        let description = document.createElement("p")

        image.src = el.image
        name.innerText = el.name
        price.innerHTML = el.price
        description.innerText = el.description

        let removeBtn = document.createElement("button")
        removeBtn.innerText= "Remove"
        removeBtn.setAttribute("class","remove_item")
        removeBtn.addEventListener("click",()=>{
            removeData(data,i,el.type)
        })
        let updateBtn = document.createElement("button")
        updateBtn.innerText= "update"
        updateBtn.setAttribute("class","update_item")
        updateBtn.addEventListener("click",()=>{
            updateData(data,i,el.type)
        })
        div.append(image,name,price,description,removeBtn,updateBtn)
        container.append(div)
        
    })
}
function removeData(data,index,type){
   let NSData= data.filter((el,i)=>{
    return i!=index
   })
    localStorage.setItem(type,JSON.stringify(NSData))
    append(NSData)
}
function updateData(data,i,type){
    const new_price = prompt( `Enter new price`)
    data[i].price=new_price
    localStorage.setItem(type,JSON.stringify(data))
    append(data)
}


let addProduct = document.getElementById("add_product")
addProduct.onclick = () => {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let description = document.getElementById("description").value
    let discount = document.getElementById("discount").value
    let image = document.getElementById("image").value
    let type = document.getElementById("category").value

    let obj = {
        name,
        price,
        description,
        discount,
        image,
        type,
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

let selectMen = document.getElementById("selectMen").onclick=()=>{
    append(menData)
}

let selectWomen = document.getElementById("selectWomen").onclick=()=>{
    append(womenData)
}
