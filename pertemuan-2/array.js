const animal = [
    "Sapi", "Kambing", "Babi", "Kuda"
];

console.log(animal[0], animal[3])
for(let i=0; i< animal.length; i++){
    console.log(`List Hewan ${animal[i]}`);
}


for (const hewan of animal){
    console.log(`Hewan ${hewan}`);
}