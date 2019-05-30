function getfree(ismember)
{
    return(ismember?"$2.00":"$10.00");
}
console.log(getfree(true));
console.log(getfree(false));
console.log(getfree(1));