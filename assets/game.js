<script type="text/javascript">
    
    var Wins = 0;

    var Losses = 0;

    var Guesses = 9;

    var Counting = 0;


    function reset() {

    	alert("You Loose!")

       this.Guesses = 9;

        this.Counting = 0;

        this.Losses= 0;

        this.Wins= 0;
    }

    function winReset () {

    	this.Guesses = 9;

        this.Counting = 0;

        this.Losses= 0;

        this.Wins= 0;

        alert("You win!");

    }



    var computerOptions = [

        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",

        "w", "x", "y", "z"
    ];


    document.onkeyup = function() {


        ++Counting;
        --Guesses;


        var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

        console.log(userChoice);


        var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

        console.log(computerChoice);



        if (userChoice === computerChoice) {
            			

                        ++Wins;
                        winReset(); 
                        console.log( "A win!" );
                        

        }


        if (userChoice != computerChoice) {

            ++Losses;


        }


        if (Guesses === 0) {

        	
            reset();
            console.log("Game reset!");

        }



        var html = "<p> Wins: " + Wins + "</p>" +

            "<p> Losses: " + Losses + "</p>" +

            "<p> Guesses Left: " + Guesses + "</p>"

        +"<p> Your Guesses: " + Counting + "</p>";


        document.querySelector('#place-holder').innerHTML = html;
    }
    </script>
