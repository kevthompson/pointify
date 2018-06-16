const radius = 0.1;

function setup() {
    createCanvas(640, 480);
    background(200);
    frameRate(60);
}

function draw() {
    fetch('https://www.reddit.com/r/RoomPorn.json')
        .then(res => res.json())
        .then(res => res.data.children)
        .then(res => res.map(post => ({
            author: post.data.author,
            link: post.data.url,
            img: post.data.preview.images[0].source.url,
        })))
        .then(res => res.map(render))
        .then(res => console.log(res))

    const app = document.querySelector('#app');

    const render = post => {
        const node = document.createElement('div');
        node.innerHTML = `
          <a href="${post.link}">
            <img src="${post.img}"/>
          </a>`;
        app.appendChild(node);
        return post
    }
}
