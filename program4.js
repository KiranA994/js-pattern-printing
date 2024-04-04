for(i=5;i>=1;i--){
    str = '';
    for(j=1;j<5;j++){
        str = str + ' ';
    }
    for(k=1;k<=i;k++){
        str = str + '* ';
    }
    console.log(str);
}