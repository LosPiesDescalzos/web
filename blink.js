var col = new String();
var x=1;
var y;

function blink()
{
    if(x%2)
    {
        col = "rgb(247,255,165)";
    }
    else
    {
        col = "rgb(0,0,0)";
    }

    b_link.style.color=col;x++;setTimeout("blink()",500);
}