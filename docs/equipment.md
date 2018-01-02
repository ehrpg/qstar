# Equipment

## Credits

Prices are listed in credits. Credits are a completely digital currency,
that are stored on credit cards. These cards will store amount of credits
on them, and also a list of transactions. Credits may transferred from
these cards to other cards to make transactions.

## Suits

Suits are full body suits used in hazardous environments (underwater, space,
extreme heat or cold, or on planets with hazardous climate) or for battle.
Suits all have an armour rating. Armour reduces the incoming damage (both
normal and critical) by the listed damage reduction amount. Any damage above
the damage reduction is passed on to the character wearing the suit. The
full damage is subtracted from the hit points of the armour. If the armour
reaches zero hit points its damage reduction drops to zero and thus stops
being useful.

| Suit       |   DR |   HP |   Cost | Extras                                                       |
|------------|-----:|-----:|-------:|--------------------------------------------------------------|
| UHAS MK I  |    2 |   40 |  9 000 | Space suit, mag boots, internal radio                        |
| UHAS MK II |    4 |   60 | 15 000 | Space suit, mag boots, internal radio, camera                |
| MACS MK I  |    6 |   50 | 50 000 | Combat armour, space suit, mag boots, radio                  |
| MACS MK II |    8 |   70 | 90 000 | Advanced combat armour, space suit, mag boots, radio, camera |

## Weapons

### Stats

<dl>
  <dt>Hit</dt>
  <dd>Specifies any additional bonuses to an attack roll with this weapon.</dd>

  <dt>DMG (damage)</dt>
  <dd>This value denotes the weapons damage. Any successful hit deals this value
  to the targets endurance pool.</dd>

  <dt>Crit (critical)</dt>
  <dd>If you score a <a href="/#critical-hit">critical hit</a> you deal the
  specified value as damage to the health pool of your target.</dd>

  <dt>RoF</dt>
  <dd>Some weapons, including melee weapons, allow a higher rate of fire than
  other weapons. See <a href="/#attack">attack rules</a> for details.</dd>

  <dt>Cap. (capacity)</dt>
  <dd>Specifies how often a gun can be fired before it has to be reloaded. Uses
  of RoF use additional ammunition.</dd>

  <dt>Reload</dt>
  <dd>The amount of turns it takes to reload the weapon. Reloading can be paused
  and continued anytime.</dd>

  <dt>Range</dt>
  <dd>Attacks within the specified range do not penalize the attack.</dd>
  
  <dt>Cost</dt>
  <dd>The cost of the weapon without ammo.</dd>

  <dt>Mag. (magazine)</dt>
  <dd>The cost of one magazine worth of ammo for the weapon.</dd>

  <dt>Notes</dt>
  <dd>Notes denote additional perks the weapons have.</dd>

</dl>

### Melee Weapons

Melee weapons have a cost and damage. They get the **might ability modifier** as extra damage.

| Weapon  |  Hit |  DMG | Crit |  Rof  | Range | Cost | Weight | Notes   |
|---------|-----:|-----:|-----:|:-----:|------:|-----:|-------:|---------|
| Fists   |   +0 |    4 |    2 |   2   | Melee |    - |      - |         |
| Baton   |   +1 |   10 |    5 |   1   | Melee |  100 |    0.5 |         |
| Knife   |   +1 |   14 |    6 |   2   | Melee |  200 |    0.2 | compact |
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
| First Aid Kit   |   600 |      1 |       1d6 |      - |                    |
| Medical Kit     | 1 200 |      2 |      1d10 |    1d6 |                    |
| Adrenaline Shot |   400 |    0.2 |      1d10 |      - | Temporary (5 min.) |

* *Temporary* means that the effect only lasts some time, indicated by the
  parenthesis.

## Miscellaneous Items

Some checks and tasks may require one or more of these items to be accessible.
Easier tasks can be done without e.g. tools, but tend to require a lot more
time.

| Item              |  Cost | Weight | Notes                                                  |
|-------------------|------:|-------:|--------------------------------------------------------|
| Toolbox           |  2000 |     10 |                                                        |
| PDA               |   500 |      1 | GPS, Pedometer, Interface for electronic devices, etc. |
| Flashlight        |    50 |    0.5 |                                                        |
| Welder            |   250 |      5 |                                                        |
| Mobile Laboratory | 1 000 |     10 | Used to take samples.                                  |
