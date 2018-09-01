# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

An item is made up by these statistics: Cost, Weight, and Bulk. Some items
require additional Acquisitions to be unlocked, maintained or bought.

If an item doesn't have a Weight specified, it still uses Bulk.

!!! tip "Assets"
    Some items count as Assets, which can be used to provide a bonus on a
    **Task** rollfor related checks. Usually an item states if it's an Asset,
    but creative use can always turn other items into Assets as well!

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
* the character's [Parry](/character#parry) and [Defence](/crisis#defence) drops by one.

!!! danger "Overburdened"
    All skills related to the [Speed](/character#speed-sp) Attribute that are
    higher than the new [Speed](/character#speed-sp) also drop to the new level.

## Bulk

An item that specifies it's Bulk takes up that much Inventory Space. Ten light
items specified by a Bulk value of **L** count as 1 Bulk. Some items' Bulk are
negligible; they do not list their Bulk value.

You can carry up an amount of Bulk equal to your [Might](/character#might-mi)
without penalty; if you carry more you gain the *Slowed* condition. You can't
hold or carry more Bulk than twice your [Might](/character#might-mi).

## Looting items

Usually looting only gives you [Loot](/character#loot). If you are looking for
certain items that, for example, your enemies may have, you can loot them
normally. As soon as this happens though, you cannot get [Loot](#loot) from the
enemies anymore, only their items.

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

* **REL** indicates how much AP it takes to reload the weapon.

!!! tip "Weapon Asset"
    Every Weapon should count as an Asset when trying to intimidate somebody
    with the Oratory Skill.

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

Armour increases your character's [Toughness](/character#toughness), and
prevents damage a character may receive. Armour has Durability for these types:

* Normal (physical) Damage,
* **Fire**{:.qstar-flame} Damage,
* **Cold**{:.qstar-thermometer-cold} Damage,
* **Acid**, **Radiation** or **Biohazard**{:.qstar-biohazard} Damage.

One wound reduces the Armour's Durability of the wound's corresponding type by
one. When the Durability of a type reaches 0, it does not provide any damage
reduction against this type anymore.

| Name         | Toughness | Durability | <i class="qstar-flame"></i> | <i class="qstar-thermometer-cold"></i> | <i class="qstar-biohazard"></i> |
|--------------|----------:|-----------:|----------------------------:|---------------------------------------:|--------------------------------:|
| Light Armour |        +2 |          5 |                           2 |                                      1 |                               1 |
| Heavy Armour |        +5 |         10 |                           4 |                                      2 |                               2 |
| Hazmat Suit  |        +1 |          2 |                           8 |                                      8 |                              16 |

### Outfits

| Name | Weight | Cost | Notes |
|------|-------:|-----:|-------|
|      |        |      |       |
|      |        |      |       |

## Utility Items

## Miscellaneous Items

### Item uses

Item's can usually be used indefinitely. The only exceptions are items that list
**Uses** in their stats. This stat lists how often the item can be used. The
item's description states how the item can be refilled. If its **Uses** reaches
0, it cannot be used anymore until refilled.

### Food, Mundane & Tools

<div class="qs-list-test" markdown="1">

##### Climbing Gear

A climbing gear consists of ropes, ice picks, bolts to secure the ropes, etc.

[Asset](/crisis#difficulty-modifier)
:   Athletics (Climbing).

[Credits](#credits)
:   1 000

[Weight](#weight)
:   [d10](#d10)

[Bulk](#bulk)
:   3

##### Crowbar

A simple crowbar to prise open closed containers and doors.

[Asset](/crisis#difficulty-modifier)
:   Force.

[Credits](#credits)
:   250

[Weight](#weight)
:   [d6](#d6)

[Bulk](#bulk)
:   1

##### Flashlight / Lamp

A flashlight or other source of light, used to illuminate dark spaces. The light
source includes fuel or batteries, that are usually always available.

[Credits](#credits)
:   250

[Bulk](#bulk)
:   1

##### Food Supplies

Food supplies provide food and water for a full week (7 days). Food supplies can
be refilled in civilization, e.g. trading outposts etc.

[Credits](#credits)
:   1 250

[Bulk](#bulk)
:   4

Uses
:   7

##### Ration

A ration provides food and water for a single day. Rations can be refilled in
civilization, e.g. trading outposts etc.

[Credits](#credits)
:   150

[Bulk](#bulk)
:   1

Uses
:   1

##### Toolbox

Contains items like a blowtorch, multitool, screwdrivers, hammers, nails,
screws, etc.

[Asset](/crisis#difficulty-modifier)
:   Engineering.

[Credits](#credits)
:   1 000

[Bulk](#bulk)
:   5

</div>

### Medical

Medical items are used to restore [Health](/character#health-hp) in or after
combat.

<div class="qs-list-test" markdown="1">

##### Medical Supplies

Consists of scissors, bandages, disinfectant, alcohol, painkillers etc.

[Asset](/crisis#difficulty-modifier)
:   Science (Medicine).

[Credits](#credits)
:   500

[RES](/character#resources-res)
:   1

[Weight](#weight)
:   [d4](#d4)

[Bulk](#bulk)
:   4

</div>
