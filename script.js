let clickbtn=()=>{
    let mark=document.getElementById("markinput").value
   

if (mark >=90 && mark <=100) {
    document.getElementById("status").innerHTML="PASSED <br> grade A+ "
} else if(mark >=80 && mark <=89){
    document.getElementById("status").innerHTML="PASSED <br> grade A "
}else if(mark >=70 && mark<=79){
 document.getElementById("status").innerHTML="PASSED <br> grade B+ "
} else if( mark >=60 && mark <=69){
 document.getElementById("status").innerHTML="PASSED <br> grade B "
}
else if( mark >=50 && mark <=59){
   document.getElementById("status").innerHTML="PASSED <br> grade C+ "
  }
  else if( mark >=40 && mark <=49){
   document.getElementById("status").innerHTML="PASSED <br> grade C "
  }
  else if( mark >=30 && mark <=39){
  document.getElementById("status").innerHTML="PASSED <br> grade D+ "
  }
  else if( mark >=20 && mark <=29){
  document.getElementById("status").innerHTML="FAILED <br> grade D "
  }else{
    document.getElementById("status").innerHTML="FAILED <br> grade E "
}

}


