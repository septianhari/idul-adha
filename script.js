const Iya = document.querySelector(".next");
const Text = document.getElementById("text");
const Image = document.querySelector("#image-gif");
const audio = new Audio('Takbiran.mp3'); // Ganti 'nama_file_lagu.mp3' dengan URL file lagu yang ingin Anda gunakan!

Iya.addEventListener("click", function () {
    Iya.value = parseInt(Iya.value) + 1;
    Text.classList.remove('text-animate');

    if (Iya.value == 1) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Assalamualaikum, Hai kami Segenap keluarga PAC_619.";
        Text.classList.add('text-animate');
        audio.play(); // Memulai pemutaran lagu
    } else if (Iya.value == 2) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Kami mohon maaf jika ada salah";
        Image.setAttribute("src", "https://c.tenor.com/uygoMR-ATWgAAAAj/happy-ied-mubarak-ied-mubarak.gif");
        Text.classList.add('text-animate');
    } else if (Iya.value == 3) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Mungkin kalimat ini tidak seindah<br>Dzikir subuhmu";
        Text.classList.add('text-animate');
    } else if (Iya.value == 4) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Tidak pula sesyahdu doa<br>di sepertiga malammu";
        Text.classList.add('text-animate');
    } else if (Iya.value == 5) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Begitu juga tak semerdu solawat<br>sebelum fajar terbenam.<br>Namun, doa dan ucapan ini setulus sujud<br>di setiap rakaat salat kita";
        Text.classList.add('text-animate');
    } else if (Iya.value == 6) {
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Di hari yang suci ini<br>saya ingin memohon maaf<br>Semoga Allah membanjiri hidup kita<br>dengan kesehatan,<br>hati dengan cinta, jiwa dengan keimanan,<br>dan pikiran dengan kebahagiaan";
        Text.classList.add('text-animate');
    } else if (Iya.value == 7) {
        Image.setAttribute("src", "https://c.tenor.com/T_16HTs34x4AAAAj/taqabbal-allahu-minna-wa-minkum-accept-god-with-us-and-you.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ وَ تَقَبَّلْ ياَ كَرِيْمُ <br>Taqabbalallahu Minna Wa Minkum";
        Text.classList.add('text-animate');
    } else if (Iya.value == 8) {
        Image.setAttribute("src", "https://c.tenor.com/57JSPYRo0k8AAAAj/lebaran-selamat-lebaran.gif");
        Text.classList.remove('text-animate');
        void Text.offsetWidth; 
        Text.innerHTML = "Selamat Hari Raya Idul Adha 1444 Hijriah";
        Text.innerHTML += '<br><a href="https://wa.me/6283115871332?text=Selamat+Idul+Adha+Amar+Mohon+Maaf+Lahir+Dan+Batin😇" target="_blank" rel="noopener noreferrer"><button style="background-color: white;">Kirim Pesan</button></a>';
        Text.classList.add('text-animate');
        Iya.remove();
        audio.pause(); // Menghentikan pemutaran lagu
        audio.currentTime = 0; // Mengatur kembali waktu lagu ke awal
    }
});
