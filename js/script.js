
    function setName() {
        let birthday = document.getElementById('birthday').value;

        let century = getCentury(birthday);
        let year = birthday.split("-")[0].substr(2,4);
        let month = birthday.split("-")[1];
        let day = birthday.split("-")[2];        

        let weekDay = (((century/4)-2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + day) % 7;
        // let weekDay = century;
        
        // console.log(weekDay);

        alert("Hi " + weekDay);

    }    
    function getCentury(year) {
        let value = Math.floor(year/100) + 1;
        return value ;
    }