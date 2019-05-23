function vowelconsonant(str) 
{
    var vowels = 0, consonants = 0, whitespace= 0;
    for (var i = 0; i < str.length; i++) { 
        
       var x = str[i]; 
        if ( (x >= 'a' && x <= 'z') ||  
              (x >= 'A' && x <= 'Z') ) { 
                
            if (x == 'a' || x == 'e' || x == 'i' || 
                x == 'o' || x == 'u'){ 
                vowels++;
                }else{
                consonants++;
            } 
        } 
        
        else{
            whitespace++;
        } 
    } 
    console.log("Vowels: "+vowels); 
    console.log("Consonants: "+consonants); 
    console.log("Whitespace: "+whitespace); 
}
str = "geeks for geeks";
vowelconsonant(str); 
return 0; 
 