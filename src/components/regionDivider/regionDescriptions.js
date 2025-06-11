const regionDescriptions = {
  "The North": {
    image: `${process.env.PUBLIC_URL}/img/regions/thenorth.png`,
    description: "The North is the largest of the Seven Kingdoms, known for its vast icy landscapes, dense forests, and harsh winters. It is sparsely populated but rich in honor and tradition. The people of the North are resilient, loyal, and deeply tied to the old ways, worshipping the Old Gods in ancient godswoods. Its capital is Winterfell, home of House Stark.",
    borderColor: '#7f8c8d'
  },
  "The Westerlands": {
    image: `${process.env.PUBLIC_URL}/img/regions/thewesterlands.png`,
    description: "The Westerlands are wealthy and mountainous, rich in gold mines that have long sustained House Lannister’s power. With Casterly Rock as their stronghold, the Westerlands are known for their formidable military and opulent lifestyle. The people are proud and ambitious, often involved in the politics of the realm.",
    borderColor: '#c0392b'
  },
  "Dorne": {
    image: `${process.env.PUBLIC_URL}/img/regions/dorne.png`,
    description: "Located in the southernmost part of Westeros, Dorne is hot, dry, and culturally distinct. It is known for its spicy food, hot tempers, and liberal views on gender and inheritance. Ruled from Sunspear by House Martell, Dorne has a history of resisting outside rule and fiercely guarding its independence.",
    borderColor: '#e67e22'
  },
  "The Reach": {
    image: `${process.env.PUBLIC_URL}/img/regions/thereach.png`,
    description: "The Reach is a fertile and populous region, often referred to as the breadbasket of Westeros. Covered in lush fields and vineyards, it is ruled from Highgarden by House Tyrell. The Reach values beauty, chivalry, and courtly culture, and its knights are known for their honor and pageantry.",
    borderColor: '#27ae60'
  },
  "The Vale": {
    image: `${process.env.PUBLIC_URL}/img/regions/thevale.png`,
    description: "Nestled among the Mountains of the Moon, the Vale is known for its isolation and natural beauty. Ruled from the impregnable Eyrie by House Arryn, the Vale is home to noble families that value honor and tradition. Its knights are considered among the best in Westeros.",
    borderColor: '#2980b9'
  },
  "The Riverlands": {
    image: `${process.env.PUBLIC_URL}/img/regions/theriverlands.png`,
    description: "The Riverlands are centrally located and known for their fertile plains and many rivers. This strategic position has made them a frequent battleground in times of war. Ruled from Riverrun by House Tully, the Riverlands are a patchwork of loyalties and strong family ties.",
    borderColor: '#5dade2'
  },
  "The Crownlands": {
    image: `${process.env.PUBLIC_URL}/img/regions/thecrownlands.png`,
    description: "Surrounding the capital city of King’s Landing, the Crownlands are politically crucial to the realm. Though not especially large, they are home to the Iron Throne and thus wield immense influence. Historically ruled directly by the Targaryens and later the Baratheons, the region contains major ports and noble houses that support the crown.",
    borderColor: '#f5b7b1'
  },
  "The Stormlands": {
    image: `${process.env.PUBLIC_URL}/img/regions/thestormlands.png`,
    description: "The Stormlands are coastal and rugged, with frequent storms shaping both the landscape and its people. They are known for producing fierce warriors and hardy nobles. Ruled from Storm’s End by House Baratheon, the region prides itself on strength, defiance, and loyalty.",
    borderColor: '#f1c40f'
  },
  "The Neck": {
    image: `${process.env.PUBLIC_URL}/img/regions/theneck.png`,
    description: "The Neck is a narrow and marshy region that separates the North from the South. It is known for its treacherous bogs and mist-covered swamps, making travel and invasion difficult. The crannogmen, who inhabit this land, are secretive and live in harmony with the swamp. It is nominally ruled by House Reed of Greywater Watch.",
    borderColor: '#145a32'
  },
  "Iron Islands": {
    image: `${process.env.PUBLIC_URL}/img/regions/ironislands.png`,
    description: "The Iron Islands are a harsh and stormy archipelago in the western seas. The Ironborn, who inhabit them, are fierce seafarers and raiders who follow the Old Way, a culture built around strength, conquest, and reverence for the Drowned God. Ruled from Pyke by House Greyjoy, the islands are proud, independent, and often rebellious.",
    borderColor: '#2c3e50'
  },
    "Beyond the Wall": {
    image: `${process.env.PUBLIC_URL}/img/regions/beyondthewall.png`,
    description: "This icy land lies north of the Wall and is home to many mysterious and dangerous peoples and creatures. It is a realm of ancient magic, harsh wilderness, and the Free Folk (also known as Wildlings), who reject the rule of the Seven Kingdoms. The land is dominated by snow, mountains, and myth, including legends of White Walkers and giants.",
    borderColor: '#ecf0f1'
  },
  "No region": {
    image: `${process.env.PUBLIC_URL}/img/regions/noregion.png`,
    description: "These houses have no known or specified region in the records.",
    borderColor: '#9b59b6'
  }
};

export default regionDescriptions;