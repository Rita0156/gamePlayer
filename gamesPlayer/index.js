
let container=document.getElementById("player")
let API="https://www.balldontlie.io/api/v1/players"

let inp=document.getElementById("search")
let search=document.getElementById("sear")
let alldata=[]
let buttonWrapper=document.getElementById("button-wrapper")


// API.searchParams.append('completed', false);
// API.searchParams.append('page', 1);
// API.searchParams.append('limit', 10);

function pagination(data,pageNo,limit){
    return data.slice((pageNo-1)*limit,(pageNo*limit-1)+1)
}


fetch(API)
.then((res)=>{
    return res.json()

    
})
.then((data)=>{
    console.log(data.data);
    alldata=data.data
    display(data.data)

    let limit=6
    let total=(data.data.length)
    let totalBtn=Math.ceil(total/limit)

    buttonWrapper.innerHTML=null
    for(let i=1; i<=totalBtn; i++){
      
        buttonWrapper.append(createBtn(i))
    }
    let resAray=pagination(data.data,1,limit)
    display(resAray)
    
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


function createBtn(i){
    let btn = document.createElement("button");

    let activeClass = '';
    if(i==1){
        activeClass = 'active';
    }
    btn.className = `.pagination-button ${activeClass}`;
    btn.innerText = i;
    return btn;
}

setTimeout(async function(){
    const btns = document.querySelectorAll("#button-wrapper button");
    let res = await fetch(API);
    let data = await res.json();
    let limit = 6;

    btns.forEach((btn) => {
        btn.addEventListener("click",function(){
            btns.forEach(btnb=> btnb.classList.remove('active'));
            btn.classList.add("active")
            let i = btn.innerText;
            let resAray = pagination(data.data, i, limit);
            display(resAray);
        })
    })
},500)


