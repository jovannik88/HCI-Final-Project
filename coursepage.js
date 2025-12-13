//Navbar Link

document.querySelector(".p2").addEventListener("click", () => {
    window.location.href = "about.html";
});
document.querySelector(".p3").addEventListener("click", () => {
    window.location.href = "Course Page.html";
});
document.querySelector(".p4").addEventListener("click", () => {
    window.location.href = "Contact.html";
});

//Course Link
document.querySelector(".Beginner").addEventListener("click", function () {
    window.location.href = "page1.html";   
});
document.querySelector(".Elementary").addEventListener("click", function () {
    window.location.href = "page2.html";   
});
document.querySelector(".Prein").addEventListener("click", function () {
    window.location.href = "page3.html";   
});
document.querySelector(".Inter").addEventListener("click", function () {
    window.location.href = "page4.html";   
});
document.querySelector(".Uperinter").addEventListener("click", function () {
    window.location.href = "page5.html";   
});
document.querySelector(".Advanced").addEventListener("click", function () {
    window.location.href = "page6.html";   
});
document.querySelector(".Logout").addEventListener("click", function () {
    window.location.href = "Login Page.html";   
});


//Add hover animation for all course boxes (zoom function)
const courseBoxes = document.querySelectorAll(".Course > div");

courseBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});