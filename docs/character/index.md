# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

A character is defined by:

* A race,
* abilities,
* currencies,
* experience, and
* pools.

## Race

See [Races](/character/races).

## Abilities

Abilities are *mostly fixed* values every creature h    as. They are only modified
by *certain events* while adventuring.

Good or bad abilities also add bonuses or impose penalties on skill checks
corresponding to the ability.

|    # | Ability Rank | Ability Modifier | Downtime cost |
|-----:|--------------|-----------------:|--------------:|
|    1 | Terrible     |               -3 |            -6 |
|    2 | Poor         |               -2 |            -3 |
|    3 | Mediocre     |               -1 |            -1 |
|    4 | Fair         |                0 |             0 |
|    5 | Good         |               +1 |             1 |
|    6 | Great        |               +2 |             3 |
|    7 | Superb       |               +3 |             6 |

<blockquote class="important" markdown="1">
If an ability were to drop below [Ability - Terrible](#abilities) the
character dies.
</blockquote>

<div class="left" markdown="1">

### Might

> Might represents the character's physical strength and resilience.

The damage of melee weapons is derived from might. Also improves a character's
toughness.

</div>
<div class="right" markdown="1">

### Speed

> Speed measures the character's reflexes and eye-hand coordination.

Speed adds a bonus to ranged weaopn attacks, is used for stealth and lets you
act in a [Crisis](/#crisis) sooner.

</div>
<div class="left" markdown="1">

### Intelligence

> Intelligence describes how well your character learns new things, and how well
he remembers already existing things.

Intelligence improves a character's ability to assess situations and skills
related to knowing things.

</div>
<div class="right" markdown="1">

### Charisma

> Charisma represents the character's physical attractiveness, force of personality
and his ability to lead.

Charisma is mostly used in social interactions between characters and NPCs.

</div>
<div class="clearfix"></div>

## Currency

> Currencies abstract the resources available to a character. This is not to be
> mistaken with [Credits](/equipment#credits) or money.

Currencies are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances,
[Perks](/perks-flaws#perks), and permanently due to [Experience](#experience).

The current value for a currency can **never** exceed the maximum value. All
exceeding points are usually lost.

[Influence](/character#influence), [Resources](/character#resources) and
[Research](/character#research) can be traded for each other. Any two currencies
of one sort can be traded in for any other. [Downtime](/character#downtime)
cannot be traded.

<div class="left" markdown="1">

### Downtime

> [Downtime](#downtime) represents the time a character can invest in
> [Downtime](#downtime) activities.

**GAINED**{.hf} over the course of time. A character gains more
[Downtime](#downtime) in between adventures and longer periods of downtime
during adventures. A character gains at least 1 [Downtime](#downtime) each
session automatically.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

Actions that take longer, like repairing a damaged vessel consume
[Downtime](#downtime). Usually, a task that consumes [Downtime](#downtime) has
at least a DC of 12. Better skill checks can reduce [Downtime](#downtime) and/or
[Resources](/character/#resources)  used, while bad skill checks can increase
[Downtime](#downtime) and/or [Resources](/character/#resources)  used. This DC
*may* be lowered or increased depending on the situation.

!!! summary "Maximum [Downtime](#downtime)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-top="Base">10</span>
    </div>

</div>
<div class="right" markdown="1">

### Influence

> [Influence](#influence) represents connections, owed favours by others, fame
> and infamy.

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. [Influence](#influence) is lost by harming and
disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

More [Influence](#influence) unlocks better equipment and better vessels.
Traders may also give you better prices.

!!! summary "Maximum [Influence](#influence)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="left" markdown="1">

### Resources

> [Resources](#resources) represent materials used for creating, repairing,
> upgrading and acquiring equipment.

**GAINED**{.hf} by looting, or completing missions, adventures and quests.

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

[Resources](#resources) can be used to repair vessels, in which case the
[Resources](#resources) are spent on the repair.

If [Resources](#resources) are spent on equipment, your maximum
[Resources](#resources) are *temporarily lowered* by that amount. This abstracts
the upkeep of a powerful item.

Powerful equipment requiring [Resources](#resources) usually adds
[stunts](/stunts) or other benefits.

!!! summary "Maximum [Resources](#resources)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

### Research

> [Research](#research) represents the character's knowledge, which on the other
> hand allows to unlock new [Equipment](/character/equipment).

**GAINED**{.hf} by aiding science missions, acquiring blueprints, spending time
on researching certain scientific fields, etc.

**USED**{.hf} for unlocking experimental equipment and vessels. Once unlocked,
the experimental equipment or vessel can be acquired.

Certain ugprades require [Research](#research) in order to be unlocked. Upgrades
have to be unlocked only once, and *can* be shared between characters. Unlocking
upgrades enables the acquisition of better equipment and vessels.

!!! summary "Maximum [Research](#research)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

## Experience

> Experience is gained throughout a character's adventuring career.

Experience (XP) is gained due to noteable achievements or story completions. XP
usually is only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

XP improves the maximum values of your currencies. This does not necessarily
make your character stronger, but make the character more resourceful and
adaptable.

<blockquote class="important" markdown="1">
Every character has 0 XP upon creation.
</blockquote>

## Carrying Capacity

A character's carrying capacity is dervied from a character's [Might](#might).
[Perks](/character/perks-flaws#perks), [Flaws](/character/perks-flaws#flaws) and
[Race](/character/races) can influence the carrying capacity.

The carrying capacity isn't a hard limit. Exceeding it simply drains
[Endurance](#endurance).

!!! summary "Carrying Capacity"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">25</span> ±
        <span data-bracket-top="Ability Modifier">Might</span> *
        <span data-bracket-bottom="Base">5</span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

## Pools

> Each creature has [Health](/character/#health) and
> [Endurance](/character/#endurance) pools. A robot is defined as a character,
> but instead of [Health](/character/#health) and
> [Endurance](/character/#endurance) has the pools [Integrity](/character/#health)
> and [Power](/character/#endurance), acting just the same.

[Endurance](/character/#endurance) serves as an easily replenishable pool that's
usually targetted by damage first. Once depleted, the health pool is targetted.
[Health](/character/#health) is very hard to replenish.

<div class="left" markdown="1">

### Health

> [Health](/character/#health) represents the character's overall condition.

If [Health](/character/#health) drops to zero, the character dies. A GM may even
reduce certain values of the character such as abilities when a lot of
[Health](/character/#health) is lost. Also, a GM may give the character a flaw if
damaged badly, e.g. when losing an eye.

!!! summary "Maximum [Health](/character/#health)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">25</span> ±
        <span data-bracket-top="Ability Modifier">Might</span> x
        <span data-bracket-bottom="Base">5</span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

### Endurance

> [Endurance](/character/#endurance) represents the character's power.

Damage from weapons, other characters, environments and certain actions such as
sprinting cause stress on a character and reduce his
[Endurance](/character/#endurance).

!!! summary "Maximum [Endurance](/character/#endurance)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">50</span> ±
        <span data-bracket-top="Ability Modifier">Might</span> x
        <span data-bracket-bottom="Base">10</span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

## Skills

See [Skills](/character/skills/).

## Perks & Flaws

See [Perks & Flaws](/character/perks-flaws/).
