
export class T3Board {

  board;
  counter:number;
  result;

  constructor(data) 
  {
      this.board = data;
      this.counter = 0;
  }

  getStatus(): any 
  {
        let result ;
        let counter = 0; 
        let success = 0;
        let check_input_equal_null = 0;
        
        for (let y = 0; y < 3; y++)
        {
                for (let x = 0; x < 3; x++)
                {
                    // console.log(y + "," + x + " : " +this.board[y][x]);
                    if (this.board[y][x]==null ||this.board[y][x]=='' )
                    {
                        check_input_equal_null += 1;
                    }
                    if (counter != 3)
                    {
                        if ((x == y) && (this.board[y][x] == "x"))
                        {
                            counter += 1;
                            // console.log(counter);
                            if (counter == 3)
                            {
                                success = 1;
                                result = { status: "finished", winner: "x" };
                                return result;
                                // console.log(result);
                                // console.log("finished");
                            }
                        }
                    }
                  }
                  
            if((y==2) && (success == 0) && check_input_equal_null>0)
            {
                result = { status: "ongoing" };
                return result;
                // console.log(result);
                // console.log("ongoing");
                
            }
            else if((y==2) && (success == 0) && check_input_equal_null==0)
            {
                result = { status: "draw" };
                return result;
                // console.log(result);
                // console.log("draw");
                
            }
        }   
  }



  compare(): any 
  { 
      if(status.toString() == this.status1.toString())
      {
        return "s1";
      } 
      else if (status.toString() == this.status2.toString())
      {
        return "s2";
      }
      else if (status.toString() == this.status3.toString())
      {
        return "s3";
      }
      else
      {
        return " ";
      }
  } 

}
