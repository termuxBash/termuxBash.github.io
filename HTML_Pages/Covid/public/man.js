const man = [
{name:"Sp fam",
id:17977,rt:4},
{name:"Arm gi",
id:3638,rt:2},
{name:"Maid sa",
id:437,rt:5},
{name:"Wolf black",
id:2689,rt:3},
{name:"Fruit basket cake",
id:273,rt:5},
{name:"Kimi ni 👎",
id:482,rt:0,
on:'S1 13'},
{name:"S. A.",
id:1353,rt:3},
{name:"My little mon",
id:1354,rt:2},
{name:"Ouran high",
id:294,rt:3},
{name:"Kamisam",
id:480,rt:5},
{name:"Lov Com",
id:450,rt:2},
{name:"Torado",
id:232,rt:4},
{name:"Hori",
id:15733,rt:4},
{name:"Say I",
id:1528,rt:3},
{name:"Golden tim",
id:849,rt:4},
{name:"Skip be",
id:357,rt:3.5},
{name:"Tonik",
id:949,rt:100,
on:"S3?"},
{name:"L is war",
id:123,rt:5},
{name:"Board sch jul",
id:1623,rt:3},
{name:"Monthly",
id:530,rt:3},
{name:"Eat pan",
id:70,rt:4.5,
on:'mov 2h'},
{name:"Quintessential",
id:1368,rt:3.5},
{name:"Yam",
id:18341,rt:1.5},
{name:"Rdbunny",
id:149,rt:0.5},
{name:"My dd",
id:17930,rt:1.53,
on:'S2?'},
{name:"Komi communicate",
id:17906,rt:3.5,
on:'S3?'},
{name:"Your name",
id:10,rt:4,
on:'mov 2h'},
{name:"Rainbow day",
id:2074,rt:4},
{name:"Aoi (Blue) spring",
id:1055,rt:2},
{name:"Edo/ Tokyo revenge",
id:15585,rt:3.5},
{name:"Hay butter",
id:1274,rt:3},
{name:"Lookism",
id:18234,rt:2},
{name:"Dead book",
id:60,rt:4},
{name:"Starting D",
id:236,rt:4},
{name:"Weather with you",
id:111,rt:4.5,
on:'mov 2h'},
{name:"Assassination class",
id:372,rt:3},
{name:"Spirited away",
id:50,rt:2.5,
on:'mov 2h'},
{name:"Silent voice",
id:11,rt:3.5,
on:'mov 2h'},
{name:"Garden of words",
id:414,rt:1,
on:'mov 45m'},
{name:"Suzume",
id:18190,rt:3,
on:'mov 2h'},
{name:"5cm/s",
id:859,rt:1.5,
on:'mov 2h'},
{name:"Classroom of the",
id:713,rt:2.5},
{name:"Prince mono",
id:36,rt:2,
on:'mov 2h'},
{name:"The wind rose",
id:369,rt:3,
on:'mov 2h'},
{name:"Princess Kaguya",
id:270,rt:5,
on:'mov 2h'},
{name:"Whisper of the heart",
id:259,rt:3,
on:'mov 2h'},
{name:"Child chases lost voice",
id:1277,rt:2.5,
on:'mov 2h'},
{name:"Voice of far star",
id:2584,rt:1,
on:'mov 25m'},
{name:"Gin",
id:13,rt:5},
{name:"When marine was there",
id:360,rt:3,
on:'mov 2h'},
{name:"The boy n the hero",
id:15765,rt:0,
on:'mov 2h'},
{name:"Nausicaa The valley of win",
id:141,rt:0,
on:'mov 2h'}
];
var names=man.map(man => man.name.toLowerCase());
function search(nameFind){
// func works with 1 word only ?
nameFind=nameFind.split(" ")[0];
for(var i = 0; i < names.length; i++) { //Loop thr the names array
  words = names[i].split(" ");
  for(var j =0; j < words.length; j++){ //Loop thr the words array created by a names
    if(words[j].substring(0, nameFind.length) === nameFind){ // matches part of word from database to word to be searched
      //The above chops names array according to length of part of word to search
      //if it matches the word searched ie. nameFind then return i
      return i;
      alert(i)
      break;
    }
  }
 }
}
function mango(named){
var manIndex=search(named);
console.log("Name: ",man[manIndex].name);
console.log("Index: ",man[manIndex].id);
navigator.clipboard.writeText(man[manIndex].id)
console.log("Rating: ",man[manIndex].rt," ⭐");
console.log("Current: ",man[manIndex].on);
}