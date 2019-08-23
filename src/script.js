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
    ctx.ellipse(lx, ly, 50, 40, Math.PI/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(lx, ly, 20, 0, 2 * Math.PI);
    ctx.fill();

    // right ear
    lx = SIZE/2 + (RADIUS * Math.cos(d2r(315)));
    ly = SIZE/2 + (RADIUS * Math.sin(d2r(315)));
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(lx, ly, 50, 40, -Math.PI/4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(lx, ly, 20, 0, 2 * Math.PI);
    ctx.fill();

    // body
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.ellipse(300, 500, 50, 100, 0, 0, 2 * Math.PI);
    ctx.fill();

    // tail
    ctx.fillStyle = "#333";
    ctx.rotate(d2r(-20));
    ctx.translate(150, 565);
    ctx.fillRect(0, 0, 80, 20);
    ctx.beginPath();
    ctx.arc(80, 10, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.translate(-150, -565);
    ctx.rotate(-d2r(-20));

    // foot
    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.arc(270, 500, 20, 0, 2 * Math.PI);
    ctx.arc(310, 500, 20, 0, 2 * Math.PI);
    ctx.fill();

    // body cover
    ctx.fillStyle = "white";
    ctx.fillRect(200, 495, 200, 200, 0, 0, 2 * Math.PI);

    // head
    ctx.fillStyle = "#333";
    ctx.beginPath();
    ctx.arc(300, 300, RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    // left eye
    ctx.fillStyle = "LightGreen";
    ctx.beginPath();
    ctx.arc(250, 300, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.ellipse(250, 300, 7, 15, 0, 0, 2 * Math.PI);
    ctx.fill();

    // right eye
    ctx.fillStyle = "LightGreen";
    ctx.beginPath();
    ctx.arc(350, 300, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.ellipse(350, 300, 7, 15, 0, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "pink";
    ctx.beginPath();
    //ctx.arc(300, 375, 10, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 375);
    ctx.lineTo(288, 355);
    ctx.lineTo(312, 355);
    ctx.fill();
}

window.onload = main;
