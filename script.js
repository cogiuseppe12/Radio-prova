
const liveButton = document.getElementById("liveButton");
const disc = document.getElementById("disc");
let spinning = false;

liveButton.addEventListener("click", () => {
    spinning = !spinning;
    if (spinning) {
        disc.style.animation = "spin 3s linear infinite";
    } else {
        disc.style.animation = "none";
    }
});

// Aggiungi animazione CSS tramite JavaScript
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`;
document.head.appendChild(style);
