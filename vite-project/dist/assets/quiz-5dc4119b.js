import"./modulepreload-polyfill-ec808ebb.js";import{s as k}from"./select_quiz-d1ec6f8a.js";const d=document.querySelector("body"),v=document.querySelectorAll(".hidden-after-end-quiz"),w=document.querySelector(".question p"),u=document.querySelector(".first-option"),f=document.querySelector(".second-option"),m=document.querySelector(".three-option"),g=document.querySelector(".fourth-option"),T=document.querySelector(".next-btn"),C=document.querySelector(".score"),$=document.querySelector(".final-score"),E=document.querySelector(".final-score-box"),a=document.querySelector(".time"),n=k();let c=Math.floor(Math.random()*n.length),e=n[c].answer,t=[Math.floor(Math.random()*e.length),Math.floor(Math.random()*e.length),Math.floor(Math.random()*e.length),Math.floor(Math.random()*e.length)],r=[],i=0,l=30,h;const b=()=>{w.textContent=n[c].question},O=()=>{for(u.textContent=e[t[0]].text;t[0]===t[1];)t[1]=Math.floor(Math.random()*e.length);for(f.textContent=e[t[1]].text;t[0]===t[2]||t[1]===t[2];)t[2]=Math.floor(Math.random()*e.length);for(m.textContent=e[t[2]].text;t[0]===t[3]||t[1]===t[3]||t[2]===t[3];)t[3]=Math.floor(Math.random()*e.length);g.textContent=e[t[3]].text},q=o=>{if(o){for(u.textContent=o[t[0]].text;t[0]===t[1]&&(t[1]=Math.floor(Math.random()*e.length),!(t[0]!==t[1]||r.length===n.length)););for(f.textContent=o[t[1]].text;(t[0]===t[2]||t[1]===t[2])&&(t[2]=Math.floor(Math.random()*e.length),!(t[0]!==t[1]||r.length===n.length)););for(m.textContent=o[t[2]].text;(t[0]===t[3]||t[1]===t[3]||t[2]===t[3])&&(t[3]=Math.floor(Math.random()*e.length),!(t[0]!==t[1]||r.length===n.length)););g.textContent=o[t[3]].text}O()},A=()=>{for(r.push(c);r.includes(c)&&(c=Math.floor(Math.random()*n.length),!(!r.includes(c)||r.length===n.length)););e=n[c].answer,q(e),b()},S=()=>{r.length===n.length&&(v.forEach(o=>o.style.visibility="hidden"),E.style.visibility="visible",$.textContent=C.textContent=`Score : ${i}/${n.length}, it is ${P()}`)},p=()=>{clearInterval(h),l=30,h=setInterval(()=>{a.textContent=`Time:  ${l}`,l--,l===0?(clearInterval(h),a.textContent=`Time:  0${l}`,x()):l<10&&(a.textContent=`Time:  0${l}`)},1e3)},x=()=>{r.length!=n.length&&(A(),p(),S())},Q=()=>{i++,C.textContent=`Score : ${i}`},I=()=>{d.style.backgroundColor="red"},L=()=>{d.style.backgroundColor="blue"},z=()=>{setTimeout(()=>{d.style.background="linear-gradient(rgba(0, 0, 3, 0.4), rgb(255,192,203))"},200)},y=()=>{setTimeout(function(){x(),z(),S()},200)},s=o=>{var M;(M=e[t[o-1]])!=null&&M.correct?(L(),Q(),y()):(I(),y())},P=()=>{const o=i*100/n.length;return`${Math.floor(o)}%`};b();q();p();T.addEventListener("click",x);u.addEventListener("click",()=>{s(1)});f.addEventListener("click",()=>{s(2)});m.addEventListener("click",()=>{s(3)});g.addEventListener("click",()=>{s(4)});
