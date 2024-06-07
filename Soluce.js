/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 const Tab = []
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     const pi = parseInt(readline());
     Tab.push(pi); 
 }
 
 Tab.sort((a, b) => a - b); 
 
 let D = 100000000;
 for (let i = 1; i < Tab.length; i++) {
     const temp = Tab[i] - Tab[i - 1];
     if (D > temp) {
         D = temp;
     }
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(D);
 
