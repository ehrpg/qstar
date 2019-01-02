# Crisis

*A crisis requires a character to make a **Skill** roll. In a crisis time slows
down and actions become more atomic.*

## Difficulty

Every task has a difficulty of **4**. Some tasks require equipment or knowledge,
in order to not suffer a penalty. Other tasks are very easy, and the roll gains
a bonus, or you don't even have to roll at all.

Not all tasks **require** a check. For example, finding some information inside
books can be done without a skill check given enough time. A good skill check
could reduce the time spent searching, or it could unearth additional
information that might be helpful.

| Modifier | Name        | Description                                                        |
| -------: | ----------- | ------------------------------------------------------------------ |
|       -4 | Trivial     | Everyday tasks.                                                    |
|       -2 | Routine     | Tasks you do every few days, which can be done by almost everyone. |
|       -1 | Simple      | Most people can do this without much effort.                       |
|        _ | Easy        | Even untrained people still can do these tasks sometimes.          |
|       +1 | Normal      | You need at least some training to complete these kind of tasks.   |
|       +2 | Demanding   | You either need gear or good training for these tasks.             |
|       +4 | Challenging | You need a lot of training and good gear.                          |
|       +6 | Hard        | You need to be a specialist for these tasks.                       |
|       +8 | Very Hard   | You require help from others to achieve this.                      |
|      +10 | Impossible  | A once in a lifetime achievement.                                  |

!!! tip "Difficulty"
    This is only a guideline about tasks and the modifiers they impose.

### Difficulty Modifier

Certain circumstances modify the task's difficulty positively or negatively.
Multiple modifiers stack.

| Modifier | Name                     | Description                               |
| -------: | ------------------------ | ----------------------------------------- |
|       +1 | Asset                    | Having the correct tools at hand.         |
|       -1 | Unfavorable Circumstance | E.g. climbing a cliff while it's raining. |

!!! tip "Stacking Modifiers"
    Even though modifiers stack, multiple assets of the same type do not stack,
    e.g. two climber's gears.

## Turns

Each character and creature in a crisis have one turn per round. The order in
which they can act is determined by their turn order.

Once every character has acted, a new **round** begins.

### Turn Order

Every character involved in a crisis has to roll for initiative. You roll a
[d6][] and add your [Action][] bonus to the roll. The character with the highest
result acts first. As with any die roll, the initiative die can *explode* too.

If two or more characters have rolled the same result the PCs can agree upon who
acts first. If they cannot find an agreement, roll again. The characters retain
their original roll, but the conflict is resolved.

!!! summary "Turn Order"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">[d6][]</span> +
      <span data-bracket-top="Action Skill category">[Action] bonus</span>
    </div>

!!! tip "[GM Tip] - NPC Turn Order"
    As a GM you can roll once for a group of NPCs, e.g. a pack of wolves. This
    simplifies the overhead you have in combat with multiple NPCs.

### Action Points

Every Action in a Crisis requires [Action Points][] (AP).

Every character has a minimum of 0 [AP][] and a maximum of 6 [AP][]. At the
start of each turn, including the beginning of a Crisis, the character gains 4
[AP][].

Any [AP][] over 6 are lost, while Actions that require more than the remaining
[AP][] are disabled until enough [AP][] are accumulated.

An action with an [AP][] cost higher than 6 indicates that the Action has to be
executed over multiple subsequent turns. Executing any other Action while this
Action isn't completed yet cancels it.

!!! example "Reloading a flintlock musket"
    Reloading a flintlock musket takes 10 [AP][]. You can immediatly spend all
    your [AP][] on reloading. Each subsequent turn you can spend another 4
    [AP][] on reloading.

    A character begins reloading a flintlock musket with 3 [AP][] left. After 2
    more rounds he would have accumulated 11 [AP][]. So after these 2 rounds he
    has 1 [AP][] left and his weapon is reloaded.

!!! info "Actions in parallel"
    Not all Actions require your utmost attention. E.g. while reloading you can
    still give short commands to e.g. other party members. This is up to the GM
    however.

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.

## Attacks

An Attack roll is equal to a **Skill** roll, using the weapon's associated
[Skill][]. An Attack automatically fails if the first die comes up with a **1**.

!!! summary "Making an Attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Skill Die">Attack</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

<div class="left" markdown="1">

#### Ranged Attacks

A ranged Attack roll has to be equal to or higher than **4**. Circumstances such
as range, visibility, wind, etc. influence the Attack roll's result.

</div>
<div class="right" markdown="1">

#### Melee Attacks

A Melee Attack roll has to be equal to or higher than **4**. Once per round, the
target can try to parry to Melee Attack.

</div>

##### Parrying

Once per round you can try to parry an incoming Melee Attack. You have to choose
to parry before the attacker rolls his attack. The parry roll is a Melee roll
that has to be equal to or higher than **4**. If it succeeds, you can substract
your final roll from the damage received.

#### Area of Effect

Attacks with an Area of Effect, e.g. a fireball spell, also have to be equal or
higher than **4**.

Thrown weapons, e.g. grenades, require you to make an Athletics check. The roll
otherwise is a normal Ranged Attack. Circumstances such as range, visibility,
wind, etc. influence the Athletics roll's result.

##### Dodging

Only Area of Effect Attacks can be dodged. Once per round you can try to dodge
an incoming Area of Effect Attack. You have to choose to dodge before the
attacker rolls his attack. The dodge roll is an Acrobatics roll that has to be
equal to or higher than **4**. If it succeeds, you can substract your final roll
from the damage received.

### Cover

> Cover provides penalties to the attacker for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

|   Modifier | Condition   |
| ---------: | ----------- |
|         -2 | Cover       |
|         -4 | Heavy Cover |
| unhittable | Total Cover |

<div class="left" markdown="1">

!!! tip "Positions and Cover"
    Being prone and facing an enemy straight on counts as being in heavy cover
    (only head and shoulders visible).

</div>
<div class="right" markdown="1">

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets or other
    projectiles decrease your Cover by one step. E.g. total cover becomes heavy
    cover, while in in light cover you count as not being behind cover at all.

</div>

## Damage

If an Attack is successful, damage can be dealt to the target.

You deal your Attack's roll plus or minus the weapon's damage as damage to the
target. You **always** deal at least 1 damage, regardless of your target's
defences, damage reduction, etc.

If the Attack would also cause a status effect on the target, the damage dealt
has to be equal to or higher than the target's defences.

### Damage Reduction

If a target wears Armor, all damage you deal is substracted from the target's
Armor first.

Some weapons and Actions circumvent the Armor, e.g. Armor-Piercing Ammunition.

### Non-lethal damage

When a target would die from an Attack, the attacker can decide whether or not
to apply non-lethal force, knocking the target unconcious instead of killing it.

## Wounds

**TODO**

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

**TODO**

The Medicine Skill can be used to treat a wound suffered within the last hour.
Each Medicine Skill roll to heal a wound takes 10 minutes.

Wounds that are older than one hour have to heal naturally.

**Healing A Character**: A healer can aid a character's healing progress. The
healer has to substract the patient's wounds from his Medicine roll. A wounded
character trying to heal his own wounds suffers from both the wound penalty and
a -2 penalty for treating himself.

Without any healing aids, such as bandages etc., the healer suffers a -2 penalty
to his roll. Having the right tools at hand via an Asset, the penalty is reduced
to 0, rather than a +1 bonus.

If the Medicine check was successful, the patient recovers from 1 wound.

**Healing A Dying Character**: If a healer was successful on his Medicine check
for his patient, the patient is not incapacitated anymore.

### Natural Healing

Every day a wounded or incapacitated character can attempt a
[Might](/character#might-mi) roll to heal 1 wound naturally. A critical failure
on the [Might](/character#might-mi) roll causes an additional wound.

The difficulty of Natural Healing is influenced by these conditions:

| Modifier | Condition                                                             |
| -------: | --------------------------------------------------------------------- |
|       -2 | Rough traveling                                                       |
|       -2 | No medical attention                                                  |
|       -2 | Poor environmental conditions, such as intense cold, heat, or rain    |
|        _ | First Aid / Medical attention from self                               |
|       +1 | Medical attention from a doctor                                       |
|       +2 | Medical attention from a doctor in good condition, such as a hospital |

## Available Actions

All characters can perform basic actions. [Talents](/character/talents) and
[Equipment](/equipment) can make additional actions available.

This list provides a guideline for actions and their [AP][] cost. These apply
unless stated otherwise, e.g. attacking with an oversized weapon may require
more [AP][].

#### Movement & Stances

<div class="qs-list-test full-width" markdown="1">

##### Move

You can move up to the character's [Pace](/character#pace).

[AP][]
:   1

##### Crawl

You can move up to 2 meters while [Prone](/crisis/#prone).

[AP][]
:   1

##### Crouch

You can move up to half the character's [Pace](/character#pace) while
[Kneeling](/crisis/#kneeling).

[AP][]
:   1

##### Kneel down / Stand Up

You kneel down on your kneews or stand up.

[AP][]
:   1

Effect
:   Toggles the [Kneeling](/crisis/#kneeling) Condition. When already Kneeling,
going prone only costs 1 [AP][].

##### Go Prone / Stand Up

You lie down or stand up.

[AP][]
:   2

Effect
:   Toggles the [Prone](/crisis/#prone) Condition. When being prone, kneeling
down costs 1 [AP][].

</div>

#### Combat

<div class="qs-list-test full-width" markdown="1">

##### Attack

Attack with a *normal* weapon.

[AP][]
:   2, or as indicated by the weapon.

##### Hide

Hide from others, provided they have no direct vision of you.

[AP][]
:   3

##### Overwatch

You delay your turn and can use your [AP][] for Attack actions in somebody
else's turn.

[AP][]
:   -

##### Take Aim

Line up your shot. Can be used multiple times.

[AP][]
:   2, or as indicated by the weapon.

Effect
:   Per Take Aim action you gain a +1 bonus to ranged attacks.

##### Use Item

You use an item.

[AP][]
:   2, or as indicated by the item.

Effect
:   The used item specifies the effect of this action.

</div>

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.

<div class="qs-list-test full-width" markdown="1">

##### Drunk

*You feel a little dizzy.*

Penalty
:   All checks suffer a -1 penalty. Checks that rely on speed and balance suffer
a -2 penalty.

##### Exhausted

*You need to catch your breath first.*

Penalty
:   You gain -2 [AP][] per round.

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

*Something keeps you from acting and reacting.*

Penalty
:   You can't act or react on the current turn and do not regain AP.

</div>

--8<-- "_links.md"
