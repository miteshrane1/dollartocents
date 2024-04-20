function convertToCents() {
    var dollars = parseFloat(document.getElementById("dollars").value);
    var cents = dollars * 100;
    document.getElementById("result").innerText = cents + " cents";
}
