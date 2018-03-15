## Glossary


Action point
:   Does stuff

Roleplaying circumstance
:   Does different stuff.
:   Does different stuff.

Apple
:   Pomaceous fruit of plants of the genus Malus in
    the family Rosaceae.

## Character

1. Choose a race
2. Assign primary stats
3. Determine secondary stats
4. Buy skills, perks and equipment
5. Adjust character values

#### Race

Every character has a race or category (e.g. animals, robots). A race modifies:

* primary stats, secondary stats, pools and skills
* adds perks and flaws,
* enables access to inherent stunts,
* and may add roleplaying circumstances

#### Primary stats

Primary stats start at 0. Distribute 12 points to primary stats upon character
creation.

| Primary stat |   -5 |   -4 |   -3 |   -2 |   -1 |    0 |    1 |    2 |    3 |    4 |    5 |
|--------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| Modifier     |   -3 |   -2 |   -2 |   -1 |   -1 |   +0 |   +1 |   +1 |   +2 |   +2 |   +3 |

```
Modifier = ceil(Stat / 2)

MAX = 5 - race penalties

Stat interval = [-5, MAX]
```

<div class="col-layout-start"></div>

#### Secondary stats

`MAX = XP + 2 + other bonuses`

* Downtime `[0, 10]`
* Influence `[0, MAX]`
* Resources `[0, MAX]`
* Research `[0, MAX]`

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

#### Pools

* Health: `5 + <Might>`
* Endurance: `10 + (<Might> - 5) * 5`

<div class="col-layout-end clearfix"></div>

### Skills

Moved to [Skills](/skills).

### Perks

Perks unlock abilities, improve stats or change roleplayining circumstances.

This list of perks is just a list of examples. Individual perks can be removed
or added. Even you as a player, provided you GM is OK with it, may add perks.

While perks state their costs, your GM can require additional things before you
can *buy* a perk, i.e. you first have to:

* find someone how can train you,
* make acquiantances with important NPCs,
* use skills related to the perk,
* etc.

Also, if the perk is not reasonable at all for your character, the perk simply
isn't available to you.

<div class="col-layout-start"></div>

##### Brute {.dt}

Deal double damage with a melee attack.

**AP cost:** 3
**Requires:** 8 [Might](#might)
**Cost:** 1 [Cr.](#credits)
{.dt-sub}

##### Scientist {.dt}

Max. Research +1

**Requires:** 8 [Intelligence](#intelligence)
{.dt-sub}

##### Gunslinger {.dt}

Draw any handheld weapon without AP cost.

**Requires:** 10 [Speed](#speed)
{.dt-sub}

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

##### Wealthy {.dt}

Max. Influence +1

**Requires:** 6 [Charisma](#charisma)
{.dt-sub}

<div class="col-layout-end clearfix"></div>

| Perk      | Requirement                     | Description      |
|-----------|---------------------------------|------------------|
| Scientist | 8 [Intelligence](#intelligence) | Max Reserach +1  |
| Wealthy   | 6 [Charisma](#charisma)         | Max Influence +1 |

#### Flaws

| Flaw      | Requirement | Description       |
|-----------|-------------|-------------------|
| Extrovert | -           | Max. Influence -1 |

#### Equipment

* Outfit
    * Armour
    * Skill bonuses
* Weapons
    * Melee
    * Ranged
* Utility

## Crisis

### Turn Order

`Turn order = Intelligence + Speed + other bonuses`

On conflicts, the target with the higher intelligence comes first. If there is
still a tie, the target with the higher speed comes first. If there is still
another tie, each character rolls a d6. The higher roll wins. On a tie, roll
again.

### Actions

Actions within a crisis require **action points** (AP) to be spent.

Each character has a maximum of 6 action points. At the start of each turn,
including the beginning of a crisis, the character gains 4 action points. Action
points can never exceed 6 or deceed 0. Exceeding action points are lost, while
actions that require more than the remain action points are disabled until
enough action points are accumulated.

!!! info "Tracking action points"
    Tracking action points is very easy. Get a d6, put it front of you, and let
    it face the number of action points your character has. If you are at zero
    action points, put the die aside to reflect that.

#### Actions gained from Items

Items can enable certain actions, that are unavailable otherwise. For example, a
mighty two-handed sword could enable the whirlwind action, which allows a
character to attack all targets in melee range with a single attack.

#### Available Actions

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise.

| Action |   AP | Description                                                                |
|--------|-----:|----------------------------------------------------------------------------|
| Move   |    1 | Move up to the character's [Speed](#speed) in meters.                      |
| Sneak  |    1 | Move up to half the character's [Speed](#speed) in meters.                 |
| Hide   |    3 | Hide from others, provided they have no direct vision of you.              |
| Attack |    2 | Attack with a *normal* weapon.                                             |
| Draw   |    1 | Draw a weapon and make it ready for combat use, e.g. release safety catch. |

## Combat

### Attacking

```
Attack = <Weapon skill check> + <Weapon Hit> - <Range penalty>
<==>
Attack = 3d6 + <Weapon Hit> + <Primary stat mod> + <Skill> - <Range penalty>
```

If the attack hits, deal endurance damage. If the **stunt** *critical hit* is
used, deal additional critical damage.

### Defence

```
Defence = 10 + <Speed mod> + cover + other bonuses

Defence vs melee = <Melee> + other bonuses
```

Every enemy in melee range reduces *defence vs melee* by 2. This only applies if
there is more than one enemy in range.

### Cover

Can't melee attack targets in total cover.

* Cover `defence +2`
* Heavy Cover `defence +5`
* Total Cover `unhittable`

## Vessel

#### Origin

Like race, only for vessels.

<div class="col-layout-start"></div>

#### Primary stats

All stats defined by vessel base.

| Primary stat |    0 |    1 |    2 |    3 |    4 |    5 |    6 |    7 |    8 |    9 |   10 |
|--------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| Modifier     |   -3 |   -2 |   -2 |   -1 |   -1 |   +0 |   +1 |   +1 |   +2 |   +2 |   +3 |

`MAX = 10 - origin penalties`

* Firepower `[0, 5, MAX]`
* Maneuverablity `[0, 5, MAX]`
* Subsystems `[0, 5, MAX]`
* Crew `[0, 5, MAX]`

<div class="col-layout-end"></div>

<div class="col-layout-start"></div>

#### Secondary stats

`MAX = vessel base + other bonuses`

* Size `<vessel base>`
* Cargo `[0, <Size> * 5 + other bonuses]`
* Resources `[0, MAX]`
* Supply `[0, MAX]`

#### Pools

* Hull: `5 + <Size> * 5`
* Shields: `10 + <Size> * <Firepower>`

<div class="col-layout-end clearfix"></div>

#### Skills

A vessel has no skills.

Modifiers from the vessel's primary stats are added to the character's
*vessel*-skills (**Heavy Weapons**, **Operate**, **Engineering**,
**Command**).

#### Perks

| Perk               | Requirement                 | Description   |
|--------------------|-----------------------------|---------------|
| Emergency reserves | [Subsystems](#subsystems) 6 | Max Supply +2 |

#### Flaws

| Flaw      | Requirement | Description |
|-----------|-------------|-------------|
| Cluttered | -           | Cargo -2    |

#### Equipment

* Outfit
* Weapons
* Utility