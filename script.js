// Scroll animation

function reveal(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(el=>{
const windowHeight=window.innerHeight;
const elementTop=el.getBoundingClientRect().top;

if(elementTop<windowHeight-100){
el.classList.add("active");
}
});

}

window.addEventListener("scroll",reveal);


// Skills Chart

const ctx=document.getElementById("skillsChart");

new Chart(ctx,{
type:"radar",
data:{
labels:[
"Java",
"Python",
"NodeJS",
"Android",
"Automation",
"AI Testing"
],
datasets:[{
label:"Skill Level",
data:[85,80,85,80,90,85],
backgroundColor:"rgba(37,99,235,0.3)",
borderColor:"#2563eb"
}]
},
options:{
scales:{
r:{beginAtZero:true,max:100}
}
}
});
