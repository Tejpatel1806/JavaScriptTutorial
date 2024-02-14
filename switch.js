var area = "circle";
var r = 5;
var l = 5;
var b = 4;
switch (area) {
    case 'circle':
        console.log(3.14 * r * r);
        break;
    case 'rectangle':
        console.log(l * b);
        break;
    default:
        console.log("please enter the sufficient value");
}