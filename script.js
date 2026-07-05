const paragraphs = [
  "Feliz cumpleaños, mi niña hermosa. ¿Cómo está mi princesa hermosa?",
  "Recuerdas cuando apenas hablábamos y casi no nos conocíamos, pero siempre estábamos juntos. Son muy bonitos los recuerdos de aquellas primeras llamadas que duraban horas. A veces lo pienso y no comprendo cómo una princesa tan hermosa como tú pudo fijarse en alguien tan simple como yo.",
  "Si algún día piensas que puedo encontrar a alguien mejor que tú, recuerda que para mí no existe nadie mejor. Tú eres todo lo que quiero; te quiero a ti, te elijo a ti y no deseo a nadie más que a mi princesa perfecta.",
  "No quiero un mundo sin ti, mi niña hermosa, porque volvería a sentirme solo y triste. Quiero tenerte a mi lado, pasar todo el día contigo como antes. Y quiero hacerte una pregunta: ¿Has pensado si pasarías una vida conmigo?",
  "Solo recuerda que siempre te voy a elegir a ti por encima de todos. No importa lo que pase, mi corazón siempre te escogerá a ti. Voy a seguir luchando por tu amor hasta el día en que tú me pidas que pare, porque eres la persona que más amo y con quien quiero compartir mi vida.",
  "Te amo muchísimo, mi niña hermosa. Gracias por existir y por hacer mi vida más feliz."
];

let started=false;
let playing=false;

const cover=document.getElementById("cover");
const page=document.getElementById("page");
const openBtn=document.getElementById("openBtn");
const envelope=document.getElementById("envelope");
const typedText=document.getElementById("typedText");
const finalTitle=document.getElementById("finalTitle");
const signature=document.getElementById("signature");
const fireworks=document.getElementById("fireworks");
const audio=document.getElementById("audio");
const musicBtn=document.getElementById("musicBtn");
const musicIcon=document.getElementById("musicIcon");

openBtn.addEventListener("click",openGift);
musicBtn.addEventListener("click",toggleMusic);

function openGift(){
  envelope.classList.add("open");

  setTimeout(()=>cover.style.opacity="0",850);

  setTimeout(()=>{
    cover.style.display="none";
    page.classList.remove("hidden");

    if(!started){
      started=true;
      typeLetter();
      startEffects();
      audio.play().then(()=>{
        playing=true;
        musicIcon.textContent="⏸";
      }).catch(()=>{});
    }
  },1450);
}

function typeLetter(){
  let index=0;

  function addNext(){
    if(index>=paragraphs.length){
      finalTitle.classList.remove("hidden");
      const heartBtn=document.getElementById("heartBtn"); if(heartBtn){heartBtn.classList.remove("hidden");}
      signature.classList.remove("hidden");
      setTimeout(()=>fireworks.classList.remove("hidden"),900);
      return;
    }

    const p=document.createElement("p");
    typedText.appendChild(p);
    const text=paragraphs[index];
    let i=0;

    const interval=setInterval(()=>{
      p.textContent+=text[i];
      i++;
      if(i>=text.length){
        clearInterval(interval);
        index++;
        setTimeout(addNext,250);
      }
    },14);
  }

  addNext();
}

function toggleMusic(){
  if(!playing){
    audio.play().then(()=>{
      playing=true;
      musicIcon.textContent="⏸";
    }).catch(()=>{
      alert("No se pudo reproducir. Revisa que sienna.mp3 esté en esta misma carpeta.");
    });
  }else{
    audio.pause();
    playing=false;
    musicIcon.textContent="▶";
  }
}

function startEffects(){
  flowers();
  hearts();
  sparkles();
}

function flowers(){
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
  },620);
}

function hearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=Math.random()<.55?"💛":"🤍";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(18+Math.random()*24)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6500);
  },1150);
}

function sparkles(){
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


// Extra Deluxe: botón final con lluvia de corazones y girasoles con viento
setTimeout(()=>{
  const heartBtn=document.getElementById("heartBtn");
  if(heartBtn){
    heartBtn.addEventListener("click",()=>burstHeartsDeluxe(60));
  }
},1000);

function burstHeartsDeluxe(amount){
  for(let i=0;i<amount;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="heart";
      h.textContent=Math.random()<.5?"💛":"❤️";
      h.style.left=(5+Math.random()*90)+"vw";
      h.style.fontSize=(22+Math.random()*30)+"px";
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),6500);
    },i*22);
  }
}

setInterval(()=>{
  const items=["🌻","🌼","🍃"];
  const w=document.createElement("div");
  w.className="windflower";
  w.textContent=items[Math.floor(Math.random()*items.length)];
  w.style.top=(20+Math.random()*55)+"vh";
  w.style.animationDuration=(10+Math.random()*7)+"s";
  document.body.appendChild(w);
  setTimeout(()=>w.remove(),18000);
},3500);
