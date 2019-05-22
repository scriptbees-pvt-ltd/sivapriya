function vowelconsonant(str) 
{ 
   var vowels = 0, consonants = 0, whitespace= 0;
    for (var i = 0; i < str.length; i++) { 
           
       x = str[i]; 
  
        if ( (x >= 'a' && x <= 'z') ||  
              (x >= 'A' && x <= 'Z') ) { 
  
         
        // x = tolower(x); 
  
            if (x == 'a' || x == 'e' || x == 'i' || 
                x == 'o' || x == 'u'){ 
                vowels++;
                } 
            else{
                consonants++;
            } 
        } 
        
        else{
            whitespace++;
        } 
    } 
    console.log("Vowels: "); 
    console.log("Consonants: "); 
    console.log("Whitespace: "); 
}
{ 
    str = "geeks for geeks"; 
    vowelconsonant(str); 
    return 0; 
} 