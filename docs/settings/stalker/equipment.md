# Equipment

!!! note "Selling [items](#items) and [equipment](#equipment)"
    Selling items usually only profits one tenth of the price listed by the
    *Cost* column. This applies, unless you sell to someone who is in need of
    the items sold, rewarding up to the normal price or even more.

    Always round down any fractions when selling.

    In case of ammo, you can only sell rounds in bulks as denoted by the
    *Rounds* column.

## Rubel

Rubel is the main currency in and around the zone. For the sake of simplicity 1
credit equals 1 rubel in this setting.

## Consumeables

| Name              | Weight (kg) | Cost (RU) | Notes                                                                                                                             |
|-------------------|------------:|----------:|-----------------------------------------------------------------------------------------------------------------------------------|
| First Aid Kit     |           - |         - | [See qstar equipment](/equipment/#medical-items).                                                                                 |
| Medical Kit       |           - |         - | [See qstar equipment](/equipment/#medical-items).                                                                                 |
| Anti-RAD          |         0.1 |       500 | Reduce the radiation value of a character by 50 to a minimum of 0.                                                                |
| MRE               |         2.0 |        20 | One ration worth of food for one day                                                                                              |
| Water (Dirty)     |         1.0 |         2 | A characer who drinks dirty water receives 5 RADs.                                                                                |
| Water (Distilled) |         1.0 |        10 | -                                                                                                                                 |
| Vodka             |         1.5 |        40 | One bottle of vodka allows you to ignore the negative effects of radiation regarding [endurance](/#endurance){ .qstar-electric }. |

## Items

| Name                    | Weight |  Cost | Notes                                                                          |
|-------------------------|-------:|------:|--------------------------------------------------------------------------------|
| Artifact detector MK I  |    0.5 |   500 | Artifact detector                                                              |
| Artifact detector MK II |    0.5 | 1 500 | Artifact detector; provides a **+2 Notice** bonus when searching for artifacts |
| Geiger Counter          |    0.5 |   500 | Allows RAD detection                                                           |
| ABC-Paper               |      - |     5 | Allows detection of chemical warfare agents                                    |
| Patch kit               |    0.1 |     5 | Allows patching full body suits                                                |

## Armour & Suits

| Name                     |  RAD | Weight | Cost | Notes                                     |
|--------------------------|-----:|-------:|-----:|-------------------------------------------|
| Gasmask MK I             |    5 |    1.5 |  500 |                                           |
| ABC Protection Suit MK I |   15 |      2 |  250 | Requires and stacks with Gasmask MK I     |
| Hazmat Suit MK I         |  400 |      3 | 5000 | Full body suit with integrated air supply |

## Weapons

Weapons use different kinds of cartridges. The **cartridge** column in the
weapons table describes the cartridge used. Only that cartridge is useable as
ammunition.

Ammunition is only available in packs, denoted by the rounds column. For
example, if you buy [9x18mm](#9x18) rounds, you get 50 rounds for 10 credits.

!!! note "Optional rules"
    If you want to keep things simple, ignore the weight of the bullets - just
    like the core rules do.

### Attributes

#### Subsonic #### {.dt}

rounds do not make an audible crack when fired, making it harder to pointpoint
the direction of the shooter.

#### Suppressed #### {.dt}

weapons are using a suppressor (either attached or integral to the weapon) and
thus reduce noice and avoiding muzzle flash. A suppressed weapon does not negate
the sonic boom of the round breaking the sound barrier.

### Cartridges

In the core system of qstar, weapons indicate the damage they deal. For the
S.T.A.L.K.E.R. rules, the damage and some other values stem from the cartridge
used instead.

#### Range #### {.dt}

indicates the effective [range](/equipment#range) of the cartridge. Shooting at
a target further away imposes a penalty on the attack.

#### HP (ammo) #### {.dt}

deals additional [damage](/#damage) versus enemies who have no [damage
reduction](/equipment#damage-reduction) (e.g. from armour). HP ammo costs double
the normal price for the cartridge.

#### AP (ammo) #### {.dt}

ignores a certain amount of the enemies [damage
reduction](/equipment#damage-reduction). AP ammo costs thrice the normal price
for the cartridge.

#### Slugs (ammo) #### {.dt}

increase the effective [range](/equipment#range) of the shotgun to medium. Slugs
cost double the normal price.

#### Cost #### {.dt}

indicates how much the cartridge costs. Buying cartridges comes in packs,
as shown by the rounds column.

| Name                             | Range  |  DMG | Crit |   HP |   AP | Rounds | Weight | Cost | Notes                                                                                                                         |
|----------------------------------|--------|-----:|-----:|-----:|-----:|-------:|-------:|-----:|-------------------------------------------------------------------------------------------------------------------------------|
| <span id="9x18"></span>  9x18mm  | Close  |   10 |    5 |    5 |    1 |     50 |    0.5 |   25 |                                                                                                                               |
| <span id="45acp"></span> .45 ACP | Close  |   15 |    8 |    5 |    2 |     50 |      1 |   50 | subsonic                                                                                                                      |
| <span id="12g"></span>   12G     | Close  |   20 |   10 |    - |    - |     10 |    0.5 |   20 | deals additional 15 [damage](/#damage) in close range, if the target has no [damage reduction](/equipment/#damage-reduction). |
| <span id="545"></span>   5.45x39 | Medium |   15 |   10 |   10 |    4 |     30 |    0.5 |  150 |                                                                                                                               |
| <span id="556"></span>   5.56x45 | Medium |   20 |   10 |   10 |    6 |     30 |    0.5 |  200 |                                                                                                                               |
| <span id="939"></span>   9x39mm  | Medium |   20 |   10 |    5 |    5 |     20 |    0.5 |  200 | subsonic                                                                                                                      |
| <span id="762"></span>   7.62x54 | Far    |   25 |   15 |   10 |    8 |     20 |    0.5 |  300 |                                                                                                                               |
| <span id="40mm"></span>  40mm    | Close  |  100 |  100 |    - |      |      1 |      1 | 1000 |                                                                                                                               |

### Melee Weapons

| Name         |  Hit |  DMG | Crit |  RoF | Range | Weight | Cost | Notes   |
|--------------|-----:|-----:|-----:|-----:|-------|-------:|-----:|---------|
| Combat Knife |   +1 |   16 |    8 |    2 | Melee |      1 |  300 | compact |

### Pistols

| Name              | Cartridge         |  Hit  |  RoF  | Reload | Cap. | Weight |  Cost | Notes      |
|-------------------|-------------------|:-----:|:-----:|:------:|-----:|-------:|------:|------------|
| PB/6P9            | [9x18mm](#9x18)   |   +1  |   1   |    1   |    8 |      1 | 1 200 | suppressed |
| Makarov PM        | [9x18mm](#9x18)   |   +2  |   1   |    1   |    8 |      1 |   600 |            |
| Fort-12           | [9x18mm](#9x18)   |   +1  |   1   |    1   |   12 |      1 |   800 |            |
| Fort-15           | [9x18mm](#9x18)   |   +1  |   1   |    1   |   15 |      1 | 1 000 |            |
| Walther P99       | [9x18mm](#9x18)   |   +1  |   1   |    1   |   16 |      1 | 1 100 |            |
| SIG P220          | [9x18mm](#9x18)   |   +1  |   1   |    1   |    7 |      1 | 1 200 |            |
| Beretta 92F       | [9x18mm](#9x18)   |   +2  |   1   |    1   |   15 |      1 | 1 400 |            |
| Browning Hi-Power | [9x18mm](#9x18)   |   +1  |   1   |    1   |   13 |      1 | 1 400 |            |
| Colt M1911        | [.45 ACP](#45acp) |   +1  |   1   |    1   |    7 |      2 | 1 200 |            |
| H&K USP Compact   | [.45 ACP](#45acp) |   +2  |   1   |    1   |    8 |      1 | 1 300 |            |

### Shotguns

| Name                 | Cartridge   |  Hit  |  RoF  | Reload | Cap. | Weight |   Cost | Notes |
|----------------------|-------------|:-----:|:-----:|:------:|-----:|-------:|-------:|-------|
| TOZ-66               | [12G](#12g) |   +1  |   1   |    2   |    2 |      2 |  6 000 |       |
| TOZ-34               | [12G](#12g) |   +1  |   1   |    2   |    2 |      3 |  5 000 |       |
| Franchi SPAS-12      | [12G](#12g) |   +1  |   2   |    2   |    8 |      4 |  9 000 |       |
| Armsel Striker       | [12G](#12g) |   +1  |   3   |    2   |   12 |      3 | 12 000 |       |
| Mossberg Maverick 88 | [12G](#12g) |   +2  |   1   |    2   |    6 |      3 |  7 000 |       |

### Sub-machine guns

| Name    | Cartridge       |  Hit  |  RoF  | Reload | Cap. | Weight |  Cost | Notes |
|---------|-----------------|:-----:|:-----:|:------:|-----:|-------:|------:|-------|
| H&K MP5 | [9x18mm](#9x18) |   +1  |   3   |    1   |   30 |    2.5 | 6 000 |       |

### Assault rifles

| Name          | Cartridge       |  Hit  |  RoF  | Reload | Cap. | Weight |   Cost | Notes            |
|---------------|-----------------|:-----:|:-----:|:------:|-----:|-------:|-------:|------------------|
| AKS-74U       | [5.45x39](#545) |   +1  |   3   |    1   |   30 |      3 |  8 000 |                  |
| AKS-74        | [5.45x39](#545) |   +2  |   2   |    1   |   30 |    3.5 |  9 000 |                  |
| AN-94         | [5.45x39](#545) |   +3  |   2   |    2   |   30 |      4 |  9 000 |                  |
| Z&M LR300     | [5.56x45](#556) |   +1  |   3   |    1   |   30 |      3 |  8 000 |                  |
| Enfield L85A1 | [5.56x45](#556) |   +1  |   3   |    1   |   30 |      5 |  7 000 |                  |
| H&K G36       | [5.56x45](#556) |   +1  |   3   |    1   |   30 |    3.5 |  9 000 |                  |
| SIG SG-550    | [5.56x45](#556) |   +1  |   3   |    1   |   30 |    4.5 |  8 000 |                  |
| FN F2000      | [5.56x45](#556) |   +1  |   3   |    1   |   30 |    4.5 | 12 000 | grenade launcher |
| Ots-14 Groza  | [9x39mm](#939)  |   +2  |   2   |    1   |   20 |      3 | 12 000 |                  |
| AS VAL        | [9x39mm](#939)  |   +2  |   1   |    1   |   20 |    2.5 | 15 000 | suppressed       |

### Machine Guns

| Name | Cartridge       |  Hit  |  RoF  | Reload | Cap. | Weight |   Cost | Notes |
|------|-----------------|:-----:|:-----:|:------:|-----:|-------:|-------:|-------|
| PKM  | [7.62x54](#762) |   +1  |   5   |    5   |  100 |    7.5 | 20 000 |       |

### Sniper Rifles

| Name         | Cartridge       |  Hit  |  RoF  | Reload | Cap. | Weight |   Cost | Notes      |
|--------------|-----------------|:-----:|:-----:|:------:|-----:|-------:|-------:|------------|
| SVD          | [7.62x54](#762) |   +3  |   1   |    2   |   10 |      5 | 25 000 |            |
| SVU          | [7.62x54](#762) |   +3  |   1   |    2   |   10 |    4.5 | 26 000 |            |
| VSS Vintorez | [9x39mm](#939)  |   +2  |   1   |    2   |   10 |      3 | 30 000 | suppressed |

### Grenade launchers

| Name  | Cartridge     |  Hit  |  RoF  | Reload | Cap. | Weight |   Cost | Notes |
|-------|---------------|:-----:|:-----:|:------:|-----:|-------:|-------:|-------|
| RG6   | [40mm](#40mm) |   +1  |   1   |    2   |    6 |      6 | 15 000 |       |
| RPG-7 | [40mm](#40mm) |   +1  |   1   |    5   |    1 |      7 | 20 000 |       |
