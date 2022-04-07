const converted = {
    "8c": "V15",
    "8b+": "V14",
    "8b": "V13",
    "8a+": "V12",
    "8a": "V11",
    "7c+": "V10",
    "7c": "V9",
    "7b+": "V8",
    "7b": "V7",
    "7a+": "V6",
    "7a": "V5",
    "6c+": "V4",
    "6c": "V3",
    "6b+": "V2",
    "6b": "V1",
    "6a+": "V0",
}


function convertToFont(num) {
 let final = '';

 
   for(let font in converted) {
     while(num >= converted[font]) {
       num -= converted[font];
       final += font;
        }
     }
      return final;
}

console.log(convertToFont("V12"));
