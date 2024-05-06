function onscaricaClick()
{
    const scompare1 = document.querySelector(".foto-container");
    const scompare2 = document.querySelector(".info-1");
    const scompare3 = document.querySelector(".info-2");
    scompare1.classList.add("hidden");
    scompare2.classList.add("hidden");
    scompare3.classList.add("hidden");
}
const scarica = document.querySelector("#ScaricaApp")
scarica.addEventListener("click", onscaricaClick);

function ontrendingClick()
{
    const scompare4 = document.querySelector(".home-page-container");
    scompare4.classList.add("hidden");
}
const trending = document.querySelector("#Trending")
trending.addEventListener("click", ontrendingClick);

function cambiaimmagine () {
    const image = document.querySelector("#classifica1")
    const image2 = document.querySelector("#classifica2")
    image.classList.add("hidden");
    image2.classList.remove("hidden");
}
const img1 = document.querySelector("#classifica1");
img1.addEventListener("mouseover", cambiaimmagine);

function ripristinaimmagine () {
    const image = document.querySelector("#classifica1")
    const image2 = document.querySelector("#classifica2")
    image.classList.remove("hidden");
    image2.classList.add("hidden");
}
const img2 = document.querySelector("#classifica2");
img2.addEventListener("mouseout", ripristinaimmagine);



const inputkeyword = document.getElementById("cerca");
const submitbutton = document.getElementById("button1");
const popup = document.querySelector(".popup");

submitbutton.addEventListener("click", () => {getsongdata();});

async function getsongdata(){
    const url = `https://shazam.p.rapidapi.com/search?term=${inputkeyword.value}&locale=en-US&offset=0&limit=5`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidApi-key": "688268f4d0msh69176cddbc5ed7bp1008d5jsn1f63b7d6afe9",
            "X-RapidApi-Host": "shazam.p.rapidapi.com",
        },
    };

    const response = await fetch(url, options);
    const results = await response.json();

    const url2 = `https://shazam.p.rapidapi.com/songs/get-count?key=${results.tracks.hits[0].track.key}`;
    const options2 = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '366e1812e5mshf0001617bad4f8fp121370jsn327596b42ef3',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
    };

    const response2 = await fetch(url2, options2);
    const results2 = await response2.json();

    setsongdatadisplay(results, results2);
};

function setsongdatadisplay(results, results2){
    popup.innerHTML = `
    <div class="container-music">
        <div class="col">
            <div class="div1">
                <img src=${results.tracks.hits[0].track.images.coverart} alt="" id="song-img"></img>
                <h4 id="title">${results.tracks.hits[0].track.title}(${results2.total})</h4>
            </div>
            <div class="div2">
                <img src=${results.tracks.hits[0].track.images.background} alt="" id="artist-img"></img>
                <p id="artist-text">${results.tracks.hits[0].track.subtitle}</p>
            </div>
        </div> 
    </div>    
`;    
};

function nascondi () {
    const nascondo1 = document.querySelector(".container-music");
    nascondo1.remove();
}
const homepage = document.querySelector(".home-page");
homepage.addEventListener("click", nascondi);
