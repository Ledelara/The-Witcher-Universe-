const alterarImagem = document.querySelector("[data-imagem]");
const imagemWallpaper = document.getElementById("wallpaper");
const imagens = [
    {"imagem": "wallpaper",
    "src" : "img/wallpapers/wallpaper.png"},

    {"imagem": "wallpaper-2",
    "src" : "img/wallpapers/wallpaper-2.png"},

    {"imagem": "wallpaper-3",
    "src" : "img/wallpapers/wallpaper-3.png"},

    {"imagem": "wallpaper-4",
    "src" : "img/wallpapers/wallpaper-4.png"},

    {"imagem": "wallpaper-5",
    "src" : "img/wallpapers/wallpaper-5.png"},

    {"imagem": "wallpaper-6",
    "src" : "img/wallpapers/wallpaper-6.png"},

    {"imagem": "wallpaper-7",
    "src" : "img/wallpapers/wallpaper-7.png"}
]

let contadorImagens = 0;

const numeroImagens = imagens.length;

alterarImagem.onclick = () => {
    contadorImagens++;
    if(contadorImagens === numeroImagens) {
        contadorImagens = 0;
    }
    imagemWallpaper.src = imagens[contadorImagens].src;
}