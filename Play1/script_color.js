/**
 * Created by yorik on 10.08.2016.
 */
var colors = [];
colors = ["aqua", "black", "blue", "cyan", "gold", "green", "gray", "orange", "pink", "purple", "red", "silver", "white", "yellow"];
var finished = false;
var times = 0;

function playColor() {

    var random_number = Math.floor(Math.random() * colors.length);
    var target_color = colors[random_number];
    alert(target_color);

    while (!finished) {

        var color_answer = prompt("I'm thinking of one of these colors:\n\n" +
            "aqua, black, blue, cyan, gold, green, gray, orange, pink, purple, red, silver, white, yellow\n\n" +
            "What color am I thinking of?");
        times++;
        finished = check_guess();

    }

    function check_guess() {
        if (color_answer == null) {
            alert("Good bye!");
            return true;
        }
        if (colors.indexOf(color_answer) == -1) {
            alert(" Sorry, I don't recognize!");
            return false;
        }
        if (color_answer > target_color) {
            alert("Your color is higher!");
            return false;
        }
        if (color_answer < target_color) {
            alert("Your color is lower!");
            return false;
        }
        document.getElementsByTagName("body")[0].style.background = target_color;
        setTimeout(function(){
            alert("Yes! You do it! My color is " + target_color.toUpperCase() +
            "\n\n It took you " + times + " guesses!");
            document.getElementsByTagName("body")[0].style.background = "white";
        }, 0);

        return true;
    }

}