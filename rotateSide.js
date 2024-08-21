
let tempWord= {};

// ************************** BUILD A GRID WITH BLANK SPACES *********************************//

let xlen = 15;
let ylen =15;
let xString="";
let grid={};
 for (let x = 1; x <= xlen;x++) {


    for (let y =1; y <= ylen;y++) {
        
        if (x < 10) {
            let xlet = x.toString()
            xString = "0"+ xlet;
        } else { xString =x.toString();}

        // console.log("y:",y.toString(),"x:",xString);   
         let newLocation = Number(y.toString()+xString);
         grid[newLocation]="  ";
    }
 }
 grid[105]="A";
 grid[205]="N";
 grid[305]="T";

//         let grid1 = {101:"A",102:"R",103:"T",201:"L",202:"N",203:"G",301:"E",302:"N",303:"D"};
// let gridNum = Number("4"+"01");
//         grid[gridNum]="O";
//         console.log(grid[101],grid[102],grid[103]);
//        console.log(grid[401]);



//  console.log(grid);



// ********************** SPLITING THE GRID ARRAY INTO LINES TO HELP RENDER IN REACT APP*********************//

let newline = [];
let totalLines=[];
let len = Object.values(grid).length;
let vals = Object.values(grid);
let index = Object.keys(grid);
// console.log("index:",index);
let z=0;
for (let b = 0; b < len+1;b++) {
    if (z === 15) { }
    else {
    let a =  vals[b];
    // console.log("a",a);
   
    let indexN = index[b];
    
    let lastTwo = indexN.slice(indexN.length-2);
    // console.log("lastTwo:",lastTwo);
    lastTwo = Number(lastTwo);
    // console.log((indexN1515)+1)
    
    if ((lastTwo) === 15 || index[b] === 115) {
        z++;
    // console.log(z);
    
        newline.push(a);let newlineword = newline.join("");console.log(newlineword);
        totalLines.push(newlineword);
        newline = [];
    } else { newline.push(a);

    }
}
    
}

//console.log("totalline",totalLines);


// ********************************** REORDER SEARCH WORDS **********************************//

let searchWords = ["BEET","BEIGE","BEING","BENIGN","EIGHT","ENGINE","HINTING","NIGHT","THING","GENIE"];

searchWords.sort((a, b) => b.length - a.length);

console.log(`searchWords:`,searchWords);


// ********** CHECK LOCATION TO GET ALLOWABLE DIRECTION FOR GRAPH THEORY ********************//


console.log("********** CHECK LOCATION TO GET ALLOWABLE DIRECTION FOR GRAPH THEORY ********************")
const topleft= ["e","f","g"];
const topmiddle = ["a","e","f","g","h"];
const righttop =["a","g","h"];
const leftmiddle = ["c","d","e","f","g"];
const middle = ["a","b","c","d","e","f","g","h"];
const rightmiddle = ["a","c","b","g","h"];
const bottomleft =["c","d","e"];
const bottommiddle =["a","b","c","d","e"];
const rightbottom =["a","b","c"];

function getNewLoc() {
     let xrand = Math.floor(Math.random() * xlen +1);
    let xrandString = xrand.toString();
    if (xrand < 10) {
        xrandString = "0"+xrand.toString();
    } 
    let yrand = Math.floor(Math.random() * ylen +1);
    console.log("x:",xrandString," y:",yrand.toString());   
     let newLocation = Number(yrand.toString()+xrandString);
    console.log("newLocation;" ,newLocation);
    return getCheckArr(newLocation);
}

function getCheckArr(newLocation) {
    if (newLocation === 101) {
        console.log("topleft")
        return topleft;
    } else if (newLocation === 1515) {
        return rightbottom;
    }else if (newLocation >101 && newLocation < 115) {
        console.log("topmiddle");
        return topmiddle;
    } else if (newLocation === 1501) {
        return bottomleft;
    } else if (newLocation ===115) {
        return righttop;
    } else if ((newLocation-1)%100 ===0)    {
        console.log("leftmiddle")
        return leftmiddle;
    } else if ( (newLocation-15)%10 ===0 && (newLocation > 115 || newLocation < 1515)) {
        return rightmiddle;
    } else if (newLocation > 1501 && newLocation < 1515) {
        return bottommiddle;
    } else {
        return middle;
    }
}

console.log(getNewLoc());

// ************************** GET A RANDOM START LOCATION ON FIRST WORD **********************//


console.log("************************** GET A RANDOM START LOCATION ON FIRST WORD **********************")
randomLen = Object.values(grid).length;
randomIndex = Object.keys(grid);

function getRandomGridLoc(len) {
    let randGridLoc = Math.floor(Math.random() * len +1);
    let randGridNum = randomIndex[randGridLoc];
    return randGridNum
}

console.log("random location: ",getRandomGridLoc(randomLen));

// **************************CHECK CHARACTER IN GRID BASED ON RANDOM LOCATION **********************//

console.log("**************************CHECK CHARACTER IN GRID BASED ON RANDOM LOCATION **********************")
let wordLetBelow;
let wordLetAbove;
let word = searchWords[0];
console.log(`word to check letters:`,word);
let checkLetterRandomGridLoc = Number(getRandomGridLoc(225));
let checkLetArr = getCheckArr(205);
console.log(checkLetterRandomGridLoc,checkLetArr );

let wordLet = grid[205];
console.log("wordLet:",wordLet);
console.log(word.indexOf(wordLet));
wordLetBelow = word.indexOf(wordLet);
if (wordLetBelow.length > 1) {
    //do array stuff
} else {
    wordLetAbove = word.length-wordLetBelow;
}


// ******************** CHECK IF DIRECTION FITS PARTIAL LENGTH ****************************** //

 
function  doesItFitShort(gridLoc,length) {

let directions = getCheckArr(gridLoc);
console.log("directions: ",directions);
for (let directs = 0; directs < directions.length; directs++) {

console.log("directions:",directions[directs]);


    console.log("doesItFitShort");
let doesntFit;
for (let checkit = 0; checkit < length; checkit++) {
    //*********************fix loop */
        
        gridLoc = gridLoc + getDirectionNum(directions[directs]);

        if (grid[gridLoc] !== undefined) {console.log("partial check: ",gridLoc); let doesntFit=true;}
    if (grid[gridLoc] === undefined) {let doesntFit= false;console.log("it doesnt work");} 
   if (checkit === length-1) {
        console.log("first way works ,next letter"); let altStart = gridLoc; if (checkOppositeDir(gridLoc, directions[directs],word.length)=== true) {console.log("second way work");return;} else if (checkOppositeDir(gridLoc, directions[checkit])=== false) {console.log("second way does not work");return;} ;
   }
}
}
}

doesItFitShort(205,3);



function checkOppositeDir(gridLoc, origdir,length1) {
    let reverseDir="";
    if (origdir === "a") {
        reverseDir = "e";
    } else if (origdir === "e") {
        reverseDir = "a";
    } else if (origdir === "b") {
        reverseDir = "f";
    } else if (origdir === "f") {
        reverseDir = "b";
    } else if (origdir === "c") {
        reverseDir = "g";
    } else if (origdir === "g") {
        reverseDir = "c";
    } else if (origdir === "d") {
        reverseDir = "h";
    } else if (origdir === "h") {
        reverseDir = "d";
    } 

    console.log("doesItFitShortReverse direction:",reverseDir);
    let doesntFitReverse;
    for (let checkitReverse = 0; checkitReverse < length1; checkitReverse++) {
        
            
            gridLoc = gridLoc + getDirectionNum(reverseDir);
            console.log("step gridLoc:",gridLoc);
    
            if (grid[gridLoc] !== undefined) {console.log("partial check: ",gridLoc); let doesntFitReverse=true; checkLetterInGrid(word,checkitReverse,gridLoc);}
        if (grid[gridLoc] === undefined) {let doesntFitReverse= false;console.log("it doesnt work");return false;} 
       if (checkitReverse === length1-1) {
            console.log("first way works ,next letter"); 
            return true;
       }
    }

}

function checkLetterInGrid(word,indexOfLet,gridLoc) {
        if (grid[gridLoc] === word[indexOfLet] || grid[gridLoc]=== " ") { console.log("letter at ",gridLoc," matches word letter, next Letter please!")
            tempWord["indexOfLet"] =gridLoc; grid[gridLoc] = word[indexOfLet]; return true;

        } else {console.log("letter at ",gridLoc, " does not match word letter. No good next Loc"); return false;}

    }



// ******************** REMOVE A GRID LOCATION FROM RANDOM LOCATIONS ONCE SELECTED **********//

// Purpose of the randomIndex is that there are open spaces the can be used as possible word starting points.
// When to use this -after the search for any of the letters in a word isnt found
//                  -after a word fits and as the letter locations are set


function removeLocFromRandomGrid(location) {
    delete randomIndex[location];
}




// ********** CHECK IF A WORD WILL FIT IN THE GRID BASED ON LOCATION OF FIRST LETTER*********//




console.log("********* CHECK IF A WORD WILL FIT IN THE GRID BASED ON LOCATION OF FIRST LETTER*********")
function getDirectionNum(direction) {
    fitcount = 0;
    if (direction === "a") {
        return -1;
    } else if (direction === "b") {
        return -101;
    } else if (direction === "c") {
        return  -100;
    } else if (direction === "d") {
        return -99
    } else if (direction === "e") {
        return +1;
    } else if (direction === "f") {
        return +101;
    } else if (direction === "g") {
        return +100;
    } else if (direction === "h") {
        return +99;
    } 
} 


console.log(word);
let doesntFit = false;


let randomLocation1 = getRandomGridLoc(randomLen);


function  doesItFit(randomGridLoc,word) {
    let wordLength = word.length;
// console.log("randomlocation1",randomLocation1);
let randomLocation = Number(randomGridLoc);
let directionArr = getCheckArr(randomLocation);
console.log("randomLocationCheck: ",randomLocation);
// console.log("directionArr: ",directionArr);
let dirArrLength = directionArr.length;

// console.log("dirArrLength: ",dirArrLength);
let dirArrRandIndex = Math.floor(Math.random() * dirArrLength);
// console.log("random Index: ",dirArrRandIndex);
let randomDirection = directionArr[dirArrRandIndex];
console.log("random Direction: ",randomDirection);
let newLocationToCheck = randomLocation;
for (let checkit = 1; checkit < wordLength; checkit++) {
    

        newLocationToCheck = newLocationToCheck + getDirectionNum(randomDirection);
        if (grid[newLocationToCheck] !== undefined) {console.log("newLocationToCheck: ",newLocationToCheck); doesntFit=true;}
    if (grid[newLocationToCheck] === undefined) {doesntFit= false;fitcount++;let randomLocation1 = getRandomGridLoc(randomLen); } 
}

if (fitcount === 225) {
    console.log("did not find a fitting location");
    console.log("fits:",doesntFit);
} else {console.log("fits:",doesntFit);}
}


doesItFit(randomLocation1,word);


// ********** CHECK IF A LOCATION HAS A LETTER IN WORD ********************//

// USES -IF FIRsT LETTER IS FOUND ON THE GRID ALREADY
//      -IF WORD FITS USING CHECKFITSGRID
//      -ADVANCED - IF ANY LETTER IS FOUND ON THE GRID
//      -CHECKS TO SEE IF WORD CAN CONTINUE IN THAT DIRECT

console.log("********** CHECK IF A LOCATION HAS A LETTER IN WORD ********************")

function checkLocLetter() {
word = searchWords[0];
console.log(word);
let wordLength = word.length
 
// check for letters using a loop first get randomGridLoc//
let randomStartLoc =getRandomGridLoc(randomLen);
console.log("random location: ",randomStartLoc);

// check if it fits //
console.log("checking letter section: ",doesItFit(randomStartLoc,word));

}
checkLocLetter();



//check if randomStartLoc has a letter already anmd if its in the work






