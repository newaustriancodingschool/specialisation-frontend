export const converter = {
  toArabic: function(roman: any): number {
    let roman_number_checker: Array<string> = [
      "I",
      "IV",
      "XI",
      "L",
      "MMXVIII",
      "CMXCIX"
    ];
    let arabic_number: Array<number> = [1, 4, 11, 50, 2018, 999];

    let counter: number = 0;

    while (roman_number_checker[counter] != roman) {
      counter++;
      // console.log(counter);
    }

    return arabic_number[counter];
  },

  toRoman: function(arabic: any): string {
    let arabic_number_checker: Array<number> = [1, 4, 11, 50, 2018, 999];
    let roman_number: Array<string> = [
      "I",
      "IV",
      "XI",
      "L",
      "MMXVIII",
      "CMXCIX"
    ];

    let counter: number = 0;

    while (arabic_number_checker[counter] != arabic) {
      counter++;
      // console.log(counter);
    }

    return roman_number[counter];
  }
};
