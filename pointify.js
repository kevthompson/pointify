const radius = 6;
var img;
var originalImg;
var canvas;
var pixelData;

function preload() {
    img = loadImage('images/duck.jpg');
}

function setup() {
    image(img, 0, 0);
    loadPixels();
    originalImg = pixels.slice(0);
    pixels.forEach(function (val) {
        val = 0;
    });
    updatePixels();
    noStroke();
    createCanvas(img.width, img.height);
    frameRate(6);
    console.log(originalImg);
}

function draw() {
    var d = pixelDensity();
    var x = round(random(img.width * d));
    var y = round(random(img.height * d));
    var index = 4 * (x + y * img.width);
    //    console.log(index);
    fill(originalImg[index + 0], originalImg[index + 1], originalImg[index + 2], originalImg[index + 3]);
    ellipse(x, y, radius);
}

// Fetches the url of the current top post. not in use
function fetchPic() {
    fetch('https://www.reddit.com/r/natureporn.json')
        .then(res => res.json())
        .then(res => res.data.children)
        .then(res => img = res[0].data.preview.images[0].source.url)
        .then(res => {
            const node = document.getElementById('my-img');
            node.setAttribute('src', res);
            return res;
        });
}
