                                                      //Argument object

/*

Q. Write a program where it should be printed "Zero argument passed"
if user is not passing any arguments and as well as find the sum of those number 
if user passing multiple Arguments           

*/

/*
function display(num1, num2, num3) {
  if (arguments.length == 0) {
    console.log("Zero argument Passed !");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}
display(55, 66, 89); 
*/

                                              // Example of Function Expression

/*
let x  = function(val1, val2){

    return val1*val2;
    
}
let y = x(5,7);
console.log(y);
*/

                                             //Example of Named Function Expression

/* 
let val = function greet(){

    console.log("Good Morning !");
 }
 val();
*/

                                            // Passing function as an Arguments

/*
function x (){
    console.log("Rakesh Kumar");
}

function y(){
    console.log("Parida ");
}

let z  = function(fName,lName){

    console.log(x(),y());

} 
z(x,y)

*/

                                              //Immidiate Invoked function Expression

/*
(function (value1, value2){
    console.log(arguments[0],arguments[1]);
})
("Hello", "World");
*/

                                             //Object in JavaScript

/*
let person = {
    Name    : "Rakesh Kumar Parida",
    Age     : 23,
    Height  : 5.6,
    Weight  : 75,
    Address : "Bhubaneswar" 

}
person.Name = "Bikash Kumar Parida"
delete person.Address;
console.log(person);

                                            // Itrate the above object by using For in loop




for(let display in person){
  console.log(display + " : " + person[display]);
}

*/

                                                         // Methods in Object 

/*                                                
let computer = {
  Display    : "14inch",
  Ram        : "8Gb",
  Cpu        : "i3 10th gen",
  KeyBoard   : "Backlit",
  DisplayType: "Ips Lcd",

calculating : function(){
    console.log((2*44/7));

  },
  getMeTheValue : function(){
    console.log("The value is fetched !");
  },

  PrintProperties : function(){
    console.log(computer);
  }
}
console.log(computer.calculating());
console.log(computer.getMeTheValue());
console.log(computer.PrintProperties());

*/

                                                 // Four types of defining Method of an Object

                                                   //Type-- 1 0

/*

let Bike = {

  Brand : "Kawasaki",
  Model : "Z1000",
  Hp    : "140bhp",
  Color : "Black",

   speed : function(){
  
    let bhp = 200;

    if(bhp >= 140 ){
      console.log("It is a damn Super fast bike for sure !");
    }else if( bhp < 100 ){
      console.log("It is Mid super Bike !");
    }else if (bhp < 90){
      console.log("Low end super bike !");
    }else{
      console.log("It is a Sports Bike man !");
    };

    }

  }
  console.log(Bike.speed());

*/

                                                //Math Object In Js

/*
let date = new Date();
// console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getDay());
console.log(date.getHours());
console.log(Math.floor((Math.random()*7)+1));

*/

                                                      // New KeyWord in Js

/*
let Person = new Object();
Person.name = "Rakesh Kumar";
Person.age = 23;

console.log(Person.name);
console.log(Person.age);

*/

                                                   //Getter and Setter Method in Js

/*
let person = {

  Name : "Rakesh Kumar Parida",
  Age  : 23,


  get value(){

    return this.Name ; 
  },
  

  set value(newProp){
    this.Name = newProp;
  },


};
person.value = "Bikash Kumar Parida";
console.log(person.Name);

*/

/*
let Bike = {
  Brand : "BMW",


  get value(){
            return this.Brand 
  },

  set value(newParam){

    this.Brand = newParam;
  },

}
Bike.value = "Kawasaki";
console.log(Bike.Brand);
*/

                                            //Object Constructor in Js

/*
function Student(Name, Age, Gender, Nationality, state){

  this.Name = Name;
  this.Age = Age;
  this.Gender = Gender;
  this.Nationality = Nationality;
  this.State = state;

};


let Obj1 = new Student("Rakesh Kumar Parida", 23, "Male", "Indian", "Odisha");
console.log(Obj1);

let Obj2 = new Student("Bikash Kumar Parida", 20, "Male", "Indian", "Odisha");
console.log(Obj2);

let Obj3 = new Student("Rajesh Kumar Parida", 22, "Male", "Indian", "Odisha");
console.log(Obj3);
*/

                                            //Object PROTOTYPE in Js

/*

function Student(Name, Age ){

  this.Name = "Name";
  this.Age = Age ;
  

};
let Student1 = new Student("Rakesh Kumar Parida", 23);
let student2 = new Student("Bikash Kumar Parida", 20);

Student.prototype.Nationality = "Indian";



console.log(Student1.Nationality);
console.log(student2.Nationality);

*/

//   Nasted Object

/*

let person = {
  Name : "Rakesh Kumar Parida",
  Age : 23,

  computer  : {

    Brnad : "Lenevo",
    cpu : "i3",

    price : {
      Rupee : 42400,

      BoughtFrm : {
        
        Address : "Sahid Nagar"

      },
    },

  },
};
console.log(person.computer.price.BoughtFrm);

*/

                                             // HOISTING IN JAVASCRIPT

/*


x = 10;

console.log(x);

var x;

*/

                                           //DOM(Document Object Model)

                                           //Get Element By Id Name

                                            //First of all I selected an element from HTML then I applied some styles by using JavaScript

/*
let x = document.getElementById("lstOl");
x.style.listStyle = "none";
x.style.display = "flex";
x.style.justifyContent = "center";
x.style.backgroundColor = "black";
x.style.color = "white";
x.style.padding = "10px";

*/

                                        //  Get Element By Class Name

                                        // Here I changed the multiple texts from HTML document by just using javascript method "Get Element By Class Name"

/*

let obj = document.getElementsByClassName("eOne");
console.log(obj);

for(let i = 0; i < obj.length; i++){
  obj[i].innerText = "HelloWorld" + i;
}
 
*/

                                         //Get Element By Tag Name

/*


let docs = document.getElementById("opps");

let x = docs.getElementsByTagName("h1");
for(let i = 0; i <x.length; i++){
  x[i].innerHTML = "Hello World !";
}

*/

                                        //QuerySelector  

                                         //let x = document.querySelector("li.elm");

                                        //Traversing Elements in Js

                                        // There are five ways to Travering Elements in Dom

/*
      1. nextElementSibling
      2. previousElementSibling
      3. parentElement
      4. firstElementChild
      5. lastElementChild

      */

                                        //  Example of Selecting parentElement from a child Element

/*
    let doc = document.getElementById("hello");
    let x = doc.parentElement;
    console.log(x);
*/

                                        // Example of selecting firstChildElementChild form Parent Element

/*
    let x1 = doc.firstElementChild;
    console.log(x1)
    */

                                         //Example of selecting lastElementChild from parent Element

/*
    let z  = doc.lastElementChild;
  console.log(z);
  */

                                       // Example of Selecting previous Sibling child

/*
  let op = doc.previousElementSibling;
  console.log(op);
*/

                                      //Example of selecting next sibling child

/*   
let ops = doc.nextElementSibling;
console.log(ops);
*/

                                        //innerHTML



/*
 let y1 = doc.innerHTML = "Rakesh Kumar Parida";
console.log(y1);
*/

                                          // innerText
                                             

/*
let s1 = doc.innerText = "Bikash Kumar Parida";
console.log(s1);
*/

                                           //  TextContent

/*
let q = doc.textContent  = "Good Morning";
console.log(q);
*/

                                           //Insert Before

/*

let getElem = document.getElementById("hello");


let crtElem = document.createElement("h1");
crtElem.textContent = "I will become a sucessful person for sure and i will be bulding my own company !";
crtElem.style.color = "blueviolet";


let getPos = getElem.lastElementChild.previousElementSibling.previousElementSibling.nextElementSibling;

getElem.insertBefore(crtElem, getPos);

*/

                                        // Remove Child





                                        //Replace Child





                                        //Clone Node         it takes boolean value as a parameter




                                         // Append Child



                                         //Insert Adjacent Html        //Important


/*

let elm = document.getElementById("hello");

let html = "<h1>New h1</h1>";

elm.insertAdjacentElement("beforeend", html);

*/


                                            // Set Attribute in Js


/*
let doc  = document.getElementById("inpt");

doc.setAttribute("class", "box-1" );

*/

                                            //get Attribute



/*
  let op = document.getElementById("inpt");
  let elem = op.getAttribute("id");
  console.log(elem);
*/





                                            // Remove Attribute

/*
let doc  = document.getElementById("inpt");
doc.removeAttribute("class");
*/


                                        // has Attribute ..          to know if the attribute is avilable or not in the Element

  
                                
/*
let doc = document.getElementById("inpt");
let isAvilable = doc.hasAttribute("class");
console.log(isAvilable);
*/

                                   
                                    //Inline Style

/*
  let doc = document.getElementById("inpt");

  doc.style.backgroundColor = "red";
  doc.style.border = "2px solid blue";
  */



                                                   //Css class

/*
1.classList.add();
2.classList.remove();
3.classlist.contains();
4.classList.replace();

*/




                                                //  classList.add();




/*
let doc = document.getElementById("box");
doc.classList.add("color", "dimension");
*/





  
                                             // classList.remove();





/*
    let doc = document.getElementById("box");
    doc.classList.remove("color", "dimension");
*/


             

                        
                                           // classList.contains();




/*
let doc = document.getElementById("box");
doc.classList.add("color")
 let op = doc.classList.contains("color");
 console.log(op);
*/




                    
                                         // classList.replace();

  



 /*                                        
let doc = document.getElementById("box");
doc.classList.add("color", "dimension");
doc.classList.replace("dimension", "color");

*/


                          

                                     

                                      // How to Itrate a classList ??


/*
let doc = document.getElementById("box");
doc.classList.add("color", "dimension");

for(let i of box.classList){
  console.log(i);
}

*/


                                // How to know Height and Width by using JavaScript

/*                  
let doc = document.getElementById("box");
doc.style.border = "10px solid blue"
doc.style.background = "red";

console.log(doc.offsetHeight);      // oofsetHight calculates the total height including padding,height etc..
console.log(doc.offsetWidth);



console.log(doc.clientHeight);   //clientHeight calculates the actual height excluding padding,border etc..
console.log(doc.clientWidth);

*/ 




                                          //Dom Events in Js 


// There are two ways to listen the the user input 


/*
1. through the inline JS
2. Through the EventListener
*/

 
                                    //1.  Through the Inline js

/*
function clicked(){
 console.log("Hello Wolrd !");
}
*/ 



                                        // Through the Event Lisner


                                 // clcik event


 /*
let x  = document.getElementById("btn");
x.addEventListener("click",function(){
  console.log("You just hit the button dude !");
})

*/


                              // mouseout event


/*
  let doc = document.getElementById("btn");
  doc.addEventListener("mouseout", function(){
    console.log("Your mouse is out !");
  });

*/


                                // mouseover event

/*
let doc   = document.getElementById("btn");
doc.addEventListener("mouseover", function(){
  console.log("Your mouse is on button ! ");
});
*/


                         //    CAN WE ADD MULTIPLE EVENT LISTNER ?     HELL YES WE CAN


  
/*
let x  = document.getElementById("btn");
x.addEventListener("click", function(){
  console.log("You just clicked on the Button ");
});

x.addEventListener("mouseover", function(){
  console.log("Your mouse is on the button right away !");
});

x.addEventListener("mouseout", function(){
  console.log("Your mouse is out now !");
});

*/




                                // How to remove Event Listiner ?




/*
  
let x  = document.getElementById("btn");
x.addEventListener("click", click1);
x.addEventListener("click", click2);
x.removeEventListener("click", click2);

function click1(){
  console.log("This is click 1");
}
function click2(){
  console.log("This is click 2");
}

*/


                                          // Page Load Events


       // DOMContentLoaded event

/*
window.addEventListener("DOMContentLoaded", function(){
  console.log("Dom Tree Created !");
});

*/



            //  "load" event              when all resources are fetched


/*
let doc = document.getElementById("hello");

doc .addEventListener("load", function(){
  console.log("Resources Downloaded !");
});

*/


                                          


                                        // Mouse Events

                              


                       //click event


  
/*
let elem = document.getElementById("box");

elem.addEventListener("click",function(){
  console.log("You just clicked your mouse on the box  !");
});

*/


                       //mouseout event



/*
let elem = document.getElementById("box");


elem.addEventListener("mouseout", function(){
  console.log("Your mouse is out from the box");
});
*/




                 // mouseover event



/*
let elem = document.getElementById("box");

elem.addEventListener("mouseover", function(){
  console.log("Your mouse is on the box");
});

*/


 
          

                         // contextmenu event


/*
  let elem = document.getElementById("box");

  elem.addEventListener("contextmenu", function(){
    console.log("You just click on the right button of your mouse !");
  });

  elem.addEventListener("click", function(){
    console.log("You just clickd on the left button of your mouse !");
  });

  */



                      // dblclick event


                      
                      
  /*                 
  let elem = document.getElementById("box");

  elem.addEventListener("dblclick", function(){
    alert("You just double clicked on your mouse !");
  });
*/




                           // mousedown event



/*
let elem = document.getElementById("box");
elem.addEventListener("mousedown", function(){
  alert("You just down your mouse button !");
});

elem.addEventListener("mouseup", function(){
  console.log("You relesed your mouse button !");
});
*/





                                      //KeyBoard Events 



                

                      // keydown event



/*
window.addEventListener("keydown", fetchdata);
  
function fetchdata(event){
  console.log(event.key);
};

*/


                   // keyup event

/*
window.addEventListener("keyup", value);

function value(data){
  console.log(data.key);
};

*/

        
                   // keypress

/*
window.addEventListener("keypress", fetch);

function fetch(op){
  console.log(op.key);
};
*/





                                    // Scroll Events 


                      
           //scroll


/*
window.addEventListener("scroll", function(){
  console.log("The is is being scrolled !");
});

*/



                             // wheel   ( "deltaY" for vertical and "deltaX" for horixontal) 


 
/*
window.addEventListener("wheel",func1);
function func1(op){
  if(op.deltaY < 0){
    document.body.style.background = "blue";
    console.log("scrolling up !");

  }else if(op.deltaY > 0){
    console.log("scrolling down !");
    document.body.style.background = "red"

  };
};
*/


                    

                               // 3rd Scroll Event  (pageYOffset)


        
/*
window.addEventListener("scroll", function(){
  if(window.pageYOffset > 10){
    document.body.style.background = "blueviolet";
  }else{
    document.body.style.background = "white";

  };
});
*/


 


                                  // Input events in Js 


    
                      
                     // focus and blur events 




/*
let elem = document.getElementById("inpt");

elem.addEventListener("focus", function(){
  elem.style.background = "red";
});

elem.addEventListener("blur", function(){
  elem.style.background = "white";
})
*/


                      

                                      // change event


/*
let doc  = document.getElementById("inpt");
doc.addEventListener("change", function(){
  console.log(this.value);
});

*/



                                  //input event 


/*

let doc = document.getElementById("inpt");
doc.addEventListener("input", function(){
  console.log(this.value);
});

*/





                                         //  Event bubbling and Capturing



             // event bubbling   with stop Propagation





/*
let btnVal = document.getElementById("btn");
btnVal.addEventListener("click", btnFunction);



let divVal = document.getElementById("div1");
divVal.addEventListener("click", divFunction);


let bodyVal = document.body;
bodyVal.addEventListener("click", bodyFunction);


function btnFunction(fun1){
  console.log("Button is clicked .. ");
  fun1.stopPropagation();
  
};


function divFunction(fun2){
  console.log("Div is clicked .. ");
  fun2.stopPropagation();
};

function bodyFunction(func3){
  console.log("Body is clicked .. ");
  func3.stopPropagation();
};

*/




                          // event capturing




/*

 let btnVal = document.getElementById("btn");
 btnVal.addEventListener("click", btnFunction,true);
                          
                          
let divVal = document.getElementById("div1");
divVal.addEventListener("click", divFunction,true);
                          
                          
let bodyVal = document.body;
bodyVal.addEventListener("click", bodyFunction, true);
                          
                          
function btnFunction(){
console.log("Button is clicked .. ");
 };
                          

function divFunction(){
console.log("Div is clicked .. ");
  };
                          
function bodyFunction(){
 console.log("Body is clicked .. ");
  };


*/





                                     // preventDefault 




/*
let doc = document.getElementById("anchor");
doc.addEventListener("click", fun);

function fun(even){
  even.preventDefault();
};

let elem = document.getElementById("sub");

elem.addEventListener("click", funOne);

function funOne(nameOne){
nameOne.preventDefault();
};

*/





                            




                                           //BOM   (Browser Object Model)

/*

var x = 10 ;
console.log(window.x);
                    
function func1(){
  console.log('Hello World !');
};
window.func1();

*/ 




                                      // Window

                                       

                // InnerHeight  and InnerWidth of a web page 
                
                
/*
    console.log(window.innerHeight);
    console.log(window.innerWidth);

*/





              // Know to total browser size by OuterHeight and OuterWidth





    /*

    console.log(window.outerHeight);
    console.log(window.outerWidth);


    */





                       //How to create a new window just by using Js 



/*
    let doc = document.getElementById("btn1");
    doc.addEventListener("click", function(){
      window.open();
    });


    */








                                // How to open new window, Set features and Close the window






/*
  let elem = document.getElementById("btn1");
  let elem2 = document.getElementById("btn2");


  let url = "https://www.google.com";
  let nameOne = "google";
  let features = "height = 300px, width = 300px ";
  let cls;



 elem.addEventListener("click", function(){
   cls = window.open(url, nameOne, features);
 });

 elem2.addEventListener("click", function(){
  cls.window.close();
 });

 */ 





                       // Time out and Time Interval in js




                              //setTimeout();









/*
setTimeout(func1, 5000);

function func1(){
  console.log("The has been executed !");
};
*/


        

  
                                      // setInterval();







  /*
setInterval(func1,1000);

function func1() {
  console.log("code is being executed !");
};

*/







                                       //clearTimeOut();






/*

let val = setInterval(func1, 1000);

function func1() {
  console.log("The function is being executed !");
};

let doc = document.getElementById("btn");
doc.addEventListener("click", function(){
  clearTimeout(val);
});


*/ 







                                           //Location object



                                //some properties to get the information of an URL 



                                                  // location.href


/*
  console.log(location.href);
  it is use to fetch the url of a webpage
*/


                                                 //location.pathname

/*
  console.log(location.pathname);
  it is use to get the pathname of a webpage

*/



                                                // location.protocol



 /*                                             
  console.log(location.protocol);
  it is use to get the protocol of a webpage
*/






                      //  set a link to button 







                // by using     window.location



/*
let doc  = document.getElementById("btn");
doc.addEventListener("click",function(){
  window.location = "https://www.instagram.com"
});

*/






                    // set link using     location.href




/*

let elem = document.getElementById("btn");
elem.addEventListener("click", function(){
  location.href = "https://www.google.com";
});

*/





                           // location.replace("link")

                           // it doesn't create history



/*


let elem = document.getElementById("btn");

elem.addEventListener("click", function(){
  location.replace("https://www.google.com");     
});


*/







                                      // Navigator Objects Properties 







/*
console.log(navigator.cookieEnabled);
console.log(navigator.doNotTrack);
console.log(navigator.geolocation);
console.log(navigator.language);
console.log(navigator.appVersion);
console.log(navigator.javaEnabled());
console.log((navigator.platform));
console.log(navigator.appName);
console.log(navigator.product);
console.log(navigator.userAgent);
console.log(navigator.vendor);
*/










                                          //Screen Object properties 




   /*                     
console.log(screen.colorDepth);
console.log(screen.height);
console.log(screen.width);
console.log(screen.pixelDepth);
*/








                                                           // Arrow function



                             //  return something using Arrow Function       
 
/* 
let arrFun = (val1, val2) => val1*val2;

console.log(arrFun(100,100));
 */



                                 // log something using Arrow function 


 /*
 let log = ()=> console.log("Hello World !");

 log();

 */





                                   //Diffrence between let and var


  // let                  


  /*
let a = 10;

if(true){
  let a = 20 ;

  console.log(a);
}
console.log(a);
*/


                         // var

/*
var x  =10 ;

if(true){
  var x  = 20;
  console.log(x);
};
console.log(x);
*/


// let and var with for loop


/*
for(var i = 0; i <10 ; i++){
  setTimeout( func1,5000);
  function func1(){
    console.log(i);
  };
};

*/




//   Not defined vs undefined 



 

// default parameter in Ecma 6

/*
function funOne(){
  return 100;
}


function fun(a , b = funOne()){

  return a + b;
}
console.log(fun(10));
*/

/*
function fun(a, b = 20){
  return a + b;
}
console.log(fun(10));
*/


 

                                // find and findIndex in ECMA 6





                                       //find();

/*
let arr = [20,34,55,78,5,90,120];

let findRes = arr.find(function(put){
  return put < 100;
});

console.log(findRes);             //output is 20

*/





                          //findIndex();





/*
let arr = [100,22,55,67,98,23,66,70];

let x = arr.findIndex(function(act){
  return act < 40;
});

console.log(x);                       // output is 1 


*/





                      //  find() and findIndex() of Ecma 6 with object




/*
  let arr = [
    {id : 1},
    {id : 10},
    {id : 4},
    {id : 9},
    {id : 21},
  ];

  let x = arr.find(function(val){
    return val.id > 9 ;
  });
  console.log(x);

  */









                                         //Callback function in js



                              //Callback function without Parameter


 /*                             
function greet(){
  console.log("Good Morning !");
};

function Callbck(a){
  return a();
};
Callbck(greet);

*/





                        // callback function with Parameter 


/*
function greet(val){
  console.log("Good Morning " + val);
};


function disp(a){
  let val = "Sir/Mam";
  return a(val);
};
disp(greet);

*/





                                 //  callback function with Arrow function 





 
/*
function hello(){
  console.log("Good Morning !");
};
hello(a = ()=> console.log("Dude"));
a();

*/






                     //Class in ECMA 6








/*
class Students{
  constructor(){
    this.name = "Rakesh Kumar Parida";
    this.age = 23;
    this.height = 5.6;
    this.weight = 80;
  };

  studying(){
    return "Studying Computer Science ";
  };
};

let student1 = new Students();
console.log(student1.name);
console.log(student1.age);
console.log(student1.height);
console.log(student1.weight);
console.log(student1.studying());
*/











                                               //Example in below is similar as class in ECMA 6








/*
function Mobile(Brand, Model, old){
  this.Brand = Brand;
  this.Model = Model;
  this.old = old;



}
let mobile1 = new Mobile("Nokia", "c1", 2 );
let mobile2 = new Mobile("Samsung", "A70", 3);

console.log(mobile1.Brand);
console.log(mobile2.Brand);
console.log(mobile1.Model);
console.log(mobile2.Model);
Mobile.prototype.launchYear = 2;
// console.log(mobile1.launchYear);
 mobile1.launchYear =  2;
 console.log(mobile1.launchYear);

*/









                               // Rest parameter in ECMA 6 






/*

function add(...val){
  let sum = 0;
  for(let i = 0; i < val.length; i++){
    sum = sum + val[i];
  };
  console.log(sum);
};
add();

*/








                            // Spread operator in ECMA6



/*
let arr1 = [1,2,3,4,5];

let arr2 = [...arr1,6,7,8,9];

console.log(arr2);

*/



/*
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let arr3 = [...arr2, ...arr1];
console.log(arr3);
*/




        

                              // For of loop in ECMA SCRIPT 6 





          // Itrating an arry using "For of" loop




 /*
          let arr = [1,2,3,4,5];


          for(let i of arr ){
            console.log(i);
          };

*/






                                 // Array Destructuring in ECMA SCRIPT 6







                       //this is how we used to give a variable name to the value


/*
    let arr = ["Rakesh Kumar Parida", 23, 5.6, 80];

    let name = arr[0];
    let age = arr[1];
    let height = arr[2];
    let weight = arr[3];

    console.log(weight);

    */




                             // how we do it by just using Array Destructring 






/*
              let arr = ["Rakesh Kumar Parida", 23, 5.6, 80];

              let[name, age, height, weight] = arr;

              console.log(name);
              console.log(age);
              console.log(height);
              console.log(weight);

*/






                   // Object Destructing in ECMA SCRIPT 6



/*
let person = {
  Name   : "Rakesh Kumar Parida",
  Age    : 23,
  // Height : 
  Weight  : 80,

  newPerson :{
    nameTwo : "Bikash Kumar Parida",
    Age : 20,
  }

};

let{Name , Age: newAge, Height = 5.7, Weight,  newPerson : {nameTwo, Age}} = person;

console.log(Name);
console.log(newAge);
console.log(Height);
console.log(nameTwo);

*/






                            // Modules in Es6 












                                // How to print your name 



 /*                               
let personOne = {
  fName : "Rakesh",
  mName :"Kumar",
  lNmae : "Parida",

  addName : function(){
    console.log(this.fName + " " + this.mName + " " +this.lNmae);
  }
};

personOne.addName();
*/









                                   // hasOwnProperty();  for Onject 




/*

               // It returns true when it is avilabe or false when it is not avilable
let person = {

  Name : "Rakesh Kumar Parida"

};
console.log(person.hasOwnProperty("Name"));      


*/







                                                // Prototype Chainning






/*
function Creature(ls){
  this.lifeSpan = ls;
};

Creature.prototype.breath = function() {
  console.log("Breathing !");
};

let creature1 = new Creature(100);
console.log(creature1);



function Person(fName, lName, a) {

  this.firstName = fName;
  this.lastName   = lName;
  this.Age  =  a;
  
};

Person.prototype.fullName = function(fName, lNmae, Age) {

  console.log(this.firstName + " " + this.lastName);
};

Person.prototype.__proto__ = Object.create(Creature.prototype);

let person1 = new Person("Rakesh", "Kumar", 23);
console.log(person1.breath());
*/










                          // Example 2









/*
function ConnectToChildElem(prop){
  this.PropName = prop;
}

ConnectToChildElem.prototype.fetchApi = function(){
  console.log("jSon file fetching..");
}

let connect1 = new ConnectToChildElem("Xml file is being processed");
console.log(connect1);

                 //Inheriting parentConstructor Property

function PElement(p1, p2, p3){
  this.param1 = p1;
  this.param2 = p2;
  this.param3 = p3;

};

PElement.prototype.composition = function(){
  console.log(this.param1+ " " + this.param2+ " " + this.param3);
};

PElement.prototype.__proto__ = Object.create(ConnectToChildElem.prototype)

let element1 = new PElement("Fetching","Api","Configurations" );
let element2 = new PElement("Xml", "jSon", "?");
console.log(element1.fetchApi());
console.log(element2.fetchApi());

*/











                                                // Class and object in Js




/*
class person {

  constructor(fName, lName, age){

    this.firstName = fName;
    this.lastName = lName;
    this.Age  = age;
  

  }

  study(){   // Normal Method 
    console.log("I am studying Computer Scince !");
  };

   static persue(){           // static method always calls with Class not Object 
    console.log("I am Persuing my B.Tech in Computer Science .. ");
  };


  // Defining Static Variables 


  static sName  = "Rakesh Kumar Paida  (Static variable)";

  

}
let person1 = new person("Rakesh Kumar", "Parida", 23);
person1.study();  // callin' normal methid with the help of Object 
person.persue(); // callin' static method with class Name 
console.log(person.sName);

*/







                                         //  Super Method




/*

class employee{

  constructor(fName, lName, age){
    this.firstName = fName;
    this.lastName = lName;
    this.Age = age;    
  };

      empDo(){
        console.log("Emp doing his Work !");
      };

      static study(){
        console.log("Hello World !");
      };

};

class manager extends employee{

  constructor(e1FName,e1LName,e1age,empFirstName,empLastName,empAge){

    super(empFirstName,empLastName,empAge)
    this.e1FirstName = e1FName;
    this.e1LastName = e1LName;
    this.e1Age      = e1age;
  };

};

let mng1 = new manager( "Bikash Kuamr", "Parida", 20,"Rakesh Kumar", "Parida", 23);
console.log(mng1);
*/ 







         // calling parent class mthod inside child class method. Both method will excute when we call msg2();






/*

class dept extends emp{
  constructor(department,fName) {
    super(fName)
    this.department = department;
  }

   msg2(){    // calling parent class mthod inside child class method. Both method will excute when we call msg2();
     super.msg(); 
     console.log("Hello World !");
   }


};
let dept1 = new dept( "Cs","Rakesh");
console.log(dept1.msg2());
*/










                         // Public and Private in ECMA SCRIPT 6






/*
class student{

  #name = "";
  constructor(n){
    this.#name = n;     // private Property
  }

 #getName(){            // Private Method
    console.log(this.#name);
  }

  fetchPvtMethod(){     //calling private method from a public method 
    this.#getName();
  }
}
let std1 = new student("Rakesh");
console.log(std1.fetchPvtMethod());

*/ 







   
                          





                                                          //  MIXIN IN ECMA SCRIPT 6





/*
  let impMethod = {
    func1(){
      console.log("Hello World !");
    },

    func2(){
      console.log("Hello People !");
    }
  };


  class employee{

    
  };

  class mng extends employee{

   
  }

  Object.assign(mng.prototype, impMethod)

  let mng1 = new mng();
  console.log(mng1.func1());
  console.log(mng1.func2());


  */


                                               // CallBack function 
          

/*
function add(a, b) {
  return a + b;
};

function b(val1, val2) {
  return val1 - val2;
};


function disp(callback, a, b) {
        return callback(a,b);
};

console.log(disp(b, 2, 5));
*/



                                         // multiplying each Element of an array using for loop 
              
  
  /*
    let arr1 = [1, 2, 3, 4, 5, 6, 7];

    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {
      arr2[i] = arr1[i] * 2;
    }
    console.log(arr2);
                
         */       



                                       // multiplying each Element of an array using map() method
              
              
              
 /*             
let arr1 = [2, 4, 8, 10, 12];


let arr2 = arr1.map(function(value){
  return value * 2;
})
      console.log(arr2);          
    */







                                                  // Array All method in JavaScript 

                                                  
                                                  
/*

1. foreach();
2.includes();
3. filter();
4.map();
5.reduce();
6.some();
7.every();
8.sort();
9.array.from();
10.array.of();

*/




                                                       // 1. foreach(); 

                                           // foreach method helps us to loop over array's item 

                      
/*
const arr = [1, 2, 3, 4, 5];
arr.forEach((value) => console.log(value));
*/



                                                     //2.   includes();


            
            
// includes(); method checks if the specified element passed in function present in Array or not 

/*
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.includes(2);
console.log(arr2);
*/


                                                        //3. filter();
                                                        
                                                        
                                     
                                  
                          
                          
// Fiilter method basically used to filter the values inside an Array. It creates a new Array and store the values according to the conditions .



                                                    //   Q1. find the odd number inside an array 
      
      

      /*
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = arr1.filter(function (values) {
  return values % 2 === 1;
});
console.log(arr1);
console.log(arr2);
*/


                                                  //   Q2.Find the even number inside an Array 
      
      
      
 /*     
let val1 = [20, 40, 33, 55, 75, 31, 98];
let val2 = val1.filter(function (getValues) {
    return getValues % 2 === 0;

});
console.log(`The origional array is ${val1}`);
console.log(`The transformation array is ${val2}`);
*/




                                        //  Q.3    Find the numbers in Array which are greater than 10
              
              
              
 /*   
const arr1 = [23, 41, 1, 3, 4, 7, 9,11,13];

const arr2 = arr1.filter(function (getValues) {
  return getValues > 5;
  
});
console.log(arr1);
console.log(arr2);

*/


     
      
      




                            

                                                     // 4. map(); 


                                    


                  //  The map () method creates a new array with the results of calling a function for every array element. 





                      //    Q1.  Double the value of each element of an array without changing the origional Array value
  
                      
                      
                      
  
/*  
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function double(x) {
  return x * 2;
}

let arr2 = arr.map(double);
console.log(arr);
console.log(arr2);
*/




                          //  Q1.  Triple the value of each element of an array without changing the origional Array value



/*

const arr1 = [33, 53, 67, 88, 21, 35, 65];

function triple(x) {
 return x * 3;
};

let arr2 = arr1.map(triple);
console.log(arr1);
console.log(arr2);
*/



                                          // Q3.Find the binary of an Array Elements 
                                          
                                          
                                          

/*
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = arr1.map(binary => binary.toString(2));
console.log(arr1);
console.log(arr2);
*/