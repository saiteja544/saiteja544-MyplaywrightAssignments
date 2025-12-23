function launchBrowser(browserName)
{
    if(browserName==="chrome")
    {
        console.log("This is required browser to run tests")
    }
    else
    {   
       console.log("this is not a requied browser to run tests")
    }
}
function runTests(testType)
{
    switch(testType)
    {
        case "smoke": 
                console.log(" This is smoke testing")
                break;
        case "sanity": 
                console.log(" This is sanity testing")
                break;
        case "regression":
                console.log(" This is regression testing")
                break;
        default: console.log(" This is default smoke testing")
                 break;
    }
}

launchBrowser("chrome");
launchBrowser("edge");
runTests("sanity");
runTests("random")