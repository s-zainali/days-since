
function calculate() {
    let start = new Date(document.getElementById("start").value);
    let to = new Date(document.getElementById("to").value);
    document.getElementById("answer").innerHTML = (to - start)/1000/60/60/24 + " days";
}