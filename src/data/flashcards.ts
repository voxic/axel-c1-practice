/**
 * Original study cards — not official exam wording.
 * Front face is the Swedish term (Transportstyrelsen / Trafikverket style).
 */
import type { Flashcard } from '../types'

export const flashcards: Flashcard[] = [
  {
    id: 'f-beh-01',
    topicId: 'behorighet',
    term: 'C1',
    meaning:
      'Lastbil with totalvikt over 3 500 kg and at most 7 500 kg. May tow a släp of at most 750 kg totalvikt.',
  },
  {
    id: 'f-beh-02',
    topicId: 'behorighet',
    term: 'C1E',
    meaning:
      'C1 plus a släp over 750 kg. Combined totalvikt of truck + trailer at most 12 000 kg; trailer totalvikt may not exceed the truck’s tjänstevikt.',
  },
  {
    id: 'f-beh-03',
    topicId: 'behorighet',
    term: 'Körkortstillstånd grupp 2',
    meaning:
      'Permit required before training for C1/C/D1/D and their E variants. Stricter medical rules than grupp 1 (B).',
  },
  {
    id: 'f-beh-04',
    topicId: 'behorighet',
    term: 'YKB',
    meaning:
      'Yrkeskompetensbevis — professional-driver qualification. Separate from the C1 licence class. Out of scope for this coach.',
  },
  {
    id: 'f-for-01',
    topicId: 'fordon',
    term: 'Totalvikt',
    meaning:
      'Highest permitted weight of the vehicle including load, as stated on the registreringsbevis.',
  },
  {
    id: 'f-for-02',
    topicId: 'fordon',
    term: 'Tjänstevikt',
    meaning:
      'Weight of the vehicle in running order (typically including fuel and a standard driver allowance). Used to estimate nyttolast.',
  },
  {
    id: 'f-for-03',
    topicId: 'fordon',
    term: 'Bruttovikt',
    meaning:
      'Actual weight at this moment: vehicle + current load. Must stay under totalvikt and any signed road limits.',
  },
  {
    id: 'f-for-04',
    topicId: 'fordon',
    term: 'Tryckluftsbromsar',
    meaning:
      'Air-brake system common on heavier trucks. Needs working pressure before you move; drain condensate from tanks.',
  },
  {
    id: 'f-for-05',
    topicId: 'fordon',
    term: 'Motorbroms',
    meaning:
      'Using the engine / low gear (or a retarder) to hold speed downhill so the färdbroms does not fade.',
  },
  {
    id: 'f-las-01',
    topicId: 'lastsakring',
    term: 'Surrning',
    meaning:
      'Lashing — straps, chains or similar that clamp or hold the load to the deck.',
  },
  {
    id: 'f-las-02',
    topicId: 'lastsakring',
    term: 'Spärrning',
    meaning:
      'Blocking — the load is braced against a headboard, walls or other cargo so it cannot slide.',
  },
  {
    id: 'f-las-03',
    topicId: 'lastsakring',
    term: 'Nyttolast',
    meaning:
      'Payload: roughly totalvikt minus tjänstevikt. The weight you may actually carry.',
  },
  {
    id: 'f-las-04',
    topicId: 'lastsakring',
    term: 'Axeltryck',
    meaning:
      'Load on one axle. Can be illegal even when the vehicle’s totalvikt is within limits if cargo sits too far forward or aft.',
  },
  {
    id: 'f-tra-01',
    topicId: 'trafikregler',
    term: 'Döda vinkeln',
    meaning:
      'Blind spot. On a truck it is large to the right, close in front and close behind. Mirrors before every move.',
  },
  {
    id: 'f-tra-02',
    topicId: 'trafikregler',
    term: 'Hastighetsbegränsare',
    meaning:
      'Speed limiter, typically 90 km/h on many goods vehicles over 3,5 ton. It does not replace posted limits.',
  },
  {
    id: 'f-tra-03',
    topicId: 'trafikregler',
    term: 'Begränsad bruttovikt',
    meaning:
      'C-sign (often C7): you may enter only if the vehicle’s actual weight right now is within the figure on the sign.',
  },
  {
    id: 'f-mil-01',
    topicId: 'miljo',
    term: 'AdBlue',
    meaning:
      'Urea solution for SCR exhaust after-treatment. Not washer fluid. An empty tank can put the engine in limp mode.',
  },
  {
    id: 'f-mil-02',
    topicId: 'miljo',
    term: 'Sparsam körning',
    meaning:
      'Eco-driving: look ahead, steady pace, correct tyre pressure, little idling, engine-brake instead of riding the service brake.',
  },
  {
    id: 'f-per-01',
    topicId: 'personliga',
    term: '0,2 promille',
    meaning:
      'Swedish legal blood-alcohol limit. The practical plan for a driving day is no alcohol at all.',
  },
  {
    id: 'f-per-02',
    topicId: 'personliga',
    term: 'Microsleep',
    meaning:
      'A seconds-long sleep attack. At C1 speed it is enough to leave the lane. The fix is sleep, not another coffee only.',
  },
  {
    id: 'f-vil-01',
    topicId: 'vilotider',
    term: 'Färdskrivare',
    meaning:
      'Tachograph — records driving, other work and rest when kör- och vilotider apply. Tampering is a serious offence.',
  },
  {
    id: 'f-vil-02',
    topicId: 'vilotider',
    term: '4,5 timmar / 45 minuter',
    meaning:
      'When 561/2006 applies: after 4,5 hours of driving you need a break of at least 45 minutes (or 15 + 30, in that order).',
  },
  {
    id: 'f-vil-03',
    topicId: 'vilotider',
    term: 'Dygnsvila 11 timmar',
    meaning:
      'Normal daily rest when the EU rules apply. Can be reduced to 9 hours at most three times between weekly rests.',
  },
  {
    id: 'f-vil-04',
    topicId: 'vilotider',
    term: 'Veckovila 45 timmar',
    meaning:
      'Normal weekly rest period under EU 561/2006. Awareness level for C1 — confirm if your transport is in scope.',
  },
]

export function flashcardsByTopic(topicId: Flashcard['topicId']): Flashcard[] {
  return flashcards.filter((c) => c.topicId === topicId)
}
