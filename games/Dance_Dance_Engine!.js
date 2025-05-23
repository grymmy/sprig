/*
@title: Dance Dance Engine!!
@description: Dance Dance Engine!! is a rhythm game creation tool that simplifies the process of building rhythm games by allowing you to add note names and music to create your game. It's designed to be a revolutionary way to make rhythm games, with the theme centered around music and rhythm. For more information on how to use the engine, you can check out the provided [documentation](https://shibedevsite.neocities.org/DDE/whatis).
@author: Shibedev12
@tags: ['music']
@addedOn: 2024-07-22
First time? Check out my code: its not half bad!

For Documentation on how to work with this, check out my site!
https://shibedevsite.neocities.org/DDE/whatis
*/
// The music. It loops.
const bgm = tune`
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + D4/166.66666666666666 + A4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: D5-166.66666666666666 + D4/166.66666666666666 + G4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: D5-166.66666666666666 + G4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: D5-166.66666666666666 + C4/166.66666666666666 + G4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + C4/166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + C4/166.66666666666666 + B4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + C4/166.66666666666666 + B4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + D4/166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + D4/166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + D4/166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + D4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + D4/166.66666666666666 + B4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + B4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + D4/166.66666666666666 + B4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + D4/166.66666666666666 + A4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: D5-166.66666666666666 + G4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + B5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + C4/166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: G5-166.66666666666666 + C5^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: G5-166.66666666666666 + D4/166.66666666666666 + C5^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: F5-166.66666666666666 + B4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + D4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + D4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666,
166.66666666666666: E5-166.66666666666666 + C4/166.66666666666666 + A4^166.66666666666666 + A5~166.66666666666666`;
const up = "u";
const down = "d";
const left = "l";
const right = "r";
const bg = "b";
const upshade = "i";
const downshade = "j";
const leftshade = "k";
const rightshade = "m";
const uphit = "z";
const downhit = "x";
const lefthit = "c";
const righthit = "v";
const wall = "p";
const bgmPlayback = playTune(bgm, Infinity);
setLegend(
  [wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0200000000020000
0000020000000000
0000000000000000
0020000000000020
0000000000000000
0000000000000000
0000000002000000
0000000000000000
0000000000000200
0000000000000000
0020000000200000
0000000000000000
0000000000000000`],
  [up, bitmap`
................
................
................
........8.......
.......888......
......8.8.8.....
.....8..8..8....
....8...8...8...
...8....8....8..
........8.......
........8.......
........8.......
........8.......
................
................
................`],
  [down, bitmap`
................
................
................
........8.......
........8.......
........8.......
........8.......
...8....8....8..
....8...8...8...
.....8..8..8....
......8.8.8.....
.......888......
........8.......
................
................
................`],
  [left, bitmap`
................
................
................
........8.......
.......8........
......8.........
.....8..........
....8...........
...8888888888...
....8...........
.....8..........
......8.........
.......8........
........8.......
................
................`],
  [right, bitmap`
................
................
................
.......8........
........8.......
.........8......
..........8.....
...........8....
...8888888888...
...........8....
..........8.....
.........8......
........8.......
.......8........
................
................`],
  [bg, bitmap`
0000000000000000
0000000000000000
0000000000000000
0200000000020000
0000020000000000
0000000000000000
0020000000000020
0000000000000000
0000000000000000
0000000002000000
0000000000000000
0000000000000200
0000000000000000
0020000000200000
0000000000000000
0000000000000000`],
  [upshade, bitmap`
................
................
........L.......
.......L2L......
......L222L.....
.....L2L2L2L....
....L2LL2LL2L...
...L2L.L2L.L2L..
..L2L..L2L..L2L.
..LL...L2L...LL.
.......L2L......
.......L2L......
.......L2L......
.......LLL......
................
................`],
  [downshade, bitmap`
................
................
.......LLL......
.......L2L......
.......L2L......
.......L2L......
..LL...L2L...LL.
..L2L..L2L..L2L.
...L2L.L2L.L2L..
....L2LL2LL2L...
.....L2L2L2L....
......L222L.....
.......L2L......
........L.......
................
................`],
  [leftshade, bitmap`
................
................
........LL......
.......L2L......
......L2L.......
.....L2L........
....L2L.........
...L2LLLLLLLLL..
..L2222222222L..
...L2LLLLLLLLL..
....L2L.........
.....L2L........
......L2L.......
.......L2L......
........LL......
................`],
  [rightshade, bitmap`
................
................
......LL........
......L2L.......
.......L2L......
........L2L.....
.........L2L....
..LLLLLLLLL2L...
..L2222222222L..
..LLLLLLLLL2L...
.........L2L....
........L2L.....
.......L2L......
......L2L.......
......LL........
................`],
  [uphit, bitmap`
................
................
........L.......
.......LHL......
......LHHHL.....
.....LHLHLHL....
....LHLLHLLHL...
...LHL.LHL.LHL..
..LHL..LHL..LHL.
..LL...LHL...LL.
.......LHL......
.......LHL......
.......LHL......
.......LLL......
................
................`],
  [downhit, bitmap`
................
................
.......LLL......
.......LHL......
.......LHL......
.......LHL......
..LL...LHL...LL.
..LHL..LHL..LHL.
...LHL.LHL.LHL..
....LHLLHLLHL...
.....LHLHLHL....
......LHHHL.....
.......LHL......
........L.......
................
................`],
  [lefthit, bitmap`
................
................
........LL......
.......LHL......
......LHL.......
.....LHL........
....LHL.........
...LHLLLLLLLLL..
..LHHHHHHHHHHL..
...LHLLLLLLLLL..
....LHL.........
.....LHL........
......LHL.......
.......LHL......
........LL......
................`],
  [righthit, bitmap`
................
................
......LL........
......LHL.......
.......LHL......
........LHL.....
.........LHL....
..LLLLLLLLLHL...
..LHHHHHHHHHHL..
..LLLLLLLLLHL...
.........LHL....
........LHL.....
.......LHL......
......LHL.......
......LL........
................`],
);
setBackground(bg);
setSolids([wall, up, down, left, right]);
let level = 0;
const levels = [
  map`
..pppp..
..kjim..
........
........
........
........
........
..ldur..`
];

setMap(levels[level]);

setPushables({
  [up]: [],
  [down]: [],
  [left]: [],
  [right]: []
});
// NOT FOR YOU (Movement Code.)
let isWKeyPressed = false;
onInput("w", () => {
  if (!isWKeyPressed) {
    const upshadeSprite = getFirst(upshade);
    const note = getFirst(up);
    if (upshadeSprite && note && (note.y === upshadeSprite.y || note.y === 0)) {
      upshadeSprite.type = uphit;
      isWKeyPressed = true;
      setTimeout(() => {
        upshadeSprite.type = upshade;
        isWKeyPressed = false;
        //        moveNoteToBottom("u");
      }, 100);
    }
  }
});

let isAKeyPressed = false;
onInput("a", () => {
  if (!isAKeyPressed) {
    const leftshadeSprite = getFirst(leftshade);
    const note = getFirst(left);
    if (leftshadeSprite && note && (note.y === leftshadeSprite.y || note.y === 0)) {
      leftshadeSprite.type = lefthit;
      isAKeyPressed = true;
      setTimeout(() => {
        leftshadeSprite.type = leftshade;
        isAKeyPressed = false;
        //        moveNoteToBottom("l");
      }, 100);
    }
  }
});

let isSKeyPressed = false;
onInput("s", () => {
  if (!isSKeyPressed) {
    const downshadeSprite = getFirst(downshade);
    const note = getFirst(down);
    if (downshadeSprite && note && (note.y === downshadeSprite.y || note.y === 0)) {
      downshadeSprite.type = downhit;
      isSKeyPressed = true;
      setTimeout(() => {
        downshadeSprite.type = downshade;
        isSKeyPressed = false;
        //        moveNoteToBottom("d");
      }, 100);
    }
  }
});

let isDKeyPressed = false;
onInput("d", () => {
  if (!isDKeyPressed) {
    const rightshadeSprite = getFirst(rightshade);
    const note = getFirst(right);
    if (rightshadeSprite && note && (note.y === rightshadeSprite.y || note.y === 0)) {
      rightshadeSprite.type = righthit;
      isDKeyPressed = true;
      setTimeout(() => {
        rightshadeSprite.type = rightshade;
        isDKeyPressed = false;
        //        moveNoteToBottom("r");
      }, 100);
    }
  }
});
// NOT FOR YOU (Defines note types and makes everything else about moving notes up.)
const moveNotesUp = () => {
  const noteTypes = [up, down, left, right];
  for (const type of noteTypes) {
    const noteSprites = getAll(type);
    for (const note of noteSprites) {
      if (note.y > 0) {
        note.y -= 1;
      } else {}
    }
  }
};

setInterval(() => {
  moveNotesUp();
}, 80);


function moveNoteToBottom(noteType) {
  const bottomY = height() - 1; // NOT FOR YOU! (Set the bottom Y position based on the height of the screen)
  const note = getFirst(noteType);
  if (note) {
    note.y = bottomY; // ALSO NOT FOR YOU! (Moves the note instantly to the bottom)
  }
}

const music = ["u", "l", "d", "d", "r", "d", "d", "l", "b", "b", "a"];
let musicIndex = 0; // You won't find an easter egg by changing this. you'll just break it.

const delay = 900;

// STILL NOT FOR YOU. (This makes the notes move up. uses said delay.)
function executeMusicCodeStep() {
  if (musicIndex < music.length) {
    const key = music[musicIndex];
    setTimeout(() => {
      moveNoteToBottom(key);
      musicIndex++;
      executeMusicCodeStep(); // NOT FOR YOU!!!!!! (Recursively continues with the next step)
    }, delay);
  }
}

setTimeout(() => {
  executeMusicCodeStep();
}, 0);
