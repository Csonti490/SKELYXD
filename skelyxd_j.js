/*
Remnant is the future-fantasy world of RWBY, with airships, gadgets, high-tech weaponry and a form of natural energy called Dust existing side by side.
RNRJ - https://rwby.fandom.com/wiki/Team_RNJR
masik - https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant
WIKI - https://en.wikipedia.org/wiki/RWBY
*/
var iimmgg = `<img src="images/sad.jpg" alt="Nincs elérhető videó" id="sad">`;
var videoSources = {
    series: [
        {
            title: "RWBY 5. évad",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_5 - Szinopszis
            de: `<img src="images/v5.jpg" class="kiskep2"><p id ="soriinfo">A RNJR csapat és Qrow végre megérkezik Mistralba, és meglepődve látják Oscart és Ozpint. Weiss és Yang azt tervezi, hogy találkoznak a csapattal. Mindeközben Blake, családja és Sun saját harcukkal közdenek Menagerie-ben. Eközben Salem Mistral ellen lép, akárcsak Vale. Oroszlánszívű Leonardo a hősök tudta nélkül félelemből áll vele szövetségben.<br>E kötett során Adam Taurus puccsot hajt végre Sienna Khan ellen, és átveszi a Fehér Agyar vezetését, miközben kiderül, hogy a Hajadonok szoros kapcsolatban állnak az ereklyékkel.<br><br>UI.: 1-4.részig <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a> fordította. Azért töltöttem fel, hogy egy helyen legyen meg az 5.évad.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=5 - részenként rövid leírás
                {
                    title: "Welcome to Haven / Üdv Haven-ben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DotiWZaT#5nAO0LmbY2pdqqJ5c5H7RV6fbEwD6kJKYjUOF9eY4cQ" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>After a long and arduous journey, Team RNJR and Qrow finally meet with Professor Lionheart, Weiss continues to flee from her father, Blake confronts Ilia about her alliegence to the White Fang and Yang finds a lead to her mother.</p>`
                },
                {
                    title: "Dread in the air / Rettegés a levegőben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/q5UXQbhZ#jVB8zhyYF4OpKk3lYcLz62gzPZkaA2l2Hy8F4McoIK8" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Weiss' path to Haven is blocked by a swarm of Lancers ambushing any aircraft in their territory. Adam meets with the White Fang's leader, Sienna Khan to introduce Hazel.</p>`
                },
                {
                    title: "Unforeseen Complications / Váratlan bonyodalmak",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/m9NS3bRb#cDIs-KxG9CbOxZrv8YHAO7a5iCOyS8hqxy40NlMv5Pc" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ghira and Blake's attempt to convince the Faunus of Menagerie to help save Haven are interrupted by Ilia. Weiss' captors reveal their plans to ransom her back to her father. Team RNJR learn more about Oscar's strange ability.</p>`
                },
                {
                    title: "Lighting the Fire / A Tűz Meggyújtása",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/O1dyFJ5L#lzcIivNTZbJINt43e79DkkG1hss6y986pSx41wUngaM" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ruby and Oscar begin training in hand-to-hand combat. Yang finds Raven's camp, but the discovery of Weiss' kidnapping sours their reunion.</p>`
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
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uwciRSLQ#j9WYHnDoAj9rHMJEePpvRNJ6VeMH2_Wqj5TGlUmUbak" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">8. rész rövid leírása</p><p id="ltwo">Az érzelmek fokozódnak, ahogy Ruby és Weiss rájön, hogy Yang még nem bocsátott meg Blake-nek. Illia belső konfliktusa egyre nő. Blake rájön, hogy a családja veszélyben van.</p>`
                },
                {
                    title: "A Perfect Storm / A Tökéletes Vihar",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">9. rész rövid leírása</p><p id="ltwo">Raven táborát Cinder bandája megtámadja, miközben a Tavasz Hajadon után kutatnak. Ilia hagy egy levelet Blake-nek, amelyben arra kéri, hogy találkozzon vele titokban.</p>`
                },
                {
                    title: "True Colors / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">10. rész rövid leírása</p><p id="ltwo">Blake attempts to reason with Ilia as Ghira and Sun fight Corsac and Fennec.</p>`
                },
                {
                    title: "The More the Merrier / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">11. rész rövid leírása</p><p id="ltwo">Ruby and the rest of the gang meet with Professor Lionheart at Haven Academy, unaware that they are walking right into a trap.</p>`
                },
                {
                    title: "Vault of the Spring Maiden / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">12. rész rövid leírása</p><p id="ltwo">Hazel's past is brought to light. Jaune discovers something about himself. Raven, Vernal, and Cinder enter the Vault.</p>`
                },
                {
                    title: "Downfall / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">13. rész rövid leírása</p><p id="ltwo">Ruby distracts Emerald and Mercury so Yang cam pursue Raven and Cinder. Adam prepares to destroy the school, but Blake arrives with the rest of the Faunus to take him into custody.</p>`
                },
                {
                    title: "Haven's Fate / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">14. rész rövid leírása</p><p id="ltwo">Emerald breaks down upon learning of Cinder's defeat while Adam and Lionheart flee, forcing Mercury and Hazel to retreat. Despite brief tension in Yang, Blake is welcomed back by RWBY.</p>`
                }
            ]
        },
        {
            title: "RWBY: World of Remnant",
            ti: "Sorozat Szinopszis", // https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant - Szinopszis
            de: `<img src="images/rwby_world_of_remnant_poster.jpg" class="kiskep2"><p id ="soriinfo">Remnant világa egy olyan hely, mely tele van mítikus mesékkel, veszélyes szörnyekkel, rejtett fenyegetésekkel és titokzatos történetekkel. Míg Remnant történelme hösők és bűnösök hőstetteit, valamint hétköznapibb emberek életét megörökítette, az ősi és titkos történelem nyomai szétszórva rejlenek a világ számos gyermekmeséjében. Ez az oldal a történelem és a legenda szereplőinek szól, mesék, amelyek nagyobb igazságokat rejtenek, és olyan élőlényekről szól, amelyekről a világ talán nem is tudja, hogy a mítoszokon kívül is léteznek.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=-1 - részenkénti rövid leírás
                {
                    title: "Dust / Por",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DtMQnS5D#oNb7qSnczIsnF704pwDE3DKjAOqIrm608IFT0WwqHbw" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">1. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat első epizódja, amely Remnant történetét és tudományát taglalja. Ez az epizód a Porkristályok titokzatos erejével foglalkozik.</p>`
                },
                {
                    title: "Kingdoms / Királyságok",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/Kl0GGDbC#CLfPDYsqBRq_PNNSO2dA3nA9su7nTtFItvAGtLeZE5U" allowfullscreen ></iframe>`,
                    desc: `<p id="lone">2. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat második epizódja, amely a Remnant történetét és tudományát taglalja. Ebben a részben információkat tár fel a négy Királyság helyszíneiről, politikájáról és katonai struktúráiról.</p>`
                },
                {
                    title: "Grimm / Grimm",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">3. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat harmadik epizódja, amely a Remnant történetét és tudományát taglalja. Ez az epizód Grimm szörnyű lényeit vizsgálja.</p>`
                },
                {
                    title: "Aura / Aura",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">4. rész rövid leírása</p><p id="ltwo">This episode examines the powerful effects of Aura, a powerful force that can be wielded by all living creatures for both defence and offence.</p>`
                },
                {
                    title: "Vytal Festival Tournament / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">5. rész rövid leírása</p><p id="ltwo">Delves into the history and purpose of the Vytal Festival Tournament.</p>`
                },
                {
                    title: "Huntsmen / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">6. rész rövid leírása</p><p id="ltwo">The occupation of Huntsmen and Huntresses, describing the purpose of their careers and the Academies themselves. It also introduces some of the Academies that the Huntsmen-in-training attend.</p>`
                },
                {
                    title: "Cross Continental Transmit System / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">7. rész rövid leírása</p><p id="ltwo">The history and capabilities of the Cross Continental Transmit System, the vital wireless communication network that allows the Kingdoms to communicate with one another.</p>`
                },
                {
                    title: "The Four Maidens / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">8. rész rövid leírása</p><p id="ltwo">An old wizard, who lives alone in the mountains, is visited by four sisters, who each in their own unique ways are kind to him. The first, Winter, encourages him to meditate and reflect; the second, Spring, brings him fruit and flowers and revitalizes his garden; the third, Summer, convinces him to step outside and embrace the world; and the fourth, Fall, urges him to be thankful for what he has. Moved by their kindness, the old man gives the four sisters great powers so that they may go throughout Remnant continuing to share their gifts. The four sisters promise to return and visit him yearly.</p>`
                },
                {
                    title: "Vale / Vale",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">9. rész rövid leírása</p><p id="ltwo">The kingdom of Vale and the territory it covers.</p>`
                },
                {
                    title: "Mistral / Mistral",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">10. rész rövid leírása</p><p id="ltwo">The kingdom of Mistral and its cultural heritage, including its cultured upper class and well-resourced underground. Two of Mistral's outlying cities, Windpath and Kuchinashi, are mentioned.</p>`
                },
                {
                    title: "Atlas / Atlas",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">11. rész rövid leírása</p><p id="ltwo">The Kingdom of Atlas, originally known as Mantle. Founded by settlers who traveled north to the barren, cold continent of Solitas, the people of Mantle were protected from the Grimm by the hostile climate, but were also forced to adapt quickly in order to survive. They quickly learned to utilize Dust and other technologies. Following the end of the Great War, Atlas Academy was founded to the north of the original city of Mantle. The Academy and its grounds soon grew to overshadow Mantle and eventually became the new capital and namesake of the Kingdom.</p>`
                },
                {
                    title: "Vacuo / Vacuo",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">12. rész rövid leírása</p><p id="ltwo">The history of the kingdom of Vacuo. A one-time hidden paradise, Vacuo was conquered by the other kingdoms and turned into one of the hardest places to live on Remnant.</p>`
                },
                {
                    title: "Between Kingdoms / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">13. rész rövid leírása</p><p id="ltwo">Showcases Remnant outside of the main Kingdoms, including the reasons why villages exist and the dangers they have to face.</p>`
                },
                {
                    title: "Faunus / Faunus",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">14. rész rövid leírása</p><p id="ltwo">History of Faunus, their genetics, and their relationship with humans.</p>`
                },
                {
                    title: "Schnee Dust Company / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">15. rész rövid leírása</p><p id="ltwo">The shady backstory of Remnant's most renowned dust company.</p>`
                },
                {
                    title: "The Great War / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">16. rész rövid leírása</p><p id="ltwo">Qrow continues to narrate more into the World of Remnant, this time talking about a massive war that changed the world forever. While also giving more of an insight as to why the world is in its current state.</p>`
                }
            ]
        },
        {
            title: "RWBY: Fairy Tales", // +(szino.) https://rwby.fandom.com/wiki/RWBY:_Fairy_Tales
            ti: "Szinopszis", // // https://tvtropes.org/pmwiki/pmwiki.php/WebAnimation/RWBYFairyTales
            de: `<img src="images/rwby_fairy_tales_poster.jpg" class="kiskep2"><p id ="soriinfo">Egy minisorozat, amely Renmant leghíresebb tündérmeséit kelti életre soha nem látott formában.<br><br>„<i>Világunknak hosszú titokzatos múltú története van. Bár lehet, hogy nem tudjuk meg a kívánt válaszokat. Vannak történeteink; horror- és hősies történetek, amelyek többet árulnak el, mit amit tudunk. És végül nem is fog számítani se a múltunk, se a jövőnk, de egy dolog biztos: a történetek fennmaradnak.</i>”<br><span style="float:right;">- Ozpin Professzor</span>&nbsp;</p>`,
            episodes: [
            ]
        },
        {
            title: "RWBY 9. évad",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_9
            de: `<img src="images/v9.jpg" class="kiskep2"><p id ="soriinfo">Kezdés dátuma (Crunchyroll-on): 2023. február 18.<br><br>A 8.kötet megrázó eseményei után hősnőink egy ismeretlen világba zuhannak - az "Ever After"-be! Miközben a RWBY csapat felfedezi ezt a furcsa és titokzatos biradalmat, hirtelen rájönnek, hogy nem is olyan idegen számukra, mint ahogy azt elősször feltételezték. Ahogy utaznak, hogy megtalálják a hazautat, le kell küzdeniük eddigi legnehezebb kihívásukat - Önvalóságuk küzdelmét. És azt, hogy fel vannak-e készülve arra, hogy megállítsák Salem-et.<br><br>Magyar feliratos előzetes: <a  title="Magyar feliratos előzetes" onclick="Mehet('https://mega.nz/embed/WgtxCYKA#mDmI4MWjNDPqxFMHAjHTEMP7lP7sokHP5kKPg1x8gC0')">Ugrás a videóhoz</a></p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=9
                {
                    title: "A Place of Particular Concern / A Különös Aggodalmas Hely",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">1. rész rövid leírása</p><p id="ltwo">A RWBY csapat egy hatalmas szigetre mosódik ismeretlen helyen, Jaune-nal és Neó-val. Miközben barátaik, valamint Atlas és Mantle lakói átutazzák Vacuo-t.</p>`
                },
                {
                    title: "Altercation at the Auspicious Auction / Változás a Kedvező Árverésen",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">2. rész rövid leírása</p><p id="ltwo">Amelyben az RWBY csapat többet kap, mint amennyiért elcserélték.</p>`
                },
                {
                    title: "Rude, Red, and Royal / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">3. rész rövid leírása</p><p id="ltwo">Amelyben megszegik a játékszabályokat.</p>`
                },
                {
                    title: "A Cat Most Curious / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">4. rész rövid leírása</p><p id="ltwo">Amelyben új ismeretségek születnek.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">5. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.03.18.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">6. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.03.25.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">7. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.01.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">8. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.08.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">9. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.15.</p>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<p id="lone">10. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.22.</p>`
                }
            ]
        },
        {
            title: "RWBY x Igazság Ligája: Szuperhősök és Vadászok - Part I",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Justice_League_x_RWBY:_Super_Heroes_and_Huntsmen,_Part_One
            de: `<img src="images/rwby_x_justice_league_poster.jpg" class="kiskep2"><p id ="soriinfo">Az Igazság Ligája új horrorral néz szembe: a serdülőkorral! Superman, Batman, Csodanő, Flash, Cyborg, Zöld Lámpás és Vixen meglepődve tapasztalják, hogy nemcsak a Maradék nevű furcsa világban kerültek bele, hanem még tinédzserekké is változtak. Eközben a Maradék hősei – Ruby, Weiss, Blake és Yang – rájönnek, hogy világuk rejtélyes módon megváltozott. Vajon az Igazság Ligája és a RWBY csapat egyesített ereje visszaállíthatja a Maradék világát a normális kerékvágásba, mielőtt egy szupererős Grimm elpusztítana mindent, amit ismernek?<br><br>Előzetes: <a  title="Előzetes" onclick="Mehet('https://mega.nz/embed/bktAUAxQ#teZABYQLTb80mSSgwvRgvPyp83GJyy54Zl-tT-KB6gw')">Ugrás a videóhoz</a></p>`,
            episodes: [
            ]
        },
        {
            title: "Zenék",
            ti: "Szinopszis",
            de: `<img src="images/loading_poster.jpg" class="kiskep2"><p id ="soriinfo">Itt olyan openingek, endingek és betétdalok szerepelnek, amiket le akartam fordítani. Így sikerültek :)<br><br>Openingek: RWBY 5.évad, RWBY 8.évad, RWBY 9.évad, SSnVR<br>Endingek: ---<br>Betétdalok: ---</p>`,
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
                    title: "RWBY: Inside",
                    sourceCode: `<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-255e165111" type="text/html" width="660" height="380" src="//embed.indavideo.hu/player/video/255e165111" frameborder="0"></iframe>`,
                    desc: `<p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 9.évad Openingje. "Inside"<br>Komponálta: Martin Gonzalez, Casey Lee Williams<br>Énekli: Casey Lee Williams</p>`
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
        case 6:
            localStorage.setItem('result', 6);
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

function Mehet(adat){
    document.getElementById("episodeTitle").innerHTML = `Előzetes`;
    //document.getElementById("video").innerHTML = `${adat}`;
    document.getElementById("video").innerHTML = `<iframe width="660" height="380" frameborder="0" src="${adat}" allowfullscreen ></iframe>`;
    document.getElementById("video").innerHTML += `<button id="bttn1" onclick="Vissza()">Vissza a Szinopszishoz</button>`;
    document.getElementById("episodes").style.display="none";
}
function Vissza(){
    document.getElementById("episodeTitle").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].ti}`;
    document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].de}`;
    document.getElementById("episodes").style.display="block";
}