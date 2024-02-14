//example:-1
//console.log(this);
//example:-2
// function myname(){
//     console.log(this);
// }
// myname();
//example:-3
// var myname='nimk';
// function mynames(){
//     console.log(this.myname);
// }
// mynames();
//interview que:-
let biodata={
    myname:{
        realname:"tej",
        channel:"thapa"
    },
    myage:26,
    getdata(){
        console.log(`my name is ${this.myname.channel} and my age is ${this.myage} `);
    }
}
biodata.getdata();