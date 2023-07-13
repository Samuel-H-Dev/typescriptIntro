/**
 * There are 2 ways to askk type
 * first ins implicit
 * second is explicit
 */

///index js made after running tsc in the terminal so it was made into a language that the computer can read 


let fName = "samuel";  //implicitly made a string 

// fName = 4 //will fail since it was set to string implicitly when it was defined 


let lName: String = "Holmes"  //explicitly set to a string by  putting ": string " before the = but after the declaration 

let mName: string | number | boolean | undefined = ""; //this means it can be any of the listed types after 

mName = 234;      //example that it can be any of those listed when it was made
mName = false;      //example that it can be any of those listed when it was made
mName = undefined;      //example that it can be any of those listed when it was made

import { twoSum } from "./typePractice";


twoSum( 5, 9)


