/**
 * Created by yorik on 22.08.2016.
 */

function generateFaces() {
    var numberOfFaces = 5;
    var leftSide = document.getElementById("leftSide");
    var theBody = document.getElementById("theBody");

    for (var i = 0; i < numberOfFaces; i++) {
        var faceImg = document.createElement('img');
        faceImg.src = "img/smile.png";

        var randomX = Math.floor(Math.random() * 400);
        var randomY = Math.floor(Math.random() * 400);
        faceImg.style.top = randomY + "px";
        faceImg.style.left = randomX + "px";

        leftSide.appendChild(faceImg);
    }
    var rightSide = document.getElementById("rightSide");
    var leftSideImages = leftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    rightSide.appendChild(leftSideImages);

    leftSide.lastChild.onclick =
        function nextLevel(event) {

            event.stopPropagation();

            numberOfFaces += 5;

            while (rightSide.firstChild) {
                rightSide.removeChild(rightSide.firstChild);
            }
            generateFaces();

        };

    theBody.onclick = function gameOver() {

        alert("Sorry, it's not exactly!\nGAME OVER!");

        theBody.onclick = null;

        leftSide.lastChild.onclick = null;

    };

}
