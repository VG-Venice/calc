function rating(){
var rater = prompt("Write your review for this site")
if(rater.value ==''){
alert("Must write something");
var rater = prompt("Write your review for this site");
return true;
}else{
return false;
}
}

function copy() {
  var copyText = document.getElementById("eee");
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
if(copyText.value ==''){
alert("Field can't be empty while copying");
}
}

function lastDigit() {
document.getElementById('eee').value = document.getElementById('eee').value.substring(
0, document.getElementById('eee').value.length -1);
}

function add(){
var act=0, b=0;
act= f.vvv.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*'){
  f.vvv.value=act.substring(0,act.length-1);
  f.vvv.value+='+';

}else{
f.vvv.value+='+';

}


}

function sub(){
var act=0, b=0;
act= f.vvv.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*'){
  f.vvv.value=act.substring(0,act.length-1);
  f.vvv.value+='-';

}else{
f.vvv.value+='-';

}


}

function di(){
var act=0, b=0;
act= f.vvv.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*'){
  f.vvv.value=act.substring(0,act.length-1);
  f.vvv.value+='/';

}else{
f.vvv.value+='/';

}


}

function mul(){
var act=0, b=0;
act= f.vvv.value;
b=act.charAt(act.length-1);
if(b=='+' || b=='-' || b=='/' || b=='*'){
  f.vvv.value=act.substring(0,act.length-1);
  f.vvv.value+='*';

}else{
f.vvv.value+='*';

}


}