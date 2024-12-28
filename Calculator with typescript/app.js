var buttons = document.querySelectorAll(".btn-calculate");
var SpecialChar = ["/", "+", "*", "-", "%", "AC", "DEL", "="];
var SpecialChar2 = ["AC", "DEL", "="];
for (var i = 0; i < buttons.length; i++) {
    for (var j = 0; j < SpecialChar.length; j++) {
        if (buttons[i].innerHTML.includes(SpecialChar[j])) {
            buttons[i].classList.add("text-[#2F9FFF]");
        }
    }
}
var input = document.querySelector("#input");
buttons.forEach(function (button) {
    button.setAttribute("onclick", "GetValues(this)");
    var btninnervalue = button.innerHTML.trim();
    button.setAttribute("data-set", "".concat(btninnervalue));
    console.log(btninnervalue);
});
var GetValues = function (btn) {
    var btnvalue = btn.getAttribute("data-set");
    if (btnvalue == "DEL") {
        input.value = input.value.toString().slice(0, -1);
    }
    else if (btnvalue == "AC") {
        input.value = "";
    }
    else if (btnvalue == "=") {
        try {
            var result = eval(input.value);
            input.value = result.toString();
        }
        catch (error) {
            alert("Invalid Expression");
            input.value = "";
        }
    }
    for (var i = 0; i < SpecialChar2.length; i++) {
        if (SpecialChar2[i] == btnvalue)
            return;
    }
    input.value += btnvalue;
};
