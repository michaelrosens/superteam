function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load", function() {
  document.body.style.background = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
});

const teamMembers = [
  {
    name: '2010 Derrick Rose',
    img: 'imgs/derrick.jpg',
    age: 22,
    activelyPlaying: true,
    team: 'Chicago Bulls',
    position: 'Point Guard',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    statline: ['25 PPG, 7.7 APG, 4.1 RPG'],
    strengths: 'Explosive Athleticism',
    weaknesses: '3 point shooting',
    nickname: 'D-Rose',
    teammates: ['Joakim Noah', 'Luol Deng', 'Taj Gibson'],
    accomplishments:['3x NBA All-Star, NBA Most Valuable Player (MVP), NBA Rookie of the Year, 2x All-NBA Team selection']
  },
  {
    name: '2000 Allen Iverson',
    img: 'imgs/ai.jpg',
    team: 'Philadelphia 76ers',
    position: 'Shooting Guard',
    skills: ['Ball Handling', 'Scoring', 'Steals'],
    statline: ['28.4 PPG, 4.7 APG, 3.8 RPG, 2.1 SPG'],
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
    team: 'Cleveland Cavaliers',
    position: 'Small Forward',
    skills: ['Scoring', 'Playmaking', 'Rebounding'],
    statline: ['25.3 PPG, 6.8 APG, 7.4 RPG'],
    strengths: 'Versatility',
    weaknesses: 'Three-point shooting',
    nickname: 'The GOAT',
    teammates: ['Kyrie Irving', 'Kevin Love', 'Tristan Thompson'],
    accomplishments: [ '17x NBA All-Star', '4x NBA Most Valuable Player (MVP)', '3x NBA Finals MVP', '4x NBA Champion', '1x NBA Scoring Champion', '1x NBA Rebounding Champion', '1x NBA Assists Leader', '17x All-NBA Team selection', ]
    ,
    
  },
  {
    name: '2013 Kevin Durant',
    img: 'imgs/durant.jpg',
    team: 'Oklahoma City Thunder',
    position: 'Small Forward',
    skills: ['Shooting', 'Scoring', 'Rebounding'],
    statline: ['28.1 PPG, 4.6 APG, 7.9 RPG, 1.3 BPG, 41.6% 3P'],
    strengths: 'Versatility',
    weaknesses: 'Defense (at the time)',
    nickname: 'Durantula',
    teammates: ['Russell Westbrook', 'Serge Ibaka', 'Thabo Sefolosha'],
    accomplishments: ['11x NBA All-Star, 1x NBA Most Valuable Player (MVP), 4x NBA Scoring Champion, 1x NBA Rookie of the Year, 2x NBA Finals MVP, NBA All-Star Game MVP, NBA All-Star Game MVP, 5x All-NBA First Team selection,']


},
{
    name: '2023 Joel Embiid',
    img: 'imgs/embiid.jpg',
    team: 'Philadelphia 76ers',
    position: 'Center',
    skills: ['Post Moves', 'Shooting', 'Defense'],
    statline: ['33.1 PPG, 4.2 APG, 10.2 RPG, 1.7 BPG'],
    strengths: 'Dominant in the paint',
    weaknesses: 'Injury Prone',
    nickname: 'The Process',
    teammates: ['Ben Simmons', 'Tobias Harris', 'Seth Curry'],
    accomplishments: 'NBA Most Valuable Player (2023). 7x NBA All-Star (2018-2024). All-NBA First Team (2023). 4x All-NBA Second Team (2018, 2019, 2021, 2022). 3x NBA All-Defensive Second Team (2018, 2019, 2021). 2x NBA Scoring Champion (2022, 2023).'
  },
  {
name: '2008 Chris Paul',
img: 'imgs/cp3.jpg',
team: 'New Orleans Hornets',
position: 'Point Guard',
skills: ['Ball Handling', 'Passing', 'Shooting'],
statline: ['21.1 PPG, 11.6 APG, 4.0 RPG, 2.7 SPG'],
strengths: 'Floor Generalship, Court Vision',
weaknesses: 'Size and Strength',
nickname: 'CP3',
teammates: ['David West', 'Tyson Chandler', 'Peja Stojakovic'],
accomplishments: 'NBA Rookie of the Year (2006). 9x NBA All-Star (2008-2016). 4x NBA assists leader (2008, 2009, 2014, 2017). 6x NBA steals leader (2008, 2009, 2011, 2012, 2014, 2017). All-NBA First Team (2008). 3x All-NBA Second Team (2012, 2013, 2015). 2x NBA All-Defensive First Team (2009, 2012). NBA All-Defensive Second Team (2008).'
  },
  {
    name: "2016 Russell Westbrook",
    img: "imgs/russ.jpg",
    team: "Oklahoma City Thunder",
    position: "Point Guard",
    skills: ["Athleticism", "Explosiveness", "Rebounding"],
    statline: ["31.6 PPG", "10.4 APG", "10.7 RPG"],
    strengths: "Athleticism, Triple-Double Ability",
    weaknesses: "Three-Point Shooting Efficiency",
    nickname: "Russ",
    teammates: ["Kevin Durant", "Steven Adams", "Enes Kanter"],
    accomplishments: "NBA All-Star (2016). NBA All-Star Game MVP (2015, 2016). NBA Most Valuable Player (2017). 2x NBA All-Star Game MVP (2015, 2016). 2x NBA scoring champion (2015, 2017). NBA assists leader (2018). NBA All-Rookie Second Team (2009)."
  },
  {
    name: "2020 Ben Simmons",
    img: "imgs/simmons.webp",
    team: "Philadelphia 76ers",
    position: "Point Guard",
    skills: ["Playmaking", "Defense", "Rebounding"],
    statline: ["16.4 PPG", "7.8 RPG", "8.0 APG", "2.1 SPG"],
    strengths: "Court vision, Defensive versatility",
    weaknesses: "Shooting range",
    nickname: "Benny",
    teammates: ["Joel Embiid", "Tobias Harris", "Josh Richardson"],
    accomplishments: "NBA All-Star (2019, 2020, 2021). All-NBA Third Team (2020). NBA All-Defensive First Team (2020, 2021). NBA Rookie of the Year (2018). NBA All-Rookie First Team (2018). NBA steals leader (2020)."
  },
  {
    name: "1980 Julius Erving",
    img: "imgs/erving.jpg",
    team: "Philadelphia 76ers",
    position: "Power Forward",
    skills: ["Scoring", "Athleticism", "Playmaking"],
    statline: ["26.9 PPG", "7.4 RPG", "4.6 APG", "2.2 SPG"],
    strengths: "High-flying dunks, Versatile scoring",
    weaknesses: "Outside shooting",
    nickname: "Dr. J",
    teammates: ["Darryl Dawkins", "Maurice Cheeks", "Bobby Jones"],
    accomplishments: "NBA Champion (1983). NBA Most Valuable Player (1981). NBA All-Star (1977–1987). All-NBA First Team (1978, 1980, 1981, 1982, 1983). All-NBA Second Team (1977, 1984). ABA Champion (1974, 1976). ABA Most Valuable Player (1974, 1975, 1976). ABA All-Star (1972–1976). ABA All-Time Team."
  },
  {
    name: "2001 Ben Wallace",
    img: "imgs/ben_wallace.jpg",
    team: "Detroit Pistons",
    position: "Center",
    skills: ["Defense", "Rebounding", "Shot Blocking"],
    statline: ["6.4 PPG", "13.2 RPG", "1.5 APG", "2.3 BPG", "1.3 SPG"],
    strengths: "Defensive prowess, Rebounding",
    weaknesses: "Scoring ability",
    nickname: "Big Ben",
    teammates: ["Jerry Stackhouse", "Richard Hamilton", "Clifford Robinson"],
    accomplishments: "4x NBA Defensive Player of the Year (2002, 2003, 2005, 2006). NBA Champion (2004). 5x NBA All-Star (2003–2006, 2008). 5x All-NBA Team selection. 6x NBA All-Defensive Team selection. NBA All-Rookie Second Team (1997)."
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
      case 'chicago bulls':
        backgroundColor = '#dc3545'; // Red for Bulls
        break;
      case 'cleveland cavaliers':
        backgroundColor = '#8B0000'; // Green for Cavaliers
        break;
      case 'philadelphia 76ers':
        backgroundColor = '#006bb6'; // Blue for 76ers
        break;
      case 'oklahoma city thunder':
        backgroundColor = '#007AC1'; // Red for Heat
      break;
        case 'new orleans hornets':
        backgroundColor = '#85714D'; // Red for Heat
        break;
        case 'toronto raptors':
        backgroundColor = '#CE1141'; // Red for Heat
        break;
        case 'los angeles lakers':
          backgroundColor = '#FDB927'; // Red for Bulls
          break;
          case 'detroit pistons':
            backgroundColor = '#1D42BA'; // Red for Bulls
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
                <img src="${member.img}" alt="${member.name}" class="img-fluid" style="width: 305px; height: 285px;">
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
                  <p><strong>Statline:</strong> ${member.statline}</p>
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
