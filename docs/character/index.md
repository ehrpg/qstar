# Character

*Every player character, non-player character (NPC) and creature such as
animals, monsters or even robots, etc. fall under this category and are created
using the following rules.*

## Race

See [Races][].

## Skills

See [Skills][].

## Talents

See [Talents](/character/talents/).

## Attributes

> Attributes define the character's overall physique and mental capabilities.
> As such they count as the cornerstone for a character's [Skill][].

An average person has each Attribute at 2 or 3 points. A rating of 1 is an
impairment, while a 6 is almost superhuman.

### Attribute Damage

[Attribute Damage][] decreases the character's Attribute, e.g.
from a 5 to a 4. This [Attribute Damage][] can be **temporary**
or **permanently**.

Any damage to Attributes can reduce other stats like Bulk, Overburdened, Pace,
etc.

If an Attribute **permanently** drops to 0, the character dies. If it drops
**termporarily**, the character is incapacitated until the [Attribute
Damage][] is restored.

<div class="left" markdown="1">

### Might (MI)

> [Might][] represents the character's physical strength and
> resilience.

A character's carrying capacity, damage of melee weapons and tougness are
derived from [Might][].

</div>
<div class="right" markdown="1">

### Speed (SP)

> [Speed][] measures the character's reflexes and eye-hand
> coordination.

[Speed][] adds a bonus to ranged weapon attacks, is used for stealth
and lets you act in a [Crisis](/#crisis) sooner.

</div>
<div class="left" markdown="1">

### Intelligence (IN)

> [Intelligence][] describes how well your character learns new
things, and how well he remembers already existing things.

[Intelligence][] improves a character's ability to assess situations and
[Skills][] related to knowing things.

</div>
<div class="right" markdown="1">

### Charisma (CH)

> [Charisma][] represents the character's physical attractiveness,
force of personality and his ability to lead.

[Charisma][] is mostly used in social interactions between
characters and NPCs.

</div>
<div class="clearfix"></div>

## Stats

### Defence

> [Defence][] abstracts your ability to dodge and sustain attacks.

Whenever you are attacked, the attack has to be equal to or higher than your
[Defence][] in order to deal damage. A failed attack doesn't necessarily mean
that it didn't hit, but it wasn't strong enough to deal damage.

!!! summary "Defence"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> +
        <span data-bracket-top="Attribute">Speed</span> +
        <span data-bracket-bottom="Circumstance">Cover</span>
    </div>

### Perception

> [Perception][] abstracts your ability to spot and make out hidden things and
> creatures.

Whenever you or an NPC is making a Stealth check, the DC of the roll is equal to
the opposing force's highest [Perception][] value. You only roll once for the enemy
with the highest [Perception][], not for each target.

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> +
        <span data-bracket-top="Attribute">Intelligence</span> +
        <span>1 per Ally (max 10)</span>
    </div>

<div class="left" markdown="1">


### Pace

> The [Pace][] gives you an estimate how long it takes to go from A to B.

When you take the Move Action, you can use up to your [Pace][] in tiles.

!!! summary "Pace"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Speed Attribute">Speed</span>
    </div>

</div>
<div class="clearfix"></div>

### Health (HP)

> [Health][] represents the character’s overall condition.

If [Health][] drops to 0 or below, the creature has to make a [Might][] roll
with a DC of 16. On a failure, the creature becomes incapacitated, but not
necessarily unconcious, until healed or dead. On success, the creature can
continue fighting.

An incapacitated creature loses 1 HP each turn until healed.

A character that drops to or below his HP in negative dies.

!!! summary "Health"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">20</span> +
        <span data-bracket-top="Might Attribute">MI * 5</span>
    </div>

!!! tip "[GM Tip] - NPCs and Health"
    NPCs usually die outright when they reach 0 HP, if not purpously knocked
    unconcious by the players.

## Experience (XP)

> Experience Points (XP) are gained throughout a character's adventuring career.

[XP][] are gained due to noteable achievements or story completions. [XP][]
usually are only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

Every three [XP][] increase a character's level by one.

!!! summary "[XP][] and Level Ups"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="XP">3</span> =
        <span>Level Up</span>
    </div>

### Level (LVL)

The Level of a character abstracts its [XP][], resourcefulness, and
skill set.

#### Acquisitions

A character's level improves the maximum values of his [Acquisitions][]. This
does not necessarily make the character stronger, but makes the character more
resourceful and adaptable.

#### Character Points

* Every level, a character gains 1 Skill Point.

* Every 3 levels (Level 3, 6, 9, ...), a character gains 1 Attribute Point.

* Every 4 levels (Level 4, 8, 12, ...), a character gains a Talent.

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
    <td><i class="qstar-wooden-crate"></i></td>
    <td>
    **Loot**<br>
    [Loot][] abstracts the items and clutter looted, which can be sold for a
    profit.
    </td>
</tr>
<tr>
    <td><i class="qstar-stopwatch"></i></td>
    <td>
    **Spare Time**<br>
    [Spare Time][] is used for Spare Time Rolls. Each Spare Time Roll requires
    one Spare Time Point.
    </td>
</tr>
<tr>
    <td><i class="qstar-shaking-hands"></i></td>
    <td>
    **Influence**<br>
    [Influence][] is used to acquire and maintain vessels. [Influence][] can
    also be used for social encounters. You can spend [Influence][] on favors or
    on meetings with important people.
    </td>
</tr>
<tr>
    <td><i class="qstar-gear-hammer"></i></td>
    <td>
    **Resources**<br>
    [Resources][] are used to acquire and maintain equipment.
    </td>
</tr>
<tr>
    <td><i class="qstar-erlenmeyer"></i></td>
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

**GAINED**{.hf} by looting enemies, bases, etc., trading or via quest rewards.

**USED**{.hf} to sell for a profit.

[Loot][] is usually stored on a vessel or a player base. 1 unit of [Loot][]
takes up 4 [Bulk][].

<div class="left" markdown="1">

### Spare Time (ST)

> [Spare Time][] represents the time a character can invest in
> activities outside of active play, e.g. in between sessions.

**GAINED**{.hf} over the course of time. A character gains more
[Spare Time][] in between adventures and longer periods of downtime
during adventures. A character gains at least 1 [Spare Time][] each
session automatically.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

A Spare Time Roll is made by rolling 3d6. As with [Skills][], you can add
applicable modifiers to the roll, e.g. [Skills][], assets or circumstance
modifiers. If the result is equal or higher than the specified difficulty, the
roll is successful. A Spare Time Roll is specified by the following scheme: XtY,
e.g. 1t8. *X* represents the number of successful rolls necessary, *Y*
represents the difficulty for each roll.

!!! summary "Maximum [Spare Time][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span>
    </div>

</div>
<div class="right" markdown="1">

### Influence (INF)

> [Influence][] represents connections, owed favours by others, fame and infamy.

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. [Influence][] is lost by harming and disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

More [Influence][] unlocks better equipment and better vessels.

!!! summary "Maximum [Influence][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

</div>
<div class="left" markdown="1">

### Resources (RES)

> [Resources][] represent materials used for creating, repairing, upgrading and
> acquiring equipment.

**GAINED**{.hf} by looting, or completing missions, adventures and quests.

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

[Resources][] can be used to repair vessels, in which case the [Resources][] are
**spent** on the repair, and *permanently lowered*.

If [Resources][] are spent on equipment, your maximum [Resources][] are
*temporarily lowered* by that amount. This abstracts the upkeep of a powerful
item.

!!! summary "Maximum [Resources][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

### Technology (TECH)

> [Technology][] represents the character's technological knowledge, which on
> the other hand allows to unlock new [Equipment](/equipment).

**GAINED**{.hf} by aiding science missions, acquiring blueprints, spending spare
time on researching certain scientific fields, etc.

**USED**{.hf} for unlocking experimental equipment and vessels. Once unlocked,
the experimental equipment or vessel can be acquired.

Certain ugprades require [Technology][] in order to be unlocked. Upgrades have
to be unlocked only once, and *can* be shared between characters. Unlocking
*permanently lowers* your [Technology][] value.

!!! summary "Maximum [Technology][]"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">2</span> +
      <span data-bracket-top="Level">LVL</span> ±
      <span data-bracket-bottom="Race / Talents / etc">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

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

Every character knows one native language, that's at step **normal**.

Learning a Language can be done in three steps. Each step requires you to make a
Spare Time Roll. Learning the basics of a language requires you to have access
to people speaking the language, books and texts written in the language, or
other means to learn the language.

<div class="qs-list-test full-width" markdown="1">

##### Basic

You are able to communicate on a basic level. Others might not always understand
you, but in general they know what you're trying to tell them.

Cost
:   1t8

##### Normal

You have a normal knowledge about the language. You can decipher most texts, and
know a good fraction of the language's vocabulary.

Cost
:   1t12

##### Master

You are able to have the most sophisticated conversations with others, and
decipher every text, even older dialects that might not be around anymore.

Cost
:   1t16

</div>

--8<-- "_links.md"
