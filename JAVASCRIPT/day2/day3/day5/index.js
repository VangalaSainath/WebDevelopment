let obj={
    name:"SAITEJA",
    age:23,
}
console.log(obj)
let source={
    salary:2000000,
    company:'JSP',

};
console.log(source);
console.log(Object.assign(obj,source))
console.log(source)
console.log(Object.values(obj));
console.log(Object.keys(obj));
//seal()
console.log(Object.freeze(obj));
console.log(obj.sirname="samith");
console.log(obj.designation="DEVELOPER")
console.log(obj);
//entries()will convert object into arrays
console.log(Object.entries(obj))
