function cg1() {
    document.getElementById("container").style.transition = "background 0.3s ease";
    document.getElementById("container").style.backgroundImage = "url('Images/1.jpg')";
}

function rb1() {
    document.getElementById("container").style.backgroundImage = "url('Images/Back.jpg')";
}

function cg2() {
    document.getElementById("container").style.transition = "background 0.3s ease";
    document.getElementById("container").style.backgroundImage = "url('Images/2.jpg')";
}

function rb2() {
    document.getElementById("container").style.backgroundImage = "url('Images/Back.jpg')";
}

function cg3() {
    document.getElementById("container").style.transition = "background 0.3s ease";
    document.getElementById("container").style.backgroundImage = "url('Images/3.jpg')";
}

function rb3() {
    document.getElementById("container").style.backgroundImage = "url('Images/Back.jpg')";
}

document.querySelector("#Login").addEventListener("click",()=>{
    window.location.href="Login/Login.html";
})

document.querySelector("#Join").addEventListener("click",()=>{
    window.location.href="Login/Signup.html";
})

document.querySelector("#h").addEventListener("click",()=>{
    window.location.href="Book/Book.html";
})







function bookFlight() {
    alert("Flight booked successfully!");
    window.location.href="../flight.html"
}


