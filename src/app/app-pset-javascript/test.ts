function dateFormatter(date, country) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(day + " ." + month + " " + year);
}

dateFormatter(new Date('1, 1,2017'), null);

