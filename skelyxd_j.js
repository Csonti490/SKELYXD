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
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_5 - Szinopszis
            de: `<img src="https://musicart.xboxlive.com/7/84a45000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" class="kiskep2"><p id ="soriinfo">A RNJR csapat és Qrow végre megérkezik Mistralba, és meglepődve látják Oscart és Ozpint. Weiss és Yang azt tervezi, hogy találkoznak a csapattal. Mindeközben Blake, családja és Sun saját harcukkal közdenek Menagerie-ben. Eközben Salem Mistral ellen lép, akárcsak Vale. Oroszlánszívű Leonardo a hősök tudta nélkül félelemből áll vele szövetségben.<br>E kötett során Adam Taurus puccsot hajt végre Sienna Khan ellen, és átveszi a Fehér Agyar vezetését, miközben kiderül, hogy a Hajadonok szoros kapcsolatban állnak az ereklyékkel.<br><br>UI.: 1-4.részig <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a> fordította. Azért töltöttem fel, hogy egy helyen legyen meg az 5.évad.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=5 - részenként rövid leírás
                {
                    title: "Welcome to Haven / Üdv Haven-ben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DotiWZaT#5nAO0LmbY2pdqqJ5c5H7RV6fbEwD6kJKYjUOF9eY4cQ" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>- Leírás hamarosan -</p>`
                },
                {
                    title: "Dread in the air / Rettegés a levegőben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/q5UXQbhZ#jVB8zhyYF4OpKk3lYcLz62gzPZkaA2l2Hy8F4McoIK8" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>- Leírás hamarosan -</p>`
                },
                {
                    title: "Unforeseen Complications / Váratlan bonyodalmak",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/m9NS3bRb#cDIs-KxG9CbOxZrv8YHAO7a5iCOyS8hqxy40NlMv5Pc" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>- Leírás hamarosan -</p>`
                },
                {
                    title: "Lighting the Fire / A Tűz Meggyújtása",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/O1dyFJ5L#lzcIivNTZbJINt43e79DkkG1hss6y986pSx41wUngaM" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>- Leírás hamarosan -</p>`
                },
                {
                    title: "Necessary Sacrifice / Szükséges Áldozat",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/upEiWTAb#xEbLHhiAdeNQU6d3wbh_FbpoLPWPOUOaQ4KRlMTz6vA" allowfullscreen></iframe>`,
                    desc: `<p id="lone">5. rész rövid leírása</p><p id="ltwo">Blake és Sun nem kap elég aláírást a Haven Academy megmentésére irányuló petíciójukhoz. Ilia parancsot kap az Albain testvérektől, hogy gyilkolják meg Blake szüleit és fogják el Blake-et.</p>`
                },
                {
                    title: "Known by its Song / Felismerni a Daláról",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WhVh2IoR#dXSP9JLHjfBFpBEQ8uxHruO8zm70ijK3yxUdXoLHEKo" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">6. rész rövid leírása</p><p id="ltwo">Raven elmagyarázza Yangnak és Weissnek Ozpin iránti bizalmatlanságát, miután tudomást szerzett Salem létezéséről. Bizonyítékként megmutatja alakváltó képességét, és választási lehetőséget kínál Yangnak, hogy vele maradjon. Yang és Weiss úgy dönt, hogy elmennek, és újra összefognak Rubyval.</p>`
                },
                {
                    title: "Rest and Resolutions / Pihenés és Állásfoglalások",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/D0FVWJYb#pZH6Aq0nQax-dgnH-pF2KnijCFfifJorQGxdEwtc4A8" allowfullscreen ></iframe> `,
                    desc: `<p id="lone">7. rész rövid leírása</p><p id="ltwo">Yang szembesíti Ozpint azzal, hogy mágiát használ Qrow-n és Ravenen, aki mindent elárul hatalmáról és a Hajadonok-ról. Eközben Cinder, Watts, Mercury és Emerald megérkezik Raven táborába.</p>`
                },
                {
                    title: "Alone Together / Egyedül Együtt",
                    sourceCode: `<iframe width="640" height="360" frameborder="0" src="https://mega.nz/embed/uwciRSLQ#j9WYHnDoAj9rHMJEePpvRNJ6VeMH2_Wqj5TGlUmUbak" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">8. rész rövid leírása</p><p id="ltwo">Az érzelmek fokozódnak, ahogy Ruby és Weiss rájön, hogy Yang még nem bocsátott meg Blake-nek. Illia belső konfliktusa egyre nő. Blake rájön, hogy a családja veszélyben van.</p>`
                }
                ,
                {
                    title: "A Perfect Storm / A Tökéletes Vihar",
                    sourceCode: `- Egyenlőre nincsen elérhető videó -`,
                    desc: `<p id="lone">9. rész rövid leírása</p><p id="ltwo">Raven táborát Cinder bandája megtámadja, miközben a Tavasz Hajadon után kutatnak. Ilia hagy egy levelet Blake-nek, amelyben arra kéri, hogy találkozzon vele titokban.</p>`
                }
            ]
        },
        {
            title: "RWBY: World of Remnant",
            ti: "Sorozat Szinopszis", // https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant - Szinopszis
            de: `<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1bJ3NYB5IhQgF2tjcndk_t29SV7ToA6Q2HWhyKglsYvtUQhWu" class="kiskep2"><p id ="soriinfo">Remnant világa egy olyan hely, mely tele van mítikus mesékkel, veszélyes szörnyekkel, rejtett fenyegetésekkel és titokzatos történetekkel. Míg Remnant történelme hösők és bűnösök hőstetteit, valamint hétköznapibb emberek életét megörökítette, az ősi és titkos történelem nyomai szétszórva rejlenek a világ számos gyermekmeséjében. Ez az oldal a történelem és a legenda szereplőinek szól, mesék, amelyek nagyobb igazságokat rejtenek, és olyan élőlényekről szól, amelyekről a világ talán nem is tudja, hogy a mítoszokon kívül is léteznek.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=-1 - részenkénti rövid leírás
                {
                    title: "Dust / Por",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DtMQnS5D#oNb7qSnczIsnF704pwDE3DKjAOqIrm608IFT0WwqHbw" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">1. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat első epizódja, amely Remnant történetét és tudományát vizsgálja. Ez az epizód a Porkristályok titokzatos erejével foglalkozik.</p>`
                },
                {
                    title: "Kingdoms / Királyságok",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/Kl0GGDbC#CLfPDYsqBRq_PNNSO2dA3nA9su7nTtFItvAGtLeZE5U" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">2. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat második epizódja, amely a Remnant történetét és tudományát vizsgálja. Ebben a részben információkat tár fel a négy Királyság helyszíneiről, politikájáról és katonai struktúráiról.</p>`
                },
                {
                    title: "Grimm / Grimm",
                    sourceCode: `- Egyenlőre nincsen elérhető videó -`,
                    desc: `<p id="lone">3. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat harmadik epizódja, amely a Remnant történetét és tudományát vizsgálja. Ez az epizód Grimm szörnyű lényeit vizsgálja.</p>`
                }
            ]
        },
        {
            title: "RWBY: Fairy Tales", // +(szino.) https://rwby.fandom.com/wiki/RWBY:_Fairy_Tales
            ti: "Szinopszis", // // https://tvtropes.org/pmwiki/pmwiki.php/WebAnimation/RWBYFairyTales
            de: `<img src="https://cdn.roosterteeth.com/image/upload/t_l/f_auto/3/b434b4ae-decb-4d40-bf57-5353908c45cb/original/1634938924.jpg" class="kiskep2"><p id ="soriinfo">Egy minisorozat, amely Renmant leghíresebb tündérmeséit kelti életre soha nem látott formában.<br><br>„<i>Világunknak hosszú titokzatos múltú története van. Bár lehet, hogy nem tudjuk meg a kívánt válaszokat. Vannak történeteink; horror- és hősies történetek, amelyek többet árulnak el, mit amit tudunk. És végül nem is fog számítani se a múltunk, se a jövőnk, de egy dolog biztos: a történetek fennmaradnak.</i>”<br><span style="float:right;">- Ozpin Professzor</span>&nbsp;</p>`,
            episodes: [
            ]
        },
        {
            title: "RWBY 9. évad",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_9
            de: `<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3dc09fec-d88c-4720-9165-a23eb7a4b095/der6mr4-b221c837-4319-44dc-87f0-52986c4cbb17.jpg/v1/fill/w_1280,h_1844,q_75,strp/my_rwby_volume_9_poster_by_tehshraid_der6mr4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg0NCIsInBhdGgiOiJcL2ZcLzNkYzA5ZmVjLWQ4OGMtNDcyMC05MTY1LWEyM2ViN2E0YjA5NVwvZGVyNm1yNC1iMjIxYzgzNy00MzE5LTQ0ZGMtODdmMC01Mjk4NmM0Y2JiMTcuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HQze4s-uo4XXSSMU0Dwf-Cx7ZvvmwEFquiX4D7cRt-I" class="kiskep2"><p id ="soriinfo">Kezdés dátuma (Crunchyroll-on): 2023. február 18.<br><br>A 8.kötet megrázó eseményei után hősnőink egy ismeretlen világba zuhannak - az "Ever After"-be! Miközben a RWBY csapat felfedezi ezt a furcsa és titokzatos biradalmat, hirtelen rájönnek, hogy nem is olyan idegen számukra, mint ahogy azt elősször feltételezték. Ahogy utaznak, hogy megtalálják a hazautat, le kell küzdeniük eddigi legnehezebb kihívásukat - Önvalóságuk küzdelmét. És azt, hogy fel vannak-e készülve arra, hogy megállítsák Salem-et.<br><br>Magyar feliratos előzetes: <a  title="Magyar feliratos előzetes" onclick="Mehet()">Link</a></p>`,
            episodes: [
            ]
        },
        {
            title: "Zenék",
            ti: "Szinopszis",
            de: `<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRI89wHJogKV2Hx3Zqv34y89PgwaYFAMRuXF9dRp3qTLn1cxsA6" class="kiskep2"><p id ="soriinfo">Itt olyan openingek, endingek és betétdalok szerepelnek, amiket le akartam fordítani. Így sikerültek :)<br><br>Openingek: RWBY 5.évad, RWBY 8.évad, SSnVR, TSKD<br>Endingek: ---<br>Betétdalok: ---</p>`,
            episodes: [
                {
                    title: "RWBY: The Triumph",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/9HcEHMDQSFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 5.évad Openingje. "The Triumph"<br>Komponálta: Jeff Williams<br>Énekli: Casey Lee Williams</p>`
                },
                {
                    title: "RWBY: For Every Life",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/yel_We3OW7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 8.évad Openingje. "For Every Life"<br>Komponálta: Jeff Williams<br>Énekli: Casey Lee Williams</p>`
                },
                {
                    title: "Shokei Shoujo no Virgin Road: Paper Bouquet",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/iL9NGfxSg7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a <a href="https://myanimelist.net/anime/47162/Shokei_Shoujo_no_Virgin_Road" target="_blank" title="MAL link">Shokei Shoujo no Virgin Road</a> Openingje.<br>Komponálta: Cassie Wei & Yamato Kasai<br>Énekli: Cassie Wei / Mili</p>`
                },
                {
                    title: "Tensei Shitara Ken Deshita",
                    sourceCode: `- Egyenlőre nincsen elérhető videó -`,
                    desc: `<p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a <a href="https://myanimelist.net/anime/49891/Tensei_shitara_Ken_deshita?q=tensei%20shitara%20ken%20deshita&cat=anime" target="_blank" title="MAL link">Tensei shitara Ken deshita</a> Openingje.<br>Zeneszerzők: Kishida Kyoudan & The Akeboshi Rockets</p>`
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
        case 4:
            localStorage.setItem('result', 4);
            break;
        case 5:
            localStorage.setItem('result', 5);
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

function Mehet(){
    document.getElementById("episodeTitle").innerHTML = `Előzetes`;
    document.getElementById("video").innerHTML = `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WgtxCYKA#mDmI4MWjNDPqxFMHAjHTEMP7lP7sokHP5kKPg1x8gC0" allowfullscreen ></iframe><button id="bttn1" onclick="Vissza()">Vissza a Szinopszishoz</button>`;
    document.getElementById("episodes").style.display="none";
}
function Vissza(){
    document.getElementById("episodeTitle").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].ti}`;
    document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].de}`;
    document.getElementById("episodes").style.display="block";
}