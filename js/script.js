document.getElementById('new-today').addEventListener('click',function(){
    window.location.href="./main.html"
})

document.getElementById('diffcolor').addEventListener('click',function(){
    function getRandomColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    document.body.style.backgroundColor=getRandomColor()
})


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
        console.log(getHeading)

        let totalTaxt =document.getElementById('avleavleTaxt').innerHTML;
        let convertTotalTaxt=parseInt(totalTaxt)
        convertTotalTaxt= convertTotalTaxt - 1
        document.getElementById('avleavleTaxt').innerText=convertTotalTaxt;
        console.log(convertTotalTaxt)

        let increseValue=document.getElementById('increseValue').innerHTML;
        let convertIncreseValue=parseInt(increseValue)
        convertIncreseValue=convertIncreseValue+1;
        document.getElementById('increseValue').innerText=convertIncreseValue

        if(convertTotalTaxt===0){
            alert('Congrates!!! You have completed the current task')
        }
            
    })
    
}

// let findValue =document.getElementById('avleavleTaxt').innerText
// let converFindValue=parseInt(findValue)
// console.log(converFindValue)
