# Crisis

Whenever characters compete against each other or the environment a so-called
crisis begins. In a crisis time slows down, and actions become more atomic.

## Turn Order

Every involved character in a crisis has to roll to determine the turn order.
The character with the highest result acts first. Once every character has
acted, a new **turn** begins.

If two or more characters have rolled the same result, the character with the
higher [intelligence](/character#intelligence) acts first. If they have the same
[intelligence](/character#intelligence) score, the character with the higher
[speed](/character#speed) acts first. If there is still a tie, roll again.

!!! summary "[Turn order](#turn-order)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> +
      <span data-bracket-top="Ability Score">Intelligence</span> +
      <span data-bracket-bottom="Ability Score">Speed</span> +
      <span data-bracket-top="Circumstance / Perks / Race">other bonuses</span>
    </div>

## Actions

Actions within a crisis require **action points** (AP) to be spent.

Each character has a maximum of 6 AP. At the start of each turn, including the
beginning of a crisis, the character gains 4 AP. Action points can never exceed
6 or deceed 0. Exceeding AP are lost, while actions that require more than the
remain AP are disabled until enough AP are accumulated.

!!! info "Tracking AP"
    Tracking AP is very easy. Get a d6, put it front of you, and let it face the
    number of AP your character has. If you are at zero AP, put the die aside.

### Available Actions

All character can perform basic actions. Perks and equipment can make additional
actions available.

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise, e.g. attacking with a big weapon may require more AP.

| Action |   AP | Description                                                                |
|--------|-----:|----------------------------------------------------------------------------|
| Move   |    1 | Move up to the character's [Speed](#speed) in meters.                      |
| Sneak  |    1 | Move up to half the character's [Speed](#speed) in meters.                 |
| Hide   |    3 | Hide from others, provided they have no direct vision of you.              |
| Attack |    2 | Attack with a *normal* weapon.                                             |
| Draw   |    1 | Draw a weapon and make it ready for combat use, e.g. release safety catch. |

## Combat

Combat is the most common kind of a crisis.

### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

Can't melee attack targets in total cover.

* Cover `defence +2`
* Heavy Cover `defence +5`
* Total Cover `unhittable`

### Melee Combat

#### Attacking

Attacking in melee is done using the *Melee* skill.

!!! summary "Melee attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> +
      <span data-bracket-top="Skill modifier">Melee</span> +
      <span data-bracket-bottom="Skill modifier">Might</span> +
      <span data-bracket-top="Weapon modifier">Hit</span> +
      <span data-bracket-bottom="Circumstance / Perks / Race">other bonuses</span>
    </div>

#### Defence

The *defence vs melee* is a fixed value determined by some character related
stats.

!!! summary "Defence vs melee"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span> +
      <span data-bracket-top="Skill modifier">Melee</span> +
      <span data-bracket-bottom="Skill modifier">Might</span> +
      <span data-bracket-top="Defence modifier">Armour</span> +
      <span data-bracket-bottom="Circumstance / Perks / Race">other bonuses</span>
      <span data-bracket-top="per additional enemy">-2</span>
    </div>

Every enemy in melee range reduces *defence vs melee* by 2. This only applies if
there is more than one enemy in range.

!!! example "Melee combat"
    Jack is attacked by 3 security drones attacking with batons. They all are in
    Jack's melee range. Jack is a good melee fighter and has a *defence vs
    melee* of 16 against a single enemy. Since there are two additional enemies
    his *defence vs melee* drops by a total of 4, resulting in a *defence vs
    melee* of 10, making him an easy target.

### Ranged Combat

#### Attacking

#### Defence
