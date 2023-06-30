let container=document.getElementById("container")
let saveData=JSON.parse(localStorage.getItem("pets"))||[]
let agefilter=document.getElementById("agefilter")
let genderFil=document.getElementById("genderFil")
Display(saveData)

genderFil.addEventListener("change",()=>{

    let fil=saveData.filter((ele)=>{
        if(genderFil.value==""){
            return Display(saveData)
        }
        else{
            if(ele.gender===genderFil.value){
                return true
            }
            else{
                return false
            }
        }
    })
    Display(fil)
})

agefilter.addEventListener("change",()=>{
    let fil=saveData.filter((ele)=>{
        if(agefilter.value==""){
            return Display(saveData)
        }else{
            let data=[...saveData]
            data.sort(function(a,b){return +(a.age)-Number(b.age)})
            if(agefilter.value=="Ascending"){
                Display(data)
            }
        }
    })
})

agefilter.addEventListener("change",()=>{
    let fil=saveData.filter((ele)=>{
        if(agefilter.value==""){
            return Display(saveData)
        }else{
            let data=[...saveData]
            data.sort(function(a,b){return +(b.age)-Number(a.age)})
            if(agefilter.value=="Descending"){
                Display(data)
            }
        }
    })
})

function Display(data){
    container.innerHTML=""
    data.forEach((element,ind) => {

        let card=document.createElement("div")
        let img=document.createElement("img")
        img.src="https://i.pinimg.com/736x/e0/5e/66/e05e66c7033f92022971198b366779e9.jpg"
        let name=document.createElement("h2")
        name.innerText=element.name
        let age=document.createElement("p")
        age.innerText=element.age
        let place=document.createElement('p')
        place.innerText=element.place
        let gender=document.createElement("p")
        gender.innerText=element.gender
        let dele=document.createElement("button")
        dele.innerText="Delete"
        let edit=document.createElement("button")
        edit.innerText="Edit"
        edit.style.color="blue"
        edit.style.cursor="pointer"
        dele.style.cursor="pointer"

        dele.addEventListener("click",()=>{
            saveData=saveData.filter((ele,i)=>{
                return i!=ind
            })
            localStorage.setItem("pets",JSON.stringify(saveData))
            Display(saveData)
        })

        card.append(img,name,age,gender,place,dele,edit)
        container.append(card)


        
    });
}