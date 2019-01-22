# Weapons

All melee weapons use the [Melee skill](/character/skills#melee), while ranged
weapons use the [Light weapon skill](/character/skills#light-weapons), unless
otherwise noted.

!!! tip "Weapon Asset"
    Every Weapon *can* count as an Asset when trying to intimidate somebody with
    the [Intimidate Skill](/character/skills/#intimidate).

### Primary & Secondary Weapons

You can only have one primary and secondary weapon, but unlimited tertiary
weapons. You have to designate one weapon as the primary weapon, and a different
one as secondary weapon. You can change this anytime, but not within a
[Crisis](/crisis).

Primary and secondary weapons are influenced by Equipment Traits such as the
[Chest Rig](/equipment/traits#chest-rig), while all other weapons aren't.

### Weapon Stats

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

indicates the weapons range increment. Each increment imposes a cumulative
`-1` penalty to the attack. **RNG** times 10 is the maximum effective range of
the weapon. Any target within the weapons first range increment does not impose
a penalty.

##### RoF

indicates the weapons rate of fire. See [RoF](/crisis/#rof).

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
    one MAG should cost one-hundreth of the weapon's Cost.

### Weapon Tags

A weapon can have one or more of the following tags.

<div class="qs-list-test full-width" markdown="1">

##### Burst

Weapons with the Burst Tag can only fire a single bullet or a number of bullets
equal to its **RoF**. You can add and deal the damage for all Attacks that hit
as if they were a single Attack.

##### Close range

Close range weapons deal less damage when attacking targets further away. Per
range increment after the first one, you deal `-1` damage, to a minimum of `1`.

##### Long range

If you make an Attack with an **RoF** of `1` you deal a single die more damage.
<br>
A weapon with [2d6](#d6) damage would deal [3d6](#d6) instead when using an
**RoF** of `1`.

##### Explosive

An explosive weapon deals more damage, the closer the target is to the center of
the **AoE**. At the center, an explosive weapon deals all its dice as damage.
Per tile away from the center, the weapon deals one die less, to a minimum of a
single die of its damage.
<br>
For example, a Grenade deals [3d8](#d8) damage at the center. [2d8](#d8) next to
the center, and [1d8](#d8) when the target is two tiles away. Three tiles away
the grenade doesn't deal any damage anymore.

</div>

### Melee Weapons

All weapons listed in this category use the Melee [Skill][] for Attacks.

| Name                    |                   DMG | RoF | Bulk |  Cost | [RES][] |
|-------------------------|----------------------:|----:|:----:|------:|:-------:|
| Unarmed                 |              [Body][] |   1 |  -   |     - |    -    |
| Improvised blunt weapon |              [Body][] |   1 |  1   |     - |    -    |
| Improvised sharp weapon |              [Body][] |   1 |  1   |     - |    -    |
| Brass knuckles          |     [Body][] + [d4][] |   1 |  L   |   100 |    -    |
| Knife                   |     [Body][] + [d4][] |   1 |  L   |   100 |    -    |
| Baton                   |     [Body][] + [d6][] |   1 |  L   |   250 |    -    |
| Sword                   | [Body][] + [2d6](#d6) |   1 |  2   | 1.000 |    1    |

### Ranged Weapons

All weapons listed in this category use the Light Weapons [Skill][] for Attacks.

</table>

| Name         |          DMG | RNG | RoF | MAG | CAP | REL | Bulk |   Cost | [RES][] | Tags                          |
|--------------|-------------:|----:|----:|----:|----:|----:|:----:|-------:|:-------:|-------------------------------|
| Pistol       | [2d6+1](#d6) |   4 |   2 |   ∞ |   7 |   2 |  1   |  1.000 |    -    |                               |
| SMG          |   [2d6](#d6) |   4 |   3 |   4 |  25 |   2 |  2   |  3.000 |    1    |                               |
| Shotgun      |   [3d6](#d6) |   2 |   1 |   - |  24 |   1 |  4   |  2.500 |    1    | Attack: 3 [AP][]; close range |
| Carbine      |   [2d8](#d8) |   5 |   3 |   3 |  30 |   2 |  3   |  5.000 |    2    |                               |
| Battle Rifle | [2d10](#d10) |  10 |   1 |   3 |  20 |   2 |  4   | 10.000 |    2    |                               |
| Sniper Rifle | [2d12](#d12) |  20 |   1 |   - |   5 |   1 |  5   | 25.000 |    3    | Attack: 3 [AP][];             |

### Thrown Weapons

All weapons listed in this category use the Athletics [Skill][] for Attacks.
Thrown weapons are usually one-time use items.

Without any equipment that can hold thrown weapons, you can only carry one
combat-ready thrown weapon with you at any time. You can still have backups in
e.g. a backpack.

| Name             |        AoE | RNG | Bulk | Cost | [RES][] | Tags                                                                                     |
|------------------|-----------:|:---:|:----:|-----:|:-------:|------------------------------------------------------------------------------------------|
| Grenade          | [3d8](#d8) |  4  |  L   |      |    -    | explosive                                                                                |
| Molotov Cocktail |     [d4][] |  3  |  L   |      |    -    | Burns the area 1 tile away from the center for [1d4](#d4) rounds with 1 [Fire][] damage. |
| Smoke Grenade    |    - `(2)` |  4  |  L   |      |    -    | *Obscures* an area with smoke.                                                           |
| Stun Grenade     |    - `(3)` |  4  |  L   |      |    -    | Applies [Stunned](/crisis#stunned) for 1 round.                                          |

### Heavy Weapons

All weapons listed in this category use Heavy Weapons [Skill][] for Attacks.

| Name |        AoE | RNG | RoF | MAG | CAP | REL | Bulk |   Cost | [RES][] | Tags                        |
|------|-----------:|----:|----:|----:|----:|----:|:----:|-------:|:-------:|-----------------------------|
| RPG  | [4d8](#d8) |  10 |   1 |   - |   1 |   4 |  8   | 20.000 |    4    | Attack: 4 [AP][]; explosive |

--8<--
_links.md
--8<--
