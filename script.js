document.addEventListener("DOMContentLoaded", function () {
    var iplTeamsData = {
        "teams": [
            {
                "id": 1,
                "name": "Mumbai Indians",
                "logo": "mumbai-indians.png"
            },
            {
                "id": 2,
                "name": "Chennai Super Kings",
                "logo": "chennai-super-kings.png"
            },
            {
                "id": 3,
                "name": "Royal Challengers Bangalore",
                "logo": "royal-challengers-bangalore.png"
            },
            {
                "id": 4,
                "name": "Kolkata Knight Riders",
                "logo": "kolkata-knight-riders.png"
            },
            {
                "id": 5,
                "name": "Delhi Capitals",
                "logo": "delhi-capitals.png"
            },
            {
                "id": 6,
                "name": "Kings XI Punjab",
                "logo": "kings-xi-punjab.png"
            },
            {
                "id": 7,
                "name": "Rajasthan Royals",
                "logo": "rajasthan-royals.png"
            },
            {
                "id": 8,
                "name": "Sunrisers Hyderabad",
                "logo": "sunrisers-hyderabad.png"
            }
            // Add more teams as needed
        ]
    };

    function createTeamCard(team) {
        var teamCard = document.createElement("div");
        teamCard.classList.add("card");

        // Add an anchor element around the team card
        var teamLink = document.createElement("a");
        teamLink.href = `team-details.html?id=${team.id}`;
        teamLink.appendChild(teamCard);

        var image = document.createElement("img");
        image.src = `images/${team.logo}`;
        image.alt = `${team.name} Logo`;

        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        var title = document.createElement("h2");
        title.textContent = team.name;

        cardContent.appendChild(title);
        teamCard.appendChild(image);
        teamCard.appendChild(cardContent);

        return teamLink;
    }

    function renderTeams() {
        var appElement = document.getElementById("app");

        iplTeamsData.teams.forEach(function (team) {
            var teamCard = createTeamCard(team);
            appElement.appendChild(teamCard);
        });
    }

    renderTeams();
});
