var clockElement=document.getElementById("clock");
let minuets,hour=0,flag=0,flag2=0;
var back=document.getElementById("fullBack");
var search=document.getElementById("searchBox");
var backPlate=document.getElementById("backPlate");

document.getElementById("searchBox").focus();
setInterval(function(){updateClock(clockElement);},100);

mode();

function updateClock(clock){
    var timeSec=new Date().toLocaleTimeString();
    var time=timeSec.split(':')
    hour=parseInt(time[0]);
    minuets=parseInt(time[1]);
    clock.innerHTML=hour+':'+time[1];

    if(flag2==0)
    {
        mode();
        flag2=1;
    }
    }
function mode(){
    if(hour>18 || hour<6)
    {
        console.log();
        night();
        flag=1;
    }
        else
    {
        // console.log(hour);

        day();
        flag=0;
    }

}
function dayNight(){
    flag++;
    if(flag%2==1)
    {
        night();
    }
    else{
        day();
    }
}





function night(){
    // document.body.style.backgroundColor="lightblue"
    // back.style.opacity="0.4";
    backPlate.style.transform="translateY(0%)"

    search.style.backgroundColor="#555555";
    search.style.color="#bbbbbb";
    search.style.borderRadius="3px";
    search.style.borderBottom="none"
    clockElement.style.color="#bfbbbb";
    // document.getElementById("toggleBtn").style.outline="none";
    // document.getElementById("toggleBtn").style.border="none";
    document.getElementById("toggleMoon").style.display="none";
    document.getElementById("toggleSun").style.display="inline";
    document.getElementById("youtube").style.filter="grayscale(30%)";

}
function day(){
    // back.style.backgroundPosition="right";
    search.style.backgroundColor="#ffffff";
    backPlate.style.transform="translateY(100%)"

    clockElement.style.color="#555555";
    search.style.color="#333";

    search.style.borderBottom="solid 1.5px #aa2211"
    clockElement.style.color="#555555";
    document.getElementById("toggleSun").style.display="none";
    document.getElementById("toggleMoon").style.display="inline";
    document.getElementById("youtube").style.filter="grayscale(0%)";





}