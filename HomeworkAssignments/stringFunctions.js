
let reverseword=""
function reverseString(word)

{
 
  for(let i=word.length-1;i>=0;i--)
   {
     reverseword=reverseword+word.charAt(i)
   }
   
return reverseword
}


function palindrome(stringValue)
{
    let word=reverseString(stringValue)

    if(stringValue===word)
    {
        console.log(stringValue+ " : is a palindrome")
    }
    else
    {
        console.log(stringValue+ " : is not a palindrome")
    }
}


palindrome("madam")
palindrome("malayalam")
palindrome("telugu")

