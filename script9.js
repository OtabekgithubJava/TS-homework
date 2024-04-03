var Color;
(function (Color) {
    Color["One"] = "First";
    Color["Two"] = "Second";
    Color["Three"] = "Third";
    Color["Four"] = "Fourth";
})(Color || (Color = {}));
var preferance = Color.Three;
console.log("Selected one: ", preferance);
