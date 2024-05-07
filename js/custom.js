

var quizz1 = document.getElementById('quizz1');
var quizz150 = document.getElementById('quizz1-50');
var quizz160 = document.getElementById('quizz1-60');
var quizz170 = document.getElementById('quizz1-70');

var quizz2 = document.getElementById('quizz2');
var quizz2Yes = document.getElementById('quizz2-Yes');
var quizz2No = document.getElementById('quizz2-No');

var quizz3 = document.getElementById('quizz3');
var quizz3Child = document.getElementById('quizz3-Child');
var quizz3Spouse = document.getElementById('quizz3-Spouse');
var quizz3Family = document.getElementById('quizz3-Family');
var quizz3Other = document.getElementById('quizz3-Other');

var quizzPrec = document.getElementById('quizzPrec');
var quizzPreC1 = document.getElementById('quizzPreC1');
var quizzPreC2 = document.getElementById('quizzPreC2');
var quizzPreC3 = document.getElementById('quizzPreC3');

var quizzCongratulations = document.getElementById('quizzCongratulations');

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 8000);
});

function toQuizz2() {
    quizz1.classList.add('hidden');
    quizz2.classList.remove('hidden');
}

function toQuizz3() {
    quizz2.classList.add('hidden');
    quizz3.classList.remove('hidden');
}

function Congratulations() {
    quizz3.classList.add('hidden');
    quizzPreC1.classList.remove('hidden');

    setTimeout(() => {
        quizzPreC1.classList.add('hidden');
        quizzPreC2.classList.remove('hidden');
    }, 2000);
    setTimeout(() => {
        quizzPreC2.classList.add('hidden');
        quizzPreC3.classList.remove('hidden');
    }, 4000);
    setTimeout(() => {
        quizzPreC3.classList.add('hidden');
        quizzPrec.classList.remove('pb-40');
        quizzCongratulations.classList.remove('hidden');

        var tiempo = 120;
        var divTiempo = document.getElementById("timer");
        var intervalo = setInterval(
            function () {
                var minutos = Math.trunc(tiempo / 60);
                var segundos = tiempo % 60;
                tiempo--;
                if (minutos < 10) {
                    minutos = "0" + minutos;
                }
                if (segundos < 10) {
                    segundos = "0" + segundos;
                }

                divTiempo.innerHTML = minutos + ":" + segundos;

                if (tiempo == 0) {
                    clearInterval(intervalo);
                    divTiempo.innerHTML = "00:00";
                }
            }, 1000);
    }, 6000);

}

quizz150.addEventListener('click', toQuizz2);
quizz160.addEventListener('click', toQuizz2);
quizz170.addEventListener('click', toQuizz2);

quizz2Yes.addEventListener('click', toQuizz3);
quizz2No.addEventListener('click', toQuizz3);

quizz3Child.addEventListener('click', Congratulations);
quizz3Spouse.addEventListener('click', Congratulations);
quizz3Family.addEventListener('click', Congratulations);
quizz3Other.addEventListener('click', Congratulations);