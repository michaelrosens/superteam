const teamMembers = [
  {
    name: '2010 Derrick Rose',
    img: 'imgs/derrick.jpg',
    age: 22,
    activelyPlaying: true,
    team: 'Bulls',
    position: 'Point Guard',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Explosive Athleticism',
    weaknesses: '3 point shooting',
    nickname: 'D-Rose',
    teammates: ['Joakim Noah', 'Luol Deng', 'Taj Gibson'],
    accomplishments:['3x NBA All-Star, NBA Most Valuable Player (MVP), NBA Rookie of the Year, 2x All-NBA Team selection']
  },
  {
    name: '2000 Allen Iverson',
    img: 'imgs/lue.jpg',
    team: '76ers',
    position: 'Shooting Guard',
    skills: ['Ball Handling', 'Scoring', 'Steals'],
    strengths: 'Quickness',
    weaknesses: 'Height',
    nickname: 'The Answer',
    teammates: ['Dikembe Mutombo', 'Aaron McKie', 'Tyrone Hill'],
    accomplishments: ['11x NBA All-Star, 1x NBA Most Valuable Player (MVP), 2x NBA All-Star Game MVP, 4x NBA Scoring Champion, 3x NBA Steals Leader, NBA Rookie of the Year, 3x All-NBA First Team selection,']

}
,
  {
    name: '2016 LeBron James',
    img: 'imgs/jamess.jpg',
    team: 'Cavaliers',
    position: 'Small Forward',
    skills: ['Scoring', 'Playmaking', 'Rebounding'],
    strengths: 'Versatility',
    weaknesses: 'Three-point shooting',
    nickname: 'King James',
    teammates: ['Kyrie Irving', 'Kevin Love', 'Tristan Thompson'],
    accomplishments: [ '17x NBA All-Star', '4x NBA Most Valuable Player (MVP)', '3x NBA Finals MVP', '4x NBA Champion', '1x NBA Scoring Champion', '1x NBA Rebounding Champion', '1x NBA Assists Leader', '17x All-NBA Team selection', ]
    ,
    
  },
  {
    name: '2013 Kevin Durant',
    img: 'imgs/durant.jpg',
    team: 'Thunder',
    position: 'Small Forward',
    skills: ['Shooting', 'Scoring', 'Rebounding'],
    strengths: 'Versatility',
    weaknesses: 'Defense (at the time)',
    nickname: 'Durantula',
    teammates: ['Russell Westbrook', 'Serge Ibaka', 'Thabo Sefolosha'],
    accomplishments: ['11x NBA All-Star, 1x NBA Most Valuable Player (MVP), 4x NBA Scoring Champion, 1x NBA Rookie of the Year, 2x NBA Finals MVP, NBA All-Star Game MVP, NBA All-Star Game MVP, 5x All-NBA First Team selection,']


},
{
    name: 'Joel Embiid',
    img: 'imgs/embiid.jpg',
    team: '76ers',
    position: 'Center',
    skills: ['Post Moves', 'Shooting', 'Defense'],
    strengths: 'Dominant in the paint',
    weaknesses: 'Injury Prone',
    nickname: 'The Process',
    teammates: ['Ben Simmons', 'Tobias Harris', 'Seth Curry'],
    accomplishments: 'NBA Most Valuable Player (2023). 7x NBA All-Star (2018-2024). All-NBA First Team (2023). 4x All-NBA Second Team (2018, 2019, 2021, 2022). 3x NBA All-Defensive Second Team (2018, 2019, 2021). 2x NBA Scoring Champion (2022, 2023).'
  }
  

  
];
function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards');
  let row;

  teamMembers.forEach((member, index) => {
    // Add a new row every 5th player
    if (index % 5 === 0) {
      row = document.createElement('div');
      row.classList.add('row',); // Add mx-auto to center the row
      teamCardsContainer.appendChild(row);
    }

    const card = document.createElement('div');
    card.classList.add('col-md-2', 'mb-4', 'mx-auto');

    let backgroundColor;

    switch (member.team.toLowerCase()) {
      case 'bulls':
        backgroundColor = '#dc3545'; // Red for Bulls
        break;
      case 'cavaliers':
        backgroundColor = '#8B0000'; // Green for Cavaliers
        break;
      case '76ers':
        backgroundColor = '#006bb6'; // Blue for 76ers
        break;
      case 'thunder':
        backgroundColor = '#007AC1'; // Red for Heat
        break;
      default:
        backgroundColor = '#6c757d'; // Gray for other teams
    }
    card.style.backgroundColor = backgroundColor;

    const teammatesList = member.teammates
     .map(teammate => `<li> ${teammate} </li>`)
     .join('');

    card.innerHTML = `
          <div class="card">
              <div class="card-header text-center"> 
                <img src="${member.img}" alt="${member.name}" class="img-fluid" style="width: 10vw; height: 10vw;">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-subtitle mb-3 text-muted">${member.nickname}</p>
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
                  <h2><strong>Accomplishments:</strong> ${member.accomplishments}</h2>
              </div>
          </div>
      `;

    if (row) {
      row.appendChild(card);
    }
  });
}

window.onload = generateTeamCards;
