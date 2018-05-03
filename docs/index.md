# Introduction

## Prerequisites

## Mechanics

### Checks

Checks are made if the outcome of a task is uncertain or subject to chance. A
check involves rolling **3d6** (three six-sided dice). All dice are added
together. The resulting number **has** to be less than or equal to the target
number. A higher target number means a better chance of success.

The target number is derived from the task and the check made. Most checks are
made for [Skills](/character/skills#skills) and
[Abilities](/character#abilities).

A task's difficulty and the final target number are modified by:

* The [Ability](/character#abilities) Rank,
* the [Skill](/character/skills#skills) Rank,
* perks and flaws,
* used equipment,
* and other circumstances.

#### Margin of success and failure

A check is always made against a target number. The difference between the
target number and the rolled number is called **margin of success** or **margin
of failure** if the resulting number is negative.

!!! example "Margin of success and failure"
    Given a target number of 16, a roll of 12 results in a **margin of success**
    of 4. Given the same target number, a roll of 17 results in a **margin of
    failure** of -1.

#### Contests

When two parties compete with each other in the same or even different skills
and stats, both parties have to make a check. If only one party has a success,
the other one loses the contest. If both parties either succeed or fail on their
checks, the party with the higher **margin of success** or the party with
the lower **margin of failure** wins.

```flow
st=>start: Begin of Contest
e=>end: End of Contest

r0=>operation: Both parties make a check
r1=>condition: Only one party
has a success?
r1f=>inputoutput: Winner decided

sub1=>operation: Compare margins
cond=>condition: Only one party
has a success?

st->r0->cond
cond(yes)->e
cond(no)->sub1(right)->e

```

### Fractions

All fractions are **always** rounded down.

### Negative Values

Some pools cannot be negative, e.g. [Resources](/character#resources-res) or
[Endurance](/character#endurance). If such a value where to drop to below 0, it
either prohibits certain actions, it has consequences or it's simply ignored and
the value set to 0.

## Abbreviations

<div class="dl-horizontal" markdown="1">
<div class="col-layout-start"></div>

* Abilities

MI
:   [Might](/character#might-mi)

SP
:   [Speed](/character#speed-sp)

IN
:   [Intelligence](/character#intelligence-in)

CH
:   [Charisma](/character#charisma-ch)

* Character

XP
:   [Experience](/character#experience-xp)

LVL
:   [Level](/character#level-lvl)

EP
:   [Endurance points](/character#endurance-ep)

HP
:   [Health points](/character#health-hp)

* Currency

DT
:   [Downtime](/character#downtime-dt)

INF
:   [Influence](/character#influence-inf)

RES
:   [Resources](/character#resources-res)

TECH
:   [Technology](/character#technology-tech)

<div class="col-layout-end"></div>
<div class="col-layout-start"></div>

* Equipment

CR
:   [Credits](/character/equipment#credits)

HIT
:   [Hit bonus](/character/equipment/#weapons)

END
:   [Endurance damage](/character/equipment/#weapons)

DMG
:   [Health damage](/character/equipment/#weapons)

RNG
:   [Range](/character/equipment/#weapons)

MAG
:   [Magazines](/character/equipment/#weapons)

CAP
:   [Capacity](/character/equipment/#weapons)

RoF
:   [Rate of fire](/character/equipment/#weapons)

REL
:   [Reload](/character/equipment/#weapons)

* Crisis

AP
: [Action points](/crisis#actions)

<div class="col-layout-end clearfix"></div>
</div>

## Glossary

[Action point](/crisis#actions)
:   AP, used for atomic actions in a crisis.

Base
:   A base value that's used for rolls or to determine values. It's the same for
all characters and creatures.

Difficulty Class
:   DC, a check equal or higher than the DC is a success, or a failure
otherwise.

*Failure*{.qs-f}
:   This indicates, that a check failed or has to be failed.

Roleplaying Circumstance
:   Usually added by a race, perk or flaws. Roleplaying circumstances include
prejudice, others liking or disliking you, being a known criminal, etc.

*Roll*{.qs-one}
:   This indicates, that a die on a check is a **1**. The number of dice show
the number of **1**s that have to be rolled.

*Roll*{.qs-d6}
:   This indicates, that a die on a check is a **6**. The number of dice show
the number of **6**s that have to be rolled.

*Success*{.qs-s}
:   This indicates, that a check was succeeded or has to be succeeded.

Weight
:   The minimum requirement of [Might](/character#might-mi) to *use* items.
Weight exceeding a character's [Might](/character#might-mi) imposes penalties.
