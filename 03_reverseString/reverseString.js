const reverseString = function(string) {

    //let string= "";

   // let breakUp = [...string]; 
   
   // let backTogether = breakUp.reverse().toString(); 
   
   // let finalString = backTogether.replace(/,/g,"");

   let breakUp = string.split(""); 

   let backTogether = breakUp.reverse(); 
 
  let finalString = backTogether.join("");
   
  return(finalString);


};




 let string= "hello";

 let breakUp = string.split(""); 

  let backTogether = breakUp.reverse(); 

 let finalString = backTogether.join("");



 console.log(finalString);


// Do not edit below this line
module.exports = reverseString;
