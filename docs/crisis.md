# Crisis

Whenever characters compete against each other or the environment a so-called
crisis begins. In a crisis time slows down, and actions become more atomic.

## Turn Order

Every involved character in a crisis has to roll to determine the turn order.
The character with the highest result acts first. Once every character has
acted, a new **turn** begins.

If two or more characters have rolled the same result, the character with the
higher [Intelligence](/character#intelligence) acts first. If they have the same
[Intelligence](/character#intelligence) score, the character with the higher
[Speed](/character#speed) acts first. If there is still a tie, roll again.

!!! summary "[Turn Order](#turn-order)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Ability Modifier">Intelligence</span> ±
      <span data-bracket-bottom="Ability Modifier">Speed</span> ±
      <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
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

All character can perform basic actions. [Perks](/perks-flaws#perks) and
[Equipment](/character/equipment) can make additional actions available.

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise, e.g. attacking with an oversized weapon may require
more AP.

| Action   |   AP | Description                                                                |
|----------|-----:|----------------------------------------------------------------------------|
| Attack   |    2 | Attack with a *normal* weapon.                                             |
| Draw     |    1 | Draw a weapon and make it ready for combat use, e.g. release safety catch. |
| Hide     |    3 | Hide from others, provided they have no direct vision of you.              |
| Move     |    1 | Move up to the character's [Speed](#speed) modifier + 5 in meters.         |
| Sneak    |    1 | Move up to half the character's [Speed](#speed) modifier + 5 in meters.    |
| Stand Up |    2 | Standing up when being prone.                                              |
| Use Item |    2 | Use an item in a crisis. The item usually specifies the AP required.       |

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

| Condition | Description                                                                      |
|-----------|----------------------------------------------------------------------------------|
| Prone     | Can't melee attack. May provide bonus to *defence vs ranged* and ranged attacks. |
| Stunned   | Can't act on current turn and does not regain AP.                                |

## Combat

Combat is the most common kind of a crisis.

### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

| Name        |    Defence |
|-------------|-----------:|
| Cover       |         +1 |
| Heavy Cover |         +3 |
| Total Cover | unhittable |

!!! tip "Positions and Cover"
    Being prone does not provide bonuses or penalties to enemies attacking.
    Instead, being prone and facing an enemy straight on counts as being in
    heavy cover (only head and shoulds visible).

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets or other
    projectiles but provide total cover from sight you count as being in heavy
    cover rather than total cover. Hiding behind a car in a firefight would only
    provide normal cover.

### Melee Combat

#### Attacking

Attacking in melee is done using the *Melee* skill.

!!! summary "Melee attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Skill Modifier">Melee</span> ±
      <span data-bracket-bottom="Skill Modifier">Might</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

#### Defence

The *defence vs melee* is a fixed value determined by some character related
stats.

!!! summary "Defence vs melee"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span> ±
      <span data-bracket-top="Skill Modifier">Melee</span> ±
      <span data-bracket-bottom="Skill Modifier">Might</span> +
      <span data-bracket-top="Defence modifier">Armour</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
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

Attacking with ranged weapons is done using the [Light
weapons](/character/skills#light-weapons) or [Heavy
weapons](/character/skills#heavy-weapons) skill.

!!! summary "Ranged attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Skill Modifier">Light/Heavy Weapons</span> ±
      <span data-bracket-bottom="Skill Modifier">Speed</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

#### Defence

!!! summary "Defence vs melee"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span> ±
      <span data-bracket-top="Defence modifier">Armour</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

### Damage

If an attack hits a target, damage is dealt to it. The amount of damage done
depends on the weapon used. The damage of some weapons can be influenced by
their user, e.g. when wielding a melee weapon which is influenced by
[Might](/character#might).

!!! summary "Dealing damage"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Weapon">Damage</span> ±
        <span data-bracket-top="Ability Modifier">Ability</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

If a character wears an armour which still has Durability left, reduce the
damage taken by the armour's DR value. Also, decrease the Durability by one.

Damage reduces the character's [Endurance](/character#endurance).

#### Critical damage

[Critical Hits](/stunts#critical-hit) deal the weapon's critical damage to the
target's [Health](/character#health) pool. An attack that deals critical damage
reduces the target's armour Durability by two, instead of only one.

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.