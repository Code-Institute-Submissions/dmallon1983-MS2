var dropdown = document.getElementById("selectGoalKeeper");

let goalkeepers = ["Lev Yashin", "Gordon Banks", "Gianluigi Buffon", "Manuel Neuer", "Iker Casillas", "Edwin Van Der Sar"];

for (var i = 0; i < goalkeepers.length; i++) {
    
    dropdown[dropdown.length] = new Option(goalkeepers[i], goalkeepers[i]);
}

let dropdownRB = document.getElementById("selectRightBack");

let RightBack = ["Cafu", "Roberto Carlos", "Ashley Cole", "Gary Neville", "Danny McGrain", "Philip Lahm", "Javier Zanetti", "Dani Alves", "Carlos Alberto", "Franz Beckenbeaur", "Franco Baresi", "Paolo Maldini", "Rio Ferdinand", "Nemanja Vidic", "John Terry", "Billy McNeill", "Virgil Van Dijk", "Fabio Cannavaro"];

for (let i = 0; i < RightBack.length; i++) {
    
    dropdownRB[dropdownRB.length] = new Option(RightBack[i], RightBack[i]);
}

let dropdownRCB = document.getElementById("selectRightCentreBack");

let RightCentreBack = ["Cafu", "Roberto Carlos", "Ashley Cole", "Gary Neville", "Danny McGrain", "Philip Lahm", "Javier Zanetti", "Dani Alves", "Carlos Alberto", "Franz Beckenbeaur", "Franco Baresi", "Paolo Maldini", "Rio Ferdinand", "Nemanja Vidic", "John Terry", "Billy McNeill", "Virgil Van Dijk", "Fabio Cannavaro"];

for (let i = 0; i < RightCentreBack.length; i++) {
    
    dropdownRCB[dropdownRCB.length] = new Option(RightCentreBack[i], RightCentreBack[i]);
}

let dropdownLCB = document.getElementById("selectLeftCentreBack");

let LeftCentreBack = ["Cafu", "Roberto Carlos", "Ashley Cole", "Gary Neville", "Danny McGrain", "Philip Lahm", "Javier Zanetti", "Dani Alves", "Carlos Alberto", "Franz Beckenbeaur", "Franco Baresi", "Paolo Maldini", "Rio Ferdinand", "Nemanja Vidic", "John Terry", "Billy McNeill", "Virgil Van Dijk", "Fabio Cannavaro"];

for (let i = 0; i < LeftCentreBack.length; i++) {
    
    dropdownLCB[dropdownLCB.length] = new Option(LeftCentreBack[i], LeftCentreBack[i]);
}

let dropdownLB = document.getElementById("selectLeftBack");

let LeftBack = ["Cafu", "Roberto Carlos", "Ashley Cole", "Gary Neville", "Danny McGrain", "Philip Lahm", "Javier Zanetti", "Dani Alves", "Carlos Alberto", "Franz Beckenbeaur", "Franco Baresi", "Paolo Maldini", "Rio Ferdinand", "Nemanja Vidic", "John Terry", "Billy McNeill", "Virgil Van Dijk", "Fabio Cannavaro"];

for (let i = 0; i < LeftBack.length; i++) {
    
    dropdownLB[dropdownLB.length] = new Option(LeftBack[i], LeftBack[i]);
}

let dropdownRM = document.getElementById("selectRightMidfielder");

let RightMid = ["Xavi", "Andres Iniesta", "Roy Keane", "Zinedine Zidane", "Paul Scholes", "Patrick Viera", "Andrea Pirlo", "Claude Makalele", "Bobby Charlton", "Graeme Souness"];

for (let i = 0; i < RightMid.length; i++) {
    
    dropdownRM[dropdownRM.length] = new Option(RightMid[i], RightMid[i]);
}

let dropdownLM = document.getElementById("selectLeftMidfielder");

let LeftMid = ["Xavi", "Andres Iniesta", "Roy Keane", "Zinedine Zidane", "Paul Scholes", "Patrick Viera", "Andrea Pirlo", "Claude Makalele", "Bobby Charlton", "Graeme Souness"];

for (let i = 0; i < LeftMid.length; i++) {
    
    dropdownLM[dropdownLM.length] = new Option(LeftMid[i], LeftMid[i]);
}

let dropdownAM = document.getElementById("selectAttackingMidfielder");

let AttMid = ["Xavi", "Andres Iniesta", "Roy Keane", "Zinedine Zidane", "Paul Scholes", "Patrick Viera", "Andrea Pirlo", "Claude Makalele", "Bobby Charlton", "Graeme Souness"];

for (let i = 0; i < AttMid.length; i++) {
    
    dropdownAM[dropdownAM.length] = new Option(AttMid[i], AttMid[i]);
}

let dropdownRF = document.getElementById("selectRightForward");

let RightForward = ["Diego Maradona", "Pele", "Ronaldo", "Cristiano Ronaldo", "Lionel Messi", "Thierry Henry", "Ferenc Puskas", "Ronaldinho", "Robert Lewandowski", "Henrik Larsson"];

for (let i = 0; i < RightForward.length; i++) {
    
    dropdownRF[dropdownRF.length] = new Option(RightForward[i], RightForward[i]);
}

let dropdownLF = document.getElementById("selectLeftForward");

let LeftForward = ["Diego Maradona", "Pele", "Ronaldo", "Cristiano Ronaldo", "Lionel Messi", "Thierry Henry", "Ferenc Puskas", "Ronaldinho", "Robert Lewandowski", "Henrik Larsson"];

for (let i = 0; i < LeftForward.length; i++) {
    
    dropdownLF[dropdownLF.length] = new Option(LeftForward[i], LeftForward[i]);
}

let dropdownCF = document.getElementById("selectCentreForward");

let CentreForward = ["Diego Maradona", "Pele", "Ronaldo", "Cristiano Ronaldo", "Lionel Messi", "Thierry Henry", "Ferenc Puskas", "Ronaldinho", "Robert Lewandowski", "Henrik Larsson"];

for (let i = 0; i < CentreForward.length; i++) {
    
    dropdownCF[dropdownCF.length] = new Option(CentreForward[i], CentreForward[i]);
}


function sendMail(contactForm) {
    emailjs.send("gmail", "your_11", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email_address.value,
            "player_request_1": contactForm.goalKeeper.value,
            "player_request_2": contactForm.rightBack.value,
            "player_request_3": contactForm.rightCentreBack.value,
            "player_request_4": contactForm.leftCentreBack.value,
            "player_request_5": contactForm.leftBack.value,
            "player_request_6": contactForm.rightMid.value,
            "player_request_7": contactForm.leftMid.value,
            "player_request_8": contactForm.attMid.value,
            "player_request_9": contactForm.rightForward.value,
            "player_request_10": contactForm.leftForward.value,
            "player_request_11": contactForm.centreForward.value
        })

        .then(
            function (response) {
                alert("Congratulations! You have succesfully submitted your legends 11.\nPlease visit our social media sites at the bottom of the page to see if you've been successful!!!", response); 
            },
            function (error) {
                console.log("FAILED", error);   //change to alert
            }
        );
    return false;
}




let form = document.getElementById("signup-form");
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
        event.preventDefault();
        form.submit();
        // alert("Congratulations! You have succesfully submitted your legends 11.\nPlease visit our social media sites at the bottom of the page to see if you've been successful!!!");
    }

