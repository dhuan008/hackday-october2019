const convertDNAToASCII = (word) => {

  // hold toASCII function results
  const ASCIIArr = [];

  // converts characters in string to ASCII
  const toASCII = input => {
    for (let i = 0; i < input.length; i++) {
        const ascii = input.charCodeAt(i);
        ASCIIArr.push(ascii);
    }
    // console.log(ASCIIArr);
    return ASCIIArr;
  }

  // testing toASCII function
  const ASCII = toASCII(word);
  // console.log(ASCII);
  
  // holds toBinary function results
  const binaryArr = [];

  // converts ASCII to binary
  const toBinary = input => {
    for (let i = 0; i < input.length; i++) {
        const binary = input[i].toString(2);
        binaryArr.push(binary);
        // console.log(binaryArr);
    }
    return binaryArr;
  }

  // test toBinary function
  toBinary(ASCIIArr);

  // format each binary result from binaryArr
  const checkEven = input => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length % 2 !== 0) {
            input[i] = '0' + input[i];
        }
    }
    // console.log(input);
    return input;
  }

  // test checkEven function
  // console.log(binaryArr);
  checkEven(binaryArr);

  // combine all binary conversions for each character into one binary
  const Binary1 = binaryArr.join("");
  // console.log(Binary1);

  // holds the results of splitIntoTwos function
  const bitsArr = [];

  // split binary number into two bit elements
  const splitIntoTwos = str => {
    // End cases
    if (str.length <= 0) {
        return null;
    }
    //
    bitsArr.push(str.slice(-2));
    //
    let newStr = str.slice(0, str.length - 2);
    splitIntoTwos(newStr);
  }
  // test splitIntoTwos function
  splitIntoTwos(Binary1);

  // console.log(bitsArr);
  // convert every two bit element into corresponding DNA base
  const DNA = bitsArr => {
    for (let i = 0; i < bitsArr.length; i++) {
        if (bitsArr[i] === '00') {
            bitsArr[i] = 'A';
        }
        else if (bitsArr[i] === '01') {
            bitsArr[i] = 'G';
        }
        else if (bitsArr[i] === '10') {
            bitsArr[i] = 'C';
        }
        else if (bitsArr[i] === '11') {
            bitsArr[i] = 'T';
        }
    }
    let dna = bitsArr.join("");
    // console.log(dna);
    return dna;
  }
  // test DNA function
  return DNA(bitsArr);
}

const convertRNAToASCII = word => {

  // hold toASCII function results
  const ASCIIArr = [];
  // converts characters in string to ASCII
  const toASCII = input => {
    for (let i = 0; i < input.length; i++) {
        const ascii = input.charCodeAt(i);
        ASCIIArr.push(ascii);
    }
    // console.log(ASCIIArr);
    return ASCIIArr;
  }

  // testing toASCII function
  let ASCII = toASCII(word);
  // console.log(ASCII);

  // holds toBinary function results
  const binaryArr = [];
  // converts ASCII to binary
  const toBinary = input => {
    for (let i = 0; i < input.length; i++) {
        const binary = input[i].toString(2);
        binaryArr.push(binary);
        // console.log(binaryArr);
    }
    return binaryArr;
  }

  // test toBinary function
  toBinary(ASCIIArr);

  // format each binary result from binaryArr
  const checkEven = input => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].length % 2 !== 0) {
            input[i] = '0' + input[i];
        }
    }
    // console.log(input);
    return input;
  }

  // test checkEven function
  // console.log(binaryArr);
  checkEven(binaryArr);

  // combine all binary conversions for each character into one binary
  let Binary1 = binaryArr.join("");
  // console.log(Binary1);

  // holds the results of splitIntoTwos function
  const bitsArr = [];
  // split binary number into two bit elements
  const splitIntoTwos = str => {
    // End cases
    if (str.length <= 0) {
        return null;
    }
    //
    bitsArr.push(str.slice(-2));
    //
    let newStr = str.slice(0, str.length - 2);
    splitIntoTwos(newStr);
  }

  // test splitIntoTwos function
  splitIntoTwos(Binary1);
  
  // console.log(bitsArr);
  // convert every two bit element into corresponding DNA base
  const DNA = bitsArr => {
    for (let i = 0; i < bitsArr.length; i++) {
        if (bitsArr[i] === '00') {
            bitsArr[i] = 'A';
        }
        else if (bitsArr[i] === '01') {
            bitsArr[i] = 'G';
        }
        else if (bitsArr[i] === '10') {
            bitsArr[i] = 'C';
        }
        else if (bitsArr[i] === '11') {
            bitsArr[i] = 'U';
        }
    }
    let dna = bitsArr.join("");
    // console.log(dna);
    return dna;
  }
  // test DNA function
  return DNA(bitsArr);
}

// revertDNA(){
//   / holds binary reverse conversion
// var reverseBin = [];
// // Convert back
// function convertToBinary(str) {
//    console.log(str);
//    for (var i = 0; i < str.length; i++) {
//        reverseBin.push(str[i]);
//        console.log(reverseBin);
//    }
//    for (var i = 0; i < reverseBin.length; i++) {
//        if (reverseBin[i] === 'A') {
//            reverseBin[i] = '00';
//        }
//        else if (reverseBin[i] === 'G') {
//            reverseBin[i] = '01';
//        }
//        else if (reverseBin[i] === 'C') {
//            reverseBin[i] = '10';
//        }
//        else if (reverseBin[i] === 'T') {
//            reverseBin[i] = '11';
//        }
//    }
//    console.log(reverseBin);
//    return reverseBin;
// }

// }

module.exports = {
  convertDNAToASCII,
  convertRNAToASCII
}
