NPC Groups/Masses use Morale
  - Morale lower Threshold -> Morale roll - Difference.
  - If Morale roll is failed, group is routed.

Sanity/Horror
  - Horror Points unlock/improve "Occultism" Skill.
  - Horror > Threshold -> Sanity roll
  - If Sanity roll is failed, character becomes insane.

# Outline

Attributes, Skills, Race, Traits, Perks & Flaws, Acquisitions

Character
  Attributes: Body, Mind, Soul (d4, d6, d8, d10, d12)
  Race: Attributes, Skills, Perks, Flaws
  Skills: Action (Body), Knowledge (Mind), Social (Soul)
          d4, d6, d8, d10, d12
  Traits: 0-2 upon character creation
  Perks: Bought using INF
  Flaws: "Story"-Penalties
  Stats:
    PACE: movement (Body)
    PER: perception (Mind)
    HP: health (Body)
    Karma: -10 to +10 ???
  Acquisitions: LOOT, ST, INF, RES, TECH
    LOOT: abstracts Looting
    ST: abstracts time
    INF: currency for perks, vessels.
    RES: currency for powerful equipment
    TECH: unlocking equipment
Equipment
  Weight: Body
  BULK: Carrying Capacity

Crisis
  Turn Order: Body
  AP: 0-6
  Actions
  Attacking
  Damaging
  Healing
  Conditions



# Ready for revision

* Character Creation
* Character
  - Index
  - Races
  - Skills
  - Traits (TODOs, add more traits)
  - Perks (TODOs, add more perks)
  - Flaws (TODOs, add more flaws)
* Equipment (improve item listing)
  - Index
  - Traits (add more traits)
  - Weapons (adjust values, add more weapons)
  - Armour & Outfits (adjust values, add more armour & outfits)
  - Utils & Misc (adjust values, add more items)
* Crisis
  - Index (adjust values)
  - Actions (adjust values, add more actions)
  - Conditions (adjust values, add more conditions)
* Environment

# Drafts

## Combat / Health / Damage

### Health

3 Pools:
  * Body: physical damage
  * Mind: mental damage
  * Soul: character damage

Each die has its own health pool. If the pool is empty you take 1 Attribute
Damage. Wounds carry over to the next die's health pool.

| Attribute |   d4   |   d6   |   d8   |   d10   |   d12   |
|-----------|:------:|:------:|:------:|:-------:|:-------:|
| Health    | d4 + 0 | d6 + 2 | d8 + 4 | d10 + 6 | d12 + 8 |

### Damage

Wounds = Damage

If (Wounds >= Health)
  1 Attribute Damage
  Damage carries over to *next Health pool*

If (d4 Health <= 0)
  Applies condition
  Damage carries over to next attribute.

Body: 0 -> Exhausted
  + Mind: 0 -> Unconcious
Mind: 0 -> Lethargic
  + Body: 0 -> Unconcious
Soul: 0 -> Mad
  + Body/Mind: 0 -> Empty Husk

Body + Mind + Soul = 0 -> Dead
Body + Mind = 0 && Soul Wounds > 0 -> Dying

### Healing

**Resting:** If a die's health pool is not maxed, roll the current Attribute's
die and regain that amount of health. Health cannot exceed the health pool's
max.

**Healing:** A healer has to succeed on **Medicine** with a DC of the patient's
current wounds. On success, the patient can roll roll his die a second time.

**Healing a Dying character:** A healer has to succeed on **Medicine** with a DC
of 4.

**Healing yourself when dying:** If you're dying you have to roll on Soul with a
DC equal to 4 plus your wounds. If you succeed you aren't dying anymore, but
stay unconcious. You heal normally as if resting.

**Attribute Damage:** A healer has to succeed on **Medicine** with a DC equal to
the amount of sides of the patient's current die. E.g. a d4 -> d6 is a DC of 4.
