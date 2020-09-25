
    function setName() {
        let birthday = document.getElementById('birthday').value;

        let century = getCentury(birthday);
        let year = birthday.split("-")[0].substr(2,4);
        let month = birthday.split("-")[1];
        let day = birthday.split("-")[2];        

        let weekDay =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
        // let weekDay = century;
        
        // console.log(weekDay);

        alert("Hi " + weekDay);

    }    
    function getCentury(year) {
        let value = Math.floor(year/100) + 1;
        return value ;
    }