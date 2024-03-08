

// function sumVal(){
//     return "last\n";
// }


// function add(a,b="middle\n",c=sumVal()){  // default parameter b = 10
//     return a+b+c;
// }
// // console.log(add(10,29));

// console.log(add("first\n")); // output 20 , output sumVal =>120 // first middle last



function main(a,b=main()){
    return a+b;
}
main(2,3); // c = main(2,3)
// console.log(c) // output =>5