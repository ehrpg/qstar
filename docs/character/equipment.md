# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

## Cost

All items cost [Credits](/equipment#credits), while some items may also cost
[Resources](/character#resources) to maintain the upkeep, e.g. ammo, cleaning,
restocking etc.

Whenever there is a cost listed without units, then Credits are used.

### Credits

A universal currency for buying most things.

### Looting items

Looting items that only cost [Credits](/equipment#credits) can be used normally.


Items that required [Resources](/character#resources) stop functioning after a
while. For example the magazines of weapons cannot be restocked when resting.
These items can be sold for the usual [Credits](/equipment#credits) though. They
do not give you extra [Resources](/character#resources) however.

## Weight

An item can specify its Weight. The Weight value indicates the minimum
[Might](/character#might) needed to carry the item. The `#` column in the
[Ability](/character#abilities) rank table shows the rank required.

If the Weight column shows zero or has no Weight, then its Weight can be
disregarded.

### Overburdened

Only items that are equipped, e.g. wielded weapons, worn armour and outfits,
etc. are subject to this rule. An item that's kept in the character's inventory
is not influencing the character.

An item's Weight exceeding the character's [Might](/character#might) reduces a
character's [Speed](/character#speed) by the difference. This includes [Turn
Order](/crisis#turn-order) and [Defence](/crisis#defence).

!!! danger "Overburdened"
    This penalty does not reduce the [Speed](/character#speed) rank at all. It
    simply reduces all checks related to it.

!!! example "Overburdened"
    Jack has [Might - Mediocre](/character#might) (rank 3), and picks up an item
    with Weight 5. The difference is 2, so all his [Speed](/character#speed)
    checks (including skill checks that require [Speed](/character#speed)),
    [Turn Order](/crisis#turn-order) and [Defence](/crisis#defence) are reduced
    by 2.

## Slots

A character can only carry a number of items up to her number of slots. The
number of slots is further influenced by [Might](/character#might),
[Perks](/character/perks-flaws#perks) and equipment.

An item occupies slots equal to its Weight. An item with a Weight of 4 occupies
4 slots.

If the item's Weight is 0 or is not specified, then the items still requires one
slot, unless otherwise mentioned.

!!! summary "Amount of slots"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> ±
        <span data-bracket-top="Modifier">Might * 2</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

## Equipment condition

An item *can* have a condition, making it better or worse. As with abilities and
skills for characters, the item condition uses adjectives:

|    # | Item condition | Modifier | [RES](/character#resources) cost |
|-----:|----------------|---------:|---------------------------------:|
|    1 | Terrible       |       -3 |                               -2 |
|    2 | Poor           |       -2 |                               -1 |
|    3 | Mediocre       |       -1 |                                0 |
|    4 | Fair           |        0 |                                0 |
|    5 | Good           |       +1 |                                0 |
|    6 | Great          |       +2 |                               +1 |
|    7 | Superb         |       +3 |                               +2 |

Any item can receive the modifier to **any** of its stats. The modifier can also
be split between multiple stats. For example, a superb weapon could receive +1
to its **HIT** stat, and +2 to its **CAP** stat.

Better items need more [Resources](/character#resources) and inferior items need
less [Resources](/character#resources) to be maintained. The Modifier of an item
however can reduce the [Resources](/character#resources) cost, if any, too.

## Weapons

All melee weapons use the [Melee](/character/skills#melee) skill, while ranged
weapons use the [Light weapon](/character/skills#light-weapons) skill, unless
otherwise noted.

* **HIT** shows the bonus or penalty the attack skill roll receives.

* **END** shows the amount of damage dealt to the target's
  [Endurance](/character#endurance) by the weapon.

* **DMG** shows the amount of damage dealt to the target's
  [Health](/character#health) by the weapon.

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

| Name           |  END |  DMG |  RoF | Weight | Cost |
|----------------|-----:|-----:|-----:|-------:|-----:|
| Brass knuckles |   10 |    4 |    1 |      2 |  100 |
| Baton          |   20 |    4 |    1 |      3 |  250 |
| Knife          |   15 |    6 |    1 |      2 |  100 |
| Sword          |   25 |   10 |    1 |      5 | 3000 |

### Ranged Weapons

| Name             |  END |  DMG |  RNG |  MAG |  CAP |  RoF |  REL | Weight | Cost |
|------------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-------:|-----:|
| Pistol           |   15 |    6 |    5 |    ∞ |    7 |    1 |    2 |      2 | 1000 |
| Revolver         |   15 |    6 |    5 |    ∞ |    6 |    1 |    4 |      2 |  750 |
| Flintlock Pistol |   15 |    6 |    4 |    ∞ |    1 |    1 |    8 |      2 |  500 |
| Flintlock Musket |   15 |   12 |   15 |    ∞ |    1 |    1 |   10 |      3 | 1000 |

## Outfits

> Outfits categorize special clothing, armour and suits.

### Armour

Armour adds another pool to your character, called **Durability**. Special
armour can also provide a bonus to [Defence](/crisis#defence).

| Name             |   DR | Durability | Weight | Cost | Notes |
|------------------|-----:|-----------:|-------:|-----:|-------|
| Body Armour MK I |    5 |          3 |      2 |  750 |       |

The armour's item condition increases or decreases the armour's **Durability**.

!!! summary "Armour durability"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Armour Base">Durability</span> ±
        <span data-bracket-top="Item condition">Modifier</span>
    </div>

### Outfits

| Name | Weight | Cost | Notes |
|------|-------:|-----:|-------|
|      |        |      |       |
|      |        |      |       |

## Utility Items

## Miscellaneous Items

| Name          | Weight | Cost | Notes                                 |
|---------------|-------:|-----:|---------------------------------------|
| Battery       |      0 |    5 |                                       |
| Flare         |      0 |   50 | Can be used for 15 minutes.           |
| Flashlight    |      0 |  100 | 1 Battery supplies power for 4 hours. |
| Lamp oil [1L] |      0 |   40 | 1L oil supplies fuel for 24 hours.    |
| Oil lamp      |      0 |   60 |                                       |
| Rope [10m]    |      0 |  200 |                                       |
| Torch         |      0 |   10 | Can be used for 1 hour.               |

### Food & Drinks

| Name        | Weight | Cost | Notes                                                        |
|-------------|-------:|-----:|--------------------------------------------------------------|
| MRE         |      0 |  100 | One MRE provides food for one day. Long durability.          |
| Simple Meal |      0 |   20 | One simple meal provides food for one day. Short durability. |
| Water       |      0 |    5 | Provides water for one day.                                  |

### Medical

Medical items are used to restore [Health](/character#health) and
[Endurance](/character#endurance) in or after combat.

| Name           | Weight | Cost | Notes |
|----------------|-------:|-----:|-------|
| Bandages       |      0 |   90 |       |
| Medikit        |      0 |  750 |       |
| First Aid Kit  |      0 |  250 |       |
| Adrenalin Shot |      0 |   75 |       |

### Tools

| Name      | Weight | Cost | Notes                                               |
|-----------|-------:|-----:|-----------------------------------------------------|
| Blowtorch |      3 |  250 |                                                     |
| Multitool |      3 |  150 |                                                     |
| Toolbox   |      4 |  750 | Contains a hammer, screwdrivers, a saw, tongs, etc. |
