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
|---------:|-------------|--------------------------------------------------------------------|
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
|---------:|--------------------------|-------------------------------------------|
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

Every character involved in a crisis has to roll for initiative, by rolling his
[Action][] die. As with any die roll, the
initiative die can *explode* too.

If two or more characters have rolled the same result the PCs can agree upon who
acts first. If they cannot find an agreement, roll again. The characters retain
their original roll, but the conflict is resolved.

!!! summary "Turn Order"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Action Skill category">[Action][] die</span> ±
      <span data-bracket-top="Race / Talents / etc">Circumstance</span>
    </div>

!!! tip "[GM Tip] - NPC Turn Order"
    As a GM you can roll once for a group of NPCs, e.g. a pack of wolves. This
    simplifies the overhead you have in combat with multiple NPCs.

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.

## Action Points

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

## Attacks

An Attack roll is equal to a **Skill** roll, using the weapon's associated
[Skill][]. An Attack automatically fails if the first die roll comes up with a
**1**.

!!! summary "Making an Attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Skill Die">Attack</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

### RoF

Using a weapon with a higher **RoF** allows you to make multiple Attacks against
the same or even different targets. You have to assign all Attacks to your
targets first before you execute them. This can result in attacking an already
incapacitated target.

<div class="left" markdown="1">

### Ranged Attacks

A ranged Attack roll is usually made with the Light Weapon [Skill][] and has to
be equal to or higher than **4**.

</div>
<div class="right" markdown="1">

### Melee Attacks

A Melee Attack roll has to be equal to or higher than **4**, but can be parried
by the defender.

</div>

#### Parrying

Once per round you can try to parry an incoming Melee Attack. You have to choose
to parry before the attacker rolls his attack. The parry roll is a Melee roll
that has to be equal to or higher than **4**. For every additional enemy within
melee range you suffer a -1 penalty on the parry roll.

Divide your roll by 4. This is the amount of damage you parry. Any remaining
damage is further reduced by Armour.

### Area of Effect

Attacks with an Area of Effect, e.g. a fireball spell, also have to be equal to
or higher than **4**.

Thrown weapons, e.g. grenades, require you to make an Athletics check. The roll
otherwise is a normal Ranged Attack.

If you miss an Area of Effect Attack, roll a [d8][]. The result of the [d8][]
determines in which direction you missed. A 1 is being straight back at you, 5
away from you, and 2 through 8 counting clockwise around the target. You miss by
a number of squares equal to the range increment of the throw.

#### Dodging

Only Area of Effect Attacks can be dodged. Once per round you can try to dodge
an incoming Area of Effect Attack. You have to choose to dodge before the
attacker rolls his attack. The dodge roll is an Athletics roll that has to be
equal to or higher than **4**.

If you are able to dodge out of the Area of Effect of the Attack you receive no
wounds. Otherwise divide your roll by 4. This is the damage you avoid through
dodging.

### Cover

> Cover provides penalties to the attacker for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

|   Modifier | Condition   |
|-----------:|-------------|
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

You deal your used weapon's damage, but receive extra damage from the Attack
roll. Take your final Attack roll and divide it by 4. This is the amount of
extra damage you deal to the target.

If your damage would be reduced to 0 or lower because of defenses, such as
armor, parrying, or dodging you still deal 1 non-lethal damage to the target.
Status Effects are not applied in this case.

!!! summary "Dealing Damage"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Attack Roll">[Attack](/crisis/#attacks)</span> /
      <span>4</span> +
      <span data-bracket-top="Weapon Damage">DMG</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

!!! example "Attacking and Damaging"
    A character makes a Ranged Attack with a [d10][]. He rolls a 6 and adds all
    applicable to-hit modifiers. The final Attack roll results in a 5.  The
    final Attack roll divided by 4 results in 1 (as always, round down). The
    used weapon's damage is 2. The attacker would deal 3 damage. The target only
    wears light armour and blocks 1 damage, resulting in a total of 2 damage.

### Damage Reduction

Damage reduced by [Parrying](#parrying) or [Dodging](#dodging), and Armour. If a
target wears Armor, all damage you deal is substracted from the target's Armour.

Some weapons and Actions circumvent the armor's damage reduction, e.g.
Armor-Piercing Ammunition.

### Non-lethal damage

When a target would die from an Attack, the attacker can decide whether or not
to apply non-lethal force, knocking the target unconcious instead of killing it.

## Wounds

Every point of damage you receive deals a wound. A wound can either be lethal or
non-lethal.

### Lethal

If a creature has wounds equal to or higher than its HP, the creature is
incapacitated and [Dying](#dying). If a creature has wounds equal to or higher
than double its HP, the creature dies.

NPCs usually die outright when they reach 0 HP.

### Non-Lethal

When non-lethal wounds are equal to or higher a creature's HP, the creature is
[Exhausted](#exhausted). Non-lethal wounds equal to or higher than double the
creature's HP incapacitates it.

!!! info "Non-lethal wounds on a target with lethal wounds"
    A target may already have lethal wounds, when receiving non-lethal wounds.
    The non-lethal wounds only have to be equal to or higher than the target's
    remaining HP.

## Healing

The Medicine Skill can be used to treat a wound suffered within the last hour.
Each Medicine Skill roll to heal a wound takes 10 minutes.

Wounds that are older than one hour have to heal naturally.

**Healing A Character**: A healer can aid a character's natural healing
progress. A wounded character trying to heal his own wounds suffers a -2 penalty
for treating himself.

Without any healing aids, such as bandages etc., the healer suffers a -2 penalty
to his roll. Having the right tools at hand via an Asset, the penalty is reduced
to 0, rather than a +1 bonus. Multiple Assets can provide a bonus instead.

If the Medicine check was successful, the patient recovers from 1 wound.

**Healing A Dying Character**: If a healer was successful on his Medicine check
for his patient, the patient is not dying anymore, but stays incapacitated for
the next 10 rounds.

**Healing non-lethal Damage**: Non-lethal damage can be completely removed by a
successful Medicine check, given ahlf an hour of uninterrupted healing.

### Natural Healing

Every hour a non-lethal wound is healed automatically.

Every day a wounded or incapacitated character has to attempt a [Action][] roll
to heal 1 wound naturally. A critical failure on the [Action][] roll causes an
additional wound. On a failed check nothing happens.

The difficulty of Natural Healing is influenced by these conditions:

| Modifier | Condition                                                             |
|---------:|-----------------------------------------------------------------------|
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

##### Hide

Hide from others, provided they have no direct vision of you.

[AP][]
:   3

##### Sneak

Requires a successful Sneak [Skill][] roll. If you're in plain sight of an
opponent, you can't Hide or Sneak. You have to [Hide](#hide) first before you
can sneak.

Effect
:   You're Sneaking. Other creatures are unaware of your presence.
:   An opponent can use the Search / Track [Skill][]. If this roll is equal to
or higher than the Sneak roll, you are revealed.

##### Run

You can move up to twice your [Pace][].

[AP][]
:   2

</div>

#### Combat

<div class="qs-list-test full-width" markdown="1">

##### Attack

Attack with a *normal* weapon.

[AP][]
:   2, or as indicated by the weapon.

##### Execute

You can try to execute a target that's [Helpless](#helpless).

[AP][]
:   See [Attack](#attack)

Effect
:   You deal double damage. If the target survives the damage, it has to roll an
[Action][] die, that has to be equal to or higher than the wounds this Attack
would cause, or otherwise dies.

##### Overwatch

You delay your turn and can use your [AP][] for Attack actions in somebody
else's turn.

[AP][]
:   -

##### Take Aim

Line up your shot. Can be used up to 2 times.

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

##### Dying

*You're beelding out and need medical attention.*

Penalty
:   As long as you're dying you gain another Wound at the start of each turn
until healed or dead.

##### Exhausted

*You need to catch your breath first.*

Penalty
:   You only gain 2 [AP][] instead of 4 per round.

##### Helpless

A helpless character is either paralyzed, held, bound, sleeping, unconscious, or
otherwise completely at an opponent's mercy.

Penalty
:   You can't parry or dodge.
:   You can be a target of the [Execute](#execute) action.

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

##### Slowed

*Something hinders you from moving your normal pace.*

Penalty
:   Your Pace is halved.

##### Stunned

*Something keeps you from acting and reacting.*

Penalty
:   You can't act or react on the current turn and do not regain AP.

</div>

--8<-- "_links.md"
