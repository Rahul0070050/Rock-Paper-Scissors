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

const showOptions = document.getElementById("options");

options.map(item => {
    const { id, img } = item;
    showOptions.innerHTML += `
    <div onclick="selected('${id}')">
        <h3>${id}</h3>
        <img src="${img}" >
    </div>
    `
})
document.getElementById("me").src = 'https://semantic-ui.com/images/wireframe/image.png';
document.getElementById("ai").src = 'https://semantic-ui.com/images/wireframe/image.png';
let SELECTED = false
const selected = (id) => {
    document.getElementById("ai").src = 'https://semantic-ui.com/images/wireframe/image.png';
    if (!SELECTED) {
        SELECTED = true
        const item = options.find(item => item.id === id)
        document.getElementById("me").src = item.img
        ai(id);
    }
}

const ai = (playerId) => {
    setTimeout(() => {
        SELECTED = false
        let { id, img } = options[random()];
        document.getElementById("ai").src = img
        mark(playerId, id)
    }, 2000)
    setTimeout(() => {
        document.getElementById("me").src = 'https://semantic-ui.com/images/wireframe/image.png';
        document.getElementById("ai").src = 'https://semantic-ui.com/images/wireframe/image.png';
    }, 3500)
}

const random = () => {
    return Math.floor(Math.random() * 3)
}


const mark = (playerId, id) => {
    if (playerId === id) {
        return showStatus(0)
    } else if (playerId === 'rock' && id === 'paper') {
        return showStatus(-1)
    } else if (playerId === 'rock' && id === 'csissors') {
        return showStatus(1)
    } else if (playerId === 'paper' && id === 'scissors') {
        return showStatus(-1)
    }
}

const showStatus = (mark) => {
    if (mark == 0) {
        console.log("drow");
    } else if (mark == -1) {
        console.log("fail");
    } else if (mark == 1) {
        console.log("won");
    }
}