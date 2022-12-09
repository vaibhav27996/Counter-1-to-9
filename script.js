var current=document.querySelector('.current');
var next=document.querySelector('.next');
var start_btn=document.getElementById('btn');
var inputNo=document.getElementById("inputNumber");
current.innerText=0;

start_btn.addEventListener('click',function(){

    if(inputNo.value < 0 || inputNo.value > 9){
        window.alert("Enter Value between 0 and 9");
        current.innerText=0;
        inputNo.value="";
        return;
    }else{
        
        let currNumber=0;
        let stop=setInterval(function(){
            
            if(currNumber+1 > parseInt(inputNo.value)){
                clearInterval(stop);
                window.alert("Counter Stoped");
                current.innerText=0;
                inputNo.value="";
                return;
            }
            
            current.innerText=currNumber;
            next.innerText=currNumber+1;
            next.classList.add('animate');
            
            setTimeout(function(){
                next.classList.remove('animate');
                current.innerText = next.innerText;
            },500);
        
            currNumber++;
        },1000);
        
        
        
    }
    
});