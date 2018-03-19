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

Moved to [Character](/character).

### Skills

Moved to [Skills](/skills).

### Perks & Flaws

Moved to [Perks & Flaws](/perks-flaws).

### Equipment

* Outfit
    * Armour
    * Skill bonuses
* Weapons
    * Melee
    * Ranged
* Utility

## Crisis

Moved to [Crisis](/crisis).

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