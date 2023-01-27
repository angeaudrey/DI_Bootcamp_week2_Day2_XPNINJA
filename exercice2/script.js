
// Exercice2
//sans regex
const codePostal= prompt(" entrer le code postal")
if(String(codePostal).length != 5 ||  !Number(codePostal)){
    console.log("error")
} else {
    console.log("succès")
}

// avec regex
const codePostalRegex = prompt(" entrer le code postal")
const numberRegex = /^[\d+]{5}$/;  
if(numberRegex.test(codePostalRegex)){
    console.log("succès")
} else {
    console.log("error")
}