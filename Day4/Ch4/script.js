function calculate(){

let m1 =
Number(document.getElementById("m1").value);

let m2 =
Number(document.getElementById("m2").value);

let m3 =
Number(document.getElementById("m3").value);

let m4 =
Number(document.getElementById("m4").value);

let m5 =
Number(document.getElementById("m5").value);

let total =
m1+m2+m3+m4+m5;

let average =
total/5;

let percentage =
(total/500)*100;

document.getElementById("result").innerHTML=

`
Total : ${total}<br>
Average : ${average}<br>
Percentage : ${percentage}%
`;

}