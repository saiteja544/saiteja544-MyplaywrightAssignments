
let originalWord="hello"
let reverseString=""
for(let i=originalWord.length;i>=0;i--)
{
   reverseString=reverseString+originalWord.charAt(i)

}
   if(originalWord===reverseString)
   {
    console.log(originalWord+": is Palindrome")
   }
   else
   {
    console.log(originalWord+": is not a Palindrome")
   }