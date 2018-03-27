export function dateFormatter(date, country) {
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (country == "at") {
        if (hours < 10) {
            hours = "0" + hours;
        }
        var new_date = day + "." + month + "." + year + " " + hours + ":" + minutes ;
    }
    else if (country == "uk") {
        var am_pm = "";
        if (hours < 12) {
            am_pm = "a.m.";
        }
        else if (hours > 12) {
            hours = hours - 12;
            am_pm = "p.m.";
            if (hours < 10) {
                hours = "0" + hours;
            }
        }
        new_date = day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + am_pm;
    }
    else if (country == "us") {
        var am_pm = "";
        if (hours < 12) {
            am_pm = "a.m.";
        }
        else if (hours > 12) {
            hours = hours - 12;
            am_pm = "p.m.";
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
         new_date = month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + am_pm;
    }
    else{throw"Error"}
return new_date;
}
