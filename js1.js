function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
function pontozas(){
var q = parseInt(document.getElementById("a").value);
var w = parseInt(document.getElementById("b").value);
var e = parseInt(document.getElementById("c").value);
var s = parseInt(document.getElementById("d").value);
var elert = q + w + e + s;
var szazalek = elert / 18 * 100;   document.getElementById("eredmeny").innerHTML = "Az eredmény: " + elert + " pont, " + szazalek + "%";
if (szazalek > 80){
document.getElementById("osztalyzat").innerHTML = "5 (ötös)"
}
else if (szazalek > 60){
document.getElementById("osztalyzat").innerHTML = "4 (négyes)"
}
else if (szazalek > 40){
document.getElementById("osztalyzat").innerHTML = "3 (hármas)"   
document.getElementById("osztalyzat").innerHTML = "2 (kettes)"
}
else{
document.getElementById("osztalyzat").innerHTML = "1 (eggyes)"
}
}