
/*
class Game
{
    private colors: Array<string>;
    private colors_hex: Array<string>;
    private colors_game_array: Array<string>;
    private cycles_game_array: Array<Cycle>;

    public constructor()
    {
        this.colors            = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
        this.colors_hex        = ['#FF0000','#008000','#0000FF','#FFFF00','#FFA500','#800080'];
        this.colors_game_array = this.Generate_Challenge(this.colors.concat());

        let counter = 0;
        
        this.cycles_game_array =
            [
                new Cycle(0,this.colors_game_array),
                new Cycle(1,this.colors_game_array),
                new Cycle(2,this.colors_game_array),
                new Cycle(3,this.colors_game_array),
                new Cycle(4,this.colors_game_array),
                new Cycle(5,this.colors_game_array),
                new Cycle(6,this.colors_game_array),
                new Cycle(7,this.colors_game_array),
                new Cycle(8,this.colors_game_array),
                new Cycle(9,this.colors_game_array)
            ];
        


        
    }
    public get_colors()
    {
        return this.colors;
    }

    public get_colors_hex()
    {
        return this.colors_hex;
    }

    public get_colors_game_array()
    {
        return this.colors_game_array;
    }

    public get_cycles_game_array()
    {
        return this.cycles_game_array;
    }    

    public Generate_Challenge(array)
    {
    let temporary_index_colors:Array<string> = array;
    temporary_index_colors.sort(() => Math.random() - 0.5);
    // console.log(“Temporary Index Colors: ” + temporary_index_colors);
    let index:number;
    let counter:number=0;
        while(counter!=2)
        {
            index= Math.floor(Math.random() * temporary_index_colors.length);
            // console.log(“Index: ” + index);
            temporary_index_colors.splice(index, 1);
            counter++;
        }
        return temporary_index_colors;
        //console.log(“Temporary Index Colors: ” + temporary_index_colors);
    }
} // End Game class

class Cycle
{ 
    private number_cycle: number;
    private result_cycle: string;
    private four_colors_array: Array<string>;

    // constructor
    public constructor(number_cycle_input:number,four_colors_array_input:Array<string>)
    {
        this.number_cycle= number_cycle_input;
        this.four_colors_array = four_colors_array_input.concat();
    }

    // four_colors_array
    public get_four_colors_array()
    {
        return this.four_colors_array;
    }

    public set_four_colors_array(four_colors_array_input)
    {
        this.four_colors_array = four_colors_array_input;
    }

    // number_cycle
    public get_number_cycle()
    {
        return this.number_cycle;
    }

    public set_number_cycle(number_cycle_input)
    {
        this.number_cycle=number_cycle_input;
    }

    // result_cycle
    public get_result_cycle()
    {
        return this.result_cycle;
    }

    public set_result_cycle(result_cycle_input)
    {
        return this.result_cycle=result_cycle_input;
    }

    // Operations Section
    public comapre_between_userinput_and_fourcolors(userinput:Array<string>)
    {
        let colors_game = this.four_colors_array;
        let colors_user = userinput;
        
        let index: number = 0;

        let result_array: Array<string> = ["", "", "", ""]

        let color_elment_result: boolean;
        let color_elment_position: boolean;


        let counter:number =0;
        while(counter<4)
        {
            let check:number = this.check_if_color_exesist(colors_user[counter],colors_game)
            if (check >= 0)
            {
                color_elment_result = true;
                index = check;
                if (index == counter)
                {
                    color_elment_position = true;
                }
                else
                {
                    color_elment_position = false;
                }
            }
            else
            {
                color_elment_result = false;
            }

        result_array[counter] = this.put_elment_in_result_array(color_elment_result, color_elment_position);
        counter++;
        }// end while
        return result_array;
    }// End Function

    public check_if_color_exesist(elment:string,colors_game:Array<string>)
    {
        return colors_game.indexOf(elment);
    }

    public put_elment_in_result_array (color_elment_result: boolean, color_elment_position: boolean)
    {

        if (color_elment_result == true && color_elment_position == true)
        {
            return "Black";  
        }
        else if (color_elment_result == true && color_elment_position == false)
        {
            return "White";
        }
        else
        {
            return "Empty";
        }

    }


    public check_if_user_win (result_cycle_array:Array<string>)
    {
            let result:boolean = true;
            for (let i = 0; i < result_cycle_array.length; i++)
            {
                if (result_cycle_array[i] != "Black")
                {
                    result = false;
                    break;
                }
            }
        return result;
    }  

}// End Cycle Class

// ### The Main Of Application ###
let game: Game = new Game();
let cycles_sequence:Array<Cycle> = game.get_cycles_game_array(); 
let counter_game_cycle: number = 0;

let colors = game.get_colors();

// specific here how many time do you want to play 
let how_many_cycle_you_want_to_play = 2;

while (counter_game_cycle < how_many_cycle_you_want_to_play)
{

let counter_game_cycle_temporary:number = counter_game_cycle;
let user_colors: Array<string> = user_enter_four_color(colors);


let result_cycle = cycles_sequence[counter_game_cycle].comapre_between_userinput_and_fourcolors(user_colors);  
//let result_cycle = ["Black", "Black", "Black", "Black"];

    alert("Target colors : \n" + game.get_colors_game_array().toString() + "\n\n" +
        "The colors which you have selected : \n" + user_colors.toString() + "\n\n" +
        "The Result of Cycle (" + (counter_game_cycle_temporary + 1) + ") \n" + result_cycle.toString());

    let Final_result = cycles_sequence[counter_game_cycle].check_if_user_win(result_cycle);
    if(Final_result)
     {
        alert("Congratulation, you are win!");
        break;
     }
    if (counter_game_cycle == how_many_cycle_you_want_to_play-1)
    {
        alert("The game is over, you are lost!");
        break;
    }
counter_game_cycle++;
}


// Functions Section
// convert first letter to Capital    
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}


function convert_letter_to_color(array:Array<string>)
{
    let Color_letters = { R: 'Red', G: 'Green', B: 'Blue', Y: 'Yellow', O: 'Orange', P: 'Purple' };
    let userInput = array.concat();

    let counter: number = 0;
    let New_array: Array<any>=["","","",""];
    let letter: string;
    while (counter < userInput.length)
    {
       letter = userInput[counter];
       New_array[counter]=Color_letters[letter];
       counter++;
    }
    return New_array;
}

// let the User enter four colors 
function user_enter_four_color(colors:Array<string>) {

let userInput: Array<string>= [" "," "," "," "]; 
let userInput_counter: number = 0;

while (userInput_counter < 4)
    {
        if (userInput_counter > 0)
        {
            userInput[userInput_counter] = prompt('Please guess four color of these colors with right sorting to win:\n' +
                                           " pleace just write first letter of every color\n "+
                                           " [ " + colors.toString() + "]\n" +
                                             " Your choices are:\n"+ userInput.toString() +  " " + userInput_counter + "/4" );

            userInput[userInput_counter] = capitalize(userInput[userInput_counter]);
        }
        else
        {
            userInput[userInput_counter] = prompt('Please guess four color of these colors with right sorting to win:\n' +
                                           " pleace just write first letter of every color\n "+
                                           "[ " + colors.toString() + " ] " + userInput_counter + "/4");
            // conver first letter to Capital                                 
            userInput[userInput_counter] = capitalize(userInput[userInput_counter]);
        }                                
        userInput_counter += 1;                               
    }

    let result = convert_letter_to_color(userInput);
    //alert("The Colors which you choiced are :\n" + convert_letter_to_color(userInput).toString());

    return result;
    
}

*/



