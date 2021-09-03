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
        if (null !== f.elements[i].getAttribute("required"))
            if (isEmpty(f.elements[i].value))
                return false;

	var surn = document.getElementById('surn').value;
    var name = document.getElementById('name').value;
	var patr = document.getElementById('patr').value;
    var brithday = document.getElementById('date').value;
    var mail = document.getElementById('email').value;
	var tel = document.getElementById('tel').value;
    var homepage = document.getElementById('adres').value;

    var dop = "";

	if (document.getElementById("checkbox1").checked) {
		dop += "Школьник: " + document.querySelector('input[class="school"]:checked').value + "<br>";
	}
    if (document.getElementById("checkbox2").checked) {
        dop += "Студент: " + document.querySelector('input[class="kurs"]:checked').value + "<br>";
    }
    if (document.getElementById("checkbox3").checked) {
        dop += "Место работы: " + document.getElementById('mesto').value + "<br>" + "Должность: " + document.getElementById('dolzhnost').value + "<br>";
    }    

    document.getElementById('res').style.display = "block";
	
	if (patr === "") {
		document.getElementById('result').innerHTML = "Фамилия: " + surn + "<br>" + "Имя: " + name + "<br>" + "Дата рождения: " + brithday + "<br>" + "Номер телефона: " + tel + "<br>" + "Почта: " + mail + "<br>" + "Домашняя страница: " + homepage + "<br>" + dop;
	} else {
    document.getElementById('result').innerHTML = "Фамилия: " + surn + "<br>" + "Имя: " + name + "<br>" + "Отчество: " + patr + "<br>" + "Дата рождения: " + brithday + "<br>" + "Номер телефона: " + tel + "<br>" + "Почта: " + mail + "<br>" + "Домашняя страница: " + homepage + "<br>" + dop;
	}

    return false;
}

function isEmpty(str) {
    for (var i = 0; i < str.length; i++)
        if (" " != str.charAt(i))
            return false;
    return true;
}

// ШЕСТАЯ ЛАБА
function testirovanie() {
    window.open('C:/ucheba/WEB/лаб6/lab6.html');
}
