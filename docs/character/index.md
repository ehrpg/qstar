# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

## Race

See [Races](/character/races).

## Skills

See [Skills](/character/skills/).

## Talents

See [Talents](/character/talents/).

## Attributes

> Attributes define the character's overall physique and mental capabilities.
> As such they count as the cornerstone for a character's Skill.

An average person has each Attribute at 2 or 3 points. A rating of 1 is an
impairment, while a 6 is almost superhuman.

### Attribute Damage

Attribute Damage decreases the character's Attribute, e.g. from a 5 to a 4. This
Attribute Damage can be **temporary** or **permanently**.

Any damage to Attributes can reduce other stats like Bulk, Overburdened, Pace,
etc.

If an Attribute **permanently** drops to 0, the character dies.

<div class="left" markdown="1">

### Might (MI)

> [Might](#might-mi) represents the character's physical strength and
> resilience.

A character's carrying capacity, damage of melee weapons and tougness are
derived from [Might](#might-mi).

</div>
<div class="right" markdown="1">

### Speed (SP)

> [Speed](#speed-sp) measures the character's reflexes and eye-hand
> coordination.

[Speed](#speed-sp) adds a bonus to ranged weapon attacks, is used for stealth
and lets you act in a [Crisis](/#crisis) sooner.

</div>
<div class="left" markdown="1">

### Intelligence (IN)

> [Intelligence](#intelligence-in) describes how well your character learns new
things, and how well he remembers already existing things.

[Intelligence](#intelligence-in) improves a character's Attribute to assess
situations and skills related to knowing things.

</div>
<div class="right" markdown="1">

### Charisma (CH)

> [Charisma](#charisma-ch) represents the character's physical attractiveness,
force of personality and his ability to lead.

[Charisma](#charisma-ch) is mostly used in social interactions between
characters and NPCs.

</div>
<div class="clearfix"></div>

## Stats

<div class="left" markdown="1">

### Pace

> The Pace gives you an estimate how long it takes to go from A to B.

When you take the Move Action, you can use up to your Pace in tiles.

!!! summary "Pace"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Speed Attribute">Speed</span>
    </div>

</div>
<div class="right" markdown="1">

### Parry

> The Parry value is used for defending against a melee Attack.

The Parry value is 8 if the Melee Skill isn't trained.

!!! summary "Parry Value"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> +
        <span data-bracket-top="Melee Skill Bonus">Melee Skill</span>
    </div>

</div>
<div class="clearfix"></div>

## Health (HP)

> [Health](#health) represents the character’s overall condition.

If Health drops to 0 or below, the creature has to make a
[Might](/character#might-mi) roll with a DC of 16. On a failure, the creature
becomes incapacitated, but not necessarily unconcious, until healed or dead.

An incapacitated creature loses 1 HP each turn until healed.

A character that drops to or below his HP in negative dies.

!!! summary "[Health](#health)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">8</span> +
        <span data-bracket-top="Might Attribute">Might Attribute * 2</span>
    </div>

## Experience (XP)

> Experience Points (XP) are gained throughout a character's adventuring career.

XP are gained due to noteable achievements or story completions. XP usually are
only given out one at a time. The GM can decide to give out more for completing
a longer adventure.

Three XP increase your level by one.

!!! summary "Experience and Level Ups"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="XP">3</span> =
        <span>Level Up</span>
    </div>

Every three XP increase a character's level by one.

### Level (LVL)

The Level of a character abstracts its experience, resourcefulness, and
skill set.

#### Acquisitions

A character's level improves the maximum values of his acquisitions. This does
not necessarily make the character stronger, but makes the character more
resourceful and adaptable.

#### Character Points

* Every level, a character gains 1 Skill Point.

* Every 3 levels, a character gains 1 Attribute Point.

* Every 4 levels, a character gains a Talent.

## Acquisitions

> Acquisitions abstract the resources available to a character.

Acquisitions are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances, [Perks](/perks), and
permanently due to [Experience](#experience-xp).

The current value for Acquisitions can **never** exceed the maximum value. All
exceeding points are usually lost.

### Overview

<div class="content" markdown="1"><table><tbody>
<tr>
    <td><i class="qstar-wooden-crate"></i></td>
    <td>
    **Loot**<br>
    Loot abstracts the items and clutter looted. 1 unit of Loot takes up 4 Bulk.
    Loot is usually stored on a vessel or a player base.
    </td>
</tr>
<tr>
    <td><i class="qstar-stopwatch"></i></td>
    <td>
    **Spare Time**<br>
    Spare Time is used for Spare Time Rolls. Each Spare Time Roll requires one
    Spare Time Point.
    </td>
</tr>
<tr>
    <td><i class="qstar-backup"></i></td>
    <td>
    **Influence**<br>
    Influence is used to acquire and maintain Vessels.
    </td>
</tr>
<tr>
    <td><i class="qstar-gear-hammer"></i></td>
    <td>
    **Resources**<br>
    Resources are used to acquire and maintain Equipment.
    </td>
</tr>
<tr>
    <td><i class="qstar-erlenmeyer"></i></td>
    <td>
    **Technology**<br>
    Technology is used to unlock Equipment for personal use and vessels.
    </td>
</tr>
</tbody></table></div>

### Loot (LOOT)

> [Loot](#loot) abstracts the items and clutter looted.

1 unit of Loot takes up 4 Bulk. Loot is usually stored on a vessel or a player
base.

<div class="left" markdown="1">

### Downtime (DT)

> [Downtime](#downtime-dt) represents the time a character can invest in
> [Downtime](#downtime-dt) activities.

**GAINED**{.hf} over the course of time. A character gains more
[Downtime](#downtime-dt) in between adventures and longer periods of downtime
during adventures. A character gains at least 1 [Downtime](#downtime-dt) each
session automatically.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

!!! summary "Maximum [Downtime](#downtime-dt)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Base">10</span>
    </div>

</div>
<div class="right" markdown="1">

### Influence (INF)

> [Influence](#influence-inf) represents connections, owed favours by others,
> fame and infamy.

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. [Influence](#influence-inf) is lost by harming and
disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

More [Influence](#influence-inf) unlocks better equipment and better vessels.
Traders may also give you better prices.

!!! summary "Maximum [Influence](#influence-inf)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Level">LVL</span> +
      <span data-bracket-top="Base">2</span> ±
    </div>

</div>
<div class="left" markdown="1">

### Resources (RES)

> [Resources](#resources-res) represent materials used for creating, repairing,
> upgrading and acquiring equipment.

**GAINED**{.hf} by looting, or completing missions, adventures and quests.

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

[Resources](#resources-res) can be used to repair vessels, in which case the
[Resources](#resources-res) are spent on the repair.

If [Resources](#resources-res) are spent on equipment, your maximum
[Resources](#resources-res) are *temporarily lowered* by that amount. This
abstracts the upkeep of a powerful item.

Powerful equipment requiring [Resources](#resources-res) usually adds
[stunts](/stunts) or other benefits.

!!! summary "Maximum [Resources](#resources-res)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Level">LVL</span> +
      <span data-bracket-top="Base">2</span> ±
    </div>

</div>
<div class="right" markdown="1">

### Technology (TECH)

> [Technology](#technology-tech) represents the character's technological
> knowledge, which on the other hand allows to unlock new
> [Equipment](/equipment).

**GAINED**{.hf} by aiding science missions, acquiring blueprints, spending time
on researching certain scientific fields, etc.

**USED**{.hf} for unlocking experimental equipment and vessels. Once unlocked,
the experimental equipment or vessel can be acquired.

Certain ugprades require [Technology](#technology-tech) in order to be unlocked.
Upgrades have to be unlocked only once, and *can* be shared between characters.
Unlocking upgrades enables the acquisition of better equipment and vessels.

!!! summary "Maximum [Technology](#technology-tech)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Level">LVL</span> +
      <span data-bracket-top="Base">2</span> ±
    </div>

</div>
<div class="clearfix"></div>

## Living standard

Every character has a normal living standard by default.

This living standard includes normal accomadations, *free* food and drinks in
populated areas, moving in local traffic and areas, etc. This means you don't
have to pay for normal lodging, etc.

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
:   8t

##### Normal

You have a normal knowledge about the language. You can decipher most texts, and
know a good fraction of the language's vocabulary.

Cost
:   12t

##### Master

You are able to have the most sophisticated conversations with others, and the
decipher every text.

Cost
:   16t

</div>
