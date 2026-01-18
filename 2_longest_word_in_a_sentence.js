//FUNCTION TO RETURN THE LONGEST WORD IN A SENTENCE

function longestWord(sentence) {

    let words= sentence.split(" ")

    let longest= ""

    for(word of words){

        if(word.length > longest.length )

            longest =word
        
    }

    return longest

}

console.log(longestWord("i am the king of zamunda"))