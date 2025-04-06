function calculateArea(radius) {
    const pi = Math.PI;
    return pi * radius ** 2;
}

function drawCircle() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = 800;
    canvas.height = 600;

    context.beginPath();
    context.arc(400, 300, 100, 0, Math.PI * 2);
    context.stroke();

    document.getElementById("drawCircle").style.display = "none";
}

function changeColor() {
    const color = ["red", "green", "blue", "yellow"];
    let selectedColorIndex = Math.floor(Math.random() * color.length);

    context.strokeStyle = color[selectedColorIndex];
    context.fillStyle = color[selectedColorIndex];

    document.getElementById("color").style.backgroundColor = selectedColor;
}

function animate() {
    requestAnimationFrame(animate);
    
    drawCircle();
    changeColor();

    setTimeout(() => {
        updateCanvas();
    }, 100);
}

function updateCanvas() {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    context.clearRect(400, 300, 800, 600);
}

document.getElementById("play").addEventListener("click", animate);
animate();
