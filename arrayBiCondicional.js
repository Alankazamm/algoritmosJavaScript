const openOrSenior = (data) => {
    return data.map((item) =>{
        if (item[0] < 55){
            return 'Open';
        }
        else if(item[1] > 7){
            return 'Senior';
        }
        else return 'Open';
    } );
}

console.log(openOrSenior([[56,8],[5,6],[51,8]]));