// function 
var whatDo = function(player,post) 
{
    switch(player){
        case 'point guard':
            return post + ' plays a vital role';
        case 'shooting guard':
            return post + ' who shoots is gud';
         case 'forward':
             return post + ' rebound post';
        default:
            return post + 'substitte';

    }
} 
console.log(whatDo('point guard' , 'kobe'));

console.log(whatDo('shooting guard' , 'james'));

console.log(whatDo('forward' , 'allen'));






// object and method
var sagar = {
    firstName: 'sagar',
    lastName: 'Shresrtha',
    birthYear:1996,
    family: ['ganga','hum','Devi'],
    calAge:function(){
        this.age= 2018-this.birthYear;
    }
};
sagar.calAge();
console.log(sagar);
console.log(sagar);
console.log(sagar.family);

var ganga= new Object;
ganga.birthYear=1996;
ganga.job='Nurse';
console.log(ganga);
var name=['avinaya'];
name.push('khate');
console.log(name);




console.log(sagar.calAge());