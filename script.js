const teamMembers = [
  {
    name: '2010 Derrick Rose',
    img: 'MediaSession.jpg',
    age: 22,
    activelyPlaying: true,
    team: 'Bulls',
    position: 'Point Guard',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Finishing, Speed, Explosive Athleticism',
    weaknesses: '3 point shooting, Turnover tendency',
    nickname: 'The Bull',
    teammates: ['Joakim Noah', 'Luol Deng', 'Taj Gibson'],
    accomplishments: 'MVP, Rookie of the Year, 3x All-Star',
  },
  {
    name: '1996 Michael Jordan',
    team: 'Bulls',
    position: 'Shooting Guard',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    nickname: 'Air Jordan',
    teammates: ['Scottie Pippen', 'Dennis Rodman', 'Steve Kerr'],
    accomplishments: '6x NBA Champion, 5x MVP, 6x Finals MVP',
  },
  {
    name: '2016 LeBron James',
    team: 'Cavaliers',
    position: 'Small Forward',
    skills: ['Scoring', 'Playmaking', 'Rebounding'],
    strengths: 'Versatility',
    weaknesses: 'Three-point shooting',
    nickname: 'King James',
    teammates: ['Kyrie Irving', 'Kevin Love', 'Tristan Thompson'],
    accomplishments: '3x NBA Champion, 4x MVP, 3x Finals MVP',
    
  },
  
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards');

  teamMembers.forEach((member, index) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4'); // changed to col-md-2 for 5 cards per row

    // styling card based on team:
    let backgroundColor;

    switch (member.team.toLowerCase()) {
      case 'bulls':
        backgroundColor = '#dc3545'; // Yellow for Bulls
        break;
      case 'cavaliers':
        backgroundColor = '#8B0000'; // Green for Lakers
        break;
      case 'celtics':
        backgroundColor = '#007bff'; // Blue for Celtics
        break;
      case 'heat':
        backgroundColor = '#dc3545'; // Red for Heat
        break;
      default:
        backgroundColor = '#6c757d'; // Gray for other teams
    }
    card.style.backgroundColor = backgroundColor;

    // Create a list of teammates with <li> tags
    const teammatesList = member.teammates
     .map(teammate => `<li> ${teammate} </li>`)
     .join('');

    card.innerHTML = `
          <div class="card">
              <div class="card-header text-center"> 
                <img src="${member.img}" alt="${member.name}" class="img-fluid mb-2">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-subtitle mb-2 text-muted">${member.nickname}</p>
              </div>
              <div class="card-body">
              <p><strong>Team:</strong> ${member.team}</p>

                  <p><strong>Position:</strong> ${member.position}</p>
                  <p><strong>Teammates:</strong> 
                      <ul>
                          ${teammatesList}
                      </ul>
                  </p>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Accomplishments:</strong> ${member.accomplishments}</p>
              </div>
          </div>
      `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();