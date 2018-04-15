# Crisis

A crisis requires the character to make a roll. This happens, whenever the
outcome of a task is unclear or subject to chance (e.g. a character has to roll
for a certain outcome).

Whenever characters compete against each other or the environment the crisis
lasts longer. In a crisis time slows down and actions become more atomic.

## Difficulty

Every task has a difficulty level. Any check has to be equal or above the
**Target #** of the difficulty level in order to succeed, otherwise the check
fails.

Not all tasks require a check however. For example, finding some information
inside books can be done without a skill check given enough time.

| Difficulty Level | Name        | Target # | Description                                                      |
|-----------------:|-------------|---------:|------------------------------------------------------------------|
|                0 | Mundane     |        3 | Everyday tasks, which can be done by almost everyone.            |
|                1 | Simple      |        6 | Most people can do this without much effort.                     |
|                2 | Easy        |        9 | Even untrained people still can do these tasks most of the time. |
|                3 | Normal      |       12 | You need at least some training to complete these kind of tasks. |
|                4 | Demanding   |       15 | You either need gear or good training for these tasks.           |
|                5 | Challenging |       18 | You need a lot of training and good gear.                        |
|                6 | Hard        |       21 | You need to be a specialist for these tasks.                     |
|                7 | Very Hard   |       24 | You require help from others to achieve this.                    |
|                8 | Impossible  |       27 | A once in a lifetime achievement.                                |

### Difficulty Modifier

Certain circumstances modify the difficulty level, either positively or
negatively.

Multiple modifiers stack, but can never modify the difficulty level more than 2
in any direction.

| Name                     | Diffculty Level | Description                               |
|--------------------------|----------------:|-------------------------------------------|
| Asset                    |              -1 | Having the correct tools at hand.         |
| Unfavorable Circumstance |              +1 | E.g. climbing a cliff while it's raining. |

## Turn Order

Every involved character in a crisis has to roll to determine the turn order.
The character with the highest result acts first. Once every character has
acted, a new **turn** begins.

If two or more characters have rolled the same result roll again. The characters
retain their original roll, but rolls to resolve the conflict change the turn
order.

!!! summary "[Turn Order](#turn-order)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Ability Modifier">Intelligence</span> ±
      <span data-bracket-bottom="Ability Modifier">Speed</span> ±
      <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.

## Actions

Actions within a crisis require **action points** (AP) to be spent.

Each character has a maximum of 6 AP. At the start of each turn, including the
beginning of a crisis, the character gains 4 AP. Action points can never exceed
6 or deceed 0. Exceeding AP are lost, while actions that require more than the
remain AP are disabled until enough AP are accumulated.

!!! tip "Tracking AP"
    Tracking AP is very easy. Get a d6, put it front of you, and let it face the
    number of AP your character has. If you are at zero AP, put the die aside.

!!! danger "Actions reduce [Endurance](/character#endurance)"
    Spending AP reduces the character's current
    [Endurance](/character#endurance) by the amount of AP spent.

If an action states an AP cost higher than 6, this indicates that the action has
to be executed over multiple subsequent turns. Executing any other action while
this action isn't completed yet cancels it.

!!! example "Reloading a flintlock musket"
    Reloading a flintlock musket takes 10 AP. You can immediatly spend all your
    AP on reloading. Each subsequent turn you can spend another 4 AP on
    reloading.

    A character begins reloading a flintlock musket with 3 AP left. After 2 more
    rounds he would have accumulated 11 AP. So after these 2 rounds he has 1 AP
    left and his weapon is reloaded.

!!! info "Actions in parallel"
    Not all actions require your utmost attention. E.g. while reloading you can
    still give short commands to e.g. other party members. This is up to the GM
    however.

### Available Actions

All characters can perform basic actions. [Perks](/character/perks) and
[Equipment](/character/equipment) can make additional actions available.

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise, e.g. attacking with an oversized weapon may require
more AP.

| Action   |   AP | Description                                                                                       |
|----------|-----:|---------------------------------------------------------------------------------------------------|
| Attack   |    2 | Attack with a *normal* weapon.                                                                    |
| Hide     |    3 | Hide from others, provided they have no direct vision of you.                                     |
| Move     |    1 | Move up to the character's [Speed](/character#speed-sp) modifier + 2 (at least 1) in meters.      |
| Sneak    |    1 | Move up to half the character's [Speed](/character#speed-sp) modifier + 2 (at least 1) in meters. |
| Stand Up |    2 | Standing up when being prone.                                                                     |
| Use Item |    2 | Use an item in a crisis. The item usually specifies the AP required.                              |

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

| Condition | Description                                                                                       |
|-----------|---------------------------------------------------------------------------------------------------|
| Drunk     | All [Abilities](/character#abilities) and [Skills](/character#skills) checks impose a -3 penalty. |
| Exhausted | You only regain 2 AP per round.                                                                   |
| Prone     | Can't melee attack. May provide bonus to *defence vs ranged* and ranged attacks.                  |
| Stunned   | Can't act on current turn and does not regain AP.                                                 |

## Combat

Combat is the most common kind of a crisis.

### Attacking

!!! summary "Making an attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Skill Modifier">Skill</span> ±
      <span data-bracket-bottom="Ability Modifier">Ability</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

### Defence

#### Melee Combat

The *defence vs melee* is a fixed value determined by some character related
stats.

!!! summary "Defence vs melee"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span> ±
      <span data-bracket-top="Skill Modifier">Melee</span> ±
      <span data-bracket-bottom="Ability Modifier">Might</span> +
      <span data-bracket-top="Defence modifier">Armour</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
      <span data-bracket-top="per additional enemy">-2</span>
    </div>

Every additional enemy in melee range reduces *defence vs melee* by 2. This only
applies if there is more than one enemy in range.

!!! example "Melee combat"
    Jack is attacked by 3 security drones attacking with batons. They all are in
    Jack's melee range. Jack is a good melee fighter and has a *defence vs
    melee* of 16 against a single enemy. Since there are two additional enemies
    his *defence vs melee* drops by a total of 4, resulting in a *defence vs
    melee* of 12, making him an easy target.

#### Ranged Combat

!!! summary "Defence vs ranged"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span> ±
      <span data-bracket-top="Ability Modifier">Speed</span> +
      <span data-bracket-bottom="Defence modifier">Armour</span> ±
      <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

#### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

| Name        |    Defence |
|-------------|-----------:|
| Cover       |         +1 |
| Heavy Cover |         +3 |
| Total Cover | unhittable |

<div class="left" markdown="1">

!!! tip "Positions and Cover"
    Being prone does not provide bonuses or penalties to enemies attacking.
    Instead, being prone and facing an enemy straight on counts as being in
    heavy cover (only head and shoulds visible).

</div>
<div class="right" markdown="1">

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets or other
    projectiles but provide total cover from sight you count as being in heavy
    cover rather than total cover. Hiding behind a car in a firefight would only
    provide normal cover.

</div>

### Damage

If an attack hits a target, damage is dealt to it. The amount of damage done
depends on the weapon used. The damage of some weapons can be influenced by the
character using them, e.g. when wielding a melee weapon which is influenced by
[Might](/character#might-mi).

There are two types of damage: [Endurance](/character#endurance-ep) damage,
indicated by a weapon's **END** stat, and [Health](/character#health-hp) damage,
indicated by the **DMG** stat.

!!! summary "Dealing damage"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Weapon">Damage</span> ±
        <span data-bracket-top="Ability Modifier">Ability</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

Damage reduces the character's [Endurance](/character#endurance-ep). When the
[Endurance](/character#endurance-ep) pool reaches zero, the AP gain per round is
reduced to 2.

Once [Endurance](/character#endurance-ep) has reached 0, all attacks that hit
are critical hits. Exceeding [Endurance](/character#endurance-ep) doesn't have
any effect. When the [Health](/character#health-hp) pool reaches zero, the
character is dead.

An armour's DR reduces damage to the character's [Health](/character#health-hp)
pool, provided it still has Durability left. Whenever an armour reduces
[Health](/character#health-hp) damage, it loses one Durability.

#### Critical damage

[Critical Hits](/stunts#critical-hit) deal the weapon's damage to the target's
[Health](/character#health-hp) pool. An attack that deals critical damage
reduces the target's armour Durability by two, instead of only one.
