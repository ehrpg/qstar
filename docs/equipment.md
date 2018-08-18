# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

An item is made up by these statistics: Cost, Weight, and Bulk. Some items
require additional Acquisitions to be unlocked, maintained or bought.

If an item doesn't have a Weight specified, it still uses Bulk.

## Credits

> [Credits](#credits) are a universal currency for buying most things.

All items cost [Credits](#credits), while some items may cost
[Resources](/character#resources-res) instead or in addition. This
[Resources](/character#resources-res) cost abstract the maintenance of an item,
e.g. ammunition, cleaning, restocking etc.

Whenever there is a cost listed without units, then Credits are used.

## Weight

An item can specify it's Weight. The Weight value indicates the minimum
[Might](/character#might-mi) needed to use the item. If this level of
[Might](/character#might-mi) is not met, the item cannot be used effectively in
combat.

If the Weight column shows zero or has no Weight, then its Weight can be
disregarded.

Using a normally one-handed item with two hands increases the level of
[Might](/character#might-mi) by one step.

!!! example "Weight Requirements"
    A one-handed wooden club specifies it's Weight as a [d8](#d8). The character
    only has a [d6](#d6) in [Might](/character#might-mi), so he uses the club in
    both hands increasing his [Might](/character#might-mi) to a [d8](#d8). For
    the purpose of wielding, attacking and dealing damage with the club, the
    character's [Might](/character#might-mi) is considered to be a [d8](#d8).

### Overburdened

Only items that are equipped, e.g. wielded weapons, worn armour and outfits,
etc. are subject to this rule. An item that's kept in the character's inventory
is not influencing the character.

An item's Weight exceeding the character's [Might](/character#might-mi) incures
penalties. For each step of the character's [Might](/character#might-mi) below
the item's Weight, the character's:

* [Speed](/character#speed-sp) is reduced by one level to a minimum of a
  [d4](#d4), and
* the character's Parry and [Defence](/crisis#defence) drops by one.

!!! danger "Overburdened"
    All skills related to the [Speed](/character#speed-sp) Attribute that are
    higher than the new [Speed](/character#speed-sp) also drop to the new level.

## Bulk

An item that specifies it's Bulk takes up that much Inventory Space. Ten light
items, specified by a Bulk value of **L**, count as 1 Bulk. Some items' Bulk are
negligible.

You can carry up an amount of Bulk equal to your [Might](/character#might-mi)
without penalty; if you carry more you gain the *Slowed* condition. You can't
hold or carry more Bulk than twice your [Might](/character#might-mi).

## Looting items

Usually looting only gives you [Loot](/character#loot). If you are looking for
certain items that, for example, your enemies may have, you can loot them
normally.

If a looted item requires [Resources](/character#resources-res) a character may
spend his available [Resources](/character#resources-res) on it to keep it.

If the character does not have enough [Resources](/character#resources-res) to
pay for the item at the end of the current session, the item is lost.

## Equipment condition

An item *can* have a condition, making it better or worse. The item condition
only changes the item's durability and price.

## Weapons

All melee weapons use the [Melee](/character/skills#melee) skill, while ranged
weapons use the [Light weapon](/character/skills#light-weapons) skill, unless
otherwise noted.

* **HIT** indicates the bonus or penalty the Attack Skill roll receives.

* **DMG** indicates the dice for the damage roll.

* **RNG** indicates the weapon's range increment. Each increment imposes a -1
  penalty to the attack.

* **MAG** provides the number of magazines. A long rest refills the amount of
  magazines you have.

* **CAP** indicates the amount of uses per magazine. The weapon has to be
  **reloaded** if the current capacity drops to zero.

* **RoF** indicates how many shots can be fired with each attack. A **RoF**
  value higher than 1 allows multiple shots to be fired. Each multiple shot adds
  1d6 to the damage roll.

* **REL** indicates how much AP it takes to reload the weapon.

### Melee Weapons

| Name                    |  HIT |              DMG |  RoF |    Weight | Bulk | Cost |
|-------------------------|-----:|-----------------:|-----:|----------:|-----:|-----:|
| Improvised blunt weapon |    0 |          Str + 1 |    1 | [d6](#d6) |    1 |    - |
| Improvised sharp weapon |    0 |          Str + 1 |    1 | [d4](#d4) |    1 |    - |
| Brass knuckles          |    0 | Str + 1[d4](#d4) |    1 | [d4](#d4) |    L |  100 |
| Knife                   |    0 | Str + 1[d4](#d4) |    1 | [d4](#d4) |    L |  100 |
| Baton                   |    0 | Str + 1[d6](#d6) |    1 | [d6](#d6) |    L |  250 |
| Sword                   |    1 | Str + 1[d8](#d8) |    1 | [d8](#d8) |    2 | 1000 |

### Ranged Weapons

| Name             |  HIT |          DMG |  RNG |  RoF |  MAG |  CAP |  REL |    Weight | Bulk | Cost |
|------------------|-----:|-------------:|-----:|-----:|-----:|-----:|-----:|----------:|-----:|-----:|
| Pistol           |    0 |   2[d6](#d6) |    5 |    1 |    ∞ |    7 |    2 | [d6](#d6) |    1 | 1000 |
| Revolver         |    0 | 2[d6](#d6)+1 |    5 |    1 |    ∞ |    6 |    4 | [d6](#d6) |    1 |  750 |
| Flintlock Pistol |    0 | 2[d6](#d6)+1 |    4 |    1 |    ∞ |    1 |    8 | [d6](#d6) |    1 |  500 |
| Flintlock Musket |    1 |   2[d8](#d8) |   15 |    1 |    ∞ |    1 |   10 | [d8](#d8) |    2 | 1000 |

<!-- TODO: Fix Equipment -->

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
