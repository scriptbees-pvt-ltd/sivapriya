function bin_to_dec(bstr)
{
    return parseInt((bstr+'').replace(/[^01]/gi,''),2);
}
function dec_to_bin(n,base)
{
    if(n<0)
    {
        n=0xFFFFFFFF+n+1;
    }
    switch(base)
    {
        case 'B':
        return parseInt(n,10).toString(2);
        break;
        default:
        return("wrong input.....");
    }
}
console.log(bin_to_dec('110011'));
console.log(dec_to_bin(120,'B'));