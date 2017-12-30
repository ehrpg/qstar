# Rules



## Radiation

*Characters are radiated over time.*

The radiation poisoning of a character is measured by rads. Any value smaller
than one is ignored. All radiation a character receives is rounded down.

The unit for measuring radiation is defined by rad/hour. For simplicity, this
value can be divided by 10, if a character isn't exposed for a full hour. 

Example: A character who is exposed for 5 minutes would suffer one tenth of the
radiation, so 6 minutes worth of exposure. A character who is exposed for 26
minutes would suffer five tenth of the radiation, so 30 minutes worth of
exposure.

Example: A zone is contaminated and heavily radiated. Characters in the zone
receive 500rad/h. A character stays in the zone for 43 minutes. The DM divides
the radiation value by ten, resulting in 50rad/6min. The character receives 48
minutes (eigth tenth) worth of exposure, resulting in 400 rad.

### Radiation Effects

| Exposure (rads) | Description            | Health | Endurance | Notes            |
| --------------: | ---------------------- | -----: | --------: | ---------------- |
|           0- 24 | feeling unwell         |      - |         - | no side effects  |
|          25-149 | very nauseous          |      - |        -5 |                  |
|         150-299 | slightly fatigued      |      - |       -10 |                  |
|         300-449 | vomiting does not stop |     -5 |       -10 | Speed halved     |
|         450-599 | hair is falling out    |    -10 |       -15 | Charisma -3      |
|         600-799 | skin is falling off    |    -15 |       -15 | Charisma -5      |
|         800-999 | intense agony          |    -20 |       -20 | Might drops to 1 |
|           1000+ | death                  |      - |         - |                  |

### Countering Radiation Effects

A character can use **consumables** such as anti radiation or medical kits to
reduce accumulated rads. **Consumables** such as vodka or alcohol with high
percentage let a character ignore the negative effects on endurance due to
radiation exposure.

Also, certain equipment such as hazmat suits can reduce the radiation exposure
or even reduce it to zero. The suit reduces the radiation exposure per hour by
it's value.

Example: A hazmat suit may have a radiation reduction of 100. A contaminated
zone may have 150rad/h. The suit reduces the radiation exposure to 50rad/h.

## Food & Water

*Characters get hungry and thirsty, and need to eat and drink each day or suffer
the consequences.*

Each character needs **one ration** worth of food and drinks **each day**. For
each day a character does not eat and drink, they lose **10 points** of
**endurance** of their maximum. If the **endurance** becomes zero they fall
unconcious and enter the **starving** state. 

A **starving** character loses **10 points** of **health** of their maximum
health each day until the character dies or receives medical attention.

A character regenerates **10 points** of **health** and **endurance** if they
stay in bed and get **one ration** worth of food and drinks **each day**.
<sup id="a1">[1](#f1)</sup>
**Health** points are regained first. 

1. <small id="f1">If the character is unconcious they have to receive infusions
   from others to regain conciousness.</small> [↩](#a1)

# Items

## Consumeables

| Name              | Weight (kg) | Cost (RU) | Notes                                                                                               |
| ----------------- | ----------: | --------: | --------------------------------------------------------------------------------------------------- |
| First Aid Kit     |           - |         - | see qstar equipment. Also heals 50 rads.                                                            |
| Medical Kit       |           - |         - | see qstar equipment. Also heal 100 rads.                                                            |
| Anti-rad          |         0.1 |       500 | Reduce the radiation value of a character by 200 to a minimum of 0.                                 |
| MRE               |         2.0 |        20 | One ration worth of food for one day.                                                               |
| Water (Dirty)     |         1.0 |         2 | A characer who drinks dirty water receives 5 rads.                                                  |
| Water (Distilled) |         1.0 |        10 | -                                                                                                   |
| Vodka             |         1.5 |        40 | One bottle of vodka allows you to ignore the negative effects of radiation regarding **endurance**. |

