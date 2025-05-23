/*
@title: Tron
@description: "Tron" is a multiplayer adaptation of the classic light cycle game, featuring two players competing to outmaneuver each other by leaving trails that their opponent must avoid. Players must navigate a grid without colliding with trails or walls, aiming to force their opponent into an error to win.
@author: Robert Carmen
@tags: ['multiplayer']
@addedOn: 2022-10-30

An adaptation of the classic game, Tron. Enjoy!
v0.2
*/
//da tunes
const melody = tune`
114.06844106463879: c4^114.06844106463879 + b5^114.06844106463879,
114.06844106463879: c4^114.06844106463879 + e4-114.06844106463879 + f5-114.06844106463879 + a5^114.06844106463879 + b4-114.06844106463879,
114.06844106463879: d4^114.06844106463879 + f4-114.06844106463879 + e5-114.06844106463879 + b4-114.06844106463879,
114.06844106463879: e4^114.06844106463879,
114.06844106463879: f4^114.06844106463879 + f5-114.06844106463879 + d5-114.06844106463879 + e5^114.06844106463879,
114.06844106463879: g4^114.06844106463879 + g5-114.06844106463879 + c5-114.06844106463879 + e5^114.06844106463879,
114.06844106463879: f4-114.06844106463879,
114.06844106463879: g4-114.06844106463879 + e5^114.06844106463879,
114.06844106463879: a4-114.06844106463879,
114.06844106463879: b4-114.06844106463879 + e5^114.06844106463879,
114.06844106463879: f4^114.06844106463879 + e5^114.06844106463879 + g5-114.06844106463879,
114.06844106463879: e4^114.06844106463879 + g4-114.06844106463879 + f5-114.06844106463879,
114.06844106463879: d4^114.06844106463879 + f4-114.06844106463879 + e5^114.06844106463879 + c5-114.06844106463879,
114.06844106463879: e4-114.06844106463879 + c5-114.06844106463879 + a5^114.06844106463879,
114.06844106463879: a5^114.06844106463879,
114.06844106463879: e5^114.06844106463879 + g4^114.06844106463879 + a5^114.06844106463879,
114.06844106463879: e5^114.06844106463879 + a4^114.06844106463879 + a5^114.06844106463879,
114.06844106463879: f4-114.06844106463879,
114.06844106463879: f4-114.06844106463879 + g5/114.06844106463879,
114.06844106463879: e5^114.06844106463879 + c4/114.06844106463879 + f5-114.06844106463879 + g5/114.06844106463879,
114.06844106463879: c5-114.06844106463879 + c4/114.06844106463879 + e5-114.06844106463879,
114.06844106463879: c5-114.06844106463879 + e5^114.06844106463879 + c4/114.06844106463879 + a4-114.06844106463879,
114.06844106463879: f5-114.06844106463879 + e5^114.06844106463879 + c4/114.06844106463879 + g4-114.06844106463879,
114.06844106463879: e5-114.06844106463879,
114.06844106463879: g4-114.06844106463879 + e5^114.06844106463879 + a5^114.06844106463879,
114.06844106463879: a4-114.06844106463879 + f5-114.06844106463879 + c5/114.06844106463879 + a5^114.06844106463879,
114.06844106463879: e5-114.06844106463879 + c5/114.06844106463879 + a5^114.06844106463879,
114.06844106463879: e5^114.06844106463879 + g4-114.06844106463879 + b5^114.06844106463879,
114.06844106463879: a4-114.06844106463879 + e5^114.06844106463879 + b5^114.06844106463879,
114.06844106463879,
114.06844106463879: d5-114.06844106463879,
114.06844106463879: c5-114.06844106463879`
const fanfare = tune`
306.1224489795918,
306.1224489795918: c4/306.1224489795918,
306.1224489795918: d4/306.1224489795918,
306.1224489795918: e4/306.1224489795918 + g5/306.1224489795918,
306.1224489795918: f5/306.1224489795918,
306.1224489795918: e5/306.1224489795918 + e4/306.1224489795918,
306.1224489795918: f4/306.1224489795918,
306.1224489795918: g4/306.1224489795918 + d5/306.1224489795918,
306.1224489795918: c5/306.1224489795918,
306.1224489795918: b4/306.1224489795918,
306.1224489795918: f4~306.1224489795918,
306.1224489795918: g4~306.1224489795918,
306.1224489795918: a4~306.1224489795918,
306.1224489795918: c5~306.1224489795918,
306.1224489795918: e5~306.1224489795918,
306.1224489795918: g5~306.1224489795918,
4897.959183673469`
// p1 sprites
const p1u = "u";
const p1d = "d";
const p1l = "l";
const p1r = "r";
// p2 sprites
const p2u = "U";
const p2d = "D";
const p2l = "L";
const p2r = "R";
// lightwalls
const stream1 = "3";
const stream2 = "4";
// adjust for speed. higher=slower, lower=faster
const updateRate = 100;
//misc
const background = "b";
const wall = "w";
var score = tilesWith(stream1)


setLegend(
  //p1 bitmaps
  [ p1u, bitmap`
................
......0550......
.....005500.....
....00055000....
....00055000....
....50055005....
....50055005....
....50055005....
....50055005....
....50055005....
....50055005....
....00055000....
....00055000....
...5550550555...
...5550550555...
...555....555...`],
  [ p1d, bitmap`
...555....555...
...5550550555...
...5550550555...
....00055000....
....00055000....
....50055005....
....50055005....
....50055005....
....50055005....
....50055005....
....50055005....
....00055000....
....00055000....
.....005500.....
......0550......
................`],
  [ p1l, bitmap`
................
................
................
.............555
...0055555500555
..00000000000555
.00000000000000.
.55555555555555.
.55555555555555.
.00000000000000.
..00000000000555
...0055555500555
.............555
................
................
................`],
  [ p1r, bitmap`
................
................
................
555.............
5550055555500...
55500000000000..
.00000000000000.
.55555555555555.
.55555555555555.
.00000000000000.
55500000000000..
5550055555500...
555.............
................
................
................`],
  //p2 bitmaps
  [ p2u, bitmap`
................
......0330......
.....003300.....
....00033000....
....00033000....
....30033003....
....30033003....
....30033003....
....30033003....
....30033003....
....30033003....
....00033000....
....00033000....
...3330330333...
...3330330333...
...333....333...`],
  [ p2d, bitmap`
...333....333...
...3330330333...
...3330330333...
....00033000....
....00033000....
....30033003....
....30033003....
....30033003....
....30033003....
....30033003....
....30033003....
....00033000....
....00033000....
.....003300.....
......0330......
................`],
  [ p2l, bitmap`
................
................
................
.............333
...0033333300333
..00000000000333
.00000000000000.
.33333333333333.
.33333333333333.
.00000000000000.
..00000000000333
...0033333300333
.............333
................
................
................`],
  [ p2r, bitmap`
................
................
................
333.............
3330033333300...
33300000000000..
.00000000000000.
.33333333333333.
.33333333333333.
.00000000000000.
33300000000000..
3330033333300...
333.............
................
................
................`],
  //lightwalls
  [ stream1, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [ stream2, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  //misc
  [ background, bitmap`
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000
0000000LL0000000`],
  [ wall, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
);

setBackground(background);
setSolids([ p1u, p1d, p1l, p1r, p2u, p2d, p2l, p2r, wall]);

//set 0 for normal, 1 for challenge
let level = 0
const levels = [
  map`
...........................
...........................
...........................
...........................
...........................
.............D.............
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
...........................
.............u.............
...........................
...........................
...........................
...........................
...........................`,
  //challenge
  map`
...........................
...........................
...........................
...........................
.............D.............
...........................
................wwwww......
...........................
...........................
...w...................w...
..w.....w.........w.....w..
.w......w.........w......w.
w.......w..wwwww..w.......w
.w......w.........w......w.
..w.....w.........w.....w..
...w...................w...
...........................
...........................
......wwwww................
...........................
.............u.............
...........................
...........................
...........................
...........................`,
];

setMap(levels[level]);

const playback = playTune(melody, Infinity);

const gameLoop1 = setInterval(() => {
  try {
    addSprite(getFirst(p1u).x, getFirst(p1u).y, stream1);
    getFirst(p1u).y -= 1;
  } catch (e) {
    // console.log("nope");
  }
  try {
    addSprite(getFirst(p2u).x, getFirst(p2u).y, stream2);
    getFirst(p2u).y -= 1;
  } catch (e) {
    // console.log("nope");
  }
}, updateRate);

const gameLoop2 = setInterval(() => {
  try {
    addSprite(getFirst(p1d).x, getFirst(p1d).y, stream1);
    getFirst(p1d).y += 1;
  } catch (e) {
    // console.log("nope");
  }
  try {
    addSprite(getFirst(p2d).x, getFirst(p2d).y, stream2);
    getFirst(p2d).y += 1;
  } catch (e) {
    // console.log("nope");
  }
}, updateRate);

const gameLoop3 = setInterval(() => {
  try {
    addSprite(getFirst(p1r).x, getFirst(p1r).y, stream1);
    getFirst(p1r).x += 1;
  } catch (e) {
    // console.log("nope");
  }
  try {
    addSprite(getFirst(p2r).x, getFirst(p2r).y, stream2);
    getFirst(p2r).x += 1;
  } catch (e) {
    // console.log("nope");
  }
}, updateRate);

const gameLoop4 = setInterval(() => {
  try {
    addSprite(getFirst(p1l).x, getFirst(p1l).y, stream1);
    getFirst(p1l).x -= 1;
  } catch (e) {
    // console.log("nope");
  }
  try {
    addSprite(getFirst(p2l).x, getFirst(p2l).y, stream2);
    getFirst(p2l).x -= 1;
  } catch (e) {
    // console.log("nope");
  }
}, updateRate);

onInput("w", () => {
  try{
    getFirst(p1l).type = "u";
  } catch (e) {}
  try{
    getFirst(p1r).type = "u";
  } catch (e) {}
});

onInput("a", () => {
  try{
    getFirst(p1u).type = "l";
  } catch (e) {}
  try{
    getFirst(p1d).type = "l";
  } catch (e) {}
});

onInput("s", () => {
  try{
    getFirst(p1l).type = "d";
  } catch (e) {}
  try{
    getFirst(p1r).type = "d";
  } catch (e) {}
});

onInput("d", () => {
  try{
    getFirst(p1u).type = "r";
  } catch (e) {}
  try{
    getFirst(p1d).type = "r";
  } catch (e) {}
});

onInput("i", () => {
  try{
    getFirst(p2l).type = "U";
  } catch (e) {}
  try{
    getFirst(p2r).type = "U";
  } catch (e) {}
});

onInput("j", () => {
  try{
    getFirst(p2u).type = "L";
  } catch (e) {}
  try{
    getFirst(p2d).type = "L";
  } catch (e) {}
});

onInput("k", () => {
  try{
    getFirst(p2l).type = "D";
  } catch (e) {}
  try{
    getFirst(p2r).type = "D";
  } catch (e) {}
});

onInput("l", () => {
  try{
    getFirst(p2u).type = "R";
  } catch (e) {}
  try{
    getFirst(p2d).type = "R";
  } catch (e) {}
});

const loopofdoom = setInterval(() => {
  // there has to be a better way than this
  const impacts = tilesWith(stream1, p1u).length + tilesWith(stream1, p1d).length + tilesWith(stream1, p1l).length + tilesWith(stream1, p1r).length + tilesWith(stream2, p1u).length + tilesWith(stream2, p1d).length + tilesWith(stream2, p1l).length + tilesWith(stream2, p1r).length
  const impacts2 = tilesWith(stream1, p2u).length + tilesWith(stream1, p2d).length + tilesWith(stream1, p2l).length + tilesWith(stream1, p2r).length + tilesWith(stream2, p2u).length + tilesWith(stream2, p2d).length + tilesWith(stream2, p2l).length + tilesWith(stream2, p2r).length
  if (impacts > 0) {
    addText("P2 WINS!", { y: 4, color: color`3`});
    playback.end();
    playTune(fanfare);
    //AAAAAAAAAAAGGHHHH
    try {
      clearTile(getFirst(p1u).x, getFirst(p1u).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1d).x, getFirst(p1d).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1l).x, getFirst(p1l).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1r).x, getFirst(p1r).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2u).x, getFirst(p2u).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2d).x, getFirst(p2d).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2l).x, getFirst(p2l).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2r).x, getFirst(p2r).y);
    } catch (e) {}
  }
  if (impacts2 > 0) {
    addText("P1 WINS!", { y: 4, color: color`5`});
    playback.end();
    playTune(fanfare);
    try {
      clearTile(getFirst(p1u).x, getFirst(p1u).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1d).x, getFirst(p1d).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1l).x, getFirst(p1l).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p1r).x, getFirst(p1r).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2u).x, getFirst(p2u).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2d).x, getFirst(p2d).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2l).x, getFirst(p2l).y);
    } catch (e) {}
    try {
      clearTile(getFirst(p2r).x, getFirst(p2r).y);
    } catch (e) {}
  }
}, updateRate);
