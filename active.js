window.onload = function what(){
var frames=[
"      @ @                     @ @           \n    @ ; @   @ @ @ @ @ @ @ @   @ ; @         \n    @ ; @ @ ; ; ; ; ; ; ; ; @ @ ; @         \n    @ @ @ ; ; @ ; ; ; @ ; ; ; @ @ @         \n    @ @ ; ; ; @ ; ; ; @ ; ; ; ; @           \n    @ ; ; ; ; ; @ @ @ ; ; ; ; ; ; @         \n  @ @ ; ; ; ; ; @ @ @ ; ; ; ; ; ; @ @       \n  @ ; ; ; ; @ ; @ @ @ ; @ ; ; ; ; ; @       \n  @ ; ; ; ; ; @ @ ; @ @ ; ; ; ; ; ; @       \n  @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; @       \n  @ @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; @ @       \n    @ @ ; ; ; ; ; ; ; ; ; ; ; ; @ @         \n      @ @ ; ; ; ; ; ; ; ; ; ; @             \n      @ @ ; ; ; ; ; ; ; ; ; ; @             \n      @ ; ; @ ; ; ; @ ; ; ; ; ; @ @         \n    @ ; ; ; ; @ ; @ ; ; ; ; ; ; ; @         \n    @ ; ; @ ; ; @ ; ; @ ; ; ; ; ; @         \n    @ ; ; ; @ @ . @ @ . ; ; ; ; ; @         \n    @ ; ; ; ; ; . . . ; ; ; ; ; ; @         \n    @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; @         \n    @ @ ; ; ; ; ; ; ; ; ; ; ; ; ; @         \n      @ @ ; ; ; ; ; ; ; ; ; ; ; @ @ @       \n        @ @ @ ; ; ; ; ; ; ; @ @ @ ; ; @     \n        @ @ @ @ @ @ @ @ @ @ @ @ @ @ ; ; @   \n        @ @ @               @ @ @   @ @ @   \n",
"      @ @                     @ @           \n    @ ; @   @ @ @ @ @ @ @ @   @ ; @         \n    @ ; @ @ ; ; ; ; ; ; ; ; @ @ ; @         \n    @ @ @ ; ; @ ; ; ; @ ; ; ; @ @ @         \n    @ @ ; ; ; @ ; ; ; @ ; ; ; ; @           \n    @ ; ; ; ; ; @ @ @ ; ; ; ; ; ; @         \n  @ @ ; ; ; ; ; @ @ @ ; ; ; ; ; ; @ @       \n  @ ; ; ; ; @ ; @ @ @ ; @ ; ; ; ; ; @       \n  @ ; ; ; ; ; @ @ ; @ @ ; ; ; ; ; ; @       \n  @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; @       \n  @ @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; @ @       \n  @ @ @ ; ; ; ; ; ; ; ; ; ; ; @ @ @         \n@ ; ; @ @ ; ; ; ; ; ; ; ; ; @ ; ; @         \n@ ; ; ; @ ; ; ; ; ; ; ; ; @ ; ; ; @         \n  @ ; ; @ ; ; ; ; ; ; ; ; ; ; ; @ @         \n  @ @ ; ; ; ; ; . . . ; ; ; ; @ ; @         \n    @ @ ; ; ; . . . . . ; ; @ ; ; @         \n    @ ; ; ; ; . . . . . ; ; ; ; ; @         \n    @ ; ; ; ; ; . . . ; ; ; ; ; ; @         \n    @ ; ; ; ; ; ; ; ; ; ; ; ; ; ; @         \n    @ @ ; ; ; ; ; ; ; ; ; ; ; ; ; @         \n      @ @ ; ; ; ; ; ; ; ; ; ; ; @ @ @       \n        @ @ @ ; ; ; ; ; ; ; @ @ @ ; ; @     \n        @ @ @ @ @ @ @ @ @ @ @ @ @ @ ; ; @   \n        @ @ @               @ @ @   @ @ @   \n"
];
var click_count=0,f=0,flag=0;
var quokka=[];
function background(){
    var r=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256);
    var box = document.querySelector("html");
    var str="rgba("+r+","+g+","+b+",0.5)";
    box.style.backgroundColor = str;
    box.style.borderColor = str;
}

incrementClick =function() {
    if(click_count==0){
        var timeoutID = setTimeout(myAlert, 17000);
        function myAlert() {
            flag=1;
        }
        timeoutID;
        const audio = document.createElement("audio");
        audio.src = "ha-take-on-me-official-video-remastered-in-4k.mp3";
        audio.play();
        var p=document.getElementById("tip");
        p.style.top="1000%";
        document.body.style.width="0";
        document.body.style.height="0";
    }
    if(click_count<12){
        var r=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256),b=Math.floor(Math.random()*256);
        quokka.push({
            color:"rgba("+r+","+g+","+b+",0.5)",
            angle: click_count,
            dir:[0,0]
        });   
    }
    if(click_count<14){
        click_count++;
    }
    
}
function draw_quokka(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    for(var i=0;i<click_count;i++){
        var x=document.getElementById(i.toString());
        x.innerText=frames[f%2];
        var r=windowHeight/2-x.offsetHeight/2;
        if(windowHeight>windowWidth){
            r=windowWidth/2-x.offsetWidth/2;
        }
        x.style.bottom=(windowHeight/2-x.offsetHeight/2+Math.sin((quokka[i].angle/click_count)*2*Math.PI) * r)+"px";
        x.style.left=(windowWidth/2-x.offsetWidth/2+Math.cos((quokka[i].angle/click_count)*2*Math.PI) * r)+"px";
    }
}
function run_quokka(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    for(var i=0;i<12;i++){
        var x=document.getElementById(i.toString());
        x.innerText=frames[f%2];
        var pos=[parseInt(x.style.bottom),parseInt(x.style.left)];
        if(pos[0]+quokka[i].dir[0]<=0 || pos[0]+quokka[i].dir[0]+(x.offsetHeight)>=windowHeight){
            quokka[i].dir[0]=-quokka[i].dir[0];
        }
        if(pos[1]+quokka[i].dir[1]<=0|| pos[1]+quokka[i].dir[1]+(x.offsetWidth)>=windowWidth){
            quokka[i].dir[1]=-quokka[i].dir[1];
        }
        x.style.bottom=pos[0]+quokka[i].dir[0]+"px";
        x.style.left=pos[1]+quokka[i].dir[1]+"px";
    }
}
function run_the_animation(){
    if(f==0){
        if(flag==1){
            background();
        }
        f=1;
    }else if(f==1){
        f=2;
    }else if(f==2){
        f=3;
    }else{
        f=0;
    }
    if(click_count<12){
        draw_quokka();
    }else if(click_count==12){
        for(var i=0;i<click_count;i++){
            quokka[i].dir[0]=Math.sin((quokka[i].angle/click_count)*2*Math.PI)*50;
            quokka[i].dir[1]=Math.cos((quokka[i].angle/click_count)*2*Math.PI)*50;
        }
    }else{
        run_quokka();
    }
    
}
setInterval(run_the_animation, 100);
    
};