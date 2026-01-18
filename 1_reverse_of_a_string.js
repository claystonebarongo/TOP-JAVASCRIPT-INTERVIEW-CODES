// REVERSE OF A STRING USING FOR LOOP


function reverseString(str){

let reversed= ""

    for(i=str.length-1;i>=0;i--){

reversed += str[i]

    }

    return reversed;
}
 console.log(reverseString("judy"))
