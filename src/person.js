export default class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return `${this.name} ${this.age}`;
    }
}

export function sum(a,b){
    return test(a);
}

function test(a){
    return a ** 3;
}

// export {sum};
// export default Person;