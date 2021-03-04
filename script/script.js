const options = [
    {
        id: 'rock',
        img: '../img/rock.png'
    },
    {
        id: 'paper',
        img: '../img/paper.jpg'
    },
    {
        id: 'csissors',
        img: '../img/scissors.jpg'
    }
]

let PLAY = false
let SELECTED = false
let FINISH = false
let myMark = 0;
let aiMark = 0;
const showOptions = document.getElementById("options")
const yourScore = document.getElementById("your-score")
const aiScore = document.getElementById("ai-score")

options.map(item => {
    const { id, img } = item;
    showOptions.innerHTML += `
    <div onclick="selected('${id}')">
        <h3>${id}</h3>
        <img src="${img}" >
    </div>
    `
})

const play = () => {
    PLAY = true
}

const reset = () => {
    document.getElementById("me").src = 'https://semantic-ui.com/images/wireframe/image.png';
    document.getElementById("ai").src = 'https://semantic-ui.com/images/wireframe/image.png';
    document.getElementById("resultImage").removeAttribute("src");
    SELECTED = false
}
const selected = (id) => {
    if (myMark === 5 || aiMark === 5) {
        PLAY = false
        FINISH = true
        if (myMark === 5) {
            document.getElementById("result").innerHTML = `<h1>ooohh</h1>`
        } else if (aiMark === 5) {
            document.getElementById("result").innerHTML = `<h1>yaaah</h1>`
        }
    }
    if (!SELECTED && !FINISH && PLAY) {
        SELECTED = true
        const item = options.find(item => item.id === id)
        document.getElementById("me").src = item.img
        ai(id);
    }
}



const ai = (playerId) => {
    document.getElementById("resultImage").src = '../img/oohman2.png'
    setTimeout(() => {
        let { id, img } = options[random()];
        document.getElementById("ai").src = img
        mark(playerId, id)
    }, 2000)

    setTimeout(() => {
        reset();
    }, 3500)
}

const random = () => {
    return Math.floor(Math.random() * 3)
}


const mark = (playerId, id) => {
    if (playerId === id) {
        return showStatus(0)
    } else if (playerId === 'rock' && id === 'csissors' || playerId === 'paper' && id === 'rock' || playerId === 'csissors' && id === 'paper') {
        yourScore.innerText = `${myMark += 1}/5`
        return showStatus(1)
    } else if (playerId === 'csissors' && id === 'rock' || playerId === 'rock' && id === 'paper' || playerId === 'paper' && id === 'csissors') {
        aiScore.innerText = `${aiMark += 1}/5`
        return showStatus(-1)
    }
}

const showStatus = (mark) => {
    if (mark == 0) {
        document.getElementById("resultImage").src = '../img/non.jpeg';
    } else if (mark == 1) {
        document.getElementById("resultImage").src = '../img/hhuuu.png';
    } else if (mark == -1) {
        document.getElementById("resultImage").src = '../img/happy-imogi.jpg';
    }
}
