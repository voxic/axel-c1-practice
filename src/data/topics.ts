import type { Topic } from '../types'

export const topics: Topic[] = [
  {
    id: 'behorighet',
    titleSv: 'Behörighet & fordon',
    titleEn: 'Licence class and vehicle limits',
    blurb:
      'C1 versus B, C and C1E: totalvikt, släp and what grupp 2 actually unlocks.',
    studyNotes: [
      'C1 covers a lastbil with totalvikt over 3 500 kg and at most 7 500 kg. A släp with totalvikt at most 750 kg may be coupled.',
      'C covers lastbil over 3 500 kg with no 7 500 kg ceiling. Släp is still capped at 750 kg unless you have CE.',
      'C1E adds a släp over 750 kg, but bil + släp together may not exceed 12 000 kg, and the trailer’s totalvikt may not exceed the truck’s tjänstevikt.',
      'B already covers personbil / lätt lastbil up to 3 500 kg. C1 is the step into medeltung lastbil — not full C, and not YKB.',
      'Körkortstillstånd grupp 2 is required before you train for C1. Medical rules are stricter than for B (grupp 1).',
    ],
  },
  {
    id: 'fordon',
    titleSv: 'Fordonskännedom & bromsar',
    titleEn: 'Vehicle knowledge and brakes',
    blurb:
      'Totalvikt, tjänstevikt, axeltryck and how C1 brakes behave when the load changes.',
    studyNotes: [
      'Totalvikt is the highest permitted weight of the vehicle including load. Tjänstevikt is the vehicle in running order. Nyttolast is roughly totalvikt minus tjänstevikt.',
      'Bruttovikt is the actual weight right now (vehicle + current load). It must never exceed totalvikt or the road’s signed weight limits.',
      'Heavier vehicles often use tryckluftsbromsar. Drain condensate from air tanks, and do not drive with low system pressure.',
      'Färdbroms stops the moving vehicle. Parkeringsbroms holds it when parked. Motorbroms / retarder spare the service brakes on long descents.',
      'Stopping distance grows with speed and mass. Check brakes, leaks, warning lamps and tyre condition before you roll.',
    ],
  },
  {
    id: 'lastsakring',
    titleSv: 'Lastsäkring & vikter',
    titleEn: 'Load securing and weights',
    blurb:
      'Keep the load on the truck: forces, surrning, tyngdpunkt and overload.',
    studyNotes: [
      'The load must be placed and secured so it cannot shift, fall off, hide lights/plates, or injure anyone — Trafikförordningen applies even on a short hop.',
      'A common EU planning baseline (EN 12195) is to restrain 0,8 g forward and 0,5 g rearward and sideways. That is a lot of force on a sudden brake.',
      'Main methods: surrning (lashing), spärrning (blocking against a headboard or other cargo) and låsning (locking into the body). Combine them when one method is not enough.',
      'Keep the tyngdpunkt low and as centred as possible. Uneven axle loads wreck handling and can exceed axeltryck even when totalvikt looks fine.',
      'Överlast is illegal and unsafe: longer brake distance, weaker steering, damaged axles and tyres. Use the registreringsbevis, not a guess.',
    ],
  },
  {
    id: 'trafikregler',
    titleSv: 'Trafikregler för större fordon',
    titleEn: 'Rules for larger vehicles',
    blurb:
      'Speed, distance, döda vinklar, weight/height signs and space in junctions.',
    studyNotes: [
      'A lastbil over 3,5 ton is generally limited to 80 km/h on ordinary roads and 90 km/h on motorväg, if the vehicle is built for that speed. A trailer usually keeps you at 80 km/h.',
      'Goods vehicles over 3,5 ton are typically fitted with a hastighetsbegränsare set to 90 km/h.',
      'Blind spots are large — especially to the right. Check speglar (and cameras if fitted) before every lateral move. Assume a cyclist is there.',
      'Watch C-signs: förbud mot lastbil, begränsad bruttovikt, axeltryck, boggitryck, höjd and bredd. A C1 truck is still a lastbil.',
      'Give yourself room to turn, do not block crossings, and keep enough gap that an overtaking car can slot back in. Reverse only with a plan — and a banksman if needed.',
    ],
  },
  {
    id: 'miljo',
    titleSv: 'Miljö / eco',
    titleEn: 'Environment and eco-driving',
    blurb:
      'Fuel, AdBlue, tyre pressure and calm driving that also saves brakes.',
    studyNotes: [
      'Look far ahead, hold a steady pace, and use motorbroms instead of riding the färdbroms. Anticipation beats last-second stops.',
      'Correct däcktryck cuts rolling resistance and wear. Under-inflation on a loaded C1 is both a fuel and a safety problem.',
      'Idling wastes fuel and adds local exhaust. Shut down when you will stand still for more than a short wait, unless systems need the engine.',
      'Many modern diesels need AdBlue (SCR). An empty tank can trigger reduced power — treat it as an operational check, not an afterthought.',
      'A heavier load uses more fuel. Plan the route, avoid unnecessary km, and do not carry dead weight you do not need.',
    ],
  },
  {
    id: 'personliga',
    titleSv: 'Personliga förutsättningar',
    titleEn: 'You as the driver',
    blurb:
      'Alcohol 0,2 ‰, fatigue, stress, medicines and grupp 2 health rules.',
    studyNotes: [
      'Sweden’s limit is 0,2 promille. Even small amounts impair judgement. The only safe plan for a driving day is no alcohol.',
      'Trötthet can hit as hard as alcohol. Microsleep at 70–80 km/h is enough to leave the lane. Stop and sleep — do not “push through”.',
      'Stress, anger and time pressure make you miss mirrors and rush gaps that a C1 cannot take. Build extra time into the job.',
      'Many medicines (allergy, sleep, pain) affect reaction time. Read the package / FASS and ask a pharmacist if driving is advised.',
      'Grupp 2 medical standards are stricter than for B. Vision, sleep apnoea, diabetes and heart conditions can affect the licence — keep hälsointyg current.',
    ],
  },
  {
    id: 'vilotider',
    titleSv: 'Kör- och vilotider & färdskrivare',
    titleEn: 'Driving time, rest and tachograph',
    blurb:
      'Awareness-level EU 561/2006: when C1 is in scope, and the headline numbers.',
    studyNotes: [
      'EU kör- och vilotider (förordning 561/2006) generally apply to gods transporter with vehicles over 3,5 ton. Many C1 jobs are in scope; some short local / own-account cases have exemptions. Check the actual transport — do not assume you are free.',
      'When the rules apply, a färdskrivare (tachograph) records driving, rest and other work. Use it correctly; tampering is a serious offence.',
      'Headline limits: at most 9 hours driving per day (10 hours twice a week), a break of at least 45 minutes after 4,5 hours driving, daily rest normally 11 hours, weekly rest 45 hours.',
      'The 45-minute break may be split as 15 + 30 minutes, in that order. A 30 + 15 split does not count.',
      'This module is awareness only — not YKB. If you will drive professionally, your employer or training provider must confirm whether you are in scope and how the tachograph is used on that vehicle.',
    ],
  },
]
