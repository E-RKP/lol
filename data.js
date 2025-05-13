let somma = 0
for (i=0; i<101; i++){
  somma = somma + i
}

console.log(somma)

for (i=1; i<11;i++){
  console.log(`${i} X ${i} = ${i*i}`)
}

let parola = 'Ciao mondo'
parola = parola.toLowerCase ();
let counter = 0
for (i=0; i<parola.length;i++){
  if (parola[i] == 'a' || parola[i]== 'e' || parola[i] == 'i' || parola[i] == 'o' || parola[i] == 'u'){
    counter++;

  }
}
console.log(counter)

let aster = ''
for (i=0; i<4; i++){
  aster = aster + '#'
  console.log(aster)
}

let smi = ''
const parole = ["ciao", "sole", "luna"];
for (i=0; i<parole.length; i++){
  for (j=0; j<parole[i].length;j++){
    smi = smi+' '+parole[i][j]
    
  }
  console.log(smi)
}

for (i=0; i<101;i++){
  if (i % 2 != 0 && i > 1){
    console.log(i)
  }
}



function sommer (a,b){
  return a+b;
}

let risultato = sommer (2,3)
console.log(risultato)

function maggiore (a,b){
  if (a>b){
    return a;
  }else {
    return b;
  }
}

let maggioritario = maggiore(10,20)
console.log(maggioritario)

let parol = 'inserisci parola'
function maiuscola (parol){
  let start = parol.Indexoff(parol[0])
  parol = parol.slice(start, )
}

let arr = [0,1,2,4]
let sommo = 0
function sommaArray (array){

  for (i=0; i<arr.length;i++){
    
    sommo = sommo+arr[i]
    
  }
  return sommo;
}

sommaArray (arr);
console.log(sommo)


