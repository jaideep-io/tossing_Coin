var button =document.querySelector(".btn");
button.addEventListener('click',function(){
    var tossCoin=Math.floor(Math.random()*2)+1;
    var heading;
    if(tossCoin===1)
    {
heading=" It's Head ";
document. querySelector("img").setAttribute("src","images/coin"+tossCoin+".png");
document.querySelector("h1").textContent=""+heading;;
    }
    else
    {
heading=" It's tail ";
document. querySelector("img").setAttribute("src","images/coin"+tossCoin+".png");
document.querySelector("h1").textContent=""+heading; 
    }

    
})