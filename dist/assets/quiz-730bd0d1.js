import"./modulepreload-polyfill-ec808ebb.js";const W=[{question:"Who is making the Web standards?",answer:[{text:"The World Wide Web Consortium",correct:!0},{text:"Google"},{text:"Mozilla"},{text:"Microsoft"}]},{question:"Choose the correct HTML element for the largest heading:",answer:[{text:"<h1>",correct:!0},{text:"<h6>"},{text:"<head>"},{text:"<heading>"}]},{question:"Choose the correct HTML element to define important text",answer:[{text:"<important>"},{text:"<strong>",correct:!0},{text:"<i>"},{text:"<b>"}]},{question:"Which HTML element is used to display a scalar measurement within a range?",answer:[{text:"<gauge>"},{text:"<measure>"},{text:"<meter>",correct:!0},{text:"<range>"}]},{question:"Which character is used to indicate an end tag?",answer:[{text:"/ ",correct:!0},{text:"^ "},{text:"<"},{text:"*"}]},{question:"Which of these elements are all <table> elements?",answer:[{text:"<table><tr><tt> "},{text:"<thead><body><tr>"},{text:"<table><head><tfoot>"},{text:"<table><tr><td>",correct:!0}]},{question:"How can you make a numbered list?",answer:[{text:"<ul>"},{text:"<ol>",correct:!0},{text:"<dl>"},{text:"<list>"}]},{question:"How can you make a bulleted list?",answer:[{text:"<list>"},{text:"<dl>"},{text:"<ol>"},{text:"<ul>",correct:!0}]},{question:"What is the correct HTML for making a drop-down list?",answer:[{text:"<list>"},{text:'<input type="list">'},{text:'<input type="dropdown">'},{text:"<select>",correct:!0}]},{question:"What is the correct HTML for making a drop-down list?",answer:[{text:"<list>"},{text:'<input type="list">'},{text:'<input type="dropdown">'},{text:"<select>",correct:!0}]}],E=[{question:"What does CSS stand for?",answer:[{text:"Cascading Style Sheets xDDD",correct:!0},{text:"Colorful Style Sheets "},{text:"Computer Style Sheets"},{text:"Creative Style Sheets"}]},{question:"What is the correct HTML for referring to an external style sheet?",answer:[{text:'<link rel="stylesheet" type="text/css" href="mystyle.css xDDD"> ',correct:!0},{text:'<style src="mystyle.css">'},{text:"<stylesheet>mystyle.css</stylesheet>"},{text:"does not exist"}]},{question:"Which HTML attribute is used to define inline styles?",answer:[{text:"class xDDD"},{text:"style ",correct:!0},{text:"styles"},{text:"font"}]},{question:"Which is the correct CSS syntax?",answer:[{text:"{body:color=black;}  xDDD "},{text:"body {color: black;}  ",correct:!0},{text:"body:color=black;"},{text:"{body;color:black;}"}]},{question:"How do you insert a comment in a CSS file?",answer:[{text:"// this is a comment xDDD"},{text:"/* this is a comment */  ",correct:!0},{text:"// this is a comment //"},{text:"'this is a comment"}]},{question:"Which CSS property controls the text size?",answer:[{text:"font-style xDDD"},{text:"text-size"},{text:"text-style"},{text:"font-size ",correct:!0}]},{question:"How do you display hyperlinks without an underline?",answer:[{text:"a {decoration:no-underline;}  xDDD"},{text:"a {text-decoration:none;} ",correct:!0},{text:"a {underline:none;}"},{text:"a {text-decoration:no-underline;}"}]},{question:"How do you make each word in a text start with a capital letter?",answer:[{text:"text-style:capitalize xDDD"},{text:"text-transform:capitalize",correct:!0},{text:"You can't do that with CSS"},{text:"transform:capitalize"}]},{question:"How do you select an element with id 'demo'?",answer:[{text:"*demo xDDD"},{text:"#demo",correct:!0},{text:"demo"},{text:".demo"}]},{question:"How do you select elements with class name 'test'?",answer:[{text:"test xDDD"},{text:".test",correct:!0},{text:"#test"},{text:"*test"}]}],L=[{question:"Inside which HTML element do we put the JavaScript?",answer:[{text:"<script>",correct:!0},{text:"Google"},{text:"Mozilla"},{text:"Microsoft"}]},{question:"Which operator is used to assign a value to a variable?",answer:[{text:"*"},{text:"-"},{text:"x"},{text:"=",correct:!0}]},{question:'How do you write "Hello World" in an alert box?',answer:[{text:'msg("Hello World");'},{text:'alert("Hello World");',correct:!0},{text:'msgBox("Hello World");'},{text:'msgBox("Hello World");'}]},{question:"How to write an IF statement in JavaScript?",answer:[{text:"if i == 5 then"},{text:"if i = 5"},{text:"if (i == 5)",correct:!0},{text:"if i = 5 then"}]},{question:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',answer:[{text:"if (i != 5)",correct:!0},{text:"if i =! 5 then"},{text:"if i <> 5"},{text:"if (i <> 5)"}]},{question:"How does a FOR loop start?",answer:[{text:"for i = 1 to 5"},{text:"for (i = 0; i <= 5)"},{text:"for (i <= 5; i++)"},{text:"for (i = 0; i <= 5; i++)",correct:!0}]},{question:"What is the correct way to write a JavaScript array?",answer:[{text:'var colors = (1:"red", 2:"green", 3:"blue")'},{text:'var colors = ["red", "green", "blue"]',correct:!0},{text:'var colors = "red", "green", "blue"'},{text:'var colors = ["red", "green", "blue"]'}]},{question:"How do you round the number 7.25, to the nearest integer?    ",answer:[{text:"round(7.25)"},{text:"rnd(7.25)"},{text:"Math.rnd(7.25)"},{text:"Math.round(7.25)",correct:!0}]},{question:"How do you find the number with the highest value of x and y?",answer:[{text:"Math.max(x, y)",correct:!0},{text:"top(x, y)"},{text:"ceil(x, y)"},{text:"Math.ceil(x, y)"}]},{question:"Which event occurs when the user clicks on an HTML element?",answer:[{text:"onmouseclick"},{text:"onmouseover"},{text:"onchange"},{text:"onclick",correct:!0}]}],x=document.querySelector(".quiz-HTML a"),d=document.querySelector(".quiz-CSS a"),h=document.querySelector(".quiz-JS a");let w=localStorage.getItem("value");const A=()=>{if(w==="HTML")return W;if(w==="CSS")return E;if(w==="JS")return L},S=(t,u)=>{localStorage.setItem("value",t),u.setAttribute("href","../../quiz/quiz.html")};x==null||x.addEventListener("click",()=>{S("HTML",x)});d==null||d.addEventListener("click",()=>{S("CSS",d)});h==null||h.addEventListener("click",()=>{S("JS",h)});const q=document.querySelector("body"),z=document.querySelectorAll(".hidden-after-end-quiz"),Q=document.querySelector(".question p"),b=document.querySelector(".first-option"),M=document.querySelector(".second-option"),D=document.querySelector(".three-option"),C=document.querySelector(".fourth-option"),F=document.querySelector(".next-btn"),H=document.querySelector(".score"),N=document.querySelector(".final-score"),O=document.querySelector(".final-score-box"),f=document.querySelector(".time"),r=A(),l=0,c=1,i=2,s=3;let o=Math.floor(Math.random()*r.length),n=r[o].answer,e=[Math.floor(Math.random()*n.length),Math.floor(Math.random()*n.length),Math.floor(Math.random()*n.length),Math.floor(Math.random()*n.length)];const _=()=>e[l]===e[c],R=()=>e[l]===e[i]||e[c]===e[i],$=()=>e[l]===e[s]||e[c]===e[s]||e[i]===e[s];let m=0,y=[],g;const J=()=>y.length===r.length,v=()=>Q.textContent=r[o].question,B=t=>b.textContent=t[e[l]].text,X=t=>{for(;_();)e[c]=Math.floor(Math.random()*t.length);return M.textContent=t[e[c]].text},P=t=>{for(;R();)e[i]=Math.floor(Math.random()*t.length);return D.textContent=t[e[i]].text},G=t=>{for(;$();)e[s]=Math.floor(Math.random()*t.length);return C.textContent=t[e[s]].text},T=t=>{B(t),X(t),P(t),G(t)},U=t=>(n=r[t].answer,T(n)),Y=()=>{y.push(o)},j=()=>{for(;y.includes(o)&&(o=Math.floor(Math.random()*r.length),console.log(o),!!y.includes(o)););U(o),v()},K=()=>{I(),j(),k()},k=()=>{clearInterval(g);let t=30;g=setInterval(()=>{f.textContent=`Time:  ${t}`,t--,t===0?(clearInterval(g),f.textContent=`Time:  0${t}`,a()):t<10&&(f.textContent=`Time:  0${t}`)},1e3)},V=()=>{m++,H.textContent=`Score : ${m}`},Z=()=>q.style.backgroundColor="red",tt=()=>q.style.backgroundColor="blue",I=()=>{setTimeout(()=>{q.style.background="radial-gradient(circle,rgba(238, 174, 202, 0.5830707282913166) 0%,rgba(148, 187, 233, 1) 100%"},200)},et=()=>{const t=m*100/r.length;return`${Math.floor(t)}%`},ot=()=>{I(),z.forEach(t=>t.style.visibility="hidden"),O.style.visibility="visible",N.textContent=H.textContent=`Score : ${m}/${r.length}, it is ${et()}`},nt=()=>{setTimeout(function(){K()},200)},p=()=>{J()?ot():nt()},a=t=>{var u;Y(),(u=n[e[t]])!=null&&u.correct?(V(),tt(),p()):(Z(),p())};v();T(n);k();F.addEventListener("click",a);b.addEventListener("click",()=>{a(l)});M.addEventListener("click",()=>{a(c)});D.addEventListener("click",()=>{a(i)});C.addEventListener("click",()=>{a(s)});