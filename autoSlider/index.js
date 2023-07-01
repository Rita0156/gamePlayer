let images=document.getElementById("images")
let arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZnwJmj8fgwm0jbep80Hbp0h4cge_9tiQVA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapgjzJbsysvGw12tCmQFvHRibeCyftp_PQQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvakp7OrjbSUx8xwQRiQI6keJnu7iyCiJc5VZJ89dR9PO5bCFVs2x79ewWpztm1ww7FI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqAVwfZtFEghUX-QHPCohM-cgb-F1APFeSuUyN6qxSdWS-QWdngCWeyUW14255IsEVw8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoJfj_I545bjYfGDKt9MUQXZaRAdolVYbBg&usqp=CAU"
]
let img=document.createElement("img")
img.src=arr[0]
let i=0
images.append(img)

setInterval(()=>{
   
   if(i==arr.length){
    i=0
   }
   img.src=arr[i]
   i++
},3000)