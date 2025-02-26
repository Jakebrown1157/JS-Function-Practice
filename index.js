// Your Code Here


let firstAnswer = 0
let secondAnswer = 0
let thirdAnswer = 0
let finalAnswer = 0

function start(){
    firstAnswer  = window.prompt(`Your well along the path of known Adventurers, 
    what path do you take left, or right?`)
    if(firstAnswer === 'left'){
       goLeft()
    } else if(firstAnswer === 'right') {
        goRight()
    } else if(firstAnswer === 'Adventurers'){
        Adventurers()
    }
}

function goLeft(){
    secondAnswer = prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you "follow it", or "continue on" your path?`)
    if(secondAnswer === 'follow it'){
        follow()
     } else if(secondAnswer === 'continue on'){
         continueOn()
     }
    if(secondAnswer === 'back'){
        start()
    }
}

function goRight(){
    secondAnswer = window.prompt(`You come across a snoring dragon. 
    you see a shiny chest of treasure "past" him. However another path would 
    lead you "away" from the dragon all together. Which do you take?`)
    if(secondAnswer === 'past'){
        pastTheDragon()
     }else if(secondAnswer === 'away'){
         AwayFromTheDragon()
     }
    if(secondAnswer === 'back'){
        start()
    }
}
function Adventurers() {
    finalAnswer = window.prompt(`You decided to follow in the footsteps of your past lives, along the way you manage to tail the cat, "and Spread the word, to other Adventurers", "continue on, taking the staircase to find the blue stone", "have an uplifting conversation with a local dragon convincing him into giving you a portion of his treasure for the easy trade of a blue stone", "while finally finding a way to harness the radiant light of the sun to forever preserve you and a brilliant blue flower"  
    You Win What Now?`)
    if(finalAnswer === 'continue on'){
    window.alert('you decide to continue on and live the life of an Adventurer of Legends')
    } else if(finalAnswer === 'back'){
    start()
    } else {
        start()
    }
}

function follow(){
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you if you want to "stay", but you wonder if you should "alert" the world to this magical safe haven.')
    if(thirdAnswer === 'stay'){
        window.alert(`You live happily amongst the cats for the rest of your days.
        Game Over`)
        start()
     } else if(thirdAnswer === 'alert') {
         window.alert(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.
        Game Over`)
        start()
     }
    if(thirdAnswer === 'back'){
        goLeft()
    } else {
        start()
    }
}

function continueOn() {
    let thirdAnswer = window.prompt(`You come across a chamber that extends upward to a shining light above. There is a long, winding "staircase" and a much quicker, but rickety-looking, "ladder" that lead up towards the light. 
    Which do you take?`)
    if(thirdAnswer === 'ladder'){
        window.alert(`After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.
        Game Over`)
        start()
     } else if(thirdAnswer === 'staircase') {
         window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.
        Game Over`)
        start()
     }
    if(thirdAnswer === 'back'){
        goLeft()
    } else {
        start()
    }
}

function pastTheDragon(){
    let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to "stay" or to "run":')
    if(thirdAnswer === 'stay'){
        window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.
        Game Over`)
        start()
     } else if(thirdAnswer === 'run') {
         window.alert(`Quickly, you run back to the cave\'s entrance. Sheepish, you return home.
        Game Over`)
        start()
     }
    if(thirdAnswer === 'back'){
        goRight()
    } else{ 
        start()
    }
}

function AwayFromTheDragon() {
    let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either "draw it" or "pick it". Which do you do?')
    if(thirdAnswer === 'draw it'){
        window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.
        Game Over`)
     } else if(thirdAnswer === 'pick it') {
         window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.
         Game Over`)
         start()
     }
    if(thirdAnswer === 'back'){
        goRight()
    } else {
        start()
    }
}

start()