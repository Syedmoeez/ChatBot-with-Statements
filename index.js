let message=prompt("Welcome to moeez tution center \n FAQ: \n About us: type hello \n which course: type course \n  how much cost: type cost \n which grades: type grade")
if ( (message== "About us")||(message=="hello")){
    alert("Hi there this is Moeez Tution center. We teach students a variety number of subjects. We want students to shine.")
}

else if((message=="Course")||(message=="course")){
   alert("Math,science and english available") 
}
else if((message=="Grade")||(message=="grade")){
    alert("Grade 1-5") 
 }
else if((message=="Cost")||(message=="cost")){
    alert("3000 per month") 
 }

else{
    alert("data not found")
}