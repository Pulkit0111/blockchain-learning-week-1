const isPalindrome = (str) =>{
    let revStr="";
    for (let i=str.length-1;i>=0;i--){
        revStr += str[i];
    }
    if(revStr.toLowerCase()===str.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Hello"));