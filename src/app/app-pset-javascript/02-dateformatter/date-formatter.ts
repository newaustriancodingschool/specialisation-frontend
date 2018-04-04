import { error } from "util";

export function dateFormatter(date, country) {
    let year = date.getFullYear(), 
        month = date.getMonth() +1,
        day = date.getDate(),
        hours = date.getHours(),    
        minutes = date.getMinutes(),
        pmam;

    if (month <10 || day < 10 || minutes < 10){
        month = ("0" +  month).slice(-2);
        day = ( "0" + day).slice(-2);
        minutes = ("0" + minutes).slice(-2);
    }
    if (country == 'at'){
        //'01.02.2017 12:05  //(2017, 1, 1) // (12, 5)
        return day + "." + month + "." + year + " " + hours + ":" + minutes;
    }
    else if (country == 'uk'){
        //'01/02/2017 03:12 p.m. // (15, 12)
        if (hours >= 12){
            pmam = "p.m.";
            hours = ("0" + (hours-12)).slice(-2);
        }
        else {
            pmam = 'a.m.'
        }
        return day + "/" + month + "/" + year + " " + hours + ":" + minutes  + " " + pmam;
    }
    else if (country == 'us'){
        //'05/30/2017 06:45 a.m. //(6, 45)
        if (hours >= 12){
            pmam = "p.m.";
            hours = ("0" + (hours-12)).slice(-2);
        } 
        else {
            pmam ="a.m." ;
            hours = ("0" + hours).slice(-2);
        }
        return month + "/" + day + "/" + year + " " + hours + ":" + minutes  + " " + pmam;
    }
    else {
        return date.toThrow()
    }
}
