const rawVerbsData = `
group;verbalBase;simplePast;pastParticiple;meaning
1;do;did;done;Faire (une action)
1;be;was, were;been;être
1;have;had;had;avoir
1;go;went;gone;aller
1;write;wrote;written;écrire
1;win;won;won;Gagner (un prix)
1;wear;wore;worn;Porter un vêtement, user
1;wake;woke, waked;woken, waked;réveiller
1;understand;understood;understood;comprendre
1;think;thought;thought;penser
1;tell;told;told;Raconter, dire
1;speak;spoke;spoken;parler
1;sleep;slept;slept;dormir
1;sit;sat;sat;s’asseoir
1;see;saw;seen;voir
1;say;said;said;dire
1;read;read;read;lire
2;drive;drove;driven;conduire
2;drink;drank;drunk;boire
2;come;came;come;venir
2;buy;bought;bought;acheter
2;build;built;built;construire
2;bring;brought;brought;apporter
2;become;became;become;devenir
2;put;put;put;mettre
2;make;made;made;Faire (création)
2;lose;lost;lost;perdre
2;leave;left;left;Laisser, quitter
2;learn;learnt, learned;learnt, learned;Apprendre qqchose
2;know;knew;known;Savoir, connaître
2;hold;held;held;tenir
2;hear;heard;heard;entendre
2;grow;grew;grown;Grandir, cultiver
2;give;gave;given;donner
2;get;got;got, gotten;obtenir
2;fall;fell;fallen;tomber
2;eat;ate;eaten;manger
2;teach;taught;taught;enseigner
2;take;took;taken;prendre
2;swim;swam;swum;nager
2;stand;stood;stood;Se tenir
2;smell;smelt, smelled;smelt, smelled;Sentir (odeur)
2;shut;shut;shut;fermer
2;show;showed;shown, showed;montrer
2;sell;sold;sold;vendre
2;run;ran;run;courir
3;forbid;forbad, forbade;forbid, forbidden;interdire
3;fly;flew;flown;Voler (oiseau / avion)
3;spell;spelt, spelled;spelt, spelled;épeler
3;dream;dreamt, dreamed;dreamt, dreamed;rêver
3;draw;drew;drawn;Tirer, dessiner
3;dig;dug;dug;creuser
3;cut;cut;cut;couper
3;cost;cost;cost;coûter
3;choose;chose;chosen;choisir
3;catch;caught;caught;attraper
3;burn;burnt, burned;burnt, burned;brûler
3;broadcast;broadcast, broadcasted;broadcast, broadcasted;Émettre, publier
3;break;broke;broken;casser
3;bite;bit;bitten;mordre
3;begin;began;begun;commencer
3;beat;beat;beaten, beat;battre
3;bear;bore;borne, born;(sup)porter
3;pay;paid;paid;payer
3;meet;met;met;rencontrer
3;mean;meant;meant;signifier
3;light;lit;lit;allumer
3;lie;lay;lain;s'allonger
3;let;let;let;Laisser faire
3;keep;kept;kept;Garder, conserver
3;hurt;hurt;hurt;Blesser, faire mal
3;hit;hit;hit;frapper
3;hide;hid;hidden, hid;cacher
3;forget;forgot;forgotten;oublier
3;find;found;found;trouver
3;fight;fought;fought;combattre
3;feel;felt;felt;(res)sentir
3;throw;threw;thrown;Lancer, jeter
3;tear;tore;torn;déchirer
3;swing;swung;swung;(se) balancer
3;stick;stuck;stuck;coller
3;steal;stole;stolen;Voler (s'approprier)
3;spread;spread;spread;(s')étaler
3;spend;spent;spent;Passer / dépenser
3;sing;sang;sung;chanter
3;shoot;shot;shot;Tirer sur (arme à feu)
3;shine;shone;shone;briller
3;send;sent;sent;envoyer
3;rise;rose;risen;Se lever
3;ride;rode;ridden;Monter à cheval /vélo
4;deal;dealt;dealt;Distribuer
4;creep;crept;crept;ramper
4;clothe;clothed, clad;clothed, clad;habiller
4;breed;bred;bred;Élever, se reproduire
4;blow;blew;blown;souffler
4;bleed;bled;bled;saigner
4;bid;bade, bid;bidden, bid, bade;Enchérir, souhaiter
4;bet;bet, betted;bet, betted;parier
4;bend;bent;bent;plier
4;awake;awoke;awoken;Se réveiller
4;arise;arose;arisen;Se lever
4;melt;melted;molten, melted;fondre
4;lend;lent;lent;prêter
4;lean;leant, leaned;leant, leaned;(se) pencher
4;lead;led;led;mener
4;lay;laid;laid;Poser (à plat)
4;kneel;knelt, kneeled;knelt, kneeled;s'agenouiller
4;hang;hung;hung;(sus)pendre
4;grind;ground;ground;moudre
4;freeze;froze;frozen;geler
4;feed;fed;fed;nourrir
4;wet;wet, wetted;wet, wetted;mouiller
4;swell;swelled;swollen, swelled;Gonfler / enfler
4;sweep;swept;swept;balayer
4;sweat;sweat, sweated;sweat, sweated;Suer, transpirer
4;swear;swore;sworn;jurer
4;string;strung;strung;enfiler
4;strike;struck;struck;frapper
4;stride;strode;stridden;Marcher à grands pas
4;sting;stung;stung;piquer
4;spoil;spoilt, spoiled;spoilt, spoiled;gâcher / gâter
4;split;split;split;Écarter, séparer
4;spit;spat;spat;cracher
4;spin;spun;spun;Tourner, filer (laine)
4;spill;spilt, spilled;spilt, spilled;Déverser (liquide)
4;slide;slid;slid;glisser
4;sink;sank;sunk;sombrer
4;shoe;shod, shoed;shod, shoed;chausser
4;shake;shook;shaken;Secouer (serrer la main)
4;ring;rang;rung;sonner
4;rid;rid;rid;débarrasser de
4;quit;quit;quit;Abandonner, arrêter
4;spring;sprang, sprung;sprung;jaillir
5;dwell;dwelt, dwelled;dwelt, dwelled;habiter
5;cling;clung;clung;s'agripper
5;cleave;cleft;cleft, cloven;fendre
5;cast;cast;cast;jeter
5;burst;burst;burst;éclater
5;bless;blessed, blest;blessed, blest;bénir
5;bind;bound;bound;lier
5;prove;proved;proven, proved;prouver
5;plead;pled;pled;plaider
5;mow;mowed;mown, mowed;tondre
5;leap;leapt, leaped;leapt, leaped;sauter
5;knit;knitted, knit;knitted, knit;tricoter
5;hew;hewed;hewed, hewn;couper, tailler (ex. bois)
5;forsake;forsook;forsaken;abandonner
5;forecast;forecast, forecasted;forecast, forecasted;prédire
5;fling;flung;flung;lancer
5;flee;fled;fled;s'enfuir
5;wring;wrung;wrung;essorer
5;wind;wound;wound;enrouler
5;weep;wept;wept;pleurer
5;wed;wed, wedded;wed, wedded;Épouser, se marier
5;weave;wove;woven;tisser
5;tread;trod;trodden;Marcher, fouler
5;thrust;thrust;thrust;Pousser, enfoncer
5;strive;strove;striven;S'efforcer à faire qqch
5;stink;stank, stunk;stunk;puer
5;speed;sped, speeded;sped, speeded;Aller (trop) vite
5;sow;sowed;sown, sowed;semer
5;smite;smote;smitten;frapper
5;slit;slit;slit;Fendre avec une lame
5;slink;slunk;slunk;Aller furtivement
5;sling;slung;slung;lancer
5;slay;slew;slain;abattre
5;shrink;shrank, shrunk;shrunk;rétrécir
5;shred;shred, shredded;shred, shredded;déchiqueter
5;shed;shed;shed;Déverser, perdre
5;shear;sheared;shorn, sheared;Tondre ( un mouton)
5;sew;sewed;sewn, sewed;coudre
5;set;set;set;Fixer, poser, installer
5;seek;sought;sought;chercher
5;saw;sawed;sawn;scier
`;

export default rawVerbsData;