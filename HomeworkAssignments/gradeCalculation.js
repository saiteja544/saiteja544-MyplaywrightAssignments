
function gradeCalculation(score){


switch (true) 
{
    case (score>=90 && score<=100):       
                                    return 'A'
                                    
    case (score>=70 && score<=100):
        
                                    return 'B'
                                    
    case (score>=50 && score<=100):
        
                                    return 'C'
                                    
    default:
        
                                    return 'Fail'
                                    

   
}
}

 console.log("Grade is :" +gradeCalculation(90))
 console.log("Grade is :" +gradeCalculation(35))
 

