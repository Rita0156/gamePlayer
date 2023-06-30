let nameE=document.getElementById("name")
let age=document.getElementById("age")
let city=document.getElementById("city")
let form=document.querySelector("form")
let gender=document.getElementById("gender")

let saveData=JSON.parse(localStorage.getItem("pets"))||[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let i=0
    let obj={
        id:i++,
        name:nameE.value,
        age:age.value,
        place:city.value,
        gender:gender.value
    }
     
    saveData.push(obj)
    localStorage.setItem("pets",JSON.stringify(saveData))

})