var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var otryad = document.getElementById('otryad').value;
	
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
	var num = i+1;
	answerText=answerText+"\n    Вопрос №"+ num +"";
	if(yourAns[i]!=questions[i].correctAnswer){
	    answerText=answerText+"\n    Правильный ответ: " +
		questions[i].answers[questions[i].correctAnswer] + "\n";
	  }
        else{
	    answerText=answerText+": Верно! \n";
	    ++score;
	    }
       }
	
	
	answerText=answerText+"\n    Вопрос №"+ 3 +"";
	if (otryad.toLowerCase() == "полиномиальная" || otryad.toLowerCase() == "полиномиальная схема") {
		answerText=answerText+": Верно! \n";
        score += 1;
    } else {
		answerText=answerText+"\n    Правильный ответ: " + "полиномиальная\n"
	}
	
	answerText=answerText+"\n    Вопрос №"+ 4 +"";
	if (!document.getElementById('ch-1').checked && document.getElementById('ch-2').checked &&
        !document.getElementById('ch-3').checked && document.getElementById('ch-4').checked) {
		answerText=answerText+": Верно! \n";
        score += 1;
    } else {
		answerText=answerText+"\n    Правильный ответ: " + "Плотностью, Функцией распределения\n"
	}
	
	answerText=answerText+"\n    Вопрос №"+ 5 +"";
	if (document.getElementById('select-1').value == 1 && document.getElementById('select-2').value == 0 &&
        document.getElementById('select-3').value == 0) {
		answerText=answerText+": Верно! \n";
        score += 1;
    } else {
		answerText=answerText+"\n    Правильный ответ: " + "1. Нет  2. Да  3. ДА\n"
	}

	if (score <= 2) {
        mark = "На пересдачу!!!";
    }
    if (score == 3) {
        mark = "С пивом потянет...";
    }
    if (score == 4) {
        mark = "Не отлично, но и не плохо";
    }
    if (score == 5) {
        mark = "ВАУ, да Вы мегамозг!";
    }
	
   answerText=answerText+"\nВсего правильных ответов: "+score+"\n\n" + mark;

   alert(answerText);
   score = 0;
}