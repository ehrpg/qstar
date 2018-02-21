## Character

1. Choose a race
2. Assign primary stats
3. Determine secondary stats
4. Buy skills, perks and equipment
5. Adjust character values

#### Race

Every character has a race or category (e.g. animals, robots). A race modifies:

* primary stats, secondary stats, pools and skills
* adds perks or flaws,
* enables access to inherent stunts,
* and may add roleplaying circumstances

<div class="col-layout-start"></div>

#### Primary stats

Primary stat starts at 5. Distribute 12 points to primary stats upon character
creation.

| Primary stat |    0 |    1 |    2 |    3 |    4 |    5 |    6 |    7 |    8 |    9 |   10 |
|--------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| Modifier     |   -3 |   -2 |   -2 |   -1 |   -1 |   +0 |   +1 |   +1 |   +2 |   +2 |   +3 |

`MAX = 10 - race penalties`

* Might `[0, 5, MAX]`
* Speed `[0, 5, MAX]`
* Intelligence `[0, 5, MAX]`
* Charisma `[0, 5, MAX]`

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

#### Secondary stats

`MAX = XP + 2 + other bonuses`

* Downtime `[0, 10]`
* Influence `[0, MAX]`
* Resources `[0, MAX]`
* Research `[0, MAX]`

<div class="col-layout-end clearfix"></div>

#### Pools

* Health: `5 + <Might>`
* Endurance: `10 + (<Might> - 5) * 5`

#### Skills

| Skill rank      | Requires primary stat | Skill bonus |
|-----------------|----------------------:|------------:|
| Untrained       |                     - |          -2 |
| Trained         |                     6 |          +1 |
| Skilled         |                     8 |          +3 |
| Master (max. 3) |                    10 |          +6 |

If the requirement is not met anymore, reduce the skill rank temporarily to the
next best valid skill rank that fulfills the requirement.

<div class="col-layout-start"></div>

* Might skills
    * Athletics
    * Force
    * Melee
    * **Heavy Weapons**
* Speed skills
    * Acrobatics (+ Micro Gravity)
    * Light Weapons
    * Stealth (+ Lockpicking)
    * **Operate**

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

* Intelligence skills
    * Perception
    * Science (*)
        * Biology
        * Chemistry
        * Computer
        * Medicine
        * Physics
    * **Engineering**
* Charisma skills
    * Back story
    * Oratory (+ Sense Motive)
    * Tactics
    * **Command**

<div class="col-layout-end clearfix"></div>

(*) Science: Choose two fields instead of one when training this skill the first
time. Additional fields can be trained following normal skill learning rules.

#### Perks

asdf

#### Flaws

asdf

#### Equipment

* Outfit
    * Armour
    * Skill bonuses
* Weapons
    * Melee
    * Ranged
* Utility

## Vessel

#### Origin

Like race, only for vessels.

<div class="col-layout-start"></div>

#### Primary stats

All stats defined by vessel base.

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

<div class="col-layout-end clearfix"></div>

#### Pools

* Hull: `5 + <Size> * 5`
* Shields: `10 + <Size> * 5 + <Firepower>`

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