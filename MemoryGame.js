document.querySelector(".control-buttons span").onclick = function () {



    //Prompt window To Ask For name
    let yourName = prompt("whats Your Name?");



    //if name is empty
    if (yourName == null || yourName == "") {
        //set Name To unknown
        document.querySelector(".name span").innerHTML = 'Unknown'
    } else {



        document.getElementById('start').play();
        //set Name TO Your Name
        document.querySelector(".name span").innerHTML = yourName;

    }
    //Remove Splash Screen
    //NEW:   He TARi2A BTSHILLLL EL DIVVV KELLAAA   
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;
//duration ms (card reverse)

let blocksContainer = document.querySelector(".memory-game-blocks");
// Big div (asesye) <div class=".memory-game-blocks">...</div>


let blocks = Array.from(blocksContainer.children);
//[div,div,div...]
// console.log(blocks.length);//20



// let orderRango = [...Array(blocks.length).keys()];
//console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number

// up or down the same , you can use one of them

let orderRange = Array.from(Array(blocks.length).keys());
//console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number
// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);


//Add Other Css property TO Game BLocks
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    //add click Event
    block.addEventListener("click", function () {
        //trigger The Flip block function
        flipBlock(block);
    });
});



//Flip block Function
function flipBlock(selectedBlock) {

    //Add Class is-flipped
    selectedBlock.classList.add('is-flipped');
    //<div class="is-flipped">

    //collect All flipped Cards

    //es6 Version
    let allFlippedBlocks = blocks.filter(flippedBlock =>
        flippedBlock.classList.contains('is-flipped'));
    console.log(allFlippedBlocks);

    //version 1905ashbe
    // let allFlippedBlocks = blocks.filter(function flippedBlock(flippedBlock) {
    //     return flippedBlock.classList.contains('is-flipped');
    // });


    if (allFlippedBlocks.length === 2) {
        // console.log("hello");


        //Stop CLicking Function
        stopclicking();

        //Check Matched Block Function

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);



    }

}
//stop Clicking Function

function stopclicking() {

    //Add Class No Cliking on Main Container
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking')
    }, duration);

}

//Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {
    let tiresElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();





    } else {
        tiresElement.innerHTML = parseInt(tiresElement.innerHTML) + 1;
        setTimeout(() => {


            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');

        }, duration);
        document.getElementById('fail').play();



    }
}




//shuffle Function

function shuffle(array) {
    //settings Vars
    let current = array.length,
        temp, random;

    while (current > 0) {
        // Get Random Number
        random = Math.floor(Math.random() * current);

        //Decrease length By One
        current--;

        // // [1] Save Current Element By One
        temp = array[current];

        // //[2] Current Element = Random Element
        array[current] = array[random];

        // //[3] Random Element = Get Element from Stash
        array[random] = temp;

        //another method
        // [array[current], array[random]] = [array[random], array[current]];

    }
    return array;
}


// let timer = document.querySelector(".timer");
// console.log(parseInt(document.querySelector(".timer").textContent));






var timer = document.querySelector(".timer").textContent;



































































































///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// document.querySelector(".control-buttons span").onclick = function () {


//     //Prompt window To Ask For name
//     let yourName = prompt("whats Your Name?");



//     //if name is empty
//     if (yourName == null || yourName == "") {
//         //set Name To unknown
//         document.querySelector(".name span").innerHTML = 'Unknown'
//     } else {




//         //set Name TO Your Name
//         document.querySelector(".name span").innerHTML = yourName;

//     }
//     //Remove Splash Screen
//     //NEW:   He TARi2A BTSHILLLL EL DIVVV KELLAAA
//     document.querySelector(".control-buttons").remove();
// };

// let duration = 1000;
// //duration ms (card reverse)

// let blocksContainer = document.querySelector(".memory-game-blocks");
// // Big div (asesye) <div class=".memory-game-blocks">...</div>


// let blocks = Array.from(blocksContainer.children);
// //[div,div,div...]
// // console.log(blocks.length);//20



// // let orderRango = [...Array(blocks.length).keys()];
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number

// // up or down the same , you can use one of them

// let orderRange = Array.from(Array(blocks.length).keys());
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number
// // console.log(orderRange);
// shuffle(orderRange);
// // console.log(orderRange);


// //Add Other Css property TO Game BLocks
// blocks.forEach((block, index) => {
//     block.style.order = orderRange[index];
//     //add click Event
//     block.addEventListener("click", function () {
//         //trigger The Flip block function
//         flipBlock(block);
//     });
// });



// //Flip block Function
// function flipBlock(selectedBlock) {

//     //Add Class is-flipped
//     selectedBlock.classList.add('is-flipped');
//     //<div class="is-flipped">

//     //collect All flipped Cards

//     //es6 Version
//     let allFlippedBlocks = blocks.filter(flippedBlock =>
//         flippedBlock.classList.contains('is-flipped'));
//     console.log(allFlippedBlocks);

//     //version 1905ashbe
//     // let allFlippedBlocks = blocks.filter(function flippedBlock(flippedBlock) {
//     //     return flippedBlock.classList.contains('is-flipped');
//     // });


//     if (allFlippedBlocks.length === 2) {
//         // console.log("hello");


//         //Stop CLicking Function
//         stopclicking();

//         //Check Matched Block Function

//         checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);



//     }

// }
// //stop Clicking Function

// function stopclicking() {

//     //Add Class No Cliking on Main Container
//     blocksContainer.classList.add('no-clicking');

//     setTimeout(() => {
//         blocksContainer.classList.remove('no-clicking')
//     }, duration);

// }

// //Check Matched Block
// function checkMatchedBlocks(firstBlock, secondBlock) {
//     let tiresElement = document.querySelector('.tries span');

//     if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');

//         firstBlock.classList.add('has-match');
//         secondBlock.classList.add('has-match');

//         document.getElementById('success').play();





//     } else {
//         tiresElement.innerHTML = parseInt(tiresElement.innerHTML) + 1;
//         setTimeout(() => {


//             firstBlock.classList.remove('is-flipped');
//             secondBlock.classList.remove('is-flipped');

//         }, duration);
//         document.getElementById('fail').play();



//     }
// }




// //shuffle Function

// function shuffle(array) {
//     //settings Vars
//     let current = array.length,
//         temp, random;

//     while (current > 0) {
//         // Get Random Number
//         random = Math.floor(Math.random() * current);

//         //Decrease length By One
//         current--;

//         // // [1] Save Current Element By One
//         temp = array[current];

//         // //[2] Current Element = Random Element
//         array[current] = array[random];

//         // //[3] Random Element = Get Element from Stash
//         array[random] = temp;

//         //another method
//         // [array[current], array[random]] = [array[random], array[current]];

//     }
//     return array;
// }






















////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



















// document.querySelector(".control-buttons span").onclick = function () {


//     //Prompt window To Ask For name
//     let yourName = prompt("whats Your Name?");



//     //if name is empty
//     if (yourName == null || yourName == "") {
//         //set Name To unknown
//         document.querySelector(".name span").innerHTML = 'Unknown'
//     } else {




//         //set Name TO Your Name
//         document.querySelector(".name span").innerHTML = yourName;

//     }
//     //Remove Splash Screen
//     //NEW:   He TARi2A BTSHILLLL EL DIVVV KELLAAA
//     document.querySelector(".control-buttons").remove();
// };

// let duration = 1000;
// //duration ms (card reverse)

// let blocksContainer = document.querySelector(".memory-game-blocks");
// // Big div (asesye) <div class=".memory-game-blocks">...</div>


// let blocks = Array.from(blocksContainer.children);
// //[div,div,div...]
// // console.log(blocks.length);//20



// // let orderRango = [...Array(blocks.length).keys()];
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number

// // up or down the same , you can use one of them

// let orderRange = Array.from(Array(blocks.length).keys());
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number
// // console.log(orderRange);
// shuffle(orderRange);
// // console.log(orderRange);


// //Add Other Css property TO Game BLocks
// blocks.forEach((block, index) => {
//     block.style.order = orderRange[index];
//     //add click Event
//     block.addEventListener("click", function () {
//         //trigger The Flip block function
//         flipBlock(block);
//     });
// });



// //Flip block Function
// function flipBlock(selectedBlock) {

//     //Add Class is-flipped
//     selectedBlock.classList.add('is-flipped');
//     //<div class="is-flipped">

//     //collect All flipped Cards

//     //es6 Version
//     let allFlippedBlocks = blocks.filter(flippedBlock =>
//         flippedBlock.classList.contains('is-flipped'));
//     console.log(allFlippedBlocks);

//     //version 1905ashbe
//     // let allFlippedBlocks = blocks.filter(function flippedBlock(flippedBlock) {
//     //     return flippedBlock.classList.contains('is-flipped');
//     // });


//     if (allFlippedBlocks.length === 2) {
//         // console.log("hello");


//         //Stop CLicking Function
//         stopclicking();

//         //Check Matched Block Function

//         checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);



//     }

// }
// //stop Clicking Function

// function stopclicking() {

//     //Add Class No Cliking on Main Container
//     blocksContainer.classList.add('no-clicking');

//     setTimeout(() => {
//         blocksContainer.classList.remove('no-clicking')
//     }, duration);

// }

// //Check Matched Block
// function checkMatchedBlocks(firstBlock, secondBlock) {
//     let tiresElement = document.querySelector('.tries span');

//     if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');

//         firstBlock.classList.add('has-match');
//         secondBlock.classList.add('has-match');





//     } else {
//         tiresElement.innerHTML = parseInt(tiresElement.innerHTML) + 1;
//         setTimeout(() => {


//             firstBlock.classList.remove('is-flipped');
//             secondBlock.classList.remove('is-flipped');

//         }, duration);



//     }
// }















// //shuffle Function

// function shuffle(array) {
//     //settings Vars
//     let current = array.length,
//         temp, random;

//     while (current > 0) {
//         // Get Random Number
//         random = Math.floor(Math.random() * current);

//         //Decrease length By One
//         current--;

//         // // [1] Save Current Element By One
//         temp = array[current];

//         // //[2] Current Element = Random Element
//         array[current] = array[random];

// //         // //[3] Random Element = Get Element from Stash
// //         array[random] = temp;

// //         //another method
// //         // [array[current], array[random]] = [array[random], array[current]];

// //     }
// //     return array;

// document.querySelector(".control-buttons span").onclick = function () {


//     //Prompt window To Ask For name
//     let yourName = prompt("whats Your Name?");



//     //if name is empty
//     if (yourName == null || yourName == "") {
//         //set Name To unknown
//         document.querySelector(".name span").innerHTML = 'Unknown'
//     } else {




//         //set Name TO Your Name
//         document.querySelector(".name span").innerHTML = yourName;

//     }
//     //Remove Splash Screen
//     //NEW:   He TARi2A BTSHILLLL EL DIVVV KELLAAA
//     document.querySelector(".control-buttons").remove();
// };

// let duration = 1000;
// //duration ms (card reverse)

// let blocksContainer = document.querySelector(".memory-game-blocks");
// // Big div (asesye) <div class=".memory-game-blocks">...</div>


// let blocks = Array.from(blocksContainer.children);
// //[div,div,div...]
// // console.log(blocks.length);//20



// // let orderRango = [...Array(blocks.length).keys()];
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number

// // up or down the same , you can use one of them

// let orderRange = Array.from(Array(blocks.length).keys());
// //console: [ 0, 1, 2, 3, 4, 5, 6, ....]// array of number
// // console.log(orderRange);
// shuffle(orderRange);
// // console.log(orderRange);


// //Add Other Css property TO Game BLocks
// blocks.forEach((block, index) => {
//     block.style.order = orderRange[index];
//     //add click Event
//     block.addEventListener("click", function () {
//         //trigger The Flip block function
//         flipBlock(block);
//     });
// });



// //Flip block Function
// function flipBlock(selectedBlock) {

//     //Add Class is-flipped
//     selectedBlock.classList.add('is-flipped');
//     //<div class="is-flipped">

//     //collect All flipped Cards

//     //es6 Version
//     let allFlippedBlocks = blocks.filter(flippedBlock =>
//         flippedBlock.classList.contains('is-flipped'));
//     console.log(allFlippedBlocks);

//     //version 1905ashbe
//     // let allFlippedBlocks = blocks.filter(function flippedBlock(flippedBlock) {
//     //     return flippedBlock.classList.contains('is-flipped');
//     // });


//     if (allFlippedBlocks.length === 2) {
//         // console.log("hello");


//         //Stop CLicking Function
//         stopclicking();

//         //Check Matched Block Function

//         checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);



//     }

// }
// //stop Clicking Function

// function stopclicking() {

//     //Add Class No Cliking on Main Container
//     blocksContainer.classList.add('no-clicking');

//     setTimeout(() => {
//         blocksContainer.classList.remove('no-clicking')
//     }, duration);

// }

// //Check Matched Block
// function checkMatchedBlocks(firstBlock, secondBlock) {
//     let tiresElement = document.querySelector('.tries span');

//     if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');

//         firstBlock.classList.add('has-match');
//         secondBlock.classList.add('has-match');





//     } else {
//         tiresElement.innerHTML = parseInt(tiresElement.innerHTML) + 1;
//         setTimeout(() => {


//             firstBlock.classList.remove('is-flipped');
//             secondBlock.classList.remove('is-flipped');

//         }, duration);



//     }
// }















// //shuffle Function

// function shuffle(array) {
//     //settings Vars
//     let current = array.length,
//         temp, random;

//     while (current > 0) {
//         // Get Random Number
//         random = Math.floor(Math.random() * current);

//         //Decrease length By One
//         current--;

//         // // [1] Save Current Element By One
//         temp = array[current];

//         // //[2] Current Element = Random Element
//         array[current] = array[random];

//         // //[3] Random Element = Get Element from Stash
//         array[random] = temp;

//         //another method
//         // [array[current], array[random]] = [array[random], array[current]];

//     }
//     return array;
// }





// // }




