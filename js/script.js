document.getElementById('new-today').addEventListener('click',function(){
    window.location.href="./main.html"
})

document.getElementById('diffcolor').addEventListener('click',function(){
    function getRandomColor(number){
       return Math.floor(Math.random()*(number+1));
    }

    const randomColor= `rgb(${getRandomColor(255)} ${getRandomColor(255)} ${getRandomColor(255)})`
    document.body.style.backgroundColor=randomColor
})

// get time --------

function time(){
    let newdate=new Date();
    let hours= newdate.getHours();
    let minutes= newdate.getMinutes();
    let seconds=newdate.getSeconds();

    let amOrpm;
    if (hours>=12){
        amOrpm="PM"
    }else{
        amOrpm="AM"
    }

    if(hours> 12){
        hours=hours-12
    }if(hours===0){
        hours=12
    }

    if(minutes<10){
        minutes= "0"+minutes;
    }
    if(seconds<10){
        seconds= "0"+seconds;
    }

    return hours +":"+minutes+":"+seconds+" "+amOrpm;
}




function date(){
    let newDte= new Date()
    let convertdate= newDte.toDateString()
    let newconvertDate= convertdate.split(" ")
    newconvertDate[0]=newconvertDate[0] + ",<br>";
    return newconvertDate.join(" ");
    
}

document.getElementById('date').innerHTML=date();

let btns =document.getElementsByClassName("card-btn");
for (let btn of btns){
    btn.addEventListener('click',function(event){
        
        alert("Board updated Successfully")
        event.target.setAttribute("disabled",true)
        event.target.style.backgroundColor="gray"
        let getHeadingElement= event.target.parentNode.parentNode;
        let getHeading = getHeadingElement.querySelector('h1').innerHTML
        

        let totalTaxt =document.getElementById('avleavleTaxt').innerHTML;
        let convertTotalTaxt=parseInt(totalTaxt)
        convertTotalTaxt= convertTotalTaxt - 1
        document.getElementById('avleavleTaxt').innerText=convertTotalTaxt;

        let increseValue=document.getElementById('increseValue').innerHTML;
        let convertIncreseValue=parseInt(increseValue)
        convertIncreseValue=convertIncreseValue+1;
        document.getElementById('increseValue').innerText=convertIncreseValue

        let dataStore= document.getElementById('dataStore')
        let p = document.createElement('p')
        p.classList.add("dataitems")
        p.innerHTML=`
        You have Complete The Task ${getHeading} at ${time()}
        `
        dataStore.appendChild(p)
       

        if(convertTotalTaxt===0){
            alert('Congrates!!! You have completed the current task')
        }
        
            
    })
    
}

// history remove------------------------

document.getElementById('history-reset').addEventListener('click',function(){
    let items=document.getElementsByClassName('dataitems');
    while(items.length>0){
       items[0].parentNode.removeChild(items[0])
    }
    
})








