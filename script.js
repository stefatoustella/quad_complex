function compute() {

    var a, b, c, discriminant, x1, x2, realPart, imaginaryPart;

    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = Number(document.getElementById("c").value);

    discriminant = Math.pow(b, 2) - (4 * a * c);

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        x_1.innerHTML = x1;
        x_2.innerHTML = x2;
    }
    else if (discriminant == 0) {
        x1 = x2 = (-b) / (2 * a);

        x_1.innerHTML = x1;
        x_2.innerHTML = x2;
    }
    else {
        realPart = (-b) / (2 * a);
        imaginaryPart = Math.sqrt(-discriminant) / (2 * a);

        x_1.innerHTML = "(" + realPart + ")" + " +j" + "(" + imaginaryPart + ")";
        x_2.innerHTML = "(" + realPart + ")" + " -j" + "(" + imaginaryPart + ")";
    }
}

solve.addEventListener('click', compute);