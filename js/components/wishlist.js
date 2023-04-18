

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

// for (let i = 0; i < heartIcons.length; i++) {
//     heartIcons[i].addEventListener('click', toggleHeart);
// }
