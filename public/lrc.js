function fixSong(){
var audio=document.getElementById("mtAudio");
var audioSrc=audio.src;
audioSrc="https://dl.sndup.net/" + lrc[songID].songB + ".mp3";
mtAudio.setAttribute('src',audioSrc);
console.log(audioSrc);
document.getElementById("mtAudio").play()
}

const lrc = [
{id:"def",
song:"tunes/main",
songB:"mhz7/type",
text:"This website is about Covid-19 virus."
},

{id:"boh",
song:"English/Queen - Bohemian Rhapsody",
songB:"5h9m/Queen - Bohemian Rhapsody",
text:`Is this the real life?
Is this just fantasy?
Caught in a landside,
No escape from reality
Open your eyes,
Look up to the skies and see,
I'm just a poor boy, I need no sympathy,
Because I'm easy come, easy go,
Little high, little low,
Any way the wind blows doesn't really matter to
Me, to me
Mamaaa,
Just killed a man,
Put a gun against his head, pulled my trigger,
Now he's dead
Mamaaa, life had just begun,
But now I've gone and thrown it all away
Mama, oooh,
Didn't mean to make you cry,
If I'm not back again this time tomorrow,
Carry on, carry on as if nothing really matters
Too late, my time has come,
Sends shivers down my spine, body's aching all
The time
Goodbye, everybody, I've got to go,
Gotta leave you all behind and face the truth
Mama, oooh
I don't want to die,
I sometimes wish I'd never been born at all.
I see a little silhouetto of a man,
Scaramouch, Scaramouch, will you do the Fandango!
Thunderbolts and lightning, very, very frightening me
Galileo, Galileo
Galileo, Figaro - magnificoo
I'm just a poor boy nobody loves me
He's just a poor boy from a poor family,
Spare him his life from this monstrosity
Easy come, easy go, will you let me go
Bismillah! No, we will not let you go
(Let him go!) Bismillah! We will not let you go &times;
(Let me go) Will not let you go
(Let me go)(Never) Never let you go
(Let me go) (Never) let you go (Let me go) Ah
No, no, no, no, no, no, no
Oh mama mia, mama mia, mama mia, let me go
Beelzebub has a devil put aside for me, for me,
For meee
So you think you can stop me and spit in my eye
So you think you can love me and leave me to die
Oh, baby, can't do this to me, baby,
Just gotta get out, just gotta get right outta here
Nothing really matters, Anyone can see,
Nothing really matters,
Nothing really matters to me
Any way the wind blows...`
},

{id:"sama",
song:"tunes/in",
songB:"skcs/intro",
texts:"Not provided",
text:`
Douka PLEASE
CAN YOU KEEP MY SECRET

KIRAKIRA to-kaga-yaku MIRAA
Watashi wa donna fuu ni utsutte iru no

HOLAHOLA tote maneku mirai
Kore kara donna KOTO ga-ohoru no

Meniii mii-te iru-MO NO-ga-SUU BETE dewa-nai karaaa

Muga muchuu-na THAT'S ALL RIGHT
Mayowa-wanai de I WANNA TRY
Jibun no KIMOCHI ni mas-sugu-de itai
Dakedo-hitosoku-ya IT'S A GOOD NIGHT
Dare-ni-mo BARE-takunai NAISHO tte aru-mono-dakara
Munega chotto-wo MY SECRET
437`},
{id:"ks",
song:"tunes/ks",
songB:"yk3h/ks",
texts:"Not provided",
text:`
Onna no-ko hajime-mashita
Tameiki wa vioron no shirabe-ni nite-
Ah-kai mi ha-jike-chatta
Mada ana-ta wo-shiranai

"kon-na-koto hajime-te" tte
Mana-zashi wa akuno hana sakimi-darete-
Mo-ri eh to suzuku basu-sutopp
Demo anata-wa-surenai

Karameta hada-ni mya-kuutsu
Koi-no shiruett ~~ shiruett
Karui mah-ou
Usot-suki na-kuchibiru sou - asaneteru - dakeno

Nee kamisama
Warui koni naritai yo
Ii koni shiteru-kara – onegai dayo
Zurui-koto-sasetoiteee
Ii koto shitai-nara
Sukaato hiru-gaeshite
Sugu-kaeruu-yo
Doyoubi wa hare-sou-daaa

Kamisama, hajimemashita
480`},
{id:"ks2",
song:"tunes/ks2",
songB:"dwy7/ks2",
texts:"None",
text:`
Ittai kono yo wa dou natte iru no ka na? 
Watashi wa sora wo tobi-koete
Chikyuu no mawari wo kuru-kururi 
Getsu ka sui moku kin do nichi
Kurikaesu kono baiorizumu de
Zenjidou no sentakki mitai nante
Sou I‚Äôm just spinning around, around, around the world!
Suki ni kiri ga nai ga nai ga nai kara
Spinning around, around, around the world
Toki ni modokashii omoi tsutaetaikara
Saikin dou nano? nante iwa rerya
I'm fine thank you datte iudesho
Gungun tengu ni naru watashi wo
Sotto soba ni kite shikatte
Aishita toki kara watashi ga kamisama

Kamisama watashi ga anata no kamisama mitai ne
`
},
{id:"ksone",
song:"tunes/ksone",
songB:"yv34y/ksone",
texts:"Not provided",
text:`
Ah-ah-ah-ah
Ah-ah-ah-ah

Kami sama onegai da
Boku no ano hito ni
Aitai no sa

Ah-ah-ah-ah
Ah-ah-ah-ah

Kamisama tsurainda
Kyou mo matta noni
Konekatta
Onegai ga aru no
Kamisama boku wo tasukete
Ah-ah-ah-ah
Ah-ah-ah-ah

Kamisama mou osoi
Ano ko wa touku sora ni
Kieta no sa
Yeah, yeah, yeah

Sayonara Baby, good-bye, good-bye
Sayonara Baby, good-bye, good-bye
Baby
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
Good-bye (Ah-ah-ah)
`
},
{id:"tk",
song:"tunes/tk",
songB:"xhsc/tk",
texts:"Not provided",
text:`
Ato dore kurai no kyori-o-tsuki-e arui-tara
Ato dore kurai no samui-yoru o kasane-tara
Ato dore kurai no sayonara o nagashi-tara
Mabuta no-oku-no izumi ga kare-hateru-toka
Sen-nen go-mo kitto tsuzuku-darō
Sō-omot-teta kūdō o
Mitashite-afu--rette shimau-hodo-no
Kono kimochi wa nanda?

Tanjundayo
Maiasa no "ohayō"
Eiga mitai ni aoi natsu
No umi o mite
Tōi tokoro de ibasho o shiri ima to ima o
Kasaneteku, firumu no yō ni
Nankai mo torinaoshida
Iroaseru yori, irodoru yori,
Kimi no iru keshiki ga koina
949`},
{id:"tk2",
song:"tunes/tk2",
songB:"h8pk/tk2",
texts:"Not provided",
text:`
Owari o matsu setsunani kimi wa
Koko ni nani o nokosu nodarou
Utagai shiranu kotoba ni towa o
Hoshizora e to chikatta

Tatta ichido no deai de
Kawatte itta kono sekai
Kimi ni dake wa kakusenainda
Furete itai to iu negai
Yorokobi mo kanashimi mo
Sono toki ga otozureru sonohi made
Shinjite miyou
`},
{id:"death",
song:"tunes/dn",
songB:"c42n/dnp",
texts:"Not provided",
text:`
The World by Nightmare

Hirogaru yami no naka kawashiatta kakumei no chigiri
Darenimo jama saseru wake ni wa ikanai kara

Kajitsu ga tsugeta mirai
Yume, risou ni kaeru

Daremo ga nozon da "owari" wo...

Hirogaru yami no naka kawashiatta kakumei no chigiri
Darenimo jama saseru wake ni wa ikanai

Itsuka boku ga misete ageru
Hikari kagayaku sekai wo
`},
{id:"oto",
song:"tunes/oto",
songB:"x2pnf/oto",
texts:"Not provided.",
text:`
Moshimoshi kikoemasu ka?

Ukande wa kieru hibi no awa wo
Aoidemiteta yoru no koto
Shikai ni nijinda amanogawa mo
Yuraidemieta ii mono da wa

Moshimoshi kikoemasu ka?

Dareka ni hanaseru koto demo nai kara
Kamisama ni denwa shite kiitemiru yo

Moshimo kyou ga
Ashita janakute kinou nara
Ashita ga kyou de kinou wa ototoi da
Ototoi oide matteru yo
Fune wa koko ni tomatteru
Kyou ga kyou demo nakute
Ano hi nara aa ii noni naa
`},
{id:"wto",
song:"english/Rossini-William Tell Overture-Final",
songB:"hqtt/Rossini-William%20Tell%20Overture-Final",
text:`Rossini: William Tell Overture!`},
{id:"e",
song:"tunes/rushe",
songB:"z6fq/rushe.mp3", //This is not a mistake
text:`The rush E...`},
{id:"die",
song:"tunes/di",
songB:"d5qn/di",
text:"Dies Irae (Day of Wrath)"},
{id:"carol",
song:"christmas/Carol of the bells",
songB:"",
text:`
Hark how the bells
Sweet silver bells
All seem to say
Throw cares away
Christmas is here
Bringing good cheer
To young and old
Meek and the bold

Gaily they ring
While people sing
Songs of good cheer
Christmas is here
Merry, Merry, Merry, Merry Christmas
Merry, Merry, Merry, Merry Christmas

On on they send
On without end
Their joyful tone
To every home

Hark how the bells
Sweet silver bells
All seem to say
Throw cares away
Christmas is here
Bringing good cheer
To young and old
Meek and the bold

Gaily they ring
While people sing
Songs of good cheer
Christmas is here
Merry, Merry, Merry, Merry Christmas
Merry, Merry, Merry, Merry Christmas

Ding dong ding dong
That is their song
With joyful ring
All caroling
One seems to hear
Words of good cheer
From everywhere
Filling the air

Oh how they pound
Raising the sound
O'er hill and dale
Telling their tale
Gaily they ring
While people sing
Songs of good cheer
Christmas is here
Merry, Merry, Merry, Merry Christmas
Merry, Merry, Merry, Merry Christmas

On on they send
On without end
Their joyful tone
To every home
Ding dong ding dong
`}
];

function songLyrics(name){
if(Object.values(lrc).some(v => v.id === name)){
var index = lrc.findIndex(lrc => lrc.id === name);
/*The bottom line is very important
double bracket is that the in bracket is considered first*/
if((index==2||index==3||index==4||index==5||index==6||index==7||index==8||index==9) && lock==unll){
Dev();
txt=lrc[index].text;}
else if((index==2||index==3||index==4||index==5||index==6||index==7||index==8||index==9) && lock!=unll){
txt=lrc[index].texts;}
else{txt=lrc[index].text;}
songID=index;
bash("exit,menu");}
else if(name == "") {console.log("Available songs: ") 
 console.log(lrc.map(lrc => lrc.id))}
else console.error("Sorry! The requested song doesn't exist.");
}