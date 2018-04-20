import * as moment from "moment";

export function dateFormatter(date: Date, country: string): string {
  switch (country) {
    case "at": {
      let date_stracture = moment(date).format("DD.MM.YYYY hh:mm");
      return date_stracture;
    }
    case "uk": {
      date.setMonth(date.getMonth()+1);
      return moment(date).format("DD/MM/YYYY hh:mm") + " p.m.";
    }
    case "us": {
      date.setMonth(date.getMonth()+1);
      return moment(date).format("MM/DD/YYYY hh:mm") + " a.m.";
    }
    case "de": {
      alert("Wrong Country");
      return "Error";
    }
    default: {
      alert("Wrong Country");
      return "Error";
    }
  }
}
