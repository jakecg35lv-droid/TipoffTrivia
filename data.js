// Deep Cut Hoops — prompt + answer database
// Each prompt: id, d (easy|medium|hard), q (question), p (true = people, enables last-name matching),
// t: five tiers [Layup 10, Mid-Range 30, Three Ball 60, Deep Cut 85, Half Court 100].
// RULE: Half Court (last tier) holds exactly ONE super-niche answer per prompt.
// Each answer: "Primary|alias|alias".

window.PROMPTS = [
  // ---------------- EASY ----------------
  { id: "champs", d: "easy", q: "Name a school that has won the NCAA men's national championship",
    t: [
      ["Duke", "Kentucky|UK", "North Carolina|UNC|Carolina|Tar Heels", "UCLA|Bruins", "Kansas|KU|Jayhawks"],
      ["UConn|Connecticut|Huskies", "Indiana|IU|Hoosiers", "Villanova|Nova", "Michigan State|MSU|Sparty", "Florida|UF|Gators", "Louisville", "Syracuse|Cuse", "Arizona", "Virginia|UVA", "Baylor", "Michigan"],
      ["Maryland", "Georgetown", "NC State|North Carolina State", "UNLV", "Ohio State|OSU", "Arkansas", "Marquette", "Cincinnati", "Wisconsin"],
      ["Oklahoma State|Oklahoma A&M", "Loyola Chicago|Loyola|Loyola-Chicago", "UTEP|Texas Western", "Oregon", "Stanford", "Utah", "San Francisco|USF", "Holy Cross", "La Salle", "Wyoming", "California|Cal"],
      ["CCNY|City College of New York|City College"]
    ] },
  { id: "bigten", d: "easy", q: "Name a current Big Ten basketball school",
    t: [
      ["Indiana|IU", "Michigan", "Michigan State|MSU", "Purdue", "Ohio State|OSU", "UCLA"],
      ["Illinois", "Iowa", "Wisconsin", "Maryland", "Oregon", "USC|Southern California"],
      ["Minnesota", "Nebraska", "Washington|UW", "Northwestern"],
      ["Penn State|PSU"],
      ["Rutgers"]
    ] },
  { id: "sec", d: "easy", q: "Name a current SEC basketball school",
    t: [
      ["Kentucky|UK", "Florida|UF", "Tennessee|Vols", "Alabama|Bama", "Auburn"],
      ["Arkansas", "LSU", "Texas|UT", "Georgia|UGA", "Missouri|Mizzou", "Texas A&M|TAMU|A&M"],
      ["Ole Miss|Mississippi", "Oklahoma|OU"],
      ["Mississippi State|Miss State", "South Carolina"],
      ["Vanderbilt|Vandy"]
    ] },
  { id: "acc", d: "easy", q: "Name a current ACC basketball school",
    t: [
      ["Duke", "North Carolina|UNC", "Virginia|UVA", "Syracuse", "Louisville"],
      ["NC State|North Carolina State", "Wake Forest", "Miami", "Notre Dame", "Florida State|FSU", "Clemson"],
      ["Virginia Tech", "Pittsburgh|Pitt", "Georgia Tech", "Boston College|BC"],
      ["Stanford", "California|Cal"],
      ["SMU|Southern Methodist"]
    ] },
  { id: "big12", d: "easy", q: "Name a current Big 12 basketball school",
    t: [
      ["Kansas|KU", "Houston", "Baylor", "Arizona"],
      ["Iowa State|ISU", "Texas Tech", "West Virginia|WVU", "BYU|Brigham Young", "Kansas State|K-State", "Cincinnati"],
      ["Oklahoma State", "Colorado", "Utah", "Arizona State|ASU"],
      ["TCU|Texas Christian"],
      ["UCF|Central Florida"]
    ] },
  { id: "bigeast", d: "easy", q: "Name a current Big East basketball school",
    t: [
      ["UConn|Connecticut", "Villanova", "Georgetown"],
      ["Marquette", "Creighton", "St. John's|St Johns", "Xavier", "Butler", "Providence"],
      [],
      ["Seton Hall"],
      ["DePaul"]
    ] },
  { id: "ff2125", d: "easy", q: "Name a team that made the Final Four between 2021 and 2025",
    t: [
      ["Duke", "UConn|Connecticut", "Gonzaga", "Kansas", "North Carolina|UNC", "Houston", "Florida"],
      ["Baylor", "Villanova", "UCLA", "Purdue", "Auburn", "Alabama"],
      ["Miami", "NC State"],
      ["San Diego State|SDSU"],
      ["Florida Atlantic|FAU"]
    ] },
  { id: "ivy", d: "easy", q: "Name an Ivy League school",
    t: [
      ["Harvard", "Yale", "Princeton"],
      ["Penn|Pennsylvania|UPenn", "Columbia", "Cornell"],
      [],
      ["Brown"],
      ["Dartmouth"]
    ] },
  { id: "wildcats", d: "easy", q: "Name a Division I school nicknamed the Wildcats",
    t: [
      ["Kentucky", "Arizona", "Villanova"],
      ["Kansas State|K-State", "Northwestern", "Davidson"],
      [],
      ["Weber State", "New Hampshire|UNH", "Abilene Christian|ACU"],
      ["Bethune-Cookman|Bethune Cookman"]
    ] },
  { id: "tigers", d: "easy", q: "Name a Division I school nicknamed the Tigers",
    t: [
      ["LSU", "Auburn", "Memphis", "Missouri|Mizzou", "Clemson"],
      ["Princeton", "Towson"],
      ["Jackson State", "Grambling State|Grambling"],
      ["Tennessee State", "Texas Southern"],
      ["Pacific"]
    ] },
  // ---------------- MEDIUM ----------------
  { id: "wooden", d: "medium", p: true, q: "Name a Wooden Award winner (National Player of the Year, 1977–2025)",
    t: [
      ["Larry Bird", "Michael Jordan", "Kevin Durant", "Zion Williamson|Zion", "Cooper Flagg", "Tim Duncan", "Anthony Davis", "Blake Griffin"],
      ["David Robinson", "Christian Laettner", "Shane Battier", "JJ Redick|J.J. Redick", "Tyler Hansbrough", "Jimmer Fredette|Jimmer", "Zach Edey", "Jalen Brunson", "Doug McDermott", "Buddy Hield", "Danny Manning", "Ralph Sampson", "Larry Johnson", "Kenyon Martin"],
      ["Chris Mullin", "Sean Elliott", "Elton Brand", "Antawn Jamison", "Marcus Camby", "Glenn Robinson|Big Dog", "Evan Turner", "Frank Kaminsky", "Trey Burke", "Andrew Bogut", "Luka Garza", "Ed O'Bannon", "Jason Williams|Jay Williams"],
      ["Danny Ainge", "Darrell Griffith", "Lionel Simmons", "Calbert Cheaney", "TJ Ford|T.J. Ford", "Jameer Nelson", "Frank Mason III|Frank Mason", "Obi Toppin", "Oscar Tshiebwe", "Walter Berry", "Marques Johnson"],
      ["Phil Ford"]
    ] },
  { id: "titlecoach", d: "medium", p: true, q: "Name a head coach who won an NCAA men's national title",
    t: [
      ["Mike Krzyzewski|Coach K", "John Wooden", "Dean Smith", "Bob Knight|Bobby Knight", "Roy Williams", "Tom Izzo", "Bill Self", "John Calipari", "Rick Pitino", "Jim Calhoun", "Dan Hurley", "Jim Boeheim", "Jay Wright", "Adolph Rupp"],
      ["Billy Donovan", "Tony Bennett", "Scott Drew", "Todd Golden", "Jim Valvano|Jimmy V", "Jerry Tarkanian|Tark", "John Thompson", "Lute Olson", "Gary Williams", "Kevin Ollie", "Tubby Smith", "Nolan Richardson", "Dusty May", "Denny Crum", "Larry Brown"],
      ["Rollie Massimino", "Steve Fisher", "Jud Heathcote", "Al McGuire", "Joe B. Hall|Joe Hall", "Jim Harrick", "Don Haskins", "Phog Allen|Forrest Allen", "Hank Iba"],
      ["Fred Taylor", "Pete Newell", "Frank McGuire", "Branch McCracken", "Ed Jucker", "Phil Woolpert", "George Ireland", "Nat Holman", "Howard Hobson", "Bud Foster", "Everett Dean", "Everett Shelton", "Doggie Julian|Alvin Julian", "Ken Loeffler"],
      ["Vadal Peterson"]
    ] },
  { id: "nopick", d: "medium", p: true, q: "Name a college player taken #1 overall in the NBA Draft (2000–2025)",
    t: [
      ["Zion Williamson", "Anthony Davis", "Cooper Flagg", "Kyrie Irving", "John Wall", "Blake Griffin", "Anthony Edwards"],
      ["Derrick Rose", "Karl-Anthony Towns|KAT|Karl Anthony Towns", "Andrew Wiggins", "Ben Simmons", "Paolo Banchero", "Cade Cunningham", "Greg Oden", "Deandre Ayton"],
      ["Markelle Fultz", "Kenyon Martin"],
      ["Anthony Bennett"],
      ["Andrew Bogut"]
    ] },
  { id: "mop", d: "medium", p: true, q: "Name a Final Four Most Outstanding Player (2000–2026)",
    t: [
      ["Carmelo Anthony", "Anthony Davis", "Kemba Walker", "Shane Battier", "Joakim Noah"],
      ["Shabazz Napier|Shabazz", "Mario Chalmers", "Tyus Jones", "Donte DiVincenzo", "Kyle Guy", "Juan Dixon", "Emeka Okafor", "Sean May", "Walter Clayton Jr.|Walter Clayton"],
      ["Corey Brewer", "Kyle Singler", "Luke Hancock", "Ryan Arcidiacono", "Joel Berry II|Joel Berry", "Ochai Agbaji", "Adama Sanogo", "Tristen Newton", "Mateen Cleaves", "Elliot Cadeau"],
      ["Jared Butler"],
      ["Wayne Ellington"]
    ] },
  { id: "bulldogs", d: "medium", q: "Name a Division I school nicknamed the Bulldogs",
    t: [
      ["Gonzaga|Zags", "Georgia|UGA", "Butler"],
      ["Mississippi State", "Drake", "Yale", "Fresno State"],
      ["Louisiana Tech|La Tech", "Samford", "The Citadel|Citadel", "Gardner-Webb|Gardner Webb"],
      ["UNC Asheville", "Alabama A&M", "South Carolina State"],
      ["Bryant"]
    ] },
  { id: "indiana", d: "medium", q: "Name a Division I basketball school in the state of Indiana",
    t: [
      ["Indiana|IU", "Purdue", "Notre Dame", "Butler"],
      ["Ball State", "Indiana State", "Valparaiso|Valpo"],
      ["Evansville", "Purdue Fort Wayne|PFW|IPFW|Fort Wayne"],
      ["IU Indianapolis|IU Indy|IUPUI"],
      ["Southern Indiana|USI"]
    ] },
  { id: "fabfive", d: "medium", p: true, q: "Name a member of Michigan's Fab Five",
    t: [
      ["Chris Webber|C-Webb", "Jalen Rose"],
      ["Juwan Howard"],
      [],
      ["Jimmy King"],
      ["Ray Jackson"]
    ] },
  { id: "arenas", d: "medium", q: "Name a college basketball home arena (power conference or Big East)",
    t: [
      ["Cameron Indoor Stadium|Cameron Indoor|Cameron", "Allen Fieldhouse|Phog", "Rupp Arena|Rupp", "Pauley Pavilion|Pauley", "Dean Smith Center|Dean Dome|Smith Center", "Madison Square Garden|MSG|The Garden"],
      ["Assembly Hall|Simon Skjodt Assembly Hall", "Hinkle Fieldhouse|Hinkle", "Mackey Arena|Mackey", "Breslin Center|Breslin", "JMA Wireless Dome|Carrier Dome|JMA Dome", "KFC Yum! Center|Yum Center|KFC Yum Center", "McKale Center|McKale", "Kohl Center", "Gampel Pavilion|Gampel"],
      ["Hilton Coliseum|Hilton", "Crisler Center|Crisler Arena|Crisler", "Thompson-Boling Arena|Thompson Boling", "Bud Walton Arena|Bud Walton", "Fertitta Center", "Williams Arena|The Barn", "Value City Arena|Schottenstein Center|The Schott", "John Paul Jones Arena|JPJ", "Carver-Hawkeye Arena|Carver Hawkeye", "Pete Maravich Assembly Center|PMAC", "Marriott Center", "Littlejohn Coliseum|Littlejohn", "Finneran Pavilion", "Fiserv Forum"],
      ["Bramlage Coliseum|Bramlage", "Gallagher-Iba Arena|Gallagher Iba", "United Supermarkets Arena", "WVU Coliseum", "Huntsman Center", "Lloyd Noble Center", "Stegeman Coliseum", "Coleman Coliseum", "Neville Arena|Auburn Arena", "Humphrey Coliseum|The Hump", "Mizzou Arena", "Memorial Gymnasium|Memorial Gym", "Joel Coliseum|LJVM Coliseum|Lawrence Joel Coliseum", "Cassell Coliseum", "Petersen Events Center|The Pete", "Purcell Pavilion|Joyce Center", "Conte Forum", "Watsco Center", "Moody Coliseum", "Ferrell Center|Foster Pavilion", "Fifth Third Arena", "Cintas Center", "CHI Health Center", "Xfinity Center", "Pinnacle Bank Arena", "Welsh-Ryan Arena|Welsh Ryan", "Bryce Jordan Center", "Jersey Mike's Arena|RAC|Louis Brown Athletic Center", "Hec Edmundson Pavilion|Alaska Airlines Arena|Hec Ed", "Matthew Knight Arena", "Galen Center", "Moody Center", "Reed Arena", "O'Connell Center|Exactech Arena|O-Dome", "Colonial Life Arena", "McCamish Pavilion", "Tucker Center|Donald L. Tucker Center", "Haas Pavilion", "Maples Pavilion", "Prudential Center|The Rock", "Capital One Arena", "Wintrust Arena", "Amica Mutual Pavilion|Dunkin Donuts Center|The Dunk", "State Farm Center", "Addition Financial Arena", "Desert Financial Arena|Wells Fargo Arena", "Schollmaier Arena", "CU Events Center|Coors Events Center", "Carnesecca Arena|Alumni Hall", "Beasley Coliseum", "Rose Hill Gymnasium|Rose Hill Gym", "The Palestra|Palestra"],
      ["Gill Coliseum"]
    ] },
  { id: "gonzaga", d: "medium", p: true, q: "Name a former Gonzaga player who reached the NBA",
    t: [
      ["John Stockton", "Chet Holmgren", "Domantas Sabonis", "Rui Hachimura", "Jalen Suggs", "Adam Morrison"],
      ["Kelly Olynyk", "Drew Timme", "Brandon Clarke", "Zach Collins", "Corey Kispert", "Andrew Nembhard"],
      ["Julian Strawther", "Ronny Turiaf", "Austin Daye", "Dan Dickau"],
      ["Jeremy Pargo", "Killian Tillie"],
      ["Robert Sacre"]
    ] },
  { id: "unbeaten", d: "medium", q: "Name a school that went undefeated AND won the national title",
    t: [
      ["Indiana|IU", "UCLA"],
      [],
      [],
      ["North Carolina|UNC"],
      ["San Francisco|USF"]
    ] },
  // ---------------- HARD ----------------
  { id: "texas", d: "hard", q: "Name a Division I basketball school in the state of Texas",
    t: [
      ["Texas|UT", "Houston", "Baylor", "Texas Tech", "Texas A&M|TAMU"],
      ["TCU", "SMU"],
      ["Rice", "UTEP", "North Texas|UNT", "UTSA", "Texas State"],
      ["Sam Houston|Sam Houston State", "Stephen F. Austin|SFA|Stephen F Austin", "Abilene Christian|ACU", "Lamar", "UT Arlington|UTA", "Texas Southern", "Prairie View A&M|Prairie View", "Tarleton State|Tarleton", "UT Rio Grande Valley|UTRGV", "Texas A&M-Corpus Christi|Corpus Christi|TAMUCC", "Houston Christian|HCU|Houston Baptist", "Incarnate Word|UIW"],
      ["East Texas A&M|Texas A&M-Commerce"]
    ] },
  { id: "hbcu", d: "hard", q: "Name an HBCU with a Division I men's basketball program",
    t: [
      ["Howard", "Grambling State|Grambling", "Jackson State", "Southern|Southern University"],
      ["Norfolk State", "Hampton", "Florida A&M|FAMU", "North Carolina A&T|NC A&T", "Texas Southern", "Morgan State", "Alabama State", "Tennessee State", "Prairie View A&M|Prairie View"],
      ["Coppin State", "Alcorn State|Alcorn", "South Carolina State", "Bethune-Cookman", "Delaware State", "North Carolina Central|NC Central|NCCU", "Alabama A&M"],
      ["Mississippi Valley State|MVSU", "Arkansas-Pine Bluff|UAPB|Arkansas Pine Bluff"],
      ["Maryland Eastern Shore|UMES"]
    ] },
  { id: "upsets", d: "hard", q: "Name a 15 or 16 seed that won an NCAA tournament game (through 2025)",
    t: [
      ["UMBC", "Fairleigh Dickinson|FDU", "Saint Peter's|St Peters|Saint Peters", "Florida Gulf Coast|FGCU|Dunk City"],
      ["Oral Roberts|ORU", "Princeton", "Middle Tennessee|MTSU|Middle Tennessee State", "Norfolk State", "Lehigh"],
      ["Hampton"],
      ["Coppin State", "Richmond"],
      ["Santa Clara"]
    ] },
  { id: "ffhost", d: "hard", q: "Name a city that hosted the men's Final Four from 2010–2026",
    t: [
      ["Indianapolis|Indy", "Houston", "New Orleans|NOLA", "San Antonio"],
      ["Atlanta", "Glendale|Phoenix"],
      [],
      ["Minneapolis"],
      ["Arlington|Dallas"]
    ] },
  { id: "duke15", d: "hard", p: true, q: "Name a player from Duke's 2015 national championship team",
    t: [
      ["Jahlil Okafor", "Tyus Jones", "Justise Winslow"],
      ["Grayson Allen", "Quinn Cook"],
      ["Matt Jones"],
      ["Amile Jefferson"],
      ["Marshall Plumlee"]
    ] },
  { id: "uconn", d: "hard", p: true, q: "Name a player from UConn's 2023 or 2024 national title team",
    t: [
      ["Donovan Clingan", "Tristen Newton", "Stephon Castle", "Jordan Hawkins", "Adama Sanogo"],
      ["Alex Karaban", "Cam Spencer", "Andre Jackson Jr.|Andre Jackson"],
      ["Hassan Diarra", "Samson Johnson", "Joey Calcaterra", "Nahiem Alleyne"],
      ["Solo Ball"],
      ["Jaylin Stewart"]
    ] },
  { id: "gators07", d: "hard", p: true, q: "Name a player from Florida's back-to-back title teams (2006 & 2007)",
    t: [
      ["Joakim Noah", "Al Horford", "Corey Brewer"],
      ["Taurean Green", "Lee Humphrey"],
      [],
      ["Chris Richard"],
      ["Walter Hodge"]
    ] },
  { id: "uk2010", d: "hard", p: true, q: "Name a Kentucky player picked in the 1st round of the 2010 NBA Draft",
    t: [
      ["John Wall", "DeMarcus Cousins|Boogie Cousins|Boogie"],
      ["Eric Bledsoe"],
      [],
      ["Patrick Patterson"],
      ["Daniel Orton"]
    ] },
  { id: "iu76", d: "hard", p: true, q: "Name a starter from Indiana's undefeated 1976 title team",
    t: [
      ["Scott May", "Quinn Buckner", "Kent Benson"],
      [],
      [],
      ["Bobby Wilkerson"],
      ["Tom Abernethy"]
    ] },
  { id: "gators25", d: "hard", p: true, q: "Name a player from Florida's 2025 national championship team",
    t: [
      ["Walter Clayton Jr.|Walter Clayton"],
      ["Alijah Martin", "Will Richard", "Alex Condon"],
      ["Thomas Haugh", "Rueben Chinyelu", "Denzel Aberdeen"],
      ["Micah Handlogten"],
      ["Urban Klavzar"]
    ] }
];

// ================= EXPANSION PACK (added Nov 2026) =================
window.PROMPTS.push(
  // ---------------- EASY ----------------
  { id: "b1gchamps", d: "easy", q: "Name a current Big Ten school that has won a men's national title",
    t: [
      ["Indiana|IU", "Michigan State|MSU", "UCLA"],
      ["Michigan", "Maryland"],
      ["Ohio State|OSU", "Wisconsin"],
      [],
      ["Oregon"]
    ] },
  { id: "accchamps", d: "easy", q: "Name a current ACC school that has won a men's national title",
    t: [
      ["Duke", "North Carolina|UNC"],
      ["Louisville", "Syracuse", "Virginia|UVA"],
      ["NC State|North Carolina State"],
      ["Stanford"],
      ["California|Cal"]
    ] },
  { id: "b12champs", d: "easy", q: "Name a current Big 12 school that has won a men's national title",
    t: [
      ["Kansas|KU"],
      ["Arizona", "Baylor"],
      ["Cincinnati"],
      ["Oklahoma State|Oklahoma A&M"],
      ["Utah"]
    ] },
  { id: "bechamps", d: "easy", q: "Name a current Big East school that has won a men's national title",
    t: [
      ["UConn|Connecticut", "Villanova"],
      ["Georgetown"],
      [], [],
      ["Marquette"]
    ] },
  { id: "ff2426", d: "easy", q: "Name a team that made the men's Final Four from 2024 to 2026",
    t: [
      ["UConn|Connecticut", "Duke", "Michigan", "Florida"],
      ["Houston", "Purdue", "Arizona", "Auburn"],
      ["Alabama", "Illinois"],
      [],
      ["NC State|North Carolina State"]
    ] },
  { id: "huskies", d: "easy", q: "Name a Division I school nicknamed the Huskies",
    t: [
      ["UConn|Connecticut"],
      ["Washington|UW"],
      ["Northeastern"],
      ["Northern Illinois|NIU"],
      ["Houston Christian|HCU|Houston Baptist"]
    ] },
  { id: "rams", d: "easy", q: "Name a Division I school nicknamed the Rams",
    t: [
      ["VCU|Virginia Commonwealth"],
      ["Rhode Island|URI"],
      ["Colorado State"],
      [],
      ["Fordham"]
    ] },
  { id: "aggies", d: "easy", q: "Name a Division I school nicknamed the Aggies",
    t: [
      ["Texas A&M|TAMU"],
      ["Utah State"],
      ["New Mexico State|NMSU"],
      ["North Carolina A&T|NC A&T"],
      ["UC Davis"]
    ] },
  { id: "cougars", d: "easy", q: "Name a Division I school nicknamed the Cougars",
    t: [
      ["Houston", "BYU|Brigham Young"],
      ["Washington State|Wazzu"],
      ["Charleston|College of Charleston"],
      ["Chicago State"],
      ["SIU Edwardsville|SIUE|Southern Illinois Edwardsville"]
    ] },
  { id: "devils", d: "easy", q: "Name a D-I school whose nickname has 'Devil' or 'Demon' in it",
    t: [
      ["Duke"],
      ["Arizona State|ASU", "DePaul", "Wake Forest"],
      [],
      ["Central Connecticut|CCSU|Central Connecticut State"],
      ["Northwestern State"]
    ] },
  { id: "calipari", d: "easy", q: "Name a college John Calipari has been head coach at",
    t: [
      ["Kentucky|UK"],
      ["Memphis", "Arkansas"],
      [], [],
      ["UMass|Massachusetts"]
    ] },
  { id: "pitino", d: "easy", q: "Name a college Rick Pitino has been head coach at",
    t: [
      ["Kentucky|UK", "Louisville"],
      ["St. John's|St Johns"],
      ["Providence", "Iona"],
      [],
      ["Boston University|BU"]
    ] },
  { id: "knight", d: "easy", q: "Name a college Bob Knight was head coach at",
    t: [
      ["Indiana|IU"],
      ["Texas Tech"],
      [], [],
      ["Army|West Point"]
    ] },

  // ---------------- MEDIUM ----------------
  { id: "golden", d: "medium", q: "Name a D-I school whose nickname starts with 'Golden'",
    t: [
      ["Marquette", "Minnesota"],
      ["California|Cal", "Tulsa", "Southern Miss|Southern Mississippi"],
      ["Oral Roberts|ORU", "Kent State", "Oakland"],
      ["Tennessee Tech", "Arkansas-Pine Bluff|UAPB|Arkansas Pine Bluff"],
      ["Canisius"]
    ] },
  { id: "self", d: "medium", q: "Name a college Bill Self has been head coach at",
    t: [
      ["Kansas|KU"],
      ["Illinois"],
      ["Tulsa"],
      [],
      ["Oral Roberts|ORU"]
    ] },
  { id: "huggins", d: "medium", q: "Name a college Bob Huggins was head coach at",
    t: [
      ["West Virginia|WVU", "Cincinnati"],
      ["Kansas State|K-State"],
      ["Akron"],
      [],
      ["Walsh"]
    ] },
  { id: "hurley", d: "medium", q: "Name a college Dan Hurley has been head coach at",
    t: [
      ["UConn|Connecticut"],
      ["Rhode Island|URI"],
      [], [],
      ["Wagner"]
    ] },
  { id: "pearl", d: "medium", q: "Name a college Bruce Pearl has been head coach at",
    t: [
      ["Auburn"],
      ["Tennessee"],
      ["Milwaukee|UW-Milwaukee|Wisconsin-Milwaukee"],
      [],
      ["Southern Indiana|USI"]
    ] },
  { id: "lbrown", d: "medium", q: "Name a college Larry Brown was head coach at",
    t: [
      ["Kansas|KU"],
      ["UCLA"],
      [], [],
      ["SMU|Southern Methodist"]
    ] },
  { id: "ffcoach", d: "medium", p: true, q: "Name a head coach who took a team to the Final Four from 2021 to 2025",
    t: [
      ["Mike Krzyzewski|Coach K", "Bill Self", "Dan Hurley", "Mark Few", "Jay Wright"],
      ["Scott Drew", "Kelvin Sampson", "Hubert Davis", "Todd Golden", "Jon Scheyer", "Bruce Pearl", "Matt Painter", "Nate Oats"],
      ["Mick Cronin", "Jim Larranaga|Jim Larrañaga", "Dusty May", "Kevin Keatts"],
      [],
      ["Brian Dutcher"]
    ] },
  { id: "eleven", d: "medium", q: "Name an 11 seed that reached the men's Final Four",
    t: [
      ["George Mason|GMU", "VCU|Virginia Commonwealth", "Loyola Chicago|Loyola"],
      ["UCLA", "NC State|North Carolina State"],
      [], [],
      ["LSU"]
    ] },
  { id: "ivywins", d: "medium", q: "Name an Ivy League school that won an NCAA tournament game from 2010 to 2025",
    t: [
      ["Princeton"],
      ["Yale", "Harvard"],
      [], [],
      ["Cornell"]
    ] },
  { id: "ohio", d: "medium", q: "Name a Division I basketball school in the state of Ohio",
    t: [
      ["Ohio State|OSU", "Cincinnati", "Xavier", "Dayton"],
      ["Akron", "Kent State", "Ohio|Ohio University|Ohio U", "Toledo"],
      ["Miami (OH)|Miami Ohio|Miami", "Bowling Green|BGSU", "Wright State"],
      ["Cleveland State"],
      ["Youngstown State|YSU"]
    ] },
  { id: "uk12", d: "medium", p: true, q: "Name a player from Kentucky's 2012 national championship team",
    t: [
      ["Anthony Davis", "Michael Kidd-Gilchrist|MKG|Kidd-Gilchrist"],
      ["Terrence Jones", "Marquis Teague", "Doron Lamb"],
      ["Darius Miller", "Kyle Wiltjer"],
      [],
      ["Eloy Vargas"]
    ] },
  { id: "nova18", d: "medium", p: true, q: "Name a player from Villanova's 2018 national championship team",
    t: [
      ["Jalen Brunson", "Mikal Bridges", "Donte DiVincenzo"],
      ["Collin Gillespie", "Eric Paschall", "Omari Spellman"],
      ["Phil Booth"],
      [],
      ["Dhamir Cosby-Roundtree|Cosby-Roundtree"]
    ] },
  { id: "mich26", d: "medium", p: true, q: "Name a player from Michigan's 2026 national championship team",
    t: [
      ["Yaxel Lendeborg", "Elliot Cadeau"],
      ["Aday Mara", "Morez Johnson Jr.|Morez Johnson"],
      ["Nimari Burnett", "Roddy Gayle Jr.|Roddy Gayle"],
      ["Trey McKenney"],
      ["Will Tschetter"]
    ] },
  { id: "loyola18", d: "medium", p: true, q: "Name a player or coach from Loyola Chicago's 2018 Final Four run",
    t: [
      ["Sister Jean|Sister Jean Dolores-Schmidt", "Porter Moser"],
      ["Clayton Custer", "Marques Townes", "Donte Ingram"],
      ["Cameron Krutwig", "Ben Richardson"],
      ["Aundre Jackson"],
      ["Lucas Williamson"]
    ] },
  { id: "umbc18", d: "medium", p: true, q: "Name a player or coach from UMBC's 2018 team that beat No. 1 Virginia",
    t: [
      ["Ryan Odom"],
      ["Jairus Lyles"],
      ["K.J. Maura|KJ Maura", "Joe Sherburne"],
      ["Arkel Lamar", "Jourdan Grant"],
      ["Daniel Akin"]
    ] },
  { id: "fgcu13", d: "medium", p: true, q: "Name a player or coach from Florida Gulf Coast's 2013 'Dunk City' team",
    t: [
      ["Andy Enfield"],
      ["Sherwood Brown", "Brett Comer"],
      ["Chase Fieler", "Bernard Thompson"],
      ["Eric McKnight"],
      ["Christophe Varidel"]
    ] },
  { id: "speters22", d: "medium", p: true, q: "Name a player or coach from Saint Peter's 2022 Elite Eight team",
    t: [
      ["Shaheen Holloway", "Doug Edert"],
      ["Daryl Banks III|Daryl Banks", "KC Ndefo|K.C. Ndefo"],
      ["Matthew Lee", "Fousseyni Drame"],
      ["Hassan Drame"],
      ["Clarence Rupert"]
    ] },
  { id: "butler10", d: "medium", p: true, q: "Name a player or coach from Butler's 2010 national runner-up team",
    t: [
      ["Gordon Hayward", "Brad Stevens"],
      ["Shelvin Mack", "Matt Howard"],
      ["Ronald Nored", "Willie Veasley"],
      ["Zach Hahn", "Shawn Vanzant"],
      ["Avery Jukes"]
    ] },

  // ---------------- HARD ----------------
  { id: "nc", d: "hard", q: "Name a Division I basketball school in North Carolina",
    t: [
      ["Duke", "North Carolina|UNC", "NC State|North Carolina State", "Wake Forest"],
      ["Davidson", "Charlotte", "UNC Wilmington|UNCW"],
      ["Appalachian State|App State", "East Carolina|ECU", "UNC Greensboro|UNCG", "High Point", "Elon", "UNC Asheville"],
      ["Campbell", "Gardner-Webb|Gardner Webb", "Western Carolina", "North Carolina A&T|NC A&T", "North Carolina Central|NC Central|NCCU"],
      ["Queens|Queens University"]
    ] },
  { id: "cali", d: "hard", q: "Name a Division I basketball school in California",
    t: [
      ["UCLA", "USC|Southern California", "Stanford", "California|Cal"],
      ["San Diego State|SDSU", "Saint Mary's|St Marys", "San Francisco|USF", "Santa Clara"],
      ["Pepperdine", "Loyola Marymount|LMU", "San Diego|USD", "Fresno State", "Long Beach State|LBSU", "UC Irvine|UCI", "UC Santa Barbara|UCSB"],
      ["San Jose State|SJSU", "Cal State Fullerton|Fullerton", "Cal State Northridge|CSUN", "Cal Poly", "UC Davis", "UC Riverside|UCR", "UC San Diego|UCSD", "Pacific", "Sacramento State|Sac State", "Cal Baptist|California Baptist|CBU"],
      ["Cal State Bakersfield|CSUB|Bakersfield"]
    ] },
  { id: "newyork", d: "hard", q: "Name a Division I basketball school in New York State",
    t: [
      ["Syracuse", "St. John's|St Johns"],
      ["Iona", "St. Bonaventure|St Bonaventure|Bonnies", "Siena", "Buffalo"],
      ["Fordham", "Hofstra", "Stony Brook", "Columbia", "Cornell", "Manhattan", "Marist", "Army|West Point"],
      ["Albany|UAlbany", "Binghamton", "Niagara", "Canisius", "Colgate", "LIU|Long Island", "Wagner"],
      ["Le Moyne"]
    ] },
  { id: "unc05", d: "hard", p: true, q: "Name a player from North Carolina's 2005 national championship team",
    t: [
      ["Sean May", "Raymond Felton", "Rashad McCants", "Marvin Williams"],
      ["Jawad Williams"],
      ["Jackie Manuel", "Melvin Scott"],
      [],
      ["David Noel"]
    ] },
  { id: "unc09", d: "hard", p: true, q: "Name a player from North Carolina's 2009 national championship team",
    t: [
      ["Tyler Hansbrough|Psycho T", "Ty Lawson", "Wayne Ellington", "Danny Green"],
      ["Deon Thompson", "Ed Davis"],
      ["Tyler Zeller"],
      [],
      ["Bobby Frasor"]
    ] },
  { id: "unc17", d: "hard", p: true, q: "Name a player from North Carolina's 2017 national championship team",
    t: [
      ["Joel Berry II|Joel Berry", "Justin Jackson"],
      ["Kennedy Meeks", "Isaiah Hicks", "Theo Pinson"],
      ["Luke Maye", "Tony Bradley"],
      ["Seventh Woods"],
      ["Nate Britt"]
    ] },
  { id: "duke10", d: "hard", p: true, q: "Name a player from Duke's 2010 national championship team",
    t: [
      ["Jon Scheyer", "Kyle Singler", "Nolan Smith"],
      ["Brian Zoubek", "Mason Plumlee"],
      ["Lance Thomas", "Miles Plumlee"],
      [],
      ["Andre Dawkins"]
    ] },
  { id: "duke92", d: "hard", p: true, q: "Name a player from Duke's 1991 or 1992 national title teams",
    t: [
      ["Christian Laettner", "Grant Hill", "Bobby Hurley"],
      ["Thomas Hill"],
      ["Brian Davis", "Antonio Lang", "Cherokee Parks"],
      ["Bill McCaffrey", "Marty Clark"],
      ["Greg Koubek"]
    ] },
  { id: "uk96", d: "hard", p: true, q: "Name a player from Kentucky's 1996 'Untouchables' title team",
    t: [
      ["Antoine Walker", "Tony Delk"],
      ["Ron Mercer", "Walter McCarty", "Derek Anderson", "Mark Pope"],
      ["Jeff Sheppard", "Wayne Turner", "Nazr Mohammed"],
      [],
      ["Anthony Epps"]
    ] },
  { id: "uk98", d: "hard", p: true, q: "Name a player from Kentucky's 1998 'Comeback Cats' title team",
    t: [
      ["Jeff Sheppard"],
      ["Scott Padgett", "Nazr Mohammed", "Wayne Turner"],
      ["Jamaal Magloire", "Heshimu Evans", "Allen Edwards"],
      ["Saul Smith"],
      ["Cameron Mills"]
    ] },
  { id: "uconn11", d: "hard", p: true, q: "Name a player from UConn's 2011 national championship team",
    t: [
      ["Kemba Walker"],
      ["Jeremy Lamb", "Shabazz Napier"],
      ["Alex Oriakhi", "Roscoe Smith"],
      ["Niels Giffey", "Tyler Olander", "Jamal Coombs-McDaniel", "Donnell Beverly"],
      ["Charles Okwandu"]
    ] },
  { id: "uconn14", d: "hard", p: true, q: "Name a player from UConn's 2014 national championship team",
    t: [
      ["Shabazz Napier"],
      ["Ryan Boatright", "DeAndre Daniels"],
      ["Niels Giffey", "Amida Brimah", "Phillip Nolan"],
      ["Lasan Kromah", "Omar Calhoun", "Kentan Facey"],
      ["Terrence Samuel"]
    ] },
  { id: "lou13", d: "hard", p: true, q: "Name a player from Louisville's 2013 title team (later vacated)",
    t: [
      ["Russ Smith|Russdiculous", "Peyton Siva"],
      ["Gorgui Dieng", "Luke Hancock", "Kevin Ware"],
      ["Chane Behanan", "Montrezl Harrell", "Wayne Blackshear"],
      [],
      ["Stephan Van Treese|Van Treese"]
    ] },
  { id: "ku88", d: "hard", p: true, q: "Name a player from Kansas's 1988 'Danny and the Miracles' title team",
    t: [
      ["Danny Manning"],
      [],
      ["Milt Newton", "Kevin Pritchard"],
      ["Chris Piper", "Jeff Gueldner", "Lincoln Minor"],
      ["Scooter Barry"]
    ] },
  { id: "ku08", d: "hard", p: true, q: "Name a player from Kansas's 2008 national championship team",
    t: [
      ["Mario Chalmers"],
      ["Brandon Rush", "Darrell Arthur", "Sherron Collins"],
      ["Russell Robinson", "Darnell Jackson", "Cole Aldrich"],
      [],
      ["Sasha Kaun"]
    ] },
  { id: "ku22", d: "hard", p: true, q: "Name a player from Kansas's 2022 national championship team",
    t: [
      ["Ochai Agbaji"],
      ["Christian Braun", "Jalen Wilson", "David McCormack"],
      ["Remy Martin", "Dajuan Harris Jr.|Dajuan Harris"],
      ["Mitch Lightfoot", "KJ Adams|K.J. Adams", "Joseph Yesufu"],
      ["Jalen Coleman-Lands|Coleman-Lands"]
    ] },
  { id: "nova85", d: "hard", p: true, q: "Name a player from Villanova's 1985 national championship team",
    t: [
      ["Ed Pinckney"],
      ["Dwayne McClain", "Gary McLain"],
      ["Harold Pressley"],
      [],
      ["Harold Jensen"]
    ] },
  { id: "nova16", d: "hard", p: true, q: "Name a player from Villanova's 2016 national championship team",
    t: [
      ["Kris Jenkins", "Ryan Arcidiacono", "Josh Hart"],
      ["Jalen Brunson", "Mikal Bridges"],
      ["Daniel Ochefu", "Phil Booth"],
      [],
      ["Darryl Reynolds"]
    ] },
  { id: "uva19", d: "hard", p: true, q: "Name a player from Virginia's 2019 national championship team",
    t: [
      ["Kyle Guy", "De'Andre Hunter|DeAndre Hunter", "Ty Jerome"],
      ["Mamadi Diakite"],
      ["Braxton Key", "Kihei Clark"],
      ["Jay Huff"],
      ["Jack Salt"]
    ] },
  { id: "baylor21", d: "hard", p: true, q: "Name a player from Baylor's 2021 national championship team",
    t: [
      ["Jared Butler", "Davion Mitchell"],
      ["MaCio Teague", "Mark Vital"],
      ["Adam Flagler", "Matthew Mayer"],
      ["Jonathan Tchamwa Tchatchoua|Tchamwa Tchatchoua"],
      ["Flo Thamba"]
    ] },
  { id: "mich89", d: "hard", p: true, q: "Name a player from Michigan's 1989 national championship team",
    t: [
      ["Glen Rice"],
      ["Rumeal Robinson"],
      ["Terry Mills", "Loy Vaught"],
      ["Sean Higgins"],
      ["Mark Hughes"]
    ] },
  { id: "unlv90", d: "hard", p: true, q: "Name a player from UNLV's 1990 national championship team",
    t: [
      ["Larry Johnson|LJ"],
      ["Stacey Augmon", "Greg Anthony"],
      ["Anderson Hunt"],
      ["Moses Scurry"],
      ["David Butler"]
    ] },
  { id: "ark94", d: "hard", p: true, q: "Name a player from Arkansas's 1994 national championship team",
    t: [
      ["Corliss Williamson|Big Nasty"],
      ["Scotty Thurman"],
      ["Corey Beck", "Clint McDaniel"],
      ["Alex Dillard"],
      ["Dwight Stewart"]
    ] },
  { id: "ucla95", d: "hard", p: true, q: "Name a player from UCLA's 1995 national championship team",
    t: [
      ["Ed O'Bannon"],
      ["Tyus Edney", "Toby Bailey"],
      ["Charles O'Bannon", "George Zidek"],
      ["Cameron Dollar"],
      ["J.R. Henderson|JR Henderson"]
    ] },
  { id: "cuse03", d: "hard", p: true, q: "Name a player from Syracuse's 2003 national championship team",
    t: [
      ["Carmelo Anthony|Melo"],
      ["Gerry McNamara|G-Mac", "Hakim Warrick"],
      ["Kueth Duany", "Craig Forth", "Billy Edelin"],
      ["Josh Pace"],
      ["Jeremy McNeil"]
    ] },
  { id: "md02", d: "hard", p: true, q: "Name a player from Maryland's 2002 national championship team",
    t: [
      ["Juan Dixon"],
      ["Steve Blake", "Lonny Baxter", "Chris Wilcox"],
      ["Byron Mouton", "Drew Nicholas"],
      ["Tahj Holden"],
      ["Ryan Randle"]
    ] },
  { id: "zona97", d: "hard", p: true, q: "Name a player from Arizona's 1997 national championship team",
    t: [
      ["Mike Bibby", "Jason Terry|JET"],
      ["Miles Simon", "Michael Dickerson"],
      ["A.J. Bramlett|AJ Bramlett"],
      [],
      ["Bennett Davison"]
    ] },
  { id: "ncst83", d: "hard", p: true, q: "Name a player from NC State's 1983 'Cardiac Pack' title team",
    t: [
      ["Lorenzo Charles", "Dereck Whittenburg"],
      ["Thurl Bailey", "Sidney Lowe"],
      ["Cozell McQueen"],
      [],
      ["Terry Gannon"]
    ] },
  { id: "iu87", d: "hard", p: true, q: "Name a player from Indiana's 1987 national championship team",
    t: [
      ["Steve Alford", "Keith Smart"],
      ["Dean Garrett", "Daryl Thomas"],
      [], [],
      ["Rick Calloway"]
    ] },
  { id: "gmu06", d: "hard", p: true, q: "Name a player or coach from George Mason's 2006 Final Four team",
    t: [
      ["Jim Larranaga|Jim Larrañaga"],
      ["Jai Lewis", "Lamar Butler"],
      ["Tony Skinn", "Folarin Campbell", "Will Thomas"],
      ["Sammy Hernandez"],
      ["Gabe Norwood"]
    ] },
  { id: "prince23", d: "hard", p: true, q: "Name a player or coach from Princeton's 2023 Sweet 16 team",
    t: [
      ["Mitch Henderson"],
      ["Tosan Evbuomwan", "Ryan Langborg"],
      ["Blake Peters", "Matt Allocco", "Caden Pierce"],
      ["Xaivian Lee"],
      ["Keeshawn Kellman"]
    ] }
);
