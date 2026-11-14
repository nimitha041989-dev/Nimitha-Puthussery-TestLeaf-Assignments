const browserVersion = 'Chrome'
function getBrowserVersion()
{
    
   if(browserVersion='Chrome')
   {
   console.log("This is Chrome browser");
}
   //var browserVersion = 'Chrome' /* returns This is Chrome browser Chrome browser declared outside if and else block*/
  let browserVersion = 'Chrome' /*Cannot access 'browserVersion' before initialization */
     console.log("Chrome browser declared outside if and else block")    
  
       }
getBrowserVersion()