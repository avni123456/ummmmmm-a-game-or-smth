//console.log("Hello");
//console.log("i like pizza");

//window.alert("This is an alert!");
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza";
// This is a comment
const object = {
    a: -3,
    b: false,
    c: 'Hello World!'
};
object.a; //-3
object['b']; //false

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#0000ff';
ctx.fillRect(20, 20, 100, 100)