//UTILITY FUNCTIONS
    var util = {
        //is Undefined (boole) (works for null or undefined or functions that have no return value)
        isUndefinedOrNull: function(obj){
            return obj == undefined;          
        }
    }
    var utilNum = {
        //set precision
        precision: function(decimal, precision){
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
            var factor = Math.pow(10, precision);               //eg. 10^2 returns 100
            var tempNumber = decimal * factor;                  //eg. 1523.125, 2 (returns 152312.5)
            var roundedTempNumber = Math.round(tempNumber);     //eg. rounds (152312.5 --> 152313)
            return roundedTempNumber / factor;                  //eg puts decimal place back (152313 --> 1523.13)
            // utilNum.precision(n,2)
            // 1523.13
            // utilNum.precision(1523.125, 1)
            // 1523.1
            // utilNum.precision(1523.125, 0)
            // 1523
            // utilNum.precision(1523.125, -1)
            // 1520
            // utilNum.precision(1523.125, -1)
            // 1520
            // utilNum.precision(1523.125, -2)
            // 1500
            // utilNum.precision(1523.125, -3)
            // 2000
        },
        //round a number (to a whole number)(rounds up and down)
        round: function(n){
            return Math.round(n);
        },
        //get (whole number) from decimal
        whole: function(decimal){
            return Math.floor(decimal);   //chops off any decimals (but doesn't round up)
        },
        //get mod(modular)
        mod: function(n, mod){
            return n % mod;
        },
        //get remainder(divide by - divisor)(return quotient)(same as mod)
        remainder: function(n, divisor){
            var quotient = n % divisor;
            return quotient;
        },
        //is Number (boole)
        isNumber: function (n){
        	return typeof(n) == "number";
        },  
        //is number within a range (boole)
        isRange: function (n, min, max){
        	return min <= n && n <= max;
        },     
        //is Number Positive (boole)
        isNumPositive: function (n){
            return n > 0;
        },
        //is Number Negative (boole)
        isNumNegative: function (n){
            return n < 0;
        },
        //is Number Zero (boole)
        isNumZero: function (n){
            return n == 0;
        }
    }
    var utilStr = {   
        //is String (boole)
        isString: function (s){
        	return typeof(s) == "string";
        },    
        //is String empty (boole)
        isEmpty: function (s){
            return s == "";
        },
        //is String within range (boole)
        isRange(s, min, max){
            return min <= s.length && s.length <= max; 
        }
    }
    //TODO: how to load an (a file) for separating SVG 
    var utilFile = {
        loadJs: function(path) {
            script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", path);

            if (head = document.getElementsByTagName("head")[0]) {
                head.appendChild(script);
                console.log("script loaded... " + path);
            }
        },
        //include("./svg/knightB.html");
        include: function(filePath) {
            var result = null;
            console.log("result: " + result);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", filePath, false);
            xmlhttp.send();
            if (xmlhttp.status==200) {
                result = xmlhttp.responseText;
            }
            console.log("result: " + result);
            console.log(xmlhttp);
            return result;
        },
        //document write
        write: function(element, string) {
            //document.writeln(string); //can't write from async 
            //error:
            //  Failed to execute 'write' on 'Document': It isn't possible 
            //  to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
            var elem = document.getElementById(element);
            var existingText = elem.innerHTML;
            elem.innerHTML = existingText + string;     //add to top of checkered grid
        }
    }