// ---------- Scroll Animation ----------

function reveal(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((el)=>{

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
el.classList.add("active");
}

});

}

// Run once when page loads
window.addEventListener("load", reveal);

// Run when scrolling
window.addEventListener("scroll", reveal);



// ---------- Skills Radar Chart ----------

const canvas = document.getElementById("skillsChart");

if(canvas){

const ctx = canvas.getContext("2d");

new Chart(ctx,{
type:"radar",
data:{
labels:[
"Java",
"Python",
"Node.js",
"Android",
"Automation",
"AI Testing"
],
datasets:[{
label:"Skill Level",
data:[85,80,85,80,90,85],
backgroundColor:"rgba(37,99,235,0.25)",
borderColor:"#2563eb",
borderWidth:2,
pointBackgroundColor:"#2563eb"
}]
},
options:{
responsive:true,
plugins:{
legend:{
display:false
}
},
scales:{
r:{
beginAtZero:true,
max:100,
ticks:{
stepSize:20
}
}
}
}
});

}
