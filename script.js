function computerSelect() {
    const comp = Math.random();
    var hasil;
    if (comp < 1 / 3) {
        hasil = 'batu';
    } else if (comp >= 1 / 3 && comp < 2 / 3) {
        hasil = 'gunting';
    } else {
        hasil = 'kertas';
    }
    return hasil;
}

function hasilSuit(player, comp) {
    if (player == comp) {
        return 'SERI!'
    }
    if (player == 'batu') {
        if (comp === 'kertas') {
            return 'KALAH!'
        } else {
            return 'MENANG!'
        }
    }
    if (player == 'kertas') {
        if (comp === 'gunting') {
            return 'KALAH!'
        } else {
            return 'MENANG!'
        }
    }
    if (player == 'gunting') {
        if (comp === 'batu') {
            return 'KALAH!'
        } else {
            return 'MENANG!'
        }
    }
}

function putaran() {
    const imgComp = document.querySelector('.img-komputer');
    const img = ['batu', 'kertas', 'gunting'];

    const mulai = new Date().getTime();
    var i = 2;
    setInterval(function () {
        if (new Date().getTime() - mulai > 750) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + img[i--] + '.png');
        if (i == 0) {
            i = 2
        }
    }, 100)
}

const scorePlayer = document.querySelector('.score-player');
scorePlayer.innerHTML = 'Score'
const scoreComp = document.querySelector('.score-computer')
scoreComp.innerHTML = 'Score'


var playerScore = 0;
var compScore = 0;
const pilihan = document.querySelectorAll('li img')
var indexInfo=0
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        putaran()
        const pilihanComp = computerSelect();
        const pilihanPlayer = pil.className;
        const hasil = hasilSuit(pilihanPlayer, pilihanComp)
        
        const bgInfo = document.querySelector('.info'+indexInfo)
        setTimeout(function () {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

            const info = document.querySelector('.info'+indexInfo);
            info.innerHTML = hasil;

        }, 750);

        if (hasil == 'MENANG!') {
            playerScore++
            setTimeout(function () {
                indexInfo=1
                bgInfo.setAttribute('class', 'info'+indexInfo)
            }, 750)
        } else if (hasil == 'KALAH!') {
            compScore++
            setTimeout(function () {
                indexInfo=2
                bgInfo.setAttribute('class', 'info'+indexInfo)
            }, 750)
        }else{
            setTimeout(function () {
                indexInfo=0
                bgInfo.setAttribute('class', 'info'+indexInfo)
            }, 750)
        }

        scorePlayer.innerHTML = playerScore;
        scoreComp.innerHTML = compScore;
        setTimeout(function () {
            if (playerScore == 3) {
                alert('PLAYER MENANG....!');
                playerScore = 0;
                compScore = 0;
                
            } else if (compScore == 3) {
                alert('COMPUTER MENANG...!');
                playerScore = 0;
                compScore = 0;
            }
        }, 900)
    })
})