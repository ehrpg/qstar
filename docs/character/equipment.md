# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

## Cost

All items cost [Credits](#credits), while some items may also cost
[Resources](/character#resources-res) to maintain the upkeep, e.g. ammo,
cleaning, restocking etc.

Whenever there is a cost listed without units, then Credits are used.

### Credits

A universal currency for buying most things.

### Looting items

Looting items that only cost [Credits](#credits) can be used normally.

If a looted item requires [Resources](/character#resources-res) a character may
spend his available [Resources](/character#resources-res) on it to keep it. If
he doesn't have enough [Resources](/character#resources-res) to keep it or
doesn't want to keep it, it stops functioning after a while. For example the
magazines of a weapon cannot be restocked when resting.<br>
These items can be sold for the usual [Credits](#credits) though. They do not
give you extra [Resources](/character#resources-res) however.

## Weight

An item can specify its Weight. The Weight value indicates the minimum
[Might](/character#might-mi) needed to carry the item. The `#` column in the
[Ability](/character#abilities) rank table shows the rank required.

If the Weight column shows zero or has no Weight, then its Weight can be
disregarded.

### Overburdened

Only items that are equipped, e.g. wielded weapons, worn armour and outfits,
etc. are subject to this rule. An item that's kept in the character's inventory
is not influencing the character.

An item's Weight exceeding the character's [Might](/character#might-mi) reduces
a character's [Speed](/character#speed-sp) by the difference. This includes
[Turn Order](/crisis#turn-order) and [Defence](/crisis#defence).

!!! danger "Overburdened"
    This penalty does not reduce the [Speed](/character#speed-sp) rank at all.
    It simply reduces all checks related to it.

!!! example "Overburdened"
    Jack has [Might - Mediocre](/character#might-mi) (rank 3), and picks up a
    weapon with Weight 5 and decides to use it. The difference is 2, so all his
    [Speed](/character#speed-sp) checks (including skill checks that require
    [Speed](/character#speed-sp)), [Turn Order](/crisis#turn-order) and
    [Defence](/crisis#defence) are reduced by 2.

## Slots

A character can only carry a number of items up to her number of slots. The
number of slots is further influenced by [Might](/character#might-mi),
[Perks](/character/perks) and equipment.

An item occupies slots equal to its Weight. An item with a Weight of 4 occupies
4 slots.

If the item's Weight is 0 or is not specified, then the items still requires one
slot, unless otherwise mentioned.

!!! summary "Amount of slots"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">15</span> ±
        <span data-bracket-top="Modifier">Might * 2</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

## Equipment condition

An item *can* have a condition, making it better or worse. As with abilities and
skills for characters, the item condition uses these adjectives:

|    # | Item condition | Modifier | [RES](/character#resources-res) cost |
|-----:|----------------|---------:|-------------------------------------:|
|    0 | Terrible       |       -3 |                                   -2 |
|    1 | Poor           |       -2 |                                   -1 |
|    2 | Mediocre       |       -1 |                                    0 |
|    3 | Fair           |        0 |                                    0 |
|    4 | Good           |       +1 |                                    0 |
|    5 | Great          |       +2 |                                   +1 |
|    6 | Superb         |       +3 |                                   +2 |

Buying items that have a positive modifier usually costs 1
[Influence](/character#influence-inf).

Any item can receive the modifier to **any** of its stats. The modifier can also
be split between multiple stats. For example, a superb weapon could receive +1
to its **HIT** stat, and +2 to its **CAP** stat.

Better items need more [Resources](/character#resources-res) and inferior items
need less [Resources](/character#resources-res) to be maintained. The Modifier
of an item however can reduce the [Resources](/character#resources-res) cost, if
any, too. The [Resources](/character#resources-res) cost can never be lower than
1.

If an item's condition were to drop below Terrible, the item is destroyed or
otherwise rendered useless.

!!! tip "Looting and Item Condition"
    When looting items the GM can roll **1d6**{.qs-d6} and substract the result from the
    item's condition.

## Weapons

All melee weapons use the [Melee](/character/skills#melee) skill, while ranged
weapons use the [Light weapon](/character/skills#light-weapons) skill, unless
otherwise noted.

* **HIT** indicates the bonus or penalty the attack skill roll receives.

* **END** indicates the amount of damage dealt to the target's
  [Endurance](/character#endurance-ep) by the weapon.

* **DMG** indicates the amount of damage dealt to the target's
  [Health](/character#health-hp) by the weapon.

* **RNG** indicates the weapon's range increment. Each increment imposes a -2
  penalty to the attack.

* **MAG** provides the number of magazines. A long rest refills the amount of
  magazines you have.

* **CAP** indicates the amount of uses per magazine. The weapon has to be
  **reloaded** if the current capacity drops to zero.

* **RoF** indicates how many shots can be fired with each attack. A **RoF**
  value higher than 1 allows multiple shots to be fired. Each multiple shot adds
  1d6 to the attack.

* **REL** indicates how much AP it takes to reload the weapon.

### Melee Weapons

| Name                    |  HIT |  END |  DMG |  RoF | Weight | Cost |
|-------------------------|-----:|-----:|-----:|-----:|-------:|-----:|
| Improvised blunt weapon |    0 |    8 |    3 |    1 |      - |    - |
| Improvised sharp weapon |    0 |    5 |    5 |    1 |      - |    - |
| Brass knuckles          |    0 |    8 |    4 |    1 |      2 |  100 |
| Baton                   |    0 |   15 |    4 |    1 |      3 |  250 |
| Knife                   |    0 |   12 |    6 |    1 |      2 |  100 |
| Sword                   |    1 |   20 |   10 |    1 |      5 | 3000 |

### Ranged Weapons

| Name             |  HIT |  END |  DMG |  RNG |  RoF |  MAG |  CAP |  REL | Weight | Cost |
|------------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-------:|-----:|
| Pistol           |    0 |   15 |    6 |    5 |    1 |    ∞ |    7 |    2 |      2 | 1000 |
| Revolver         |    0 |   15 |    6 |    5 |    1 |    ∞ |    6 |    4 |      2 |  750 |
| Flintlock Pistol |    0 |   15 |    6 |    4 |    1 |    ∞ |    1 |    8 |      2 |  500 |
| Flintlock Musket |    1 |   15 |   12 |   15 |    1 |    ∞ |    1 |   10 |      3 | 1000 |

## Armour & Outfits

> Outfits categorize special clothing, armour and suits.

### Armour

Worn armour does not occupy [Slots](#slots).

Armour adds another pool to your character, called **Durability**. Special
armour can also provide a bonus to [Defence](/crisis#defence).

| Name               | Durability | Weight | Cost |
|--------------------|-----------:|-------:|-----:|
| Body Armour MK I   |          2 |      3 |  750 |
| Body Armour MK II  |          4 |      4 | 1250 |
| Body Armour MK III |          8 |      5 | 2500 |
| Juggernaut MK I    |         15 |      7 | 7500 |

### Outfits

| Name | Weight | Cost | Notes |
|------|-------:|-----:|-------|
|      |        |      |       |
|      |        |      |       |

## Utility Items

## Miscellaneous Items

### Item uses

Item's can usually be used indefinitely. The only exceptions are items that list
**Uses** in their stats. This stat lists how often the item can be used.

The number in parenthesis indicates if and how often the item's **Uses** can be
reset to their full amount.

If it says *refill* instead, the item has to be refilled at 1/10 it's original
price, which is also listed in the parenthesis next to the item's **Credits**
cost.

If it lists both, only one of the two options apply:

* The first option applies, if the character's living standard is high, and
* the second option applies, if the character's living standard is normal.

#### Cost

When an item can be refilled, you only have to pay the full price of the item
once, even if you buy more than one specimen of the item. Each additional
specimen costs the item's refill cost. E.g. buying two rations costs `165` (`150
+ 15`).

!!! tip "Assets"
    Some miscellaneous items count as Assets, which can be used to reduce the
    [Difficulty](/crisis#difficulty) for related checks. Usually an item states
    if it's an Asset, but creative use can always turn other items into Assets
    as well!

### Food, Mundane & Tools

<div class="qs-list-test" markdown="1">

##### Climbing Gear

A climbing gear consists of ropes, ice picks, bolts to secure the ropes, etc.

[Asset](/crisis#difficulty-modifier)
:   Athletics (Climbing).

[Credits](#credits)
:   1 000

[Weight](#weight)
:   5

##### Crowbar

A simple crowbar to prise open closed containers and doors.

[Asset](/crisis#difficulty-modifier)
:   Force.

[Credits](#credits)
:   250

[Weight](#weight)
:   2

##### Flashlight / Lamp / Flares

A flashlight or other source of light, used to illuminate dark spaces. The light
source includes fuel or batteries, that are usually always available.

[Credits](#credits)
:   250

[Weight](#weight)
:   1

##### Food Supplies

Food supplies provide food and water for a full week (7 days). Food supplies can
be refilled in civilization, e.g. trading outposts etc.

[Credits](#credits)
:   1 250 (125)

[Weight](#weight)
:   4

Uses
:   7 (∞), or 7 (refill)

##### Ration

A ration provides food and water for a single day. Rations can be refilled in
civilization, e.g. trading outposts etc.

[Credits](#credits)
:   150 (15)

[Weight](#weight)
:   1 (∞), or 1 (refill)

##### Toolbox

Contains items like a blowtorch, multitool, screwdrivers, hammers, nails,
screws, etc.

[Asset](/crisis#difficulty-modifier)
:   Engineering.

[Credits](#credits)
:   1 000

[Weight](#weight)
:   5

</div>

### Medical

Medical items are used to restore [Health](/character#health-hp) and
[Endurance](/character#endurance-ep) in or after combat.

<div class="qs-list-test" markdown="1">

##### Adrenalin Shot

Instantly restores 15 points of [Endurance](/character#endurance-ep).

[Credits](#credits)
:   100

[Weight](#weight)
:   0

[AP](/crisis#actions)
:   1

Uses
:   1

##### Medical Supplies

Consists of scissors, bandages, disinfectant, alcohol, painkillers etc.

[Asset](/crisis#difficulty-modifier)
:   Science (Medicine).

[Credits](#credits)
:   500

[RES](/character#resources-res)
:   1

[Weight](#weight)
:   1

</div>
