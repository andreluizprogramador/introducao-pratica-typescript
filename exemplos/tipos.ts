
type input = number | string;

function somarValores(input1: input, input2: input): input{
    if (typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }
}

console.log(somarValores(5,11));
console.log(somarValores('where',' is the car?'));
console.log(somarValores('where',10));