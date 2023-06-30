let container=document.getElementById("cont")
let buttonWrapper=document.getElementById("button-wrapper")

let enter=document.getElementById("enter")
let alldata=[]

let start=document.getElementById("start")
let end=document.getElementById("end")

let game=document.getElementById("game")

function pagination(data,pageNo,limit){
    return data.slice((pageNo-1)*limit,(pageNo*limit-1)+1)
}

let api="https://www.balldontlie.io/api/v1/games"
fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    display(data.data)
    alldata=data.data

    let limit=6
    let total=data.data.length
    let totalBtn=Math.ceil(total/limit)

    buttonWrapper.innerHTML=null

    for(let i=1; i<=totalBtn; i++){

        buttonWrapper.append(createBtn(i))
        //return pagination(data,1,limit)
    }
    let resArr=pagination(data.data,1,limit)
    display(resArr)
})

enter.addEventListener("click",()=>{
    let arr=alldata.filter((ele)=>{
         if(ele.date>=start.value && ele.date<=end.value){
            return true
         }else{
            
            game.innerText="Games not found"
            game.style.color="red"
            return false
         }
    })
    display(arr)
})

function display(arr){
    container.innerHTML=null
    arr.forEach((element,ind) => {
        let card=document.createElement("div")
        card.className="card"

        let home=document.createElement("div")

       let Hname=document.createElement("h2")
       let Hres=document.createElement("h2")
        Hname.innerText=element.home_team.full_name
       let Hdate=document.createElement("p")
        Hdate.innerText=`Date : ${element.date}`
       let Hseason=document.createElement("p")
        Hseason.innerText=`Seasion : ${element.season}`
       let Hstatus=document.createElement("p")
        Hstatus.innerText=`Status : ${element.status}`
       let Hscore=document.createElement("p")
        Hscore.innerText=`Score : ${element.home_team_score}`
       let Hdivi=document.createElement("p")
        Hdivi.innerText=`Division : ${element.home_team.division}`
       
        home.append(Hname,Hdate,Hseason,Hstatus,Hscore,Hdivi)

        let vs=document.createElement("div")
        vs.className="vases"

        vs.innerText="vs"
        vs.style.fontWeight="bold"
        vs.style.fontSize="40px"
        let img=document.createElement("img")
        img.src="https://sc04.alicdn.com/kf/Hef647d8ff650495c8bb8d61c728b0e70z.jpg"

        vs.append(img)


        let visi=document.createElement("div")
        let Vname=document.createElement("h2")
        let Vres=document.createElement("h2")
        Vname.innerText=element.visitor_team.full_name
       let date=document.createElement("p")
        date.innerText=`Date : ${element.date}`
       let season=document.createElement("p")
        season.innerText=`Seasion : ${element.season}`
       let Vstatus=document.createElement("p")
        Vstatus.innerText=`Status : ${element.status}`
       let score=document.createElement("p")
        score.innerText=`Score : ${element.visitor_team_score}`
       let divi=document.createElement("p")
        divi.innerText=`Division : ${element.visitor_team.division}`


        if(Number(element.home_team_score)>Number(element.visitor_team_score)){
            Hres.innerText="WON"
            Hres.style.color="green"
            Vres.innerText="LOST"
            Vres.style.color="red"
        }else if(Number(element.home_team_score)<Number(element.visitor_team_score)){
            Hres.innerText="LOST"
            Hres.style.color="red"
            Vres.innerText="WON"
            Vres.style.color="green"
        }else{
            Hres.innerText="TIE"
            Hres.style.color="orange"
            Vres.innerText="TIE"
            Vres.style.color="orange"
        }


        home.append(Hname,Hres,Hdate,Hseason,Hstatus,Hscore,Hdivi)

        visi.append(Vname,Vres,date,season,Vstatus,score,divi)

        card.append(home,vs,visi)

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
    let res = await fetch(api);
    let data = await res.json();
    let limit = 6;

    btns.forEach((btn) => {
        btn.addEventListener("click",function(){
            btns.forEach(btnb=> btnb.classList.remove('active'));
            btn.classList.add("active")
            let i = btn.innerText;
            let resArr = pagination(data.data,i,limit);
            display(resArr);
        })
    })
},500)