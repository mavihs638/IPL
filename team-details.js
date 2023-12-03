document.addEventListener("DOMContentLoaded", function () {
    // Get team ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');

    // Example team details (replace with your actual data)
    const teams = [
        // Team 1: Mumbai Indians
        {
            "id": 1,
            "name": "Mumbai Indians",
            "logo": "mumbai-indians.png",
            "topBatsman": "Rohit Sharma",
            "topBowler": "Jasprit Bumrah",
            "championshipsWon": 5,
            "players": [
                { "name": "Rohit Sharma", "photo": "rohit-sharma.png", "team": "Mumbai Indians", "price": 2.5, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Jasprit Bumrah", "photo": "jasprit-bumrah.png", "team": "Mumbai Indians", "price": 2.0, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Kieron Pollard", "photo": "kieron-pollard.png", "team": "Mumbai Indians", "price": 1.8, "playingStatus": "Playing", "role": "All-Rounder" },
                // Add 8 more players for Mumbai Indians
            ]
        },
        // Team 2: Chennai Super Kings
        {
            "id": 2,
            "name": "Chennai Super Kings",
            "logo": "chennai-super-kings.png",
            "topBatsman": "MS Dhoni",
            "topBowler": "Ravindra Jadeja",
            "championshipsWon": 4,
            "players": [
                { "name": "MS Dhoni", "photo": "ms-dhoni.png", "team": "Chennai Super Kings", "price": 2.8, "playingStatus": "Playing", "role": "Wicketkeeper" },
                { "name": "Ravindra Jadeja", "photo": "ravindra-jadeja.png", "team": "Chennai Super Kings", "price": 1.5, "playingStatus": "Playing", "role": "All-Rounder" },
                { "name": "Suresh Raina", "photo": "suresh-raina.png", "team": "Chennai Super Kings", "price": 2.2, "playingStatus": "Playing", "role": "Batsman" },
                // Add 8 more players for Chennai Super Kings
            ]
        },
        // Team 3: Royal Challengers Bangalore
        {
            "id": 3,
            "name": "Royal Challengers Bangalore",
            "logo": "royal-challengers-bangalore.png",
            "topBatsman": "Virat Kohli",
            "topBowler": "Yuzvendra Chahal",
            "championshipsWon": 0,
            "players": [
                { "name": "Virat Kohli", "photo": "virat-kohli.png", "team": "Royal Challengers Bangalore", "price": 3.0, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "AB de Villiers", "photo": "ab-de-villiers.png", "team": "Royal Challengers Bangalore", "price": 2.5, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Yuzvendra Chahal", "photo": "yuzvendra-chahal.png", "team": "Royal Challengers Bangalore", "price": 1.7, "playingStatus": "Playing", "role": "Bowler" },
                // Add 8 more players for Royal Challengers Bangalore
            ]
        },
        // Team 4: Kolkata Knight Riders
        {
            "id": 4,
            "name": "Kolkata Knight Riders",
            "logo": "kolkata-knight-riders.png",
            "topBatsman": "Shubman Gill",
            "topBowler": "Pat Cummins",
            "championshipsWon": 2,
            "players": [
                { "name": "Shubman Gill", "photo": "shubman-gill.png", "team": "Kolkata Knight Riders", "price": 2.0, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Pat Cummins", "photo": "pat-cummins.png", "team": "Kolkata Knight Riders", "price": 2.2, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Andre Russell", "photo": "andre-russell.png", "team": "Kolkata Knight Riders", "price": 2.5, "playingStatus": "Playing", "role": "All-Rounder" },
                // Add 8 more players for Kolkata Knight Riders
            ]
        },
        // Team 5: Delhi Capitals
        {
            "id": 5,
            "name": "Delhi Capitals",
            "logo": "delhi-capitals.png",
            "topBatsman": "Shikhar Dhawan",
            "topBowler": "Kagiso Rabada",
            "championshipsWon": 0,
            "players": [
                { "name": "Shikhar Dhawan", "photo": "shikhar-dhawan.png", "team": "Delhi Capitals", "price": 2.3, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Kagiso Rabada", "photo": "kagiso-rabada.png", "team": "Delhi Capitals", "price": 2.4, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Rishabh Pant", "photo": "rishabh-pant.png", "team": "Delhi Capitals", "price": 2.1, "playingStatus": "Playing", "role": "Wicketkeeper" },
                // Add 8 more players for Delhi Capitals
            ]
        },
        // Team 6: Kings XI Punjab
        {
            "id": 6,
            "name": "Kings XI Punjab",
            "logo": "kings-xi-punjab.png",
            "topBatsman": "KL Rahul",
            "topBowler": "Mohammed Shami",
            "championshipsWon": 0,
            "players": [
                { "name": "KL Rahul", "photo": "kl-rahul.png", "team": "Kings XI Punjab", "price": 2.5, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Mohammed Shami", "photo": "mohammed-shami.png", "team": "Kings XI Punjab", "price": 2.0, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Chris Gayle", "photo": "chris-gayle.png", "team": "Kings XI Punjab", "price": 1.8, "playingStatus": "Playing", "role": "Batsman" },
                // Add 8 more players for Kings XI Punjab
            ]
        },
        // Team 7: Rajasthan Royals
        {
            "id": 7,
            "name": "Rajasthan Royals",
            "logo": "rajasthan-royals.png",
            "topBatsman": "Sanju Samson",
            "topBowler": "Jofra Archer",
            "championshipsWon": 1,
            "players": [
                { "name": "Sanju Samson", "photo": "sanju-samson.png", "team": "Rajasthan Royals", "price": 2.2, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Jofra Archer", "photo": "jofra-archer.png", "team": "Rajasthan Royals", "price": 2.3, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Jos Buttler", "photo": "jos-buttler.png", "team": "Rajasthan Royals", "price": 2.1, "playingStatus": "Playing", "role": "Wicketkeeper" },
                // Add 8 more players for Rajasthan Royals
            ]
        },
        // Team 8: Sunrisers Hyderabad
        {
            "id": 8,
            "name": "Sunrisers Hyderabad",
            "logo": "sunrisers-hyderabad.png",
            "topBatsman": "David Warner",
            "topBowler": "Bhuvneshwar Kumar",
            "championshipsWon": 1,
            "players": [
                { "name": "David Warner", "photo": "david-warner.png", "team": "Sunrisers Hyderabad", "price": 2.6, "playingStatus": "Playing", "role": "Batsman" },
                { "name": "Bhuvneshwar Kumar", "photo": "bhuvneshwar-kumar.png", "team": "Sunrisers Hyderabad", "price": 2.2, "playingStatus": "Playing", "role": "Bowler" },
                { "name": "Kane Williamson", "photo": "kane-williamson.png", "team": "Sunrisers Hyderabad", "price": 2.4, "playingStatus": "Playing", "role": "Batsman" },
                // Add 8 more players for Sunrisers Hyderabad
            ]
        },
        // Add more teams as needed
    ];
    

    // Find the team details based on teamId
    const teamDetails = teams.find(team => team.id === parseInt(teamId));

    // Check if teamDetails is not null or undefined
    if (teamDetails) {
        renderTeamDetails(teamDetails);
    } else {
        // Handle the case when team details are not available
        console.error("Team details not found");
    }
});

function renderTeamDetails(team) {
    var teamDetailsContainer = document.getElementById("team-details-container");

    var teamName = document.createElement("h1");
    teamName.textContent = team.name;

    var teamIcon = document.createElement("img");
    teamIcon.src = `images/${team.logo}`;
    teamIcon.alt = `${team.name} Logo`;

    var playerCount = document.createElement("p");
    playerCount.textContent = `Players: ${team.players.length}`;

    var topBatsman = document.createElement("p");
    topBatsman.textContent = `Top Batsman: ${team.topBatsman}`;

    var topBowler = document.createElement("p");
    topBowler.textContent = `Top Bowler: ${team.topBowler}`;

    var championshipsWon = document.createElement("p");
    championshipsWon.textContent = `Championships Won: ${team.championshipsWon}`;

    var playersGrid = document.createElement("div");
    playersGrid.classList.add("players-grid");

    team.players.forEach(function (player) {
        var playerCard = createPlayerCard(player);
        playersGrid.appendChild(playerCard);
    });

    teamDetailsContainer.appendChild(teamName);
    teamDetailsContainer.appendChild(teamIcon);
    teamDetailsContainer.appendChild(playerCount);
    teamDetailsContainer.appendChild(topBatsman);
    teamDetailsContainer.appendChild(topBowler);
    teamDetailsContainer.appendChild(championshipsWon);
    teamDetailsContainer.appendChild(playersGrid);
}

function createPlayerCard(player) {
    var playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    var playerImage = document.createElement("img");
    playerImage.src = `images/${player.photo}`;
    playerImage.alt = `${player.name} Photo`;

    var playerName = document.createElement("h3");
    playerName.textContent = player.name;

    var playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");
    
    var playerTeam = document.createElement("p");
    playerTeam.textContent = `Team: ${player.team}`;

    var playerPrice = document.createElement("p");
    playerPrice.textContent = `Price: ${player.price} cr`;

    var playingStatus = document.createElement("p");
    playingStatus.textContent = `Status: ${player.playingStatus}`;

    var playerRole = document.createElement("p");
    playerRole.textContent = `Role: ${player.role}`;

    playerInfo.appendChild(playerTeam);
    playerInfo.appendChild(playerPrice);
    playerInfo.appendChild(playingStatus);
    playerInfo.appendChild(playerRole);

    playerCard.appendChild(playerImage);
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerInfo);

    return playerCard;
}
