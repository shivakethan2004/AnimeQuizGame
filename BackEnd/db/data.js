const data = {
    levels: {
      level1: [
        {
          words: "Naruto Uzumaki",
          description: "A young ninja who dreams of becoming the strongest and earning the respect of his village, battling powerful enemies along the way.",
          type: "character",
          hint: "Known for his orange jumpsuit and being the 'Number One Hyperactive Knucklehead Ninja.'"
        },
        {
          words: "Monkey D. Luffy",
          description: "A pirate with the ability to stretch his body like rubber, he seeks the ultimate treasure known as the One Piece.",
          type: "character",
          hint: "Captain of the Straw Hat Pirates with a straw hat and a big appetite."
        },
        {
          words: "Son Goku",
          description: "An alien warrior with immense power who protects Earth from various threats, always seeking stronger opponents.",
          type: "character",
          hint: "Saiyan warrior known for his spiky hair and love of food."
        },
        {
          words: "Saitama",
          description: "A hero who can defeat any opponent with a single punch, but struggles with the boredom of his unmatched strength.",
          type: "character",
          hint: "Also called 'Bald Cape' and is famous for his bored expression."
        },
        {
          words: "Attack on Titan",
          description: "A dark fantasy anime set in a world where humanity is on the brink of extinction due to giant humanoid creatures.",
          type: "anime",
          hint: "The story revolves around fighting gigantic humanoid creatures."
        },
        {
          words: "Demon Slayer",
          description: "An anime about a young demon slayer who embarks on a quest to save his demon-turned sister and avenge his family.",
          type: "anime",
          hint: "Features a swordsman with a green and black checkered haori."
        },
        {
          words: "One Piece",
          description: "A long-running pirate adventure following a group of misfits seeking the legendary treasure known as the One Piece.",
          type: "anime",
          hint: "The protagonist wants to become the Pirate King."
        },
        {
          words: "Dragon Ball Z",
          description: "A classic anime featuring powerful warriors protecting Earth from increasingly powerful foes and threats from space.",
          type: "anime",
          hint: "Famous for intense battles and 'Kamehameha' moves."
        },
        {
          words: "My Hero Academia",
          description: "An anime set in a world where superpowers are commonplace, and a quirkless boy dreams of becoming a great hero.",
          type: "anime",
          hint: "Focuses on a world where having superpowers called 'Quirks' is normal."
        },
        {
          words: "Naruto",
          description: "The story of a young ninja, Naruto Uzumaki, who dreams of becoming the Hokage and earning his village's respect.",
          type: "anime",
          hint: "Ninjas, chakra, and Hidden Leaf Village."
        }
      ],
  
      level2: [
        {
          words: "Ichigo Kurosaki",
          description: "A high school student who gains the powers of a Soul Reaper, fighting evil spirits while balancing his normal life.",
          type: "character",
          hint: "Wields a large sword and has bright orange hair."
        },
        {
          words: "Edward Elric",
          description: "A young alchemist who embarks on a quest to restore his and his brother's bodies after a failed alchemical experiment.",
          type: "character",
          hint: "Known as the 'Fullmetal Alchemist,' despite being the shorter one."
        },
        {
          words: "Fullmetal Alchemist",
          description: "A dark fantasy about two brothers searching for the Philosopher's Stone after a failed attempt to resurrect their mother.",
          type: "anime",
          hint: "Alchemy is central to the plot, focusing on 'equivalent exchange.'"
        },
        {
          words: "Tokyo Ghoul",
          description: "A supernatural horror about a boy who turns into a half-ghoul and must navigate his new identity in a dangerous world.",
          type: "anime",
          hint: "The protagonist has a split black and white hairstyle later in the series."
        },
        {
          words: "Death Note",
          description: "A psychological thriller where a brilliant student discovers a notebook that lets him kill anyone, leading to a cat-and-mouse game with a genius detective.",
          type: "anime",
          hint: "Involves a notebook that can kill anyone whose name is written in it."
        },
        {
          words: "Natsu Dragneel",
          description: "A dragon slayer with a fiery personality, he embarks on adventures with his friends to protect their guild and find his missing father.",
          type: "character",
          hint: "Known for his pink hair and fire-based attacks."
        },
        {
          words: "Gon Freecss",
          description: "A young boy who sets out on a journey to become a Hunter and find his father, facing various challenges and friendships along the way.",
          type: "character",
          hint: "Has spiky green hair and is always optimistic."
        },
        {
          words: "Yato",
          description: "A minor god striving for recognition, he takes on odd jobs to help humans while searching for his purpose.",
          type: "character",
          hint: "Often wears a tracksuit and is obsessed with 5-yen coins."
        },
        {
          words: "Gurren Lagann",
          description: "A mecha anime set in a dystopian future where humans fight to reclaim the surface world from oppressive alien forces.",
          type: "anime",
          hint: "Features giant robots and a memorable drill motif."
        },
        {
          words: "Hunter x Hunter",
          description: "The story of a boy named Gon and his journey to become a legendary Hunter, meeting friends and foes along the way.",
          type: "anime",
          hint: "Focuses on Hunters, specialized individuals with unique abilities."
        }
      ],
      level3: [
        {
          words: "Saber",
          description: "A legendary hero known for her noble spirit and swordsmanship.",
          type: "character",
          hint: "One of the main Servants in the Holy Grail War."
        },
        {
          words: "Rintarou Okabe",
          description: "A self-proclaimed mad scientist who discovers time travel.",
          type: "character",
          hint: "Protagonist of 'Steins;Gate.'"
        },
        {
          words: "Erza Scarlet",
          description: "A powerful wizard known for her ability to change armor.",
          type: "character",
          hint: "Member of the Fairy Tail Guild."
        },
        {
          words: "Yato",
          description: "A minor god striving for recognition while helping those in need.",
          type: "character",
          hint: "Wields a sword named Sekki."
        },
        {
          words: "Shinobu Kocho",
          description: "A skilled demon slayer who uses poison in her battles.",
          type: "character",
          hint: "Her breathing style is based on insects."
        },
        {
          words: "Vinland Saga",
          description: "A Viking epic focusing on themes of revenge and conquest.",
          type: "anime",
          hint: "Loosely based on historical events."
        },
        {
          words: "Asuka Langley Soryu",
          description: "A talented pilot who battles inner turmoil and monsters.",
          type: "character",
          hint: "Second child in 'Neon Genesis Evangelion.'"
        },
        {
          words: "Yu Yu Hakusho",
          description: "A delinquent teenager becomes a spirit detective.",
          type: "anime",
          hint: "Involves martial arts and supernatural themes."
        },
        {
          words: "Claymore",
          description: "Warriors fight against Yoma while retaining their humanity.",
          type: "anime",
          hint: "Female warriors are the main fighters."
        },
        {
          words: "Gajeel Redfox",
          description: "A tough and powerful dragon slayer known for his iron abilities.",
          type: "character",
          hint: "Initially an enemy, later joins the Fairy Tail Guild."
        }
      ],
        level4: [
        {
          words: "Matoi Ryuko",
          description: "A girl searching for her father's killer while wielding a scissor blade.",
          type: "character",
          hint: "Attends a school where clothing gives powers."
        },
        {
          words: "Baccano!",
          description: "A story set in the 1930s featuring immortals and gangsters.",
          type: "anime",
          hint: "Narrative jumps around in time."
        },
        {
          words: "Shiki",
          description: "A series that explores the conflict between humans and vampires.",
          type: "anime",
          hint: "Takes place in a rural town."
        },
        {
          words: "Shōya Ishida",
          description: "A former bully who seeks redemption after tormenting a deaf girl.",
          type: "character",
          hint: "Protagonist of 'A Silent Voice.'"
        },
        {
          words: "Paranoia Agent",
          description: "An exploration of societal anxieties through a series of attacks.",
          type: "anime",
          hint: "Involves a mysterious assailant named Lil' Slugger."
        },
        {
          words: "KonoSuba",
          description: "A comedic take on the isekai genre with a dysfunctional party.",
          type: "anime",
          hint: "Features a wizard, a knight, and a goddess."
        },
        {
          words: "Ainz Ooal Gown",
          description: "An overlord in a fantasy world seeking to understand his new reality.",
          type: "character",
          hint: "Formerly a player in a fantasy MMORPG."
        },
        {
          words: "Katanagatari",
          description: "A story about a quest to collect twelve legendary swords.",
          type: "anime",
          hint: "Features a unique art style and storytelling."
        },
        {
          words: "Kakegurui",
          description: "Students engage in high-stakes gambling at an elite academy.",
          type: "anime",
          hint: "Focuses on psychological manipulation and risk."
        },
        {
          words: "Kyouka Jirou",
          description: "A student with earphone jacks for quirk abilities.",
          type: "character",
          hint: "Member of Class 1-A in 'My Hero Academia.'"
        }
      ],
      level5: [
        {
          words: "Kyouko Kirigiri",
          description: "A detective skilled in solving mysteries and crimes.",
          type: "character",
          hint: "A key character in 'Danganronpa.'"
        },
        {
          words: "Gankutsuou",
          description: "A unique retelling of 'The Count of Monte Cristo' set in the future.",
          type: "anime",
          hint: "Known for its distinctive art style."
        },
        {
          words: "Shinsekai yori",
          description: "Set in a future where humanity possesses psychic powers.",
          type: "anime",
          hint: "Explores themes of ethics and society."
        },
        {
          words: "Kageyama Tobio",
          description: "A talented volleyball player striving for greatness.",
          type: "character",
          hint: "Protagonist of 'Haikyuu!!' known for his precision."
        },
        {
          words: "Dorohedoro",
          description: "A dark fantasy involving sorcerers and a man with a lizard head.",
          type: "anime",
          hint: "Mixes comedy, horror, and action."
        },
        {
          words: "Mushishi",
          description: "A contemplative series focusing on supernatural creatures called Mushi.",
          type: "anime",
          hint: "Follows a 'Mushi Master' in a tranquil world."
        },
        {
          words: "Kino's Journey",
          description: "A traveler explores diverse countries and their unique cultures.",
          type: "anime",
          hint: "Features a talking motorcycle named Hermes."
        },
        {
          words: "Kaguya Shinomiya",
          description: "A brilliant student council vice president with a complex love life.",
          type: "character",
          hint: "In 'Kaguya-sama: Love Is War.'"
        },
        {
          words: "Kyou no Go no Ni",
          description: "A comedic slice-of-life about two students and their daily lives.",
          type: "anime",
          hint: "Follows the misadventures of two classmates."
        },
        {
          words: "Guilty Crown",
          description: "In a dystopian future, a boy gains the power to draw out weapons from people.",
          type: "anime",
          hint: "Explores themes of rebellion and destiny."
        }
      ]
    }
  }

  const options = [
    {
      words: {
          character: [
              "Edward Elric",
              "Naruto Uzumaki",
              "Natsu Dragneel",
              "Kyouko Kirigiri",
              "Gajeel Redfox",
              "Rintarou Okabe",
              "Matoi Ryuko",
              "Erza Scarlet",
              "Kaguya Shinomiya",
              "Saber",
              "Asuka Langley Soryu",
              "Kyouka Jirou",
              "Ichigo Kurosaki",
              "Kageyama Tobio",
              "Yato",
              "Sh\u014dya Ishida",
              "Shinobu Kocho",
              "Ainz Ooal Gown",
              "Son Goku",
              "Monkey D. Luffy",
              "Saitama",
              "Gon Freecss"
          ],
          anime: [
              "Fullmetal Alchemist",
              "Paranoia Agent",
              "Mushishi",
              "Shiki",
              "Baccano!",
              "Attack on Titan",
              "Death Note",
              "Gankutsuou",
              "Shinsekai yori",
              "Vinland Saga",
              "My Hero Academia",
              "Naruto",
              "Hunter x Hunter",
              "Claymore",
              "Kakegurui",
              "Kyou no Go no Ni",
              "Guilty Crown",
              "Dragon Ball Z",
              "Kino's Journey",
              "Tokyo Ghoul",
              "Katanagatari",
              "KonoSuba",
              "Gurren Lagann",
              "Yu Yu Hakusho",
              "Dorohedoro",
              "Demon Slayer",
              "One Piece"
          ]
      }
  }
];

  module.exports = {data, options}