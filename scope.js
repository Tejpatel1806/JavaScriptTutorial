let a = "hello";
const first = () => {
    let b = 'hii';
    const second = () => {
        let c = "asd";
        console.log(a + b + c);

    }
    // console.log(c);aa error aapse karan ke c is not use outside function
    second();

}
first();