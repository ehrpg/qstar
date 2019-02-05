# Character

*Every player character, non-player character (NPC) and creature such as
animals, monsters or even robots, etc. fall under this category and are created
using the following rules.*

## Race

The race changes some aspects, including inherent abilities, [Attributes][],
[Skills][], roleplaying circumstances and more.

See [Races][].

## Attributes

> Attributes are the cornerstone of your character. They define how well your
> character performs in related [Skills][], and what [Perks][] are available to
> him.

An [Attribute][] has either a [d4][], [d6][], [d8][], [d10][], or [d12][]
assigned to it. The average for a human is a [d6][].

Every [Attribute][] has an **initial value** of a [d4][]. An [Attribute][]
cannot drop below a [d4][] or be raised above a [d12][].

#### Body

[Body][] is used for [Pace][], [Natural Healing](/crisis/#natural-healing) and
resisting bodily effects such as [Hazards][].

Its associated [Skills][] are [Action][] Skills.

#### Mind

[Mind][] is used for [Turn Order](/crisis/#turn-order),
[Perception](/character#perception-per), and resisting mental effects such as
psionic attacks.

Its associated [Skills][] are [Knowledge][] Skills.

#### Soul

[Soul][] is used to resist mental effects, such as drugs, alcohol, stuns, and
horrors.

Its associated [Skills][] are [Social][] Skills.

### Improving an Attribute

Raising an [Attribute][] by one step, e.g. from a [d4][] to a [d6][], costs 1
Attribute Point. You cannot raise the [Attribute][] above a [d12][], nor
decrease a [Attribute][].

## Traits, Perks & Flaws

Traits allow your character to be more unique, in giving them advantages and
disadvantages.

See [Traits][], [Perks][] and [Flaws][].

## Skills

See [Skills][] for a list of available skills and more information.

!!! tip "[GM Tip] Special Skills"
    In some settings you might want to add special [Skills][], for example
    **Occultism** ([Knowledge][] Skill) in a Lovecraftian horror story. Such
    [Skills][] shouldn't be improvable with Skill Points, but rather by
    exploring and unveiling secrets.

## Stats

### Health (HP)

> Health abstracts how much wounds a character can take before being
> incapacitated or dead.

Every character starts with 4 hit points in each [Attribute][]. For every step
of the [Attribute][] above a [d4][] you gain 1 additional hit point.

!!! summary "Health"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">4</span> +
        <span data-bracket-top="per step above a d4">1</span> +
        <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

### Pace (PACE)

> The Pace gives you an estimate how quickly you can go from A to B.

The Pace is used to determine how far the creature gets by using the Move
Action.

The Pace can be lowered by Conditions and Overburdening due to too much
[Bulk][]. If your [Pace][] drops to `0`, your character is immobilized and can't
move anymore.

!!! summary "Pace"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Body Attribute">[Body][] / 2</span> +
        <span data-bracket-top="Race / Talents / etc">Circumstance</span>
    </div>

!!! example "Pace"
    A character with a [d8][] in [Body][] has a [Pace][] of 4.

### Parry

Parry is used to defend against incoming melee attacks. Per additional enemy
within melee range you suffer a `-1` penalty.

If you don't have a melee weapon equipped, you suffer a `-2` penalty.

!!! summary "Parry"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Melee Skill">[Melee][]</span> -
        <span data-bracket-top="max 4">`1` per additional enemy</span> ±
        <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

### Perception (PER)

> Perception measures your character's ability to detect hidden stuff without
> looking for it actively.

Every [Stealth][] roll is opposed by [Perception][]. Per ally near you, that's
able to detect, you receive a `+1` bonus to your [Perception][].

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Mind Attribute">[Mind][] / 2</span> +
        <span data-bracket-top="max 4">`1` per ally</span> ±
        <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

## Level (LVL)

The Level of a character abstracts his experience, resourcefulness, and skill
set.

### Experience (XP)

> Experience Points (XP) are gained throughout a character's adventuring career.

[XP][] are gained when resolving a Crisis, due to noteable achievements, or by
story completions.

Every character starts at Level 1. For a Level-Up you need XP. The higher the
Level, the higher the XP requirement.

!!! summary "[XP][] and Level Ups"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="XP">100</span> *
        <span data-bracket-top="Current Level">LVL</span> =
        <span>Level Up</span>
    </div>

!!! example "[XP][] and Level Ups"
    The XP requirement for Level 2 is 100 XP. The XP requirement for Level 3 is
    200. So for Level 3 you require 300 XP in total.

### Acquisitions

A character's Level improves the maximum values of his [Acquisitions][]. This
does not necessarily make the character stronger, but makes the character more
resourceful and adaptable.

### Attribute Points

Every 3 levels (Level 3, 6, 9, 12, and so on), a character gains an Attribute
Point that can be assigned to [Body][], [Mind][], or [Soul][].

### Skill Points

Every level, a character receives 3 Skill Points.

## Acquisitions

> [Acquisitions][] abstract the resources available to a character.

[Acquisitions][] are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances, [Talents][], and
permanently due to the character's Level.

The current value for [Acquisitions][] can **never** exceed the maximum value.
All exceeding points are usually lost.

<div class="content" markdown="1"><table><tbody>
<tr>
    <td><i class="game-icon-wooden-crate"></i></td>
    <td>
    **Loot**<br>
    [Loot][] abstracts the items and clutter looted, which can be sold for a
    profit.
    </td>
</tr>
<tr>
    <td><i class="game-icon-stopwatch"></i></td>
    <td>
    **Spare Time**<br>
    [Spare Time][] is used for Spare Time Rolls. Each Spare Time Roll requires
    one Spare Time Point.
    </td>
</tr>
<tr>
    <td><i class="game-icon-shaking-hands"></i></td>
    <td>
    **Influence**<br>
    [Influence][] is used to acquire and maintain vessels. [Influence][] can
    also be used for social encounters. You can spend [Influence][] on favors or
    on meetings with important people.
    </td>
</tr>
<tr>
    <td><i class="game-icon-gear-hammer"></i></td>
    <td>
    **Resources**<br>
    [Resources][] are used to acquire and maintain equipment.
    </td>
</tr>
<tr>
    <td><i class="game-icon-erlenmeyer"></i></td>
    <td>
    **Technology**<br>
    [Technology][] is used to unlock equipment for personal use and vessels. It
    can also be used to develop vaccines, gun-powder weapons etc.
    </td>
</tr>
</tbody></table></div>

### Loot (LOOT)

> [Loot][] abstracts the items and clutter looted, that can be sold for profit.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by looting enemies, bases, etc., trading or via quest rewards.

**Used**{.hf} to sell for a profit.

</div>

[Loot][] is usually stored on a vessel or a player base. 1 unit of [Loot][]
takes up 4 [Bulk][].

### Spare Time (ST)

> [Spare Time][] represents the time a character can invest in
> activities outside of active play, e.g. in between sessions.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} over the course of time. A character gains more [ST][] in
between adventures and longer periods of downtime during adventures. A character
gains at least 1 [ST][] each session automatically.

**Used**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

</div>

Depending on the task, a [ST][] roll is made with the associated [Skill][]. As
with [Skills][], you can add applicable modifiers to the roll, e.g. assets or
circumstance modifiers.

The [ST][] influences the difficulty of the [Skill][] check, and provides a
bonus or penalty.

An [ST][] rolls is specified by the following scheme: `XtY (Skill)`, e.g. `2t4`
or `t6`. *X* represents the number of successful rolls necessary. The *X* also
represents the [ST][] cost. *Y* represents the [Difficulty Level][] for each
roll. *Skill* indicates the [Skill][] that has to be used for the [ST][] roll.

If a [ST][] roll fails, the [ST][] point is lost. If multiple [ST][] rolls are
necessary for a certain task and one of the check fails, there are multiple
outcomes:

* you can continue it at a later time or spend more [ST][] points immediatly,
* the [ST][] task fails, or
* the [ST][] task does not have the intended outcome.

!!! summary "Maximum [Spare Time][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span>
    </div>

!!! example "Spare Time rolls"
    Finding a very rare item on the black market might be represented as a 2t4
    [Spare Time][] roll.

    A character attempts the roll. He needs to spend 2 [Spare Time][] points,
    and roll the *Commerce* [Skill][] twice. The roll's difficulty is a **4**;
    Each roll has to be equal to or higher than this difficulty.

### Influence (INF)

> [Influence][] represents connections, owed favours by others, fame and infamy.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. [INF][] is lost by harming and disappointing others (Infamy
might also gain you [INF][] based on your reputation).

**Used**{.hf} for accessing and buying items, unlocking [Perks][], vessels,
meetings with high ranking characters, etc.

</div>

More [INF][] unlocks better equipment, perks and better vessels.

!!! summary "Maximum [Influence][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

### Resources (RES)

> [Resources][] (RES) represent materials used for creating, repairing,
> upgrading and acquiring equipment.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by looting, or completing missions, adventures and quests.

**Used**{.hf} to create, repair, upgrade and acquire equipment and vessels.

</div>

[RES][] can also be used to repair vessels. Depending on the damage that's to be
repaired, the character, or group, has to accumalate enough [RES][] to repair
the vessel. The [RES][] aren't lost when repairing.

If [RES][] are spent on equipment, your maximum [RES][] are *temporarily
lowered* by that amount. This abstracts the upkeep and maintenance of a powerful
item.

!!! summary "Maximum [Resources][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

### Technology (TECH)

> [Technology][] represents the character's technological knowledge, which on
> the other hand allows to unlock new [Equipment](/equipment).

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by aiding science missions, acquiring blueprints, spending spare
time on researching certain scientific fields, etc.

**Used**{.hf} for unlocking experimental equipment and vessels. Once unlocked,
the experimental equipment or vessel can be acquired.

</div>

Certain upgrades require [TECH][] in order to be unlocked. Upgrades have to be
unlocked only once, and *can* be shared and accumalated between characters.
Using [TECH][] *permanently lowers* this value.

!!! summary "Maximum [Technology][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

## Living standard

*A living standard abstracts and simplifies the micro-management for
standard-type campaigns.*

Every character has a normal living standard by default. This living standard
includes normal accomadations, *free* food and drinks in populated areas, moving
in local traffic and areas, etc. This means you don't have to pay for normal
lodging, etc.

!!! tip "[GM Tip] - Living standards and survival campaigns"
    If surviving becomes the focus of a session, you can always overrules this
    and require your players to manage food, drinks and other resources they
    might need to survive, e.g. wood in a cold setting.

## Languages

Every character has one native language, that's at step **normal**.

Improving a language also counts towards the skill bonus for the [Knowledge][]
category.

Learning a Language can be done in three steps. Each step requires you to make a
[Spare Time][] roll. Learning the basics of a language requires you to have
access to people speaking the language, books and texts written in the language,
or other means to learn the language.

<div class="qs-list-test full-width" markdown="1">

##### Basic

You are able to communicate on a basic level. Others might not always understand
you, but in general they know what you're trying to tell them. Additionally you
can't read or write in this language.

Cost
:   t5 (Linguistics)

##### Normal

You have a normal knowledge about the language. You can decipher most texts, and
know a good fraction of the language's vocabulary.

Cost
:   t6 (Linguistics)

##### Master

You are able to have the most sophisticated conversations with others, and
decipher every text, even older dialects that might not be around anymore.

Cost
:   2t6 (Linguistics)

</div>

### Learning languages at character creation

If a character chooses to upgrade the [Linguistics][] Skill, he also improves
one of his languages to the next step, or learns a new on at *Basic* level.
Upgrading to *Master* level requires two [Linguistics][] upgrades however.

--8<-- "_links.md"
