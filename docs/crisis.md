# Crisis

*A crisis requires a character to make some sort of a [Skill][] roll. In a
crisis time slows down and actions become more atomic.*

## Difficulty

Every task has a difficulty. Sometimes, under certain circumstances, a task
might be easier or harder. Some tasks require equipment or knowledge in order to
not suffer a penalty. Other tasks are very easy, and the roll gains a bonus, or
you don't even have to roll at all.

Not all tasks **require** a check. For example, finding some information inside
books can be done without a skill check given enough time. A skill check could
be used to reduce the time spent searching, or it could unearth additional
information that might be helpful.

### Difficulty Modifier

Certain circumstances modify the task's difficulty positively or negatively.
Multiple modifiers stack.

| Difficulty Level | Name        | Description                                                        |
|:----------------:|-------------|--------------------------------------------------------------------|
|       `0`        | Trivial     | Everyday tasks.                                                    |
|       `1`        | Routine     | Tasks you do every few days, which can be done by almost everyone. |
|       `2`        | Simple      | Most people can do this without much effort.                       |
|       `3`        | Easy        | Even untrained people still can do these tasks sometimes.          |
|       `4`        | Normal      | You need at least some training to complete these kind of tasks.   |
|       `5`        | Demanding   | You either need gear or good training for these tasks.             |
|       `6`        | Challenging | You need a lot of training and good gear.                          |
|       `8`        | Hard        | You need to be a specialist for these tasks.                       |
|       `12`       | Very Hard   | You require help from others to achieve this.                      |
|       `15`       | Impossible  | A once in a lifetime achievement.                                  |

!!! tip "Difficulty"
    This is only a guideline about tasks and the modifiers they impose.

| Modifier | Name                     | Description                               |
|---------:|--------------------------|-------------------------------------------|
|     `+1` | Asset                    | Having the correct tools at hand.         |
|     `-1` | Unfavorable Circumstance | E.g. climbing a cliff while it's raining. |

!!! tip "Stacking Modifiers"
    Even though modifiers stack, multiple assets of the same type do not stack,
    e.g. two climber's gears.

## Turns

Each character and creature in a crisis have one turn per round. The order in
which they can act is determined by their turn order.

Once every character has acted, a new **round** begins.

### Turn Order

Every character involved in a crisis has to roll for initiative. The character
with the highest roll acts first.

If two or more player characters have rolled the same result the PCs can agree
upon who acts first. If they cannot find an agreement, roll again. The
characters retain their original roll, but the conflict is resolved. If a player
character and an NPC tie, the player character acts first.

!!! summary "Turn Order"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Body Attribute">[Body][]</span> ±
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
start of each turn, including the beginning of a Crisis, the character recovers
4 [AP][].

Any [AP][] over 6 are lost, while Actions that require more than the remaining
[AP][] are disabled until enough [AP][] are accumulated.

An action always costs at least 1 [AP][], unless an action specifically says
otherwise.

!!! info "Actions in parallel"
    Not all Actions require your utmost attention. E.g. while reloading you can
    still give short commands to e.g. other party members. This is up to the GM
    however.

## Attacks

An Attack roll is a [Skill][] roll, using the weapon's associated [Skill][] and
stats.

!!! summary "Making an Attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Associated Skill">[Skill][]</span> ±
      <span data-bracket-top="Weapon modifier">HIT</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

### RoF

Using a weapon with a higher **RoF** allows you to make multiple Attacks against
the same or even different targets. You have to assign all Attacks to your
targets first before you execute them. This can result in attacking an already
incapacitated target.

<div class="left" markdown="1">

### Ranged Attacks

A ranged Attack roll is usually made with the Light Weapon [Skill][], and
suffers penalties from **RNG**. The [Difficulty Level][] to hit is a `4`.

</div>
<div class="right" markdown="1">

### Melee Attacks

A Melee Attack roll is made with the Melee [Skill][]. The [Difficulty Level][]
to hit is the target's [Parry][] value.

</div>

### Area of Effect

Thrown weapons, e.g. grenades, require you to make an Athletics check. The roll
otherwise is a normal Ranged Attack with a [Difficulty Level][] of `4`.

An Area of Effect weapon does not receive extra damage from
[Extras](/character/skill#extras).

If you miss an Area of Effect Attack, roll a [d8][]. The result of the [d8][]
determines in which direction you missed. A 1 is being straight back at you, 5
away from you, and 2 through 8 counting clockwise around the target. You miss by
a number of squares equal to the range increment of the throw.

!!! tip "Missing an AoE Attack and Hex Grids"
    With hexagonal grids you only have 6 adjacent fields. Use a [d6][] instead,
    and adjust the numbers accordingly.

#### Dodging

Dodging is a Contest between two opponents, whereas the dodger rolls an
[Athletics][] check and the attacker his respective weapon's [Skill][].

Only Area of Effect Attacks can be dodged. Once per round you can try to dodge
an incoming Area of Effect Attack. You have to choose to dodge before the
attacker rolls his attack. Dodging is an Athletics roll.

If you win the contest you can move your character by 1 tile into any direction
away from the AoE effect before you receive any damage or effect from it.

### Cover

> Cover provides penalties to the attacker for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

Cover provides a penalty for opponents. All rolls and [Skill][] checks that rely
on vision, such as attacking, suffer a penalty.

|   Modifier | Condition   |
|-----------:|-------------|
|       `-2` | Cover       |
|       `-4` | Heavy Cover |
| unhittable | Total Cover |

<div class="left" markdown="1">

!!! tip "Positions and Cover"
    Being prone and facing an enemy straight on counts as being in heavy cover
    (only head and shoulders visible).

</div>
<div class="right" markdown="1">

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets, or other
    projectiles, decrease your Cover by one step. E.g. total cover becomes heavy
    cover; while in light cover you count as not being behind cover at all.

</div>

## Damage

If an Attack is successful, damage can be dealt to the target.

You deal your used weapon's damage, but receive extra damage from the Attack
roll. The amount of [Extras](/character/skill#extras) on the attack roll is the
amount of extra damage you deal.

If your damage would be reduced to 0 or lower because of defenses, such as
damage reduction or dodging, you still deal 1 non-lethal damage to the target.
Status Effects are not applied in this case.

!!! summary "Dealing Damage"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Extras for the Attack Roll">Extras</span> +
      <span data-bracket-top="Weapon Damage">DMG</span> ±
      <span data-bracket-bottom="Environment / Traits / Race">Circumstance</span>
    </div>

!!! example "Attacking and Damaging"
    A character makes a Ranged Attack. His roll results in a 13. This nets him 2
    Extras. The used weapon's damage is 2; adding the 2 extras, he would deal 4
    points of damage.

### Damage Reduction

If a target wears Armor, all damage you deal is reduced by the target's DR.
Damage that's reduced by the Armor is dealt to the Armor's Durability instead.
If the Armor's Durability reaches 0, it does not provide DR anymore.

Some weapons and Actions circumvent the armor's damage reduction, e.g.
Armor-Piercing Ammunition.

!!! example "Damage Reduction"
    A target wears an armour with a physical DR of 3, and a durability of 10. He
    receives 5 physical damage. The armour blocks 3 of the 5 incoming damage.
    The durability of armour is reduced to 7, and the target only receives 2
    points of damage.

### Non-lethal damage

Non-lethal damage is separate pool. If the non-lethal damage is higher than the
target's current [Health][], the character becomes incapacitated.

## Wounds

Every point of damage you receive deals a wound. A wound can either be lethal or
non-lethal.

### Lethal

When a target would die from a lethal Attack, the attacker can decide whether or
not to apply non-lethal force, knocking the target unconcious instead of killing
it.

If a creature's Health drops to `0`, the creature is incapacitated and
[Dying](#dying). If the Health drops to `-10`, the creature immediately dies.

Attacks that deal more than `12` wounds in one hit also incapacitate the target.

## Healing

The Medicine Skill can be used to treat wounds suffered within the last hour.

Wounds that are older than one hour have to heal naturally.

#### Healing A Character

A healer can aid a character's natural healing progress. A wounded character
trying to heal his own wounds suffers a `-2` penalty for treating himself.

Without any healing aids, such as bandages etc., the healer suffers a `-2`
penalty to his roll. Having the right tools at hand via an Asset, the penalty is
reduced to 0, rather than a `+1` bonus. Multiple Assets can provide a bonus
instead.

If the Medicine check was successful, the patient recovers from `1` wound, and
an additional wound for each [Extra](/character/skill#extras).

#### Healing A Dying Character

If a healer was successful on his Medicine check for his patient, the patient is
not dying anymore, but stays incapacitated for the next 10 rounds.

#### Healing Non-Lethal Damage

Non-lethal damage can be healed like lethal damage, but it's twice as effective,
meaning a succesful Medicine check heals `2` non-lethal wounds, and each
[Extra](/character/skill#extras) also heals `2` non-lethal damage.

### Natural Healing

Every hour a non-lethal wound is healed automatically.

Every day a wounded or incapacitated character has to attempt a [Body][] roll to
heal `1` wound naturally. A critical failure on the [Body][] roll causes an
additional wound. On a failed check nothing happens.

The difficulty of Natural Healing is influenced by these conditions:

| Modifier | Condition                                                             |
|:--------:|-----------------------------------------------------------------------|
|   `-2`   | Rough traveling                                                       |
|   `-2`   | No medical attention                                                  |
|   `-2`   | Poor environmental conditions, such as intense cold, heat, or rain    |
|   `—`    | Medical attention from self                                           |
|   `+1`   | Medical attention from a doctor                                       |
|   `+2`   | Medical attention from a doctor in good condition, such as a hospital |

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

You kneel down on your knees or stand up.

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

##### Draw Weapon

Light weapons can be drawn for free. Heavy weapons take 2 [AP][] to draw.

[AP][]
:   1; *light* free; *heavy* 2

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

Line up your shot. Can only be used if you don't use any movement action.

[AP][]
:   2, or as indicated by the weapon.

Effect
:   Per Take Aim action you gain a `+1` bonus to ranged attacks.

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
:   All checks suffer a `-1` penalty. Checks that rely on speed and balance
suffer a `-2` penalty.

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
:   You count as being in **Light Cover** against ranged Attacks. You gain a
`+1` bonus on attacks using ranged weapons.

Penalty
:   Melee attacks against you gain a `+2` bonus.

##### Prone

*Being prone gives gives you even better control over recoil and weapon sway.*

Bonus
:   You count as being in **Heavy Cover** against ranged Attacks. You gain a
`+2` bonus on attacks using ranged weapons.

Penalty
:   Melee attacks against you gain a `+4` bonus.

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
