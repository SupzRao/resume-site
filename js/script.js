// Typing animation

const text="Suprada Rao | Automation Engineer";
let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();


// Dark Mode

document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};


// Scroll animation

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

if(el.getBoundingClientRect().top < window.innerHeight-100){

el.classList.add("active");

}

});

});


// Skill chart

const ctx=document.getElementById("skillsChart");

new Chart(ctx,{

type:"radar",

data:{

labels:["Java","Python","Node.js","Android","Automation","AI Testing"],

datasets:[{

label:"Skill Level",

data:[85,80,85,80,90,85],

backgroundColor:"rgba(59,130,246,0.3)"

}]

}

});


// GitHub project auto fetch

fetch("https://api.github.com/users/SupzRao/repos")

.then(res=>res.json())

.then(data=>{

const container=document.getElementById("projects-container");

data.slice(0,6).forEach(repo=>{

const card=document.createElement("div");

card.className="project-card";

card.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description || "GitHub repository project"}</p>

<a href="${repo.html_url}" target="_blank">View Project →</a>

`;

container.appendChild(card);

});

});
