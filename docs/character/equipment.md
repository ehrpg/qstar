# Equipment

<!-- Economy: Use real-life value of items, multiply by 10 and round to nearest sensible integer. -->

All entries list the price for a single item. If more items can be bougth with
the provided price, the table shows the amount under the `#` column.

* `Weight` shows the weight of items in kilogramms [kg].

* `Cost` shows the cost of items in [Credits](#credits).

## Credits [Cr.]

A universal currency for buying most things.

## Equipment condition

An item can have a condition, making it better or worse. As with abilities and
skills for characters, the item condition uses adjectives:

|    # | Item condition | Modifier | Credits cost |
|-----:|----------------|---------:|-------------:|
|    1 | Terrible       |       -3 |        - 50% |
|    2 | Poor           |       -2 |        - 25% |
|    3 | Mediocre       |       -1 |        - 10% |
|    4 | Fair           |        0 |            0 |
|    5 | Good           |       +1 |        + 25% |
|    6 | Great          |       +2 |        + 50% |
|    7 | Superb         |       +3 |       + 100% |

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
| Brass knuckles |        |    0.5 |      |       |
| Baton          |        |    0.5 |      |       |
| Knife          |        |    0.5 |      |       |
| Sword          |        |      3 | 3000 |       |

### Ranged Weapons

* **DMG** shows the amount of damage dealt by the weapon.

* **CRIT** shows the amount of damage dealth to the target's
  [Health](/characte#health) pool on a critical hit.

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

| Name             |  DMG | CRIT |  RNG |  MAG |  CAP |  RoF |  REL | Weight | Cost | Notes |
|------------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-------:|-----:|-------|
| Pistol           |   15 |    4 |    5 |    ∞ |    7 |    1 |    2 |        | 1000 |       |
| Revolver         |   15 |    4 |    5 |    ∞ |    6 |    1 |    4 |        |  750 |       |
| Flintlock Pistol |   15 |    4 |    4 |    ∞ |    1 |    1 |    8 |        |  500 |       |
| Flintlock Musket |   15 |    8 |   15 |    ∞ |    1 |    1 |   10 |        | 1000 |       |

## Utility

### Miscellaneous

| Name          | Weight | Cost | Notes                                 |
|---------------|-------:|-----:|---------------------------------------|
| Battery       |        |    5 |                                       |
| Flare         |        |   50 | Can be used for 15 minutes.           |
| Flashlight    |        |  100 | 1 Battery supplies power for 4 hours. |
| Lamp oil [1L] |        |   40 | 1L oil supplies fuel for 24 hours.    |
| Oil lamp      |        |   60 |                                       |
| Rope [10m]    |        |  200 |                                       |
| Torch         |        |   10 | Can be used for 1 hour.               |

### Food & Drinks

| Name        | Weight | Cost | Notes                                                        |
|-------------|-------:|-----:|--------------------------------------------------------------|
| MRE         |      1 |  100 | One MRE provides food for one day. Long durability.          |
| Simple Meal |      1 |   20 | One simple meal provides food for one day. Short durability. |
| Water       |    2.5 |    5 | Provides water for one day.                                  |

### Medical

Medical items are used to restore [Health](/character#health) and
[Endurance](/character#endurance) in or after combat.

| Name           | Weight | Cost | Notes |
|----------------|-------:|-----:|-------|
| Bandages       |    0.1 |   90 |       |
| Medikit        |    2.5 |  750 |       |
| First Aid Kit  |      1 |  250 |       |
| Adrenalin Shot |    0.2 |   75 |       |

### Tools

| Name      | Weight | Cost | Notes                                               |
|-----------|-------:|-----:|-----------------------------------------------------|
| Blowtorch |    0.5 |  250 |                                                     |
| Multitool |      1 |  150 |                                                     |
| Toolbox   |    7.5 |  750 | Contains a hammer, screwdrivers, a saw, tongs, etc. |
