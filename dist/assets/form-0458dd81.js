import"./modulepreload-polyfill-ec808ebb.js";const r={THE_NAME_MUST_CONTAIN_AT_LEAST_3_LETTERS:"Must contain at least 3 letters",FORBIDDEN_SPECIAL_CHARACTERS:"Forbidden special characters",PASSWORD_IS_TOO_SHORT:"Minimum 8 characters",SPECIAL_CHARACTERS:"Use special character",ENTER_THE_NUMBER:"Enter the number",PASSWORD_ARE_NOT_THE_SAME:"Passwords aren't the same",INVALID_EMAIL:"Invalid email",INCORRECT_CITY_NAME:"Incorrect city name"},C={CHECKING_NUMBER:/(?=.*[0-9])/,CHECKING_SPECIAL_CHARACTER:/(?=.*[!@#\$%\^&\*])/,CHECKING_EMAIL:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},N={API_LINK:"https://api.openweathermap.org/data/2.5/weather?q=",API_KEY:"&appid=10f2a565d5af8aae8ef5fb71ade20983",API_UNITS:"&units=metric"},S={BAD_REQUEST:400,NOT_FOUND:404},h=document.querySelectorAll(".style-input-information"),f=document.querySelector(".problem-with-server-or-code"),k=document.querySelectorAll(".fa-check"),P=document.querySelectorAll(".fa-x"),L=document.querySelector(".go-next-btn"),O=document.querySelector(".clear-form-btn"),w=2,H=8,m="name",i="password",A="comparingPassword",d="city",_="email",n={},c={},s={},a={},l={},M=()=>location.href="../menu/menu.html",E=(e,t,R,y,b)=>{e.valueInput=document.querySelector(t),e.errorName=document.querySelector(R),e.iconCheck=document.querySelector(y),e.iconX=document.querySelector(b),e.InputIsCorrect=!1};E(n,"#username",".error-name",".icon-user-name-correct",".icon-user-name-incorrect");E(c,"#password",".error-password",".icon-password-correct",".icon-password-incorrect");E(s,"#password2",".error-password2",".icon-password2-correct",".icon-password2-incorrect");E(a,"#city",".error-city",".icon-city-correct",".icon-city-incorrect");E(l,"#email",".error-email",".icon-email-correct",".icon-email-incorrect");const g=[n.errorName,c.errorName,s.errorName,a.errorName,l.errorName],u=e=>{e.valueInput.classList.remove("underline"),e.errorName.style.visibility="hidden",e.errorName.textContent="",e.iconCheck.style.visibility="visible",e.iconX.style.visibility="hidden",e.InputIsCorrect=!0,v()},I=(e,t)=>{e.valueInput.classList.add("underline"),e.errorName.style.visibility="visible",e.errorName.textContent=t,e.iconCheck.style.visibility="hidden",e.iconX.style.visibility="visible",e.InputIsCorrect=!1},p=e=>{switch(e){case m:u(n);break;case i:u(c);break;case A:u(s);break;case d:u(a);break;case _:u(l);break}},o=(e,t)=>{switch(e){case m:I(n,t);break;case i:I(c,t);break;case A:I(s,t);break;case d:I(a,t);break;case _:I(l,t);break}},U=()=>{C.CHECKING_SPECIAL_CHARACTER.test(n.valueInput.value)?o(m,r.FORBIDDEN_SPECIAL_CHARACTERS):n.valueInput.value.length>w?p(m):o(m,r.THE_NAME_MUST_CONTAIN_AT_LEAST_3_LETTERS)},D=()=>{c.valueInput.value.length>=H?C.CHECKING_SPECIAL_CHARACTER.test(c.valueInput.value)?C.CHECKING_NUMBER.test(c.valueInput.value)?p(i):o(i,r.ENTER_THE_NUMBER):o(i,r.SPECIAL_CHARACTERS):o(i,r.PASSWORD_IS_TOO_SHORT)},q=()=>{s.valueInput.value===password.value&&s.valueInput.value.length>0?p(A):o(A,r.PASSWORD_ARE_NOT_THE_SAME)},K=()=>{const e=N.API_LINK+a.valueInput.value+N.API_KEY+N.API_UNITS;axios.get(e).then(t=>{z(t.data.name),p(d),localStorage.setItem("problemWithCodeOrServer",!1)}).catch(t=>{if(t.response.status===S.BAD_REQUEST||t.response.status===S.NOT_FOUND)return o(d,r.INCORRECT_CITY_NAME)}).catch(()=>{localStorage.setItem("problemWithCodeOrServer",!0),a.InputIsCorrect=!0,v(),f.style.display="none"})},B=e=>e.charAt(0).toUpperCase()+e.slice(1),G=()=>{const e=B(n.valueInput.value);W(e)},W=e=>{localStorage.setItem("nickName",`Hello ${e}`)},z=e=>{localStorage.setItem("city",e)},F=()=>{C.CHECKING_EMAIL.test(l.valueInput.value)?p(_):o(_,r.INVALID_EMAIL)},v=()=>{n.InputIsCorrect&&c.InputIsCorrect&&s.InputIsCorrect&&a.InputIsCorrect&&l.InputIsCorrect&&(G(),M())},Z=e=>{e.preventDefault(),k.forEach(t=>t.style.visibility="hidden"),P.forEach(t=>t.style.visibility="hidden"),g.forEach(t=>t.style.visibility="hidden"),h.forEach(t=>{t.value="",t.classList.remove("underline")})},T=e=>{e.preventDefault(),U(),D(),q(),K(),F()};O.addEventListener("click",Z);L.addEventListener("click",e=>{T(e)});h.forEach(e=>e.addEventListener("keypress",t=>{t.key==="Enter"&&T(t)}));
