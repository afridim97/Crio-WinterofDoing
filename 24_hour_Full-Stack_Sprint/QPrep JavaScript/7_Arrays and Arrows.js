let modify = (array) => {
    
    var i, flag;
    for(i=0;i<array.length;i++){

       if(array[i]==2){

flag=true;

       }
        for(var j=2;j<array[i];j++){

if(array[i]%j==0){

flag=false;
break;
}
else{
    flag=true;
}

        }
if(flag==true){

array[i]+=1;

}
else{

    array[i]*=2;
}

        }

    


    
    
    return array;
}
//console.log(modify([1,2,3,4,5]));
//console.log(modify([19,27,3,23,17]));
module.exports = modify;    
