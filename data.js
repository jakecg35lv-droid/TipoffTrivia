// Tipoff Trivia — prompt + answer database
// Each prompt: id, d (easy|medium|hard), q (question), p (true = people, enables last-name matching),
// ok (true = meets QUESTION_RULES.md), g (topic group: prompts sharing a group count as the same question),
// t: five tiers [Layup 10, Mid-Range 30, Three Ball 60, Deep Cut 85, Half Court 100].
// RULE: Half Court (last tier) holds exactly ONE super-niche answer per prompt.
// Each answer: "Primary|alias|alias". See QUESTION_RULES.md before adding prompts.

window.PROMPTS = [
  { id: "champs", d: "easy", ok: true, g: "title-schools", q: "Name a school that has won the NCAA men's national championship",
    t: [
      ["Duke", "Kentucky|UK", "North Carolina|UNC|Carolina|Tar Heels", "UCLA|Bruins", "Kansas|KU|Jayhawks"],
      ["UConn|Connecticut|Huskies", "Indiana|IU|Hoosiers", "Villanova|Nova", "Michigan State|MSU|Sparty", "Florida|UF|Gators", "Louisville", "Syracuse|Cuse", "Arizona", "Virginia|UVA", "Baylor", "Michigan"],
      ["Maryland", "Georgetown", "NC State|North Carolina State", "UNLV", "Ohio State|OSU", "Arkansas", "Marquette", "Cincinnati", "Wisconsin"],
      ["Oklahoma State|Oklahoma A&M", "Loyola Chicago|Loyola|Loyola-Chicago", "UTEP|Texas Western", "Oregon", "Stanford", "Utah", "San Francisco|USF", "Holy Cross", "La Salle", "Wyoming", "California|Cal"],
      ["CCNY|City College of New York|City College"]
    ] },
  { id: "bigten", d: "easy", ok: true, g: "conf-b1g", q: "Name a school that has been a member of the Big Ten in men's basketball",
    t: [
      ["Indiana|IU", "Michigan", "Michigan State|MSU", "Purdue", "Ohio State|OSU", "UCLA"],
      ["Illinois", "Iowa", "Wisconsin", "Maryland", "Oregon", "USC|Southern California"],
      ["Minnesota", "Nebraska", "Washington|UW", "Northwestern"],
      ["Penn State|PSU", "Rutgers"],
      ["Chicago|University of Chicago|UChicago"]
    ] },
  { id: "sec", d: "easy", ok: true, g: "conf-sec", q: "Name a school that has been a member of the SEC in men's basketball",
    t: [
      ["Kentucky|UK", "Florida|UF", "Tennessee|Vols", "Alabama|Bama", "Auburn"],
      ["Arkansas", "LSU", "Texas|UT", "Georgia|UGA", "Missouri|Mizzou", "Texas A&M|TAMU|A&M"],
      ["Ole Miss|Mississippi", "Oklahoma|OU", "Mississippi State|Miss State", "South Carolina"],
      ["Vanderbilt|Vandy", "Georgia Tech", "Tulane"],
      ["Sewanee|University of the South"]
    ] },
  { id: "acc", d: "easy", ok: true, g: "conf-acc", q: "Name a school that has been a member of the ACC in men's basketball",
    t: [
      ["Duke", "North Carolina|UNC", "Virginia|UVA", "Syracuse", "Louisville"],
      ["NC State|North Carolina State", "Wake Forest", "Miami", "Notre Dame", "Florida State|FSU", "Clemson", "Maryland"],
      ["Virginia Tech", "Pittsburgh|Pitt", "Georgia Tech", "Boston College|BC"],
      ["Stanford", "California|Cal", "SMU|Southern Methodist"],
      ["South Carolina"]
    ] },
  { id: "big12", d: "easy", ok: true, g: "conf-b12", q: "Name a school that has been a member of the Big 12 in men's basketball",
    t: [
      ["Kansas|KU", "Houston", "Baylor", "Arizona", "Texas|UT", "Oklahoma|OU"],
      ["Iowa State|ISU", "Texas Tech", "West Virginia|WVU", "BYU|Brigham Young", "Kansas State|K-State", "Cincinnati", "Missouri|Mizzou", "Texas A&M|TAMU|A&M"],
      ["Oklahoma State", "Colorado", "Utah", "Arizona State|ASU", "Nebraska"],
      ["TCU|Texas Christian"],
      ["UCF|Central Florida"]
    ] },
  { id: "bigeast", d: "easy", ok: true, g: "conf-be", q: "Name a school that has been a member of the Big East in men's basketball",
    t: [
      ["UConn|Connecticut", "Villanova|Nova", "Georgetown", "Syracuse"],
      ["Marquette", "Creighton", "St. John's|St Johns|Saint Johns", "Xavier", "Butler", "Providence", "Louisville", "Pittsburgh|Pitt", "Notre Dame", "West Virginia|WVU", "Seton Hall"],
      ["Cincinnati", "Miami", "Boston College|BC", "Rutgers"],
      ["DePaul", "Virginia Tech"],
      ["South Florida|USF"]
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
  { id: "wooden", d: "medium", p: true, ok: true, g: "npoy", q: "Name a winner of the men's Wooden Award",
    t: [
      ["Larry Bird", "Michael Jordan", "Kevin Durant", "Zion Williamson|Zion", "Cooper Flagg", "Tim Duncan", "Anthony Davis", "Blake Griffin", "Cameron Boozer"],
      ["David Robinson", "Christian Laettner", "Shane Battier", "JJ Redick|J.J. Redick", "Tyler Hansbrough", "Jimmer Fredette|Jimmer", "Zach Edey", "Jalen Brunson", "Doug McDermott", "Buddy Hield", "Danny Manning", "Ralph Sampson", "Larry Johnson", "Kenyon Martin"],
      ["Chris Mullin", "Sean Elliott", "Elton Brand", "Antawn Jamison", "Marcus Camby", "Glenn Robinson|Big Dog", "Evan Turner", "Frank Kaminsky", "Trey Burke", "Andrew Bogut", "Luka Garza", "Ed O'Bannon", "Jason Williams|Jay Williams"],
      ["Danny Ainge", "Darrell Griffith", "Lionel Simmons", "Calbert Cheaney", "TJ Ford|T.J. Ford", "Jameer Nelson", "Frank Mason III|Frank Mason", "Obi Toppin", "Oscar Tshiebwe", "Walter Berry", "Marques Johnson"],
      ["Phil Ford"]
    ] },
  { id: "titlecoach", d: "medium", p: true, ok: true, g: "title-coaches", q: "Name a head coach who won an NCAA men's national title",
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
  { id: "mop", d: "medium", p: true, ok: true, g: "mop", q: "Name a men's Final Four Most Outstanding Player",
    t: [
      ["Carmelo Anthony", "Anthony Davis", "Kemba Walker", "Magic Johnson", "Christian Laettner", "Lew Alcindor|Kareem Abdul-Jabbar|Kareem", "Bill Walton", "Patrick Ewing", "Hakeem Olajuwon|Akeem Olajuwon", "Isiah Thomas", "Jerry West", "Wilt Chamberlain"],
      ["Shane Battier", "Joakim Noah", "Shabazz Napier", "Mario Chalmers", "Tyus Jones", "Donte DiVincenzo", "Kyle Guy", "Juan Dixon", "Emeka Okafor", "Sean May", "Walter Clayton Jr.|Walter Clayton", "James Worthy", "Bill Russell", "Bill Bradley", "David Thompson", "Danny Manning", "Bobby Hurley", "Ed O'Bannon", "Elgin Baylor", "Jerry Lucas", "Glen Rice", "Richard Hamilton|Rip Hamilton", "Tony Delk", "Darrell Griffith", "Bob Kurland", "Clyde Lovellette", "Tom Gola"],
      ["Corey Brewer", "Kyle Singler", "Luke Hancock", "Ryan Arcidiacono", "Joel Berry II|Joel Berry", "Ochai Agbaji", "Adama Sanogo", "Tristen Newton", "Mateen Cleaves", "Elliot Cadeau", "Wayne Ellington", "Jared Butler", "Keith Smart", "Pervis Ellison", "Corliss Williamson", "Miles Simon", "Jeff Sheppard", "Sidney Wicks", "Walt Hazzard", "Kent Benson", "Jack Givens", "Ed Pinckney", "Alex Groza", "Art Heyman", "Donald Williams", "Anderson Hunt", "Butch Lee", "Richard Washington"],
      ["Jimmy Hull", "Marv Huffman", "John Kotz", "Howie Dallmar", "Ken Sailors", "George Kaftan", "Irwin Dambrot", "Bill Spivey", "B.H. Born|BH Born", "Hal Lear", "Paul Hogue", "Jerry Chambers", "Howard Porter"],
      ["Arnie Ferrin"]
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
  { id: "arenas", d: "medium", ok: true, g: "arenas", q: "Name the home arena of a power-conference or Big East men's basketball program",
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
  { id: "uk2010", d: "hard", p: true, q: "Name a Kentucky player picked in the 1st round of the 2010 NBA Draft",
    t: [
      ["John Wall", "DeMarcus Cousins|Boogie Cousins|Boogie"],
      ["Eric Bledsoe"],
      [],
      ["Patrick Patterson"],
      ["Daniel Orton"]
    ] },
  { id: "gators25", d: "hard", p: true, q: "Name a player from Florida's 2025 national championship team",
    t: [
      ["Walter Clayton Jr.|Walter Clayton"],
      ["Alijah Martin", "Will Richard", "Alex Condon"],
      ["Thomas Haugh", "Rueben Chinyelu", "Denzel Aberdeen"],
      ["Micah Handlogten"],
      ["Urban Klavzar"]
    ] },
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
      [],
      [],
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
      [],
      [],
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
      [],
      [],
      ["Army|West Point"]
    ] },
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
      [],
      [],
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
      [],
      [],
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
      [],
      [],
      ["LSU"]
    ] },
  { id: "ivywins", d: "medium", q: "Name an Ivy League school that won an NCAA tournament game from 2010 to 2025",
    t: [
      ["Princeton"],
      ["Yale", "Harvard"],
      [],
      [],
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
  { id: "ku22", d: "hard", p: true, q: "Name a player from Kansas's 2022 national championship team",
    t: [
      ["Ochai Agbaji"],
      ["Christian Braun", "Jalen Wilson", "David McCormack"],
      ["Remy Martin", "Dajuan Harris Jr.|Dajuan Harris"],
      ["Mitch Lightfoot", "KJ Adams|K.J. Adams", "Joseph Yesufu"],
      ["Jalen Coleman-Lands|Coleman-Lands"]
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
  { id: "prince23", d: "hard", p: true, q: "Name a player or coach from Princeton's 2023 Sweet 16 team",
    t: [
      ["Mitch Henderson"],
      ["Tosan Evbuomwan", "Ryan Langborg"],
      ["Blake Peters", "Matt Allocco", "Caden Pierce"],
      ["Xaivian Lee"],
      ["Keeshawn Kellman"]
    ] },
  { id: "wvu10", d: "hard", p: true, q: "Name a player or coach from West Virginia's 2010 Final Four team",
    t: [
      ["Da'Sean Butler|Da Sean Butler|Dasean Butler", "Bob Huggins"],
      ["Devin Ebanks", "Kevin Jones", "Joe Mazzulla", "Truck Bryant|Darryl Bryant"],
      ["Wellington Smith", "John Flowers", "Deniz Kilicli"],
      ["Cam Thoroughman", "Dalton Pepper"],
      ["Casey Mitchell"]
    ] },
  { id: "msu10", d: "hard", p: true, q: "Name a player or coach from Michigan State's 2010 Final Four team",
    t: [
      ["Tom Izzo", "Draymond Green", "Kalin Lucas"],
      ["Durrell Summers", "Raymar Morgan", "Korie Lucious"],
      ["Delvon Roe", "Chris Allen", "Derrick Nix"],
      ["Austin Thornton", "Garrick Sherman"],
      ["Mike Kebler"]
    ] },
  { id: "uk11", d: "hard", p: true, q: "Name a player from Kentucky's 2011 Final Four team",
    t: [
      ["Brandon Knight", "Terrence Jones"],
      ["Doron Lamb", "DeAndre Liggins", "Darius Miller", "Josh Harrellson"],
      ["Eloy Vargas", "Stacey Poole"],
      ["Jon Hood", "Jarrod Polson"],
      ["Twany Beckham"]
    ] },
  { id: "butler11", d: "hard", p: true, q: "Name a player or coach from Butler's 2011 national runner-up team",
    t: [
      ["Brad Stevens", "Shelvin Mack", "Matt Howard"],
      ["Ronald Nored", "Andrew Smith", "Shawn Vanzant"],
      ["Khyle Marshall", "Chase Stigall", "Zach Hahn"],
      ["Garrett Butcher", "Chrishawn Hopkins"],
      ["Emerson Kampen"]
    ] },
  { id: "vcu11", d: "hard", p: true, q: "Name a player or coach from VCU's 2011 First Four-to-Final Four team",
    t: [
      ["Shaka Smart"],
      ["Jamie Skeen", "Joey Rodriguez", "Bradford Burgess", "Brandon Rozzell"],
      ["Ed Nixon", "Juvonte Reddic", "Darius Theus"],
      ["Rob Brandenberg", "Toby Veal"],
      ["D.J. Haley|DJ Haley"]
    ] },
  { id: "osu12", d: "hard", p: true, q: "Name a player from Ohio State's 2012 Final Four team",
    t: [
      ["Jared Sullinger", "Aaron Craft"],
      ["Deshaun Thomas", "William Buford", "Lenzelle Smith Jr.|Lenzelle Smith"],
      ["Sam Thompson", "Evan Ravenel", "Amir Williams", "Shannon Scott"],
      ["LaQuinton Ross", "Jordan Sibert"],
      ["J.D. Weatherspoon|JD Weatherspoon"]
    ] },
  { id: "ku12", d: "hard", p: true, q: "Name a player or coach from Kansas's 2012 national runner-up team",
    t: [
      ["Thomas Robinson", "Tyshawn Taylor", "Bill Self"],
      ["Jeff Withey", "Elijah Johnson", "Travis Releford"],
      ["Conner Teahan", "Kevin Young"],
      ["Naadir Tharpe", "Justin Wesley"],
      ["Jordan Juenemann"]
    ] },
  { id: "lou12", d: "hard", p: true, q: "Name a player or coach from Louisville's 2012 Final Four team",
    t: [
      ["Rick Pitino", "Peyton Siva", "Russ Smith", "Gorgui Dieng"],
      ["Chane Behanan", "Kyle Kuric", "Chris Smith"],
      ["Wayne Blackshear", "Elisha Justice"],
      [],
      ["Stephan Van Treese"]
    ] },
  { id: "mich13", d: "medium", p: true, q: "Name a player from Michigan's 2013 national runner-up team",
    t: [
      ["Trey Burke", "Tim Hardaway Jr.|Tim Hardaway"],
      ["Mitch McGary", "Glenn Robinson III|Glenn Robinson", "Nik Stauskas"],
      ["Spike Albrecht", "Jordan Morgan", "Caris LeVert"],
      ["Jon Horford", "Max Bielfeldt"],
      ["Josh Bartelstein"]
    ] },
  { id: "wichita13", d: "hard", p: true, q: "Name a player or coach from Wichita State's 2013 Final Four team",
    t: [
      ["Gregg Marshall", "Fred VanVleet", "Cleanthony Early"],
      ["Ron Baker", "Malcolm Armstead", "Carl Hall"],
      ["Tekele Cotton", "Demetric Williams", "Ehimen Orukpe"],
      ["Chadrack Lufile", "Jake White"],
      ["Nick Wiggins"]
    ] },
  { id: "uk14", d: "medium", p: true, q: "Name a player from Kentucky's 2014 national runner-up team",
    t: [
      ["Julius Randle", "Aaron Harrison", "Andrew Harrison"],
      ["James Young", "Willie Cauley-Stein|Cauley-Stein", "Alex Poythress"],
      ["Dakari Johnson", "Marcus Lee", "Jarrod Polson"],
      ["Dominique Hawkins", "Derek Willis"],
      ["Jon Hood"]
    ] },
  { id: "uf14", d: "hard", p: true, q: "Name a player or coach from Florida's 2014 Final Four team",
    t: [
      ["Billy Donovan", "Scottie Wilbekin", "Patric Young"],
      ["Casey Prather", "Michael Frazier II|Michael Frazier", "Dorian Finney-Smith|Finney-Smith", "Will Yeguete"],
      ["Kasey Hill", "Chris Walker"],
      ["DeVon Walker"],
      ["Jacob Kurtz"]
    ] },
  { id: "uk15", d: "medium", p: true, q: "Name a player from Kentucky's 38-1 team (2014–15)",
    t: [
      ["Karl-Anthony Towns|Karl Anthony Towns|KAT", "Devin Booker", "Willie Cauley-Stein|Cauley-Stein"],
      ["Andrew Harrison", "Aaron Harrison", "Trey Lyles", "Tyler Ulis"],
      ["Dakari Johnson", "Alex Poythress", "Marcus Lee"],
      ["Dominique Hawkins"],
      ["Derek Willis"]
    ] },
  { id: "wisc15", d: "medium", p: true, q: "Name a player or coach from Wisconsin's 2015 national runner-up team",
    t: [
      ["Frank Kaminsky", "Sam Dekker", "Bo Ryan"],
      ["Nigel Hayes", "Bronson Koenig", "Josh Gasser"],
      ["Traevon Jackson", "Duje Dukan"],
      ["Zak Showalter", "Vitto Brown"],
      ["Jordan Hill"]
    ] },
  { id: "msu15", d: "hard", p: true, q: "Name a player or coach from Michigan State's 2015 Final Four team",
    t: [
      ["Tom Izzo", "Denzel Valentine", "Travis Trice"],
      ["Branden Dawson", "Matt Costello", "Lourawls Nairn|Tum Tum Nairn"],
      ["Gavin Schilling", "Marvin Clark Jr.|Marvin Clark", "Javon Bess"],
      ["Alvin Ellis III|Alvin Ellis"],
      ["Colby Wollenman"]
    ] },
  { id: "cuse16", d: "hard", p: true, q: "Name a player or coach from Syracuse's 2016 Final Four team (a 10 seed)",
    t: [
      ["Jim Boeheim", "Malachi Richardson", "Michael Gbinije"],
      ["Tyler Lydon", "Trevor Cooney", "Tyler Roberson"],
      ["Dajuan Coleman", "Frank Howard"],
      ["Mike Hopkins"],
      ["Chinonso Obokoh"]
    ] },
  { id: "ou16", d: "hard", p: true, q: "Name a player or coach from Oklahoma's 2016 Final Four team",
    t: [
      ["Buddy Hield", "Lon Kruger"],
      ["Isaiah Cousins", "Jordan Woodard", "Ryan Spangler"],
      ["Khadeem Lattin", "Christian James", "Dante Buford"],
      ["Rashard Odomes", "Akolda Manyang"],
      ["Dinjiyl Walker"]
    ] },
  { id: "ku17", d: "medium", p: true, q: "Name a player or coach from Kansas's 2016–17 team (Frank Mason's Player of the Year season)",
    t: [
      ["Frank Mason III|Frank Mason", "Josh Jackson", "Bill Self"],
      ["Devonte' Graham|Devonte Graham", "Landen Lucas", "Svi Mykhailiuk|Sviatoslav Mykhailiuk"],
      ["Lagerald Vick", "Carlton Bragg", "Udoka Azubuike"],
      ["Mitch Lightfoot", "Dwight Coleby"],
      ["Tyler Self"]
    ] },
  { id: "uk17", d: "medium", p: true, q: "Name a player from Kentucky's 2016–17 team (Fox, Monk & Bam)",
    t: [
      ["De'Aaron Fox|DeAaron Fox", "Malik Monk", "Bam Adebayo|Edrice Adebayo"],
      ["Isaiah Briscoe", "Derek Willis", "Wenyen Gabriel"],
      ["Dominique Hawkins", "Sacha Killeya-Jones", "Mychal Mulder"],
      ["Isaac Humphries", "Tai Wynyard"],
      ["Brad Calipari"]
    ] },
  { id: "gonzaga17", d: "medium", p: true, q: "Name a player or coach from Gonzaga's 2017 national runner-up team",
    t: [
      ["Mark Few", "Nigel Williams-Goss|Williams-Goss", "Przemek Karnowski"],
      ["Zach Collins", "Jordan Mathews", "Johnathan Williams", "Josh Perkins"],
      ["Killian Tillie", "Silas Melson"],
      ["Rui Hachimura", "Jeremy Jones"],
      ["Ryan Edwards"]
    ] },
  { id: "oregon17", d: "hard", p: true, q: "Name a player or coach from Oregon's 2017 Final Four team",
    t: [
      ["Dana Altman", "Dillon Brooks", "Tyler Dorsey", "Jordan Bell"],
      ["Chris Boucher", "Payton Pritchard"],
      ["Dylan Ennis", "Casey Benson"],
      ["Keith Smith", "Kavell Bigby-Williams"],
      ["Roman Sorkin"]
    ] },
  { id: "sc17", d: "hard", p: true, q: "Name a player or coach from South Carolina's 2017 Final Four team",
    t: [
      ["Frank Martin", "Sindarius Thornwell"],
      ["PJ Dozier|P.J. Dozier", "Chris Silva", "Duane Notice"],
      ["Maik Kotsar", "Rakym Felder"],
      ["Hassani Gravett", "Justin McKie"],
      ["Sedee Keita"]
    ] },
  { id: "ku18", d: "hard", p: true, q: "Name a player from Kansas's 2018 Final Four team",
    t: [
      ["Devonte' Graham|Devonte Graham", "Svi Mykhailiuk|Sviatoslav Mykhailiuk"],
      ["Malik Newman", "Udoka Azubuike", "Lagerald Vick"],
      ["Silvio De Sousa", "Marcus Garrett", "Mitch Lightfoot"],
      ["Clay Young", "Sam Cunliffe"],
      ["Chris Teahan"]
    ] },
  { id: "mich18", d: "medium", p: true, q: "Name a player from Michigan's 2018 national runner-up team",
    t: [
      ["Moritz Wagner", "Charles Matthews"],
      ["Muhammad-Ali Abdur-Rahkman|Abdur-Rahkman", "Zavier Simpson", "Duncan Robinson"],
      ["Jordan Poole", "Isaiah Livers", "Jon Teske"],
      ["Eli Brooks", "Ibi Watson"],
      ["Jaaron Simmons"]
    ] },
  { id: "uva18", d: "hard", p: true, q: "Name a player or coach from the 2017–18 Virginia team that lost to UMBC",
    t: [
      ["Tony Bennett", "Kyle Guy", "De'Andre Hunter|DeAndre Hunter"],
      ["Ty Jerome", "Devon Hall", "Isaiah Wilkins"],
      ["Mamadi Diakite", "Jack Salt", "Nigel Johnson"],
      ["Jay Huff", "Marco Anthony"],
      ["Francesco Badocchi"]
    ] },
  { id: "duke19", d: "medium", p: true, q: "Name a Duke teammate of Zion Williamson (2018–19)",
    t: [
      ["RJ Barrett|R.J. Barrett", "Cam Reddish"],
      ["Tre Jones", "Marques Bolden", "Javin DeLaurier"],
      ["Jack White", "Alex O'Connell", "Jordan Goldwire"],
      ["Joey Baker", "Antonio Vrankovic"],
      ["Mike Buckmire"]
    ] },
  { id: "ttu19", d: "hard", p: true, q: "Name a player or coach from Texas Tech's 2019 national runner-up team",
    t: [
      ["Jarrett Culver", "Chris Beard"],
      ["Matt Mooney", "Davide Moretti", "Tariq Owens"],
      ["Norense Odiase", "Brandone Francis", "Kyler Edwards"],
      ["Deshawn Corprew", "Avery Benson"],
      ["Andrei Savrasov"]
    ] },
  { id: "auburn19", d: "hard", p: true, q: "Name a player or coach from Auburn's 2019 Final Four team",
    t: [
      ["Bruce Pearl", "Bryce Brown", "Jared Harper"],
      ["Chuma Okeke", "Anfernee McLemore", "Samir Doughty"],
      ["Malik Dunbar", "Horace Spencer", "Austin Wiley"],
      ["Danjel Purifoy"],
      ["J'Von McCormick|JVon McCormick"]
    ] },
  { id: "msu19", d: "hard", p: true, q: "Name a player or coach from Michigan State's 2019 Final Four team",
    t: [
      ["Tom Izzo", "Cassius Winston"],
      ["Nick Ward", "Xavier Tillman", "Matt McQuaid", "Kenny Goins"],
      ["Aaron Henry", "Gabe Brown", "Joshua Langford"],
      ["Kyle Ahrens", "Foster Loyer"],
      ["Thomas Kithier"]
    ] },
  { id: "tenn19", d: "hard", p: true, q: "Name a player or coach from Tennessee's 2018–19 team (Grant Williams era)",
    t: [
      ["Grant Williams", "Admiral Schofield", "Rick Barnes"],
      ["Jordan Bone", "Lamonte Turner", "Jordan Bowden", "Kyle Alexander"],
      ["Yves Pons", "John Fulkerson"],
      ["Jalen Johnson"],
      ["Derrick Walker"]
    ] },
  { id: "zags21", d: "medium", p: true, q: "Name a player or coach from Gonzaga's 2021 team (31–0 before the title game)",
    t: [
      ["Jalen Suggs", "Drew Timme", "Corey Kispert", "Mark Few"],
      ["Joel Ayayi", "Andrew Nembhard"],
      ["Anton Watson", "Aaron Cook"],
      ["Julian Strawther", "Dominick Harris"],
      ["Oumar Ballo"]
    ] },
  { id: "hou21", d: "hard", p: true, q: "Name a player or coach from Houston's 2021 Final Four team",
    t: [
      ["Kelvin Sampson", "Quentin Grimes", "Marcus Sasser"],
      ["DeJon Jarreau", "Justin Gorham", "Fabian White Jr.|Fabian White"],
      ["Tramon Mark", "Reggie Chaney", "Brison Gresham"],
      ["J'Wan Roberts|JWan Roberts", "Jamal Shead"],
      ["Cameron Tyson"]
    ] },
  { id: "ucla21", d: "hard", p: true, q: "Name a player or coach from UCLA's 2021 First Four-to-Final Four team",
    t: [
      ["Johnny Juzang", "Mick Cronin", "Jaime Jaquez Jr.|Jaime Jaquez"],
      ["Tyger Campbell", "Jules Bernard", "Cody Riley"],
      ["Jaylen Clark", "Kenneth Nwuba", "Mac Etienne"],
      ["David Singleton"],
      ["Jake Kyman"]
    ] },
  { id: "iowa21", d: "hard", p: true, q: "Name a player or coach from Iowa's 2020–21 team (Luka Garza's Player of the Year season)",
    t: [
      ["Luka Garza", "Fran McCaffery"],
      ["Joe Wieskamp", "Jordan Bohannon", "CJ Fredrick|C.J. Fredrick", "Keegan Murray"],
      ["Jack Nunge", "Connor McCaffery", "Joe Toussaint", "Patrick McCaffery"],
      ["Ahron Ulis", "Tony Perkins"],
      ["Josh Ogundele"]
    ] },
  { id: "oru21", d: "hard", p: true, q: "Name a player or coach from Oral Roberts' 2021 Sweet 16 team (a 15 seed)",
    t: [
      ["Max Abmas"],
      ["Kevin Obanor", "Paul Mills"],
      ["DeShang Weaver", "Elijah Lufile"],
      ["R.J. Glasper|RJ Glasper", "Carlos Jurgens"],
      ["Francis Lacis"]
    ] },
  { id: "duke22", d: "medium", p: true, q: "Name a player or coach from Duke's 2022 Final Four team (Coach K's last)",
    t: [
      ["Paolo Banchero", "Mike Krzyzewski|Coach K"],
      ["Mark Williams", "AJ Griffin|A.J. Griffin", "Wendell Moore Jr.|Wendell Moore", "Jeremy Roach", "Trevor Keels"],
      ["Theo John", "Joey Baker"],
      ["Bates Jones", "Jaylen Blakes"],
      ["Keenan Worthington"]
    ] },
  { id: "unc22", d: "medium", p: true, q: "Name a player or coach from North Carolina's 2022 national runner-up team",
    t: [
      ["Armando Bacot", "Caleb Love", "Hubert Davis"],
      ["RJ Davis|R.J. Davis", "Brady Manek", "Leaky Black"],
      ["Puff Johnson", "Dontrez Styles"],
      ["Kerwin Walton", "Justin McKoy"],
      ["D'Marco Dunn|DMarco Dunn"]
    ] },
  { id: "nova22", d: "hard", p: true, q: "Name a player or coach from Villanova's 2022 Final Four team",
    t: [
      ["Collin Gillespie", "Jay Wright"],
      ["Justin Moore", "Jermaine Samuels", "Eric Dixon", "Caleb Daniels"],
      ["Brandon Slater", "Jordan Longino"],
      ["Chris Arcidiacono", "Bryan Antoine"],
      ["Trey Patterson"]
    ] },
  { id: "sdsu23", d: "hard", p: true, q: "Name a player or coach from San Diego State's 2023 national runner-up team",
    t: [
      ["Lamont Butler", "Brian Dutcher", "Matt Bradley"],
      ["Darrion Trammell", "Jaedon LeDee", "Nathan Mensah", "Keshad Johnson"],
      ["Adam Seiko", "Micah Parrish", "Aguek Arop"],
      ["Elijah Saunders"],
      ["Jay Pal"]
    ] },
  { id: "fau23", d: "hard", p: true, q: "Name a player or coach from Florida Atlantic's 2023 Final Four team",
    t: [
      ["Dusty May", "Johnell Davis"],
      ["Alijah Martin", "Vladislav Goldin", "Michael Forrest"],
      ["Nick Boyd", "Bryan Greenlee", "Giancarlo Rosado"],
      ["Jalen Gaffney"],
      ["Brenen Lorient"]
    ] },
  { id: "miami23", d: "hard", p: true, q: "Name a player or coach from Miami's 2023 Final Four team",
    t: [
      ["Jim Larranaga|Jim Larrañaga", "Isaiah Wong", "Nijel Pack"],
      ["Jordan Miller", "Norchad Omier", "Wooga Poplar"],
      ["Bensley Joseph", "Anthony Walker"],
      ["A.J. Casey|AJ Casey"],
      ["Harlond Beverly"]
    ] },
  { id: "fdu23", d: "hard", p: true, q: "Name a player or coach from Fairleigh Dickinson's 2023 team that beat No. 1 Purdue",
    t: [
      ["Tobin Anderson"],
      ["Grant Singleton", "Demetre Roberts", "Sean Moore"],
      ["Ansley Almonor", "Joe Munden Jr.|Joe Munden"],
      ["Heru Bligen"],
      ["Cameron Tweedy"]
    ] },
  { id: "ncst24", d: "medium", p: true, q: "Name a player or coach from NC State's 2024 Final Four team (an 11 seed)",
    t: [
      ["DJ Burns|D.J. Burns", "Kevin Keatts", "DJ Horne|D.J. Horne"],
      ["Michael O'Connell", "Mohamed Diarra", "Jayden Taylor"],
      ["Casey Morsell", "Ben Middlebrooks"],
      ["Dennis Parker Jr.|Dennis Parker", "MJ Rice|M.J. Rice"],
      ["Breon Pass"]
    ] },
  { id: "purdue24", d: "medium", p: true, q: "Name a player or coach from Purdue's 2024 national runner-up team",
    t: [
      ["Zach Edey", "Braden Smith", "Matt Painter"],
      ["Fletcher Loyer", "Lance Jones", "Trey Kaufman-Renn|Kaufman-Renn"],
      ["Mason Gillis", "Camden Heide", "Caleb Furst"],
      ["Myles Colvin", "Ethan Morton"],
      ["Will Berg"]
    ] },
  { id: "bama24", d: "hard", p: true, q: "Name a player or coach from Alabama's 2024 Final Four team",
    t: [
      ["Mark Sears", "Nate Oats", "Grant Nelson"],
      ["Rylan Griffen", "Aaron Estrada", "Jarin Stevenson"],
      ["Latrell Wrightsell Jr.|Latrell Wrightsell", "Nick Pringle", "Mohamed Wague"],
      ["Davin Cosby", "Sam Walters"],
      ["Mouhamed Dioubate"]
    ] },
  { id: "duke25", d: "medium", p: true, q: "Name a player or coach from Duke's 2025 Final Four team",
    t: [
      ["Cooper Flagg", "Jon Scheyer", "Kon Knueppel"],
      ["Khaman Maluach", "Tyrese Proctor", "Sion James"],
      ["Maliq Brown", "Isaiah Evans", "Mason Gillis"],
      ["Caleb Foster", "Patrick Ngongba II|Patrick Ngongba"],
      ["Darren Harris"]
    ] },
  { id: "hou25", d: "hard", p: true, q: "Name a player or coach from Houston's 2025 national runner-up team",
    t: [
      ["Kelvin Sampson", "LJ Cryer|L.J. Cryer", "J'Wan Roberts|JWan Roberts"],
      ["Emanuel Sharp", "Milos Uzan", "Joseph Tugler"],
      ["Ja'Vier Francis|JaVier Francis"],
      ["Mylik Wilson", "Terrance Arceneaux"],
      ["Mercy Miller"]
    ] },
  { id: "auburn25", d: "hard", p: true, q: "Name a player or coach from Auburn's 2025 Final Four team",
    t: [
      ["Johni Broome", "Bruce Pearl"],
      ["Chad Baker-Mazara|Baker-Mazara", "Denver Jones", "Tahaad Pettiford", "Miles Kelly"],
      ["Dylan Cardwell", "Chaney Johnson"],
      ["Jahki Howard"],
      ["Ja'Heim Hudson|JaHeim Hudson"]
    ] },
  { id: "ukoad", d: "medium", p: true, q: "Name a Kentucky freshman taken in the 1st round of the NBA Draft under Calipari (2010–2024)",
    t: [
      ["Anthony Davis", "John Wall", "Karl-Anthony Towns|Karl Anthony Towns|KAT", "Devin Booker", "De'Aaron Fox|DeAaron Fox"],
      ["Jamal Murray", "Bam Adebayo", "Shai Gilgeous-Alexander|Gilgeous-Alexander|SGA", "Tyrese Maxey", "DeMarcus Cousins", "Julius Randle", "Brandon Knight", "Reed Sheppard"],
      ["Kevin Knox", "Malik Monk", "Michael Kidd-Gilchrist|Kidd-Gilchrist|MKG", "Nerlens Noel", "Tyler Herro", "Trey Lyles", "Rob Dillingham", "Cason Wallace", "Keldon Johnson", "Skal Labissiere", "James Young"],
      ["Eric Bledsoe", "Marquis Teague", "Archie Goodwin", "TyTy Washington"],
      ["Daniel Orton"]
    ] },
  { id: "dukeoad", d: "medium", p: true, q: "Name a Duke freshman taken in the 1st round of the NBA Draft (2011–2025)",
    t: [
      ["Zion Williamson", "Kyrie Irving", "Jayson Tatum", "Paolo Banchero", "Cooper Flagg"],
      ["RJ Barrett|R.J. Barrett", "Brandon Ingram", "Jabari Parker", "Marvin Bagley III|Marvin Bagley", "Wendell Carter Jr.|Wendell Carter", "Jahlil Okafor", "Kon Knueppel"],
      ["Cam Reddish", "Justise Winslow", "Tyus Jones", "Dereck Lively II|Dereck Lively", "Jared McCain", "Khaman Maluach"],
      ["Austin Rivers", "Harry Giles", "Jalen Johnson", "AJ Griffin|A.J. Griffin"],
      ["Dariq Whitehead"]
    ] },
  { id: "no2pick", d: "medium", p: true, q: "Name a college player taken #2 overall in the NBA Draft (2010–2025)",
    t: [
      ["Ja Morant", "Lonzo Ball", "Brandon Ingram", "Chet Holmgren"],
      ["Marvin Bagley III|Marvin Bagley", "Jabari Parker", "Victor Oladipo", "D'Angelo Russell|DAngelo Russell", "Brandon Miller", "Dylan Harper"],
      ["Michael Kidd-Gilchrist|Kidd-Gilchrist|MKG", "James Wiseman"],
      ["Evan Turner"],
      ["Derrick Williams"]
    ] },
  { id: "wooden10s", d: "medium", p: true, q: "Name a Wooden Award winner from the 2010s (2010–2019)",
    t: [
      ["Zion Williamson", "Anthony Davis"],
      ["Jimmer Fredette", "Buddy Hield", "Jalen Brunson"],
      ["Doug McDermott", "Frank Kaminsky", "Trey Burke"],
      ["Frank Mason III|Frank Mason"],
      ["Evan Turner"]
    ] },
  { id: "naismith20s", d: "hard", p: true, q: "Name a Naismith Player of the Year from 2020 to 2025",
    t: [
      ["Cooper Flagg", "Zach Edey"],
      ["Luka Garza"],
      ["Oscar Tshiebwe"],
      [],
      ["Obi Toppin"]
    ] },
  { id: "ff10s", d: "medium", q: "Name a school that reached the men's Final Four from 2010 to 2019",
    t: [
      ["Duke", "Kentucky|UK", "North Carolina|UNC", "Kansas|KU", "Villanova|Nova"],
      ["Michigan State|MSU", "UConn|Connecticut", "Gonzaga|Zags", "Virginia|UVA", "Louisville", "Michigan", "Syracuse", "Wisconsin", "Florida|UF"],
      ["Butler", "Ohio State|OSU", "Oregon", "Oklahoma|OU", "Texas Tech", "Auburn", "Loyola Chicago|Loyola"],
      ["VCU|Virginia Commonwealth", "Wichita State", "South Carolina"],
      ["West Virginia|WVU"]
    ] },
  { id: "titleloss", d: "medium", q: "Name a team that lost the men's national title game from 2010 to 2025",
    t: [
      ["Gonzaga|Zags", "North Carolina|UNC", "Kentucky|UK"],
      ["Butler", "Michigan", "Kansas|KU", "Purdue", "Houston"],
      ["Wisconsin"],
      ["Texas Tech"],
      ["San Diego State|SDSU"]
    ] },
  { id: "statesff", d: "hard", q: "Name a school with 'State' in its name that made the men's Final Four from 2010 to 2025",
    t: [
      ["Michigan State|MSU"],
      ["Ohio State|OSU", "San Diego State|SDSU"],
      ["NC State|North Carolina State"],
      [],
      ["Wichita State"]
    ] },
  { id: "betourney", d: "hard", q: "Name a Big East tournament champion from 2010 to 2025",
    t: [
      ["Villanova|Nova", "UConn|Connecticut"],
      ["Louisville", "Marquette", "St. John's|Saint Johns|St Johns"],
      ["Seton Hall", "Providence"],
      ["Georgetown"],
      ["West Virginia|WVU"]
    ] },
  { id: "sectourney", d: "medium", q: "Name an SEC tournament champion from 2010 to 2025",
    t: [
      ["Kentucky|UK"],
      ["Alabama|Bama", "Auburn", "Florida|UF"],
      ["Tennessee|Vols"],
      ["Vanderbilt|Vandy"],
      ["Ole Miss|Mississippi"]
    ] },
  { id: "acctourney", d: "medium", q: "Name an ACC tournament champion from 2010 to 2025",
    t: [
      ["Duke"],
      ["Virginia|UVA", "North Carolina|UNC"],
      ["Notre Dame", "Miami", "Florida State|FSU"],
      ["NC State|North Carolina State", "Virginia Tech"],
      ["Georgia Tech"]
    ] },
  { id: "b1gtourney", d: "medium", q: "Name a Big Ten tournament champion from 2010 to 2025",
    t: [
      ["Michigan State|MSU", "Michigan"],
      ["Ohio State|OSU", "Wisconsin", "Purdue"],
      ["Illinois"],
      [],
      ["Iowa"]
    ] },
  { id: "b12tourney", d: "medium", q: "Name a Big 12 tournament champion from 2010 to 2025",
    t: [
      ["Kansas|KU"],
      ["Iowa State|ISU", "Texas|UT"],
      ["Houston"],
      [],
      ["Missouri|Mizzou"]
    ] },
  { id: "pac12tourney", d: "hard", q: "Name a Pac-12 tournament champion from 2012 to 2024",
    t: [
      ["Arizona", "Oregon"],
      ["UCLA"],
      ["Colorado"],
      [],
      ["Oregon State"]
    ] },
  { id: "ffcoach23", d: "hard", p: true, q: "Name a head coach from the 2023 men's Final Four",
    t: [
      ["Dan Hurley"],
      ["Jim Larranaga|Jim Larrañaga"],
      ["Dusty May"],
      [],
      ["Brian Dutcher"]
    ] },
  { id: "titlegamecoach", d: "medium", p: true, q: "Name a head coach who coached in a men's national title game from 2010 to 2025",
    t: [
      ["Mike Krzyzewski|Coach K", "John Calipari", "Roy Williams", "Jay Wright", "Bill Self", "Dan Hurley"],
      ["Mark Few", "Tony Bennett", "Brad Stevens", "Rick Pitino", "Jim Calhoun", "Scott Drew", "John Beilein", "Matt Painter"],
      ["Bo Ryan", "Kevin Ollie", "Chris Beard", "Hubert Davis", "Kelvin Sampson", "Todd Golden"],
      [],
      ["Brian Dutcher"]
    ] },
  { id: "wcc", d: "medium", q: "Name a West Coast Conference member in the 2025–26 season",
    t: [
      ["Gonzaga|Zags", "Saint Mary's|St Marys|Saint Marys"],
      ["San Francisco|USF", "Santa Clara", "Pepperdine", "Loyola Marymount|LMU"],
      ["Portland", "San Diego|USD", "Pacific"],
      ["Washington State|Wazzu", "Oregon State"],
      ["Seattle U|Seattle|Seattle University"]
    ] },
  { id: "mwc", d: "hard", q: "Name a Mountain West member in the 2025–26 season",
    t: [
      ["San Diego State|SDSU"],
      ["Boise State", "Utah State", "New Mexico", "UNLV", "Nevada"],
      ["Colorado State", "Fresno State", "Wyoming"],
      ["Air Force", "San Jose State"],
      ["Grand Canyon|GCU"]
    ] },
  { id: "a10", d: "hard", q: "Name an Atlantic 10 member in the 2025–26 season",
    t: [
      ["Dayton", "VCU|Virginia Commonwealth"],
      ["Saint Louis|SLU", "Saint Joseph's|St Josephs|Saint Josephs", "Loyola Chicago|Loyola", "Davidson"],
      ["George Mason", "Richmond", "Rhode Island|URI", "St. Bonaventure|St Bonaventure|Saint Bonaventure", "Duquesne"],
      ["George Washington|GW", "Fordham"],
      ["La Salle"]
    ] },
  { id: "patriot", d: "hard", ok: true, g: "conf-patriot", q: "Name a school that has been a member of the Patriot League in men's basketball",
    t: [
      ["Navy", "Army"],
      ["Bucknell", "Colgate", "Lehigh"],
      ["Boston University|BU", "Holy Cross", "American"],
      ["Lafayette", "Loyola Maryland|Loyola MD"],
      ["Fordham"]
    ] },
  { id: "horizon", d: "hard", q: "Name a Horizon League member in the 2025–26 season",
    t: [
      ["Wright State", "Milwaukee|UW-Milwaukee"],
      ["Oakland", "Northern Kentucky|NKU", "Green Bay|UW-Green Bay", "Cleveland State"],
      ["Youngstown State", "Detroit Mercy|Detroit", "Robert Morris"],
      ["Purdue Fort Wayne|PFW|Fort Wayne"],
      ["IU Indy|IU Indianapolis|IUPUI"]
    ] },
  { id: "eagles", d: "easy", q: "Name a Division I school nicknamed the Eagles",
    t: [
      ["Boston College|BC", "Florida Gulf Coast|FGCU"],
      ["Eastern Washington", "Eastern Michigan", "Georgia Southern", "Winthrop"],
      ["American", "Morehead State"],
      ["North Carolina Central|NC Central|NCCU"],
      ["Coppin State"]
    ] },
  { id: "bears", d: "easy", q: "Name a Division I school nicknamed the Bears",
    t: [
      ["Baylor"],
      ["Missouri State", "Mercer"],
      ["Brown", "Northern Colorado"],
      ["Central Arkansas"],
      ["Morgan State"]
    ] },
  { id: "panthers", d: "easy", q: "Name a Division I school nicknamed the Panthers",
    t: [
      ["Pittsburgh|Pitt"],
      ["Northern Iowa|UNI", "Georgia State"],
      ["Milwaukee|UW-Milwaukee", "High Point"],
      ["FIU|Florida International", "Eastern Illinois|EIU"],
      ["Prairie View A&M|Prairie View"]
    ] },
  { id: "owls", d: "medium", q: "Name a Division I school nicknamed the Owls",
    t: [
      ["Temple"],
      ["Florida Atlantic|FAU"],
      ["Rice"],
      [],
      ["Kennesaw State"]
    ] },
  { id: "pirates", d: "medium", q: "Name a Division I school nicknamed the Pirates",
    t: [
      ["Seton Hall"],
      ["East Carolina|ECU"],
      [],
      [],
      ["Hampton"]
    ] },
  { id: "spartans", d: "easy", q: "Name a Division I school nicknamed the Spartans",
    t: [
      ["Michigan State|MSU"],
      ["San Jose State"],
      ["UNC Greensboro|UNCG"],
      ["Norfolk State"],
      ["USC Upstate"]
    ] },
  { id: "knights", d: "medium", q: "Name a Division I school nicknamed the Knights",
    t: [
      ["UCF|Central Florida"],
      [],
      ["Fairleigh Dickinson|FDU"],
      [],
      ["Bellarmine"]
    ] },
  { id: "hornets", d: "hard", q: "Name a Division I school nicknamed the Hornets",
    t: [
      ["Sacramento State|Sac State"],
      [],
      ["Alabama State"],
      [],
      ["Delaware State"]
    ] },
  { id: "bobcats", d: "medium", q: "Name a Division I school nicknamed the Bobcats",
    t: [
      ["Ohio"],
      ["Montana State", "Texas State"],
      [],
      [],
      ["Quinnipiac"]
    ] },
  { id: "mountaineers", d: "medium", q: "Name a Division I school nicknamed the Mountaineers",
    t: [
      ["West Virginia|WVU"],
      ["Appalachian State|App State"],
      [],
      [],
      ["Mount St. Mary's|Mount St Marys|Mount Saint Marys"]
    ] },
  { id: "lions", d: "hard", q: "Name a Division I school nicknamed the Lions (not Nittany Lions)",
    t: [
      ["Columbia"],
      ["Loyola Marymount|LMU"],
      ["Southeastern Louisiana"],
      ["North Alabama"],
      ["East Texas A&M|Texas A&M-Commerce|Texas A&M Commerce"]
    ] },
  { id: "hawks", d: "hard", q: "Name a Division I school nicknamed the Hawks",
    t: [
      ["Saint Joseph's|St Josephs|Saint Josephs"],
      ["Monmouth"],
      [],
      [],
      ["Maryland Eastern Shore|UMES"]
    ] },
  { id: "kentucky", d: "medium", q: "Name a Division I basketball school in Kentucky",
    t: [
      ["Kentucky|UK", "Louisville"],
      ["Western Kentucky|WKU", "Murray State"],
      ["Eastern Kentucky|EKU", "Northern Kentucky|NKU"],
      ["Morehead State"],
      ["Bellarmine"]
    ] },
  { id: "tennessee", d: "hard", q: "Name a Division I basketball school in Tennessee",
    t: [
      ["Tennessee|Vols", "Memphis", "Vanderbilt|Vandy"],
      ["Belmont", "Middle Tennessee|MTSU", "East Tennessee State|ETSU", "Chattanooga|UTC"],
      ["Austin Peay", "Lipscomb"],
      ["Tennessee Tech", "Tennessee State"],
      ["UT Martin|Tennessee-Martin|Tennessee Martin"]
    ] },
  { id: "florida", d: "medium", q: "Name a Division I basketball school in Florida",
    t: [
      ["Florida|UF", "Florida State|FSU", "Miami"],
      ["UCF|Central Florida", "USF|South Florida", "Florida Atlantic|FAU", "Florida Gulf Coast|FGCU"],
      ["FIU|Florida International", "Stetson", "North Florida|UNF", "Jacksonville"],
      ["Florida A&M|FAMU"],
      ["Bethune-Cookman|Bethune Cookman"]
    ] },
  { id: "pennsylvania", d: "hard", q: "Name a Division I basketball school in Pennsylvania",
    t: [
      ["Villanova|Nova", "Pittsburgh|Pitt", "Penn State|PSU", "Temple"],
      ["Saint Joseph's|St Josephs|Saint Josephs", "La Salle", "Penn|Pennsylvania", "Drexel", "Duquesne"],
      ["Bucknell", "Lehigh", "Robert Morris"],
      ["Lafayette", "Saint Francis|St Francis|Saint Francis PA"],
      ["Mercyhurst"]
    ] },
  { id: "virginia", d: "hard", q: "Name a Division I basketball school in Virginia",
    t: [
      ["Virginia|UVA", "Virginia Tech"],
      ["VCU|Virginia Commonwealth", "George Mason", "Old Dominion|ODU", "Richmond", "James Madison|JMU"],
      ["William & Mary|William and Mary", "Liberty", "Hampton", "Norfolk State"],
      ["Radford", "Longwood"],
      ["VMI|Virginia Military Institute"]
    ] },
  { id: "illinois", d: "hard", q: "Name a Division I basketball school in Illinois",
    t: [
      ["Illinois", "Northwestern", "Loyola Chicago|Loyola", "DePaul"],
      ["Bradley", "Illinois State", "Southern Illinois|SIU", "UIC|Illinois-Chicago|Illinois Chicago"],
      ["Northern Illinois|NIU", "Western Illinois", "Eastern Illinois"],
      ["SIU Edwardsville|SIUE"],
      ["Chicago State"]
    ] },
  { id: "michigan", d: "medium", q: "Name a Division I basketball school in Michigan",
    t: [
      ["Michigan", "Michigan State|MSU"],
      ["Oakland"],
      ["Western Michigan|WMU", "Central Michigan|CMU", "Eastern Michigan|EMU"],
      [],
      ["Detroit Mercy|Detroit"]
    ] },
  { id: "louisiana", d: "hard", q: "Name a Division I basketball school in Louisiana",
    t: [
      ["LSU"],
      ["Tulane"],
      ["Louisiana|Louisiana-Lafayette|UL Lafayette|Ragin Cajuns", "Louisiana Tech", "McNeese|McNeese State", "Louisiana-Monroe|ULM|Louisiana Monroe"],
      ["Northwestern State", "Southeastern Louisiana", "Grambling|Grambling State", "Southern|Southern University", "New Orleans|UNO"],
      ["Nicholls|Nicholls State"]
    ] },
  { id: "dc", d: "medium", q: "Name a Division I basketball school in Washington, D.C.",
    t: [
      ["Georgetown"],
      ["George Washington|GW"],
      [],
      ["Howard"],
      ["American"]
    ] },
  { id: "newjersey", d: "hard", q: "Name a Division I basketball school in New Jersey",
    t: [
      ["Seton Hall", "Princeton", "Rutgers"],
      ["Saint Peter's|St Peters|Saint Peters"],
      ["Fairleigh Dickinson|FDU", "Monmouth", "Rider"],
      [],
      ["NJIT|New Jersey Institute of Technology"]
    ] },
  { id: "utah", d: "medium", q: "Name a Division I basketball school in Utah",
    t: [
      ["Utah", "BYU|Brigham Young"],
      ["Utah State", "Weber State"],
      ["Southern Utah"],
      ["Utah Valley"],
      ["Utah Tech|Dixie State"]
    ] },
  { id: "missouri", d: "medium", q: "Name a Division I basketball school in Missouri",
    t: [
      ["Missouri|Mizzou"],
      ["Saint Louis|SLU", "Missouri State"],
      ["Southeast Missouri|SEMO|Southeast Missouri State"],
      ["Kansas City|UMKC"],
      ["Lindenwood"]
    ] },
  { id: "alabama", d: "hard", q: "Name a Division I basketball school in Alabama",
    t: [
      ["Alabama|Bama", "Auburn"],
      ["UAB|Alabama-Birmingham", "South Alabama"],
      ["Samford", "Troy", "Jacksonville State"],
      ["North Alabama", "Alabama State"],
      ["Alabama A&M"]
    ] },
  { id: "southcarolina", d: "hard", q: "Name a Division I basketball school in South Carolina",
    t: [
      ["South Carolina", "Clemson"],
      ["Furman", "Wofford", "College of Charleston|Charleston"],
      ["Winthrop", "The Citadel|Citadel", "Coastal Carolina"],
      ["Presbyterian", "USC Upstate", "Charleston Southern"],
      ["South Carolina State|SC State"]
    ] },
  { id: "massachusetts", d: "hard", q: "Name a Division I basketball school in Massachusetts",
    t: [
      ["UMass|Massachusetts", "Boston College|BC", "Harvard"],
      ["Holy Cross", "Northeastern"],
      ["Boston University|BU"],
      ["Merrimack", "UMass Lowell"],
      ["Stonehill"]
    ] },
  { id: "connecticut", d: "medium", q: "Name a Division I basketball school in Connecticut",
    t: [
      ["UConn|Connecticut", "Yale"],
      ["Quinnipiac", "Fairfield"],
      ["Sacred Heart"],
      [],
      ["Central Connecticut|CCSU|Central Connecticut State"]
    ] },
  { id: "wisconsin", d: "medium", q: "Name a Division I basketball school in Wisconsin",
    t: [
      ["Wisconsin", "Marquette"],
      [],
      ["Milwaukee|UW-Milwaukee"],
      [],
      ["Green Bay|UW-Green Bay"]
    ] },
  { id: "colorado", d: "medium", q: "Name a Division I basketball school in Colorado",
    t: [
      ["Colorado"],
      ["Colorado State"],
      ["Air Force"],
      ["Denver"],
      ["Northern Colorado|UNC"]
    ] },
  { id: "arizona", d: "medium", q: "Name a Division I basketball school in Arizona",
    t: [
      ["Arizona"],
      ["Arizona State|ASU"],
      ["Grand Canyon|GCU"],
      [],
      ["Northern Arizona|NAU"]
    ] },
  { id: "maryland", d: "hard", q: "Name a Division I basketball school in Maryland",
    t: [
      ["Maryland"],
      ["UMBC", "Towson", "Navy"],
      ["Loyola Maryland|Loyola MD", "Mount St. Mary's|Mount St Marys|Mount Saint Marys"],
      ["Morgan State", "Coppin State"],
      ["Maryland Eastern Shore|UMES"]
    ] },
  { id: "sampson", d: "medium", q: "Name a college Kelvin Sampson has been head coach at",
    t: [
      ["Houston"],
      ["Oklahoma|OU", "Indiana|IU"],
      ["Washington State|Wazzu"],
      [],
      ["Montana Tech"]
    ] },
  { id: "larranaga", d: "hard", q: "Name a college Jim Larrañaga was head coach at",
    t: [
      ["Miami"],
      ["George Mason"],
      ["Bowling Green"],
      [],
      ["American International|AIC"]
    ] },
  { id: "barnes", d: "medium", q: "Name a college Rick Barnes has been head coach at",
    t: [
      ["Texas|UT", "Tennessee|Vols"],
      ["Clemson"],
      ["Providence"],
      [],
      ["George Mason"]
    ] },
  { id: "kruger", d: "hard", q: "Name a college Lon Kruger was head coach at",
    t: [
      ["Oklahoma|OU", "UNLV"],
      ["Kansas State|K-State", "Florida|UF", "Illinois"],
      [],
      [],
      ["Texas-Pan American|UTPA|Pan American"]
    ] },
  { id: "tubby", d: "medium", q: "Name a college Tubby Smith was head coach at",
    t: [
      ["Kentucky|UK"],
      ["Minnesota", "Georgia|UGA", "Tulsa"],
      ["Texas Tech", "Memphis"],
      [],
      ["High Point"]
    ] },
  { id: "alford", d: "medium", q: "Name a college Steve Alford has been head coach at",
    t: [
      ["UCLA", "Iowa"],
      ["New Mexico", "Nevada"],
      ["Missouri State|Southwest Missouri State"],
      [],
      ["Manchester"]
    ] },
  { id: "beard", d: "hard", q: "Name a college Chris Beard has been head coach at",
    t: [
      ["Texas Tech", "Texas|UT"],
      ["Ole Miss|Mississippi"],
      ["Little Rock|Arkansas-Little Rock|UALR"],
      ["Angelo State"],
      ["McMurry"]
    ] },
  { id: "weber", d: "medium", q: "Name a college Bruce Weber was head coach at",
    t: [
      ["Illinois", "Kansas State|K-State"],
      [],
      [],
      [],
      ["Southern Illinois|SIU"]
    ] },
  { id: "lefty", d: "hard", q: "Name a college Lefty Driesell was head coach at",
    t: [
      ["Maryland"],
      ["Davidson"],
      ["James Madison|JMU"],
      [],
      ["Georgia State"]
    ] },
  { id: "lute", d: "medium", q: "Name a college Lute Olson was head coach at",
    t: [
      ["Arizona"],
      ["Iowa"],
      [],
      [],
      ["Long Beach State"]
    ] },
  { id: "fmartin", d: "medium", q: "Name a college Frank Martin has been head coach at",
    t: [
      ["South Carolina"],
      ["Kansas State|K-State"],
      [],
      [],
      ["UMass|Massachusetts"]
    ] },
  { id: "holtmann", d: "hard", q: "Name a college Chris Holtmann has been head coach at",
    t: [
      ["Ohio State|OSU"],
      ["Butler", "DePaul"],
      [],
      [],
      ["Gardner-Webb|Gardner Webb"]
    ] },
  { id: "moser", d: "hard", q: "Name a college Porter Moser has been head coach at",
    t: [
      ["Loyola Chicago|Loyola"],
      ["Oklahoma|OU"],
      ["Illinois State"],
      [],
      ["Little Rock|Arkansas-Little Rock|UALR"]
    ] },
  { id: "ukallstar", d: "easy", p: true, q: "Name a Kentucky player (2010 or later) who became an NBA All-Star",
    t: [
      ["Anthony Davis", "Devin Booker", "Karl-Anthony Towns|Karl Anthony Towns|KAT", "Shai Gilgeous-Alexander|Gilgeous-Alexander|SGA"],
      ["De'Aaron Fox|DeAaron Fox", "Bam Adebayo|Edrice Adebayo", "John Wall", "Tyrese Maxey"],
      ["DeMarcus Cousins", "Julius Randle"],
      [],
      ["Tyler Herro"]
    ] },
  { id: "uncnba", d: "easy", p: true, q: "Name a North Carolina player (2010 or later) who reached the NBA",
    t: [
      ["Harrison Barnes", "Coby White", "Cam Johnson"],
      ["Cole Anthony", "Justin Jackson", "Tyler Zeller", "John Henson"],
      ["Kendall Marshall", "Reggie Bullock", "Nassir Little", "Day'Ron Sharpe|DayRon Sharpe", "Theo Pinson"],
      ["James Michael McAdoo"],
      ["Brice Johnson"]
    ] },
  { id: "kunba", d: "easy", p: true, q: "Name a Kansas player (2010 or later) who reached the NBA",
    t: [
      ["Joel Embiid", "Andrew Wiggins"],
      ["Kelly Oubre Jr.|Kelly Oubre", "Christian Braun", "Marcus Morris", "Markieff Morris", "Devonte' Graham|Devonte Graham", "Ochai Agbaji"],
      ["Ben McLemore", "Thomas Robinson", "Josh Jackson", "Gradey Dick", "Svi Mykhailiuk|Sviatoslav Mykhailiuk", "Jalen Wilson"],
      ["Frank Mason III|Frank Mason", "Cheick Diallo", "Wayne Selden", "Udoka Azubuike"],
      ["Kevin McCullar Jr.|Kevin McCullar"]
    ] },
  { id: "duke2yr", d: "medium", p: true, q: "Name a Duke player (2010 or later) who stayed 2+ seasons and reached the NBA",
    t: [
      ["Grayson Allen", "Luke Kennard", "Mason Plumlee"],
      ["Seth Curry", "Tre Jones", "Mark Williams", "Kyle Filipowski"],
      ["Quinn Cook", "Miles Plumlee", "Wendell Moore Jr.|Wendell Moore"],
      ["Ryan Kelly"],
      ["Marques Bolden"]
    ] },
  { id: "novanba", d: "easy", p: true, q: "Name a Villanova player (2010 or later) who reached the NBA",
    t: [
      ["Jalen Brunson", "Mikal Bridges"],
      ["Josh Hart", "Donte DiVincenzo", "Saddiq Bey"],
      ["Eric Paschall", "Omari Spellman", "Collin Gillespie"],
      [],
      ["Ryan Arcidiacono"]
    ] },
  { id: "msunba", d: "easy", p: true, q: "Name a Michigan State player (2010 or later) who reached the NBA",
    t: [
      ["Draymond Green", "Jaren Jackson Jr.|Jaren Jackson"],
      ["Miles Bridges", "Gary Harris", "Xavier Tillman", "Max Christie"],
      ["Bryn Forbes", "Denzel Valentine", "Adreian Payne", "Deyonta Davis"],
      ["Cassius Winston"],
      ["Matt Costello"]
    ] },
  { id: "zonanba", d: "easy", p: true, q: "Name a Arizona player (2010 or later) who reached the NBA",
    t: [
      ["Deandre Ayton", "Aaron Gordon", "Lauri Markkanen"],
      ["Bennedict Mathurin", "T.J. McConnell|TJ McConnell", "Derrick Williams", "Stanley Johnson"],
      ["Rondae Hollis-Jefferson|Hollis-Jefferson", "Josh Green", "Zeke Nnaji", "Allonzo Trier", "Solomon Hill"],
      ["Christian Koloko", "Dalen Terry", "Nick Johnson"],
      ["Kadeem Allen"]
    ] },
  { id: "uconnnba", d: "easy", p: true, q: "Name a UConn player (2010 or later) who reached the NBA",
    t: [
      ["Kemba Walker", "Andre Drummond", "Stephon Castle", "Donovan Clingan"],
      ["Shabazz Napier", "Jeremy Lamb", "Jordan Hawkins", "James Bouknight"],
      ["Andre Jackson Jr.|Andre Jackson", "Cam Spencer", "Tristen Newton"],
      ["Adama Sanogo"],
      ["Daniel Hamilton"]
    ] },
  { id: "baylornba", d: "medium", p: true, q: "Name a Baylor player (2010 or later) who reached the NBA",
    t: [
      ["Davion Mitchell", "Jared Butler", "Keyonte George", "VJ Edgecombe|V.J. Edgecombe"],
      ["Jeremy Sochan", "Taurean Prince"],
      ["Perry Jones III|Perry Jones", "Ja'Kobe Walter|JaKobe Walter", "Kendall Brown"],
      ["Quincy Miller"],
      ["Johnathan Motley"]
    ] },
  { id: "texasnba", d: "easy", p: true, q: "Name a Texas player (2010 or later) who reached the NBA",
    t: [
      ["Myles Turner", "Jarrett Allen", "Tristan Thompson"],
      ["Mo Bamba", "Avery Bradley", "Jaxson Hayes", "Cory Joseph"],
      ["Tre Johnson", "Jordan Hamilton"],
      ["Isaiah Taylor"],
      ["Dexter Pittman"]
    ] },
  { id: "iunba", d: "easy", p: true, q: "Name a Indiana player (2010 or later) who reached the NBA",
    t: [
      ["Victor Oladipo", "OG Anunoby|O.G. Anunoby", "Cody Zeller"],
      ["Trayce Jackson-Davis|Jackson-Davis", "Romeo Langford", "Thomas Bryant", "Noah Vonleh", "Yogi Ferrell"],
      ["Jalen Hood-Schifino|Hood-Schifino", "Kel'el Ware|Kelel Ware"],
      ["Troy Williams"],
      ["Juwan Morgan"]
    ] },
  { id: "purduenba", d: "easy", p: true, q: "Name a Purdue player (2010 or later) who reached the NBA",
    t: [
      ["Zach Edey", "Jaden Ivey"],
      ["Carsen Edwards", "Caleb Swanigan"],
      ["E'Twaun Moore|ETwaun Moore", "Robbie Hummel"],
      ["A.J. Hammons|AJ Hammons"],
      ["JaJuan Johnson"]
    ] },
  { id: "ufnba", d: "easy", p: true, q: "Name a Florida player (2010 or later) who reached the NBA",
    t: [
      ["Bradley Beal"],
      ["Chandler Parsons", "Dorian Finney-Smith|Finney-Smith", "Walter Clayton Jr.|Walter Clayton", "Andrew Nembhard", "Tre Mann"],
      ["Will Richard", "Alijah Martin", "Keyontae Johnson"],
      ["Colin Castleton"],
      ["Erik Murphy"]
    ] },
  { id: "lounba", d: "easy", p: true, q: "Name a Louisville player (2010 or later) who reached the NBA",
    t: [
      ["Donovan Mitchell"],
      ["Terry Rozier", "Montrezl Harrell"],
      ["Gorgui Dieng", "Jordan Nwora", "Damion Lee"],
      ["Peyton Siva", "Russ Smith"],
      ["Ray Spalding"]
    ] },
  { id: "cusenba", d: "easy", p: true, q: "Name a Syracuse player (2010 or later) who reached the NBA",
    t: [
      ["Dion Waiters", "Michael Carter-Williams|Carter-Williams|MCW", "Jerami Grant"],
      ["Wesley Johnson", "Tyler Ennis", "Oshae Brissett"],
      ["Malachi Richardson", "Tyler Lydon", "Elijah Hughes", "Buddy Boeheim", "Chris McCullough"],
      ["Fab Melo", "Kris Joseph"],
      ["Rakeem Christmas"]
    ] },
  { id: "osunba", d: "easy", p: true, q: "Name a Ohio State player (2010 or later) who reached the NBA",
    t: [
      ["D'Angelo Russell|DAngelo Russell", "Evan Turner", "Jared Sullinger"],
      ["Keita Bates-Diop|Bates-Diop", "E.J. Liddell|EJ Liddell", "Malaki Branham", "Jae'Sean Tate|JaeSean Tate"],
      ["Brice Sensabaugh", "Deshaun Thomas"],
      [],
      ["Duane Washington Jr.|Duane Washington"]
    ] },
  { id: "michnba", d: "easy", p: true, q: "Name a Michigan player (2010 or later) who reached the NBA",
    t: [
      ["Franz Wagner", "Jordan Poole", "Caris LeVert", "Tim Hardaway Jr.|Tim Hardaway"],
      ["Trey Burke", "Duncan Robinson", "Nik Stauskas", "Moritz Wagner", "Glenn Robinson III|Glenn Robinson"],
      ["Isaiah Livers", "Mitch McGary", "D.J. Wilson|DJ Wilson", "Caleb Houstan", "Moussa Diabate", "Jett Howard", "Kobe Bufkin"],
      ["Ignas Brazdeikis", "Darius Morris"],
      ["Zavier Simpson"]
    ] },
  { id: "wiscnba", d: "medium", p: true, q: "Name a Wisconsin player (2010 or later) who reached the NBA",
    t: [
      ["Frank Kaminsky"],
      ["Sam Dekker", "Johnny Davis", "Jon Leuer"],
      ["Nigel Hayes", "John Tonje"],
      ["Bronson Koenig"],
      ["Micah Potter"]
    ] },
  { id: "tennnba", d: "easy", p: true, q: "Name a Tennessee player (2010 or later) who reached the NBA",
    t: [
      ["Tobias Harris", "Josh Richardson", "Dalton Knecht"],
      ["Grant Williams", "Jaden Springer", "Keon Johnson", "Kennedy Chandler"],
      ["Admiral Schofield", "Jarnell Stokes", "Julian Phillips"],
      ["Jordan Bone", "Yves Pons"],
      ["Scotty Hopson"]
    ] },
  { id: "aubnba", d: "easy", p: true, q: "Name a Auburn player (2010 or later) who reached the NBA",
    t: [
      ["Jabari Smith Jr.|Jabari Smith", "Walker Kessler"],
      ["Isaac Okoro", "Chuma Okeke", "Sharife Cooper"],
      ["Johni Broome"],
      [],
      ["Jared Harper"]
    ] },
  { id: "bamanba", d: "easy", p: true, q: "Name a Alabama player (2010 or later) who reached the NBA",
    t: [
      ["Brandon Miller", "Collin Sexton"],
      ["Herb Jones|Herbert Jones", "Kira Lewis Jr.|Kira Lewis", "Keon Ellis"],
      ["Joshua Primo", "Noah Clowney", "JD Davison|J.D. Davison"],
      [],
      ["Donta Hall"]
    ] },
  { id: "arknba", d: "easy", p: true, q: "Name a Arkansas player (2010 or later) who reached the NBA",
    t: [
      ["Bobby Portis", "Daniel Gafford", "Anthony Black"],
      ["Moses Moody", "Isaiah Joe", "Jaylin Williams", "Nick Smith Jr.|Nick Smith"],
      ["Jordan Walsh", "Ricky Council IV|Ricky Council", "Adou Thiero"],
      [],
      ["Mason Jones"]
    ] },
  { id: "lsunba", d: "easy", p: true, q: "Name a LSU player (2010 or later) who reached the NBA",
    t: [
      ["Ben Simmons", "Naz Reid", "Cam Thomas"],
      ["Tari Eason", "Trendon Watford", "Jarell Martin"],
      ["Skylar Mays", "Tremont Waters", "Johnny O'Bryant|Johnny OBryant"],
      ["Darius Days", "Antonio Blakeney"],
      ["Tim Quarterman"]
    ] },
  { id: "oregonnba", d: "medium", p: true, q: "Name a Oregon player (2010 or later) who reached the NBA",
    t: [
      ["Payton Pritchard", "Dillon Brooks"],
      ["Chris Boucher", "Bol Bol", "Troy Brown Jr.|Troy Brown", "Jordan Bell"],
      ["Tyler Dorsey", "Louis King", "Kel'el Ware|Kelel Ware"],
      [],
      ["Joseph Young"]
    ] },
  { id: "uclanba", d: "easy", p: true, q: "Name a UCLA player (2010 or later) who reached the NBA",
    t: [
      ["Zach LaVine", "Lonzo Ball", "Jaime Jaquez Jr.|Jaime Jaquez"],
      ["Kyle Anderson", "Norman Powell", "Kevon Looney", "Aaron Holiday", "Peyton Watson"],
      ["Shabazz Muhammad", "TJ Leaf|T.J. Leaf", "Moses Brown", "Jaylen Clark", "Adem Bona", "Johnny Juzang", "Amari Bailey"],
      ["Jordan Adams", "Ike Anigbogu", "Travis Wear", "Thomas Welsh"],
      ["Malcolm Lee"]
    ] },
  { id: "uscnba", d: "easy", p: true, q: "Name a USC player (2010 or later) who reached the NBA",
    t: [
      ["Evan Mobley", "Nikola Vucevic|Nikola Vučević", "Bronny James"],
      ["Onyeka Okongwu", "De'Anthony Melton|DeAnthony Melton", "Kevin Porter Jr.|Kevin Porter"],
      ["Isaiah Mobley", "Isaiah Collier"],
      ["Chimezie Metu"],
      ["Jordan McLaughlin"]
    ] },
  { id: "uwnba", d: "medium", p: true, q: "Name a Washington player (2010 or later) who reached the NBA",
    t: [
      ["Dejounte Murray", "Isaiah Thomas", "Markelle Fultz"],
      ["Jaden McDaniels", "Matisse Thybulle", "Terrence Ross"],
      ["Marquese Chriss", "Tony Wroten", "Quincy Pondexter"],
      [],
      ["C.J. Wilcox|CJ Wilcox"]
    ] },
  { id: "memnba", d: "medium", p: true, q: "Name a Memphis player (2010 or later) who reached the NBA",
    t: [
      ["Jalen Duren", "James Wiseman"],
      ["Precious Achiuwa", "Will Barton"],
      ["Emoni Bates", "Tarik Black"],
      ["Elliot Williams", "Dedric Lawson"],
      ["Lester Quinones"]
    ] },
  { id: "uvanba", d: "easy", p: true, q: "Name a Virginia player (2010 or later) who reached the NBA",
    t: [
      ["Malcolm Brogdon", "De'Andre Hunter|DeAndre Hunter", "Joe Harris"],
      ["Ty Jerome", "Trey Murphy III|Trey Murphy", "Kyle Guy", "Sam Hauser"],
      ["Justin Anderson", "Mike Scott", "Jay Huff", "Ryan Dunn"],
      ["Mamadi Diakite", "London Perrantes", "Reece Beekman"],
      ["Devon Hall"]
    ] },
  { id: "mdnba", d: "medium", p: true, q: "Name a Maryland player (2010 or later) who reached the NBA",
    t: [
      ["Kevin Huerter", "Alex Len"],
      ["Jalen Smith", "Bruno Fernando", "Aaron Wiggins", "Derik Queen"],
      ["Jake Layman", "Diamond Stone", "Greivis Vasquez"],
      ["Jordan Williams"],
      ["Robert Carter"]
    ] },
  { id: "isunba", d: "medium", p: true, q: "Name a Iowa State player (2010 or later) who reached the NBA",
    t: [
      ["Tyrese Haliburton", "Talen Horton-Tucker|Horton-Tucker"],
      ["Monte Morris", "Georges Niang"],
      ["Abdel Nader", "Matt Thomas", "Royce White"],
      ["Naz Mitrou-Long", "Lindell Wigginton"],
      ["Craig Brackins"]
    ] },
  { id: "ttunba", d: "medium", p: true, q: "Name a Texas Tech player (2010 or later) who reached the NBA",
    t: [
      ["Jarrett Culver"],
      ["Zhaire Smith", "Mac McClung"],
      ["Jahmi'us Ramsey|Jahmius Ramsey", "Terrence Shannon Jr.|Terrence Shannon"],
      [],
      ["Kevin McCullar Jr.|Kevin McCullar"]
    ] },
  { id: "uhnba", d: "medium", p: true, q: "Name a Houston player (2010 or later) who reached the NBA",
    t: [
      ["Jarace Walker", "Quentin Grimes", "Marcus Sasser"],
      ["Jamal Shead"],
      ["Danuel House"],
      ["Armoni Brooks"],
      ["Nate Hinton"]
    ] },
  { id: "creightonnba", d: "medium", p: true, q: "Name a Creighton player (2010 or later) who reached the NBA",
    t: [
      ["Doug McDermott"],
      ["Baylor Scheierman", "Justin Patton", "Khyri Thomas"],
      ["Ryan Kalkbrenner"],
      [],
      ["Ty-Shon Alexander|TyShon Alexander"]
    ] },
  { id: "marqnba", d: "medium", p: true, q: "Name a Marquette player (2010 or later) who reached the NBA",
    t: [
      ["Jimmy Butler", "Jae Crowder"],
      ["Tyler Kolek", "Olivier-Maxence Prosper|Prosper", "Henry Ellenson"],
      ["Sam Hauser", "Markus Howard", "Kam Jones"],
      ["Vander Blue", "Darius Johnson-Odom"],
      ["Justin Lewis"]
    ] },
  { id: "gtownnba", d: "medium", p: true, q: "Name a Georgetown player (2010 or later) who reached the NBA",
    t: [
      ["Otto Porter Jr.|Otto Porter", "Greg Monroe"],
      ["Omer Yurtseven", "Mac McClung"],
      ["Henry Sims"],
      ["Marcus Derrickson"],
      ["Chris Wright"]
    ] },
  { id: "ndnba", d: "medium", p: true, q: "Name a Notre Dame player (2010 or later) who reached the NBA",
    t: [
      ["Pat Connaughton", "Jerian Grant"],
      ["Blake Wesley", "Demetrius Jackson"],
      ["Bonzie Colson"],
      [],
      ["Luke Harangody"]
    ] },
  { id: "ncstnba", d: "medium", p: true, q: "Name a NC State player (2010 or later) who reached the NBA",
    t: [
      ["Dennis Smith Jr.|Dennis Smith", "T.J. Warren|TJ Warren"],
      ["Omer Yurtseven"],
      ["Lorenzo Brown", "Terquavion Smith"],
      [],
      ["Cat Barber|Anthony Barber"]
    ] },
  { id: "wakenba", d: "medium", p: true, q: "Name a Wake Forest player (2010 or later) who reached the NBA",
    t: [
      ["John Collins"],
      ["Al-Farouq Aminu|Aminu", "Jake LaRavia", "Ish Smith"],
      ["Olivier Sarr"],
      [],
      ["Alondes Williams"]
    ] },
  { id: "okstnba", d: "medium", p: true, q: "Name a Oklahoma State player (2010 or later) who reached the NBA",
    t: [
      ["Cade Cunningham", "Marcus Smart"],
      ["Lindy Waters III|Lindy Waters"],
      ["Jawun Evans", "Markel Brown"],
      [],
      ["James Anderson"]
    ] },
  { id: "ounba", d: "easy", p: true, q: "Name a Oklahoma player (2010 or later) who reached the NBA",
    t: [
      ["Trae Young", "Buddy Hield", "Austin Reaves"],
      ["Jeremiah Fears"],
      [],
      ["Willie Warren"],
      ["Tiny Gallon"]
    ] },
  { id: "illininba", d: "medium", p: true, q: "Name a Illinois player (2010 or later) who reached the NBA",
    t: [
      ["Ayo Dosunmu"],
      ["Terrence Shannon Jr.|Terrence Shannon", "Meyers Leonard"],
      ["Kasparas Jakucionis|Jakucionis", "Will Riley"],
      [],
      ["Brandon Paul"]
    ] },
  { id: "iowanba", d: "medium", p: true, q: "Name a Iowa player (2010 or later) who reached the NBA",
    t: [
      ["Keegan Murray"],
      ["Kris Murray", "Luka Garza"],
      ["Joe Wieskamp", "Devyn Marble"],
      ["Tyler Cook"],
      ["Jarrod Uthoff"]
    ] },
  { id: "fsunba", d: "easy", p: true, q: "Name a Florida State player (2010 or later) who reached the NBA",
    t: [
      ["Scottie Barnes", "Jonathan Isaac", "Devin Vassell"],
      ["Malik Beasley", "Terance Mann", "Patrick Williams", "Dwayne Bacon"],
      ["Mfiondu Kabengele", "Chris Singleton", "Trent Forrest"],
      ["Bernard James", "Okaro White"],
      ["RaiQuan Gray"]
    ] },
  { id: "miaminba", d: "medium", p: true, q: "Name a Miami player (2010 or later) who reached the NBA",
    t: [
      ["Bruce Brown", "Lonnie Walker IV|Lonnie Walker"],
      ["Shane Larkin", "Kyshawn George"],
      ["Davon Reed", "Jordan Miller", "Dewan Hernandez"],
      ["Isaiah Wong"],
      ["Sheldon McClellan"]
    ] },
  { id: "pittnba", d: "medium", p: true, q: "Name a Pitt player (2010 or later) who reached the NBA",
    t: [
      ["Steven Adams"],
      ["Bub Carrington|Carlton Carrington"],
      ["Brad Wanamaker", "Justin Champagnie"],
      [],
      ["Lamar Patterson"]
    ] },
  { id: "stanfordnba", d: "medium", p: true, q: "Name a Stanford player (2010 or later) who reached the NBA",
    t: [
      ["Ziaire Williams", "Dwight Powell"],
      ["Landry Fields", "KZ Okpala|K.Z. Okpala", "Josh Huestis"],
      ["Tyrell Terry", "Maxime Raynaud", "Anthony Brown"],
      ["Chasson Randle"],
      ["Spencer Jones"]
    ] },
  { id: "colonba", d: "medium", p: true, q: "Name a Colorado player (2010 or later) who reached the NBA",
    t: [
      ["Derrick White", "Spencer Dinwiddie"],
      ["Alec Burks", "Andre Roberson", "Tristan da Silva|Tristan Da Silva"],
      ["Jabari Walker", "Cody Williams"],
      [],
      ["McKinley Wright IV|McKinley Wright"]
    ] },
  { id: "xaviernba", d: "medium", p: true, q: "Name a Xavier player (2010 or later) who reached the NBA",
    t: [
      ["Naji Marshall"],
      ["Edmond Sumner", "Colby Jones", "Jordan Crawford"],
      ["Trevon Bluiett"],
      ["J.P. Macura|JP Macura"],
      ["Semaj Christon"]
    ] },
  { id: "sjunba", d: "medium", p: true, q: "Name a St. John's player (2010 or later) who reached the NBA",
    t: [
      ["Mo Harkless|Maurice Harkless"],
      ["Julian Champagnie", "JaKarr Sampson"],
      ["Shamorie Ponds"],
      [],
      ["Daniss Jenkins"]
    ] },
  { id: "cincynba", d: "medium", p: true, q: "Name a Cincinnati player (2010 or later) who reached the NBA",
    t: [
      ["Lance Stephenson"],
      ["Jacob Evans", "Gary Clark"],
      [],
      [],
      ["Sean Kilpatrick"]
    ] },
  { id: "top5", d: "medium", p: true, q: "Name a college player picked top 5 in the NBA Draft from 2020 to 2025",
    t: [
      ["Cooper Flagg", "Paolo Banchero", "Anthony Edwards", "Cade Cunningham", "Chet Holmgren"],
      ["Evan Mobley", "Scottie Barnes", "Jalen Suggs", "Jaden Ivey", "Brandon Miller", "Dylan Harper", "Ace Bailey"],
      ["Jabari Smith Jr.|Jabari Smith", "Keegan Murray", "Reed Sheppard", "Stephon Castle", "VJ Edgecombe|V.J. Edgecombe", "Kon Knueppel", "James Wiseman"],
      ["Patrick Williams"],
      ["Isaac Okoro"]
    ] },
  { id: "dukeffc", d: "easy", p: true, q: "Name a head coach who took Duke to a Final Four",
    t: [
      ["Mike Krzyzewski|Coach K"],
      ["Jon Scheyer"],
      ["Vic Bubas"],
      [],
      ["Bill Foster"]
    ] },
  { id: "uncffc", d: "easy", p: true, q: "Name a head coach who took North Carolina to a Final Four",
    t: [
      ["Roy Williams", "Dean Smith"],
      ["Hubert Davis"],
      ["Bill Guthridge"],
      [],
      ["Frank McGuire"]
    ] },
  { id: "iucoach", d: "easy", p: true, q: "Name an Indiana head coach since 2000 (interims count)",
    t: [
      ["Tom Crean", "Mike Woodson"],
      ["Archie Miller", "Kelvin Sampson", "Bob Knight"],
      ["Mike Davis", "Darian DeVries"],
      [],
      ["Dan Dakich"]
    ] },
  { id: "ukcoach", d: "easy", p: true, q: "Name a Kentucky head coach since 2000",
    t: [
      ["John Calipari", "Mark Pope"],
      ["Tubby Smith"],
      [],
      [],
      ["Billy Gillispie"]
    ] },
  { id: "loucoach", d: "medium", p: true, q: "Name a Louisville head coach since 2000 (interims count)",
    t: [
      ["Rick Pitino"],
      ["Chris Mack", "Kenny Payne", "Pat Kelsey"],
      ["Denny Crum"],
      [],
      ["David Padgett"]
    ] },
  { id: "michcoach", d: "medium", p: true, q: "Name a Michigan head coach since 2000 (interims count)",
    t: [
      ["John Beilein", "Juwan Howard", "Dusty May"],
      ["Tommy Amaker"],
      ["Brian Ellerbe"],
      [],
      ["Phil Martelli"]
    ] },
  { id: "osucoach", d: "medium", p: true, q: "Name an Ohio State head coach since 2000",
    t: [
      ["Thad Matta", "Chris Holtmann"],
      ["Jake Diebler"],
      [],
      [],
      ["Jim O'Brien|Jim OBrien"]
    ] },
  { id: "zonacoach", d: "medium", p: true, q: "Name an Arizona head coach since 2000 (interims count)",
    t: [
      ["Sean Miller", "Tommy Lloyd", "Lute Olson"],
      [],
      ["Russ Pennell"],
      [],
      ["Kevin O'Neill|Kevin ONeill"]
    ] },
  { id: "uclacoach", d: "medium", p: true, q: "Name a UCLA head coach since 2000",
    t: [
      ["Mick Cronin", "Ben Howland", "Steve Alford"],
      [],
      ["Steve Lavin"],
      [],
      ["Murry Bartow"]
    ] },
  { id: "unccoach", d: "easy", p: true, q: "Name a North Carolina head coach since 2000",
    t: [
      ["Roy Williams", "Hubert Davis"],
      [],
      ["Matt Doherty"],
      [],
      ["Bill Guthridge"]
    ] },
  { id: "mdcoach", d: "medium", p: true, q: "Name a Maryland head coach since 2000 (interims count)",
    t: [
      ["Gary Williams", "Mark Turgeon", "Kevin Willard"],
      ["Buzz Williams"],
      [],
      [],
      ["Danny Manning"]
    ] },
  { id: "gtowncoach", d: "medium", p: true, q: "Name a Georgetown head coach since 2000",
    t: [
      ["John Thompson III", "Patrick Ewing"],
      ["Ed Cooley"],
      [],
      [],
      ["Craig Esherick"]
    ] },
  { id: "novacoach", d: "medium", p: true, q: "Name a Villanova head coach since 2000",
    t: [
      ["Jay Wright"],
      ["Kyle Neptune", "Kevin Willard"],
      [],
      [],
      ["Steve Lappas"]
    ] },
  { id: "uconncoach", d: "medium", p: true, q: "Name a UConn head coach since 2000 (interims count)",
    t: [
      ["Jim Calhoun", "Dan Hurley"],
      ["Kevin Ollie"],
      [],
      [],
      ["George Blaney"]
    ] },
  { id: "b2b", d: "easy", q: "Name a school that has won back-to-back men's national titles",
    t: [
      ["Duke", "UConn|Connecticut", "Florida|UF"],
      ["UCLA"],
      ["Kentucky|UK"],
      ["Cincinnati", "San Francisco|USF"],
      ["Oklahoma State|Oklahoma A&M"]
    ] },
  { id: "champs00", d: "easy", q: "Name a men's national champion since 2000 (vacated titles count)",
    t: [
      ["UConn|Connecticut", "Duke", "North Carolina|UNC", "Kansas|KU"],
      ["Florida|UF", "Villanova|Nova", "Kentucky|UK", "Virginia|UVA", "Baylor", "Michigan"],
      ["Michigan State|MSU", "Syracuse", "Maryland"],
      [],
      ["Louisville"]
    ] },
  { id: "onechamps", d: "easy", q: "Name a #1 seed that won the men's national title from 2010 to 2025",
    t: [
      ["Duke", "Kentucky|UK", "UConn|Connecticut", "Kansas|KU"],
      ["North Carolina|UNC", "Villanova|Nova", "Virginia|UVA", "Florida|UF"],
      ["Baylor"],
      [],
      ["Louisville"]
    ] },
  { id: "mvpcollege", d: "easy", q: "Name a college attended by an NBA MVP from 2010 to 2025",
    t: [
      ["Kentucky|UK", "Davidson", "Texas|UT"],
      ["Kansas|KU", "UCLA"],
      ["Memphis"],
      [],
      ["Arizona State|ASU"]
    ] },
  { id: "no1college", d: "easy", q: "Name a college that produced a #1 overall NBA Draft pick (2010–2025)",
    t: [
      ["Duke", "Kentucky|UK"],
      ["Kansas|KU", "Arizona", "LSU"],
      ["Oklahoma State", "Georgia|UGA", "Washington|UW"],
      [],
      ["UNLV"]
    ] },
  { id: "coacharena", d: "medium", q: "Name a school whose home court or arena is named after a former coach",
    t: [
      ["Kentucky|UK", "Kansas|KU", "North Carolina|UNC"],
      ["Duke", "Butler"],
      ["Oklahoma State", "Arizona"],
      [],
      ["Western Kentucky|WKU"]
    ] },
  { id: "b1gff", d: "easy", q: "Name a current Big Ten school that made the men's Final Four since 2010",
    t: [
      ["Michigan State|MSU", "Michigan"],
      ["Wisconsin", "Purdue"],
      ["Ohio State|OSU", "Oregon"],
      [],
      ["UCLA"]
    ] },
  { id: "secff", d: "easy", q: "Name a current SEC school that made the men's Final Four since 2010",
    t: [
      ["Kentucky|UK", "Florida|UF"],
      ["Auburn", "Alabama|Bama"],
      ["South Carolina"],
      [],
      ["Oklahoma|OU"]
    ] },
  { id: "accff", d: "easy", q: "Name a current ACC school that made the men's Final Four since 2010",
    t: [
      ["Duke", "North Carolina|UNC"],
      ["Virginia|UVA", "Syracuse"],
      ["Miami", "NC State|North Carolina State"],
      [],
      ["Louisville"]
    ] },
  { id: "b12ff", d: "easy", q: "Name a current Big 12 school that made the men's Final Four since 2010",
    t: [
      ["Kansas|KU", "Baylor"],
      ["Houston", "Texas Tech"],
      [],
      [],
      ["West Virginia|WVU"]
    ] },
  { id: "beff", d: "easy", q: "Name a current Big East school that made the men's Final Four since 2010",
    t: [
      ["UConn|Connecticut", "Villanova|Nova"],
      [],
      [],
      [],
      ["Butler"]
    ] },
  { id: "pac12left", d: "easy", q: "Name a school that left the Pac-12 in 2024",
    t: [
      ["UCLA", "USC|Southern California", "Oregon", "Arizona"],
      ["Washington|UW", "Utah", "Colorado", "Arizona State|ASU"],
      ["California|Cal"],
      [],
      ["Stanford"]
    ] },
  { id: "s16_25", d: "medium", q: "Name a team that made the 2025 men's Sweet 16",
    t: [
      ["Duke", "Florida|UF", "Auburn", "Houston", "Kentucky|UK"],
      ["Alabama|Bama", "Tennessee|Vols", "Michigan State|MSU", "Michigan", "Arizona", "Texas Tech", "Purdue", "Maryland"],
      ["Arkansas", "BYU|Brigham Young"],
      [],
      ["Ole Miss|Mississippi"]
    ] },
  { id: "s16_24", d: "medium", q: "Name a team that made the 2024 men's Sweet 16",
    t: [
      ["UConn|Connecticut", "Purdue", "North Carolina|UNC", "Duke", "Houston"],
      ["Alabama|Bama", "Tennessee|Vols", "Arizona", "Gonzaga|Zags", "Marquette", "Creighton", "Illinois", "Iowa State|ISU"],
      ["NC State|North Carolina State", "San Diego State|SDSU"],
      [],
      ["Clemson"]
    ] },
  { id: "cardinals", d: "easy", q: "Name a Division I school nicknamed the Cardinals",
    t: [
      ["Louisville"],
      ["Ball State"],
      ["Incarnate Word|UIW"],
      [],
      ["Lamar"]
    ] },
  { id: "trojans", d: "easy", q: "Name a Division I school nicknamed the Trojans",
    t: [
      ["USC|Southern California"],
      ["Troy"],
      [],
      [],
      ["Little Rock|Arkansas-Little Rock|UALR"]
    ] },
  { id: "cowboys", d: "easy", q: "Name a Division I school nicknamed the Cowboys",
    t: [
      ["Oklahoma State|OSU"],
      ["Wyoming"],
      [],
      [],
      ["McNeese|McNeese State"]
    ] },
  { id: "broncos", d: "medium", q: "Name a Division I school nicknamed the Broncos",
    t: [
      ["Boise State"],
      ["Western Michigan|WMU"],
      [],
      [],
      ["Santa Clara"]
    ] },
  { id: "bison", d: "medium", q: "Name a Division I school nicknamed the Bison",
    t: [
      ["Howard"],
      ["North Dakota State|NDSU"],
      ["Bucknell"],
      [],
      ["Lipscomb"]
    ] },
  { id: "goldeneagles", d: "medium", q: "Name a Division I school nicknamed the Golden Eagles",
    t: [
      ["Marquette"],
      ["Southern Miss|Southern Mississippi"],
      ["Oral Roberts|ORU"],
      [],
      ["Tennessee Tech"]
    ] },
  { id: "rednick", d: "medium", q: "Name a Division I school with 'Red' in its nickname",
    t: [
      ["Texas Tech", "St. John's|St Johns|Saint Johns"],
      ["Cornell", "Arkansas State"],
      ["Miami (OH)|Miami Ohio|Miami of Ohio", "Seattle U|Seattle"],
      [],
      ["Southeast Missouri|SEMO|Southeast Missouri State"]
    ] },
  { id: "mississippi", d: "hard", q: "Name a Division I basketball school in Mississippi",
    t: [
      ["Ole Miss|Mississippi", "Mississippi State|Miss State"],
      ["Southern Miss|Southern Mississippi"],
      ["Jackson State", "Alcorn State|Alcorn"],
      [],
      ["Mississippi Valley State|MVSU"]
    ] },
  { id: "ffschools", d: "easy", ok: true, g: "ff-schools", q: "Name a school that has reached the men's Final Four (vacated trips count)",
    t: [
      ["North Carolina|UNC", "Kentucky|UK", "Duke", "UCLA", "Kansas|KU", "Michigan State|MSU", "UConn|Connecticut", "Villanova|Nova", "Indiana|IU", "Louisville", "Michigan", "Gonzaga|Zags", "Florida|UF"],
      ["Ohio State|OSU", "Syracuse", "Arizona", "Houston", "Georgetown", "Illinois", "Oklahoma|OU", "Wisconsin", "Virginia|UVA", "Arkansas", "Cincinnati", "Oklahoma State|Oklahoma A&M", "Kansas State|K-State", "LSU", "UNLV", "Purdue", "Butler", "Baylor", "Auburn", "Texas Tech", "Memphis|Memphis State", "Maryland", "Texas|UT", "Marquette", "NC State|North Carolina State", "Oregon", "Alabama|Bama", "Loyola Chicago|Loyola"],
      ["Utah", "California|Cal", "Iowa", "San Francisco|USF", "Bradley", "CCNY|City College of New York|City College", "Colorado", "DePaul", "Georgia Tech", "Holy Cross", "La Salle", "Oregon State", "Providence", "St. John's|St Johns|Saint Johns", "Stanford", "Temple", "USC|Southern California", "West Virginia|WVU", "Wichita State", "South Carolina", "San Diego State|SDSU", "Florida Atlantic|FAU", "Miami", "George Mason", "VCU|Virginia Commonwealth", "Notre Dame", "Florida State|FSU", "Seton Hall", "Wake Forest", "Pittsburgh|Pitt", "Penn State", "Mississippi State", "Indiana State", "UTEP|Texas Western", "Iowa State", "Georgia|UGA"],
      ["Dartmouth", "NYU|New York University", "Charlotte|UNC Charlotte", "Dayton", "Drake", "Duquesne", "Jacksonville", "New Mexico State", "Penn|Pennsylvania", "Princeton", "Rutgers", "Santa Clara", "SMU|Southern Methodist", "St. Bonaventure|St Bonaventure|Saint Bonaventure", "Washington|UW", "Washington State", "Wyoming", "Minnesota", "UMass|Massachusetts", "Saint Joseph's|St Josephs|Saint Josephs", "Western Kentucky|WKU"],
      ["Seattle|Seattle U|Seattle University"]
    ] },
  { id: "ffstate", d: "medium", ok: true, g: "ff-schools", q: "Name a school with 'State' in its name that has reached the men's Final Four",
    t: [
      ["Michigan State|MSU", "Ohio State|OSU", "NC State|North Carolina State"],
      ["Oklahoma State|Oklahoma A&M", "Kansas State|K-State", "San Diego State|SDSU", "Florida State|FSU", "Wichita State"],
      ["Iowa State", "Penn State", "Mississippi State", "Indiana State", "Oregon State"],
      ["New Mexico State"],
      ["Washington State"]
    ] },
  { id: "titlegame", d: "medium", ok: true, g: "title-game", q: "Name a school that has played in the men's national championship game",
    t: [
      ["Duke", "North Carolina|UNC", "Kentucky|UK", "UCLA", "Kansas|KU", "UConn|Connecticut", "Michigan", "Villanova|Nova", "Gonzaga|Zags"],
      ["Indiana|IU", "Michigan State|MSU", "Ohio State|OSU", "Louisville", "Syracuse", "Arizona", "Florida|UF", "Georgetown", "Houston", "Virginia|UVA", "Baylor", "Butler", "Purdue", "Arkansas", "Marquette", "Maryland", "Wisconsin", "Illinois", "Texas Tech", "Cincinnati", "NC State|North Carolina State", "UNLV", "Memphis|Memphis State"],
      ["Oklahoma|OU", "Oklahoma State|Oklahoma A&M", "Utah", "California|Cal", "Georgia Tech", "San Diego State|SDSU", "Seton Hall", "Indiana State", "Florida State|FSU", "Stanford", "Oregon", "Loyola Chicago|Loyola", "La Salle", "San Francisco|USF", "Holy Cross", "UTEP|Texas Western", "West Virginia|WVU", "Kansas State|K-State", "St. John's|St Johns|Saint Johns", "Bradley"],
      ["Dartmouth", "NYU|New York University", "Wyoming", "CCNY|City College of New York|City College", "Iowa", "Dayton", "Jacksonville", "Washington State"],
      ["Seattle|Seattle U|Seattle University"]
    ] },
  { id: "naismith", d: "medium", p: true, ok: true, g: "npoy", q: "Name a winner of the men's Naismith Player of the Year award",
    t: [
      ["Michael Jordan|MJ", "Larry Bird", "Kevin Durant", "Zion Williamson", "Cooper Flagg", "Tim Duncan", "Anthony Davis", "Blake Griffin", "Lew Alcindor|Kareem Abdul-Jabbar|Kareem", "Bill Walton", "Patrick Ewing", "Pete Maravich|Pistol Pete"],
      ["David Robinson", "Christian Laettner", "Shane Battier", "JJ Redick|J.J. Redick", "Tyler Hansbrough", "Jimmer Fredette", "Zach Edey", "Jalen Brunson", "Doug McDermott", "Buddy Hield", "Danny Manning", "Ralph Sampson", "Larry Johnson", "Kenyon Martin", "David Thompson", "Cameron Boozer"],
      ["Elton Brand", "Antawn Jamison", "Marcus Camby", "Glenn Robinson", "Evan Turner", "Frank Kaminsky", "Trey Burke", "Andrew Bogut", "Luka Garza", "Jason Williams|Jay Williams", "Johnny Dawkins", "Danny Ferry", "Mark Aguirre", "Austin Carr", "Scott May"],
      ["Lionel Simmons", "Calbert Cheaney", "TJ Ford|T.J. Ford", "Jameer Nelson", "Frank Mason III|Frank Mason", "Obi Toppin", "Oscar Tshiebwe", "Joe Smith", "Marques Johnson"],
      ["Butch Lee"]
    ] },
  { id: "nit", d: "medium", ok: true, g: "nit", q: "Name a school that has won the NIT",
    t: [
      ["Kentucky|UK", "North Carolina|UNC", "UCLA", "Indiana|IU", "Michigan", "UConn|Connecticut", "Ohio State|OSU", "Villanova|Nova"],
      ["St. John's|St Johns|Saint Johns", "Bradley", "Dayton", "Memphis", "Stanford", "Virginia|UVA", "Minnesota", "Penn State", "South Carolina", "Xavier", "Seton Hall", "Texas|UT", "Baylor", "Purdue", "Maryland", "Marquette", "Louisville", "Wake Forest", "West Virginia|WVU", "Auburn", "Providence", "Temple"],
      ["Tulsa", "Virginia Tech", "Wichita State", "California|Cal", "Nebraska", "Vanderbilt|Vandy", "Southern Miss|Southern Mississippi", "BYU|Brigham Young", "TCU|Texas Christian", "George Washington|GW", "North Texas", "Fresno State", "St. Bonaventure|St Bonaventure|Saint Bonaventure", "Princeton", "Southern Illinois", "Holy Cross", "La Salle", "San Francisco|USF", "Utah", "DePaul", "Colorado", "Duquesne", "Saint Louis|SLU"],
      ["Chattanooga|UTC", "CCNY|City College of New York|City College"],
      ["LIU|Long Island|Long Island University"]
    ] },
  { id: "ffhost", d: "medium", ok: true, g: "ff-hosts", q: "Name a city that has hosted the men's Final Four or national championship game",
    t: [
      ["Indianapolis", "New Orleans", "San Antonio", "Houston", "Atlanta", "Kansas City", "New York|New York City|NYC"],
      ["Seattle", "Minneapolis", "Louisville", "St. Louis|Saint Louis", "Glendale", "Arlington", "Detroit", "Philadelphia", "Los Angeles|LA"],
      ["Dallas", "Denver", "Charlotte", "Lexington", "Salt Lake City", "Albuquerque", "San Diego", "East Rutherford", "St. Petersburg|Saint Petersburg", "Greensboro"],
      ["Portland", "College Park", "Evanston"],
      ["Daly City"]
    ] },
  { id: "pac12ever", d: "easy", ok: true, g: "conf-pac12", q: "Name a school that has been a member of the Pac-12 (including its Pac-8 and Pac-10 eras) in men's basketball",
    t: [
      ["UCLA", "Arizona", "USC|Southern California", "Oregon"],
      ["Stanford", "California|Cal", "Washington|UW", "Arizona State|ASU", "Colorado", "Utah"],
      ["Oregon State"],
      [],
      ["Washington State|Wazzu"]
    ] },
  { id: "multititle", d: "medium", ok: true, g: "title-schools", q: "Name a school that has won multiple men's national titles",
    t: [
      ["Kentucky|UK", "North Carolina|UNC", "Duke", "UCLA", "UConn|Connecticut", "Kansas|KU"],
      ["Indiana|IU", "Villanova|Nova", "Florida|UF", "Michigan State|MSU", "Louisville", "Michigan"],
      ["NC State|North Carolina State", "Cincinnati"],
      ["Oklahoma State|Oklahoma A&M"],
      ["San Francisco|USF"]
    ] },
  { id: "multicoach", d: "hard", p: true, ok: true, g: "title-coaches", q: "Name a head coach who won more than one men's national title",
    t: [
      ["John Wooden", "Mike Krzyzewski|Coach K", "Roy Williams", "Dean Smith", "Bob Knight|Bobby Knight", "Bill Self", "Dan Hurley", "Jay Wright"],
      ["Adolph Rupp", "Jim Calhoun", "Billy Donovan", "Rick Pitino"],
      ["Denny Crum"],
      ["Hank Iba", "Branch McCracken", "Phil Woolpert"],
      ["Ed Jucker"]
    ] }
];
