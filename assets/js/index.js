function countdown(){
    let now = new Date();
    let Month = new Date(now.getFullYear(), 11, 31); /* Get Month  */

    let currentTime = now.getTime();
    let Time = Month.getTime();

    let remainingtime = Time - currentTime;

    let s = Math.floor(remainingtime / 1000);
    let m  = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);

}

countdown();