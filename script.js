
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll(".dropdown .dropbtn").forEach(btn=>{
  btn.addEventListener("click",e=>{
    if(window.innerWidth<=850){
      e.preventDefault();
      const m=btn.parentElement.querySelector(".dropdown-menu");
      m.style.display=m.style.display==="block"?"none":"block";
    }
  });
});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

const serviceImages={
  "Advertisement":"Advertisement.jpeg",
  "Excel Work":"EXCEL WORK.jpeg",
  "Data Analysis":"DATA ANALYTICS.jpeg",
  "Web Designing":"WEB DEV.jpeg",
  "Graphic Designing":"GRAFIC DESIGN.jpeg",
  "Video Editing":"VIDEO EDITING.jpeg"
};
document.querySelectorAll("img[alt]").forEach(image=>{
  const fileName=serviceImages[image.alt];
  const assetPath=location.pathname.includes("/services/")||location.pathname.includes("/courses/")?"../assets/":"assets/";
  if(fileName) image.src=`${assetPath}${fileName}`;
});

