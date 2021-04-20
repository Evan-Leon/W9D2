module.exports = {
    canvas: document.addEventListener("DOMContentLoaded", () => { 
        const canvasEle = document.getElementById("canvas-game");
        canvasEle.width = 500;
        canvasEle.height = 500; 

        const ctx = canvasEle.getContext("2d");

        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, 500, 500);
    })

}