
function execute() {
    let myDate = new Date();
    let change = myDate.toLocaleTimeString();
    let time = document.getElementById("time").innerHTML =change; 
    let footerTime = document.getElementById("footer-time").innerHTML= change;
}
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

hamburger.addEventListener('click',()=>{
hamburger.classList.toggle("active");
menu.classList.toggle("active");
})
setInterval(execute,0);
// let firstsection = document.getElementsByClassName("firstsection")
// firstsection.style(backgroundcolor = 'red')

// function theme() {
//     const theme = document.getElementById("theme");
//     console.log('pressed')
//     if(document.getElementById("theme").innerHTML == "Dark Mode"){
//         document.getElementById("theme").innerHTML ="Light Mode"
//         document.getElementsByTagName("body")[0].style.backgroundColor = "white";

//         const paragraph = document.getElementsByTagName("p");
//         for (let i = 0; i < paragraph.length; i++) {
//         paragraph[i].style.color = "#777"  
//         }

//         const headertwo = document.getElementsByTagName("h2");
//         for (let i = 0; i < headertwo.length; i++) {
//         headertwo[i].style.color = "black"  
//         }
//     } else{
//         // document.getElementsByClassName('top-buttons').innerHTML = "Light Mode";
//         document.getElementById("theme").innerHTML = "Dark Mode";
//         document.getElementsByTagName("body")[0].style.backgroundColor = "black";

//         const paragraph = document.getElementsByTagName("p");
//         for (let i = 0; i < paragraph.length; i++) {
//         paragraph[i].style.color = "white"  
//         }

//         const headertwo = document.getElementsByTagName("h2");
//         for (let i = 0; i < headertwo.length; i++) {
//         headertwo[i].style.color = "white"  
//         }
//     }
    
//     document.getElementsByTagName("h1")[0].style.backgroundColor = "r";
   
// }

// function theme() {
//     const theme = document.getElementById("theme");
//     console.log('pressed')
//     if(document.getElementById("theme").innerHTML == "Dark Mode"){
//         document.getElementById("theme").innerHTML ="Light Mode"

//     } else{
//         // document.getElementsByClassName('top-buttons').innerHTML = "Light Mode";
//         document.getElementById("theme").innerHTML = "Dark Mode";
//     } 
//     document.body.classList.toggle("dark-mode");
// }
function theme() {
    const theme = document.getElementsByClassName("fa-lightbulb");
    console.log('pressed')
    // if(document.getElementById("theme").innerHTML == "Dark Mode"){
    //     document.getElementById("theme").innerHTML ="Light Mode"

    // } else{
    //     // document.getElementsByClassName('top-buttons').innerHTML = "Light Mode";
    //     document.getElementById("theme").innerHTML = "Dark Mode";
    // } 
    document.body.classList.toggle("dark-mode");
}


