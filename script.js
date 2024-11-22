//musicas
const playlist = [
  {
    titulo: "Come and Get Your Love",
    artista: "Redbone",
    src: "Come and Get Your Love.mp3",
    duracao: "3:26",
    imagem:
      "https://static.qobuz.com/images/covers/96/54/0886446685496_600.jpg", // Adicione o caminho da imagem
  },
  {
    titulo: "Hooked on a Feeling",
    artista: "Blue Swede",
    src: "1. Blue Swede - Hooked on a Feeling.mp3",
    duracao: "2:47",
    imagem: "https://i.scdn.co/image/ab67616d0000b273b2439940aedd2801c9ae2e5b", // Adicione o caminho da imagem
  },
  {
    titulo: "Fooled Around and Fell in Love",
    artista: "Elvin Bishop",
    src: "5. Elvin Bishop - Fooled Around and Fell in Love.mp3",
    duracao: "4:34",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/8/85/Fooled_Around_and_Fell_in_Love_Elvin_Bishop.jpg",
  },
  {
    titulo: "I Want You Back",
    artista: "Jackson 5",
    src: "7. Jackson 5 - I Want You Back.mp3",
    duracao: "2:53",
    imagem: "https://i.scdn.co/image/ab67616d00001e0216aaf05fe82237576a7d0e38", // Adicione o caminho da imagem
  },
  {
    titulo: " Ain't No Mountain High Enough",
    artista: "Marvin Gaye & Tammi Terrell",
    src: "12. Marvin Gaye & Tammi Terrell - Ain't No Mountain High Enough.mp3",
    duracao: "2:24",
    imagem: "https://i.scdn.co/image/ab67616d0000b2739173e50e99bdea2400222f02",
  },
  {
    titulo: "Mr. Blue Sky",
    artista: "Electric Light Orchestra",
    src: "Mr. Blue Sky.mp3",
    duracao: "5:02",
    imagem: "https://i.scdn.co/image/ab67616d0000b2738c4e95986c803791125e8991",
  },
  {
    titulo: "The Chain",
    artista: "Fleetwood Mac",
    src: "04 The Chain.mp3",
    duracao: "4:27",
    imagem: "https://i.scdn.co/image/ab67616d0000b2735e66bc0df2bd18e746dbb823",
  },
  {
    titulo: "Southern Nights",
    artista: "Glen Campbell",
    src: "06 Southern Nights.mp3",
    duracao: "2:57",
    imagem: "https://i.scdn.co/image/ab67616d0000b273461762c15f05e141fe6f3097",
  },
  {
    titulo: "My Sweet Lord",
    artista: " George Harrison",
    src: "07 My Sweet Lord.mp3",
    duracao: "4:38",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/4/43/George_Harrison_-_My_Sweet_Lord.png",
  },
  {
    titulo: "Guardians Inferno",
    artista: "The Sneepers",
    src: "14 Guardians Inferno feat  David Ha.mp3",
    duracao: "3:17",
    imagem:
      "https://media.fstatic.com/dg3TJZODOzKSJ4xcbl0-xiLoX8Q=/322x478/smart/filters:format(webp)/media/movies/covers/2017/08/unnamed_1A71ske.jpg",
  },
  {
    titulo: "Dog Days Are Over",
    artista: "Florence and the Machine",
    src: "Florence and the Machine - Dog Days Are Over (Cena Final) ｜ Trilha-Sonora de Guardiões da Galáxia .mp3",
    duracao: "4:09",
    imagem: "https://i.scdn.co/image/ab67616d0000b2730672b0f8756ae2af86e8a5ce",
  },
  {
    titulo: "No Sleep Till Brooklyn",
    artista: "Beastie Boys",
    src: "Beastie Boys - No Sleep Till Brooklyn (luta no corredor) ｜ Trilha-Sonora de Guardiões da Galáxia 3.mp3",
    duracao: "4:07",
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/4/43/NoSleepTillBrooklyn.jpg",
  },
  {
    titulo: "Creep",
    artista: "Radiohead",
    src: "Radiohead - Creep (Rocket cantando⧸Cena de abertura) ｜ Trilha-Sonora de Guardiões da Galáxia Vol. .mp3",
    duracao: "4:18",
    imagem: "https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95",
  },
  {
    titulo: "Crazy on You",
    artista: "Heart",
    src: "Heart - Crazy on You (primeira aparição Adam Warlock) ｜ Trilha-Sonora de Guardiões da Galáxia Vo.mp3",
    duracao: "4:53",
    imagem: "https://i.scdn.co/image/ab67616d0000b2738e8c08ca2feb999bb84f05e6",
  },
  {
    titulo: "Reasons",
    artista: "Earth, Wind & Fire",
    src: "Earth, Wind & Fire - Reasons ｜ Trilha-Sonora de Guardiões da Galáxia Vol. 3.mp3",
    duracao: "5:00",
    imagem: "https://i.scdn.co/image/ab67616d0000b27330bb42e5271f2e046fd36972",
  },

  // Adicione mais músicas aqui
];

let indiceDaMusicaAtual = 0;
const audio = document.getElementById("audio");
const titulo = document.getElementById("titulo");
const artista = document.getElementById("artista");
const duracao = document.getElementById("duracao");
const tempoAtual = document.getElementById("tempoAtual");
const progresso = document.getElementById("progress");

//funçoes
function carregarMusica(musica) {
  titulo.innerText = musica.titulo;
  artista.innerText = musica.artista;
  audio.src = musica.src;
  duracao.innerText = musica.duracao;
  document.getElementById("albumCover").src = musica.imagem; // Atualiza a imagem
  audio.currentTime = 0;
}

function tocarMusica() {
  audio.play();
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "inline";
}

function pausarMusica() {
  audio.pause();
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";
}

function proximaMusica() {
  indiceDaMusicaAtual = (indiceDaMusicaAtual + 1) % playlist.length;
  carregarMusica(playlist[indiceDaMusicaAtual]);
  tocarMusica();
}

function musicaAnterior() {
  indiceDaMusicaAtual =
    (indiceDaMusicaAtual - 1 + playlist.length) % playlist.length;
  carregarMusica(playlist[indiceDaMusicaAtual]);
  tocarMusica();
}

audio.addEventListener("timeupdate", () => {
  const tempoAtualAtual = audio.currentTime; // Renomeie a variável
  const duracao = audio.duration;
  if (duracao) {
    progresso.value = (tempoAtualAtual / duracao) * 100; // Atualiza a barra de progresso
    tempoAtual.innerText = formatarTempo(tempoAtualAtual); // Use o elemento correto
  }
});

audio.addEventListener("ended", proximaMusica);

progresso.addEventListener("input", () => {
  const novoTempo = (progresso.value / 100) * audio.duration;
  audio.currentTime = novoTempo; // Atualiza o tempo do áudio quando o usuário interage com a barra
});

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const secs = Math.floor(segundos % 60);
  return `${minutos}:${secs < 10 ? "0" : ""}${secs}`; // Formata o tempo para mm:ss
}

document.getElementById("play").addEventListener("click", tocarMusica);
document.getElementById("pause").addEventListener("click", pausarMusica);
document.getElementById("next").addEventListener("click", proximaMusica);
document.getElementById("prev").addEventListener("click", musicaAnterior);

// Carrega a primeira música ao iniciar
carregarMusica(playlist[indiceDaMusicaAtual]);
