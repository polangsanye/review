function add(x:number,y:number,z?:number):number{
    if(typeof z==='number'){
        return x+y+z
    }else{
        return x+y
    }
  
}

const add2:(x:number,y:number,z?:number)=>number=add

console.log(add(3,5));

let arr:number[]=[4,3]

interface Person{
    readonly id:number,
    name:string,
    age?:number
}

let viking:Person={
    id:3,
    name:'vking',
    age:20,
}
viking.id;

interface Radio {
    swithRadio(trigger:boolean):void;
}

class Car implements Radio{
    swithRadio(trigger:boolean){
        return 334;
    }
}

enum Direction {
    Up,Down,Left,Right
}
 