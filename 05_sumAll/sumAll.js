function sumAll(x, y) {
if (x < 0 || y < 0) return "ERROR";
if (typeof x != "number" || typeof y != "number") return "ERROR";

if (x > y) {
    n1 = x
    n2 = y
} else {
    n1 = y
    n2 = x
}

return (n1 + n2)*(n1/2);

}

sumAll(133, 1);

// Do not edit below this line
module.exports = sumAll;
