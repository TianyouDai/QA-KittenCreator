// constants
const RADIUS = 150;
const SIZE   = 600;

// functions
function d2r(deg) {
    return deg * Math.PI/180;
}

function getX(radius, angle) {
    return (radius * Math.cos(d2r(angle)));
}

function getY(radius, angle) {
    return (radius * Math.sin(d2r(angle)));
}
