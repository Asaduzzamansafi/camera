const webElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");

const webcam = new webcam(webElement, "user", canvasElement);
webcam.start();

function takePicture(){
    let picture = webcam.snap();

    document.querySelector("a").href = picture;
}