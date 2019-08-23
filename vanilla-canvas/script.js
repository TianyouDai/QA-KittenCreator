function d2r(deg) {
    return deg * Math.PI/180;
}

function main() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");

    const RADIUS = 150;
    const SIZE = 600;
    c.width  = SIZE;
    c.height = SIZE;

    // left ear
    let lx = SIZE/2 + (RADIUS * Math.cos(d2r(225)));
    let ly = SIZE/2 + (RADIUS * Math.sin(d2r(225)));
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(lx, ly, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(lx, ly, 25, 0, 2 * Math.PI);
    ctx.fill();

    // right ear
    lx = SIZE/2 + (RADIUS * Math.cos(d2r(315)));
    ly = SIZE/2 + (RADIUS * Math.sin(d2r(315)));
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(lx, ly, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(lx, ly, 25, 0, 2 * Math.PI);
    ctx.fill();

    // body
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(300, 500, 50, 100, 0, 0, 2 * Math.PI);
    ctx.fill();

    // body
    ctx.fillStyle = "white";
    ctx.fillRect(250, 500, 100, 100, 0, 0, 2 * Math.PI);

    // head
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(300, 300, RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    // left eye
    ctx.fillStyle = "aquamarine";
    ctx.beginPath();
    ctx.arc(250, 300, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.ellipse(250, 300, 7, 15, 0, 0, 2 * Math.PI);
    ctx.fill();

    // right eye
    ctx.fillStyle = "aquamarine";
    ctx.beginPath();
    ctx.arc(350, 300, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.ellipse(350, 300, 7, 15, 0, 0, 2 * Math.PI);
    ctx.fill();

    /*
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill(); */
}

window.onload = main;
