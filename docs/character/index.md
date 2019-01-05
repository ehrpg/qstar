# Character

*Every player character, non-player character (NPC) and creature such as
animals, monsters or even robots, etc. fall under this category and are created
using the following rules.*

## Race

The race changes some aspects, including inherent abilities, available Character
Points, roleplaying circumstances and more.

See [Races][].

## Skills

A character starts with 16 Character Points that can be distributed in the
three [Skill] categories: [Action][], [Knowledge][] and [Social][].

See [Skills][] for a list of available skills and more information.

## Traits

Traits allow your character to be more unique, in giving them advantages and
disadvantages.

See [Talents](/character/talents/).

## Stats

### Pace

> The Pace gives you an estimate how quickly you can go from A to B.

The Pace is used to determine how far the creature gets by using the Move
Action.

The Pace can be lowered by Conditions and Overburdening due to too much
[Bulk][]. In any case, the Pace can't drop below 2, unless an effect
specifically states it.

!!! summary "Pace"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Action Skill category">[Action][] die / 2</span>
    </div>

### Perception

> Perception measures your character's ability to hear or see hidden stuff
> without looking for it actively.

Every Sneak and Hide [Skill][] roll is opposed by the enemies [Perception][].
Per ally near you, you receive a +1 bonus to your [Perception][].

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Knowledge Skill category">[Knowledge][] die / 2</span> +
        <span data-bracket-bottom="max 4">1 per Ally</span>
    </div>

## Health (HP)

Health abstracts how much wounds a character can take before being incapacitated
or dying.

!!! summary "HP"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> ±
        <span data-bracket-top="Race / Talents / etc">Circumstance</span>
    </div>

## Experience (XP)

> Experience Points (XP) are gained throughout a character's adventuring career.

[XP][] are gained when resolving a Crisis, due to noteable achievements, or by
story completions.

Every character starts at Level 1. For a Level-Up you need XP. The higher the
Level, the higher the XP requirement.

!!! summary "[XP][] and Level Ups"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="XP">1000</span> *
        <span data-bracket-top="Current Level">LVL</span> =
        <span>Level Up</span>
    </div>

!!! example "[XP][] and Level Ups"
    The XP requirement for Level 2 is 1.000 XP. The XP requirement for Level 3
    is 2.000. So for Level 3 you require 3.000 XP in total.

### Level (LVL)

The Level of a character abstracts his experience, resourcefulness, and skill
set.

#### Acquisitions

A character's Level improves the maximum values of his [Acquisitions][]. This
does not necessarily make the character stronger, but makes the character more
resourceful and adaptable.

#### Character Points

Every level, a character receives 2 Character Points.

#### Talents

Every 4 levels (Level 4, 8, 12, 16, and so on), a character can choose another
[Talent][].

## Acquisitions

> [Acquisitions][] abstract the resources available to a character.

[Acquisitions][] are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances, [Talents][], and
permanently due to [XP][].

The current value for [Acquisitions][] can **never** exceed the maximum value.
All exceeding points are usually lost.

### Overview

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

> [Loot](#loot) abstracts the items and clutter looted, that can be sold for
> profit.

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

**Gained**{.hf} over the course of time. A character gains more
[Spare Time][] in between adventures and longer periods of downtime
during adventures. A character gains at least 1 [Spare Time][] each
session automatically.

**Used**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

</div>

Depending on the task, a [Spare Time][] roll is made with the associated
[Skill][] die. As with [Skills][], you can add applicable modifiers to the roll,
e.g. assets or circumstance modifiers.

The difficulty of a [Spare Time][] roll is also **4**, but usually heavily
modified by outside factors.

A Spare Time Roll is specified by the following scheme: `Xt±Y`, e.g. 2t+1 or
3t-2. *X* represents the number of successful rolls necessary. The *X* also
represents the [Spare Time][] cost. *Y* represents the difficulty modifier for
each roll. The *Y* is omitted if there is no modifier.

If a [Spare Time][] roll fails, the [Spare Time][] point is lost. If multiple
[Spare Time][] rolls are necessary for a certain task and one of the check
fails, there are multiple outcomes:

* you can continue it at a later time or spend more [Spare Time][] points
  immediatly,
* the [Spare Time][] task fails, or
* the [Spare Time][] task does not have the intended outcome.

!!! summary "Maximum [Spare Time][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span>
    </div>

!!! example "Spare Time rolls"
    Finding a very rare item on the black market might be represented as a 2t+4
    [Spare Time][] roll.

    A character attempts the roll. He needs to spend 2 [Spare Time][] points,
    and roll the *Bartering* [Skill][] twice. The difficulty for each roll is
    **4**; modified by the [Spare Time][] task, the difficulty for each roll
    results in **8**.

### Influence (INF)

> [Influence][] represents connections, owed favours by others, fame and infamy.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. [Influence][] is lost by harming and disappointing others
(Infamy might also gain you [Influence][] based on your reputation).

**Used**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

</div>

More [Influence][] unlocks better equipment and better vessels.

!!! summary "Maximum [Influence][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

### Resources (RES)

> [Resources][] represent materials used for creating, repairing, upgrading and
> acquiring equipment.

<div class="qs-list-test full-width p" markdown="1">

**Gained**{.hf} by looting, or completing missions, adventures and quests.

**Used**{.hf} to create, repair, upgrade and acquire equipment and vessels.

</div>

[Resources][] can be used to repair vessels, in which case the [Resources][] are
**spent** on the repair, and *permanently lowered*.

If [Resources][] are spent on equipment, your maximum [Resources][] are
*temporarily lowered* by that amount. This abstracts the upkeep and maintenance
of a powerful item.

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

Certain upgrades require [Technology][] in order to be unlocked. Upgrades have
to be unlocked only once, and *can* be shared between characters. Unlocking
*permanently lowers* your [Technology][] value.

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
:   1t+2 (Linguistics)

##### Normal

You have a normal knowledge about the language. You can decipher most texts, and
know a good fraction of the language's vocabulary.

Cost
:   1t+4 (Linguistics)

##### Master

You are able to have the most sophisticated conversations with others, and
decipher every text, even older dialects that might not be around anymore.

Cost
:   1t+6 (Linguistics)

</div>

### Learning languages at character creation

If a character is created, the player can spend Character Points to learn new
languages, or to improve his native language. Each step costs 1 Character Point.

Spending Character Points for languages also counts towards the skill bonus for
the [Knowledge][] category.

--8<-- "_links.md"
