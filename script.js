const isTikTok = /tiktok/i.test(navigator.userAgent);

const subtitle = document.querySelector(".subtitle");
const tutorial = document.querySelector(".tutorial");
const joinBtn = document.querySelector(".join");

if (isTikTok) {

    subtitle.innerHTML = "⚠️ TikTok Browser Detected";

    joinBtn.innerHTML = "🟢 JOIN WHATSAPP GROUP";

} else {

    subtitle.innerHTML = "Open in your browser and join instantly";

}

joinBtn.addEventListener("click", function () {

    joinBtn.style.transform = "scale(.96)";

    setTimeout(() => {

        joinBtn.style.transform = "scale(1)";

    }, 150);

});
