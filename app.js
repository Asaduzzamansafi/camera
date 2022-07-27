const webElement = document.querySelector("#webcam");
const canvasElement = document.querySelector("#canvas");

const webcam = new webcam(webElement, "user", canvasElement);
webcam.start();

function takePicture(){
    let picture = webcam.snap();

    document.querySelector("a").href = picture;
}