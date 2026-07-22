// var side=parseFloat(prompt("enter the first number"));

// function parameters(a){
// return a*4;

// }

// var result=parameters(side);

// window.alert(result);


// function add(){
//     let n1=parseInt(document.getElementById('Number1').value);
//     let n2=parseInt(document.getElementById('Number2').value);


//     let result=n1+n2;
 
//     document.getElementById('Result').innerHTML=result;
// }




// let signal=prompt("Enter signal color(red,yellow,green)");

// switch(signal.toLowerCase()){

//     case"red":
//     document.write("Nillra!!");
//     break;

//     case"yellow":
//     document.write("Murukku thangooo");
//     break;


//     case"green":
//     document.write("Jaddi ah perattu");
//     break;

//     default:
//         document.write("Tharkuri");
//         break;




// for (var i=1; i<=5; i++)
// {
//     console.log(i);
// }


//  let battery=50;

//     while(battery<=100){

//         console.log("battery"+ battery+"%");
//         battery += 10;
//     }
//     console.log("battery fully charged");



// let password;

// do{
//     password=prompt("Enter the password:");
// }while(password!=="1328");

// window.alert("Login Successfull");


// let limit=prompt("Enter a number");


// let sum=0;

// for(var i=2;i<=limit;i+=2){

//     sum=sum+i;
//     // document.write(i)
//     document.write("<br>");
// }
// document.write(sum);

// let myname="kalai";

// let name=prompt("Enter your name");

// for(var i=1; i<=5; i++){
//     document.write(name+i);
//     document.write("<br>")
// }




function add() {
  
    let product=parseInt(document.getElementById('item').value);

    product=product+1;

    document.getElementById('item').value=product;
    document.getElementById('out').innerHTML="You added an item !!! Total:" +
product;
}