const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "04t9uqtgiug yq945uq[ 52-y5qpjg[ peq5jh  35pr]eaqkjha powqpotrejhe]sp".split("");

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// マウスの位置
let mouseX = -1000;
let mouseY = -1000;

// マウスが動いたら位置を記録
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // マウスとの距離
        const dx = x - mouseX;
        const dy = y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // マウスから80px以内なら文字を描かない
        if (distance > 150) {
            const text =
                letters[Math.floor(Math.random() * letters.length)];

            ctx.fillText(text, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);