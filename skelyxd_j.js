/* |=| SkelyXD Subs |=| Készítette: CsontiXD és Karesz */
var iimmgg = `<img src="images/sad.jpg" alt="Nincs elérhető videó" id="sad">`;
var videoSources = { // 867 sor ez a "kis" adatbázis
    series: [
        {
            title: "RWBY: 1.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_1
            de: `<img src="images/v1.jpg" class="kiskep2"><p id ="soriinfo">Egy fiatal hős, egy fennkölt örökösnő, egy zaklatott szélhámos és egy bulizós lány – Ez az <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> négy tagja, egy csapat, amelyet azért hoztak össze és képeztek ki, hogy leküzdjék Remnant fantasztikus világát sújtó burjánzó gonoszságokat. Ha ez a négy lány el akarja végezni a Beacon Akadémiát, meg kell tanulniuk együtt dolgozni a csatatéren és az osztályteremben egyaránt.<br><br>UI.: A részeket a <a href="https://indavideo.hu/profile/Chihana" title="Chihana Fansub csatija (Indavideó)" target="_blank">Chihana Fansub</a> fordította. <span class="meaning" title="Chihana-Fansub tagjai">(Fordította: Mikurin, Lektorálta: Xia Yixuan)</span></p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=1
                {
                    title: "Ruby Rose / Ruby Rose",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uUByxQAJ#pT618s9yvho7CLbYZIANb2MeBAF9pxdlSLi-Nim1qPI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby Rose egy rablás kellős közepén találja magát, amelyet a híres bűnöző, Roman Torchwick követett el. A megállítására tett erőfeszítései felkeltik Ozpin professzor, a Beacon Akadémia vezetőjének figyelmét, aki külön felvételt ad neki az iskolájába.</p></td>`
                },
                {
                    title: "The Shining Beacon / A Ragyogó Beacon",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/rFBQ3ZqQ#NJHUUzqpQZE3GcEF_d7ozNVOYiE24yGOViCyI5-EYtQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby új barátra tesz szert, a vacak kardvívó, Jaune Arc személyében az első Beacon-ben töltött napja során.</p></td>`
                },
                {
                    title: "The Shining Beacon, Pt.2 / A Ragyogó Beacon, 2.felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/SN5ERQoC#213wmJIh--WAqkFiZjdoiVtZQOVy70_bVYR7cTrISec" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune elköveti azt a hibát, hogy flörtöl Weiss-szal, de barátra lel a sztáratlétában, Pyrrha Nikosban. Mindeközben Ruby elborzad, amikor megtudja Beacon beavatási rituáléjának részleteit.</p></td>`
                },
                {
                    title: "The First Step / Az Első Lépés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/3Y5x2QiB#xXfZ9tZBgNdcDDp66Zrazb3NVCAxr4pLpzJIzho-Hf0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Miután (szó szerint) beleesik a hatalmas Smaragd-erdőbe, Ruby és a többi beavatott tülekednek, hogy új partnereket találjanak, és túléljék Grimm gonosz teremtményeit. Isten hozott az iskolában gyerekek!</p></td>`
                },
                {
                    title: "The First Step, Pt.2 / Az Első Lépés, 2.felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DZ5mBJpK#amKYbYRYuLrqEwFK6xiqhPkkomb-nd4mJQ-JPoOLtpI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Kölcsönös nemtetszésére Ruby és Weiss párba állnak a beavatás során. Eközben Pyrhha kezet nyújt Jaune-nak, aki a feje fölött lehet Beacon-ben.</p></td>`/*magasabb szinten van*/
                },
                {
                    title: "The Emerald Forest / A Smaragd Erdő",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/Tc5XTBQY#uvPJGeAJqXGKUIXMwhoooZtNjQCWx2Zobn20UycJj1s" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Yang és Blake boldogan összebarátkoznak, miközben Ruby és Weiss között nő a feszültség.</p></td>`
                },
                {
                    title: "The Emerald Forest, Pt.2 / A Smaragd Erdő, 2. felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uNZUFapT#h5CtQPcO6SzcLLZ-i4cQzOgmFI-vmYny5XwlFQ3swBw" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Blake és Yang dolgai simán mennek, de minden délre megy, amikor a többi pár óriási szörnyekkel a sarkukban megjelenik.</p></td>`
                },
                {
                    title: "Players and Pieces / Játékosok és Darabkák",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/iYYijR4Y#9cVW2RPwPfPP8iI_QyIAWQbr9rcHMukBD1eKHoAbDoo" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby, Weiss, Blake, Yang, Jaune, Pyrrha és diáktársai, Nora és Ren az életükért küzdenek a Smaragd-erdő szörnyűséges lakói ellen első igazi próbájuk során, mint Vadászok és Vadásznők.</p></td>`
                },
                {
                    title: "The Badge and The Burden / A Jelvény és A Teher",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/ndRVEbCI#nqGEJzuGz9FFePiPZAQZR_BtP9Vt5b202k5yQ6iqv84" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>A csapatok megalakultak, és elkezdődtek az órák a Beacon-ben, de Weiss nem érti, miért tették meg Rubyt az RWBY irányítására ő helyette. Az ifjú csodagyereknek tényleg megvan a vezetéshez való készsége?</p></td>`
                },
                {
                    title: "The Badge and The Burden, Pt.2 / A Jelvény és A Teher, 2.felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/GFwg1agL#GR2jRBPlX6ZvjudhSIGQhIVY1fzFp9lFwgQn3uCzugY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Miközben Weiss a büszkeségével küszködik, Ruby azon tűnődik, vajon az igazgató hibázott-e, amikor az <span class="meaning" title=" (RWBY) Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> csapat vezetőjévé tette.</p></td>`
                },
                {
                    title: "Jaunedice / Sárgaság",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/HJx33SYS#gZpN67bKdurmxUBBL_HtOTWmP8Du312ZDDPs8Er5Hcc" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune, az új Vadászok közül a legkevésbé tehetséges, zaklatástól szenved.</p></td>`
                },
                {
                    title: "Jaunedice, Pt.2 / Sárgaság, 2.felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jBBTlQBJ#pCz8EhQnsBiMTDutwZAWtAa9a0nEGrTWceHBFM6BULI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Pyrrha egy tervvel áll elő, hogy segítsen Jaune-nak, de a dolgok bonyolulttá válnak, amikor elárulja, hogyan is került az iskolába.</p></td>`
                },
                {
                    title: "Forever Fall / Örök Ősz",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/6IQRGBIR#GWg1VQTQ6sd7o5MInKjSpEtZgg-4oHDeuPnkCSyQ6IU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune-t egy-egy szörnyű helyzetbe zsarolják, de amikor Pyrrha egy aljas csínytevés célpontjává válik, szembeszáll kínzóival.</p></td>`
                },
                {
                    title: "Forever Fall, Pt.2 / Örök Ősz, 2.felvonás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/GRQBTSzA#U9MwucsYpWR3f3hxILMEWlDFHRBjOVZCC5vkCgyGg1g" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">14. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>A „<span class="meaning" title="(Jaune Arc) Jaune is yellow. The Arc siblings are all a color of the rainbow, with one set of twins.">Sárga Ív</span>” megoldásával Jaune mindenkinek megmutatja, hogy valóban van benne potenciál. De vajon helyre tudja-e hozni a barátságát Pyrrhával?</p></td>`
                },
                {
                    title: "The Stray / A Kóborló",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uZR3kLoS#pNWgBJe1EnB_12DTrGUpGgUvjVFAtO_k2KlyTvMpgec" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">15. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Két új versenyző érkezik a városba a közelgő tornára várva. Blake és Weiss összecsapnak a Faunuszokkal kapcsolatos előítéletek miatt, aminek következtében Blake felfedi sötét múltját.</p></td>`
                },
                {
                    title: "Black and White / Fekete és Fehér",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/OQYAHbTR#aaZfcndxznr9yoz6p1RV7yCXEbVWBh5NWs5aQ-_gZvs" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">16. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Az első kötet végén Blake és egy új barátja megpróbálja kideríteni, ki áll a sorozatos lopások mögött, míg az RWBY csapata megpróbálja megtalálni őt, miután megszökött.</p></td>`
                },
            ]
        },
        {
            title: "RWBY: 2.fejezet",
            ti: "Szinopszis", //https://rwby.fandom.com/wiki/Volume_2
            de: `<img src="images/v2.jpg" class="kiskep2"><p id ="soriinfo">Az <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> csapat visszatért, és készen áll a második félévre a Beaconnál, de a valódi élet nem áll meg itt. Az órák és a házi feladatok között még időt kell találniuk a világ megmentésére. És a Fehér Agyar, Roman Torchwick és egy titokzatos új trió között minden bizonnyal lesz dolguk!<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=2
                {
                    title: "Best Day Ever / Legjobb Nap Valaha",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/6QJ3BQzR#mRGg2XQY_Q7H2AyMh8M73_91Q_0oXr3Bm_1g_-yfHNI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Zavarosan kezdődik az új szemeszter a Beaconnél, amikor a <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> és a <span class="meaning" title="Jaune Arc, Nora Valkyrie, Pyrrha Nikos, Lie Ren">JNPR</span> csapatok kiütős, elhúzódó ételharcban vágnak neki. Eközben baljós erők gyülekeznek, készen arra, hogy lecsapjanak egy gyanútlan királyságra.</p></td>`
                },
                {
                    title: "Welcome to Beacon / Üdv Beacon-ben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jQQ0ULpR#UvvP6aJQmh_h3RPNZMZ3GBc6hxzemCapGdP5TL-dZiI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake, aki Torchwickkel való találkozása óta nyugtalan, meggyőzi az RWBY csapat többi tagját, hogy segítsenek levadászni a bűnözőt. Eközben Cinder elindítja terve következő szakaszát.</p></td>`
                },
                {
                    title: "A Minor Hiccup / Egy Kisebb Csuklás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/rUwkhZRR#FivciivZB5fUMsGZHIO6nvoMmyesfKXl3lNEcIegn3c" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapathoz Sun és Neptune is csatlakozik, a Torchwick utáni vadászatba. Miközben a várost kutatják nyomok után, Ruby beleütközik barátjába, Pennybe, aki a szokásosnál is furcsábban viselkedik.</p></td>`
                },
                {
                    title: "Painting the Town... / A Város Kifestése...",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/zIRHiSbK#XMpl7npT2EvQV7VgBOc-QQ1a3X5ajPNPt7uR5Nw1nmM" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake és Sun azt találják, hogy Torchwick fejlett fegyverzetet szállít a radikálisok egy csoportjának, de mindkettőjüket felfedezik. Az egész RWBY csapatnak egyesülnie kell, hogy legyőzzék ellenségük legújabb fegyverét.</p></td>`
                },
                {
                    title: "Extracurricular / Tanórán kívüli",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/TZIBSJIB#YoIg4NZ9vW7BnZ0jt-gqlH_CzcL6b3S7BqJ8XjCC7VU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Pyrrha Nikos az egyik legígéretesebb új vadásznő a Beacon-ben, akit jó okkal hívnak "Legyőzhetetlen lánynak". De ha szívügyekről van szó, Pyrrha sokkal sebezhetőbb, mint "ő", folytassuk.</p></td>`
                },
                {
                    title: "Burning the Candle / A Gyertya Lángolása",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WQBm0ZxQ#V7O3Ba4QvxQkcHi2x3P3fni7CYgD_l4N5nQtz63pDQQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake rongyosra futja magát, és megpróbálja kitalálni Torchwick következő lépését, Yang pedig megpróbálja rávenni őt, hogy lazítson egy kicsit, és élvezze a közelgő táncot. Pyrrha és Jaune egyaránt a viszonzatlan szerelemmel foglalkozik.</p></td>`
                },
                {
                    title: "Dance Dance Infiltration / Tánc Tánc Beszivárgás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/OJQTHLrT#DjN_i-rS-qMULQijZrN6gr512HAe06OEKt2l3NZozKY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Jaune kezdi felismerni, hogy Pyrrha mit érez iránta, és merész lépést tesz. Ruby észreveszi, hogy valami nem stimmel a táncon kívül, és végül az életéért küzd.</p></td>`
                },
                {
                    title: "Field Trip / Terepgyakorlat",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/qRAXSKjA#BJjHZ6Yp37eabT5cnxqJEkM8aVPcyMQdUuA3m5gH1YY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az első éves hallgatók megkapják első igazi küldetésüket vadászként és vadásznőként, miközben Ozpin és szövetségesei keresik a módját, hogy szembeszálljanak titokzatosságukkal.</p></td>`
                },
                {
                    title: "Search and Destroy / Keres és Pusztít",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/2RoSWA6I#cFu9YNDa86IzjPtgZUHNI9A155Zr8ItLVSPkimynMfg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az excentrikus Vadász, Dr. Oobleck társaságában az RWBY csapat harcol a Grimmekkel a város egyik elhagyatott részén, miközben titokban Torchwick rejtekhelyét kutatja.</p></td>`
                },
                {
                    title: "Mountain Glenn / A Hegyi Város",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/nJhXBI6b#Moxwr4X75i0QJd4x5VH8pT0yr-CA_Yes3eBHA-jRmws" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Weiss, Blake és Yang azon töprengenek, hogy miért akarnak vadásznők lenni, míg Ruby megdöbbentő felfedezést tesz a föld mélyén.</p></td>`
                },
                {
                    title: "No Brakes / Nincs Fék",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/GF5BVSSB#LxY1eKbn_eJoVzFhF2PMnuN5iTJRDD1AgOJcWmQRnYU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat az idő ellen küzd, hogy megakadályozza, hogy a vonat elérje a célját.</p></td>`
                },
                {
                    title: "Breach / Törés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/iV52BCST#ojaxUs3_1hLW--Z_00IMVjtiXQlyQ6zjy1VSx1CaLK4" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Grimmek százai özönlenek a városba, és az RWBY csapat önmagában nem tudja megállítani őket. Cinder gondosan kidolgozott tervei azt a veszélyt fenyegetik, hogy elesnek, ezért a lány a helyzet megmentésének módján gondolkodik.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: 3.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_3
            de: `<img src="images/v3.jpg" class="kiskep2"><p id ="soriinfo">A Vytal Festival Tournament az ügyesség végső csatája, amely a világ legerősebb vadászait és vadásznőit állítja szembe egymással edzés közben... és végre itt van! Ruby, Weiss, Blake és Yang visszatért egy szezonra, ahol a legkiválóbb akciókat töltik, és nincsenek egyedül. Új harcosok Remnant minden környékéről készen állnak arra, hogy dicsőséget hozzanak Királyságuknak, de vannak köztük olyanok is, akik sokkal baljósabb célt tűztek ki maguk elé.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=3&ref_=ttep_ep_sn_nx
                {
                    title: "Round One / Első Menet",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/PJxxXCBT#cM1dfuGG14Eslyv_YOyVnVsOE8tvjWGm36LVIdBjhb8" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Festival Tournament az ügyesség végső csatája, amely a világ legerősebb vadászait és vadásznőit állítja szembe egymással edzés közben... és végre elkezdődött!</p></td>`
                },
                {
                    title: "New Challengers... / Új Kihívók...",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/CJxkgTzC#ONcjymJlR7eSr8E4q5PygqS3pj-ogYAVJMECRiV5kHQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Fesztivál a <span class="meaning" title="Jaune Arc, Nora Valkyrie, Pyrrha Nikos, Lie Ren">JNPR</span> csapatával a <span class="meaning" title="Brawnz Ni, Roy Stallion, Nolan Porfirio, May Zedong">BRNZ</span> csapatával, valamint az <span class="meaning" title="Sun Wukong, Scarlet David, Sage Ayana, Neptune Vasilias">SSSN</span> csapatával és az <span class="meaning" title="Nebula Violette, Dew Gayl, Gwen Darcy, Octavia Ember">NDGO</span> csapatával folytatódik. Egy furcsán ismerős arc részegen nézi a tornát.</p></td>`
                },
                {
                    title: "It's Brawl in the Family / Ez egy Csetepaté a Családban",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/7IAxhBTa#Z7z7VqNDKEi7BnmQheXJdw3AbO9gBAkQpRDo-riz3IY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Winter megérkezése után Weiss és Ruby tudomást szerez a közte és Qrow közötti feszültségről.</p></td>`
                },
                {
                    title: "Lessons Learned / Leckék Tanulsága",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/bU4kQTaY#WfoZEKM8Gp6B7OAOGXPnxyr-ocBthfR5L8oST2NB688" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Mercury megmutatja óriási harcos képességeit. Ruby és Yang értékes tanácsokat kap Qrow-tól, míg Weiss életleckét tanul Wintertől.</p></td>`
                },
                {
                    title: "Never Miss a Beat / Soha Ne Hagyj Ki egy Ütemet",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/fVRCGIqK#FgMnIrm0P0mWx0RYq8PK6hZLN9OYsMvW_JpfsTjXcqg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Fesztivál második fordulójában Yang és Weiss egy ismeretlen csapat ellen versenyeznek.</p></td>`
                },
                {
                    title: "Fall / Ősz",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/fAhllLjA#vsHpwZwkWNGLBNPOPmI5Gly8vcnK7TGzqO6wgM-5eCE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ozpin és Pyrrha megvitatják A négy lány történetét. Ezt követően Yang és Mercury harca döbbenetesen végződik.</p></td>`
                },
                {
                    title: "Beginning of the End / A Vég Kezdete",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/OBZSSQiK#DUK7CiIUa510tZR3KInpPxjvGT9I47z40sfZiJa6WPA" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A visszaemlékezéseken keresztül a néző megtudhatja, hogyan toborozta Cinder a csapatát, és hogyan lépett partnerségre a Fehér Agyarral. Részletek Amber meggyilkolási kísérletéről, valamint Yang látszólag provokálatlan merényletéről is láthatók.</p></td>`
                },
                {
                    title: "Destiny / Sors",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/TNRwDBxL#d0ovOINao86x754mXjWdJSReEUh9tS3m3CJJieEmlB8" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat felépül Yang Mercury elleni támadásából. Pyrrah szenved a veszélyes döntéstől, amelyet meg kell hoznia. Ruby gyanakodni kezd, és eközben elkezdődik a második kör.</p></td>`
                },
                {
                    title: `PvP / Játékos kontra Játékos`,
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/OdwSBS6Q#C9kiG_0baoK4hvdclesrh8VXmsn7TGRTqvmIQ48s50k" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Pyrrah és Penny megkezdi a harcot. Ruby és Mercury elkezdi a magáét. Cinder halálos üzenetet küld.</p></td>`
                },
                {
                    title: "Battle of Beacon / A Csata Jele",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/bVpHkbDQ#q1iDQOcAPXnwPv5NjpVkoK4fsqJXajJNNmTFNb3mSec" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat szétválik, mert Beacon és Vale pusztító Grimm-támadást szenved. A Vadászoknak össze kell állniuk, de Cindernek több terve is van.</p></td>`
                },
                {
                    title: "Heroes and Monsters / Hősök és Szörnyek",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jQxBXQAT#5oKWjnkWCi7as6t75pFLP3CuYdZBrvERWNahSwvqrfk" allowfullscreen ></iframe>
                    `,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ruby újra Neo és Torchwick ellen száll szembe. A Beaconért folytatott háború folytatódik, és a nagy káosz közepette Blake és Adam találkozása megdöbbentő végkifejlethez jut. Mindeközben Pyrrha meghozza a döntését.</p></td>`
                },
                {
                    title: "End of the Beginning / A Kezdet Vége",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/SIJERbBK#O3PB_PmXcRNXmsjiVXQEb_f5TwK0snCu6KqgFCIo2C4" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ahogy az akadémiáért folytatott csata a végéhez ér, Pyrrha olyan döntést hoz, amely mindent megváltoztat. Amikor véget ér ez az egész, Ruby rájön, hogy több van benne, mint gondolta.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: 4.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_4
            de: `<img src="images/v4.jpg" class="kiskep2"><p id ="soriinfo">Több hónap telt el a Beacon bukása óta, és Remnant világa talpra áll. Nagy a feszültségek kerekednek... rengeteg életet vesztettek, és az RWBY csapat tagjai... megosztottak. Minden hősnőnk saját utazása előtt áll.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=4
                {
                    title: "The Next Step / A Következő Lépés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DVJgkLyL#MkMpbh6qp-mLBw9RK2mOEXiV_ZgTqThQWu-R0Kc5tgk" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Hat hónappal később a Remnant világában... Salem kijelöli a tanácsát, és megtervezi a következő lépést. Ruby, Jaune, Nora és Ren egy veszélyes új Grimmel harcol az erdőben.</p></td>`
                },
                {
                    title: "Remembrance / Emlékezés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/OAQgRYCb#mdJfuwIuaweyj6LcKTzX_Cac42CyChUmnMCOp0wVXkQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az RNJR csapat megtalálja a mészárlás következményeit. Weisst az apja sarokba szorítja, és Ruby rájön egy szomorú igazságra.</p></td>`
                },
                {
                    title: "Of Runaways and Stowaways / A Szököttekről és Szökevényekről",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/SEozxKQT#Nh5nvyaWfsU-zLXxIRMYJO1lLlCETIAdmBqP3LPv174" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Blake egy veszélyes új Grimmellel találkozik a Menagerie felé vezető úton. A folja miatt amit a csatában szerzett Yang. Emlékezteti arra, milyen hatással volt rá Beacon bukása.</p></td>`
                },
                {
                    title: "Family / Család",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DEISFKzZ#MWaHqcOD3XjKek5imGpIaaXAnhiCIt9YSBrjEx_Y9_Y" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Yang még mindig a csata után történtekkel van elfoglalva, de aztán kellemes társaságot és bölcs szavakat kap édesapjától. Mindeközben az RNJR csapat meglepő könnyedséggel utazik a következő városba, a szerencse mellettük áll?</p></td>`
                },
                {
                    title: "Menagerie / Állatsereglet",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/7MpnkKjD#SOwcTnrWv_0bhb_xTh1KOaLMFQYWESg8JbIAta-jiX0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Blake hazatér a családjához Managerie-be, Sun azonban nehezen tudja lenyűgözni apját. Blake még itt is küzd, hogy felülkerekedjen a problémáin, miközben a Fehér Agyar megszakítja találkozásukat. Tyrian megkezdi Ruby vadászatát.</p></td>`
                },
                {
                    title: "Tipping Point / Fordulópont",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/KEwnlSRC#N914JhpXeOhXLNF8ExBfjzy-oCK4gsLCkGq6ChncyRY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Weiss énekli a dalát, és az Atlas-i tudatlansággal küzd. Az RNJR csapat felfedez egy másik romvárost, és belefut egy halálos ellenfélbe.</p></td>`
                },
                {
                    title: "Punished / Megbüntetett",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/mM43iLQY#dFrjfLFrnitIMTN-WiBZY1YRpeH76Ug6cd8SahvNeL4" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Weiss-nak szembe kell néznie tetteinek következményeivel a jótékonysági rendezvényen, Qrow megküzd Tyriannel, hogy megvédje az RNJR csapatot, Oscar pedig többet tud meg a sorsáról.</p></td>`
                },
                {
                    title: "A Much Needed Talk / Egy nagyon szükséges beszéd",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/bVpGUSDb#Aj0hanuYq2cZTBHLELetwytyxp4ad7qTFyze8UIyKQ0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Qrow még mindig lábadozik az előző küzdelem során szerzett sérüléséből, miközben tájékoztatja az RNJR csapatot Salem növekvő veszélyéről. Blake újra kapcsolatba lép az apjával.</p></td>`
                },
                {
                    title: "Two Steps Forward, Two Steps Back / Két Lépés Előre, Két Lépés Hátra",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/SIg3UDQK#Nm10gLIGQolIcdG_5PT5UkFyEfOUpAcfIpHfJoAvChg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Miközben Weiss és Yang folytatják kiképzésüket, Blake és Sun levadászják a Fehér Agyar kémjét, az RNJR csapatnak pedig el kell döntenie a legjobb utat a hegy megkerüléséhez, hogy segítséget találjanak Qrow-nak.</p></td>`
                },
                {
                    title: "Kuroyuri / Fekete liliom",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/bIYzFRwT#8L-zCc7zvyOSMeUP6iiGZOIPaLtAPUAwi88YeitQRcU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az, hogy olyan közel vannak szülővárosukhoz, Kuroyurihoz, fájdalmas emlékeket idéz fel Ren és Nora számára, de mivel Qrow állapota a egyre ​​romlik, az RNJR csapat mindkét felének tovább kell haladnia.</p></td>`
                },
                {
                    title: "Taking Control / Átvéve az Irányítást",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/HMQTGLIR#hmXk9pNb20ipJbfakSlByMrjsRVmLFWxmWDvJ_uwn5o" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Miközben Cinder a hajadon erejével folytatja edzését, Tyrian visszatér, hogy megmagyarázza vereségét Salemnek. Weiss megpróbál megszökni apja elől Klein segítségével, Blake elhatározza, hogy visszaszerzi a Fehér Agyart, Ren pedig egy rémálmot lát a múltjából.</p></td>`
                },
                {
                    title: "No Safe Haven / Nincs Biztonságos Menedék",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/6ZRikZKZ#DZiubrdL0og9lpVpiDzliD3mp1QRCNFNtuNfKJ6TL8I" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az RNJR csapat a Grimm ellen harcol, amely elpusztította Kuroyurit, de Ren haragja miatt elveszíti az irányítást a csata közben, és veszélybe sodorja barátja életét.</p></td>`
                }
            ]
        },
        {
            title: "RWBY 5. fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_5 - Szinopszis
            de: `<img src="images/v5.jpg" class="kiskep2"><p id ="soriinfo">A <span class="meaning" title=" (RNJR) Ruby Rose, Nora Valkyrie, Jaune Arc, Lie Ren">RNJR</span> csapat és Qrow végre megérkezik Mistralba, és meglepődve látják Oscart és Ozpint. Weiss és Yang azt tervezi, hogy találkoznak a csapattal. Mindeközben Blake, családja és Sun saját harcukkal közdenek Menagerie-ben. Eközben Salem Mistral ellen lép, akárcsak Vale. Oroszlánszívű Leonardo a hősök tudta nélkül félelemből áll vele szövetségben.<br>E kötett során Adam Taurus puccsot hajt végre Sienna Khan ellen, és átveszi a Fehér Agyar vezetését, miközben kiderül, hogy a Hajadonok szoros kapcsolatban állnak az ereklyékkel.<br><br>UI.: 1-4.részig <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a> fordította. Azért töltöttem fel, hogy egy helyen legyen meg az 5.fejezet.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=5 - részenként rövid leírás
                {
                    title: "Welcome to Haven / Üdv Haven-ben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DotiWZaT#5nAO0LmbY2pdqqJ5c5H7RV6fbEwD6kJKYjUOF9eY4cQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Egy hosszú és fárasztó út után a RNJR csapat és Qrow végre találkozik Lionheart Professzorral. Weiss továbbra is menekül apja elől, Blake szembesíti Aliát a "White Fang"-el való szővetségével kapcsolatban, Yang pedig nyomra bukkan az anyjával kapcsolatban.</p></td>`
                },
                {
                    title: "Dread in the air / Rettegés a levegőben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/q5UXQbhZ#jVB8zhyYF4OpKk3lYcLz62gzPZkaA2l2Hy8F4McoIK8" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Weiss útját Haven felé a Lancerek raja blokkolja, akik lesből támadnak a területüket átszelő repülőgépekre. Adam találkozik a "White Fang" vezetőjével, Sienna Khannal, hogy bemutassa Hazelt.</p></td>`
                },
                {
                    title: "Unforeseen Complications / Váratlan Bonyodalmak",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/m9NS3bRb#cDIs-KxG9CbOxZrv8YHAO7a5iCOyS8hqxy40NlMv5Pc" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ilia félbeszakítja Ghira és Blake kísérletét, hogy meggyőzzék a Menagerie Faunus-ait, hogy segítsenek megmenteni Havent. Weiss fogvatartói felfedik terveiket, hogy visszaváltsák őt apjának. Eközben az RNJR csapat többet tud meg Oscar furcsa képességéről.</p></td>`
                },
                {
                    title: "Lighting the Fire / A Tűz Meggyújtása",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/O1dyFJ5L#lzcIivNTZbJINt43e79DkkG1hss6y986pSx41wUngaM" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ruby és Oscar elkezdenek edzeni a kézi harcban. Yang megtalálja Raven táborát, de Weiss elrablásának felfedezése megnehezíti a találkozásukat.</p></td>`
                },
                {
                    title: "Necessary Sacrifice / Szükséges Áldozat",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/upEiWTAb#xEbLHhiAdeNQU6d3wbh_FbpoLPWPOUOaQ4KRlMTz6vA" allowfullscreen></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">Blake és Sun nem kap elég aláírást a Haven Akadémia megmentésére irányuló petíciójukhoz. Mindeközben Ilia parancsot kap az Albain testvérektől, hogy gyilkolják meg Blake szüleit és fogják el Blake-et.</p></td>`
                },
                {
                    title: "Known by its Song / Felismerni a Daláról",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WhVh2IoR#dXSP9JLHjfBFpBEQ8uxHruO8zm70ijK3yxUdXoLHEKo" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">Raven elmagyarázza Yangnak és Weissnak Ozpin iránti bizalmatlanságát, miután tudomást szerzett Salem létezéséről. Bizonyítékként megmutatja alakváltó képességét, és választási lehetőséget kínál Yangnak, hogy vele maradjon. De Yang és Weiss úgy dönt, hogy elmennek, és újra összefognak Rubyval.</p></td>`
                },
                {
                    title: "Rest and Resolutions / Pihenés és Állásfoglalások",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/D0FVWJYb#pZH6Aq0nQax-dgnH-pF2KnijCFfifJorQGxdEwtc4A8" allowfullscreen ></iframe> `,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">Yang szembesíti Ozpint azzal, hogy mágiát használt Qrow-n és Ravenen, aki mindent elárul hatalmáról és a Hajadonok-ról. Eközben Cinder, Watts, Mercury és Emerald megérkezik Raven táborába.</p></td>`
                },
                {
                    title: "Alone Together / Egyedül Együtt",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uwciRSLQ#j9WYHnDoAj9rHMJEePpvRNJ6VeMH2_Wqj5TGlUmUbak" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">Az érzelmek fokozódnak, ahogy Ruby és Weiss rájön, hogy Yang még nem bocsátott meg Blake-nek. Ilia belső konfliktusa egyre nő. Blake rájön, hogy a családja veszélyben van.</p></td>`
                },
                {
                    title: "A Perfect Storm / A Tökéletes Vihar",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">Raven táborát Cinder bandája megtámadja, miközben a Tavasz Hajadon után kutatnak. Ilia hagy egy levelet Blake-nek, amelyben arra kéri, hogy találkozzon vele titokban.</p></td>`
                },
                {
                    title: "True Colors / Igaz Színek",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">Blake próbálja érvekkel meggyőzni Iliát, miközben Ghira és Sun - Corsac és Fennec ellen küzd.</p></td>`
                },
                {
                    title: "The More the Merrier / Minél Több, annál Jobb",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">Ruby és a banda többi tagja találkozik Lionheart Professzorral a Haven Akadémián, és nem is sejtik, hogy épp csapdába sétálnak.</p></td>`
                },
                {
                    title: "Vault of the Spring Maiden / A Tavasz Hajadon Pincéje",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">Hazel múltja napvilágra kerül. Jaune felfedez valamit magáról. Raven, Vernal és Cinder belép az alagsorba.</p></td>`
                },
                {
                    title: "Downfall / Bukás",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">Ruby elvonja Emerald és Mercury figyelmét, így Yang üldözőbe vehette Ravent és Cindert. Adam arra készül, hogy lerombolja az iskolát, de Blake megérkezik a többi faunusszal, hogy őrizetbe vegyék.</p></td>`
                },
                {
                    title: "Haven's Fate / Haven Sorsa",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">14. rész rövid leírása</p><p id="ltwo">Emerald összeomlik, amikor megtudja Cinder vereségét, miközben Adam és Lionheart menekül, így Mercury és Hazel visszavonulásra kényszerülnek. Annak ellenére, hogy Yangben rövid ideig feszültség uralkodik, Blake-et üdvözli a csapatban.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: 6.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_6
            de: `<img src="images/v6.jpg" class="kiskep2"><p id ="soriinfo">Az RWBY csapat újraegyesül, és az első küldetésük nagyon fontos: elkísérik a Tudás Ereklyéjét Atlaszba. Mivel a világ látszólag szétesik körülöttük, és minden sarkon Grimm leselkedik, Remnant-on áthaladva, hogy elérjék céljukat, veszélyesebb lesz, mint azt bárki is gondolta volna.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=6
                {
                    title: "Argus Limited / Vasút",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/yBghnRTJ#2LY4ZG3p7G4bnbg2hvPthlLR2NkPfGo2D7USN_grXFQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Ruby Rose és barátai a Tudás Ereklyéjének biztonságos szállításával az Atlaszba hárultak. Számtalan mérföldnyi Grimm-borított vidék található Mistral városa és Anima északi partvonala között. Szerencsére az Argus Limited könnyedén megteszi az utat – mindaddig, amíg nem történik baj.</p></td>`
                },
                {
                    title: "Uncovered / Fedetlen",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/mdpHiYbT#tmeOpfVoZZGKc95IN-lrqnl8gVbXW57AGiQKhcj93m0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Thoma</a><br>Az RWBY csapat ellenségei keresik a hollétüket. Eközben az RWBY csapat megkérdőjelezi Ozpint, miközben a múltja kísérteni kezdi.</p></td>`
                },
                {
                    title: "The Lost Fable / Az Elveszett Mese",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/zEpAXTab#N6pVjJt-Xv6ucFGwzL9G_5efR3uU8ivb3zkkWawneRE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Mi a kedvenc tündérmeséd?</p></td>`
                },
                {
                    title: "So That's How It Is / Szóval Ez Így Van",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/uc4hjTyC#xH8DsKb8FSE1NzZ7EmvLn4M6gNnLKJSwCAVjkNzkskM" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hősök és gazemberek egyaránt aggasztó leleplezésekkel szembesülnek.</p></td>`
                },
                {
                    title: "The Coming Storm / A Közelgő Vihar",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/3YoQ3aiY#MdUv7D7aAL-HNopMPDh75UJuTxP6vO7uz6vkksZFIrY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>A Mistral-i bűnszervezet még mindig tevékenykedik, de a menedék nem mindig garantálja a biztonságot.</p></td>`
                },
                {
                    title: "Alone in the Woods / Egyedül az Erdőben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/qdIgwDrJ#EH6_voX-m3CWnGCd3XcXGA31XQ58kqrUMNufiJ_kDC8" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Ahogy sötétedik a Brunswick Farmján és a hó tovább esik, az RWBY csapat morálja minden idők mélypontján van. Az egyetlen dolog, ami rosszabb annál, mint amikor egyedül rekedsz az erdőben, az az, ha ráébredsz, hogy egyáltalán nem vagy egyedül.</p></td>`
                },
                {
                    title: "The Grimm Reaper / A Grimm Kaszás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/KAAUiQZZ#wRaV_IH7KCeGRzxSlRAItpnbXjalb6tnxcPKrGxaCXI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Míg Cinder megosztja terveit Neóval, Maria megosztja múltját az RWBY csapattal, és mindkét csapat halállal néz farkasszemet mielőtt eljuthatnának Atlaszba.</p></td>`
                },
                {
                    title: "Dead End / Zsákutca",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/udQ3DCyJ#iQUpEFcoTjRDpiaoKGct5bgsmSOI6qJhaaYklPnL9_0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Az Atlasz argusi képviselőinek nem áll szándékában segíteni az RWBY csapatot. Sőt, határozottan ellenzik ezt. Itt az ideje, hogy új megoldást találjunk ki – és itt az ideje annak is, hogy meséljenek Jaune-nak, Norának és Rennek Jinnről.</p></td>`
                },
                {
                    title: "Lost / Elveszve",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/Dch2lCgR#bjSSvFG3_R6NtP8_H6HzOt5g5cF_Cglvcg7UUIgDBu0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Cinder eltűnésével Emerald és Mercury kérdéseket kezd felvetni, és nem ők az egyetlenek; Jaune, Nora és Ren Oscar után kutatnak, de még mindig nem tudják, mit tegyenek, ha megtalálják.</p></td>`
                },
                {
                    title: "Stealing from the Elderly / Idősektől lopni",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/2JJQXJaC#915nBbp0R6GNTjT6cIREd77dq0ujDDKfwEOq6Kfadpg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hőseinknek egyetlen lehetőségük van arra, hogy elkővessék életük rablását, és ha sikerrel járnak, mindenkinek ki kell vennie a részét belőle. Ideje indulni.</p></td>`
                },
                {
                    title: "The Lady in the Shoe / A cipős hölgy",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/nJR3GLrb#xuoIUKh8LPCZ-HidDm3QQMsByZBNWGwV6eTCCDd0ACU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Az egyetlen dolog, ami hőseink és Atlasz között áll, az Caroline Cordovin, de össze kell fogniuk, ha le akarják győzni. Eközben Yang versenyt fut, hogy megtalálja Blake-et, míg Adam mindent megtesz, hogy végezzen vele.</p></td>`
                },
                {
                    title: "Seeing Red / Vörösen Látni",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/PVpVCLrI#uX3u4wJEBichRmKXw-laqo2bV0ztWiKkiJC6qcZR470" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hőseink kifutnak az időből. Ahogy Cordovin továbbra is fölényben van. Blake és Yang összeállnak. De minden harcosnak fel kell tennie magának a kérdést: "Meddig vagyok hajlandó elmenni a győzelemért?"</p></td>`
                },
                {
                    title: "Our Way / A mi utunk",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/nQIXwBCR#Ig7u8dhVbDB_j43_FBqeuBoDKuTE14_FFGnzkaZfSVA" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Egy Leviatán bukkant elő az óceán mélyéből, és most azzal fenyeget, hogy elpusztítja Argus városát. Mivel a Cordo's Colossus cselekvőképtelen, az Atlasz Bázisnak keveset tudnak tenni az emberek védelmében.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: 7.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_7
            de: `<img src="images/v7.jpg" class="kiskep2"><p id ="soriinfo">Ruby, Weiss, Blake és Yang keményen küzdöttek barátaikkal, hogy elhozzák a Tudás Ereklyéjét Atlaszba, Remnant legészakibb királyságába. A futurisztikus városi terjeszkedés azonban éppoly veszélyt rejthet, mint az őt körülvevő Grimmekkel fertőzött tundra. Ellenségek és szövetségesek ütköznek, miközben hőseink Salem erőinek megállításáért küzdenek, de az összefogás veszélyes, ha nem tudod, kiben bízhatsz.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=7&ref_=ttep_ep_sn_nx
                {
                    title: "The Greatest Kingdom / A Hatalmas Birodalom",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WA5hXYhI#L88ATkm8WWHzNwD01u7Omzsh0BqqnmZkadd_AVP8QKU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Hőseink végre eljutottak az Atlaszba, de valóban olyan biztonságban vannak, mint remélték? Ez a felhőkben ragyogó város lehet, hogy a remény jele lehet Remnant-nak, de sötét árnyékot vet.</p></td>`
                },
                {
                    title: "A New Approach / Egy Új Megközelítés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/rVIjRYxJ#0crqGMjxHVbIrc0MiZ7EajXCkLuSYUP7iVxPit6W7cU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az emberek letartóztatása nem éppen a legjobb módja az első benyomás keltésének. Azonban amint a kezdeti sokk elmúlt, Ruby és barátai rájönnek, hogy sokkal több van ezekben az <span class="meaning" title=" Colver Ebi, Marrow Amin, Vine Zeki, Elm Ederne, Harriet Bree">Ace Ops</span>-okban – és még Ironwood tábornokban is –, mint amilyennek elsőre látszik.</p></td>`
                },
                {
                    title: "Ace Operatives / Ász Csapat",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/vNRmWIKL#0yxQaYXKFeQjCmp68MZytE05747JFC51di6M2P1W_-Y" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Kint a havas tundrában az Ace Ops bemutatja az RWBY és JNR csapatának a köteléket.</p></td>`
                },
                {
                    title: "Pomp and Circumstance / Pompa és Körülmények",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/rdoC0QSI#ds_jsPrynu-JV4gTbFbrhhyzfAlCDNpkOesTAz5EwsE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az első Atlasz-i küldetés teljesítésének csúcspontját jelentő banda azon fáradozik, hogy tökéletesítsék képességeiket, és nyújtsanak némi segítséget Mantle polgárainak.</p></td>`
                },
                {
                    title: "Sparks / Szikrák",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/iQBCRBzY#gu0pDyc61TYbHBak_r6tRxGODcym5Dmvg-_6pYu09F4" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>A küldetések, a kiképzés és a fokozódó politikai nyugtalanság között ezeknek a fiatal vadászoknak és vadásznőknek sok mindent kell kézben tartaniuk.</p></td>`
                },
                {
                    title: "A Night Off / A Szabad Éjszaka",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/fMJEwKDb#Xw76D8GGuM7CVwsB7wGmm5uXXnHe0jq-kQ0QU1CDf4o" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az állandó küldetések és az erőteljes edzések után a gyerekek végre kapnak egy szabad éjszakát a kikapcsolódásra. De a politikai gyűlésen való részvétel nem a legkönnyebb tevékenység.</p></td>`
                },
                {
                    title: "Worst Case Scenario / Legrosszabb Forgatókönyvi Eset",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jM5iWTjD#khblbZ6k1NlD803ZWpGcYs-6vwdAe9gIVc6fS9aOBfs" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Meddig lennél hajlandó elmenni azért, hogy azt tedd, ami helyes?</p></td>`
                },
                {
                    title: "Cordially Invited / Teszteletbeli Meghívás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/6RgD3KJY#SQI7JmwlxVI6kFIWETWp2JY0BkzQLQj13WLe_9VqAQg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Jacques és Ironwood veszélyes eszejátékba kezd. Eközben a gyerekeknek szembe kell nézniük az eddigi legveszélyesebb fenyegetéssel: egy színvonalas vacsorával.</p></td>`
                },
                {
                    title: "As Above, So Below / Mint Fent, Úgy Lent",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/SdgG1bLL#bdy0MiYbP-NDtmieBnlo4qiqysOpqWprgNcE6x8XyqI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Megmondod az igazat? Vagy valaki elmondja helyetted? A válasz mindent megváltoztathat a világon.</p></td>`
                },
                {
                    title: "Out in the Open / Kint a Szabadban",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/TZJzGI6T#VgHy3kn7NKVIbRTML6jQAAigVWsYXrkKUmf14WGkR44" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Végre kiderült az igazság, és nem csak hőseink veszik észre. Mivel minden forog kockán, minden segítő kézre szükség van, hogy megvédjék Mantle városát.</p></td>`
                },
                {
                    title: "Gravity / Gravitáció",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/mUpBlLLT#oTFbTR8BCdJ5mZUNG9fjGPYZu-ZVuDasDwMMUSolwDE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Watts, Tyrian és a végtelennek tűnő Grimm-raj között a gonosz minden oldalról támadja hőseinket. A legnagyobb veszély azonban az lehet, hogy oda bújnak, ahol a legkevésbé számítanak rá.</p></td>`
                },
                {
                    title: "Witch Friends Like These / Ilyenek a Boszorkánybarátok",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/7MQi3IgT#S8NdDBux-pLOBOCWhwUlDAVwwDQtjlc9dSurnls78ZE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Salem erőinek közeledésével és a tábornok letartóztatásukra vonatkozó parancsával hőseink kénytelenek minden fronton harcolni, hogy megmentsék a várost, amelyet Ironwood cserbenhagyott.</p></td>`
                },
                {
                    title: "The Enemy of Trust / Az Ellenség Igazsága",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/vQYGCKgB#SclS3cvtZPL0sKxDdDgCGqZ6hmJKff4neLXVFTU_RFg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Ki leszel, ha a legnagyobb félelmeid megvalósulnak?</p></td>`
                }
            ]
        },
        {
            title: "RWBY: 8.fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_8
            de: `<img src="images/v8.jpg" class="kiskep2"><p id ="soriinfo">Hőseink legrosszabb félelmei végre beteljesültek: Salem itt van, és az időzítés nem is lehetne rosszabb a megosztott Atlasz Királyság számára. A félelem a barátokat ellenségekké változtatta, míg a kétség az emberiség megmaradt szövetségeseinek szétzúzásával fenyeget. Mivel Salem és Ironwood is ellenük küzdenek, és a Remnant sorsa forog kockán, az RWBY csapaton múlik, hogy megtegye a lépéseit, mielőtt túl késő lenne.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a>, <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a> fordította.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=8
                {
                    title: "Divide / Feloszlás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WRZ1xBgA#1ZcPZ_bW5lIdaQLgd0i_vFcNeIIvMjHfhoiDz8-pegI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a><br>Minden eddiginél jobban össze kell egyesíteni a Salem ellen álló szövetséges erőket. De miután Ironwood nem volt hajlandó folytatni Mantle evakuálását, hőseinknek új utat kell választaniuk – ha csak egyben tudnak megegyezni.</p></td>`
                },
                {
                    title: "Refuge / Menedék",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/zZx0RQiC#d03AAFvfzzc7CKmKR3rtxxE-2AUr30Kmznvx88GFpII" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a><br>Ruby, Nora, Blake, May és Penny az Atlasz Katonai Parancsnokságra szegezik tekintetüket. Eközben Yang, Ren, Jaune és Oscar intézi az evakuálást Mantle-ben. Ha mindenkit idejében eljuttatnak a kráterhez, talán meg tudják menteni őket.</p></td>`
                },
                {
                    title: "Strings / Fonalak",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jNAlwbBC#SJ1BJsAfvwMz6hUSPF5TuXKf8kjnenaCzjR2JLs0Eos" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Az emberiség sorsa megköveteli hőseinktől, hogy beszivárogjanak Atlasz legszigorúbban őrzött létesítményébe – mindezt egy nap alatt.</p></td>`
                },
                {
                    title: "Fault / Hiba",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/vBxQ3JKI#Y1Nl-SnT0eL2IHH9ZR21iK-5rSpV_4f6b2hlFLFy75E" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Jaune, Ren és Yang egy titokzatos új Grimm utáni törekvése váratlan bonyodalmakhoz vezet. Ruby, Weiss és Blake új helyet találnak, ahol lefeküdhetnek. Cinder ultimátumot kap.</p></td>`
                },
                {
                    title: "Amity / Egyetértés",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DFYGUC7C#O_yD376SIKI79euFqPvQxPvlp1ZNE020h1kEN9SIUx0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Itt az esélyük, hogy elmondják a világnak az igazat. Meghallgatásra talál az üzenetük?</p></td>`
                },
                {
                    title: "Midnight / Éjfél",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/qQxXRIiY#NkbT4ymxLYeuvpv3gsaYjs7YKAKo2YDf0LWpw467RNI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Itt az idő.</p></td>`
                },
                {
                    title: "War / Csata",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/nNoDUQoS#EM1z173wjVhDof9kLtXhI6xu3gL8OICCM6smqEP6gIU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Atlaszban zaljik az egész háború. Hőseink lehetetlen problémával néznek szembe. Hova tovább?</p></td>`
                },
                {
                    title: "Dark / Sötétség",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jE5FyLgC#fW9uAQEkyWyUAkhonA0rWWeDpKdEsjlDrC5Lbw4_r-0" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Nem vagyunk egyedül.</p></td>`
                },
                {
                    title: "Witch / Boszorkány",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/aV4G0aiI#LyNUBSHK_OuEyijdPdzaA_jzqfrsY5K1j5mcS6531YY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Az óra Jaune, Ren és Yang mentőakcióján ketyeg. Az Ace-Ops tartja a vonalat Salem erőivel szemben.</p></td>`
                },
                {
                    title: "Ultimatum / Ultimátum",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/WQBF0aDS#_yDAkocsrpiGBZkVhsIwI3DymMCJlXlEvi5b45IWnvQ" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Ahogy a háború köde beborítja a királyságot, az Atlas a törésponthoz közeledik.</p></td>`
                },
                {
                    title: "Risk / Kockázat",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/KNRTkDaD#CyS9ASEMmX_TE1eWzpNPcPhNBeoVDp6SQKMQVvyKSSU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>A Schnee uradalomban fokozódik a feszültség, ahogy újraegyesült hőseink a sarokba szorítják magukat.</p></td>`
                },
                {
                    title: "Creation / Alkotás",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/ycZj3aqD#9XhixLnQy9zIeLCmbwac8t3TcmacIw3sUMJjBwgVxvI" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Kockázatos, veszélyes és szinte lehetetlen – de ez a legjobb tervük.</p></td>`
                },
                {
                    title: "Worthy / Méltó",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/fc4QwRII#r7n8hvRNq0kO6FOi8aodcmJkezGIZsIigCyllHMt5tA" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>A legjobb tervek...</p></td>`
                },
                {
                    title: "The Final World / A Végső Világ",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/GcowhQaL#BDllYaVvbNvQcQK7LnEXN0ia_Z97ZUBUAGJk6PO_89w" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">14. rész rövid leírása</p><p id="ltwo">A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Néha megéri az egészhez megkockáztatni a bukást.</p></td>`
                }
            ]
        },
        {
            title: "RWBY 9. fejezet",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Volume_9
            de: `<img src="images/v9.jpg" class="kiskep2"><p id ="soriinfo">Kezdés dátuma (Crunchyroll-on): 2023. február 18.<br><br>A 8.kötet megrázó eseményei után hősnőink egy ismeretlen világba zuhannak - az "Ever After"-be! Miközben a RWBY csapat felfedezi ezt a furcsa és titokzatos biradalmat, hirtelen rájönnek, hogy nem is olyan idegen számukra, mint ahogy azt elősször feltételezték. Ahogy utaznak, hogy megtalálják a hazautat, le kell küzdeniük eddigi legnehezebb kihívásukat - Önvalóságuk küzdelmét. És azt, hogy fel vannak-e készülve arra, hogy megállítsák Salem-et.<br><br>Magyar feliratos előzetes: <a  title="Magyar feliratos előzetes" onclick="Mehet('https://mega.nz/embed/WgtxCYKA#mDmI4MWjNDPqxFMHAjHTEMP7lP7sokHP5kKPg1x8gC0')">Ugrás a videóhoz</a></p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=9
                {
                    title: "A Place of Particular Concern / A Különös Aggodalmas Hely",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A RWBY csapat egy hatalmas szigetre mosódik ismeretlen helyen, Jaune-nal és Neó-val. Miközben barátaik, valamint Atlas és Mantle lakói átutazzák Vacuo-t.</p></td>`
                },
                {
                    title: "Altercation at the Auspicious Auction / Változás a Kedvező Árverésen",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">Amelyben az RWBY csapat többet kapnak, mint amennyiért cserélték.</p></td>`
                },
                {
                    title: "Rude, Red, and Royal / Goromba, Vörös, és Királyi",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">Amelyben megszegik a játékszabályokat.</p></td>`
                },
                {
                    title: "A Cat Most Curious / A Legkíváncsibb Macska",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">Amelyben új ismeretségek születnek.</p></td>`
                },
                {
                    title: "The Parfait Predicament / A tökéletes kínos helyzet",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">Amelyben egy desszert van összeállítva.</p></td>`
                },
                {
                    title: "Confessions Within Cumulonimbus Clouds / Vallomások a gomolyfelhőkben",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">Amelyben a régi barátok újraegyesülnek.</p></td>`
                },
                {
                    title: "The Perils of Paper Houses / A Papírházak Veszedelmei",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">Amelyben tervek és menetrendek készülnek.</p></td>`
                },
                {
                    title: "Tea Amidst Terrible Trouble / Tea Szörnyű Bajok Közepette",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">Amiben egy kis tea kiömlött.</p></td>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.15.</p></td>`
                },
                {
                    title: "? / ?",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">-Nincsen elérhető leírás-<br>Rész megjelenése (CrunchyRoll-on): 2023.04.22.</p></td>`
                }
            ]
        },
        {
            title: "RWBY x Igazság Ligája: Szuperhősök és Vadászok - Part I",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Justice_League_x_RWBY:_Super_Heroes_and_Huntsmen,_Part_One
            de: `<img src="images/rwby_x_justice_league_poster.jpg" class="kiskep2"><p id ="soriinfo">Az Igazság Ligája új horrorral néz szembe: a serdülőkorral! Superman, Batman, Csodanő, Flash, Cyborg, Zöld Lámpás és Vixen meglepődve tapasztalják, hogy nemcsak a Maradék nevű furcsa világban kerültek bele, hanem még tinédzserekké is változtak. Eközben a Maradék hősei – Ruby, Weiss, Blake és Yang – rájönnek, hogy világuk rejtélyes módon megváltozott. Vajon az Igazság Ligája és a RWBY csapat egyesített ereje visszaállíthatja a Maradék világát a normális kerékvágásba, mielőtt egy szupererős Grimm elpusztítana mindent, amit ismernek?<br><br>Előzetes: <a  title="Előzetes" onclick="Mehet('https://mega.nz/embed/bktAUAxQ#teZABYQLTb80mSSgwvRgvPyp83GJyy54Zl-tT-KB6gw')">Ugrás a videóhoz</a></p>`,
            episodes: [ // Nothing
            ]
        },
        {
            title: "Trailers",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Trailers
            de: `<img src="images/rwby_team.png" class="kiskep2"><p id ="soriinfo">A szokásos előzetesekkel ellentétben az RWBY előzetesei nem a sorozat animációit használták fel, hanem eredeti, önálló animációs rövidfilmek voltak, amelyek saját egyedi történeteiket mesélték el. Ebben az értelemben inkább a sorozat előzményeiként viselkedtek, mint a tényleges előzetesek.<br><br>Minden előzetest egy bizonyos szín és betű utal, és egy, az adott témáknak megfelelő karaktert tartalmaz, amely egy kicsit elárulja a központi szereplők történetét. Például a "Piros" vagy "R" trailerben szerepelt a Ruby Rose karakter.</p>`,
            episodes: [ // https://rwby.fandom.com/wiki/Trailers
                {
                    title: "Red Trailer",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/upV0ka5L#aQg1tzMBXDSIvOUBkUZ3HJXlr-JAGZE1LTKqjx0fTTE" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">„<i>Mindannyian elvesztettünk valamit, és láttam, hogy a veszteség milyen hatással lehet az emberekre. De ha minden alkalommal feladnánk, amikor veszítettünk, akkor soha nem tudnánk előre lépni.</i>”<br><span style="float:right;">- Ruby Rose</span>&nbsp</p></td>`
                },
                {
                    title: "White Trailer",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/i1Ml2aIb#r25DZ3hpSJZTIbtSpr6i--JH1_NmAqbbQR5zGRXq2ZY" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">„<i>Nem tudom, kinek képzeli magát, de hadd mondjam el, ki vagyok: egy hős unokája vagyok, és egy gazember gyermeke. Egy bukott Királyság polgára vagyok, és a semmi örököse. Engem nem a nevem határoz meg, mert én leszek az, aki meghatározza.</i>”<br><span style="float:right;">- Weiss Schnee</span>&nbsp</p></td>`
                },
                {
                    title: "Black Trailer",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/v88H3C5T#VUPiMlIfmroW44_8ZAxCfRD9fpMXfiJtKvaupX35hyA" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">„<i>Egy egyszerű élet nem lenne az én életem! A családom, a barátaim, a kultúrám. Hozzájuk tartozom, éppúgy, mint ők hozzám. Mindezt feladni nem egyszerűség lenne, hanem árulás.</i>”<br><span style="float:right;">- Blake Belladonna</span>&nbsp</p></td>`
                },
                {
                    title: "Yellow Trailer",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/7ocRVTzJ#EyljGcpchRs7V69MpIWVMukp9SB60AHJYVqny293XYg" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">„<i>A veszteségeim, a kudarcaim. Ezek mindennél jobban formáltak azzá, aki vagyok, és megmutatták, hogyan kell fejlődnöm. Ha valami hiányzik, az nem azért van, mert elvesztettem. Ez azért van, mert még nem találtam meg. És ennek egyetlen módja a folytatás.</i>”<br><span style="float:right;">- Yang Xiao Long</span>&nbsp</p></td>`
                },
            ]
        },
        {
            title: "Shorts",// https://rwby.fandom.com/wiki/Trailers
            ti: "Szinopszis",
            de: `<img src="images/rwby_team_emblems.jpg" class="kiskep2"><p id ="soriinfo">Eredeti animációt és történetet tartalmaznak, ugyanúgy, mint a négy karakter előzetes.</p>`,
            episodes: [ // https://rwby.fandom.com/wiki/Trailers
                {
                    title: "Volume 4 Character Short",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/7pl0jLTQ#MRg9GKtJrcoqefyTnJdl7X_rCaCU4ztstKYtQ3i4Mlo" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">Több hónap telt el a Beacon bukása óta, és Remnant világa talpra áll. Nagy a feszültségek kerekednek... rengeteg életet vesztettek, és az RWBY csapat tagjai... megosztottak. Minden hősnőnk saját utazása előtt áll.</p></td>`
                },
                {
                    title: "Volume 5 Weiss Character Short",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/vtcAxYzI#YFi3L340R0ixWYlKO4_NZFEXow-MEOyB1eL3Gko3aKw" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">Weiss Schnee egész életében kiváltságos és elkényeztetett életet élt... de ez nem ment a saját nehézségek nélkül.</p></td>`
                },
                {
                    title: "Volume 5 Blake Character Short",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/qtNnXJ5Q#i5LwEkYWZmEgT4TYe4_HzWeCW8kaTL0Ys_9evRiSzmU" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A Fehér Agyar egykor békés szervezet volt, amely a Faunusok valódi egyenlőségéért küzdött. Az évek során azonban sok tag az erőszakos és szélsőséges taktikákat kezdte előnyben részesíteni, hogy tiszteletet követelhessen a Maradék embereitől. Bár Blake Belladonna végül úgy döntött, hogy elhagyja a Fehér Agyart és annak egyre növekvő terrorcselekményeit, nem minden barátja döntött így.</p></td>`
                },
                {
                    title: "Volume 5 Yang Character Short",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/mhkUSQ5J#o0QKkb9jlnl_hlaDI7wybPvjzjKqWxd4U_px6t2WV08" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">YTudod, hogy Ruby megállíthatatlan a kaszájával, de Yang ismeri a kézi küzdelem valódi erejét. Egy fegyvermentes edzés kellős közepén Yang meg tudja győzni a nővérét a fegyver nélküli harc fontosságáról?</p></td>`
                },
                {
                    title: "Volume 6 Adam Character Short",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/bllGjK7I#ghNmJO-Hpb83enUtZc4ejFFbJorh4ckJuJ-tXEx2SbM" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">Adam hajlandó lesújtani mindenkit, aki az igazság kiforgatott változatának útjába áll, és kijelentette, hogy harcol népe jogaiért, de az évek során egyre távolabb került ezektől az idealista állításoktól. Ő a vadság és a káprázat veszélyes kombinációja, akinek egyetlen célja az, hogy megkínozza volt partnerét, Blake Belladonnát, akit felelősnek tart a hatalomból való kiesésért.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: World of Remnant",
            ti: "Sorozat Szinopszis", // https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant
            de: `<img src="images/rwby_world_of_remnant_poster.jpg" class="kiskep2"><p id ="soriinfo">Remnant világa egy olyan hely, mely tele van mítikus mesékkel, veszélyes szörnyekkel, rejtett fenyegetésekkel és titokzatos történetekkel. Míg Remnant történelme hösők és bűnösök hőstetteit, valamint hétköznapibb emberek életét megörökítette, az ősi és titkos történelem nyomai szétszórva rejlenek a világ számos gyermekmeséjében. Ez az oldal a történelem és a legenda szereplőinek szól, mesék, amelyek nagyobb igazságokat rejtenek, és olyan élőlényekről szól, amelyekről a világ talán nem is tudja, hogy a mítoszokon kívül is léteznek.</p>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=-1
                {
                    title: "Dust / Por",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/DtMQnS5D#oNb7qSnczIsnF704pwDE3DKjAOqIrm608IFT0WwqHbw" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat első epizódja, amely Remnant történetét és tudományát taglalja. Ez az epizód a Porkristályok titokzatos erejével foglalkozik.</p></td>`
                },
                {
                    title: "Kingdoms / Királyságok",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/Kl0GGDbC#CLfPDYsqBRq_PNNSO2dA3nA9su7nTtFItvAGtLeZE5U" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">Egy kiegészítő sorozat második epizódja, amely a Remnant történetét és tudományát taglalja. Ebben a részben információkat tár fel a négy Királyság helyszíneiről, politikájáról és katonai struktúráiról.</p></td>`
                },
                {
                    title: "Grimm / Grimm",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">A rész amely a Remnant világának történetét és tudományát taglalja. Ez az epizód Grimm szörnyű lényeit vizsgálja.</p></td>`
                },
                {
                    title: "Aura / Aura",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">Ez az epizód az Aura erőteljes hatásait vizsgálja, egy olyan hatalmas erőt, amelyet minden élőlény védekezésre és támadásra egyaránt fel tud használni.</p></td>`
                },
                {
                    title: "Vytal Festival Tournament / Vytal Fesztivál Torna",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">Belemerülünk a "Vytal Fesztivál Torna" történetébe és céljába.</p></td>`
                },
                {
                    title: "Huntsmen / Vadászok",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">A Vadászok és Vadásznők foglalkozása, leírva pályájuk célját és magukat az Akadémiákat. Bemutat néhány akadémiát is, amelyeken a vadászok képzésén lévők résztvesznek.</p></td>`
                },
                {
                    title: "Cross Continental Transmit System / Kontinentális Átviteli Rendszer",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">7. rész rövid leírása</p><p id="ltwo">A "Cross Continental Transmit System" története és képességei, a létfontosságú vezeték nélküli kommunikációs hálózat, amely lehetővé teszi a királyságok számára, hogy kommunikálni tudjanak egymással.</p></td>`
                },
                {
                    title: "The Four Maidens / A Négy Hajadon",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">8. rész rövid leírása</p><p id="ltwo">Egy öreg varázslót, aki egyedül él a hegyekben, meglátogat négy nővér, akik a maguk egyedi módján kedvesek hozzá. Az első, Winter/Tél, meditációra és elmélkedésre ösztönzi; a második, a Spring/Tavasz, gyümölcsöt és virágot hoz neki, és újjáéleszti a kertjét; a harmadik, Summer/Nyár, meggyőzi őt, hogy lépjen ki, és ölelje át a világot; a negyedik pedig, a Fall/Ősz, arra készteti, hogy legyen hálás azért, amije van. Az öregúr a kedvességüktől meghatva nagy hatalmat ad a négy nővérnek, hogy továbbmenjenek a Remnant világán, és továbbra is megosszák ajándékaikat. A négy nővér megígéri, hogy évente visszatérnek és meglátogatják.</p></td>`
                },
                {
                    title: "Vale / Vale",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">9. rész rövid leírása</p><p id="ltwo">Vale királysága és az általa lefedett területek.</p></td>`
                },
                {
                    title: "Mistral / Mistral",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">10. rész rövid leírása</p><p id="ltwo">Mistral királysága és kulturális öröksége, beleértve a kulturált felső osztályt és a jól felszerelt földalattit. Mistral két távoli városát, Windpath-ot és Kuchinasi-t említik.</p></td>`
                },
                {
                    title: "Atlas / Atlas",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">11. rész rövid leírása</p><p id="ltwo">Az Atlas Királysága, eredeti nevén Mantle. Az északra, Solitas kopár, hideg kontinensére utazó telepesek alapították, Mantle lakosságát a zord éghajlat védte a Grimmektől, de a túlélés érdekében gyorsan alkalmazkodni kényszerültek. Gyorsan megtanulták használni a Port és más technológiákat. A Nagy Háború végét követően az Atlas Akadémiát az eredeti Mantle városától északra alapították. Az Akadémia és területei hamarosan Mantle-t beárnyékolták, és végül a Királyság új fővárosává és névadójává váltak.</p></td>`
                },
                {
                    title: "Vacuo / Vacuo",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">12. rész rövid leírása</p><p id="ltwo">Vacuo királyságának története. Egykor rejtett paradicsom volt. De Vacuo-t a többi királyság meghódította, és ezt követően Remnant egyik legnehezebben élhető helyévé változott.</p></td>`
                },
                {
                    title: "Between Kingdoms / Királyságok között",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">13. rész rövid leírása</p><p id="ltwo">Bemutatja a főbb királyságokon kívüli helyeket Renmant világában, beleértve a falvak létezésének okait és a veszélyeket, amelyekkel szembe kell nézniük.</p></td>`
                },
                {
                    title: "Faunus / Faunus",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">14. rész rövid leírása</p><p id="ltwo">A Faunus-ok története, genetikájuk és az emberekkel való kapcsolatuk.</p></td>`
                },
                {
                    title: "Schnee Dust Company / Schnee Por Vállalat",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">15. rész rövid leírása</p><p id="ltwo">A Remnant leghíresebb Por cégének árnyas háttértörténete.</p></td>`
                },
                {
                    title: "The Great War / A Nagy Háború",
                    sourceCode: iimmgg,
                    desc: `<td id="leiras"><p id="lone">16. rész rövid leírása</p><p id="ltwo">Qrow továbbra is többet mesél a Remnant világáról, ezúttal egy hatalmas háborúról beszél, amely örökre megváltoztatta a világot. Egyben jobban betekintést nyújt abba is, hogy miért van a világ a jelenlegi állapotában.</p></td>`
                }
            ]
        },
        {
            title: "RWBY: Fairy Tales", // +(szino.) https://rwby.fandom.com/wiki/RWBY:_Fairy_Tales
            ti: "Szinopszis", // ep+: https://tvtropes.org/pmwiki/pmwiki.php/WebAnimation/RWBYFairyTales
            de: `<img src="images/rwby_fairy_tales_poster.jpg" class="kiskep2"><p id ="soriinfo">Egy minisorozat, amely Renmant leghíresebb tündérmeséit kelti életre soha nem látott formában.<br><br>„<i>Világunknak hosszú titokzatos múltú története van. Bár lehet, hogy nem tudjuk meg a kívánt válaszokat. Vannak történeteink; horror- és hősies történetek, amelyek többet árulnak el, mit amit tudunk. És végül nem is fog számítani se a múltunk, se a jövőnk, de egy dolog biztos: a történetek fennmaradnak.</i>”<br><span style="float:right;">- Ozpin Professzor</span>&nbsp;</p>`,
            episodes: [ // https://www.imdb.com/title/tt15830868/episodes?season=1&ref_=tt_eps_sn_1
                {
                    title: "The Grimm Child / A Grimm Gyermek",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/v8MkQYAY#n8KNf5FHx5Igay_3BAQu9bu6DiAy24Y5SRTzPFkab1A" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">1. rész rövid leírása</p><p id="ltwo">A Grimmek sétáló borzalmak, amelyek a vadonban járnak... de vannak olyanok, amelyek közelebb hozzák a rettegést az otthonhoz.</p></td>`
                },
                {
                    title: "The Hunter's Children / A Vadász Gyermekei",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/jxFwGRYD#ZBRI6Ba5S6zuDRemgs_w6M-e8qBdQ5y7BnouKMRnrbM" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">2. rész rövid leírása</p><p id="ltwo">Egy magányos vadász egy mocsaras falut véd, amíg be nem tör a katasztrófa. A gyerekei felveszik a palástot?</p></td>`
                },
                {
                    title: "The Shallow Sea / A Sekély Tenger",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/P8kiQThL#TLcf4scF1JhUdqL-nNMD-uQF694xzS2eTCbntWyuPpc" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">3. rész rövid leírása</p><p id="ltwo">Ozpin két különböző eredetmítoszt mesél a Faunuszokkal kapcsolatban.</p></td>`
                },
                {
                    title: "The Indecisive King / A Határozatlan Király",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/z10SRaRQ#4KZFUi1ajodRd3YLDAXTENBoRwSCbxMl0OCsfiBVwmo" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">4. rész rövid leírása</p><p id="ltwo">A királyi ajándék többnek bizonyul, mint amilyennek látszik.</p></td>`
                },
                {
                    title: "The Girl in the Tower / A Lány a Toronyban",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/e8FXQQbD#FNwzxDCAid9qzEc_QbA3AxWUqOgBLYivBNN0bbYzpvw" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">5. rész rövid leírása</p><p id="ltwo">Nem minden történetnek van egy „boldog, amíg meg nem hal.”</p></td>`
                },
                {
                    title: "The Warrior in the Woods / A Harcos az Erdőben",
                    sourceCode: `<iframe width="660" height="380" frameborder="0" src="https://mega.nz/embed/rw11nCaB#g5t3hRAybdFLr2cX3t7Ic3cYb6j8emhCtRRt_4W9z7k" allowfullscreen ></iframe>`,
                    desc: `<td id="leiras"><p id="lone">6. rész rövid leírása</p><p id="ltwo">Egy fiatal fiú találkozik egy titokzatos harcossal, aki messziről védi faluját.</p></td>`
                }
            ]
        },
        {
            title: "Zenék",
            ti: "Szinopszis", // Nothing
            de: `<img src="images/loading_poster.jpg" class="kiskep2"><p id ="soriinfo">Itt olyan openingek, endingek és betétdalok szerepelnek, amiket le akartam fordítani. Így sikerültek :)<br><br>Openingek: RWBY 5.fejezet, RWBY 8.fejezet, RWBY 9.fejezet, SSnVR<br>Endingek: ---<br>Betétdalok: ---</p>`,
            episodes: [ // Nothing
                {
                    title: "RWBY: The Triumph",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/9HcEHMDQSFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<td id="leiras"><p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 5.fejezet Openingje. "The Triumph"<br>Komponálta: Jeff Williams<br>Énekli: Casey Lee Williams</p></td>`
                },
                {
                    title: "RWBY: For Every Life",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/yel_We3OW7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<td id="leiras"><p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 8.fejezet Openingje. "For Every Life"<br>Komponálta: Jeff Williams<br>Énekli: Casey Lee Williams</p></td>`
                },
                {
                    title: "RWBY: Inside",
                    sourceCode: `<iframe title="indavideo video player" allowfullscreen scrolling="no" class="indavideo-player"  id="player-255e165111" type="text/html" width="660" height="380" src="//embed.indavideo.hu/player/video/255e165111" frameborder="0"></iframe>`,
                    desc: `<td id="leiras"><p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a RWBY 9.fejezet Openingje. "Inside"<br>Komponálta: Martin Gonzalez, Casey Lee Williams<br>Énekli: Casey Lee Williams</p></td>`
                },
                {
                    title: "Shokei Shoujo no Virgin Road: Paper Bouquet",
                    sourceCode: `<iframe width="660" height="380" src="https://www.youtube.com/embed/iL9NGfxSg7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                    desc: `<td id="leiras"><p id="lone">- Leírás -</p><p id="ltwo">Ez a dal a <a href="https://myanimelist.net/anime/47162/Shokei_Shoujo_no_Virgin_Road" target="_blank" title="MAL link">Shokei Shoujo no Virgin Road</a> Openingje.<br>Komponálta: Cassie Wei & Yamato Kasai<br>Énekli: Cassie Wei / Mili</p></td>`
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
            <li class="target" onclick="EpisodeChange(${(+i + 1)})">${i + 1}. rész</li>
        `;
    }
    document.getElementById("episodes").innerHTML = pagination;

}

function ProjectChange(n) {
    localStorage.removeItem('result');
    switch (n){
        case 1:
            localStorage.setItem('result', 1); // 1.fejezet
            break;
        case 2:
            localStorage.setItem('result', 2); // 2.fejezet
            break;
        case 3:
            localStorage.setItem('result', 3); // 3.fejezet
            break;
        case 4:
            localStorage.setItem('result', 4); // 4.fejezet
            break;
        case 5:
            localStorage.setItem('result', 5); // 5.fejezet
            break;
        case 6:
            localStorage.setItem('result', 6); // 6.fejezet
            break;
        case 7:
            localStorage.setItem('result', 7); // 7.fejezet
            break;
        case 8:
            localStorage.setItem('result', 8); // 8.fejezet
            break;
        case 9:
            localStorage.setItem('result', 9); // 9.fejezet
            break;
        case 10:
            localStorage.setItem('result', 10); // RWBY x JL
            break;
        case 11:
            localStorage.setItem('result', 11); // RWBY Trailers
            break;
        case 12:
            localStorage.setItem('result', 12); // RWBY: Character Shorts
            break;
        case 13:
            localStorage.setItem('result', 13); // RWBY: World of Remnant
            break;
        case 14:
            localStorage.setItem('result', 14); // RWBY: Fairy Tales
            break;
        case 15:
            localStorage.setItem('result', 15); // Random Zene
            break;
    }
}

function EpisodeChange(n) {
    // Megkeressük a sorozatot a listából
    let series = (+localStorage.getItem('result')), episode = n;
    // Lineáris keresés (most epizódot keresünk) sorozat > epizód
    if(window.location.pathname.includes("/skelyxd_v.html")){
        //console.log("VALID URL")
        document.getElementById("episodeTitle").textContent = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].title}`;
        document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].sourceCode}`;
        document.getElementById("synopsis").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].desc}`;
    } else console.log("INVALID URL")
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].title}`); // <- Kiválasztott sorozat címe
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].title}`); // <- Kiválasztott sorozat, kiválasztott epizódjának címe
    // alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].sourceCode}`); // <- Kiválasztott sorozat, kiválasztott epizódjának source code-ja.
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
//https://www.w3schools.com/jsref/prop_style_display.asp

function ISeeYou(n){
    const a = document.getElementsByClassName("whatisthis")[n];
    a.style.display == "inline" ? a.style.display = "none" : a.style.display = "inline";
}
var db = 0;
function ProjectHide(){
    const p = document.getElementsByClassName("pallhide");

    if(db == 0){
        for (var i = 0; i < p.length; ++i) {
            p[i].style.display = "inline-block";
        }
        db++;
    }
    else {
        for (var i = 0; i < p.length; ++i) {
            p[i].style.display = "none";
        }
        db=0;
    }
    
}