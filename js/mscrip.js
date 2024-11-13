// toogle simgesi navbar 
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

// kaydırma bölümü
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Sayfa yüklendiğinde tüm section'lara 'show-animate' sınıfını ekleyin
window.onload = () => {
    sections.forEach(sec => {
        sec.classList.add("show-animate");
    });
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
            // active sections for animation on scroll 
            sec.classList.add("show-animate");
        }
        // if want use animation that repeats on scroll use this 
        else {
            sec.classList.remove("show-animate");
        }
    });

    // sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // animation footer on scroll 
    let footer = document.querySelector("footer");
    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// Geri sayım tarihi (Buraya istediğiniz tarih ve saati girin)
const countdownDate = new Date("2024-11-15T12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Gün, saat, dakika, saniye hesaplama
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Geri sayım metnini güncelle
    document.getElementById("countdown").innerHTML = `${days}g ${hours}s ${minutes}d ${seconds}`;

    // Geri sayım bittiğinde mesaj göster
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "İndirim Sona Erdi!";
    }
}

// Geri sayımı güncellemek için her saniyede bir fonksiyonu çağır
const countdownInterval = setInterval(updateCountdown, 1000);



window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.whatsapp-message').classList.add('hide');
    }, 5000); // 3 saniye sonra gizlenecek
});
