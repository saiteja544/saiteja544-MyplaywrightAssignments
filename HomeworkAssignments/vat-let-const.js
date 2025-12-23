const browserVersion="chrome"
function getBrowserVersion()
{
  if(browserVersion==="chrome")
   {
   // var browserVersion="edge"
   let browserVersion="edge"
    console.log("Inside block: "+ browserVersion)
   }
   console.log("outside block :" +browserVersion)
}
getBrowserVersion();