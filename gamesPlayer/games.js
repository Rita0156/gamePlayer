let cont=document.getElementById("cont")




let api="https://www.balldontlie.io/api/v1/games"
fetch(api)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    display(data.data)
})
function display(arr){
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

        vs.innerText="vs"
        vs.style.fontWeight="bold"
        vs.style.fontSize="40px"


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

        cont.append(card)

    });
}