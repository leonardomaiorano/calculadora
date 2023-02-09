function insert (num) {
    let number = document.getElementById('outcome').innerHTML;
    document.getElementById('outcome').innerHTML = number + num;
}

function clean() {
    document.getElementById('outcome').innerHTML = "";
}

function calc() {
    let outcome = document.getElementById('outcome').innerHTML;
    if (outcome) {
        document.getElementById('outcome').innerHTML = eval(outcome);
    } else {
        document.getElementById('outcome').innerHTML = "error";
    }
}