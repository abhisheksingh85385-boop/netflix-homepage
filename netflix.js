const imageBase = "https://image.tmdb.org/t/p/w500";

const movies = {
  trending: [
    "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
    "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
  ],
  toprated: [
    "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    "/o76ZDm8PS9791XiuieNB93UZcRV.jpg"
  ],
  action: [
    "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg"
  ],
  originals: [
    "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
  ]
};

Object.keys(movies).forEach(category => {
  const container = document.getElementById(category);

  movies[category].forEach(img => {
    const poster = document.createElement("div");
    poster.className = "poster";
    poster.style.backgroundImage = `url(${imageBase + img})`;
    container.appendChild(poster);
  });
});
