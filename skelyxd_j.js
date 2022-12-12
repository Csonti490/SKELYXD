var videoSources = {
    series: [
        {
            title: "RWBY 5. évad",
            de: `<img src="rwby_v5.jpg" class="kiskep2"><p id ="he">Szia</p>`,
            episodes: [
                {
                    title: "Necessary Sacrifice",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ts106QFjF3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "1. rész leírása"
                },
                {
                    title: "Known by its Song",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9HVFosXMJzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "2.rész leírása"
                },
                {
                    title: "Rest and Resolutions",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iuyErZ4IAkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "3.rész leírása"
                }
            ]
        },
        {
            title: "RWBY: World of Remnant",
            de: `<img src="rwby_wor3.jpg" class="kiskep2"><p id="he">Szia2</p>`,
            episodes: [
                {
                    title: "Dust / Por",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ts106QFjF3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "1. rész leírása"
                },
                {
                    title: "Kingdoms / Királyságok",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9HVFosXMJzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "2.rész leírása"
                },
                {
                    title: "Grimm / Grimm",
                    sourceCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iuyErZ4IAkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: "3.rész leírása"
                }
            ]
        }
    ]
}

function FirstLoad(){
    localStorage.setItem('result_was_set', true);
    if((localStorage.getItem('result_was_set') === "false")) localStorage.setItem('result', 0);
}

// Melyik sorozat?
function EpisodeDefault(){
    /*alert(localStorage.getItem('result'));*/
    /*if (localStorage.getItem('result') == 1)
        document.getElementById("pn").innerHTML = "sikeres";
    else
        document.getElementById("pn").innerHTML = "sikertelen";*/
    document.getElementById("pn").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].title}`;
    document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].de}`;
    /*document.getElementById("pn").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].description}`;*/
    let pagination = ``;
    for(let i = 0; i < videoSources.series[(+localStorage.getItem('result')) - 1].episodes.length; i++){
        pagination += `
            <li class="target" onclick="EpisodeChange(${(+i + 1)})">${i + 1}. rész</li>
        `;
    }
    document.getElementById("episodes").innerHTML = pagination;

}
//document.getElementById("pn").innerHTML
function ProjectChange(n) {
    localStorage.removeItem('result');
    switch (n){
        case 1:
            localStorage.setItem('result', 1);
            break;
        case 2:
            localStorage.setItem('result', 2);
            break;
        case 3:
            localStorage.setItem('result', 3);
            break;
    }
}

function EpisodeChange(n) {
    // Megkeressük a sorozatot a listából
    let series = (+localStorage.getItem('result')), episode = n;
    // Lineáris keresés (most epizódot keresünk) sorozat > epizód
    if(window.location.pathname.includes("/skelyxd_v.html")){
        console.log("VALID URL")
        document.getElementById("episodeTitle").textContent = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].title}`;
        document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].sourceCode}`;
        document.getElementById("leiras").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].desc}`;
    } else console.log("INVALID URL")
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].title}`); // <- Kiválasztott sorozat címe
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].title}`); // <- Kiválasztott sorozat, kiválasztott epizódjának címe
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].sourceCode}`); // <- Kiválasztott sorozat, kiválasztott epizódjának source code-ja.

    // if((+localStorage.getItem('result')) == 1){
    //     switch (n) {
    //         case 1:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="red";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 2:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="red";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 3:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="red";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 4:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="red";
    //             break;
    //     }
    // }
    // if(+localStorage.getItem('result') == 2){
    //     switch (n) {
    //         case 1:
    //             document.getElementById("video").innerHTML = "<iframe width='640' height='360' frameborder='0' src='https://mega.nz/embed/DtMQnS5D#oNb7qSnczIsnF704pwDE3DKjAOqIrm608IFT0WwqHbw' allowfullscreen ></iframe>";
    //             document.getElementById("one").style.backgroundColor="red";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 2:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="red";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 3:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="red";
    //             document.getElementById("four").style.backgroundColor="#1a1a1a";
    //             break;
    //         case 4:
    //             document.getElementById("video").innerHTML = "";
    //             document.getElementById("one").style.backgroundColor="#1a1a1a";
    //             document.getElementById("two").style.backgroundColor="#1a1a1a";
    //             document.getElementById("three").style.backgroundColor="#1a1a1a";
    //             document.getElementById("four").style.backgroundColor="red";
    //             break;
    //     }
    // }
}



/* Amikor végre működik ez a trágya nyelv :) */
/*
let a = "RWBY";
function Valtoztat(){
    let c = a + " Sorozat";
    return c;
}
let vissza = Valtoztat();
function Valtoztat2() {
    document.getElementById("leiras").innerHTML = vissza;
}
*/
/*
let carName = "Volvo";
myFunction();

function myFunction() {
  let m = "I can display " + carName;
  return m;
}

function myFunction2() {
  if (m = "I can display Volvo"){
  return "yep";
  }
	return "fail";
}

console.log(myFunction2());
*/

/*

<iframe width='560' height='315' src='https://www.youtube.com/embed/bU1-VzDbDbM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>

<iframe width='560' height='315' src='https://www.youtube.com/embed/9UEaoFAVMxs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>

<iframe width='560' height='315' src='https://www.youtube.com/embed/5PiPkEHI8fc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>

*/