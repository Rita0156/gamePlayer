let tbody=document.querySelector("tbody")
let saveData=JSON.parse(localStorage.getItem("pets"))||[]

Display(saveData)

function Display(data){
    tbody.innerHTML=""
    let f=0
    let m=0
    let sum=0
        for(let i=0; i<saveData.length; i++){
            
            sum+=Number(saveData[i].age)
            if(saveData[i].gender=="Female"){
                f++
            }
            if(saveData[i].gender=="Male"){
                m++
            }
        }
        
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=saveData.length
        let td2=document.createElement("td")
        td2.innerText=m
        let td3=document.createElement("td")
        td3.innerText=f
        let td4=document.createElement("td")
        td4.innerText=Math.floor(sum/saveData.length)


        tr.append(td1,td2,td3,td4)
        tbody.append(tr)
    
}