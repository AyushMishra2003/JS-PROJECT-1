function color(){
    const p=document.getElementById("result")
    const color1=document.getElementById("col1").value
    const color2=document.getElementById("col2").value
    if(color1=="red" && color2=="blue" || color1=="blue" && color2=="red")
    {
        p.innerHTML="purple"
        document.getElementById("myBody").style.backgroundColor="purple"
    }
    else
    {
        if(color1=="red" && color2=="yellow" || color1=="yellow" && color2=="red")
        {
        p.innerHTML="orange"
        document.getElementById("myBody").style.backgroundColor="orange"
       }
       else if(color1=="blue" && color2=="yellow" || color1=="yellow" && color2=="blue")
       {
        p.innerHTML="green"
        document.getElementById("myBody").style.backgroundColor="green"
      }
      else{
        p.innerHTML="Invalid"
      }
    }
}

function Cancel(){
   const can1=document.getElementById("col1")
   const can2=document.getElementById("col2")
   can1.value=""
   can2.value=""
}