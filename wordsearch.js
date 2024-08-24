



let xlen = 15;
let ylen =15;
let xString="";
let grid={};
let tempWord= {};
let searchWords = ["BEET","BEIGE","BEING","BENIGN","EIGHT","ENGINE","HINTING","NIGHT","THING","GENIE"];
const topleft= ["e","f","g"];
const topmiddle = ["a","e","f","g","h"];
const righttop =["a","g","h"];
const leftmiddle = ["c","d","e","f","g"];
const middle = ["a","b","c","d","e","f","g","h"];
const rightmiddle = ["a","c","b","g","h"];
const bottomleft =["c","d","e"];
const bottommiddle =["a","b","c","d","e"];
const rightbottom =["a","b","c"];











// ************************** BUILD A GRID WITH BLANK SPACES *********************************//
function buildGrid(searchWords) {
xlen = 15;
ylen =15;
xString="";
grid={};
 for (let x = 1; x <= xlen;x++) {


    for (let y =1; y <= ylen;y++) {
        
        if (x < 10) {
            let xlet = x.toString()
            xString = "0"+ xlet;
        } else { xString =x.toString();}

        // console.log("y:",y.toString(),"x:",xString);   
         let newLocation = Number(y.toString()+xString);
         grid[newLocation]=" ";
    }
 }
 const sortedSearchWords =sortWords(searchWords);
 splitToShow(grid);
 console.log(sortedSearchWords);




 for (let allWords = 0; allWords< searchWords.length; allWords++){
    let word = searchWords[allWords];
    let newLocation = getNewLoc();
    console.log("newLocation: ",newLocation);
    let checkNewLocArr = getCheckArr(newLocation);
    console.log("checkNewLocArr: ",checkNewLocArr);
 
//  let fit = doesItFit(newLocation,word);
    doesItFitShort(newLocation,word)
 console.log("tempoWord: ",tempWord);

  }
  splitToShow(grid);



}

// ********************** SPLITING THE GRID ARRAY INTO LINES TO HELP RENDER IN REACT APP*********************//
function splitToShow(grid) {
    let newline = [];
    let totalLines=[];
    let len = Object.values(grid).length;
    let vals = Object.values(grid);
    let index = Object.keys(grid);
    let z=0;
    for (let b = 0; b < len+1;b++) {
        if (z === 15) { }
        else {
        let a =  vals[b];
        let indexN = index[b];
        let lastTwo = indexN.slice(indexN.length-2);
        lastTwo = Number(lastTwo);
              
        if ((lastTwo) === 15 || index[b] === 115) {
            z++;
            newline.push(a);let newlineword = newline.join("");console.log(newlineword);
            totalLines.push(newlineword);
            newline = [];
        } else { newline.push(a);
    
        }
    }
        
    }
    // console.log("totalline",totalLines);
}

// ********************************** REORDER SEARCH WORDS **********************************//
function sortWords(searchWords) {
searchWords.sort((a, b) => b.length - a.length);
return searchWords;
}

// ********** CHECK LOCATION TO GET ALLOWABLE DIRECTION FOR GRAPH THEORY ********************//

function getNewLoc() {
     let xrand = Math.floor(Math.random() * xlen +1);
    let xrandString = xrand.toString();
    if (xrand < 10) {
        xrandString = "0"+xrand.toString();
    } 
    let yrand = Math.floor(Math.random() * ylen +1);
    console.log("x:",xrandString," y:",yrand.toString());   
     let newLocation = Number(yrand.toString()+xrandString);
     return newLocation;
    // return getCheckArr(newLocation);
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

// ************************** GET A RANDOM START LOCATION ON FIRST WORD **********************//


// console.log("************************** GET A RANDOM START LOCATION ON FIRST WORD **********************")
randomLen = Object.values(grid).length;
randomIndex = Object.keys(grid);

function getRandomGridLoc(len) {
    let randGridLoc = Math.floor(Math.random() * len +1);
    let randGridNum = randomIndex[randGridLoc];
    return randGridNum
}

// **************************CHECK CHARACTER IN GRID BASED ON RANDOM LOCATION **********************//
function checkCharaterInGrid(newLoc) {
    // console.log("**************************CHECK CHARACTER IN GRID BASED ON RANDOM LOCATION **********************")
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
}

// ********** CHECK IF A WORD WILL FIT IN THE GRID BASED ON LOCATION OF FIRST LETTER*********//





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


    // ********** CHECK IF A WORD WILL FIT IN THE GRID BASED ON LOCATION OF FIRST LETTER*********//

    function  doesItFit(randomGridLoc,word) {
        let doesntFit;
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
    
    
//****************************** ADD TEMPWORD TO GRID**************************/    
function addWordToGrid(tempWord) {
    
    
    let numbers = Object.keys(tempWord);
    let values = Object.values(tempWord);
    console.log("tempWordLength:",numbers,values);
    for (let aa = 0; aa < numbers.length; aa++) {grid[Number(numbers[aa])] = values[aa];};
    console.log(grid);
}    

// ******************** CHECK IF DIRECTION FITS LENGTH ****************************** //

 
function  doesItFitShort(gridLoc,word) {
console.log("word:",word);
let length = word.length;
    let directions = getCheckArr(gridLoc);
    console.log("directions: ",directions);
    while(directions.length>0) {
        console.log("directions before: ",directions)

        let directs = Math.floor(Math.random() * directions.length);
        console.log(directs);
        directions.splice(directs,1);
        console.log("directions after:",directions)

    
    
    console.log("directions:",directions[directs]);
    
    
        console.log("doesItFitShort");
    let doesntFit;
    for (let checkit = 0; checkit < length; checkit++) {
        //*********************fix loop */
            
            gridLoc = gridLoc + getDirectionNum(directions[directs]);
    
            if (grid[gridLoc] !== undefined) {console.log("partial check: ",gridLoc); let doesntFit=true;}
        if (grid[gridLoc] === undefined) {let doesntFit= false;console.log("it doesnt work");} 
       if (checkit === length-1) {
            console.log("first way works ,next letter"); let altStart = gridLoc; if (checkOppositeDir(gridLoc, directions[directs],word.length,word)=== true) {console.log("second way work");addWordToGrid(tempWord);tempWord ={};return;} else if (checkOppositeDir(gridLoc, directions[checkit])=== false) {console.log("second way does not work");return;} ;
       }
    }
    }
}
    

    function checkOppositeDir(gridLoc, origdir,length1,word) {
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
        if (grid[gridLoc] === word[indexOfLet] || grid[gridLoc]=== " ") { console.log("letter at ",gridLoc," matches word letter, next Letter please!");
            let numGridLoc =  Number(gridLoc); 
            grid[gridLoc] = word[indexOfLet];  tempWord[numGridLoc] =grid[gridLoc];

        } else {console.log("letter at ",gridLoc, " does not match word letter. No good next Loc"); return false;}

    }

buildGrid(searchWords);
