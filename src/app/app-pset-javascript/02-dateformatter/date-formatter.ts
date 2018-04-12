import * as moment from "moment"; 

export function dateFormatter(date: Date, country: string) {
    //'01.02.2017 12:05'
        if (country === 'at') {
            return moment(date).format('DD.MM.YYYY hh:mm')
        }
    //'01/02/2017 03:12 p.m.'
        else if (country === 'uk'){
            return moment(date).format('DD/MM/YYYY hh:mm ') + 'p.m.' ;     
        }
    //05/30/2017 06:45 a.m.    
        else if (country === 'us'){
            return moment(date).format('MM/DD/YYYY hh:mm ')  + 'a.m.' ;  
        }
        else {
            throw Error ;
        } 
}
