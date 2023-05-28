let fullName = "Kelly Reece James";
let fname, mname, lname;

let count = 0;
for (let i = 0; i < fullName.length; i++){
    let space = " ";
    if (fullName.charAt(i) == space){
        count++;
    }
}

if (count == 0) {
    fname = fullName;
    console.log("first name is "+fname);
}
else if (count == 1){
    fname = fullName.slice(0, fullName.indexOf(" "));
    lname = fullName.slice(fullName.indexOf(" ")+ 1);
    console.log("first name is "+fname);
    console.log("last name is "+lname);
}
else if (count == 2){
    fname = fullName.slice(0, fullName.indexOf(" "));
    mname = fullName.slice(fullName.indexOf(" ")+1, fullName.lastIndexOf(" "));
    lname = fullName.slice(fullName.lastIndexOf(" ")+ 1);
    console.log("first name is "+fname);
    console.log("middle name is "+mname);
    console.log("last name is "+lname);
} else if (count > 2){
    console.log("Names cannot be more than three!");
}
