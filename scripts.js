
// Simple scripts: year, project injection, subtle reveal, canvas grid background
document.getElementById('year').textContent = new Date().getFullYear();

const projects = [
  {
    title: "Low Cost IoT Sensors for Agriculture and Environmental Monitoring",
    desc: "Collaborated to develop a low-cost IoT sensor node for real-time monitoring of environmental parameters (pressure, temperature, humidity, altitude, soil characteristics). Integrated wireless data transmission.\nTech Stack: NodeMCU (ESP8266), BMP280, DHT11, Soil Moisture & NPK Sensors, TP4056, Lithium Battery.",
    tags: ["NodeMCU","IoT","Sensors"],
    repo: "https://github.com/code-zephyrus/Agriculture-and-Environmental-Monitoring-tool"
  },
  {
    title: "Secure RSA Encryption and Decryption Tool",
    desc: "Developed a Secure RSA Encryption and Decryption Tool implementing key generation, encryption, and decryption for safe communication. Demonstrates public-key cryptography for confidentiality and security.\nTools: Python, Cryptography Libraries.",
    tags: ["Python","Cryptography","Security"],
    repo: ""
  },
  {
    title: "Face Recognition System using Python",
    desc: "Designed a system that detects, analyzes, and identifies human faces from images and live video streams. Features real-time detection and recognition accuracy.\nTools: Python, OpenCV, NumPy.",
    tags: ["Python","OpenCV","AI/ML"],
    repo: ""
  }
];

const grid = document.getElementById('projects-grid');
projects.forEach(p=>{
  const el = document.createElement('article');
  el.className = 'card reveal';
  let meta = `<span>${p.tags.join(' • ')}</span>`;
  if (p.repo && p.repo.trim() !== "") {
    meta += `<span style="margin-left:auto"><a href="${p.repo}" target="_blank" rel="noopener">Source →</a></span>`;
  }
  el.innerHTML = `<h4 class="title">${p.title}</h4><p class="desc">${p.desc}</p><div class="meta">${meta}</div>`;
  grid.appendChild(el);
});

// Intersection reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('in');
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));

// Canvas animated grid (subtle)
const canvas = document.getElementById('bg-canvas');
if(canvas){
  const ctx = canvas.getContext('2d');
  function resize(){canvas.width = innerWidth; canvas.height = innerHeight;}
  resize(); window.addEventListener('resize', resize);
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.globalAlpha = 0.06;
    ctx.strokeStyle = '#46f0ff';
    const step = 48;
    for(let x=0;x<canvas.width;x+=step){
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke();
    }
    for(let y=0;y<canvas.height;y+=step){
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke();
    }
    ctx.restore();
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}
