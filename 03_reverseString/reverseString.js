const reverseString = function() {

    let string= "Hello";

    let breakUp = [...string]; 
   
    let backTogether = breakUp.reverse().toString(); 
   
    let finalString = backTogether.replace(/,/g,"");

    return(finalString);


};




 let string= "Hello";

 let breakUp = [...string]; 

 let backTogether = breakUp.reverse().toString(); 

 let finalString = backTogether.replace(/,/g,"");



 console.log(finalString);


// Do not edit below this line
module.exports = reverseString;
