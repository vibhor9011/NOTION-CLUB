let eventDate =
    new Date("June 20, 2026 10:00:00").getTime();
setInterval(() => {
    let now =
        new Date().getTime();
    let distance =
        eventDate - now;
    let days =
        Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours =
        Math.floor((distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60));
    let mins =
        Math.floor((distance % (1000 * 60 * 60))
            / (1000 * 60));
    let secs =
        Math.floor((distance % (1000 * 60))
            / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;
    document.getElementById("secs").innerText = secs;
}, 1000);

let questions =
    document.querySelectorAll(".question");
questions.forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling
            .classList.toggle("show");
    });
});