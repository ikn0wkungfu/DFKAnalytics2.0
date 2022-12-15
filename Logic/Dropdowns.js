const { Box } = require("@mui/material")
const {
  default: DarkSummonBadgeImage
} = require("../Components/Hero/DarkSummonBadgeImage")
const { default: PJBadge } = require("../Components/Hero/PJBadge")
module.exports = {
  EyeColors: [
    { value: "203997", label: <Box sx={{ color: "#203997" }}>Blue </Box> },
    { value: "896693", label: <Box sx={{ color: "#896693" }}>Pink </Box> },
    { value: "8d7136", label: <Box sx={{ color: "#8d7136" }}>Brown </Box> },
    { value: "bb3f55", label: <Box sx={{ color: "#bb3f55" }}>Rouge </Box> },
    { value: "2494a2", label: <Box sx={{ color: "#2494a2" }}>Azure </Box> },
    { value: "0d7634", label: <Box sx={{ color: "#0d7634" }}>Green </Box> },
    { value: "613d8a", label: <Box sx={{ color: "#613d8a" }}>Purple</Box> },
    { value: "a41e12", label: <Box sx={{ color: "#a41e12" }}>Red </Box> }
  ],
  SkinColors: [
    { value: "e6a861", label: <Box sx={{ color: "#e6a861" }}>Honey</Box> },
    { value: "f1ca9e", label: <Box sx={{ color: "#f1ca9e" }}>Vanilla</Box> },
    { value: "e5ac91", label: <Box sx={{ color: "#e5ac91" }}>Peach</Box> },
    { value: "c58135", label: <Box sx={{ color: "#c58135" }}>Bronze</Box> },
    { value: "aa5c38", label: <Box sx={{ color: "#aa5c38" }}>Almond</Box> },
    { value: "985e1c", label: <Box sx={{ color: "#985e1c" }}>Golden</Box> },
    { value: "7b4a11", label: <Box sx={{ color: "#7b4a11" }}>Toffee</Box> },
    { value: "57340c", label: <Box sx={{ color: "#57340c" }}>Cocoa</Box> }
  ],
  HairColors: [
    { value: "ab9159", label: <Box sx={{ color: "#ab9159" }}>Basic1</Box> },
    { value: "af3853", label: <Box sx={{ color: "#af3853" }}>Basic2</Box> },
    { value: "578761", label: <Box sx={{ color: "#578761" }}>Basic3</Box> },
    { value: "068483", label: <Box sx={{ color: "#068483" }}>Basic4</Box> },
    { value: "48321e", label: <Box sx={{ color: "#48321e" }}>Basic5</Box> },
    { value: "66489e", label: <Box sx={{ color: "#66489e" }}>Basic6</Box> },
    { value: "ca93a7", label: <Box sx={{ color: "#ca93a7" }}>Basic7</Box> },
    { value: "62a7e6", label: <Box sx={{ color: "#62a7e6" }}>Basic8</Box> },
    { value: "c34b1e", label: <Box sx={{ color: "#c34b1e" }}>Basic9</Box> },
    { value: "d7bc65", label: <Box sx={{ color: "#d7bc65" }}>Basic10</Box> },
    { value: "513f4f", label: <Box sx={{ color: "#513f4f" }}>Basic11</Box> },
    { value: "d48b41", label: <Box sx={{ color: "#d48b41" }}>Basic12</Box> },
    { value: "326988", label: <Box sx={{ color: "#326988" }}>Advanced1</Box> },
    { value: "9b68ab", label: <Box sx={{ color: "#9b68ab" }}>Advanced2</Box> },
    { value: "8d6b3a", label: <Box sx={{ color: "#8d6b3a" }}>Advanced3</Box> },
    { value: "566377", label: <Box sx={{ color: "#566377" }}>Advanced4</Box> },
    { value: "275435", label: <Box sx={{ color: "#275435" }}>Advanced5</Box> },
    { value: "000000", label: <Box sx={{ color: "#000000" }}>Advanced6</Box> },
    { value: "880016", label: <Box sx={{ color: "#880016" }}>Elite1</Box> },
    { value: "353132", label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: "0f0f0f", label: <Box sx={{ color: "#0f0f0f" }}>Elite3</Box> },
    {
      value: "8f9bb3",
      label: <Box sx={{ color: "#8f9bb3" }}>Transcendent1</Box>
    }
  ],
  AppendageColor: [
    { value: "c5bfa7", label: <Box sx={{ color: "#c5bfa7" }}>Basic1</Box> },
    { value: "a88b47", label: <Box sx={{ color: "#a88b47" }}>Basic2</Box> },
    { value: "58381e", label: <Box sx={{ color: "#58381e" }}>Basic3</Box> },
    { value: "566f7d", label: <Box sx={{ color: "#566f7d" }}>Basic4</Box> },
    { value: "2a386d", label: <Box sx={{ color: "#2a386d" }}>Basic5</Box> },
    { value: "3f2e40", label: <Box sx={{ color: "#3f2e40" }}>Basic6</Box> },
    { value: "830e18", label: <Box sx={{ color: "#830e18" }}>Basic7</Box> },
    { value: "6f3a3c", label: <Box sx={{ color: "#6f3a3c" }}>Basic8</Box> },
    { value: "cddef0", label: <Box sx={{ color: "#cddef0" }}>Basic9</Box> },
    { value: "df7126", label: <Box sx={{ color: "#df7126" }}>Basic10</Box> },
    { value: "835138", label: <Box sx={{ color: "#835138" }}>Basic11</Box> },
    { value: "86a637", label: <Box sx={{ color: "#86a637" }}>Basic12</Box> },
    { value: "6b173c", label: <Box sx={{ color: "#6b173c" }}>Advanced1</Box> },
    { value: "a0304d", label: <Box sx={{ color: "#a0304d" }}>Advanced2</Box> },
    { value: "78547c", label: <Box sx={{ color: "#78547c" }}>Advanced3</Box> },
    { value: "352a51", label: <Box sx={{ color: "#352a51" }}>Advanced4</Box> },
    { value: "147256", label: <Box sx={{ color: "#147256" }}>Advanced5</Box> },
    { value: "000000", label: <Box sx={{ color: "#000000" }}>Advanced6</Box> },
    { value: "c29d35", label: <Box sx={{ color: "#c29d35" }}>Elite1</Box> },
    { value: "353132", label: <Box sx={{ color: "#353132" }}>Elite2</Box> },
    { value: "0f0f0f", label: <Box sx={{ color: "#0f0f0f" }}>Elite3</Box> },
    {
      value: "d7d7d7",
      label: <Box sx={{ color: "#d7d7d7" }}>Transcendent1</Box>
    }
  ],
  BackAppendages: [
    { value: 0, label: "None" },
    { value: 1, label: "Monkey Tail" },
    { value: 2, label: "Cat Tail" },
    { value: 3, label: "Imp Tail" },
    { value: 4, label: "Minotaur Tail" },
    { value: 5, label: "Daishō" },
    { value: 6, label: "Kitsune Tail" },
    { value: 7, label: "Zweihänder" },
    { value: 8, label: "Skeletal Wings" },
    { value: 9, label: "Skeletal Tail" },
    { value: 10, label: "Afflicted Spikes" },
    { value: 11, label: "Traveler's Pack" },
    { value: 16, label: "Gryphon Wings" },
    { value: 17, label: "Draconic Wings" },
    { value: 18, label: "Butterfly Wings" },
    { value: 19, label: "Phoenix Wings" },
    { value: 20, label: "Fallen Angel" },
    { value: 21, label: "???" },
    { value: 24, label: "Aura of the Inner Grove" },
    { value: 25, label: "Ancient Orbs" },
    { value: 26, label: "???" },
    { value: 28, label: "Cecaelia Tentacles" }
  ],
  HeadAppendages: [
    { value: 0, label: "None" },
    { value: 1, label: "Kitsune Ears" },
    { value: 2, label: "Satyr Horns" },
    { value: 3, label: "Ram Horns" },
    { value: 4, label: "Imp Horns" },
    { value: 5, label: "Cat Ears" },
    { value: 6, label: "Minotaur Horns" },
    { value: 7, label: "Faun Horns" },
    { value: 8, label: "Draconic Horns" },
    { value: 9, label: "Fae Circlet" },
    { value: 10, label: "Ragfly Antennae" },
    { value: 11, label: "Royal Crown" },
    { value: 16, label: "Jagged Horns" },
    { value: 17, label: "Spindle Horns" },
    { value: 18, label: "Bear Ears" },
    { value: 19, label: "Antennae" },
    { value: 20, label: "Fallen Angel Coronet" },
    { value: 21, label: "???" },
    { value: 24, label: "Wood Elf Ears" },
    { value: 25, label: "Snow Elf Ears" },
    { value: 26, label: "???" },
    { value: 28, label: "Insight Jewel" }
  ],
  HairStylesGeneric: [
    { value: 0, label: "Basic1" },
    { value: 1, label: "Basic2" },
    { value: 2, label: "Basic3" },
    { value: 3, label: "Basic4" },
    { value: 4, label: "Basic5" },
    { value: 5, label: "Basic6" },
    { value: 6, label: "Basic7" },
    { value: 7, label: "Basic8" },
    { value: 8, label: "Basic9" },
    { value: 9, label: "Basic10" },
    { value: 10, label: "Basic11" },
    { value: 11, label: "Basic12" },
    { value: 16, label: "Advanced1" },
    { value: 17, label: "Advanced2" },
    { value: 18, label: "Advanced3" },
    { value: 19, label: "Advanced4" },
    { value: 20, label: "Advanced5" },
    { value: 21, label: "Advanced6" },
    { value: 24, label: "Elite1" },
    { value: 25, label: "Elite2" },
    { value: 26, label: "Elite3" },
    { value: 28, label: "Transcendent1" }
  ],
  HairStylesFemale: [
    { value: 0, label: "Windswept" },
    { value: 1, label: "Fauna" },
    { value: 2, label: "Enchantress" },
    { value: 3, label: "Pineapple Top" },
    { value: 4, label: "Pixie" },
    { value: 5, label: "Darkweave Plait" },
    { value: 6, label: "Dejanira" },
    { value: 7, label: "Courtly Updo" },
    { value: 8, label: "Centaur Tail" },
    { value: 9, label: "Lamia" },
    { value: 10, label: "Casual Ponytail" },
    { value: 11, label: "Wild Ponytail" },
    { value: 16, label: "Vogue Locs" },
    { value: 17, label: "Twin Vine Loops" },
    { value: 18, label: "Sweeping Willow" },
    { value: 19, label: "Odango" },
    { value: 20, label: "Goddess Locks" },
    { value: 24, label: "Ethereal Waterfall" },
    { value: 25, label: "Kunoichi" },
    { value: 28, label: "Lunar Light Odango" }
  ],
  HairStylesMale: [
    { value: 0, label: "Battle Hawk" },
    { value: 1, label: "Wolf Mane" },
    { value: 2, label: "Enchanter" },
    { value: 3, label: "Wild Growth" },
    { value: 4, label: "Pixel" },
    { value: 5, label: "Sunrise" },
    { value: 6, label: "Bouffant" },
    { value: 7, label: "Agleam Spike" },
    { value: 8, label: "Wayfinder" },
    { value: 9, label: "Faded Topknot" },
    { value: 10, label: "Side Shave" },
    { value: 11, label: "Ronin" },
    { value: 16, label: "Gruff" },
    { value: 17, label: "Rogue Locs" },
    { value: 18, label: "Stone Cold" },
    { value: 19, label: "Zinra's Tail" },
    { value: 20, label: "Hedgehog" },
    { value: 24, label: "Skegg" },
    { value: 25, label: "Shinobi" },
    { value: 28, label: "Perfect Form" }
  ],
  Targets: [
    { value: "All", label: "Find" },
    { value: "Tavern", label: "Buy" },
    { value: "Hire", label: "Hire" }
  ],
  Backgrounds: [
    { value: "arctic", label: "Arctic" },
    { value: "city", label: "City" },
    { value: "desert", label: "Desert" },
    { value: "forest", label: "Forest" },
    { value: "island", label: "Island" },
    { value: "mountains", label: "Mountains" },
    { value: "plains", label: "Plains" },
    { value: "swamp", label: "Swamp" }
  ],
  ActiveSkills: [
    {
      value: "Basic1",
      label: "B1 Poisoned Blade"
    },
    { value: "Basic2", label: "B2 Blinding Winds" },
    { value: "Basic3", label: "B3 Heal" },
    { value: "Basic4", label: "B4 Cleanse" },
    { value: "Basic5", label: "B5 Iron Skin" },
    { value: "Basic6", label: "B6 Speed" },
    { value: "Basic7", label: "B7 Critical Aim" },
    { value: "Basic8", label: "B8 Deathmark" },
    {
      value: "Advanced1",
      label: <Box sx={{ color: "success.main" }}>A1 Exhaust</Box>
    },
    {
      value: "Advanced2",
      label: <Box sx={{ color: "success.main" }}>A2 Daze</Box>
    },
    {
      value: "Advanced3",
      label: <Box sx={{ color: "success.main" }}>A3 Explosion</Box>
    },
    {
      value: "Advanced4",
      label: <Box sx={{ color: "success.main" }}>A4 Hardened Shield</Box>
    },
    {
      value: "Elite1",
      label: <Box sx={{ color: "primary.main" }}>E1 Stun</Box>
    },
    {
      value: "Elite2",
      label: <Box sx={{ color: "primary.main" }}>E2 Second Wind</Box>
    },
    {
      value: "Transcendent1",
      label: <Box sx={{ color: "error.main" }}>T1 Resurrection</Box>
    }
  ],
  PassiveSkills: [
    { value: "Basic1", label: "B1 Duelist" },
    { value: "Basic2", label: "B2 Clutch" },
    { value: "Basic3", label: "B3 Foresight" },
    { value: "Basic4", label: "B4 Headstrong" },
    { value: "Basic5", label: "B5 Clear Vision" },
    { value: "Basic6", label: "B6 Fearless" },
    { value: "Basic7", label: "B7 Chatterbox" },
    { value: "Basic8", label: "B8 Stalwart" },
    {
      value: "Advanced1",
      label: <Box sx={{ color: "success.main" }}>A1 Leadership</Box>
    },
    {
      value: "Advanced2",
      label: <Box sx={{ color: "success.main" }}>A2 Efficient</Box>
    },
    {
      value: "Advanced3",
      label: <Box sx={{ color: "success.main" }}>A3 Intimidation</Box>
    },
    {
      value: "Advanced4",
      label: <Box sx={{ color: "success.main" }}>A4 Toxic</Box>
    },
    {
      value: "Elite1",
      label: <Box sx={{ color: "primary.main" }}>E1 Giant Slayer</Box>
    },
    {
      value: "Elite2",
      label: <Box sx={{ color: "primary.main" }}>E2 Last Stand</Box>
    },
    {
      value: "Transcendent1",
      label: <Box sx={{ color: "error.main" }}>T1 Second Life</Box>
    }
  ],
  Professions: [
    { value: "mining", label: "Mining" },
    { value: "foraging", label: "Foraging" },
    { value: "gardening", label: "Gardening" },
    { value: "fishing", label: "Fishing" }
  ],
  StatNames: [
    { value: "Strength", label: "Strength" },
    { value: "Dexterity", label: "Dexterity" },
    { value: "Agility", label: "Agility" },
    { value: "Vitality", label: "Vitality" },
    { value: "Endurance", label: "Endurance" },
    { value: "Intelligence", label: "Intelligence" },
    { value: "Wisdom", label: "Wisdom" },
    { value: "Luck", label: "Luck" }
  ],
  StatBoosts: [
    { value: "STR", label: "STR" },
    { value: "DEX", label: "DEX" },
    { value: "AGI", label: "AGI" },
    { value: "VIT", label: "VIT" },
    { value: "END", label: "END" },
    { value: "INT", label: "INT" },
    { value: "WIS", label: "WIS" },
    { value: "LCK", label: "LCK" }
  ],
  Rarities: [
    { value: "Common", label: "Common" },
    { value: "Uncommon", label: "Uncommon" },
    { value: "Rare", label: "Rare" },
    { value: "Legendary", label: "Legendary" },
    { value: "Mythic", label: "Mythic" }
  ],
  Classes: [
    { value: "Warrior", label: "Warrior" },
    { value: "Knight", label: "Knight" },
    { value: "Thief", label: "Thief" },
    { value: "Archer", label: "Archer" },
    { value: "Pirate", label: "Pirate" },
    { value: "Monk", label: "Monk" },
    { value: "Priest", label: "Priest" },
    { value: "Wizard", label: "Wizard" },
    { value: "Berserker", label: "Berserker" },
    { value: "Seer", label: "Seer" },
    { value: "Legionnaire", label: "Legionnaire" },
    { value: "Scholar", label: "Scholar" },
    { value: "Shapeshifter", label: "Shapeshifter" },
    { value: "Paladin", label: "Paladin" },
    { value: "DarkKnight", label: "DarkKnight" },
    { value: "Ninja", label: "Ninja" },
    { value: "Summoner", label: "Summoner" },
    { value: "Bard", label: "Bard" },
    { value: "Dragoon", label: "Dragoon" },
    { value: "Sage", label: "Sage" },
    { value: "SpellBow", label: "SpellBow" },
    { value: "DreadKnight", label: "DreadKnight" }
  ],
  PJSurvivor: [
    { value: "SURVIVED", label: <PJBadge /> },
    { value: "DIED", label: "RIP" },
    { value: "null", label: "No" }
  ],
  DarkSummoned: [
    {
      value: true,
      label: <DarkSummonBadgeImage size={32} />
    },
    { value: false, label: "No" }
  ]
}
