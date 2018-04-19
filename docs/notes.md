## Character

Moved to [Character](/character).

### Skills

Moved to [Skills](/skills).

### Perks

Moved to [Perks](/perks).

### Flaws

Moved to [Flaws](/flaws).

### Crisis

Moved to [Crisis](/crisis).

## Equipment

Moved to [Equipment](/Equipment).

# Vessel

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

## Weapons

### Weapon slots

* Underbarrel
* Scope
* Stock
* Barrel
* Ammunition

### Weapon modifications

#### Underbarrel

Buckshot
:   Allos the use of a single buckshot for close quarter engagements.

Flashlight
:   Provides illumination while holding a weapon with two hands.

Grenade launcher
:   Allows the use of special grenades while holding a weapon with hands,
without having to swap weapons first.

Laser pointer
:   Shows where the weapon is pointing at. Enhances the weapon's **HIT** by one.

#### Scopes

2X
:   Doubles the range increment of the weapon.

4X
:   Triples the range increment of the weapon. The first increment imposes a -4
penalty.

10X
:   Quads the range increment of the weapon. The first increment imposes a -10
penalty, and the second one a -4 penalty.

#### Ammunition

AP Ammunition
:   Reduces the armour's durability by another point.

HP Ammunition
:   Deals double the amount of [Endurance](/character#endurance-ep) damage to a
target, provided it's not wearing any armour that provides DR and has durability
left.
