# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

A character is defined by:

* A race,
* abilities,
* Means,
* experience,
* pools, and
* traits, such as perks and flaws.

## Race

See [Races](/character/races).

## Abilities

Abilities are *mostly fixed* values every creature has. They are only modified
by *certain events* while adventuring, or by improvements using
[Downtime](/character#downtime-dt) and [Credits](/equipment#credits-cr).

Every character starts with all four abilities on Rank 10. Upon character
creation, this rank can be adjusted following the character improvement rules.

Improving an ability by 1 Rank costs 6 [Downtime](/character#downtime-dt).
Decreasing an ability can only be done at character creation at nets 6
[Downtime](/character#downtime-dt) per Rank decreased.

|   Rank | Downtime cost |
|-------:|--------------:|
|    ... |           ... |
|      8 |           -12 |
|      9 |            -6 |
| **10** |         **-** |
|     11 |             6 |
|     12 |            12 |
|    ... |           ... |


<blockquote class="important" markdown="1">
If an ability were to drop to Rank 0 or below, the character dies.
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

### Perception

Perception is a passive value that represents the character's alertness. It's
used to counter creatures that used the [Stealth
Skill](/character/skills#stealth), etc.

!!! summary "Perception"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">10</span> +
        <span data-bracket-top="Experience">XP</span> +
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

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

#### Endurance (EP)

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

### Experience (XP)

> Experience is gained throughout a character's adventuring career.

Experience (XP) is gained due to noteable achievements or story completions. XP
usually is only given out one at a time. The GM can decide to give out more for
completing a longer adventure.

<blockquote class="important" markdown="1">
Every character has 0 XP upon creation.
</blockquote>

### Level (LVL)

A character's level improves the maximum values of his currencies. This does not
necessarily make the character stronger, but make the character more resourceful
and adaptable.

### Fate

> A character can change the course of action and his fate.

Every character has the same amount of fate rolls available as he has
[Experience](/character#experience-xp). A fate roll allows a character to
*re-roll* the entire check (all 3d6). Using a fate roll consumes one
[Experience](/character#experience-xp). Using fate cannot be used if you have
zero [Experience](/character#experience-xp) at the moment. Also, you can't lose
a level through using fate.

Fate helps powerful characters to get a better outcome when faced with dire
consequences, but comes with a cost.

!!! summary "Fate rolls available"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="XP">Experience</span> -
      <span data-bracket-top="already spent">Fate</span>
    </div>

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

[Credits](/equipment#credits) can never buy Means directly. Exchanging
[Credits](/equipment#credits) for Means can usually only be done in
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
