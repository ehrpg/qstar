# Crisis

*A crisis requires a character to make some sort of a [Skill][] roll. In a
crisis time slows down and actions become more atomic.*

## Difficulty

Every task usually has a difficulty of **4**. Sometimes, the GM may want to
emphasize however, that a Task is a lot harder or easier than usually and adjust
this value.

Not all tasks **require** a check. For example, finding some information inside
books can be done without a skill check given enough time. A skill check could
be used to reduce the time spent searching, or it could unearth additional
information that might be helpful.

| Difficulty Level | Name        | Description                                                          |
|:----------------:|-------------|----------------------------------------------------------------------|
|       `0`        | Trivial     | Everyday tasks.                                                      |
|       `1`        | Routine     | Tasks you do every few days, which can be done by almost everyone.   |
|       `2`        | Simple      | Most people can do this without much effort.                         |
|       `3`        | Easy        | Even untrained people still can do these tasks sometimes.            |
|     **`4`**      | **Normal**  | **You need at least some training to complete these kind of tasks.** |
|       `5`        | Demanding   | You either need gear or good training for these tasks.               |
|       `8`        | Challenging | You need a lot of training and good gear.                            |
|       `12`       | Hard        | You need to be a specialist for these tasks.                         |
|       `16`       | Very Hard   | You require help from others to achieve this.                        |
|       `20`       | Impossible  | A once in a lifetime achievement.                                    |

!!! tip "Difficulty"
    This is only a guideline about the difficulty level of certain tasks.

### Difficulty Modifier

Certain circumstances modify the task's difficulty positively or negatively.
Multiple modifiers stack.

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

> Using a weapon with a higher **RoF** allows you to make multiple Attacks
> against the same or even different targets.

An **RoF** higher than 1 allows you to make optional, consecutive Attack rolls
for the same or even different targets at the expense of 1 [AP][], and a
cumulative `-2` penalty on **HIT**, per extra Attack, unless otherwise noted by
the weapon. You have to assign all Attacks to your targets first before you roll
for them. Using a higher **RoF** also uses up more bullets (**CAP**).

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

Dodging is an [Athletics][] check done as a response to an AoE attack. Once
per round you can try to dodge an incoming Area of Effect Attack. You have to
choose to dodge before the attacker rolls his attack.

If you succeed on the [Athletics][] roll---the Difficulty is **4**--you can move
one tile into any direction away from the center of the AoE before you receive
any damage or effect from it.

Some AoE weapons and effects, and circumstances can make it easier or harder to
dodge an AoE attack.

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
    Extras. Whatever weapon the attacker uses, he gains 2 extra damage.

### Damage Reduction

If a target wears Armor, all damage you deal is reduced by the target's DR.
Damage that's reduced by the Armor is dealt to the Armor's Durability instead.
If the Armor's Durability reaches 0, it does not provide DR anymore.

Some weapons and Actions circumvent the Armor's damage reduction, e.g.
Armor-Piercing Ammunition.

!!! example "Damage Reduction"
    A target wears an armor with a physical DR of 3, and a durability of 10. He
    receives 5 physical damage. The armor blocks 3 of the 5 incoming damage.
    The durability of armor is reduced to 7, and the target only receives 2
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

If a creature's Health drops to `0`, the creature is incapacitated and dying. If
it drops to `-10`, the creature dies.

Attacks that deal more than `20` wounds in one hit incapacitate the target.

## Healing

The [Medicine][] Skill can be used to treat wounds. Healing is more effective if
you have a healing item.

#### Healing A Character

A healer can aid a character's natural healing progress. A wounded character
trying to heal his own wounds suffers a `-2` penalty for treating himself.

Without any healing aids, such as bandages etc., the healer suffers a `-2`
penalty to his roll. Having the right tools at hand via an Asset, the penalty is
reduced to 0, rather than a `+1` bonus. Multiple Assets can provide a bonus
instead.

If the [Medicine][] check was successful, the patient heals wounds equal to the
[Extras][] of the roll in addition to natural healing. If a healing item was
used, the character also restores an amount specified by the item.

Healing a character can only be done once a day. Multiple healers provide a `+1`
bonus, up to a `+4` bonus.

#### Healing A Dying Character

If a healer was successful on his [Medicine][] check for his patient, the
patient is not dying anymore, but stays incapacitated for the next 10 rounds.
This [Medicine][] check does not heal the character.

#### Healing Non-Lethal Damage

Non-lethal damage can be healed like lethal damage, but it's twice as effective.

### Natural Healing

Every hour a non-lethal wound is healed automatically.

Every day a wounded character can roll a [Body][] check and heal wounds equal to
[Extras][] of the roll, regardless of being healed or not. A critical failure on
the [Body][] check causes an additional wound.

The Natural Healing [Body][] roll is influenced by these conditions:

| Modifier | Condition                                                             |
|:--------:|-----------------------------------------------------------------------|
|   `-2`   | Rough traveling                                                       |
|   `-2`   | No medical attention                                                  |
|   `-2`   | Poor environmental conditions, such as intense cold, heat, or rain    |
|   `—`    | Medical attention from self                                           |
|   `+1`   | Medical attention from a doctor                                       |
|   `+2`   | Medical attention from a doctor in good condition, such as a hospital |

--8<-- "_links.md"
