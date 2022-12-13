/*
Remnant is the future-fantasy world of RWBY, with airships, gadgets, high-tech weaponry and a form of natural energy called Dust existing side by side.
RNRJ - https://rwby.fandom.com/wiki/Team_RNJR
egyik - https://rwby.fandom.com/wiki/Volume_5
masik - https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant
WIKI - https://en.wikipedia.org/wiki/RWBY
*/
var videoSources = {
    series: [
        {
            title: "RWBY 5. évad",
            ti: "Sorozat Szinopszis",
            de: `<p id ="soriinfo"><img src="rwby_v5.jpg" class="kiskep2">Team RNJR and Qrow finally arrive in Mistral and are surprised to see Oscar and Ozpin. Weiss' and Yang's plans to rendezvous with the team take a detour while Blake, her family and Sun are dealing with their own fight in Menagerie. Meanwhile, Salem makes her move against Mistral, as she did Vale. Unbeknownst to the heroes, Leonardo Lionheart is in league with her out of fear.<br>During this Volume, Adam Taurus pulls a coup against Sienna Khan and takes over the White Fang while the Maidens are revealed to be closely connected to the Relics.</p>`,
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
            ti: "Sorozat Szinopszis",
            de: `<p id ="soriinfo"><img src="rwby_wor3.jpg" class="kiskep2">The World of Remnant is a place full of mythic tales, dangerous monsters, hidden threats and secret histories. While Remnant has recorded the exploits of heroes and sinners, as well as the lives of more ordinary people, clues to an ancient, secret history lie scattered throughout the world's many children's fairy tales.This page is for the characters of history and legend, the fairy tales that hide greater truths, and for living beings that the world may not know even exist outside of myth.</p>`,
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
    document.getElementById("episodeTitle").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].ti}`;
    /*document.getElementById("pn").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].description}`;*/
    let pagination = ``;
    for(let i = 0; i < videoSources.series[(+localStorage.getItem('result')) - 1].episodes.length; i++){
        pagination += `
            <li onmouseover="hover(this)" onmouseout="hoverOff(this)" class="target" onclick="EpisodeChange(${(+i + 1)})">${i + 1}. rész</li>
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
}


function hover(element)
{
    element.style.backgroundColor = "red";
}
function hoverOff(element)
{
    element.style.backgroundColor = "#1a1a1a";
}