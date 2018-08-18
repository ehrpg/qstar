# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

A character is defined by:

* A Race,
* Attributes,
* Acquisitions,
* Experience,
* Secondary Characteristics, and
* Traits, such as Perks and Flaws.

## Race

See [Races](/character/races).

## Attributes

> Attributes define the character's overall physique or mental capabilities. As
such they count as the cornerstone for a character's Skill.

<div style="text-align: center;" markdown="1">
![test](/_imgs/dice.svg)
</div>

Every character starts with each Attribute at a [d4](#d4). Upgrading an
Attribute allows the character to use a [d6](#d6), a [d8](#d8), a [d10](#d10) or
a [d12](#d12). Upgrading an Attribute beyond a [d12](#d12) adds a flat bonus of
+1 per upgrade to the check.

Upgrading an Attribute by one step costs **6** [Downtime](#downtime-dt).

Downgrading only happens due to *fatal* adventuring events.

### Attribute Damage

Attribute Damage decreases the character's Attribute, e.g. from a d6 to a d4.
This penalty can be **temporary** or **permanently**.

<blockquote class="important" markdown="1">
If an Attribute were to drop below a d4 the character is incapacitated until the
Attribute Damage is restored. If the Attribute would drop even lower, the
character dies.
</blockquote>

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

## Movement Speed

A creature's Movement Speed is derived from the creature's [Speed](#speed-sp)
Attribute. Every creature has a base Movement Speed of 4 units per move action.
Each step above a [d4](#d4) adds one to the Movement Speed.

Traits, Races, Items and Equipment can also increase a creature's Movement
Speed.

!!! summary "Movement Speed"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">4</span> +
        <span data-bracket-top="Attribute">Speed</span> +
        <span data-bracket-bottom="Traits / Race / Equipment">Circumstance</span>
    </div>

!!! example "Movement Speed"
    A creature with a [d12](#d12) in [Speed](#speed-sp) has a Movement Speed of
    8. A creature with a [d12](#d12)+2 in [Speed](#speed-sp) has a Movement
    Speed of 10.

<!-- Ranges from 1 to 8+ -->

## Perception

Perception is a passive value that represents the character's alertness. It's
used to counter creatures that used the [Stealth
Skill](/character/skills#stealth), sense things and creatures, etc.

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">2</span> +
        <span data-bracket-top="Attribute">Intelligence</span> +
        <span data-bracket-bottom="Level">LVL / 2</span> +
        <span data-bracket-top="Traits / Race / Equipment">Circumstance</span>
    </div>

<!-- Ranges from 1 to 8+ -->

## Pools

<!-- TODO -->

> Each creature has [Health](#health-hp) and [Endurance](#endurance-ep) pools.
> A robot is defined as a character, but instead of [Health](#health-hp) and
> [Endurance](#endurance-ep) has the pools [Integrity](#health-hp) and
> [Power](#endurance-ep), acting just the same.

[Endurance](#endurance-ep) serves as an easily replenishable pool that's
usually targetted by damage first. Once depleted, the health pool is targetted.
[Health](#health-hp) is very hard to replenish.

<div class="left" markdown="1">

### Health (HP)

> [Health](#health-hp) represents the character's overall condition.

If [Health](#health-hp) drops to zero or below, the character is *dying*. A
*dying* character has to make a [Might](#might-mi) check the first time he drops to
or below zero, and every time he receives damage while in a *dying* state. On a
failed check the character falls unconcious. If the check succeeds, the
character retains conciousnes.

Outside of combat, a *dying* character loses one HP per minute, until he
receives medical attention.

A character that drops to or below his HP in negative dies.

!!! summary "Maximum [Health](/character/#health-hp)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">12</span> ±
        <span data-bracket-top="Attribute Modifier">Might</span>
        <span data-bracket-bottom="Base">x2</span>
        <span></span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

### Endurance (EP)

> [Endurance](/character/#endurance-ep) represents the character's power.

Damage from weapons, other characters, environments and certain actions such as
sprinting cause stress on a character and reduce his
[Endurance](/character/#endurance-ep).

!!! summary "Maximum [Endurance](/character/#endurance-ep)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">30</span> ±
        <span data-bracket-top="Attribute Modifier">Might</span>
        <span data-bracket-bottom="Base">x5</span>
        <span></span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

## Experience (XP)

> Experience is gained throughout a character's adventuring career.

Experience (XP) is gained due to noteable achievements or story completions. XP
usually is only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

<blockquote class="important" markdown="1">
Every character has 0 XP upon creation.
</blockquote>

Every three Experience Points (XP) increase a character's level by one.

### Level (LVL)

A character's level improves the maximum values of his currencies. This does not
necessarily make the character stronger, but make the character more resourceful
and adaptable.

### Fate

> A character can change the course of action and his fate.

Every character has one fate roll available. Each level up adds another fate
roll. Once used, a fate roll can never be regained.

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

Actions that take longer, like repairing a damaged vessel consume
[Downtime](#downtime-dt). Usually, a task that consumes [Downtime](#downtime-dt)
has at least a DC of 12. Better skill checks can reduce [Downtime](#downtime-dt)
and/or [Resources](/character/#resources-res)  used, while bad skill checks can
increase [Downtime](#downtime-dt) and/or [Resources](/character/#resources-res)
used. This DC *may* be lowered or increased depending on the situation.

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

## Living standards

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
**Uses** refill rate.

## Languages

Every character has at least one native language he can speak, write, read and
understand.

Learning a Language can be done in three steps, whereas each step costs 2
[Downtime](/character#downtime-dt) to learn:

* Reading
* Speaking
* Writing

Learning a Language completely (all three steps) at once only costs 5
[Downtime](/character#downtime-dt) instead.

## Skills

See [Skills](/character/skills/).

## Perks

See [Perks](/character/perks/).

## Flaws

See [Flaws](/character/flaws/).

## Improving your character

Improving your character happens automatically due completing missions, quests,
fighting and adventuring and eventually earning [Experience](#experience-xp),
which will increase the character's [Level](#level-lvl).

[Attributes](/character#attributes) and [Skills](/character/skills#skills) can
be improved too, but require [Downtime](/character#downtime) and
[Credits](/equipment#credits-cr).

Any character's skills and expertise are greatly enhanced by the equipment they
own. Hard training may give a character a permanent bonus, but the right item is
often cheaper and acquired more easily.
