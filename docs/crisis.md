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

| Difficulty Level | Name        | Target # | Description                                                        |
|-----------------:|-------------|---------:|--------------------------------------------------------------------|
|                1 | Mundane     |        3 | Everyday tasks, which can be done by almost everyone.              |
|                2 | Routine     |        6 | Tasks you do every few days, which can be done by almost everyone. |
|                3 | Simple      |        9 | Most people can do this without much effort.                       |
|                4 | Easy        |       12 | Even untrained people still can do these tasks most of the time.   |
|                5 | Normal      |       15 | You need at least some training to complete these kind of tasks.   |
|                6 | Demanding   |       18 | You either need gear or good training for these tasks.             |
|                7 | Challenging |       21 | You need a lot of training and good gear.                          |
|                8 | Hard        |       24 | You need to be a specialist for these tasks.                       |
|                9 | Very Hard   |       27 | You require help from others to achieve this.                      |
|               10 | Impossible  |       30 | A once in a lifetime achievement.                                  |

### Difficulty Modifier

Certain circumstances modify the difficulty level, either positively or
negatively.

Multiple modifiers stack, but can never modify the difficulty level more than 2
in any direction.

| Name                     | Diffculty Level | Description                               |
|--------------------------|----------------:|-------------------------------------------|
| Asset                    |              -1 | Having the correct tools at hand.         |
| Unfavorable Circumstance |              +1 | E.g. climbing a cliff while it's raining. |

!!! tip "Difficulty Modifier"
    A difficulty modifier basically adds a +3 bonus or a -3 penalty to a check.

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

| Action    |   AP | Description                                                                                       |
|-----------|-----:|---------------------------------------------------------------------------------------------------|
| Attack    |    2 | Attack with a *normal* weapon.                                                                    |
| Hide      |    3 | Hide from others, provided they have no direct vision of you.                                     |
| Move      |    1 | Move up to the character's [Speed](/character#speed-sp) modifier + 2 (at least 1) in meters.      |
| Overwatch |    - | You can delay your turn and use your AP for Attack actions in somebody else's turn.               |
| Take Aim  |    2 | Lowers the Difficulty Level by 1. Can be used multiple times.                                     |
| Sneak     |    1 | Move up to half the character's [Speed](/character#speed-sp) modifier + 2 (at least 1) in meters. |
| Stand Up  |    2 | Standing up when being prone.                                                                     |
| Use Item  |    2 | Use an item in a crisis. The item usually specifies the AP required.                              |

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

| Condition | Description                                                                      |
|-----------|----------------------------------------------------------------------------------|
| Drunk     | All checks impose a +1 [Difficulty](#difficulty-modifer) penalty.                |
| Exhausted | You only regain 2 AP per round. All hits against you become critical hits.       |
| Prone     | Can't melee attack. May provide bonus to *defence vs ranged* and ranged attacks. |
| Stunned   | Can't act or react on current turn and does not regain AP.                       |

## Combat

Combat is the most common kind of a crisis.

!!! danger "Combat reduces [Endurance](/character#endurance)"
    A combat crisis strains your character no matter the outcome. Each combat
    reduces the character's current [Endurance](/character#endurance) by 10,
    which can be restored as usual.

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

When a character is attacked, the character has to roll a Defence check. On a
tie the defender wins the contest.

NPCs have a fixed defence value (Difficulty Level) and do not have to roll.

#### Melee Combat

!!! summary "Defence vs melee"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Skill Modifier">Melee</span> ±
      <span data-bracket-bottom="Ability Modifier">[Might](/character#might-mi) or [Speed](/character#speed-sp)</span> +
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
      <span data-bracket-bottom="Base">3d6</span> ±
      <span data-bracket-top="Ability Modifier">[Speed](/character#speed-sp)</span> +
      <span data-bracket-bottom="Defence modifier">Armour</span> ±
      <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

#### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

| Name        | Difficulty |
|-------------|-----------:|
| Cover       |         +1 |
| Heavy Cover |         +2 |
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
depends on the weapon used. The damage of weapons can be influenced by the
character using them, e.g. when wielding a melee weapon which is influenced by
[Might](/character#might-mi).

There are two types of damage: [Endurance](/character#endurance-ep) damage,
indicated by a weapon's **END** stat, and [Health](/character#health-hp) damage,
indicated by the **DMG** stat.

A character's [Endurance](/character#endurance-ep) has to be depleted or
[Critical Hits](/stunts#critical-hit) have to be dealt to the character in order
to deal damage to the character's [Health](/character#health-hp) pool.

!!! summary "Dealing damage"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Weapon">Damage</span> ±
        <span data-bracket-top="Ability Modifier">Ability</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

Damage reduces the character's [Endurance](/character#endurance-ep). When the
[Endurance](/character#endurance-ep) pool reaches zero, the character becomes
exhausted.

Once [Endurance](/character#endurance-ep) has reached 0, all attacks that hit
are critical hits. Damage that first exceeds
[Endurance](/character#endurance-ep) doesn't have any special effect.<br> When
the [Health](/character#health-hp) pool reaches zero, the character is dead.

An armour prevents damage to the character's [Health](/character#health-hp)
pool, provided it still has Durability left. Whenever an armour prevents
[Health](/character#health-hp) damage, it loses one Durability. E.g. two
critical hits would reduce an amour's Durability by 2.

#### Critical damage

[Critical Hits](/stunts#critical-hit) deal the weapon's damage to the target's
[Health](/character#health-hp) pool.

### Healing

[Endurance](/character#endurance-ep) is restored over time. Items such as
[Adrenalin Shots](/character/equipment#adrenalin-shot) increase
[Endurance](/character#endurance-ep) instantly. Usually, taking a 10 minute
break restores all [Endurance](/character#endurance-ep). The time required
varies, as e.g. a long march requires more time to restore
[Endurance](/character#endurance-ep).

[Health](/character#health-hp) is restored slowly over time. A character heals 1
point of [Health](/character#health-hp) damage every day they can take a rest.
Resting means that the character can only do light downtime activities, like
reading.

#### Healing a dying character

A *dying* character requires medical attention from any other character or even
himself. Using the **Science (Medicine)** skill is required to treat a *dying*
character. The check is penalized by the amount of negative HP the target has.

If a character tries to medically treat himself, the check receives a penalty of
5 points.

First Aid requires one minute. If the check fails, the character loses one HP
due to *dying*. First Aid can be attempted multiple times, until the character
is healed or *dead*.

A *dying* character can be administered a medical item instead of rolling for
First Aid.

#### Healing a wounded character

Medical installations, doctors and medical supplies increase the amount of
[Health](/character#health-hp) healed. Per day a **Science (Medicine)** check
can be attempted for a single character.

Translate the result of the check to the **Difficulty Level** of the
[Difficulty](#difficulty) table. The character heals that amount additionally
that single day, given they can take a rest.

!!! summary "Healing"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">1 per day</span> +
        <span data-bracket-top="X = Difficulty Level">X per day</span>
    </div>

Medical installation, medibots, etc. make **Science (Medicine)** check with
their respective modifiers likewise.

Medical items heal a fixed amount of HP without requiring a **Science
(Medicine)** check.
