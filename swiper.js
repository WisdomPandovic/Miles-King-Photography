var myImage = document.getElementById("image");
var ArrayImage = [  "IMAGE/MILES_7890LR.jpg", "IMAGE/MILES_7894LR.jpg", "IMAGE/MILES_7883LR.jpg",];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", ArrayImage[imageIndex]);
    imageIndex++;

    if (imageIndex >= ArrayImage.length){
        imageIndex = 0;
    }

}


setInterval(changeImage, 3000);