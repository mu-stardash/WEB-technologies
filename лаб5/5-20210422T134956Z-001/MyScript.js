function onChecked(divId, checkboxId) {
    if (document.getElementById(checkboxId).checked) {
        document.getElementById(divId).style.display = "block";
        return false;
    } else {
        document.getElementById(divId).style.display = "none";
    }
}

function onFontColorChanged() {
    document.getElementById("body").style.color = document.getElementById("fontcolor").value;
    document.getElementById("body").style.backgroundColor = document.getElementById("backgroundcolor").value;
    return false;
}

function thumbNumber() {
    document.getElementById("body").style.fontSize = document.getElementById("size").value + 'px';
    return false;
}

function formSub(f) {
    for (var i = 0; i < f.elements.length; i++)
        if (null != f.elements[i].getAttribute("required"))
            if (isEmpty(f.elements[i].value))
                return false;

    let name = document.getElementById('name').value;
    let brithday = document.getElementById('date').value;
    let mail = document.getElementById('email').value;
    let homepage = document.getElementById('adres').value;

    let dop = "";

    if (document.getElementById("checkbox1").checked) {
        dop += "Студент: " + document.querySelector('input[id="kurs"]:checked').value + "<br>";
    }
    if (document.getElementById("checkbox2").checked) {
        dop += "Место работы: " + document.getElementById('mesto').value + "<br>" + "Должность: " + document.getElementById('dolzhnost').value + "<br>";
    }
    

    document.getElementById('res').style.display = "block";
    document.getElementById('result').innerHTML = "Имя: " + name + "<br>" + "Дата рождения: " +
        brithday + "<br>" + "Почта: " + mail + "<br>" + "Домашняя страница: " + homepage + "<br>" + dop;

    return false;
}

function isEmpty(str) {
    for (var i = 0; i < str.length; i++)
        if (" " != str.charAt(i))
            return false;
    return true;
}

function test() {
    window.open('lab6.html');
}

