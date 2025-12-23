let sentence="He ran and ran and ran"
let word ="ran"
let newSentence=sentence.split(" ")
let count=0
for(let i=newSentence.length;i>=0;i--)
{
    if(word===newSentence[i])
    {
        count++;
    }
}
console.log("word count in given String is  :  "+ count)