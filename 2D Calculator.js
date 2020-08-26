function populate(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if(s1.value == "Circle"){
    var optionArray = ["|","area|Area","circumfrence|Circumfrence"];
  } else if (s1.value == ""){
    var optionArray = ["|"]
  } else {
    var optionArray = ["|","area|Area","perimeter|Perimeter"];
  }
  for (var option in optionArray){
    var pair = optionArray[option].split ("|");
    var newOption = document.createElement ("option");
   newOption.value = pair[0];
   newOption.innerHTML = pair[1];
   s2.options.add(newOption);
  }
}
function formula(){
var s1 = document.getElementById('slct1');
var s2 = document.getElementById('slct2');
if(s1.value == "Parallelogram" && s2.value == "area"){
  x.innerHTML="Area = b h";
  y.innerHTML="<b>b</b> (Base)";
  z.innerHTML="<b>h</b> (Height)";
   document.getElementById('z1').style.display='block';
 } else if (s1.value == "Parallelogram" && s2.value == "perimeter"){
  x.innerHTML="Perimeter = 2(a+b)";
  y.innerHTML="<b>b</b> (Base)";
  z.innerHTML="<b>a</b> (Side)";
   document.getElementById('z1').style.display='block';
} else if (s1.value == "Rectangle" && s2.value == "area"){
  x.innerHTML="Area = l w";
  y.innerHTML="<b>l</b> (Length)";
  z.innerHTML="<b>w</b> (Width)";
   document.getElementById('z1').style.display='block';
} else if (s1.value == "Rectangle" && s2.value == "perimeter"){
   x.innerHTML="Perimeter = 2(l+w)";
   y.innerHTML="<b>l</b> (Length)";
   z.innerHTML="<b>w</b> (Width)";
    document.getElementById('z1').style.display='block';
 } else if (s1.value == "Rhombus" && s2.value == "area"){
    x.innerHTML="Area = (p q)/2";
    y.innerHTML="<b>p</b> (Diagonal)";
    z.innerHTML="<b>q</b> (Digonal)";
     document.getElementById('z1').style.display='block';
  } else if (s1.value == "Rhombus" && s2.value == "perimeter"){
      x.innerHTML="Perimeter = 4a";
      y.innerHTML="<b>a</b> (Side)";
      z.innerHTML="";
      document.getElementById('z1').style.display='none';
    } else if (s1.value == "Square" && s2.value == "area"){
         x.innerHTML="Area = a²";
         y.innerHTML="<b>a</b> (Side)";
         z.innerHTML="";
         document.getElementById('z1').style.display='none';
       } else if (s1.value == "Square" && s2.value == "perimeter"){
            x.innerHTML="Perimeter = 4a";
            y.innerHTML="<b>a</b> (Side)";
            z.innerHTML="";
            document.getElementById('z1').style.display='none';
          } else if (s1.value == "Circle" && s2.value == "area"){
               x.innerHTML="Area = πr²";
               y.innerHTML="<b>r</b> (Radius)";
               z.innerHTML="";
               document.getElementById('z1').style.display='none';
             } else if (s1.value == "Circle" && s2.value == "circumfrence"){
                  x.innerHTML="Circumfrence = 2πr";
                  y.innerHTML="<b>r</b> (Radius)";
                  z.innerHTML="";
                  document.getElementById('z1').style.display='none';
                 }
}

function result(){
  var s1 = document.getElementById('slct1');
  var s2 = document.getElementById('slct2');
  var y = y1.value;
  var z = z1.value;

if (s1.value == "Parallelogram" && s2.value == "area") {
    var a = y*z;
    x.innerHTML="<b>Area = "+ a +" sq.unit</b>"
  } else if(s1.value == "Parallelogram" && s2.value == "perimeter") {
    var a = parseFloat(y)+parseFloat(z);
    var b = 2*a;
    x.innerHTML="<b>Perimeter = "+b+" unit</b>";
  } else if (s1.value == "Rectangle" && s2.value == "area"){
    var a = y*z
    x.innerHTML="<b>Area = "+ a+" sq.unit</b>";
  } else if (s1.value == "Rectangle" && s2.value == "perimeter"){
    var a = parseFloat(y)+parseFloat(z);
    var b = 2*a;
    x.innerHTML="<b>Perimeter = "+b+" unit</b>";
  } else if (s1.value == "Rhombus" && s2.value == "area"){
    var a = y*z;
    var b = a/2
      x.innerHTML="<b>Area = "+ b+" sq.unit</b>";
  } else if (s1.value == "Rhombus" && s2.value == "perimeter"){
  var a = 4*y;
  x.innerHTML="<b>Perimeter = "+a+" unit</b>";
  } else if (s1.value == "Square" && s2.value == "area"){
  var a = y*y;
  x.innerHTML="<b>Area = "+ a+" sq.unit</b>";
  } else if (s1.value == "Square" && s2.value == "perimeter"){
  var a = 4*y;
  x.innerHTML="<b>Perimeter = "+a+" unit</b>";
  } else if (s1.value == "Circle" && s2.value == "area"){
  var a = 3.14 *y*y;
  x.innerHTML= "<b>Area = "+a+" sq.unit</b>";
  } else if (s1.value == "Circle" && s2.value == "circumfrence"){
  var a = 2*3.14*y;
  x.innerHTML="<b>Perimeter = "+a+" unit</b>";
  }
}
