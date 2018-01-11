# Equipment ![](){ .qstar-backpack }

## Credits

Prices are listed in credits. Credits are a completely digital currency,
that are stored on credit cards. These cards will store amount of credits
on them, and also a list of transactions. Credits may transferred from
these cards to other cards to make transactions.

## Armour

*Armour protects a creature from harm via [damage reduction](#damage-reduction)
or environmental protection such as lethal gases.*

### Damage Reduction ![](){ .qstar-riot-shield }

Armour reduces the incoming [damage](/#damage) (both [endurance](/#endurance)
and [health](/#health)) by its [damage reduction](#damage-reduction) value.

Any [damage reduction](#damage-reduction) can't reduce the damage of a [critical
hit](/#critical-hit) below 1.

!!! note "Example"
    A character is wearing a *Body Armour MK I* and is hit for 15 [endurance
    damage](/#damage) and 2 times for 10 [health damage](/#damage) due to two
    [critical hits](/#critical-hit). The armour reduces all values by 5,
    resulting in 10 [endurance damage](/#damage) and 2 times 5 [health
    damage](/#damage).

### Durability 

Any [critical hit](/#critical-hit) or normal hit that deals [health
damage](/#damage) reduces the durability of the armour by one. [Endurance
damage](/#damage) doesn't lower the armour's durability.

If the durability of the armour drops to zero, it's destroyed or otherwise
rendered useless.

!!! note "Example"
    Let's use the [damage reduction](#damage-reduction) example as base for this
    one. The character was hit by 2 critical hits, reducing the durability of
    the armour by 2 points. If the character was below 10
    [endurance](/#endurance), the excess damage would have targetted his
    [health](/#health) pool. The armour would then have lost another durability
    point.

### Body Armour

Body armour provides basic protection from physical attacks.

| Armour           |   DR | Durability | Cost | Notes |
|------------------|-----:|-----------:|-----:|-------|
| Body Armour MK I |    5 |          4 |  500 |       |

### Suits

Suits are full body suits used in hazardous environments (underwater, space,
extreme heat or cold, or on planets with hazardous climate) or for battle.
Suits all have an armour rating.

| Suit       |   DR | Durability |   Cost | Extras                                                       |
|------------|-----:|-----------:|-------:|--------------------------------------------------------------|
| UHAS MK I  |    2 |          6 |  9 000 | Space suit, mag boots, internal radio                        |
| UHAS MK II |    4 |         10 | 15 000 | Space suit, mag boots, internal radio, camera                |
| MACS MK I  |    6 |         20 | 50 000 | Combat armour, space suit, mag boots, radio                  |
| MACS MK II |    8 |         30 | 90 000 | Advanced combat armour, space suit, mag boots, radio, camera |

## Weapons

### Stats

#### Hit ![](){.qstar-crosshair} #### {.dt}

Better weapons add a bonus to the [attack](/#attack), while bad weapons or
weapons in bad shape lower the attack roll by the specified value.

#### DMG (damage) ![](){ .qstar-gunshot } #### {.dt}

This value denotes the weapons [damage](/#damage). Any *successful*{.qs-s} hit
deals this value to the target as [damage](/#damage).

#### Crit (critical) ![](){ .qstar-headshot-2 } #### {.dt}

If you score a [critical hit](/#critical-hit) you deal the specified value as
[critical damage](/#critical-damage) to the target.

#### RoF ![](){ .qstar-bullets } #### {.dt}

Some weapons, including melee weapons, allow a highe [rate of
fire](/equipment/?rof#stats) than other weapons. See [attack](/#attack) rules for
details.

#### Cap. (capacity) ![](){ .qstar-chaingun } #### {.dt}

Specifies how often a gun can be fired before it has to be
[reloaded](/equipment?reload#stats). Uses of [RoF](/equipment?rof#stats) use
additional ammunition.

#### Reload ![](){ .qstar-cycle } #### {.dt}

The amount of actions it takes to reload the weapon. Reloading can be paused and
continued at any time.

#### Range #### {.dt}

Attacks within the specified range do not penalize the attack.

#### Cost #### {.dt}

The cost of the weapon without ammo.

#### Mag. (magazine) #### {.dt}

The cost of one magazine worth of ammo for the weapon.

#### Notes #### {.dt}

Notes denote additional perks the weapons have.


### Melee Weapons

Melee weapons have a cost and damage. They get the [Might](/#might)** ability
modifier** as extra damage.

| Weapon  |  Hit |  DMG | Crit |  Rof  | Range | Cost | Weight | Notes   |
|---------|-----:|-----:|-----:|:-----:|------:|-----:|-------:|---------|
| Fists   |   +0 |    4 |    2 |   2   | Melee |    - |      - |         |
| Baton   |   +1 |   10 |    5 |   1   | Melee |   50 |    0.5 |         |
| Knife   |   +1 |   14 |    6 |   2   | Melee |  100 |    0.2 | compact |
| Hatchet |   +1 |   18 |    8 |   1   | Melee |  150 |      1 |         |
| Sword   |   +2 |   24 |   10 |   1   | Melee |  500 |      3 |         |

### Ranged Weapons

| Weapon |  Hit |  DMG | Crit |  RoF  | Cap. | Reload |  Range |   Cost |  Mag. | Weight | Notes           |
|--------|-----:|-----:|-----:|:-----:|-----:|:------:|-------:|-------:|------:|-------:|-----------------|
| CP9    |   +1 |   10 |    4 |   1   |      |    1   |  Close |  1 100 |    20 |      1 | compact, pistol |
| P32    |   +1 |   12 |    6 |   1   |   15 |    1   |  Close |    900 |    30 |    0.8 | Pistol          |
| RX60   |   +2 |   16 |    8 |   3   |   30 |    1   | Medium |  6 200 |   150 |      2 |                 |
| AX7    |   +2 |   20 |   10 |   3   |   30 |    1   | Medium |  9 100 |   400 |      3 |                 |
| ASG-8  |   +2 |   30 |   15 |   1   |    7 |    2   |  Close |  7 000 |    50 |    3.5 | shotgun         |
| M80A2  |   +3 |   32 |   15 |   1   |    5 |    3   |    Far | 12 000 |   600 |      4 | high accuracy   |
| RPT    |   +1 |   20 |   10 |   5   |  100 |    4   | Medium | 15 000 |   500 |      7 |                 |
| HP3 A1 |   +3 |   36 |   15 |   1   |    1 |    3   |    Far | 22 000 | 1 000 |      6 | high accuracy   |

!!! info
    Players are responsible for tracking informations regarding their weapons,
    like capacity, magazines and ammo.

!!! tip
    Magazines don't specify their weight. This is to simplify the inventory
    tracking for the players. As a DM you should only let players buy magazines
    if the amount is within reason.

### Weapon perks

* *Compact* means that the weapon can be easily concealed. **Stealth**
  skill checks involved with this weapon should be easier.
* *Pistol* means that the weapon is hand held, and can be carried easily
  on the armour or suit. Most pistols only have good accuracy at shorter
  distances.
* *Rifle* means that the weapon is a full length rifle. Concealing it is
  harder if almost impossible. But the rifle has greater accuracy over
  medium distances.
* *High accuracy* means that the weapon is capable of firing accurately
  over longer distances.
* *Shotgun* means that the weapon shoots buckshot and thus has reduced
  range.

## Medical Items

Medical items recover endurance or even health.

| Item            |  Cost | Weight | Endurance | Health | Notes              |
|-----------------|------:|-------:|----------:|-------:|--------------------|
| Adrenaline Shot |   400 |    0.2 |      1d10 |      - | Temporary (5 min.) |
| First Aid Kit   |   600 |      1 |       1d6 |      - |                    |
| Medical Kit     | 1 200 |      2 |      1d10 |    1d6 |                    |

* *Temporary* means that the effect only lasts some time, indicated by the
  parenthesis.

### Using Medical Items

Using medical items do not require the use of any skills. The **first aid**
skill can be used for additional bonuses. The DC for the check is the amount of
[health](/#health) damage a creature may have. If the DC is met, double the
amount of dice rolled for the current use.

!!! note "Example"
    A character has been wounded and has lost 12 [health](/#health) points. The
    character is treated with a medical kit by a medic, who rolls his **first
    aid** skill against the DC of 12. The medic *succeeds*{.qs-s} on the task,
    and can heal the character by 2d10 [endurance](/#endurance) and 2d6
    [health](/#health) instead of 1d10 [endurance](/#endurance) and 1d6
    [health](/#health).

## Miscellaneous Items

Some checks and tasks may require one or more of these items to be accessible.
Easier tasks can be done without e.g. tools, but tend to require a lot more
time.

| Item                 |  Cost | Weight | Notes                                                                   |
|----------------------|------:|-------:|-------------------------------------------------------------------------|
| Flashlight           |    50 |    0.5 |                                                                         |
| Mobile Laboratory    | 1 000 |     10 | Used to take samples.                                                   |
| Night Vision Goggles |  2000 |      2 | Allows lightless vision in dark areas.                                  |
| PDA                  |   500 |      1 | GPS, Pedometer, Interface for electronic devices, etc.                  |
| Thermite             |   100 |    0.5 | Pyrotechnic composition of metal powder to breach through other metals. |
| Toolbox              |  2000 |     10 |                                                                         |
| Welder               |   250 |      5 |                                                                         |
