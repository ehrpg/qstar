# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

## Credits [Cr.]

A universal currency for buying most things. Whenever there is a cost listed
without units, then Credits are used.

## Weight

The Weight column shows the weight of items. The Weight value indicates the
[Might](/character#might) needed to carry the item. The `#` column in the
[Ability](/character#abilities) rank table shows the rank required.

If the Weight column shows zero, then its Weight can be disregarded.

### Overburdened

If the Weight of an item exceeds your [Might](/character#might), reduce your
Defence by the difference.

## Slots

A character can only carry a number of items up to his number of slots. The
number of slots is further influenced by [Perks](/character/perks-flaws#perks)
and equipment.

Each slot can be occupied by one type of item, whereas one slot creates room for
a total of 10 Weight.

If an item's Weight is 2, the character can carry up to 5 times the item, before
occupying another slot.

If an item's Weight is 0, a slot can still only hold 10 specimens.

If an item's Weight is higher than 5, the slot can only hold 1 specimen.

## Equipment condition

An item can have a condition, making it better or worse. As with abilities and
skills for characters, the item condition uses adjectives:

|    # | Item condition | Modifier | Credits cost |
|-----:|----------------|---------:|-------------:|
|    0 | Terrible       |       -3 |        - 50% |
|    1 | Poor           |       -2 |        - 25% |
|    2 | Mediocre       |       -1 |        - 10% |
|    3 | Fair           |        0 |            0 |
|    4 | Good           |       +1 |        + 25% |
|    5 | Great          |       +2 |        + 50% |
|    6 | Superb         |       +3 |       + 100% |

Each category of items, or even specific items, describe how this modifier
effects the item's attributes.

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

## Weapons

All melee weapons use the [Melee](/character/skills#melee) skill, while ranged
weapons use the [Light weapon](/character/skills#light-weapons) skill, unless
otherwise noted.

### Melee Weapons

| Name           | Damage | Weight | Cost | Notes |
|----------------|-------:|-------:|-----:|-------|
| Brass knuckles |        |      2 |  100 |       |
| Baton          |        |      3 |  250 |       |
| Knife          |        |      2 |  100 |       |
| Sword          |        |      5 | 3000 |       |

### Ranged Weapons

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

| Name             |  END |  DMG |  RNG |  MAG |  CAP |  RoF |  REL | Weight | Cost | Notes |
|------------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-------:|-----:|-------|
| Pistol           |   15 |    4 |    5 |    ∞ |    7 |    1 |    2 |      2 | 1000 |       |
| Revolver         |   15 |    4 |    5 |    ∞ |    6 |    1 |    4 |      2 |  750 |       |
| Flintlock Pistol |   15 |    4 |    4 |    ∞ |    1 |    1 |    8 |      2 |  500 |       |
| Flintlock Musket |   15 |    8 |   15 |    ∞ |    1 |    1 |   10 |      3 | 1000 |       |

## Utility

### Miscellaneous

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
