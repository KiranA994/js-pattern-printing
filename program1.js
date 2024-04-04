//  right triangle pattern

for(i=1;i<=5;i++){
    str = '';
    for(j=0; j<5-i; j++){
        str = str + ' '
    }
    for(k=0;k<i;k++){
        str = str + '*';
    }
    console.log(str);
}
