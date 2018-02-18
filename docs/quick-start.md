# Quick Start Rules

> This is a summary of the Q* RPG System. Explanations are shorter and more to
> the point, but the the descriptions aren't as detailed and edge cases may be
> disregarded altogether. If something is unclear, look up the full rules!

You play a character, and the GM manages non-player characters. Every character
is defined by a set of attributes. Attributes include stats, experience, race,
perks, flaws, skills etc.

## Character Creation

> The quick rules explain the rules in a different order than the steps you'd
> take to create a character. This is because the rules are builiding up on each
> other.

Before creating a character, you should create a backstory for you character.
Talk to your GM about the roles needed by the party. Also, your backstory may
award you perks or impose penalties in form of flaws.

1. Choose a [race](#race)
2. Assign [primary stats](#primary)
3. Determine [pools](#pools)
4. *Buy*:
    * [Primary stats](#primary)
    * [Perks](#perks-flaws) (see [perks & flaws list](#perks-flaws-list))
    * [Skills](#skills) (see [available skills](#available-skills))
    * [Equipment](#equipment)

## Experience

Every character starts with 0 experience points.

**GAINED**{.hf} by noticeable achievements and story completions.

**USED**{.hf} to improve the maximum value of [secondary stats](#secondary).

## Stats

Stats, are split into three categories:

* **Primary** stats, which describe what a character can do,
* **Secondary** stats, which describe what means a character has to do something,
* and **Pools**, which describe the health and well-being of a character.

Primary stats are mostly fixed and only changed due to fatal events or
accomplishments. Secondary stats are in essence another sort of currency and are
subject to frequent changes. Pools are used for combat, environmental hazards,
etc.

### Primary

Primary stats have ranks going from 1 to 10. Five (5) is the average, conferring
neither a benefit nor a drawback. Every point below or above five grants an
additional benefit or drawback to various checks. This benefit or drawback is
called **ability modifier**{.hf}:

| Primary stat |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |   10  |
|--------------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Modifier     |   -3  |   -2  |   -2  |   -1  |   -1  |   +0  |   +1  |   +1  |   +2  |   +2  |   +3  |

Every character starts with each primary stat on 5. On character creation you
gain 12 points you can distribute to your primary stats. A primary stat can
never be higher than 10.

If a primary stat drops to zero, the character dies.

<div class="col-layout-start"></div>

#### Might

**USED**{.hf} to determine the character's strength and toughness.

#### Speed

**USED**{.hf} to determine the character's reflexes and speed.

#### Intelligence

**USED**{.hf} to determine the character's ability to remember and learn things.

#### Charisma

**USED**{.hf} to determine the character's ability to interact with others.

<div class="col-layout-end"></div>

### Secondary

Every secondary stat has a maximum value, that can never be exceeded. All
exceeding points are lost. The maximum value is affected by perks, experience
and special equipment.

<div class="col-layout-start"></div>

#### Loot

Loot is the easiest form of reward. One unit of loot is called a parcel. Four
parcels require one storage space (e.g. vessels). A character can carry his
might stat in parcels.

**GAINED**{.hf} by looting enemies, or as reward from adventures and quests.

**USED**{.hf} to sell for profits and acquiring resources.

**SELLING**{.hf} loot nets `500 Cr.` per parcel sold. Selling 4 parcels at once
nets an extra `500 Cr.` on top (resulting in `2 500 Cr.` total).

**BUYING**{.hf} loot usually implies some kind of trade run (quest type). Buying
loot this way costs `250 Cr.` per parcel. If no trade run is done, the parcel
costs `500 Cr.` instead.

**EXCHANGING**{.hf} loot for [resources](#resources) is done at an exchange rate
of 12 loot parcels per resource point.

!!! summary "Maximum Loot"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="character">Might</span> +
        <span data-bracket-top="Upgrades">other bonuses</span>
    </div>

#### Downtime

The maximum downtime any character can accumulate is 10. This maximum can never
be changed.

**GAINED**{.hf} while adventuring. A character gains more downtime in between
adventures and longer periods of downtime during adventures. Any character gains
1 downtime each session.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

#### Influence

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. Influence is lost by harming and disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc. Actions may require influence to be spent.

!!! summary "Maximum Influence"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Experience">XP</span> +
        <span data-bracket-top="Base">2</span> +
        <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

#### Resources

**GAINED**{.hf} by looting enemies, or as reward from adventures and quests.

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

!!! summary "Maximum Resources"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Experience">XP</span> +
        <span data-bracket-top="Base">2</span> +
        <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

#### Research

Upgrades and equipment require blueprints to be researched first (e.g.
experimental weapons). Spending research unlocks the blueprint for the whole
party. Afterwards, the upgrade or equipment can be acquired. Also, vessels, and
vessel ugprades and equipment require technology. Research can be exchanged for
technology.

**GAINED**{.hf} by researching in downtime, or as a reward from adventures and
quests.

**USED**{.hf} to unlock upgrades and equipment for characters and vessels. Also
can be used to unlock bleeding edge vessels.

**EXCHANGING**{.hf} research points for technology (see vessels) is done at an
exchange rate of 12 research points per technology point.

!!! summary "Maximum Research"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Experience">XP</span> +
        <span data-bracket-top="Base">2</span> +
        <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

!!! tip "Research applications"
    Research isn't limited to vessels. Finding a cure for a disease for example
    requires research points. Finding a way to administer the cure effectively
    may require technology points.

<div class="col-layout-end"></div>

### Pools

Each creature has two pools: [health](#health) and [endurance](#endurance).
Objects only have a [health](#health) pool.

#### Health

If [health](#health) drops to zero, the character is killed.

#### Endurance

A character that reaches zero [endurance](#endurance) can only make a single
action each round. If any other condition were to reduce the amount of actions
the character could take in any ways, the character becomes **incapacitated**
instead.

## Race

Every character has a race or category (e.g. animals, robots). A race modifies:

* secondary stats and pools
* adds perks or flaws,
* enables access to inherent Primary stats,
* and may add roleplaying circumstances

## Perks & Flaws

Perks have a primary stat requirement that has to be met. If this requirement is
not met, the perk cannot be taken. If the perk was taken in the past, but the
requirement is not met anymore, you do not gain any benefits from the perk, but
still suffer penalties, if any, from it.

## Skills

A character usually can only have 3 skills at master rank. Skill ranks can be
reduced at anytime, but the credits the upgrade cost is lost.

| Rank       | Skill Bonus |
|------------|------------:|
| Untrained  |          -2 |
| Trained    |          +0 |
| Proficient |          +2 |
| Skilled    |          +4 |
| Master     |          +6 |

!!! summary "How to make a **skill check**"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="base">3d6</span> ±
        <span data-bracket-top="modifier">ability</span> ±
        <span data-bracket-bottom="rank bonus">skill</span> ±
        <span data-bracket-top="circumstance">other bonuses</span>
    </div>

### Available Skills

<div class="col-layout-start"></div>

#### Might Skills

* Athletics
* Breaching
* Melee
* Micro Gravity

#### Speed Skills

* Driving
* Heavy Weapons
* Light Weapons
* Lockpicking
* Piloting
* Stealth

#### Intelligence Skills

* Engineering
* Explosives
* First Aid
* Hacking
* Knowledge
* Notice
* Science

#### Charisma Skills

* Back story
* Oratory
* Sense Motive
* Tactics

<div class="col-layout-end"></div>

## Improving your character

<div class="col-layout-start"></div>

### Downtime

Characters require time and money in order to be improved:

| Attribute    | Downtime |
|--------------|---------:|
| Primary stat |        8 |
| Skill        |        2 |
| Get Perk     |        2 |
| Remove Flaw  |        2 |
| Trade        |        1 |

### Primary stats

Improving a primary stat costs:

Formula: `cost = abs(mod) ^ 3 * 2000`

| New Rank |     Cost |
|----------|---------:|
| 1        | -128 000 |
| 2        |  -54 000 |
| 3        |  -16 000 |
| 4        |   -2 000 |
| 5        |        0 |
| 6        |    2 000 |
| 7        |   16 000 |
| 8        |   54 000 |
| 9        |  128 000 |
| 10       |  250 000 |

### Perks

Buying a perk costs:

The [perks](/perks-flaws) description lists the price.

### Skills

Improving a skill costs:

Formula: `cost = ((x - 1) ^ 3) * 3000 + 1000`

| Rank        | Rank level |   Cost |
|-------------|-----------:|-------:|
| Untrained   |          0 |      0 |
| Proficient  |          1 |  1 000 |
| Trained     |          2 |  4 000 |
| Experienced |          3 | 25 000 |
| Master      |          4 | 82 000 |

<div class="col-layout-end"></div>

## Perks & Flaws List

| Name      | Requirements                     | Description                                                    |
|-----------|----------------------------------|----------------------------------------------------------------|
| Mule      | 6 [Might](/#might)               | Increase your [maximum loot](/character#loot) value by 1       |
| Scientist | 6 [Intelligence](/#intelligence) | Increase your [maximum technology](/character#technology) by 1 |
| Diplomat  | 6 [Charisma](/#charisma)         | Increase your [maximum influence](/character#influence) by 1   |

| Name   | Requirements                                                                 | Description                                                                                                                                                                                                   |
|--------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Leader | 8 [Charisma](/#charisma), 2 [Small Unit Tactics](/skills#small-unit-tactics) | Increases [Oratory](/skills#oratory) and  [Small Unit Tactics](#/skills#small-unit-tactics) skill checks by 1<br>Stunt: **6**{.qs-d6} Effected characters heal 1d6 [endurance](/#endurance) damage [^Leader]. |

[^Leader]:
    Can only be used once until the effected character has been fully healed.

## Equipment

### Credits

### Armour



### Weapons

| Weapon  |  Hit |  DMG | Crit |  RoF | Cap. | Clips | Reload | Range |  Cost | Mag. |
|---------|-----:|-----:|-----:|-----:|-----:|------:|-------:|-------|------:|-----:|
| Pistol  |   +1 |   10 |    5 |    1 |    8 |     4 |      1 | Close | 1 000 |  250 |
| Shotgun |   +3 |   15 |   10 |    1 |    2 |     5 |      2 | Close | 1 000 |  100 |

### Utility

