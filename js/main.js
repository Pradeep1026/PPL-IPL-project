const csvObj = require('./json');

let matches = csvObj.extractingCSV("../ipl/matches.csv");
let deliverie = csvObj.extractingCSV("../ipl/deliveries.csv");

/****** Counted all matches Played for all years  ******/

// var matchCount = 0;
// let totalYearMatch = matches.reduce((acc,cur) => {
//     if(cur.season) {
//         matchCount++;
//     }
//     return matchCount;
// },0);

// console.log(totalYearMatch);

/****** matches played per year of all the years in IPL ******/

// let everyYearMatch = matches.reduce((acc, cur) => {
//     (acc[cur.season] == undefined) ? (acc[cur.season] = 1) : (acc[cur.season] += 1);
//     return acc;
// },{});

// console.log(everyYearMatch);

/****** Team played and won matches over all the years of IPL ******/

// let teamMatchWon = matches.reduce((acc, cur) => {
//     if(acc[cur.season] == undefined) { 
//         acc[cur.season] = matches.reduce((newacc, newCur) => {
//             if(newCur.season == cur.season){
//                 (newacc[newCur.winner] == undefined) ? (newacc[newCur.winner] = 1) : (newacc[newCur.winner] += 1);
//             }
//         return newacc;
//     },{})  }
//     return acc;
// },{});

// console.log(teamMatchWon);

// let teamMatchWon = matches.reduce((acc, cur) => {
//     if(!acc.hasOwnProperty(cur.season)) {
//             acc[cur.season] = {};
//             acc[cur.season][cur.winner] = 1;
//     } else {
//         if(!acc[cur.season].hasOwnProperty(cur.winner)){
//             acc[cur.season][cur.winner] = 1;
//         } else {
//             acc[cur.season][cur.winner]+= 1;
//         }
//     }
//     return acc;
// },{});

// console.log(teamMatchWon);

// var allmatch = matches.reduce(function(ac, cr){
//     if(ac[cr.season] == undefined)
//     {
//             ac[cr.season]={};
//             ac[cr.season][cr.winner]=1;
//     } 
//     else
//     {
//         if(ac[cr.season][cr.winner] == undefined)
//         {
//             ac[cr.season][cr.winner]=1;
//         }
//         else
//         {
//             ac[cr.season][cr.winner] = ac[cr.season][cr.winner]+1;
//         }
//     }
//     return ac;
// },{});

// console.log(allmatch);


/****** For the year 2016 the extra runs conceded by per team ******/
let matchSeason = matches.filter(ele => ele.season == 2016 );
// console.log(matchSeason);

let extraRunWin = matchSeason.reduce((acc, match) => {
       deliverie.map( delev => {
           if( match.id == delev.match_id ) {
               if( !acc.hasOwnProperty(delev.bowling_team) ) {
                   acc[delev.bowling_team] = Number(delev.extra_runs);
               }
               else{
                   acc[delev.bowling_team] += Number(delev.extra_runs);
               }
           }
       });
    return acc;
   },{});

console.log(extraRunWin);


/****** For the year 2015 top economical bowlers ******/
// let totalRuns = deliverie.reduce((acc, cur) => (acc + Number(cur.total_runs)), 0);

// console.log(totalRuns);

