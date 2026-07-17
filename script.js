/*==========================================
        LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = ".6s";

    }, 1200);

});

/*==========================================
        TRAILER PLAYER
==========================================*/

const popup = document.getElementById("videoPopup");

const player = document.getElementById("videoPlayer");

function playTrailer(video) {

    popup.style.display = "flex";

    player.src = video;

    player.load();

    player.play();

    document.body.style.overflow = "hidden";

}

function closeTrailer() {

    player.pause();

    player.currentTime = 0;

    player.src = "";

    popup.style.display = "none";

    document.body.style.overflow = "auto";

}

/* Close when clicking outside */

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        closeTrailer();

    }

});

/* ESC key */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeTrailer();

    }

});

/*==========================================
        DARK MODE
==========================================*/

const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

/*==========================================
        SEARCH
==========================================*/

const search = document.getElementById("searchInput");

const cards = document.querySelectorAll(".movie-card");

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

/*==========================================
        NAVBAR
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/*==========================================
        MY LIST
==========================================*/
/*==========================================
        SAVE FAVORITES
==========================================*/

const favButtons = document.querySelectorAll(".favorite");

favButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".movie-card");

        const movie = {

            title: card.querySelector("h3").innerText,

            poster: card.querySelector("img").src,

            rating: card.querySelector(".rating").innerText,

            genre: card.querySelector(".genre").innerText,

            trailer: card.querySelector(".play-overlay button")
                .getAttribute("onclick")
                .match(/'(.*?)'/)[1]

        };

        let favorites =
            JSON.parse(localStorage.getItem("favorites")) || [];

        const exists =
            favorites.find(m => m.title === movie.title);

        if (!exists) {

            favorites.push(movie);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            button.innerHTML = "✔ Added";

            button.style.background = "#16a34a";

        } else {

            alert("Already Added");

        }

    });

});

/*==========================================
        CAROUSEL BUTTONS
==========================================*/

document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {

    const carousel = wrapper.querySelector(".carousel");

    const left = wrapper.querySelector(".left");

    const right = wrapper.querySelector(".right");

    left.addEventListener("click", () => {

        carousel.scrollBy({

            left: -700,

            behavior: "smooth"

        });

    });

    right.addEventListener("click", () => {

        carousel.scrollBy({

            left: 700,

            behavior: "smooth"

        });

    });

});

/*==========================================
        AUTO CAROUSEL
==========================================*/

document.querySelectorAll(".carousel").forEach(carousel => {

    let scroll = 0;

    setInterval(() => {

        scroll += 300;

        if (scroll >= carousel.scrollWidth) {

            scroll = 0;

        }

        carousel.scrollTo({

            left: scroll,

            behavior: "smooth"

        });

    }, 4000);

});

/*==========================================
        MOUSE GLOW
==========================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/*==========================================
        CARD HOVER EFFECT
==========================================*/

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =

            "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "translateY(0px) scale(1)";

    });

});

/*==========================================
        FLOATING EFFECT
==========================================*/

cards.forEach((card, index) => {

    setInterval(() => {

        card.animate([

            {

                transform: "translateY(0px)"

            },

            {

                transform: "translateY(-8px)"

            },

            {

                transform: "translateY(0px)"

            }

        ], {

            duration: 2500,

            iterations: 1

        });

    }, 4000 + (index * 400));

});

/*==========================================
        HERO BUTTON ANIMATION
==========================================*/

const playBtn = document.querySelector(".play-btn");

setInterval(() => {

    playBtn.animate([

        {

            transform: "scale(1)"

        },

        {

            transform: "scale(1.08)"

        },

        {

            transform: "scale(1)"

        }

    ], {

        duration: 1000

    });

}, 3500);

/*==========================================
        HOVER PREVIEW
==========================================*/

document.querySelectorAll(".poster video").forEach(video => {

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});

/*==========================================
        CONTINUE WATCHING
==========================================*/

document.querySelectorAll(".progress-bar").forEach(bar => {

    let width = parseInt(bar.style.width);

    setInterval(() => {

        if (width < 100) {

            width++;

            bar.style.width = width + "%";

        }

    }, 30000);

});
/*==========================================
        SCROLL REVEAL ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: .2
});

document.querySelectorAll(".movie-section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".8s";

    observer.observe(section);

});

/*==========================================
        BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,.4)";
        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
        ripple.style.pointerEvents = "none";
        ripple.style.transform = "scale(0)";
        ripple.style.transition = ".6s";

        button.appendChild(ripple);

        requestAnimationFrame(() => {

            ripple.style.transform = "scale(4)";
            ripple.style.opacity = "0";

        });

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*==========================================
        KEYBOARD SHORTCUTS
==========================================*/

document.addEventListener("keydown", (e) => {

    // Press "/" to focus search

    if (e.key === "/") {

        e.preventDefault();

        search.focus();

    }

    // Press "T" to scroll to top

    if (e.key === "t" || e.key === "T") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/*==========================================
        LAZY IMAGE LOADING
==========================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.style.opacity = "1";

            observer.unobserve(img);

        }

    });

});

images.forEach(img => {

    img.style.opacity = "0";

    img.style.transition = ".6s";

    imageObserver.observe(img);

});

/*==========================================
        MOVIE CARD TILT EFFECT
==========================================*/

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 20;

        const rotateX = (rect.height / 2 - y) / 20;

        card.style.transform =
            `perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/*==========================================
        AUTO HIDE POPUP
==========================================*/

player.addEventListener("ended", () => {

    closeTrailer();

});

/*==========================================
        MOVIE COUNTER
==========================================*/

const totalMovies = document.querySelectorAll(".movie-card").length;

console.log("Movies Loaded : " + totalMovies);

/*==========================================
        SMOOTH PAGE FADE
==========================================*/

document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = ".8s";

    document.body.style.opacity = "1";

};

/*==========================================
        CONSOLE MESSAGE
==========================================*/

console.log("%c🎬 CineVerse OTT Loaded Successfully",
    "color:red;font-size:22px;font-weight:bold;");

console.log("%cDeveloped by Pranav",
    "color:white;font-size:16px;");
/*==========================================
        ACTIVE PROFILE
==========================================*/

const activeProfile = localStorage.getItem("activeProfile");

if (activeProfile) {

    const profileName = document.getElementById("profileName");

    if (profileName) {
        profileName.textContent = activeProfile;
    }

}