function isAlphabet(X) {

var letters=/^[A-Za-z]+$/;

if(!X.match(letters)){

    throw "Not Alphabet";
}

else{

    return "Yes";
}

try{

    isAlphabet(X);
}catch(e){

    console.error(e);
}

};

module.exports = isAlphabet;
