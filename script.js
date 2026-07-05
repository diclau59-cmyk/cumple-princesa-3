let started=false;
let playing=false;

const inicio=document.getElementById("inicio");
const pagina=document.getElementById("pagina");
const abrirBtn=document.getElementById("abrirBtn");
const audio=document.getElementById("audio");
const musicBtn=document.getElementById("musicBtn");
const musicIcon=document.querySelector(".icono");

abrirBtn.addEventListener("click",abrirRegalo);
musicBtn.addEventListener("click",toggleMusic);

function abrirRegalo(){
  inicio.style.opacity="0";
  setTimeout(()=>{
    inicio.style.display="none";
    pagina.classList.remove("oculto");
    if(!started){
      started=true;
      crearFlores();
      crearCorazones();
      crearDestellos();
    }
  },700);
}

function toggleMusic(){
  if(!playing){
    audio.play().then(()=>{
      playing=true;
      musicIcon.textContent="⏸";
    }).catch(()=>{
      alert("No se pudo reproducir. Revisa que el archivo se llame sienna.mp3 y esté en esta misma carpeta.");
    });
  }else{
    audio.pause();
    playing=false;
    musicIcon.textContent="▶";
  }
}

function crearFlores(){
  const flores=["🌸","🌼","🌹","🌻","💮"];
  setInterval(()=>{
    const f=document.createElement("div");
    f.className="flor";
    f.textContent=flores[Math.floor(Math.random()*flores.length)];
    f.style.left=Math.random()*100+"vw";
    f.style.fontSize=(22+Math.random()*22)+"px";
    f.style.animationDuration=(9+Math.random()*9)+"s";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),19000);
  },650);
}

function crearCorazones(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=Math.random()<.55?"💛":"🤍";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(18+Math.random()*24)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6500);
  },1250);
}

function crearDestellos(){
  setInterval(()=>{
    const s=document.createElement("div");
    s.className="spark";
    s.textContent="✨";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.fontSize=(16+Math.random()*16)+"px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),2200);
  },650);
}
