// const hearthIconBoxer = document.querySelector("#hearth-boxer");
// const hearthIconCyberpunk = document.querySelector("#hearth-cyberpunk");
// const hearthIconPingPong = document.querySelector("#hearth-ping-pong");
// const hearthIconBlack = document.querySelector("#hearth-black");
// const hearthIconForgeLegend = document.querySelector("#hearth-forge-legend");
// const hearthIconSpaceWar = document.querySelector("#hearth-space-war");
// const hearthIconSuperDuper = document.querySelector("#hearth-super-duper");
// const hearthIconRacing = document.querySelector("#hearth-racing");
// const hearthIconAssassin = document.querySelector("#hearth-assassin");
// const hearthIconFurious = document.querySelector("#hearth-furious");

// function toggleBoxer(event) {
//     event.preventDefault();
  
//     if (hearthIconBoxer.src.endsWith("icons/Hearth_gray.png")) {
//       hearthIconBoxer.src = "icons/Hearth_Red.png";
//     } else {
//       hearthIconBoxer.src = "icons/Hearth_gray.png";
//     }
//   }
  
//   function toggleCyberpunk(event) {
//     event.preventDefault();
  
//     if (hearthIconCyberpunk.src.endsWith("icons/Hearth_gray.png")) {
//       hearthIconCyberpunk.src = "icons/Hearth_Red.png";
//     } else {
//       hearthIconCyberpunk.src = "icons/Hearth_gray.png";
//     }
//   }
  
//   function togglePingPong(event) {
//     event.preventDefault();
  
//     if (hearthIconPingPong.src.endsWith("icons/Hearth_gray.png")) {
//       hearthIconPingPong.src = "icons/Hearth_Red.png";
//     } else {
//       hearthIconPingPong.src = "icons/Hearth_gray.png";
//     }
//   }
  
//   function toggleBlack(event) {
//     event.preventDefault();
  
//     if (hearthIconBlack.src.endsWith("icons/Hearth_gray.png")) {
//       hearthIconBlack.src = "icons/Hearth_Red.png";
//     } else {
//       hearthIconBlack.src = "icons/Hearth_gray.png";
//     }
//   }
  
//   hearthIconBoxer.addEventListener("click", toggleBoxer);
//   hearthIconCyberpunk.addEventListener("click", toggleCyberpunk);
//   hearthIconPingPong.addEventListener("click", togglePingPong);
//   hearthIconBlack.addEventListener("click", toggleBlack);


const heartIcons = document.querySelectorAll('#hearth-icon');

function toggleHeart(event) {
  event.preventDefault();
  const heartIcon = event.target;
  if (heartIcon.src.endsWith("icons/Hearth_gray.png")) {
    heartIcon.src = "icons/Hearth_Red.png";
  } else {
    heartIcon.src = "icons/Hearth_gray.png";
  }
}

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener('click', toggleHeart);
}
