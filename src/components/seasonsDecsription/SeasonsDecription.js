import { Container, Row, Col, Image } from 'react-bootstrap';
import SeriesList from '../seriesList/SeriesList';
import { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import './SeasonsDescription.scss';

import gotImage1 from '../../resources/img/seasons/season1/season1pic.jpg';
import gotImage2 from '../../resources/img/seasons/season2/season2pic.jpg';
import gotImage3 from '../../resources/img/seasons/season3/season3pic.jpg';
import gotImage4 from '../../resources/img/seasons/season4/season4pic.jpg';
import gotImage5 from '../../resources/img/seasons/season5/season5pic.jpg';
import gotImage6 from '../../resources/img/seasons/season6/season6pic.jpg';
import gotImage7 from '../../resources/img/seasons/season7/season7pic.jpg';
import gotImage8 from '../../resources/img/seasons/season8/season8pic.jpg';
import EpisodeImages from './EpisodeImages'


const SeasonsDescription = () => {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(null);
  const [scrollToSeason, setScrollToSeason] = useState(null);

    const seasonsData = [
    {
      seasonName: 'Season 1',
      seasonDescription: "Westeros is gripped by political intrigue following the sudden death of the King's chief advisor. The Stark family is pulled into a dangerous game that will set the stage for the battles to come.",
      seasonImage: gotImage1,
      episodes: [
        { episodeName: "Winter Is Coming", episodeDescription: "Eddard 'Ned' Stark is asked by King Robert Baratheon to become the Hand of the King after the mysterious death of Jon Arryn. Jon Snow prepares to join the Night’s Watch. Across the Narrow Sea, Daenerys Targaryen is married off to the Dothraki warlord Khal Drogo.", episodeImage: EpisodeImages.se1.ep1 },
        { episodeName: "The Kingsroad", episodeDescription: "Ned sets off for King’s Landing with his daughters. Jon heads to the Wall. Tyrion joins him. Arya begins training in swordplay. Bran lies comatose after his fall.", episodeImage: EpisodeImages.se1.ep2 },
        { episodeName: "Lord Snow", episodeDescription: "Ned arrives at court and faces political intrigue. Jon struggles with training at Castle Black. Daenerys learns to assert herself among the Dothraki. Bran awakens, but cannot walk.", episodeImage: EpisodeImages.se1.ep3 },
        { episodeName: "Cripples, Bastards, and Broken Things", episodeDescription: "Tyrion shows kindness to Bran and is taken captive by Catelyn. Ned investigates Jon Arryn’s death. Jon defends Samwell Tarly at the Wall.", episodeImage: EpisodeImages.se1.ep4 },
        { episodeName: "The Wolf and the Lion", episodeDescription: "Ned discovers the truth about Jon Arryn’s death and the Lannisters’ secrets. Tensions escalate between the Starks and the Lannisters. Catelyn takes Tyrion to the Eyrie.", episodeImage: EpisodeImages.se1.ep5 },
        { episodeName: "A Golden Crown", episodeDescription: "Viserys demands his crown from Drogo. Ned asserts his authority as Hand. Tyrion secures his freedom through trial by combat. Bran rides again.", episodeImage: EpisodeImages.se1.ep6 },
        { episodeName: "You Win or You Die", episodeDescription: "Ned confronts Cersei about her children’s true parentage. King Robert dies. Jaime and Ned duel in the streets of King’s Landing. Jon prepares to take his vows.", episodeImage: EpisodeImages.se1.ep7 },
        { episodeName: "The Pointy End", episodeDescription: "Ned is imprisoned. The Starks retaliate in the North. Jon defends the Wall from an undead threat. Daenerys is nearly killed by an assassin.", episodeImage: EpisodeImages.se1.ep8 },
        { episodeName: "Baelor", episodeDescription: "Robb wins his first battle and captures Jaime. Jon struggles with his loyalty to the Night’s Watch. Daenerys tries to save Drogo with blood magic. Ned faces execution.", episodeImage: EpisodeImages.se1.ep9 },
        { episodeName: "Fire and Blood", episodeDescription: "The realm reacts to Ned’s death. Robb is named King in the North. Daenerys loses Drogo but gives birth to dragons. Jon chooses to stay with the Night’s Watch.", episodeImage: EpisodeImages.se1.ep10 }

        
      ]
    },
        {
      seasonName: 'Season 2',
      seasonDescription: "As the throne becomes contested, several claimants rise to power, plunging the realm into chaos. Meanwhile, across the sea, a young heir to an ancient dynasty begins to gain influence.",
      seasonImage: gotImage2,
      episodes: [
        { episodeName: "The North Remembers", episodeDescription: "Tyrion arrives in King’s Landing to serve as Hand of the King. Stannis Baratheon claims the Iron Throne and reveals the power of Melisandre. Robb Stark sends terms to the Lannisters. Daenerys struggles to survive in the Red Waste.", episodeImage: EpisodeImages.se2.ep1 },
        { episodeName: "The Night Lands", episodeDescription: "Arya travels north with Gendry. The Night’s Watch continues their mission beyond the Wall. Theon Greyjoy returns to the Iron Islands. Tyrion clashes with Cersei over power in the capital.", episodeImage: EpisodeImages.se2.ep2 },
        { episodeName: "What Is Dead May Never Die", episodeDescription: "Tyrion plays the political game and uncovers spies in the court. Catelyn seeks an alliance with Renly Baratheon. Theon pledges loyalty to his father, Balon Greyjoy. Arya hides her identity from Lannister soldiers.", episodeImage: EpisodeImages.se2.ep3 },
        { episodeName: "Garden of Bones", episodeDescription: "Robb wins a major victory and meets Talisa. Joffrey’s cruelty worsens. Tyrion saves Sansa from his wrath. Daenerys reaches the gates of Qarth. Stannis and Renly clash over their claims.", episodeImage: EpisodeImages.se2.ep4 },
        { episodeName: "The Ghost of Harrenhal", episodeDescription: "Renly is killed by a shadow creature. Catelyn flees with Brienne. Arya serves Tywin Lannister at Harrenhal. The Night’s Watch meets Qhorin Halfhand. Daenerys gains access to Qarth.", episodeImage: EpisodeImages.se2.ep5 },
        { episodeName: "The Old Gods and the New", episodeDescription: "Theon captures Winterfell. Jon ventures deeper beyond the Wall. Dany faces political games in Qarth. A riot breaks out in King’s Landing. Arya uses Jaqen’s help to eliminate threats.", episodeImage: EpisodeImages.se2.ep6 },
        { episodeName: "A Man Without Honor", episodeDescription: "Jaime tries to escape captivity. Catelyn confronts him. Jon captures a wildling woman named Ygritte. Theon hunts for Bran and Rickon. Daenerys’s dragons are stolen.", episodeImage: EpisodeImages.se2.ep7 },
        { episodeName: "The Prince of Winterfell", episodeDescription: "Stannis sails toward King’s Landing. Theon’s rule in Winterfell crumbles. Robb learns of betrayal. Jon is captured by the wildlings. Arya escapes Harrenhal with Jaqen’s help.", episodeImage: EpisodeImages.se2.ep8 },
        { episodeName: "Blackwater", episodeDescription: "Stannis attacks King’s Landing by sea. Tyrion leads the defense and uses wildfire in a devastating counterattack. Cersei prepares to poison herself and her son. Tywin’s army arrives in time to save the city.", episodeImage: EpisodeImages.se2.ep9 },
        { episodeName: "Valar Morghulis", episodeDescription: "Tyrion wakes wounded and discarded. Joffrey rewards the Tyrells. Daenerys reclaims her dragons. Jon proves himself to the wildlings. Arya is given a coin and phrase by Jaqen: 'Valar Morghulis.'", episodeImage: EpisodeImages.se2.ep10 }
      ]
    },
        {
      seasonName: 'Season 3',
      seasonDescription: "Alliances are forged and betrayed as families wage war for control. In the North, a growing threat begins to stir, largely ignored by the rest of the realm.",
      seasonImage: gotImage3,
      episodes: [
        { episodeName: "Valar Dohaeris", episodeDescription: "Jon Snow meets the King-Beyond-the-Wall, Mance Rayder. Tyrion demands his reward. Davos is rescued. Daenerys sails for Slaver's Bay and meets the Unsullied.", episodeImage: EpisodeImages.se3.ep1 },
        { episodeName: "Dark Wings, Dark Words", episodeDescription: "Bran meets the mysterious Reeds. Arya continues her journey with Gendry and Hot Pie. Theon is in unknown captivity. Margaery gains popularity in King’s Landing.", episodeImage: EpisodeImages.se3.ep2 },
        { episodeName: "Walk of Punishment", episodeDescription: "Tyrion is made Master of Coin. Jaime and Brienne are captured. Daenerys negotiates for the Unsullied. The Night’s Watch faces mutiny at Craster’s Keep.", episodeImage: EpisodeImages.se3.ep3 },
        { episodeName: "And Now His Watch Is Ended", episodeDescription: "Craster and the Lord Commander are killed. Arya joins the Brotherhood without Banners. Varys reveals his past. Daenerys sacks Astapor, freeing the Unsullied.", episodeImage: EpisodeImages.se3.ep4 },
        { episodeName: "Kissed by Fire", episodeDescription: "The Hound fights Beric Dondarrion. Jon breaks his vows with Ygritte. Robb executes Rickard Karstark. Jaime tells Brienne the truth about the Mad King.", episodeImage: EpisodeImages.se3.ep5 },
        { episodeName: "The Climb", episodeDescription: "Jon and Ygritte climb the Wall. Melisandre meets the Brotherhood. Tyrion and Cersei are forced into political marriages. Littlefinger reveals his ambitions.", episodeImage: EpisodeImages.se3.ep6 },
        { episodeName: "The Bear and the Maiden Fair", episodeDescription: "Jon and the wildlings continue south. Theon endures more torture. Robb seeks the Freys’ alliance. Daenerys arrives at Yunkai. Jaime returns to rescue Brienne from a bear pit.", episodeImage: EpisodeImages.se3.ep7 },
        { episodeName: "Second Sons", episodeDescription: "Tyrion weds Sansa. Sam kills a White Walker. Daenerys wins over the mercenary group 'Second Sons'. Stannis considers a sacrifice.", episodeImage: EpisodeImages.se3.ep8 },
        { episodeName: "The Rains of Castamere", episodeDescription: "Robb and Catelyn attend the Red Wedding. Betrayal by the Freys leads to a brutal massacre. Jon escapes from the wildlings. Bran unlocks his warging abilities.", episodeImage: EpisodeImages.se3.ep9 },
        { episodeName: "Mhysa", episodeDescription: "Bran continues his journey beyond the Wall. Arya seeks vengeance. Jon returns to the Wall. Daenerys is hailed as a liberator in Yunkai and called 'Mhysa' (Mother).", episodeImage: EpisodeImages.se3.ep10 }
      ]
    },
        {
      seasonName: 'Season 4',
      seasonDescription: "Events in the capital reach a turning point with shocking trials and duels. In the East, a rising leader faces challenges while liberating enslaved cities.",
      seasonImage: gotImage4,
      episodes: [
        { episodeName: "Two Swords", episodeDescription: "Tywin Lannister reforges Ned Stark’s greatsword. Arya reunites with her sword, Needle. Jon Snow faces the Night’s Watch’s scrutiny. Daenerys marches toward Meereen.", episodeImage: EpisodeImages.se4.ep1 },
        { episodeName: "The Lion and the Rose", episodeDescription: "King Joffrey and Margaery are wed. Tyrion gives a special gift. Ramsey’s cruelty intensifies. Joffrey is poisoned during the feast, shocking the realm.", episodeImage: EpisodeImages.se4.ep2 },
        { episodeName: "Breaker of Chains", episodeDescription: "Tyrion is arrested for Joffrey’s death. Sansa escapes King’s Landing. Sam sends Gilly away. Daenerys begins her siege of Meereen.", episodeImage: EpisodeImages.se4.ep3 },
        { episodeName: "Oathkeeper", episodeDescription: "Jaime gives Brienne a new sword and a mission. Daenerys takes Meereen and punishes the masters. The Night’s Watch faces growing threats. A White Walker secret is revealed.", episodeImage: EpisodeImages.se4.ep4 },
        { episodeName: "First of His Name", episodeDescription: "Tommen is crowned king. Cersei plots alliances. Sansa reaches the Eyrie with Littlefinger. Daenerys decides to stay and rule in Meereen.", episodeImage: EpisodeImages.se4.ep5 },
        { episodeName: "The Laws of Gods and Men", episodeDescription: "Stannis seeks a loan from the Iron Bank. Theon is used as a pawn. Tyrion stands trial for Joffrey’s murder and delivers a defiant speech.", episodeImage: EpisodeImages.se4.ep6 },
        { episodeName: "Mockingbird", episodeDescription: "Tyrion chooses trial by combat. Arya and the Hound grow closer. Brienne and Pod search for Sansa. Littlefinger makes a deadly move in the Eyrie.", episodeImage: EpisodeImages.se4.ep7 },
        { episodeName: "The Mountain and the Viper", episodeDescription: "Tyrion’s fate rests on a duel: Oberyn Martell versus Ser Gregor Clegane. The fight ends in a brutal and shocking conclusion.", episodeImage: EpisodeImages.se4.ep8 },
        { episodeName: "The Watchers on the Wall", episodeDescription: "The Night’s Watch defends Castle Black against a full-scale attack by Mance Rayder’s wildling army. Jon Snow proves himself as a leader.", episodeImage: EpisodeImages.se4.ep9 },
        { episodeName: "The Children", episodeDescription: "Jon negotiates with Mance. Stannis arrives north of the Wall. Bran reaches the Three-Eyed Raven. Arya sets sail for Braavos. Tyrion takes bloody revenge and flees Westeros.", episodeImage: EpisodeImages.se4.ep10 }
      ]
    },
        {
      seasonName: 'Season 5',
      seasonDescription: "Religious movements begin reshaping power in the capital. Northern territories fall into turmoil, while leadership in the East is tested by rebellion and unrest.",
      seasonImage: gotImage5,
      episodes: [
        { episodeName: "The Wars to Come", episodeDescription: "Cersei reflects on a prophecy. Tyrion and Varys arrive in Essos. Jon Snow negotiates with Mance Rayder. Daenerys faces unrest in Meereen.", episodeImage: EpisodeImages.se5.ep1 },
        { episodeName: "The House of Black and White", episodeDescription: "Arya arrives in Braavos. Jaime prepares for a secret mission. Dorne reacts to Oberyn’s death. Daenerys makes a controversial decision in Meereen.", episodeImage: EpisodeImages.se5.ep2 },
        { episodeName: "High Sparrow", episodeDescription: "Tommen marries Margaery. Cersei allies with the Faith Militant. Arya struggles with letting go of her past. Jon Snow begins leadership as Lord Commander.", episodeImage: EpisodeImages.se5.ep3 },
        { episodeName: "Sons of the Harpy", episodeDescription: "The Sons of the Harpy rise against Daenerys. Jaime and Bronn arrive in Dorne. The Faith Militant causes chaos in King’s Landing. Jon refuses Stannis’s offer.", episodeImage: EpisodeImages.se5.ep4 },
        { episodeName: "Kill the Boy", episodeDescription: "Jon makes a hard choice to ally with the Wildlings. Daenerys retaliates harshly in Meereen. Brienne seeks Sansa. Tyrion and Jorah travel through Valyria.", episodeImage: EpisodeImages.se5.ep5 },
        { episodeName: "Unbowed, Unbent, Unbroken", episodeDescription: "Arya learns to become 'no one'. Sansa faces danger at Winterfell. Tyrion is captured. Jaime and Bronn infiltrate the Water Gardens.", episodeImage: EpisodeImages.se5.ep6 },
        { episodeName: "The Gift", episodeDescription: "Jon departs for Hardhome. Sansa seeks help. Tyrion meets Daenerys. Cersei’s schemes begin to unravel as the Faith takes her prisoner.", episodeImage: EpisodeImages.se5.ep7 },
        { episodeName: "Hardhome", episodeDescription: "Jon and Tormund meet the Free Folk at Hardhome. A massive White Walker attack changes everything. Arya continues her training. Cersei suffers in captivity.", episodeImage: EpisodeImages.se5.ep8 },
        { episodeName: "The Dance of Dragons", episodeDescription: "Stannis makes a devastating sacrifice. Jon returns to the Wall. In Meereen, Daenerys faces rebellion in the fighting pits — and flies off on Drogon.", episodeImage: EpisodeImages.se5.ep9 },
        { episodeName: "Mother’s Mercy", episodeDescription: "Cersei faces her punishment. Arya takes deadly vengeance, with consequences. Jon Snow is betrayed by the Night’s Watch. Stannis meets his end.", episodeImage: EpisodeImages.se5.ep10 }
      ]
    },
        {
      seasonName: 'Season 6',
      seasonDescription: "Lost hopes resurface as long-held secrets come to light. Major battles unfold, shifting the balance of power, and the past begins to define the future of Westeros.",
      seasonImage: gotImage6,
      episodes: [
        { episodeName: "The Red Woman", episodeDescription: "After Jon Snow's death, Davos and his allies prepare for a fight. Sansa and Theon flee Winterfell. Cersei mourns. Melisandre reveals a shocking truth.", episodeImage: EpisodeImages.se6.ep1 },
        { episodeName: "Home", episodeDescription: "Bran trains with the Three-Eyed Raven. Tyrion frees Daenerys's dragons. Ramsay seizes control of House Bolton. Jon Snow returns to life.", episodeImage: EpisodeImages.se6.ep2 },
        { episodeName: "Oathbreaker", episodeDescription: "Jon executes traitors and leaves the Night's Watch. Sam and Gilly journey to Horn Hill. Bran sees the Tower of Joy. Arya regains her sight.", episodeImage: EpisodeImages.se6.ep3 },
        { episodeName: "Book of the Stranger", episodeDescription: "Sansa reunites with Jon at Castle Black. Tyrion negotiates peace in Meereen. Littlefinger returns to the Vale. Daenerys emerges unburnt from the flames.", episodeImage: EpisodeImages.se6.ep4 },
        { episodeName: "The Door", episodeDescription: "Bran's visions reveal the origin of the White Walkers. Arya faces a choice. The Night King attacks. Hodor sacrifices himself — and we learn why.", episodeImage: EpisodeImages.se6.ep5 },
        { episodeName: "Blood of My Blood", episodeDescription: "Bran and Meera flee danger. Sam returns home. Tommen allies with the High Sparrow. Arya rejects the Faceless Men. Benjen Stark returns.", episodeImage: EpisodeImages.se6.ep6 },
        { episodeName: "The Broken Man", episodeDescription: "The Hound is revealed to be alive. Jon and Sansa seek support for their army. Jaime confronts the Blackfish at Riverrun. Arya is targeted in Braavos.", episodeImage: EpisodeImages.se6.ep7 },
        { episodeName: "No One", episodeDescription: "Arya fights the Waif. Jaime negotiates with the Blackfish. Cersei faces new restrictions. Tyrion tries to bring laughter to Meereen.", episodeImage: EpisodeImages.se6.ep8 },
        { episodeName: "Battle of the Bastards", episodeDescription: "Jon Snow and Ramsay Bolton battle for Winterfell. Sansa brings in the knights of the Vale. Daenerys retakes control in Meereen with fire and fury.", episodeImage: EpisodeImages.se6.ep9 },
        { episodeName: "The Winds of Winter", episodeDescription: "Cersei seizes the Iron Throne through destruction. Jon is declared King in the North. Arya avenges her family. Daenerys sails for Westeros.", episodeImage: EpisodeImages.se6.ep10 }
      ]
    },
        {
      seasonName: 'Season 7',
      seasonDescription: "The threat beyond the Wall grows undeniable. Former enemies consider uneasy alliances as ancient forces move toward confrontation.",
      seasonImage: gotImage7,
      episodes: [
        { episodeName: "Dragonstone", episodeDescription: "Daenerys arrives at Dragonstone and begins plotting her conquest. Jon Snow calls all Northern lords to focus on the threat beyond the Wall. Cersei seeks alliances.", episodeImage: EpisodeImages.se7.ep1 },
        { episodeName: "Stormborn", episodeDescription: "Daenerys strategizes her next move and meets Melisandre. Arya learns Jon is King in the North. Euron attacks Yara’s fleet. Jon leaves for Dragonstone.", episodeImage: EpisodeImages.se7.ep2 },
        { episodeName: "The Queen’s Justice", episodeDescription: "Jon meets Daenerys. Tyrion tries to broker peace. Cersei takes revenge on the Sand Snakes. Olenna Tyrell delivers a final blow to House Lannister.", episodeImage: EpisodeImages.se7.ep3 },
        { episodeName: "The Spoils of War", episodeDescription: "Brienne trains with Arya. Daenerys attacks the Lannister army with Drogon. Jaime narrowly survives a fiery onslaught. Arya returns to Winterfell.", episodeImage: EpisodeImages.se7.ep4 },
        { episodeName: "Eastwatch", episodeDescription: "Daenerys demands fealty from defeated soldiers. Jon assembles a team to capture a wight beyond the Wall. Gendry returns. Cersei reveals she is pregnant.", episodeImage: EpisodeImages.se7.ep5 },
        { episodeName: "Beyond the Wall", episodeDescription: "Jon’s group captures a wight, but faces deadly odds. Daenerys flies north with her dragons. The Night King kills Viserion and resurrects him.", episodeImage: EpisodeImages.se7.ep6 },
        { episodeName: "The Dragon and the Wolf", episodeDescription: "Leaders meet in King's Landing to discuss the threat in the North. Jon and Daenerys become closer. The Wall falls as the Night King attacks with undead Viserion.", episodeImage: EpisodeImages.se7.ep7 }
      ]
    },
        {
      seasonName: 'Season 8',
      seasonDescription: "The saga reaches its epic conclusion. Monumental battles, difficult choices, and the fate of the Seven Kingdoms are decided once and for all.",
      seasonImage: gotImage8,
      episodes: [
        { episodeName: "Winterfell", episodeDescription: "Jon and Daenerys arrive at Winterfell and prepare for the coming war. Arya reunites with old friends. Tensions rise between Daenerys and Sansa.", episodeImage: EpisodeImages.se8.ep1 },
        { episodeName: "A Knight of the Seven Kingdoms", episodeDescription: "The characters await the Night King’s arrival. Jaime is forgiven. Brienne is knighted. Emotional moments are shared before the battle.", episodeImage: EpisodeImages.se8.ep2 },
        { episodeName: "The Long Night", episodeDescription: "The Battle of Winterfell begins. Arya defeats the Night King in a shocking twist, ending the threat of the White Walkers.", episodeImage: EpisodeImages.se8.ep3 },
        { episodeName: "The Last of the Starks", episodeDescription: "The survivors mourn and regroup. Daenerys begins to lose support. Rhaegal is killed. Missandei is executed by Cersei.", episodeImage: EpisodeImages.se8.ep4 },
        { episodeName: "The Bells", episodeDescription: "Daenerys attacks King’s Landing and destroys the city despite its surrender. Jaime and Cersei die together. Tyrion is devastated.", episodeImage: EpisodeImages.se8.ep5 },
        { episodeName: "The Iron Throne", episodeDescription: "The war ends. Daenerys is killed by Jon Snow. Bran is elected king. Arya sails west. Sansa becomes Queen in the North.", episodeImage: EpisodeImages.se8.ep6 }

      ]
    }
    
  ];


 // Масив refs для кожного сезону
  const seasonRefs = useRef([]);

  // ref для блоку серій (щоб скролити до початку)
  const seriesRef = useRef(null);

  // Скрол до блоку серій при відкритті сезону
  useEffect(() => {
    if (selectedSeasonIndex !== null && seriesRef.current) {
      seriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedSeasonIndex]);

  // Скрол назад до сезону при закритті списку серій
  useEffect(() => {
    if (selectedSeasonIndex === null && scrollToSeason !== null) {
      // Затримка, щоб DOM встиг оновитись
      setTimeout(() => {
        window.scrollTo({
          top: scrollToSeason,
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [selectedSeasonIndex, scrollToSeason]);

  const openSeriesHandler = (index) => {
    if (seasonRefs.current[index]) {
      setScrollToSeason(seasonRefs.current[index].offsetTop);
    }
    setSelectedSeasonIndex(index);
  };

  const backToSeasonsHandler = () => {
    setSelectedSeasonIndex(null);
  };

  if (selectedSeasonIndex !== null) {
    const selectedSeason = seasonsData[selectedSeasonIndex];
    return (
      <div ref={seriesRef}>
        <SeriesList
          episodes={selectedSeason.episodes}
          seasonName={selectedSeason.seasonName}
          onBack={backToSeasonsHandler}
        />
      </div>
    );
  }

  return (
    <Container className="seasons-description-container">
      {seasonsData.map((season, index) => (
        <Row
          className="align-items-center my-5"
          key={index}
          ref={(el) => (seasonRefs.current[index] = el)}
        >
          <Col md={7}>
            <Image
              src={season.seasonImage}
              alt={season.seasonName}
              className="season-image"
              fluid
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </Col>
          <Col md={5}>
            <div className="season-text text-white">
              <h2>{season.seasonName}</h2>
              <p>{season.seasonDescription}</p>
            <div className="d-flex justify-content-center">
              <Button variant="dark" onClick={() => openSeriesHandler(index)}>
                  Series
              </Button>
                </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SeasonsDescription;