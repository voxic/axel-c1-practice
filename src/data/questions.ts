/**
 * Original practice items authored for Axel C1.
 * They are NOT Trafikverket / Transportstyrelsen exam questions.
 * Rules cited here follow commonly published Swedish / EU C1 facts
 * (körkortsklasser, Trafikförordningen, EU 561/2006, EN 12195).
 * Uncertain edge cases were omitted rather than invented.
 */
import type { Question } from '../types'

export const questions: Question[] = [
  // --- Behörighet & fordon ---
  {
    id: 'q-beh-01',
    topicId: 'behorighet',
    prompt:
      'Vilken är den högsta tillåtna totalvikten för ett fordon som får köras med behörighet C1?',
    options: ['3 500 kg', '7 500 kg', '12 000 kg', 'Ingen övre gräns'],
    correctIndex: 1,
    explanation:
      'C1 gäller lastbil med totalvikt över 3 500 kg men högst 7 500 kg. 12 000 kg är den sammanlagda gränsen för C1E (bil + släp).',
  },
  {
    id: 'q-beh-02',
    topicId: 'behorighet',
    prompt:
      'Hur tungt släpfordon får du koppla med enbart C1 (utan släpvagnsbehörighet E)?',
    options: [
      'Högst 750 kg totalvikt',
      'Högst 3 500 kg totalvikt',
      'Så tungt släp du vill, om ekipaget stannar under 7 500 kg',
      'Inget släp alls',
    ],
    correctIndex: 0,
    explanation:
      'Med C1 får släpets totalvikt vara högst 750 kg. Tyngre släp kräver C1E (med extra viktregler) eller annan E-behörighet.',
  },
  {
    id: 'q-beh-03',
    topicId: 'behorighet',
    prompt: 'Vad stämmer om behörighet C jämfört med C1?',
    options: [
      'C har samma 7 500 kg-tak som C1',
      'C gäller lastbil över 3 500 kg utan C1:s 7 500 kg-tak',
      'C får alltid koppla släp över 750 kg',
      'C ersätter kravet på körkortstillstånd grupp 2',
    ],
    correctIndex: 1,
    explanation:
      'C täcker tyngre lastbilar utan 7 500 kg-taket. Släp över 750 kg kräver fortfarande CE. Grupp 2-tillstånd behövs för båda.',
  },
  {
    id: 'q-beh-04',
    topicId: 'behorighet',
    prompt: 'Vad gäller för C1E utöver ett släp tyngre än 750 kg?',
    options: [
      'Ingen extra viktgräns utöver C1',
      'Bil + släp högst 12 000 kg, och släpets totalvikt får inte överstiga bilens tjänstevikt',
      'Endast släpets tjänstevikt räknas',
      'C1E är identiskt med CE',
    ],
    correctIndex: 1,
    explanation:
      'C1E har två extra tak: sammanlagd totalvikt högst 12 000 kg, och släpets totalvikt får inte överstiga dragbilens tjänstevikt. CE är en tyngre behörighet.',
  },
  {
    id: 'q-beh-05',
    topicId: 'behorighet',
    prompt: 'Vad täcker behörighet B som du redan har?',
    options: [
      'Lastbil med totalvikt högst 7 500 kg',
      'Personbil eller lätt lastbil med totalvikt högst 3 500 kg',
      'Alla lastbilar om släpet är under 750 kg',
      'Samma fordon som C1, men bara privat',
    ],
    correctIndex: 1,
    explanation:
      'B stannar på 3 500 kg totalvikt. En medeltung lastbil över det kräver minst C1, även om du bara kör privat.',
  },
  {
    id: 'q-beh-06',
    topicId: 'behorighet',
    prompt: 'Varför krävs körkortstillstånd grupp 2 inför C1?',
    options: [
      'Det ersätter det praktiska körprovet',
      'Grupp 2 har högre medicinska krav än B (grupp 1)',
      'Det är bara ett kvitto på att du betalat Trafikverket',
      'Det ger automatiskt C1E',
    ],
    correctIndex: 1,
    explanation:
      'Grupp 2 (C1, C, D1, D och E-varianter) har strängare hälsokrav, bland annat syn och vissa sjukdomar. Tillståndet krävs för att börja utbildningen — inte själva körkortet.',
  },
  {
    id: 'q-beh-07',
    topicId: 'behorighet',
    prompt:
      'Ett ekipage väger 6 800 kg (lastbil C1) plus ett släp med totalvikt 1 400 kg. Vilken behörighet behövs minst?',
    options: [
      'B räcker',
      'C1 räcker',
      'Minst C1E, och bara om 12 000 kg-taket och tjänsteviktregeln hålls',
      'YKB i stället för släpvagnsbehörighet',
    ],
    correctIndex: 2,
    explanation:
      'Släpet är över 750 kg, så C1 räcker inte. C1E kan räcka om sammanlagd totalvikt ≤ 12 000 kg och släpet inte är tyngre än bilens tjänstevikt.',
  },
  {
    id: 'q-beh-08',
    topicId: 'behorighet',
    prompt: 'Från vilken ålder kan du i normalfallet ta C1 i Sverige?',
    options: ['16 år', '18 år', '21 år', '24 år'],
    correctIndex: 1,
    explanation:
      'C1 kan tas från 18 år. Högre åldersgränser hör oftare ihop med D / vissa yrkeskrav — inte med själva C1-behörigheten.',
  },
  {
    id: 'q-beh-09',
    topicId: 'behorighet',
    prompt: 'Vad är YKB i förhållande till C1-körkortet?',
    options: [
      'YKB är samma sak som C1E',
      'YKB är yrkeskompetensbevis för yrkestrafik — inte själva C1-behörigheten',
      'YKB krävs alltid för att övningsköra C1',
      'YKB ersätter läkarintyg grupp 2',
    ],
    correctIndex: 1,
    explanation:
      'C1 är fordonbehörigheten. YKB är ett separat yrkeskrav för många gods- och persontransporter. Det här träningsmaterialet täcker inte YKB.',
  },

  // --- Fordonskännedom & bromsar ---
  {
    id: 'q-for-01',
    topicId: 'fordon',
    prompt: 'Vad betyder totalvikt på registreringsbeviset?',
    options: [
      'Fordonets vikt utan last och förare',
      'Högsta tillåtna vikt för fordonet inklusive last',
      'Vikten just nu på vågen',
      'Enbart lastens vikt',
    ],
    correctIndex: 1,
    explanation:
      'Totalvikt är den högsta vikt fordonet får ha lastat. Aktuell vikt kallas bruttovikt och måste ligga under totalvikten.',
  },
  {
    id: 'q-for-02',
    topicId: 'fordon',
    prompt: 'Hur får du ungefärlig nyttolast / lastförmåga?',
    options: [
      'Totalvikt minus tjänstevikt',
      'Tjänstevikt minus bruttovikt',
      'Bara genom att gissa efter fjädringen',
      'Axeltryck gånger antal hjul',
    ],
    correctIndex: 0,
    explanation:
      'Nyttolasten är i praktiken totalvikt minus tjänstevikt (med reservation för hur tjänstevikten är definierad). Gissning efter fjädring är inte godkänt.',
  },
  {
    id: 'q-for-03',
    topicId: 'fordon',
    prompt: 'Vad är bruttovikt?',
    options: [
      'Samma sak som tjänstevikt',
      'Fordonets faktiska vikt just nu, inklusive last',
      'Högsta tillåtna axeltryck',
      'Vikten enligt hastighetsskylten',
    ],
    correctIndex: 1,
    explanation:
      'Bruttovikt = vad ekipaget faktiskt väger i stunden. Den får inte överstiga totalvikt eller vägens skyltade viktgränser.',
  },
  {
    id: 'q-for-04',
    topicId: 'fordon',
    prompt:
      'Varför ska kondensvatten tappas ur tryckluftsbehållare på fordon med tryckluftsbromsar?',
    options: [
      'För att sänka tjänstevikten',
      'Vatten kan frysa eller ge sämre bromsverkan och korrosion',
      'Det krävs bara på personbilar',
      'Det ökar AdBlue-förbrukningen annars',
    ],
    correctIndex: 1,
    explanation:
      'Fukt i systemet kan frysa ventiler vintertid, ge sämre tryck och rosta tankar. Daglig tillsyn på tunga fordon inkluderar ofta avtappning.',
  },
  {
    id: 'q-for-05',
    topicId: 'fordon',
    prompt: 'Vad är färdbromsens uppgift?',
    options: [
      'Enbart hålla fordonet stilla när det är parkerat',
      'Sänka farten och stanna det rullande fordonet',
      'Ersätta motorbroms i nedförsbacke',
      'Låsa släpets hjul automatiskt vid 90 km/h',
    ],
    correctIndex: 1,
    explanation:
      'Färdbromsen är den vanliga fotbromsen. Parkeringsbromsen håller stillastående fordon. Motorbroms / retarder avlastar färdbromsen i långa backar.',
  },
  {
    id: 'q-for-06',
    topicId: 'fordon',
    prompt:
      'Du ska köra lång nedförsbacke med lastad C1. Vad är mest rätt?',
    options: [
      'Håll färdbromsen lätt nedtryckt hela vägen',
      'Använd motorbroms / låg växel och spara färdbromsen till mer korta ingrepp',
      'Lägg i friläge för att spara bränsle',
      'Stäng av motorn så att den inte överhettas',
    ],
    correctIndex: 1,
    explanation:
      'Kontinuerlig färdbroms kan överhettas (fading). Låg växel / motorbroms håller farten. Friläge eller avstängd motor tar bort motorbroms och styrservo-stöd.',
  },
  {
    id: 'q-for-07',
    topicId: 'fordon',
    prompt:
      'Hur påverkas bromssträckan ungefär om du dubblar farten (samma last, samma väg)?',
    options: [
      'Den blir ungefär dubbelt så lång',
      'Den blir ungefär fyra gånger så lång',
      'Den påverkas inte av farten, bara av vikten',
      'Den halveras tack vare ABS',
    ],
    correctIndex: 1,
    explanation:
      'Rörelseenergin växer med farten i kvadrat. Dubbel fart ger ungefär fyrdubbel bromssträcka. Högre vikt ökar den ytterligare. ABS hjälper styrbarhet, inte fysiken.',
  },
  {
    id: 'q-for-08',
    topicId: 'fordon',
    prompt:
      'Lufttrycket i tryckluftsbromsarna är för lågt innan du kör. Vad gör du?',
    options: [
      'Kör iväg försiktigt, trycket byggs upp i farten',
      'Vänta tills systemet har arbetstryck och varningslampan släckts',
      'Dra åt parkeringsbromsen hårdare som kompensation',
      'Koppla ur ABS så att bromsarna tar tidigare',
    ],
    correctIndex: 1,
    explanation:
      'Utan tillräckligt tryck kan färdbroms och släpbroms (om släp finns) fungera dåligt. Starta inte förrän systemet är redo.',
  },

  // --- Lastsäkring & vikter ---
  {
    id: 'q-las-01',
    topicId: 'lastsakring',
    prompt: 'Vad krävs av lasten enligt grundregeln i trafiken?',
    options: [
      'Den får glida lite om du kör under 50 km/h',
      'Den ska vara placerad och säkrad så att den inte kan förskjutas, falla av eller skada någon',
      'Surrning krävs bara på motorväg',
      'Det räcker att lastbilsflaket har kapell',
    ],
    correctIndex: 1,
    explanation:
      'Trafikförordningen kräver att lasten inte kan skada personer eller egendom, falla av eller skymma ljus och skyltar. Kapell är inte lastsäkring i sig.',
  },
  {
    id: 'q-las-02',
    topicId: 'lastsakring',
    prompt:
      'Vilken framåtriktad kraft används ofta som planeringsnivå vid lastsäkring (EN 12195)?',
    options: ['0,2 g', '0,5 g', '0,8 g', '2,0 g'],
    correctIndex: 2,
    explanation:
      'En vanlig EU-baslinje är 0,8 g framåt samt 0,5 g bakåt och åt sidorna. En hård inbromsning kan alltså motsvara 80 % av lastens vikt framåt.',
  },
  {
    id: 'q-las-03',
    topicId: 'lastsakring',
    prompt: 'Vad menas med spärrning som lastsäkringsmetod?',
    options: [
      'Att spegla omkörande fordon',
      'Att lasten blockeras mot front, väggar eller annan last så den inte kan glida',
      'Att bara täcka lasten med presenning',
      'Att sänka däcktrycket så flaket lutar inåt',
    ],
    correctIndex: 1,
    explanation:
      'Spärrning (blocking) tar upp kraft genom kontakt mot en stadig struktur. Presenning skyddar mot väder, den spärrar inte.',
  },
  {
    id: 'q-las-04',
    topicId: 'lastsakring',
    prompt: 'Var bör lastens tyngdpunkt ligga?',
    options: [
      'Så högt som möjligt för bättre markfrigångskänsla',
      'Lågt och så centrerat som möjligt över axlarna',
      'Helt bakom bakaxeln för att avlasta framhjulen',
      'Spelar ingen roll så länge totalvikten hålls',
    ],
    correctIndex: 1,
    explanation:
      'Hög eller sidoförskjuten tyngdpunkt ökar vältningsrisk och kan överbelasta en axel även när totalvikten ser bra ut.',
  },
  {
    id: 'q-las-05',
    topicId: 'lastsakring',
    prompt:
      'Totalvikten hålls, men framaxeln är över sitt tillåtna axeltryck. Är det godkänt?',
    options: [
      'Ja, bara totalvikten räknas',
      'Nej, varje axel och boggie har egna gränser',
      'Ja, om du kör under 50 km/h',
      'Ja, om vägen saknar C8-märke',
    ],
    correctIndex: 1,
    explanation:
      'Både fordonets och vägens axel-/boggitryck måste hållas. Fel lastfördelning kan göra ett “lagligt tungt” ekipage olagligt på en axel.',
  },
  {
    id: 'q-las-06',
    topicId: 'lastsakring',
    prompt: 'Vad är surrning?',
    options: [
      'Att lasta så tätt att friktion räcker som enda metod i alla fall',
      'Att spänna last med band, kätting eller liknande så den hålls mot flaket',
      'Att koppla släp med rätt kultryck',
      'Att märka utskjutande last med röd flagga enbart',
    ],
    correctIndex: 1,
    explanation:
      'Surrning (lashing) klämmer lasten mot underlaget eller håller den på plats. Friktion ensam räcker sällan, särskilt vid inbromsning eller sidkraft.',
  },
  {
    id: 'q-las-07',
    topicId: 'lastsakring',
    prompt: 'Varför är överlast farligt även om du “bara” kör några kilometer?',
    options: [
      'Det är bara en administrativ avgift, inte en trafiksäkerhetsfråga',
      'Längre bromssträcka, sämre styrning och risk för däck- och axelskador',
      'ABS stänger av vid överlast, men bara på motorväg',
      'Överlast påverkar bara släp, inte C1-bilen',
    ],
    correctIndex: 1,
    explanation:
      'Massan styr rörelseenergi och bromsbehov. Överlast sliter däck, fjädring och axlar och kan göra fordonet olagligt oavsett sträcka.',
  },
  {
    id: 'q-las-08',
    topicId: 'lastsakring',
    prompt: 'Lasten skymmer bakljus och registreringsskylt. Vad gäller?',
    options: [
      'Tillåtet i dagsljus',
      'Otillåtet — ljus och skylt måste vara synliga, eller extra ljus/skylt användas',
      'Tillåtet om du kör under 30 km/h',
      'Tillåtet om lasten är säkrad med två band',
    ],
    correctIndex: 1,
    explanation:
      'Lasten får inte skymma belysning eller skyltar. Flytta lasten, använd extra belysning / skylt — eller lasta om.',
  },

  // --- Trafikregler ---
  {
    id: 'q-tra-01',
    topicId: 'trafikregler',
    prompt:
      'Vilken högsta hastighet gäller i normalfallet för lastbil över 3,5 ton på vanlig väg (om inte lägre skylt finns)?',
    options: ['70 km/h', '80 km/h', '90 km/h', '110 km/h'],
    correctIndex: 1,
    explanation:
      'Lastbil över 3,5 ton har i Sverige normalt 80 km/h på landsväg. På motorväg kan 90 km/h gälla om fordonet är konstruerat för det.',
  },
  {
    id: 'q-tra-02',
    topicId: 'trafikregler',
    prompt:
      'Vilken hastighet gäller ofta för lastbil över 3,5 ton på motorväg (fordonet konstruerat för det, utan släp som sänker gränsen)?',
    options: ['80 km/h', '90 km/h', '100 km/h', 'Samma som personbil, 110 eller 120'],
    correctIndex: 1,
    explanation:
      '90 km/h är den vanliga motorvägsgränsen för sådan lastbil. Släp sänker i regel till 80 km/h. Skyltad lägre fart gäller alltid.',
  },
  {
    id: 'q-tra-03',
    topicId: 'trafikregler',
    prompt:
      'Varför har tunga lastbilar ofta en hastighetsbegränsare på 90 km/h?',
    options: [
      'Det är ett svenskt C1-krav bara för övningskörning',
      'EU-krav för många godsfordon över 3,5 ton',
      'Begränsaren ersätter färdbromsen',
      'Den slår bara till i cirkulationsplats',
    ],
    correctIndex: 1,
    explanation:
      'Hastighetsbegränsare på 90 km/h är ett EU-krav för många tunga godsfordon. Den tar inte bort ditt ansvar att hålla skyltad fart.',
  },
  {
    id: 'q-tra-04',
    topicId: 'trafikregler',
    prompt: 'Var är döda vinkeln oftast störst på en lastbil?',
    options: [
      'Rakt bakom rattens nav',
      'På höger sida längs hytten och framaxeln, plus tätt framför och bakom',
      'Bara i backspegeln invändigt',
      'Den försvinner helt om du har ABS',
    ],
    correctIndex: 1,
    explanation:
      'Höger sida, tätt framför och bakom är klassiska blinda fält. Speglar och ev. kameror måste användas före varje sidoförflyttning.',
  },
  {
    id: 'q-tra-05',
    topicId: 'trafikregler',
    prompt: 'Ett märke anger begränsad bruttovikt 5 t. Din C1 har totalvikt 7 500 kg men väger 4 800 kg just nu. Får du köra in?',
    options: [
      'Nej, totalvikten 7 500 kg avgör alltid',
      'Ja, om den faktiska bruttovikten inte överstiger 5 ton',
      'Ja, C1 är undantaget från C7-märken',
      'Bara med poliseskort',
    ],
    correctIndex: 1,
    explanation:
      'Märket gäller faktisk bruttovikt. Är du lastad under gränsen får du passera; lastar du över 5 ton får du inte det, oavsett C1-taket.',
  },
  {
    id: 'q-tra-06',
    topicId: 'trafikregler',
    prompt:
      'Varför ska tunga fordon hålla extra stort avstånd på landsväg / högre fart?',
    options: [
      'Enbart för att spara AdBlue',
      'Så att omkörande fordon kan gå in mellan, och för att din egen bromssträcka är längre',
      'Avståndsregeln gäller bara motorcyklar',
      'Det räcker med 1 sekunds avstånd oavsett vikt',
    ],
    correctIndex: 1,
    explanation:
      'Längre bromssträcka och behovet att släppa in omkörande fordon gör tät “lastbilskolonn” farlig. Håll en lucka som faktiskt går att använda.',
  },
  {
    id: 'q-tra-07',
    topicId: 'trafikregler',
    prompt: 'Du närmar dig en cirkulationsplats med lång C1. Vad är mest rätt?',
    options: [
      'Ta den inre filen alltid, oavsett sväng',
      'Planera spårvalet, räkna med extra svepyta och släpp inte cyklar på höger sida ur sikte',
      'Cirkulationsplats får lastbil inte använda',
      'Backa in om du missar utfarten',
    ],
    correctIndex: 1,
    explanation:
      'Tunga fordon behöver mer svep. Högersväng / högerdöd vinkel är extra farlig. Backa inte i cirkulationen — kör ett varv till om du måste.',
  },
  {
    id: 'q-tra-08',
    topicId: 'trafikregler',
    prompt: 'Ett märke anger begränsad fordonshöjd 3,5 m. Vad gör du om du är osäker på din lastade höjd?',
    options: [
      'Kör — C1 får max 7 500 kg, höjden regleras inte',
      'Stanna och kontrollera; att slå i portalen är både olagligt och dyrt',
      'Gasar extra för att komma igenom snabbt',
      'Märket gäller bara bussar',
    ],
    correctIndex: 1,
    explanation:
      'Höjdbegränsning är fysisk. Känn din lastade höjd (tom höjd + last). Gissa inte i tunnlar och portaler.',
  },
  {
    id: 'q-tra-09',
    topicId: 'trafikregler',
    prompt: 'När du backar en C1 på en arbetsplats, vad är mest rätt?',
    options: [
      'Backa snabbt så att luckan inte stängs',
      'Planera, använd speglar/kamera, gå ur och kolla vid behov, ta hjälp av vinkare om sikten är dålig',
      'Lita bara på parkeringssensorn',
      'Backning är förbjuden för alla lastbilar',
    ],
    correctIndex: 1,
    explanation:
      'Dålig sikt bakåt är ett av de vanligaste skaderiskerna. Ta den tid som krävs. Sensorer hjälper — de ersätter inte ögon och planering.',
  },

  // --- Miljö / eco ---
  {
    id: 'q-mil-01',
    topicId: 'miljo',
    prompt: 'Vad är kärnan i sparsam körning med en lastad C1?',
    options: [
      'Hårda accelerationer för att “komma upp i varv”',
      'Se långt fram, håll jämn fart och undvik onödiga stopp',
      'Kör alltid i högsta växeln från stillastående',
      'Håll motorn på höga varv i tomgång i köer',
    ],
    correctIndex: 1,
    explanation:
      'Anticipation sparar mest bränsle — och bromsar. Ryckig körning slösar diesel och sliter drivlina.',
  },
  {
    id: 'q-mil-02',
    topicId: 'miljo',
    prompt: 'Hur påverkar för lågt däcktryck en lastad lastbil?',
    options: [
      'Bara bättre komfort, ingen nackdel',
      'Högre rullmotstånd, mer bränsle, mer värme och sämre sidostabilitet',
      'ABS fungerar bättre',
      'Totalvikten sjunker juridiskt',
    ],
    correctIndex: 1,
    explanation:
      'Underinflation är både miljö- och säkerhetsfel. Kontrollera tryck mot fordonets tabell, lastat läge.',
  },
  {
    id: 'q-mil-03',
    topicId: 'miljo',
    prompt: 'AdBlue (SCR) tar slut i en modern diesel-C1. Vad kan hända?',
    options: [
      'Inget — AdBlue är bara spolarvätska',
      'Motoreffekten kan begränsas tills tanken fylls',
      'Parkeringsbromsen släpper av sig själv',
      'Färdskrivaren nollställs',
    ],
    correctIndex: 1,
    explanation:
      'SCR-systemet behöver AdBlue för att rena kväveoxider. Många fordon går in i reducerat läge om tanken är tom. Det är inte spolarvätska.',
  },
  {
    id: 'q-mil-04',
    topicId: 'miljo',
    prompt: 'När är tomgång mest fel ur miljö- och bränslesynpunkt?',
    options: [
      'När du står stilla en längre stund utan behov av motordrivna system',
      'Aldrig — lastbilsmotorer ska alltid gå',
      'Bara på motorväg',
      'Bara om du har släp',
    ],
    correctIndex: 0,
    explanation:
      'Onödig tomgång ger utsläpp och slöseri. Kort väntan vid rött är en sak; lång parkering med motorn igång är en annan.',
  },
  {
    id: 'q-mil-05',
    topicId: 'miljo',
    prompt: 'Varför är motorbroms bättre än ständig färdbroms i lång backe, även miljömässigt?',
    options: [
      'Den ökar AdBlue-förbrukningen medvetet',
      'Mindre bromsdamm, mindre fading och ofta lägre bränsle än att bromsa och gasa om',
      'Den är förbjuden i tätort',
      'Den kopplar ur ABS',
    ],
    correctIndex: 1,
    explanation:
      'Motorbroms håller farten utan att slita belägg och sprida bromsdamm. Du undviker också värmepucklar som tvingar fram mer inbromsning senare.',
  },
  {
    id: 'q-mil-06',
    topicId: 'miljo',
    prompt: 'Hur kan lastplanering minska bränsleförbrukningen?',
    options: [
      'Ta alltid omvägar så motorn blir varm',
      'Undvik onödig vikt och onödiga kilometer; lasta så att du inte behöver köra extra vändor',
      'Lasta så högt som möjligt för luftmotståndets skull',
      'Bränsle påverkas inte av last',
    ],
    correctIndex: 1,
    explanation:
      'Varje extra kilo och varje extra km kostar diesel. Hög last ökar dessutom luftmotstånd om den står upp över hytten.',
  },

  // --- Personliga förutsättningar ---
  {
    id: 'q-per-01',
    topicId: 'personliga',
    prompt: 'Vilken är den svenska promillegränsen i trafiken?',
    options: ['0,0 ‰ i praktiken rekommenderas, laglig gräns 0,2 ‰', '0,5 ‰', '0,8 ‰', '1,0 ‰'],
    correctIndex: 0,
    explanation:
      'Laglig gräns är 0,2 promille. Även under gränsen försämras omdömet. Planen för en kördag är noll alkohol.',
  },
  {
    id: 'q-per-02',
    topicId: 'personliga',
    prompt: 'Vad är mest rätt om trötthet bakom ratten i en C1?',
    options: [
      'Kaffe i 10 minuter tar alltid bort microsleep',
      'Trötthet kan sänka prestationen i nivå med alkohol; stanna och sov',
      'Tunga fordon “kör sig själva” på motorväg så trötthet spelar mindre roll',
      'Grupp 2-intyg skyddar mot trötthet juridiskt',
    ],
    correctIndex: 1,
    explanation:
      'Microsleep i en 7,5-tonnare är förödande. Inget intyg och ingen kaffekopp ersätter sömn. Ta en paus i tid.',
  },
  {
    id: 'q-per-03',
    topicId: 'personliga',
    prompt: 'Du tar allergitabletter som gör dig dåsig. Vad gör du?',
    options: [
      'Kör som vanligt — receptfria medel räknas inte',
      'Läs FASS/förpackning och avstå från att köra om reaktionen påverkas',
      'Höj musiken så du håller dig vaken',
      'Det är bara olagligt om polisen frågar vilket märke det är',
    ],
    correctIndex: 1,
    explanation:
      'Många läkemedel påverkar reaktion och uppmärksamhet. Ansvaret är ditt även för receptfria medel.',
  },
  {
    id: 'q-per-04',
    topicId: 'personliga',
    prompt: 'Hur bör du hantera tidspress och irritation i hytten?',
    options: [
      'Kör fortare i rondeller för att “ta igen” minuter',
      'Bygg marginal i tidtabellen; forcerad C1-körning skapar dödavinkel-misstag',
      'Tidspress är ett godkänt skäl att skippa spegelkollen',
      'Ilska skärper faktiskt uppmärksamheten',
    ],
    correctIndex: 1,
    explanation:
      'Stress smalnar av synfältet. En medeltung lastbil behöver mer tid, inte mer aggressivitet. Planera om i stället för att pressa luckor.',
  },
  {
    id: 'q-per-05',
    topicId: 'personliga',
    prompt: 'Varför är grupp 2-hälsokrav strängare än för B?',
    options: [
      'För att C1-teorin ska bli längre',
      'Tunga fordon innebär större skaderisk; syn, sömn, hjärta och vissa sjukdomar granskas hårdare',
      'Grupp 2 gäller bara buss',
      'Det är bara en administrativ stämpel utan medicinskt innehåll',
    ],
    correctIndex: 1,
    explanation:
      'Ett misstag i C1 kan väga flera ton. Transportstyrelsen ställer därför högre medicinska krav än för grupp 1.',
  },
  {
    id: 'q-per-06',
    topicId: 'personliga',
    prompt: 'Du har feber och sovit tre timmar. Transporten “måste fram”. Vad är rätt?',
    options: [
      'Kör — yrkesansvar slår alltid hälsan',
      'Avstå. Sjukdom och sömnbrist är trafiksäkerhetsfel, inte hjältedåd',
      'Det räcker att skriva en notering i färdskrivaren',
      'C1 privat är undantaget från trötthetsansvar',
    ],
    correctIndex: 1,
    explanation:
      'Du får inte köra om du inte är i stånd att göra det på ett betryggande sätt. Ingen kunddeadline ändrar det.',
  },

  // --- Kör- och vilotider ---
  {
    id: 'q-vil-01',
    topicId: 'vilotider',
    prompt:
      'När kan EU:s kör- och vilotider (561/2006) gälla för en C1?',
    options: [
      'Aldrig, C1 är alltid undantagen',
      'Ofta vid godstransport med fordon över 3,5 ton — kontrollera om just din transport är undantagen',
      'Bara om du har fullt C-körkort',
      'Bara utanför Sverige',
    ],
    correctIndex: 1,
    explanation:
      'Tröskeln 3,5 ton gör att många C1-jobb hamnar i förordningen. Det finns undantag (t.ex. vissa korta / egna transporter) — anta inte, kontrollera.',
  },
  {
    id: 'q-vil-02',
    topicId: 'vilotider',
    prompt: 'Vad är den normala maximala körningen per dag när 561/2006 gäller?',
    options: [
      '4,5 timmar',
      '9 timmar (får utökas till 10 timmar två gånger per vecka)',
      '15 timmar varje dag',
      'Ingen gräns om färdskrivaren är igång',
    ],
    correctIndex: 1,
    explanation:
      'Grundregeln är 9 timmars körning. 10 timmar tillåts två gånger mellan veckovilor. Färdskrivaren dokumenterar — den höjer inte taket.',
  },
  {
    id: 'q-vil-03',
    topicId: 'vilotider',
    prompt: 'Efter hur lång körning krävs en rast, och hur lång ska den minst vara?',
    options: [
      'Efter 6 timmar, 10 minuter räcker',
      'Efter 4,5 timmars körning, minst 45 minuter',
      'Efter 9 timmar, 5 minuter',
      'Rast krävs bara vid släp',
    ],
    correctIndex: 1,
    explanation:
      'Efter 4,5 timmars körning ska du ta minst 45 minuter rast (eller 15 + 30 i den ordningen) innan du kör vidare.',
  },
  {
    id: 'q-vil-04',
    topicId: 'vilotider',
    prompt: 'Hur får 45-minutersrasten delas?',
    options: [
      '30 minuter + 15 minuter, i den ordningen',
      '15 minuter + 30 minuter, i den ordningen',
      'Nio raster à 5 minuter',
      'Rasten får inte delas alls i något fall',
    ],
    correctIndex: 1,
    explanation:
      'Tillåten delning är 15 minuter först, sedan minst 30. 30 + 15 räknas inte som korrekt delning.',
  },
  {
    id: 'q-vil-05',
    topicId: 'vilotider',
    prompt: 'Hur lång är den normala dygnsvilan när reglerna gäller?',
    options: ['6 timmar', '9 timmar alltid', '11 timmar (kan reduceras till 9 timmar tre gånger mellan veckovilor)', '24 timmar varje natt'],
    correctIndex: 2,
    explanation:
      'Normal dygnsvila är 11 timmar. Den får kortas till 9 timmar högst tre gånger mellan två veckovilor, enligt 561/2006.',
  },
  {
    id: 'q-vil-06',
    topicId: 'vilotider',
    prompt: 'Vad är en färdskrivare (tachograph) till för?',
    options: [
      'Att ersätta hastighetsmätaren',
      'Att registrera körning, annan arbete och vila när kör- och vilotider gäller',
      'Att räkna AdBlue',
      'Den behövs bara för YKB-provdagen',
    ],
    correctIndex: 1,
    explanation:
      'Färdskrivaren är bevismedlet för kör- och vilotider. Manipulation är ett grovt brott. Medvetandenivå räcker här — YKB går djupare.',
  },
]

export function questionsByTopic(topicId: Question['topicId']): Question[] {
  return questions.filter((q) => q.topicId === topicId)
}
