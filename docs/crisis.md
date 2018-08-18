# Crisis

A crisis requires a character to make a **Task** roll, **Damage** roll or
**Random** roll. In a crisis time slows down and actions become more atomic.

## Difficulty

Every task has a difficulty of 4. Some tasks require equipment or knowledge, in
order to not suffer a penalty. Other tasks are very easy, and the roll gains a
bonus, or you don't have to roll at all.

Not all tasks require a check. For example, finding some information inside
books can be done without a skill check given enough time. A good skill check
could reduce the time spent searching, or it could unearth additional
information that might be helpful.

!!! tip "Difficulty"
    This is only a guideline about tasks and the modifiers they impose.

| Modifier | Name        | Description                                                        |
|---------:|-------------|--------------------------------------------------------------------|
|       -4 | Trivial     | Everyday tasks.                                                    |
|       -3 | Mundane     | Everyday tasks, which can be done by almost everyone.              |
|       -2 | Routine     | Tasks you do every few days, which can be done by almost everyone. |
|       -1 | Simple      | Most people can do this without much effort.                       |
|        _ | Easy        | Even untrained people still can do these tasks most of the time.   |
|       +1 | Normal      | You need at least some training to complete these kind of tasks.   |
|       +2 | Demanding   | You either need gear or good training for these tasks.             |
|       +3 | Challenging | You need a lot of training and good gear.                          |
|       +4 | Hard        | You need to be a specialist for these tasks.                       |
|       +5 | Very Hard   | You require help from others to achieve this.                      |
|       +6 | Impossible  | A once in a lifetime achievement.                                  |

### Difficulty Modifier

Certain circumstances modify the task's difficulty positively or negatively.
Multiple modifiers stack.

| Modifier | Name                     | Description                               |
|---------:|--------------------------|-------------------------------------------|
|       +1 | Asset                    | Having the correct tools at hand.         |
|       -1 | Unfavorable Circumstance | E.g. climbing a cliff while it's raining. |

!!! tip "Stacking Modifiers"
    Even though modifiers stack, multiple assets of the same type may not be
    stacking.

## Turns

Each character and creature in a crisis have one turn per round. The order in
which they can act are determined by their turn order.

Every Action in a Crisis requires Actions Points (AP).

Action points can never exceed 6 or deceed 0. Exceeding AP are lost, while
actions that require more than the remain AP are disabled until enough AP are
accumulated.

### Turn Order

Every character involved in a crisis has to roll to determine its turn order.
The character with the highest result acts first. Once every character has
acted, a new **turn** begins.

The GM rolls for NPCs. Usually, he rolls once for an entire group of the same
type, e.g. a pack of wolves.

If two or more PCs or special NPCs have rolled the same result the characters
can agree upon who acts first. If they cannot find an agreement roll again. The
characters retain their original roll, but rolls to resolve the conflict change
the turn order.

!!! summary "[Turn Order](#turn-order)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Speed Die">Speed</span> ±
      <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

### Action Points

Every character has a minimum of 0 AP and a maximum of 6 AP. At the start of
each turn, including the beginning of a Crisis, the character gains 4 AP.

Exceeding AP are lost, while Actions that require more than the remaining AP are
disabled until enough AP are accumulated.

If an Action states an AP cost higher than 6, this indicates that the Action has
to be executed over multiple subsequent turns. Executing any other Action while
this Action isn't completed yet cancels it.

!!! example "Reloading a flintlock musket"
    Reloading a flintlock musket takes 10 AP. You can immediatly spend all your
    AP on reloading. Each subsequent turn you can spend another 4 AP on
    reloading.

    A character begins reloading a flintlock musket with 3 AP left. After 2 more
    rounds he would have accumulated 11 AP. So after these 2 rounds he has 1 AP
    left and his weapon is reloaded.

!!! info "Actions in parallel"
    Not all Actions require your utmost attention. E.g. while reloading you can
    still give short commands to e.g. other party members. This is up to the GM
    however.

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.

## Available Actions

All characters can perform basic actions. [Perks](/character/perks) and
[Equipment](/equipment) can make additional actions available.

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise, e.g. attacking with an oversized weapon may require
more AP.

| Action    |   AP | Description                                                                         |
|-----------|-----:|-------------------------------------------------------------------------------------|
| Attack    |    2 | Attack with a *normal* weapon.                                                      |
| Hide      |    3 | Hide from others, provided they have no direct vision of you.                       |
| Move      |    1 | Move up to the character's Pace.                                                    |
| Overwatch |    _ | You can delay your turn and use your AP for Attack actions in somebody else's turn. |
| Take Aim  |    2 | Provides a +1 Bonus to a ranged Attack. Can be used up to two times.                |
| Sneak     |    1 | Move up to half the character's Pace.                                               |
| Stand Up  |    1 | Standing up when being prone.                                                       |
| Use Item  |    2 | Use an item in a crisis. The item usually specifies the AP required.                |

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

| Condition | Description                                                |
|-----------|------------------------------------------------------------|
| Drunk     | All checks suffer a -1 penalty.                            |
| Exhausted | You only regain 2 AP per round.                            |
| Prone     | Can't melee attack. May provide bonus to ranged Attacks.   |
| Slowed    | A slowed character has its Pace halfed.                    |
| Stunned   | Can't act or react on current turn and does not regain AP. |

## Combat

Combat is the most common kind of a crisis.

### Attacks

An Attack roll is equal to a **Task** roll, using the weapon's associated
Skill.

!!! summary "Making an Attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Skill Die">Attack</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

<div class="left" markdown="1">

#### Melee Attacks

A melee Attack roll has to be equal to or higher than the target's
[Parry](#parry) value.

</div>
<div class="right" markdown="1">

#### Ranged Attacks

A ranged Attack roll has to be equal to or higher than 4. Circumstances such as
range, visibility, wind, etc. influence the Attack roll's result.

</div>

### Parry

> The [Parry](#parry) value is used for defending against a melee Attack.

Every additional enemy in melee range reduces the [Parry](#parry) value by 1.
This only applies if there is more than one enemy in range.

!!! example "Melee combat"
    Jack is attacked by 3 security drones attacking with batons. They all are in
    Jack's melee range. Jack is a good melee fighter and has a [Parry](#parry)
    of 8 against a single enemy. Since there are three enemies in total, his
    [Parry](#parry) is reduced by 2 because of the 2 additional enemies. His
    [Parry](#parry) value drops to 6 while being in melee range to all three of
    them.

### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

|   Modifier | Condition   |
|-----------:|-------------|
|         +1 | Cover       |
|         +2 | Heavy Cover |
| unhittable | Total Cover |

<div class="left" markdown="1">

!!! tip "Positions and Cover"
    Being prone and facing an enemy straight on counts as being in heavy cover
    (only head and shoulds visible).

</div>
<div class="right" markdown="1">

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets or other
    projectiles but provide total cover from sight you count as being in heavy
    cover rather than total cover. Hiding behind a car in a firefight would only
    provide normal cover.

</div>

### Damage

If an Attack is successful, damage can be dealt to the target. A successful
Attack **always** lowers the target's Armour, if any, by one. Some weapons or
special Actions reduce the Armour by more.

Roll the weapon's damage dice. Some weapons gain additional damage from an
Attribute and Actions.

The result of the damage roll has to be higher than the target's Toughness
value. If the damage roll is higher, you cause 1 wound on the target. Some
weapons or Actions increase the wounds caused.

## Wounds

Every wound imposes a -1 penalty on all **Task** rolls.

When the creature has negative [Health](#health) equal to its maximum, the
creature dies.

If [Health](#health) drops to 0 or below, the creature has to make a
[Might](/character#might-mi) roll. On a failure, the creature becomes
incapacitated until healed or dead. If the check succeeds, the character remains
concious.

NPCs usually die outright when they reach 0 [Health](#health).

!!! example "Negative [Health](#health)"
    Jack has a maximum of 3 [Health](#health). At 0 [Health](#health) he becomes
    incapacitated. When his [Health](#health) drop to -3, Jack dies.

## Healing

The Medicine Skill can be used to treat a wound suffered within the last hour.
Each Medicine Skill roll to heal a wound takes 10 minutes.

Wounds that are older than one hour have to heal naturally.

**Healing A Character**: A healer can aid a character's healing progress. The
healer has to substract the patient's wounds from his Medicine roll. A wounded
character trying to heal his own wounds suffers from both the wound penalty and
the wound penalty to the Medicine roll.

Without any healing aids, such as bandages etc., the healer suffers a -2 penalty
to his roll.

**Healing A Dying Character**: If a healer was successful on his Medicine check
for his patient, the patient is not incapacitated anymore.

### Natural Healing

Every day a wounded or incapacitated character can attempt a
[Might](/character#might-mi) roll to heal 1 wound naturally. A critical failure
on the [Might](/character#might-mi) roll causes an additional wound.

The difficulty of Natural Healing is influenced by these conditions:

| Modifier | Condition                                                             |
|---------:|-----------------------------------------------------------------------|
|       -2 | Rough traveling                                                       |
|       -2 | No medical attention                                                  |
|       -2 | Poor environmental conditions, such as intense cold, heat, or rain    |
|        _ | First Aid / Medical attention from self                               |
|       +1 | Medical attention from a doctor                                       |
|       +2 | Medical attention from a doctor in good condition, such as a hospital |

