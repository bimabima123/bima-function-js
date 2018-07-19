const names = ['bima','isa','alfan'];

const fullname = names.map(function(name){
    return name+" bos";
});

const fullname2 = names.map((name) => {
    return name+" Mos";    
})

const fullname3 = names.map(name => {
    return name+" Tos";
});

const fullname4 = names.map(name => name+" kop");

// console.log(fullname);
// console.log(fullname2);
// console.log(fullname3);
// console.log(fullname4);

function sayName(name){
    console.log(name);
}
sayName("bima natawijaya");