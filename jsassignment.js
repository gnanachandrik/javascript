//AREA OF TRIANGLE
function trianglearea(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    const s = (length + width + height) / 2;
    this.calculateArea = function(){
        return Math.sqrt(s*(s-length)*(s-width)*(s-height));
    };
}
const rec = new trianglearea(5,6,7);
console.log("Area of Triangle: ",rec.calculateArea());

//ABSOLUTE DIFFERENCE
function absdiff(n1, n2){
    // return Math.abs(n1-n2);
    this.n1 = n1;
    this.n2 = n2;
    this.caldiff = function(){
        return Math.abs(n1 - n2);
    }
}
const dif = new absdiff(2,5);
console.log("Absolute difference of 2&5: ",dif.caldiff());

//LEAP YEAR
function leapyear(yr){
    this.yr = yr;
    this.checkly = function(){
        if(yr % 4 === 0 && yr%100 !==0 && yr%400 === 0){
            return true;
        }else{
            return false;
        }
    }
}
let ex = 2024;
const exyr = new leapyear(ex);
if(exyr.checkly){
    console.log(ex," is a Leap year");
}else{
    console.log(ex," is not a leap year");
}

//SMALLEST ELEMENT IN ARRAY
function smallestele(arr){
    if(arr.length === 0){
        return;
    }
    let mine = arr[0];
    for(let x of arr){
        if(x < mine){
            mine = x;
        }
    }
    return mine;
}
const arr1 = [1,2,56,23];
let small = smallestele(arr1);
console.log("Minimum element in the given array: ",small);

//SWAPPING
function swapdigit(n){
    const nums = n.toString();
    if(nums.length % 2 !== 0){
        console.log("Odd length is not defined");
        return n;
    }
    const digits= nums.split('');

    for(let i =0; i<digits.length; i+=2){
        [digits[i], digits[i+1]] = [digits[i+1], digits[i]];
    }
    const result = parseInt(digits.join(''));
    return result;
}
const number = 1234;
const swappedint = swapdigit(number);
console.log("After swapping ",number," we get ",swappedint);

//LARGEST EVEN NUMBER IN THE ARRAY
function larevenum(arr){
    if(arr.length == 0){
        return;
    }
    const temp = [];
    let i = 0;
    for(let n of arr){
        if(n%2 == 0){
            temp[i++] = n;
        }
    }
    let maxn = temp[0];
    for(let x of temp){
        if(x>maxn){
            maxn = x;
        }
    }
    return maxn;
}
const arr2 = [1,2,56,23];
let lareven = larevenum(arr2);
console.log("Maximum even element in the given array: ",lareven);

//7TH QUESTION
function deleteprop(student){
    console.log("Object before deleting: ",student);
    if('rollno' in student){
        delete student.rollno;
    }else{
        console.log("'rollno' property does not exist");
    }
    console.log("Object after deleting: ", student);
}
var student = {
    name:"John Doe",
    class:"VI",
    rollno: 12
};
deleteprop(student);