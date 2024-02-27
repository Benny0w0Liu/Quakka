const getValueInput = () =>{
    var a = document.getElementById("goal_dir").value; 
    var b = document.getElementById("goal_score").value; 
    var c = document.getElementById("real_dir").value; 
    var d = document.getElementById("real_score").value; 
    var dis=Math.sqrt((10-b)*(10-b)+(10-d)*(10-d)-2*(10-b)*(10-d)*Math.cos((a-c)*Math.PI/6));
    document.getElementById("ans").innerHTML = Math.round(dis);
}