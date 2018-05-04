# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

A character is defined by:

* A race,
* abilities,
* currencies,
* experience,
* pools, and
* traits, such as perks and flaws.

## Race

See [Races](/character/races).

## Abilities

Abilities are *mostly fixed* values every creature has. They are only modified
by *certain events* while adventuring.

Good or bad abilities also add bonuses or impose penalties on skill checks
corresponding to the ability.

|    # | Rank     | Modifier | Downtime cost | ∑ Downtime cost |
|-----:|----------|---------:|--------------:|----------------:|
|    0 | Terrible |       -3 |             0 |               0 |
|    1 | Poor     |       -2 |             3 |               3 |
|    2 | Mediocre |       -1 |             2 |               5 |
|    3 | Fair     |        0 |             2 |               7 |
|    4 | Good     |       +1 |             2 |               9 |
|    5 | Great    |       +2 |             3 |              12 |
|    6 | Superb   |       +3 |             6 |              18 |

<blockquote class="important" markdown="1">
If an ability were to drop below [Ability - Terrible](#abilities) the
character dies.
</blockquote>

<div class="left" markdown="1">

### Might (MI)

> Might represents the character's physical strength and resilience.

The damage of melee weapons is derived from might. Also improves a character's
toughness.

</div>
<div class="right" markdown="1">

### Speed (SP)

> Speed measures the character's reflexes and eye-hand coordination.

Speed adds a bonus to ranged weaopn attacks, is used for stealth and lets you
act in a [Crisis](/#crisis) sooner.

</div>
<div class="left" markdown="1">

### Intelligence (IN)

> Intelligence describes how well your character learns new things, and how well
he remembers already existing things.

Intelligence improves a character's ability to assess situations and skills
related to knowing things.

</div>
<div class="right" markdown="1">

### Charisma (CH)

> Charisma represents the character's physical attractiveness, force of personality
and his ability to lead.

Charisma is mostly used in social interactions between characters and NPCs.

</div>
<div class="clearfix"></div>

## Secondary Characteristics

### Pools

> Each creature has [Health](/character/#health-hp) and
> [Endurance](/character/#endurance-ep) pools. A robot is defined as a
> character, but instead of [Health](/character/#health-hp) and
> [Endurance](/character/#endurance-ep) has the pools
> [Integrity](/character/#health-hp) and [Power](/character/#endurance-ep),
> acting just the same.

[Endurance](/character/#endurance-ep) serves as an easily replenishable pool that's
usually targetted by damage first. Once depleted, the health pool is targetted.
[Health](/character/#health-hp) is very hard to replenish.

<div class="left" markdown="1">

#### Health (HP)

> [Health](/character/#health-hp) represents the character's overall condition.

If [Health](/character/#health-hp) drops to zero or below, the character is
*dying*. A *dying* character has to make a [Might](/character#might) check the
first time he drops to or below zero, and every time he receives damage while in
a *dying* state. On a failed check the character falls unconcious. If the check
succeeds, the character retains conciousnes.

Outside of combat, a *dying* character loses one HP per minute, until he
receives medical attention.

A character that drops to or below his HP in negative dies.

!!! summary "Maximum [Health](/character/#health-hp)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">12</span> ±
        <span data-bracket-top="Ability Modifier">Might</span>
        <span data-bracket-bottom="Base">x2</span>
        <span></span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

#### Endurance (EP)

> [Endurance](/character/#endurance-ep) represents the character's power.

Damage from weapons, other characters, environments and certain actions such as
sprinting cause stress on a character and reduce his
[Endurance](/character/#endurance-ep).

!!! summary "Maximum [Endurance](/character/#endurance-ep)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">30</span> ±
        <span data-bracket-top="Ability Modifier">Might</span>
        <span data-bracket-bottom="Base">x5</span>
        <span></span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

### Experience (XP)

> Experience is gained throughout a character's adventuring career.

Experience (XP) is gained due to noteable achievements or story completions. XP
usually is only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

<blockquote class="important" markdown="1">
Every character has 0 XP upon creation.
</blockquote>

Every three Experience Points (XP) increase a character's level by one.

#### Level (LVL)

A character's level improves the maximum values of his currencies. This does not
necessarily make the character stronger, but make the character more resourceful
and adaptable.

#### Fate

> A character can change the course of action and his fate.

Every character has the same amount of fate rolls available as he has
[Experience](/character#experience-xp). A fate roll allows a character to
*re-roll* the entire check (all 3d6). Using a fate roll consumes one
[Experience](/character#experience-xp). Using fate can reduce a character's
level. Fate cannot be used if you have zero
[Experience](/character#experience-xp) Points.

Fate helps powerful characters to get a better outcome when faced with dire
consequences, but changing fate always comes with a cost.

### Means

> Means abstract the resources available to a character.

Means are limited by a maximum value, and are used to improve your character.
This maximum value is modified by Circumstances, [Perks](/perks), and
permanently due to [Experience](#experience-xp).

The current value for Means can **never** exceed the maximum value. All
exceeding points are usually lost.

[Influence](/character#influence-inf), [Resources](/character#resources-res) and
[Technology](/character#technology-tech) can be traded for each other. Any two
Means of one sort can be traded in for any other.
[Downtime](/character#downtime-dt) cannot be traded.

!!! tip "Buying Means"
    A GM may disallow exchanging [Credits](/equipment#credits-cr) for Means
    directly. Instead, he may require a character or the party to go on a quest
    or adventure in order to exchange [Credits](/equipment#credits-cr). E.g. the
    party has to find a wealthy trader, or rescue a trader from pirates first,
    etc.

<div class="left" markdown="1">

#### Downtime (DT)

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

#### Influence (INF)

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

#### Resources (RES)

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

#### Technology (TECH)

> [Technology](#technology-tech) represents the character's technological
> knowledge, which on the other hand allows to unlock new
> [Equipment](/character/equipment).

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

### Living standards

Living standards decrease the micro management you have to do for your character
and specifically his equipment and items, see [Item
Uses](/character/equipment#item-uses).

#### Poor living standard

Every character has a poor living standard by default.

This living standard doesn't include anything. Everything your character needs
costs [Credits](/equipment#credits-cr)

#### Normal living standard

A normal living standard costs 1 [RES](#resources).

This living standard includes normal accomadations, *free* food and drinks in
populated areas, moving in local traffic and areas, etc.

#### High living standard

A high living standard costs 2 [RES](#resources). This increases the item's
**Uses** refill rate.

### Status

A character's Status is used to determine a character's social standing. This
value ranges from -2 (slave, criminal) to +8 (emperor, god-king). Every
character has a Status of 0 (citizen) by default.

Increasing Status costs 4 [Downtime](/character#downtime-dt) per point.
Decreasing Status nets 4 [Downtime](/character#downtime-dt)  per point.

The Status is important for social encounters. An ordinary citizen, with Status
0, would usually have a hard time of convincing a lord, Status 3 or 4, of his
ideas.

## Skills

See [Skills](/character/skills/).

## Perks

See [Perks](/character/perks/).

## Flaws

See [Flaws](/character/flaws/).

## Languages

Every character has at least one native language he can speak, write, read and
understand.

Each additional language costs 5 [Downtime](/character#downtime-dt) to learn.

## Improving your character

Improving your character happens automatically due completing missions, quests,
fighting and adventuring and eventually earning [Experience](#experience-xp),
which will increase the character's [Level](#level-lvl).

[Abilities](/character#abilities) and [Skills](/character/skills#skills) can be
improved too, but require [Downtime](/character#downtime) which in general is
hard to come by.

Any characters skills and expertise are greatly enhanced by the equipment they
own. Hard training may give a character a permanent bonus, but the right item is
often cheaper and acquired more easily.
