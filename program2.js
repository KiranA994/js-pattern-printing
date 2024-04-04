for(i=1;i<=6;i++){
    str = '';
    for(j=1;j<=6;j++){
        if(i==6 || j==1 || i==j){
            str = str + '*';
        }
        else{
            str = str + ' ';
        }
    }
    console.log(str);
}