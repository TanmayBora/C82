canvas = document.getElementById("myCanvas");
mouseEvent="empty";
var last_position_of_x,last_position_of_y;

ctx = canvas.getContext("2d");
color = "black";
width = 2.5;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent ="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}   
function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}