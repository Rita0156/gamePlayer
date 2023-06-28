
let container=document.getElementById("player")
let API="https://www.balldontlie.io/api/v1/players"
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let inp=document.getElementById("search")
let search=document.getElementById("sear")
let alldata=[]

fetch(API)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data.data);
    alldata=data.data
    display(data.data)
})
.catch((err)=>{
    console.log(err);
})

search.addEventListener("click",()=>{

let data=alldata.filter((ele)=>{
    let get=inp.value
    if(ele.first_name.toUpperCase().includes(get.toUpperCase())==true){
        return true
    }
    else{
        return false
    }
})
display(data)

})

function display(arr){
    container.innerHTML=""
    arr.forEach((element,ind) => {
        let card=document.createElement("div")
        let img=document.createElement("img")
        img.src="https://cdn0.iconfinder.com/data/icons/hr-business-and-finance/100/face_human_blank_user_avatar_mannequin_dummy-512.png"
        let name=document.createElement("h3")
        name.innerText=`${element.first_name} ${element.last_name}`
        let position=document.createElement("p")
        position.innerText=element.position
        let teamDetail=document.createElement("button")
        teamDetail.innerText="Team Details"

        teamDetail.addEventListener("click",()=>{
            let div=document.createElement("div")
            let teamName=document.createElement("p")
            teamName.innerText=`Team : ${element.team.full_name}`
            let abb=document.createElement("p")
            abb.innerText=`Abbr : ${element.team.abbreviation}`
            let conf=document.createElement("p")
            conf.innerText=`Conference : ${element.team.conference}`
            let division=document.createElement("p")
            division.innerText=`Division : ${element.team.division}`
            let city=document.createElement("p")
            city.innerText=`City : ${element.team.city}`

            div.append(teamName,abb,conf,division,city)
            card.append(div)

        })

        card.append(img,name,position,teamDetail)
        container.append(card)

    });
}
btn1.addEventListener("click",()=>{
    for(let i=0; i<6; i++){
        display(arr)
    }
})
