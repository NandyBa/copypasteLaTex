code = document.getElementsByTagName('textarea')[0].value; // get code textarea code

code = code.replace(/(\n[0-9]+)+\s*/g,'\n'); // remove numbers at begining of each row

document.getElementsByTagName('div')[0].innerText = code; // show modified code