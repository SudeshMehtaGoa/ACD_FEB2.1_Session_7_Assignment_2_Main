
/*printing result calculated using argument list loop */
function sumUsingArguments(){

    /* using FOR loop */
    var numSum=0;
    for(var loopCounter=0;loopCounter<arguments.length;loopCounter++)
    {
        numSum = numSum + arguments[loopCounter];
    }
    console.log("Sum of above numbers is:")
    return(numSum);
}