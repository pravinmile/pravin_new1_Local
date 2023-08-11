function sum(){
    let a=0;
    for(let i in arguments){
        a+=arguments[i];
    }
    console.log(a);
}
sum(20,30,50,'abvjhga');