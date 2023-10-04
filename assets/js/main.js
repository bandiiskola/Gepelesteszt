var szovegek = ["lorem ipsum dolor sit amet",
    "Sanyi és Peti mindig ötös",
    "Tomi mosóport vettem tegnap",
    "Nincs kettő négy nélkül",
    "Ki mint veti ágyát úgy alussza álmát",
    "Minden majom telefonál naponta",
    "Revolver Ocelot, Revolver Ocelot"
]

var x = Math.floor(Math.random() * szovegek.length)


document.getElementById("szoveg").innerHTML = szovegek[x]
var ido=0
var idozito = setInterval(() => {
    ido++
    document.getElementById("bemenet").focus()
    document.getElementById("ido").innerHTML = (ido / 10) + "mp"
    if (szovegek[x] == document.getElementById("bemenet").value) {
        clearInterval(idozito)
        var cpm = Math.round(szovegek[x].length / (ido / 10)*100)/100
        document.getElementById("cpm").innerHTML = cpm + " karakter/mp"
        document.getElementById("kesz").style.display = "block"
    }
}, 100)

var szin = () => {
    var beirt = document.getElementById("bemenet").value
    document.getElementById("szoveg").innerHTML = ""
    for (var i = 0; i < szovegek[x].length; i++) {
        if (szovegek[x][i] == beirt[i]) {
            document.getElementById("szoveg").innerHTML += "<span style='color:green'>" + szovegek[x][i] + "</span>"
        } else {
            document.getElementById("szoveg").innerHTML += "<span style='color:red'>" + szovegek[x][i] + "</span>"
        }
    }
}