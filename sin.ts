function getCir(radians, radius) {
    return Math.sin(radians) * radius;
}
console.log(getCir(1, 10));
console.log(getCir(2, 10));
console.log(getCir(Math.PI, 10));