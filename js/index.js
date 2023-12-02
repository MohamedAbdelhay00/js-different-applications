// program 1

function printTheNum() {
    var enteredNum = document.getElementById("enteredNum").value;
    document.getElementById("out1").innerHTML = enteredNum;
 }

 // program 2

 function printYesNo() {
    var enteredNum2 = document.getElementById("enteredNum2").value;
    if (enteredNum2 % 3 == 0 && enteredNum2 % 4 == 0) {
        document.getElementById("out2").innerHTML = "Yes";
    } else {
        document.getElementById("out2").innerHTML = "No";
    }
 }

  // program 3

  function getTheMax(){
    var firstNum = Number(document.getElementById("firstOne").value)
    var secondNum = Number(document.getElementById("secondOne").value)
    if(firstNum > secondNum){
        document.getElementById("max").innerHTML = firstNum
    } else if(secondNum > firstNum){
        document.getElementById("max").innerHTML = secondNum
    } else{
        document.getElementById("max").innerHTML = "Both are equal"
    }
  }

    // program 4

  function signOfTheNum(){
    var num = document.getElementById("signNum").value
    if(num >= 0){
        document.getElementById("sign").innerHTML = "Positive"
    } else if(num < 0){
        document.getElementById("sign").innerHTML = "Negative"
    }
  }

    // program 5

    function maxiOfThree(){
        var num1 = Number(document.getElementById("num1").value)
        var num2 = Number(document.getElementById("num2").value)
        var num3 = Number(document.getElementById("num3").value)

        if(num1 > num2 && num1 > num3){
            document.getElementById("maxOfThree").innerHTML = "Max. :" + num1
            if(num2 > num3){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num3
            } else if(num3 > num2){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num2
            }
        } else if(num2 > num1 && num2 > num3){
            document.getElementById("maxOfThree").innerHTML = "Max. :" + num2
            if(num1 > num3){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num3
            } else if(num3 > num1){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num1
            }
        } else if( num3 > num1 && num3 > num2){
            document.getElementById("maxOfThree").innerHTML = "Max. :" + num3
            if(num1 > num2){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num2
            } else if(num2 > num1){
                document.getElementById("minOfThree").innerHTML = "Min. :" + num1
            }
        }
    }

    // program 6

    function oddEven(){
        var num = document.getElementById("oddEven_in").value
        if(num%2==0){
            document.getElementById("oddEven").innerHTML = "Even"
        } else if(num%2!==0){
            document.getElementById("oddEven").innerHTML = "Odd"
        }
    }

    // program 8

    function vowelsConstants(){
        var character = document.getElementById("vc_input").value
        if(character == "a" ||character == "e" || character == "i" || character == "o" || character == "u"){
            document.getElementById("vc_output").innerHTML = "Vowel"
        } else {
            document.getElementById("vc_output").innerHTML = "Constant"
        }
    }

    // program 9

    // function allNumbers(){
    //     var temp = ""
    //     var num = document.getElementById("theNumber").value

    //     for(var i = 1; i <= num; i++){
    //         temp = temp + ` <h2 class="py-1">${i}</h2> `
    //         console.log(temp)
    //     }
    //     document.getElementById("printAllNumbers").innerHTML = temp
    // }

    function newP9(){
        var temp = ""
        var num = document.getElementById("theNumber").value

        for(var i = 1; i <= num; i++){
            temp = temp + ` <h2 class="py-1">${i}</h2> `
        }
        document.getElementById("printAllNumbers").innerHTML = temp
    }

        // program 10

    function multiplication(){
        var temp = ""
        var num = document.getElementById("multNum").value

        for(var i = 1; i <= 12; i++){
            temp = temp + ` <h2 class="py-1" id="allNumbers">${num*i}</h2> `
        }
        document.getElementById("printMultiplication").innerHTML = temp
    }

        // program 11

    function allNumbers(){
        var temp = ""
        var num = document.getElementById("evenNumber").value
    
        for(var i = 1; i <= num; i++){
            if(i%2==0){
                temp = temp + ` <h2 class="py-1">${i}</h2> `
            }
        }
        document.getElementById("printAllEvenNumbers").innerHTML = temp
    }

        // program 12

    function powerNum(){
        var temp = 1
        var num = document.getElementById("theInteger").value
        var power = document.getElementById("thePower").value
        
        for(var i = 1; i<= power; i++){
            temp = temp * num
        }

        document.getElementById("powered").innerHTML = temp
    }

        // program 12 II

    function averageNpercentage(){
        var sub1 = Number(document.getElementById("sub1").value)
        var sub2 = Number(document.getElementById("sub2").value)
        var sub3 = Number(document.getElementById("sub3").value)
        var sub4 = Number(document.getElementById("sub4").value)
        var sub5 = Number(document.getElementById("sub5").value)

        var total = (sub1 + sub2 + sub3 + sub4 + sub5)

        var average = (sub1 + sub2 + sub3 + sub4 + sub5) / 5

        var percentage = (average / 100) * 100 

        document.getElementById("total").innerHTML = "The total: " + total
        document.getElementById("average").innerHTML = "The Average: " + average
        document.getElementById("percentage").innerHTML = "The Percentage: " + percentage + "%"
    }

        // program 13

    function daysInMonth(){
        var monthNo = document.getElementById("monthNo").value

        if(monthNo == 1 || monthNo == 3 || monthNo == 5 || monthNo == 7 || monthNo == 8 || monthNo == 10 || monthNo == 12){
            document.getElementById("noOfDays").innerHTML = 31
        } else if(monthNo == 4 || monthNo == 6 || monthNo == 9 || monthNo == 11) {
            document.getElementById("noOfDays").innerHTML = 30
        } else if(monthNo == 2){
            document.getElementById("noOfDays").innerHTML = 28
        } else {
            document.getElementById("noOfDays").innerHTML = "It's not a month number"
        }
    }

        // program 14

    function percentageAndGrade(){
        var subject1 = Number(document.getElementById("subject1").value)
        var subject2 = Number(document.getElementById("subject2").value)
        var subject3 = Number(document.getElementById("subject3").value)
        var subject4 = Number(document.getElementById("subject4").value)
        var subject5 = Number(document.getElementById("subject5").value)

        var percentage = ((((subject1 + subject2 + subject3 + subject4 + subject5) / 5) / 100) * 100)
        document.getElementById("percentageOf5").innerHTML = percentage + "%"

        if(percentage >= 90){
            document.getElementById("gradeOf5").innerHTML = "Grade: A"
        } else if(percentage >= 80){
            document.getElementById("gradeOf5").innerHTML = "Grade: B"
        } else if(percentage >= 70){
            document.getElementById("gradeOf5").innerHTML = "Grade: C"
        } else if(percentage >= 60){
            document.getElementById("gradeOf5").innerHTML = "Grade: D"
        } else if(percentage >= 40){
            document.getElementById("gradeOf5").innerHTML = "Grade: E"
        } else if(percentage < 40){
            document.getElementById("gradeOf5").innerHTML = "Grade: F"
        }
    }

    // program 15

    function daysInMonths(){
        var monthNos = document.getElementById("monthNos").value

        switch(monthNos){
            case "2": 
                document.getElementById("noOfDayss").innerHTML = 28
                break;
            case "1": 
            case "3":
            case "5": 
            case "7":
            case "8": 
            case "10":
            case "12": 
                document.getElementById("noOfDayss").innerHTML = 31
                break;
            case "4": 
            case "6":
            case "9": 
            case "11":
                document.getElementById("noOfDayss").innerHTML = 30
                break;
            default: 
                document.getElementById("noOfDayss").innerHTML = "It's not a month number"

        }
    }

    // program 16

    function vowelsConstantss(){
        var character = document.getElementById("vc_inputs").value

        switch(character){
            case "a": 
            case "e": 
            case "i": 
            case "o": 
            case "u":
                document.getElementById("vc_outputs").innerHTML = "Vowel"
                break;
            default: 
                document.getElementById("vc_outputs").innerHTML = "Constant"
        }
    }

    // program 17

  function getTheMaxs(){
    var firstNum = Number(document.getElementById("firstOnes").value)
    var secondNum = Number(document.getElementById("secondOnes").value)

    switch(true){
        case firstNum > secondNum: 
            document.getElementById("maxs").innerHTML = firstNum
            break;
        case secondNum > firstNum:
            document.getElementById("maxs").innerHTML = secondNum
            break;
        default: 
            document.getElementById("maxs").innerHTML = "Both are equal"
    }
  }

  // program 18

  function oddEvens(){
    var num = document.getElementById("oddEven_ins").value

    switch(true){
        case num%2==0:
            document.getElementById("oddEvens").innerHTML = "Even"
            break;
        default:
            document.getElementById("oddEvens").innerHTML = "Odd"
    }
}

// program 19

function signOfTheNums(){
    var num = document.getElementById("signNums").value

    switch(true){
        case num > 0: 
            document.getElementById("signs").innerHTML = "Positive"
            break;
        case num < 0:
            document.getElementById("signs").innerHTML = "Negative"
            break;
        case num == 0:
            document.getElementById("signs").innerHTML = "It's a zero"
    }
  }

  // program 20

  function simpleCalc(){
    var intOne = Number(document.getElementById("intOne").value)
    var opSign = document.getElementById("opSign").value
    var intTwo = Number(document.getElementById("intTwo").value)
    var result = 0

    switch(true){
        case opSign == "+":
            result = intOne + intTwo
            document.getElementById("result").innerHTML = "Result: " + result
            break;
        case opSign == "-":
            result = intOne - intTwo
            document.getElementById("result").innerHTML = "Result: " + result
            break;
        case opSign == "*":
            result = intOne * intTwo
            document.getElementById("result").innerHTML = "Result: " + result
            break;
        case opSign == "/":
            result = intOne / intTwo
            document.getElementById("result").innerHTML = "Result: " + result
            break;
        default:
            document.getElementById("result").innerHTML = "Enter valid sign"

    }
  }