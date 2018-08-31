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

Every character involved in a crisis uses its
[Perception](/character#perception) value to determine its turn order. The
character with the highest [Perception](/character#perception) value acts first.
Once every character has acted, a new **turn** begins.

If two or more characters have rolled the same result the PCs can agree upon who
acts first. If they cannot find an agreement make a **Task** roll on your
[Speed](/character#speed-sp) Attribute. The characters retain their original
roll, but rolls to resolve the conflict change the turn order.

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

This list provides a guideline for actions and their AP cost. These apply unless
stated otherwise, e.g. attacking with an oversized weapon may require more AP.

#### Movement & Stances

<div class="qs-list-test full-width" markdown="1">

##### Move

You can move up to the character's [Pace](/character#pace).

AP Cost
:   1

##### Crawl

You can move up to 2 meters while crawling.

Effect
:   Ranged attacks against you suffer a -2 penalty.

AP Cost
:   1

##### Crouch

You can move up to half the character's [Pace](/character#pace).

Effect
:   Ranged attacks against you suffer a -1 penalty. Also counts as sneaking.

AP Cost
:   1

##### Kneel down / Stand Up

You kneel down on your kneews or stand up.

Effect
:   Toggles the Kneeling Condition. When Kneeling, going prone only costs 1 AP.

AP Cost
:   1

##### Go Prone / Stand Up

You lie down or stand up.

Effect
:   Toggles the Prone Condition. When being prone, kneeling down costs 1 AP.

AP Cost
:   2

</div>

#### Combat

<div class="qs-list-test full-width" markdown="1">

##### Attack

Attack with a *normal* weapon.

AP Cost
:   2, or as indicated by the weapon.

##### Hide

Hide from others, provided they have no direct vision of you.

AP Cost
:   3

##### Overwatch

You delay your turn and can use your AP for Attack actions in somebody else's
turn.

AP Cost
:   -

##### Take Aim

Line up your shot. Can be used multiple times.

Effect
:   Per Take Aim action you gain a +1 bonus to ranged attacks.

AP Cost
:   2, or as indicated by the weapon.

##### Use Item

You use an item.

Effect
:   The used item specifies the effect of this action.

AP Cost
:   2, or as indicated by the item.

</div>

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

<div class="qs-list-test full-width" markdown="1">

##### Drunk

Penalty
:   All checks suffer a -1 penalty. Checks that rely on speed and balance suffer
a -2 penalty.

##### Exhausted

Penalty
:   You gain -2 AP per round.

##### Kneeling

*Kneeling down gives you better control over recoil and weapon sway.*

Bonus
:   You count as being in **Light Cover** against ranged Attacks. You gain a +1
bonus on attacks using ranged weapons.

Penalty
:   Melee attacks against you gain a +2 bonus.

##### Prone

*Being prone gives gives you even better control over recoil and weapon sway.*

Bonus
:   You count as being in **Heavy Cover** against ranged Attacks. You gain a +2
bonus on attacks using ranged weapons.

Penalty
:   Melee attacks against you gain a +4 bonus.

##### Stunned

Penalty
:   You can't act or react on the current turn and do not regain AP.

##### Suppressed

After being attacked, hit or not, you are being **Suppressed** until the end of
your next round.

Penalty
:   -2 on all **Task** rolls.

</div>

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
[Parry](/character#parry) value.

</div>
<div class="right" markdown="1">

#### Ranged Attacks

A ranged Attack roll has to be equal to or higher than 4. Circumstances such as
range, visibility, wind, etc. influence the Attack roll's result.

</div>

#### Critical Hits

For every 4 points above 12, starting at 12, you score a Critical Hit, if the
Attack is higher than the target's armor.

Scoring a Critical Hit gives you a +1 bonus on Damage rolls.

You only score a Critical Hit, if the Attack itself hits and a Critical Hit can
only be scored, if the threshold for a Critical Hit is **higher** than the
target's armor.

!!! example "Critical Hits"
    Jack attacks and his Attack roll results in 19. His target has a Defence of
    13. He scores only 1 Critical Hit, for reach 16. Reaching the 12 is not a
    Critical Hit, since it's lower than the target's armor.


#### Area of Effect

Attacks with an Area of Effect, e.g. a fireball spell, always deal their damage
without having to roll for an Attack. As such, they cannot critically hit.

Thrown weapons, e.g. grenades, require you to make an Athletics check. The roll
otherwise is a normal Ranged Attack. Circumstances such as range, visibility,
wind, etc. influence the Athletics roll's result.

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
    projectiles decrease your Cover by one step. E.g. total cover becomes heavy
    cover, while in in light cover you count as not being behind cover at all.

</div>

## Damage

If an Attack is successful, damage can be dealt to the target.

Roll the weapon's damage dice. Some weapons gain additional damage from an
Attribute and Actions.

The result of the damage roll has to be higher than the target's
[Toughness](/character#toughness) value. If the damage roll is higher, you cause
1 wound, or more depending on the weapon and used Action, to the target.

### Critical Damage

For each 4 points above the target's [Toughness](/character#toughness) value,
the target receives 1 additional wound. These additional wounds are always
**physical** wounds.

### Damage Reduction

If a target wears Armor, all wounds you deal are substracted from the target's
Armor first. Only if the Durability of the Weapon's or Action's Damage type is 0
you can deal wounds to the target. Some weapons and Actions circumvent the
Armor, e.g. Armor-Piercing Ammunition.

## Wounds

When the creature has negative [Health](#health) equal to its maximum, the
creature dies.

If [Health](#health) drops to 0 or below, the creature has to make a
[Might](/character#might-mi) roll. On a failure, the creature becomes
incapacitated, but not necessarily unconcious, until healed or dead.

NPCs usually die outright when they reach 0 [Health](#health).

!!! example "Negative [Health](#health)"
    Jack has a maximum of 3 [Health](#health). At 0 [Health](#health) he becomes
    incapacitated if he fails his [Might](/character#might-mi) roll. When his
    [Health](#health) drop to -3, Jack dies.

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

