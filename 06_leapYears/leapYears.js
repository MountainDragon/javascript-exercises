const leapYears = function(year) {
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            return true;
        }else{return false;}
    }else{
        return true;
    }
}else{
    return false;
}
};

leapYears(1600);
leapYears(34992);
leapYears(1996);
// Do not edit below this line
module.exports = leapYears;
