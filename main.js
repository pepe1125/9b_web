function belep(username, password) {
    localStorage.setItem(username,password)
    if (username == "") {
        alert("Lehet, hogy helytelenül adtad meg a felhasználónevedet vagy a jelszavadat.")
    } else {
        if (password == "") {
            alert("Lehet, hogy helytelenül adtad meg a felhasználónevedet vagy a jelszavadat.")
        } else {
            alert("Üdvözöljük: " + username + "")
            window.open('index.html' , '_self')
        }
    }
}
document.getElementById('kiir').innerHTML= + usarname+