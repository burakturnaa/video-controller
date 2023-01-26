const ws = new WebSocket("ws://localhost:8082");
ws.addEventListener("open", () => {
    console.log("we are connected!");

   });

function sendMessage(id){
    ws.send(id)
    if (id == 1) {
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").style.pointerEvents = "none";
        document.getElementById("btn1").style.backgroundImage="url(./img/btn_img2.jpg)"
        setTimeout(() => {
            document.getElementById("btn1").disabled = false;
            document.getElementById("btn1").style.backgroundImage="url(./img/btn_img1.jpg)"
            document.getElementById("btn2").style.pointerEvents = "auto";
        }, 24000);
    } else if (id == 2){
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn1").style.pointerEvents = "none";
        document.getElementById("btn2").style.backgroundImage="url(./img/btn_img3.jpg)"
        setTimeout(() => {
            document.getElementById("btn2").disabled = false;
            document.getElementById("btn2").style.backgroundImage="url(./img/btn_img4.jpg)"
            document.getElementById("btn1").style.pointerEvents = "auto";

        }, 20000);
    }
}
