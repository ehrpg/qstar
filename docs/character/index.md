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

|    # | Ability Rank | Ability Modifier | Downtime cost | ∑ Downtime cost |
|-----:|--------------|-----------------:|--------------:|----------------:|
|    1 | Terrible     |               -3 |             0 |               0 |
|    2 | Poor         |               -2 |             4 |               4 |
|    3 | Mediocre     |               -1 |             2 |               6 |
|    4 | Fair         |                0 |             2 |               8 |
|    5 | Good         |               +1 |             2 |              10 |
|    6 | Great        |               +2 |             4 |              14 |
|    7 | Superb       |               +3 |             8 |              22 |

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

## Pools

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

### Health (HP)

> [Health](/character/#health-hp) represents the character's overall condition.

If [Health](/character/#health-hp) drops to zero, the character dies. A GM may
even reduce certain values of the character such as abilities when a lot of
[Health](/character/#health-hp) is lost. Also, a GM may give the character a
flaw if damaged badly, e.g. when losing an eye.

!!! summary "Maximum [Health](/character/#health-hp)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">40</span> ±
        <span data-bracket-top="Ability Modifier">Might</span> x
        <span data-bracket-bottom="Base">5</span> ±
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
        <span data-bracket-bottom="Base">100</span> ±
        <span data-bracket-top="Ability Modifier">Might</span> x
        <span data-bracket-bottom="Base">10</span> ±
        <span data-bracket-top="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="clearfix"></div>

## Experience (XP)

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

### Fate

> A character can change the course of action and his fate.

Every character has the same amount of fate rolls available as he has
[Experience](/character#experience-xp). A fate roll allows a character to
*re-roll* the entire check (all 3d6). Using a fate roll reduces the amount of
fate rolls a character has, but not his [Experience](/character#experience-xp).
Fate cannot be restored.

!!! example "Fate, Experience, and changing Fate"
    Jack has 3 [Experience](/character#experience-xp), but only 2
    [Fate](/character#fate) left, since he already spent one fate roll some time
    ago.

    He is piloting a space craft through an asteroid field mid-combat. Failing
    the Skill check for Operate would result in death. He messes up his check,
    and decides to use one of his remaining 2 [Fate](/character#fate) rolls. He
    re-rolls the entire Operate check, rolls something better and now succeeds.
    Now there is only 1 [Fate](/character#fate) left. If he gained
    [Experience](/character#experience-xp), he'd now have 4
    [Experience](/character#experience-xp), and 2 [Fate](/character#fate).

Fate helps powerful characters to get a better outcome when faced with dire
consequences, but only a **limited** number of times.

!!! summary "Fate rolls available"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="XP">Experience</span> -
      <span data-bracket-top="already spent">Fate</span>
    </div>

## Currency

> Currencies abstract the resources available to a character. This is not to be
> mistaken with [Credits](/equipment#credits) or money.

Currencies are limited by a maximum value, and are used to improve your
character. This maximum value is modified by Circumstances,
[Perks](/perks), and permanently due to [Experience](#experience-xp).

The current value for a currency can **never** exceed the maximum value. All
exceeding points are usually lost.

[Influence](/character#influence-inf), [Resources](/character#resources-res) and
[Technology](/character#technology-tech) can be traded for each other. Any two currencies
of one sort can be traded in for any other. [Downtime](/character#downtime-dt)
cannot be traded.

[Credits](/equipment#credits) can never buy Currency directly. Exchanging
[Credits](/equipment#credits) for Currency can usually only be done in
conjuction with a quest or adventure - this is up to the GM.

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

## Skills

See [Skills](/character/skills/).

## Perks

See [Perks](/character/perks/).

## Flaws

See [Flaws](/character/flaws/).
