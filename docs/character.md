# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

A character is defined by:

* A race,
* primary stats,
* secondary stats,
* experience, and
* pools.

## Race

Every creature has a race, or at least a type that groups similar creatures into
the same category, e.g. animals or robots.

A race modifies:

* primary stats, secondary stats, pools and skills
* adds perks and flaws,
* enables access to inherent stunts,
* and may add roleplaying circumstances

## Primary Stats

!!! tip "Tracking stats"
    Always write the current primary and secondary stat value down separately
    from your character's maximum. Certain actions decrease and increase
    secondary stats very often, while the maximum doesn't change that
    frequently.

Primary stats are **fixed** values every character has. These stats are only
modified by *fatal events* while adventuring.

Primary stats or abilities are used for a number of things:

* define how much damage the character can sustain,
* enable perks and upgrades
* enable certain action, e.g. carrying heavy stuff requires a minimal strength
  value.

Primary stats reach from -5 to 5. Any primary stats score at 5 means that the
character is almost superhuman in that primary stats. An primary stats score at
0 means that the character is somehow impaired, and an primary stats score at -5
means that the character is dead.

Good or bad primary stats also add bonuses or impose penalties on skill checks
corresponding to the primary stat.

| Primary stat   |   -5 |   -4 |   -3 |   -2 |   -1 |    0 |    1 |    2 |    3 |    4 |    5 |
|----------------|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|-----:|
| Skill modifier |   -3 |   -2 |   -2 |   -1 |   -1 |   +0 |   +1 |   +1 |   +2 |   +2 |   +3 |

Every character has 12 points to spend between the four primary stats upon
creation. Each primary stat has the initial value of 0. Points can only be
added, not subtracted from the primary stat. Primary stats can **never** be
higher than 5. Some races also reduce the maximum value for certain primary
stats.

<div class="col-layout-start"></div>

### Might

> Might represents the character's physical strength and resilience.

The damage of melee weapons is derived from might. Also improves a character's
toughness.

### Intelligence

> Intelligence describes how well your character learns new things, and how well
he remembers already existing things.

Intelligence improves a character's ability to assess situations and skills
related to knowing things.

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

### Speed

> Speed measures the character's reflexes and hand-eye coordination.

Speed adds a bonus to ranged weaopn attacks, is used for stealth and lets you
act in a [Crisis](/#crisis) sooner.

### Charisma

> Charisma represents the character's physical attractiveness, force of personality
and his ability to lead.

Charisma is mostly used in social interactions between characters and NPCs.

<div class="col-layout-end clearfix"></div>

## Secondary Stats

Secondary stats are bound to frequent changes. Every secondary stat has a
maximum value modified by circumstances, perks, and permanently due to
[experience](#experience). The current value of a secondary stat can **never**
exceed the maximum value. All exceeding points are usually lost.


<div class="col-layout-start"></div>

### Downtime

> Downtime represents the time a character can invest in downtime activities.

**GAINED**{.hf} in the course of time. A character gains more downtime in
between adventures and longer periods of downtime during adventures. A character
gains 1 downtime each session.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

Actions that take longer, like repairing a damaged vessel consume downtime.
Usually, a task that consumes downtime has at least a DC of 12. Better skill
checks can reduce downtime and/or resources used, while bad skill checks can
increase downtime and/or resources used. This DC *may* be lowered or increased
depending on the situation the characters are in.

!!! summary "Maximum Downtime"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-top="Base">10</span>
    </div>

### Resources

> Resources represent materials used for creating, repairing, upgrading and
> acquiring equipment.

**GAINED**{.hf} by looting enemies, or completing missions, adventures and
quests.

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

Resources can be used to repair vessels, in which case the resources are spent
on the repair. If resources are spent on equipment, your maximum resources are
temporary lowered by that amount. This abstracts the upkeep of a powerful item.

Resources spent on very powerful equipment usually add [stunts](/stunts).

!!! summary "Maximum Resources"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance / Perks / Race">other bonuses</span>
    </div>

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

### Influence

> Influence represents connections, owed favours by others, fame and infamy.

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. Influence is lost by harming and disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

Higher influence unlocks better equipment and better vessels. Traders may also
give you better prices.

!!! summary "Maximum Influence"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance / Perks / Race">other bonuses</span>
    </div>

<div class="is-mobile">
  <br><br><br><br><br><br>
</div>

### Research

> Research represents the party's knowledge, which on the other hand allows to
> unlock new technology.

**GAINED**{.hf} by aiding science missions, acquiring blueprints, spending time
on researching certain technology, etc.

**USED**{.hf} for unlocking experimental equipment and vessels. Once unlocked,
the experimental equipment or vessel can be acquired.

Certain ugprades require technology in order to be unlocked. Upgrades have to be
unlocked only once, and *can* be shared between characters. Unlocking upgrades
enables the acquisition of better equipment and vessels.

!!! summary "Maximum Technology"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance / Perks / Race">other bonuses</span>
    </div>

<div class="col-layout-end clearfix"></div>

## Experience

> Experience is gained throughout a character's adventuring career.

Experience is gained due to noteable achievements or story completions.
Experience *may* provide a character with experience points, usually 1 at a
time.

Experience improves the maximum values of your secondary stats. This does not
necessarily make your character stronger, but make the character more
resourceful and adaptable.

Every character has 1 experience upon creation.

## Pools

> Each creature has health and endurance pools. A robot may be defined as a
> character, but instead of health and endurance it has the pools integrity and
> power, acting just the same.

### Health

???

### Endurance

???

## Character creation

1. Choose a race
2. Assign primary stats
3. Determine secondary stats
4. Buy skills, perks and equipment
5. Adjust character values
