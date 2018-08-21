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

> Attributes define the character's overall physique and mental capabilities. As
such they count as the cornerstone for a character's Skill.

Every character starts with each Attribute at a [d4](#d4), with a [d6](#d6) in
each Attribute being the average for an adult human. Upgrading an Attribute
allows the character to use a [d6](#d6), a [d8](#d8), a [d10](#d10) or a
[d12](#d12).

You cannot raise an Attribute above a [d12](#d12).

### Attribute Damage

Attribute Damage decreases the character's Attribute, e.g. from a [d6](#d6) to a
[d4](#d4). This penalty can be **temporary** or **permanently**.

Attribute Damage does not influence any Skills, but improving associated Skills
might cost 2 points instead of one, even if the Attribute Damage is only
temporary.

<div class="left" markdown="1">

### Might (MI)

> [Might](#might-mi) represents the character's physical strength and
> resilience.

The damage of melee weapons is derived from [Might](#might-mi). Also improves a
character's toughness.

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

> A creature can use up to its Pace per Move Action taken.

The Pace value can never drop below **2**.

!!! summary "Pace"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Speed Attribute">Die / 2</span>
    </div>

</div>
<div class="right" markdown="1">

### Perception

> Perception is a passive value that represents the character's alertness.

It's used to passively counter creatures that used the [Stealth
Skill](/character/skills#stealth), sense things and creatures, etc.

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Intelligence Attribute">Die / 2</span>
    </div>

</div>

<div class="left" markdown="1">

### Parry

> The Parry value is used for defending against a melee Attack.

The Parry is 2 if you don't have the Melee Skill.

!!! summary "Parry Value"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Melee Skill">Die / 2</span>
    </div>

</div>
<div class="right" markdown="1">

### Toughness

> The [Toughness](#toughness) value is used for shrugging off Attacks.

The [Toughness](#toughness) value can never drop below **1**.

!!! summary "[Toughness](#toughness) Value"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Might Attribute">Die / 2</span> +
        <span data-bracket-bottom="Armour's Toughness">TN</span>
    </div>

</div>
<div class="clearfix"></div>

## Health (HP)

> [Health](#health) represents the character’s overall condition.

If Health drops to 0 or below, the creature has to make a
[Might](/character#might-mi) roll. On a failure, the creature becomes
incapacitated, but not necessarily unconcious, until healed or dead.

A character that drops to or below his HP in negative dies.

!!! summary "[Health](#health)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Might Attribute">Die / 4</span>
    </div>

## Experience (XP)

> Experience is gained throughout a character's adventuring career.

Experience (XP) is gained due to noteable achievements or story completions. XP
usually is only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

Every three Experience Points (XP) increase a character's level by one.

### Level (LVL)

The Level of a character abstracts it's experience, resourcefulness, and
Skillset.

#### Acquisitions

A character's level improves the maximum values of his acquisitions. This does
not necessarily make the character stronger, but makes the character more
resourceful and adaptable.

#### Character Points

* Every level, a character gains 1 Skill Point.

* Every 2 levels, a character gains 1 Attribute Points.

* Every 4 levels, a character gains a Talent.

## Fate

> A character can change the course of action and his fate.

Every character has a few fate dice available, a [d4](#d4), [d6](#d6),
[d8](#d8), [d10](#d10) and a [d12](#d12). Any of these dice can only be used
once. A fate die can be used on any roll, even multiple fate dice can be used at
once.

Before rolling determine if you want to use fate dice and which fate dice you
want to use. Add the fate dice to your roll.

When all fate dice have been used up, your character's **fate** is finally
**sealed**.

## Acquisitions

> Acquisitions abstract the resources available to a character.

Acquisitions are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances, [Perks](/perks), and
permanently due to [Experience](#experience-xp).

The current value for Acquisitions can **never** exceed the maximum value. All
exceeding points are usually lost.

[Influence](/character#influence-inf), [Resources](/character#resources-res) and
[Technology](/character#technology-tech) can be traded for each other. Any two
Acquisitions of one sort can be traded in for any other.
[Downtime](/character#downtime-dt) cannot be traded.

!!! tip "Buying Acquisitions"
    A GM may disallow exchanging [Credits](/equipment#credits-cr) for Acquisitions
    directly. Instead, he may require a character or the party to go on a quest
    or adventure in order to exchange [Credits](/equipment#credits-cr). E.g. the
    party has to find a wealthy trader, or rescue a trader from pirates first,
    etc.

### Loot (LOOT)

> [Loot](#loot) abstracts the items and clutter looted.

1 unit of Loot takes up 1 Bulk. Loot is usually stored on a vessel or a player
base.

Loot can be sold or exchanged for other Acquisitions. Loot cannot be bought.

| Loot | Exchanges to    |
|-----:|-----------------|
|    1 | 1 000 Credits |
|    5 | 1 Resource      |
|   10 | 1 Technology    |

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
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
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
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
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
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

## Living standard

Every character has a normal living standard by default.

This living standard includes normal accomadations, *free* food and drinks in
populated areas, moving in local traffic and areas, etc. This means you don't
have to pay for normal lodging, etc.

<!-- ## Living standards

Living standards decrease the micro management you have to do for your character
and specifically his equipment and items, see [Item
Uses](/equipment#item-uses).

### Poor living standard

A poor living standard nets 1 [RES](#resources).

This living standard doesn't include anything. Everything your character needs
costs [Credits](/equipment#credits-cr).

### Normal living standard

Every character has a normal living standard by default.

This living standard includes normal accomadations, *free* food and drinks in
populated areas, moving in local traffic and areas, etc.

### High living standard

A high living standard costs 1 [RES](#resources). This increases the item's
**Uses** refill rate. -->

## Languages

A language can be learned in three steps: speaking, writing, and reading.

Every character has at least one native language with all three steps unlocked.

Learning a Language can be done in three steps, whereas each step costs 2
[Downtime](/character#downtime-dt) to learn:

* Reading
* Speaking
* Writing

Learning a Language completely (all three steps) at once only costs 5
[Downtime](/character#downtime-dt) instead.

## Improving your character

~~Improving your character happens automatically due completing missions,
quests, fighting and adventuring and eventually earning
[Experience](#experience-xp), which will increase the character's
[Level](#level-lvl).~~

~~Attributes and Skills can be improved too, but require
[Downtime](/character#downtime) and [Credits](/equipment#credits-cr).~~

~~Any character's skills and expertise are greatly enhanced by the equipment
they own. Hard training may give a character a permanent bonus, but the right
item is often cheaper and acquired more easily.~~
