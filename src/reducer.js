function reducer (state = {num1 :20}, action){
var number = {...state};

if(action.type === 'MUL5'){
 number.num1 = number.num1 * 5;
 number.loading = false;
}

else if (action.type === 'MUL2'){
    number.num1 = number.num1 * 2;
    number.loading = false;
}

else if (action.type === 'loading'){
    number.loading = true;
}
return number;
}



export default reducer;