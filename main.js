var termek1 = 1000
var termek2 = 2600
var termek3 = 8900
var termek4 = 7000
var termek5 = 3990
var termek6 = 7000
var termek7 = 3500
var termek8 = 9999
var termek9 = 11000
var termek10 = 1600
var termek11 = 3000
var termek12 = 15000
var termek13 = 3400
var termek14 = 10000
var termek15 = 8700

function kosarba(termek){
    db=Number(prompt('Add meg mennyit szeretnél?'))
    localStorage.setItem(termek1,db)
}
function fizetes(){
    alert('Köszönjük a megrendelésed!')
    open.window(index.html , self_)
}
function torles() {
    localStorage.clear()
    window.location.reload();
}
function kosar() {
   var list = "<tr><th style=\"margin:auto\">Termék neve: </th><th>darabszáma: </th><th>Ára: </th></tr>\n"

    var ossz = 0;
    var darab = 0;
    var key = "";


    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        darab = parseInt(localStorage.getItem(key));
        list += "<tr><td>" + key + "</td><td>" + "<button style=\"width:100%\" onclick='ModifyItem(\"" + key + "\", " + "prompt(\"Mennyi legyen?\")" + ")'>" + darab + "</button>" + "</td>" + "</td><td>" + (window[key] * darab) + " Ft" + "</td><td>"  + "</td></tr>";
        ossz += window[key] * darab;
    }

    list += "<tr> <th>VÉGÖSSZEG: </th> <th> </th> <th>" + ossz + " Ft" + "</th></tr>"



    document.getElementById('tabla').innerHTML = list
}

function termekek() {
    var dbszam = 0;

    for (var i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        console.log(key)
        dbszam += Number(localStorage.getItem(key))
    }

    document.getElementById("darabszam").innerHTML = dbszam

}
