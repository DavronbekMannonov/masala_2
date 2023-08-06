


var a = +prompt("1-son -> ")
var b = +prompt("2-son -> ")
var c = +prompt("3-son -> ")


if (isNaN(a)) {
    alert('Son kiriting !!!');
}else if (isNaN(b)) {
    alert('Son kiriting !!!');
}else if(isNaN(c)){
    alert('Son kiriting !!!');
}

if (a >= b && a >= c) {
    alert(a + " eng katta son")
}else if (b >= a && b >= c) {
    alert(b + " eng katta son")
}else if (c >= b && c >= a) {
    alert(c + " eng katta son")
}