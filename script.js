const pages = document.querySelectorAll(".page");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const titleText = "for my sweetest,\aruna lorelei.";
const subText = "every story has a beginning.";

let i = 0;
let j = 0;

// typewriter title
function typeTitle() {
    if (i < titleText.length) {
        if (titleText.charAt(i) === "\n") {
            title.innerHTML += "<br>";
        } else {
            title.innerHTML += titleText.charAt(i);
        }

        i++;
        setTimeout(typeTitle, 70);

    } else {
        setTimeout(typeSubtitle, 400);
    }
}

// typewriter subtitle
function typeSubtitle() {

    if (j < subText.length) {

        subtitle.innerHTML += subText.charAt(j);

        j++;

        setTimeout(typeSubtitle, 35);

    }

}

typeTitle();


// page navigation

let current = 0;

document.addEventListener("click", () => {

    if (current >= pages.length - 1) return;

    pages[current].classList.remove("active");

    current++;

    pages[current].classList.add("active");

});


// stars

const stars = document.getElementById("stars");

for(let s=0;s<120;s++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    stars.appendChild(star);

}
