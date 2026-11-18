let browserName = "Firefox";
function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("Launching Chrome browser");
    } else if (browserName === "Firefox") {
        console.log("Launching Firefox browser");
    } else if (browserName === "Edge") {
        console.log("Launching Edge browser");
    } else {
        console.log("No browser launched");
    }
}

let testType = "Regression Testing"
function runTests() {
   switch (testType) {
    case "Regression Testing":
      console.log("Running Regression Testing");  
        break;
        case "Functional testing":
            console.log("Running Functional testing");
            break;
            case "Smoke Testing":
                console.log("Running Smoke Testing");
                break;
                case "Performance Testing":
                    console.log("Running Performance Testing");
                    break;   
    default:
        console.log("No tests to run");
        break;
   }
}
launchBrowser(browserName)
runTests()
