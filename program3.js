for(i=1;i<=9;i++){
    str = '';
    for(j=1;j<=9;j++){
        if(i==9){
            str = str + ' *';
        }
        else{
            str = str + ' '
        }
    }
    console.log(str);
}