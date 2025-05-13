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

function èPari(numeraccio){

if (numeraccio % 2 == 0){
  return true;
}else{
  return false;
}
}


console.log(èPari(8))

function saluto (nome){

  return 'Ciao ' + nome;
}


console.log(saluto('luca'))

let pro = ''

function inverti (parolaaa){

  for (i=0; i< parolaaa.length;i++){
    pro = parolaaa[i]+pro
    
  }
  console.log(pro)
}

inverti('let s gooo');

function first (pr){
  return pr[0];
}

console.log(first ('spurzzz'))

function palindromo (okay){

  let second = ''
  for (i=0; i<okay.length; i++){
    second = okay[i]+second
  }
  if (second === okay){
    return true;
  }else{
    return false;
  }
}

console.log(palindromo('kk'))
let somm = 0
function sommerssd (n){

  for (i=1; i<n;i++){
    
    somm = somm+i
    
  }
  return somm;
}

console.log(sommerssd(10))

let massimone = Number.NEGATIVE_INFINITY
function maximon (roar){
  for (i=0; i<roar.length;i++){
    if (roar[i]>massimone){
      massimone = roar[i]
    }
  }
  return massimone;
}

console.log(maximon([0,1,2,4,7]))


const input = document.getElementById('lol')
const button1 = document.getElementById('button1')
const controllo = document.getElementById('controllo')

function nominastro (giga){

  let wordd= ''
  for (i=0; i<giga.length;i++){
    
    wordd = giga[i]+wordd
  }
  return wordd;
  
}

button1.addEventListener('click', ()=>{

const testoinverito = nominastro(input.value);
controllo.innerHTML = testoinverito;
  
})

const numerino = document.getElementById('X');
const numeroner = document.getElementById('numerone')
const firstButton = document.getElementById('diminuire')
const secondButton = document.getElementById('aumentare')
let countergig = 0
let countermin = 0

function counterplus (){

  countergig++;
  countermin++;
  return {
    countergig,
    countermin
  };

}

function countermeno (){
  countergig--;
  countermin++;
  if (countergig < 0){
    countergig = 0
  }
  return {
    countergig,
    countermin
  };
}

firstButton.addEventListener('click', ()=>{

  countermeno();
  numerino.innerHTML = countermin;
  numeroner.innerHTML = countergig;
})

secondButton.addEventListener ('click', ()=>{
  counterplus();
  numerino.innerHTML = countermin
  numeroner.innerHTML = countergig;
})