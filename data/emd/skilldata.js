const skills = [
  [  0, 0, 0,  0,  1,   0,                             [],                       [[6, 1]]], // Proficiency
  [  1, 0, 1,  0,  3,   1,                             [],               [[7, 3], [8, 3]]], // Double Strike
  [  2, 0, 3,  0,  3,   2,                             [],                       [[9, 3]]], // Vanguard
  [  3, 0, 4,  0, 10,   3,                             [],                             []], // Power Boost
  [  4, 0, 5,  0,  3,   4,                             [],             [[13, 3], [14, 3]]], // Iron Wall
  [  5, 0, 6,  0, 10,   5,                             [],                             []], // Mineralogy
  [  6, 2, 0, 10,  1,   6,                       [[0, 1]],                      [[15, 1]]], // Expertise
  [  7, 2, 1, 10,  5,   7,                       [[1, 3]],                      [[16, 5]]], // Spiral Slice
  [  8, 2, 2, 10,  5,   8,                       [[1, 3]],                      [[17, 5]]], // Penetrate
  [  9, 2, 3, 10,  3,   9,                       [[2, 3]],                             []], // Initiative
  [ 10, 3, 3, 10,  8,  10,                             [],                      [[18, 3]]], // Blazing Link
  [ 11, 3, 4, 10,  8,  11,                             [],                      [[18, 3]]], // Freezing Link
  [ 12, 3, 5, 10,  8,  12,                             [],                      [[18, 3]]], // Electric Link
  [ 13, 2, 5, 10,  5,  13,                       [[4, 3]],                             []], // Power Break
  [ 14, 2, 6, 10,  5,  14,                       [[4, 3]],                             []], // Mind Break
  [ 15, 4, 0, 20,  1,  15,                       [[6, 1]],                             []], // Enlightenment
  [ 16, 4, 1, 20,  8,  16,                       [[7, 5]],                             []], // Sword Tempest
  [ 17, 4, 2, 20,  8,  17,                       [[8, 5]],                             []], // Swift Stab
  [ 18, 4, 3, 20,  3,  18,    [[10, 3], [11, 3], [12, 3]],                      [[19, 3]]], // Improved Link
  [ 19, 5, 3, 20,  3,  19,                      [[18, 3]],                             []], // Link Mastery
  [ 20, 0, 0,  0,  1,  20,                             [],                      [[27, 1]]], // Proficiency
  [ 21, 0, 1,  0,  5,  21,                             [],                      [[28, 3]]], // HP Up
  [ 22, 0, 2,  0,  5,  22,                             [],                      [[30, 3]]], // Provoke
  [ 23, 0, 3,  0,  5,  23,                             [],                      [[31, 3]]], // Shield Smite
  [ 24, 0, 4,  0, 10,  24,                             [],    [[32, 3], [33, 3], [34, 3]]], // Defense Boost
  [ 25, 0, 5,  0,  3,  25,                             [],                             []], // Refresh
  [ 26, 0, 6,  0, 10,  26,                             [],                             []], // Mineralogy
  [ 27, 2, 0, 10,  1,  27,                      [[20, 1]],                      [[35, 1]]], // Expertise
  [ 28, 2, 1, 10,  5,  28,                      [[21, 3]],                      [[29, 3]]], // HP Regen
  [ 29, 3, 1, 10,  5,  29,                      [[28, 3]],                             []], // Desperado
  [ 30, 2, 2, 10,  5,  30,                      [[22, 3]],                      [[37, 3]]], // Cover
  [ 31, 2, 3, 10,  8,  31,                      [[23, 3]],                             []], // Shield Bash
  [ 32, 2, 4, 10,  5,  32,                      [[24, 3]],                      [[39, 3]]], // Fire Wall
  [ 33, 2, 5, 10,  5,  33,                      [[24, 3]],                      [[39, 3]]], // Ice Wall
  [ 34, 2, 6, 10,  5,  34,                      [[24, 3]],                      [[39, 3]]], // Volt Wall
  [ 35, 4, 0, 20,  1,  35,                      [[27, 1]],                             []], // Enlightenment
  [ 36, 4, 1, 20,  7,  36,                             [],                             []], // Aegis
  [ 37, 4, 2, 20,  5,  37,                      [[30, 3]],                             []], // Diversion
  [ 38, 4, 3, 20,  5,  38,                             [],                             []], // Full Guard
  [ 39, 4, 4, 20,  5,  39,    [[32, 3], [33, 3], [34, 3]],                             []], // Divine Wall
  [ 40, 0, 0,  0,  1,  40,                             [],                      [[46, 1]]], // Proficiency
  [ 41, 0, 1,  0,  8,  41,                             [],             [[47, 3], [49, 3]]], // Gun Mastery
  [ 42, 0, 3,  0,  3,  42,                             [],                      [[43, 3]]], // Leg Snipe
  [ 43, 1, 3,  0,  3,  43,                      [[42, 3]],                      [[51, 3]]], // Arm Snipe
  [ 44, 0, 5,  0,  3,  44,                             [],                             []], // Medic Bullet
  [ 45, 0, 6,  0, 10,  45,                             [],                             []], // Dendrology
  [ 46, 2, 0, 10,  1,  46,                      [[40, 1]],                      [[55, 1]]], // Expertise
  [ 47, 2, 1, 10,  5,  47,                      [[41, 3]],                      [[48, 3]]], // Double Strike
  [ 48, 3, 1, 10,  5,  48,                      [[47, 3]],                      [[56, 3]]], // Scattershot
  [ 49, 2, 2, 10,  5,  49,                      [[41, 3]],                      [[50, 3]]], // Pinpoint Shot
  [ 50, 3, 2, 10,  5,  50,                      [[49, 3]],                      [[57, 3]]], // Snipe
  [ 51, 2, 3, 10,  5,  51,                      [[43, 3]],                      [[58, 3]]], // Head Snipe
  [ 52, 2, 4, 10,  8,  52,                             [],                             []], // Fire Rounds
  [ 53, 2, 5, 10,  8,  53,                             [],                             []], // Ice Rounds
  [ 54, 2, 6, 10,  8,  54,                             [],                             []], // Volt Rounds
  [ 55, 4, 0, 20,  1,  55,                      [[46, 1]],                             []], // Enlightenment
  [ 56, 4, 1, 20,  8,  56,                      [[48, 3]],                             []], // Ricochet
  [ 57, 4, 2, 20,  8,  57,                      [[50, 3]],                             []], // Rifle Shot
  [ 58, 4, 3, 20,  3,  58,                      [[51, 3]],                      [[59, 3]]], // Stunning Shot
  [ 59, 5, 3, 20,  3,  59,                      [[58, 3]],                             []], // Charged Shot
  [ 60, 0, 0,  0,  1,  60,                             [],                      [[67, 1]]], // Proficiency
  [ 61, 0, 1,  0,  5,  61,                             [],                      [[68, 3]]], // Fireball Rune
  [ 62, 0, 2,  0,  5,  62,                             [],                      [[69, 3]]], // Ice Lance Rune
  [ 63, 0, 3,  0,  5,  63,                             [],                      [[70, 3]]], // Lightning Rune
  [ 64, 0, 4,  0,  3,  64,                             [],                      [[71, 3]]], // Runic Gleam
  [ 65, 0, 5,  0,  5,  65,                             [],                             []], // TP Boost
  [ 66, 0, 6,  0, 10,  66,                             [],                             []], // Herbology
  [ 67, 2, 0, 10,  1,  67,                      [[60, 1]],                      [[75, 1]]], // Expertise
  [ 68, 2, 1, 10,  5,  68,                      [[61, 3]],                      [[76, 3]]], // Flame Rune
  [ 69, 2, 2, 10,  5,  69,                      [[62, 3]],                      [[77, 3]]], // Glacier Rune
  [ 70, 2, 3, 10,  5,  70,                      [[63, 3]],                      [[78, 3]]], // Storm Rune
  [ 71, 2, 4, 10,  5,  71,                      [[64, 3]],                      [[72, 3]]], // Runic Shield
  [ 72, 3, 4, 10,  5,  72,                      [[71, 3]],                      [[79, 3]]], // Runic Guidance
  [ 73, 2, 5, 10,  3,  73,                             [],                             []], // Free Energy
  [ 74, 3, 5, 10,  5,  74,                             [],                             []], // Runic Flare
  [ 75, 4, 0, 20,  1,  75,                      [[67, 1]],                             []], // Enlightenment
  [ 76, 4, 1, 20,  8,  76,                      [[68, 3]],                             []], // Inferno Rune
  [ 77, 4, 2, 20,  8,  77,                      [[69, 3]],                             []], // Blizzard Rune
  [ 78, 4, 3, 20,  8,  78,                      [[70, 3]],                             []], // Galvanic Rune
  [ 79, 4, 4, 20,  8,  79,                      [[72, 3]],                             []], // Rune Mastery
  [ 80, 0, 0,  0,  1,  80,                             [],                      [[87, 1]]], // Proficiency
  [ 81, 0, 1,  0,  5,  81,                             [],                      [[88, 3]]], // Healing
  [ 82, 0, 3,  0,  3,  82,                             [],                      [[82, 3]]], // Refresh
  [ 83, 1, 3,  0,  3,  83,                      [[83, 3]],                      [[91, 3]]], // Treat
  [ 84, 0, 4,  0,  3,  84,                             [],                             []], // Steady Hands
  [ 85, 0, 5,  0,  5,  85,                             [],                      [[94, 3]]], // Heavy Strike
  [ 86, 0, 6,  0, 10,  86,                             [],                             []], // Herbology
  [ 87, 2, 0, 10,  1,  87,                      [[80, 1]],                      [[95, 1]]], // Expertise
  [ 88, 2, 1, 10,  3,  88,                      [[81, 3]],                      [[89, 3]]], // Full Heal
  [ 89, 3, 1, 10,  8,  89,                      [[88, 3]],                      [[96, 3]]], // Party Heal
  [ 90, 2, 2, 10,  5,  90,                             [],                      [[97, 3]]], // Revive
  [ 91, 2, 3, 10,  3,  91,                      [[83, 3]],                      [[92, 3]]], // Group Therapy
  [ 92, 3, 3, 10,  3,  92,                      [[91, 3]],                             []], // Full Refresh
  [ 93, 2, 4, 10, 10,  93,                             [],                      [[98, 3]]], // TP Boost
  [ 94, 2, 5, 10,  8,  94,                      [[85, 3]],                      [[99, 3]]], // Knockout Blow
  [ 95, 4, 0, 20,  1,  95,                      [[87, 1]],                             []], // Enlightenment
  [ 96, 4, 1, 20,  8,  96,                      [[89, 3]],                             []], // Auto-Heal
  [ 97, 4, 2, 20,  8,  97,                      [[90, 3]],                             []], // Auto-Revive
  [ 98, 4, 4, 20,  5,  98,                      [[93, 3]],                             []], // Heal Mastery
  [ 99, 4, 5, 20,  8,  99,                      [[94, 3]],                             []], // Star Drop
  [100, 0, 0,  0,  1, 100,                             [],                             []], // Proficiency
  [101, 0, 1,  0,  5, 101,                             [],                             []], // Regen Waltz
  [102, 0, 2,  0,  5, 102,                             [],                             []], // Attack Tango
  [103, 0, 3,  0,  5, 103,                             [],                             []], // Counter Samba
  [104, 0, 4,  0,  5, 104,                             [],                             []], // Fan Dance
  [105, 0, 6,  0, 10, 105,                             [],                             []], // Dendrology
  [106, 2, 0, 10,  1, 106,                             [],                             []], // Expertise
  [107, 2, 1, 10,  5, 107,                             [],                             []], // Fresh Waltz
  [108, 3, 1, 10,  8, 108,                             [],                             []], // Healing Step
  [109, 2, 2, 10,  5, 109,                             [],                             []], // Guard Tango
  [110, 2, 3, 10,  5, 110,                             [],                             []], // Chase Samba
  [111, 2, 4, 10,  8, 111,                             [],                             []], // Sword Dance
  [112, 2, 5, 10,  8, 112,                             [],                             []], // AGI Boost
  [113, 2, 6, 10,  3, 113,                             [],                             []], // Blast Save
  [114, 4, 0, 20,  1, 114,                             [],                             []], // Enlightenment
  [115, 4, 1, 20,  3, 115,                             [],                             []], // Wide Dance
  [116, 4, 2, 20,  5, 116,                             [],                             []], // Energy Tango
  [117, 4, 3, 20,  5, 117,                             [],                             []], // Trick Samba
  [118, 4, 4, 20,  8, 118,                             [],                             []], // Mist Dance
  [119, 4, 5, 20,  5, 119,                             [],                             []], // Quick Step
  [120, 0, 0,  0,  0, 120,                             [],                             []], //
];

const classes = [
  [ 0,  0, [...Array(20).keys()]], // Landksnecht
  [ 1,  1, [...Array(20).keys()].map(i => i + 20)], // Protector
  [ 2,  2, [...Array(20).keys()].map(i => i + 20 * 2)], // Gunner
  [ 3,  3, [...Array(20).keys()].map(i => i + 20 * 3)], // Runemaster
  [ 4,  4, [...Array(20).keys()].map(i => i + 20 * 4)], // Medic
  [ 5,  5, [...Array(20).keys()].map(i => i + 20 * 5)], // Dancer
  [ 6,  6, [...Array(20).keys()].map(i => i + 20 * 6)], // Hexer
  [ 7,  7, [...Array(20).keys()].map(i => i + 20 * 7)], // Ninja
  [ 8,  8, [...Array(20).keys()].map(i => i + 20 * 8)], // Sovereign
  [ 9,  9, [...Array(20).keys()].map(i => i + 20 * 9)], // Wanderer
];

const levels = [

];

const formats = [

];
