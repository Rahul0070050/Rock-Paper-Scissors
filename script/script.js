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
document.getElementById("me").src = 'https://semantic-ui.com/images/wireframe/image.png'
document.getElementById("ai").src = 'https://semantic-ui.com/images/wireframe/image.png'

const selected = (id) => {
    console.log("hi");
    const item = options.find(item => item.id === id)
    document.getElementById("me").src = item.img
}