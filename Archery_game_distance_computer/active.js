const getValueDistance = () =>{
    var number = document.getElementById("goal").value; 
    goal=[[6,5],[11,5],[2,4],[8,7],[12,8],[4,6],[10,4],[1,5]]
    var dir = document.getElementById("real_dir").value; 
    var score = document.getElementById("real_score").value; 
    var dis=Math.sqrt((10-goal[number][1])*(10-goal[number][1])+(10-score)*(10-score)-2*(10-goal[number][1])*(10-score)*Math.cos((goal[number][0]-dir)*Math.PI/6));
    document.getElementById("dis").innerHTML = Math.round(dis);
}