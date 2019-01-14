
# Weapons

All melee weapons use the [Melee skill](/character/skills#melee), while ranged
weapons use the [Light weapon skill](/character/skills#light-weapons), unless
otherwise noted.

!!! tip "Weapon Asset"
    Every Weapon *can* count as an Asset when trying to intimidate somebody with
    the [Intimidate Skill](/character/skills/#intimidate).

## Primary & Secondary Weapons

You can only have one primary and secondary weapon, but unlimited tertiary
weapons. You have to designate one weapon as the primary weapon, and a different
one as secondary weapon. You can change this anytime, but not within a
[Crisis](/crisis).

Primary and secondary weapons are influenced by Equipment Traits such as the
[Chest Rig](/equipment/traits#chest-rig), while all other weapons aren't.

## Weapon Stats

### Range

Every ranged weapon specifies its range in three steps: Short, Medium, and Long
range. Everything up to the Short range does not impose a penalty, while every
one above does. If no range is specified, e.g. melee weapons being thrown, the
following range increments apply: `2/10/20`.

<div class="qs-list-test full-width" markdown="1">

##### HIT

indicates the bonus or penalty the Attack Skill roll receives.

##### DMG

indicates the damage this weapon deals.

##### AoE (AoE DMG)

indicates how big the radius is in tiles around the center of the Area of
Effect, and how high the damage is in the center of the AoE. Creatures within
the radius are effected by the AoE, while creatures outside are uneffected.

##### RNG

indicates the weapons range increments. Each increment impose a cumulative
`-20%` penalty to the attack. The last increment specified the maximum effective
range of the weapon.

##### RoF

indicates the weapons rate of fire. An RoF higher than 1 allows you to make
optional, consecutive Attack rolls for the same or even different targets at the
expense of 1 [AP][], and a cumulative `-20%` penalty on **HIT**, per extra
Attack, unless otherwise noted by the weapon. Using a higher **RoF** also uses
up more **CAP**.

##### MAG

indicates the number of magazines. A long rest refills the amount of magazines
you have. **MAG** can also be refilled with [LOOT][].

##### CAP

indicates the amount of uses per magazine. The weapon has to be **reloaded** if
the current capacity reaches zero.

##### REL

indicates how much [AP][] it takes to reload the weapon.
</div>

!!! tip "[GM Tip] - Realistic Magazines"
    When a weapon is reloaded any remaining bullets in the current magazine are
    lost, unless the magazine is purposely kept and its bullet retrieved. This
    should only be doable outside of combat, or when in combat and outside of
    immediate danger.

!!! tip "[GM Tip] - MAG refilling"
    If your setting requires it, you can overrule the MAG refilling rule. Buying
    one MAG should cost 1/25 of the weapons CR cost.

## Weapon Tags

A weapon can have one or more of the following tags.

<div class="qs-list-test full-width" markdown="1">

##### Burst

Weapons with the Burst Tag can only fire a single bullet or a number of bullets
equal to its **RoF**.

##### Close range

Close range weapons deal double their weapon damage when Attacking targets
within the first range increment.

##### Long range

`+20%` on **HIT** for the Attack when using an **RoF** of `1`.

##### Explosive

An explosive weapon deals more damage, the closer the target is to the center of
the **AoE**. At the center, an explosive weapon deals its damage multiplied by
its **AoE** value. Per tile away from the center, the weapon deals 1x its damage
less, to a minimum of its normal damage.
<br>
For example, a Grenade (**AoE**: 3; **AoE DMG**: 8) deals 24 damage at the
center, 16 damage next to the center, and 8 damage when the target is away 2 or
3 tiles.

</div>

## Melee Weapons

All weapons listed in this category use the Melee [Skill][] for Attacks.



| Name                    |    HIT | DMG | RoF | Bulk |  Cost | [RES][] |
|-------------------------|-------:|----:|----:|:----:|------:|:-------:|
| Unarmed                 |    `0` |   1 |   1 |  -   |     - |    -    |
| Improvised blunt weapon |    `0` |   3 |   1 |  1   |     - |    -    |
| Improvised sharp weapon |    `0` |   3 |   1 |  1   |     - |    -    |
| Brass knuckles          |  `+5%` |   5 |   1 |  L   |   100 |    -    |
| Knife                   |  `+5%` |   5 |   1 |  L   |   100 |    -    |
| Baton                   | `+10%` |   5 |   1 |  L   |   250 |    -    |
| Sword                   | `+10%` |  10 |   1 |  2   | 1.000 |    1    |

## Ranged Weapons

All weapons listed in this category use the Light Weapons [Skill][] for Attacks.

| Name         |    HIT | DMG |        RNG | RoF | MAG | CAP | REL | Bulk |   Cost | [RES][] | Tags                          |
|--------------|-------:|----:|-----------:|----:|----:|----:|----:|:----:|-------:|:-------:|-------------------------------|
| Pistol       |  `+5%` |  10 |    4/20/40 |   2 |   ∞ |   7 |   2 |  1   |  1.000 |    -    |                               |
| SMG          |  `+5%` |  10 |    4/20/40 |   3 |   4 |  25 |   2 |  2   |  3.000 |    1    |                               |
| Shotgun      |  `+5%` |  12 |    2/10/20 |   1 |   - |  24 |   1 |  4   |  2.500 |    1    | Attack: 3 [AP][]; close range |
| Carbine      | `+10%` |  15 |    5/25/50 |   3 |   3 |  30 |   2 |  3   |  5.000 |    2    |                               |
| Battle Rifle | `+10%` |  20 |  10/50/100 |   2 |   3 |  20 |   2 |  4   | 10.000 |    2    | long range                    |
| Sniper Rifle | `+20%` |  25 | 20/100/200 |   1 |   - |   5 |   1 |  4   | 25.000 |    3    | Attack: 3 [AP][]; long range  |

## Thrown Weapons

All weapons listed in this category use the Athletics [Skill][] for Attacks.
Thrown weapons are usually one-time use items.

| Name             | HIT |     AoE |     RNG | Bulk | Cost | [RES][] | Tags      | Notes                                                  |
|------------------|----:|--------:|--------:|:----:|-----:|:-------:|-----------|--------------------------------------------------------|
| Grenade          | `0` | `3(20)` | 4/20/40 |  L   |      |    -    | explosive |                                                        |
| Molotov Cocktail | `0` | `1(10)` | 4/20/40 |  L   |      |    -    |           | Burns an area for [d10][] rounds with [Fire][] damage. |
| Smoke Grenade    | `0` |  `2(-)` | 4/20/40 |  L   |      |    -    |           | *Obscures* an area with smoke.                         |
| Stun Grenade     | `0` |  `3(-)` | 4/20/40 |  L   |      |    -    |           | Applies [Stunned](/crisis#stunned) for 1 round.        |

## Heavy Weapons

All weapons listed in this category use Heavy Weapons [Skill][] for Attacks.

| Name |    HIT |     AoE |       RNG | RoF | MAG | CAP | REL | Bulk |   Cost | [RES][] | Tags                        |
|------|-------:|--------:|----------:|----:|----:|----:|----:|:----:|-------:|:-------:|-----------------------------|
| RPG  | `+10%` | `4(25)` | 10/50/100 |   1 |   - |   1 |   4 |  8   | 20.000 |    4    | Attack: 4 [AP][]; explosive |

--8<--
_links.md
--8<--
