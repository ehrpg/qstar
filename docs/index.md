# Introduction

## Prerequisites

A player needs these dice: [d4](#d4), [d6](#d6), [d8](#d8), [d10](#d10) and a
[d12](#d12). A GM also requires these dice. A d20 or d100 also can be useful
when rolling on random tables.

## Basic Mechanics

### Dice

<div style="text-align: center;" markdown="1">
![test](/_imgs/dice.svg)
</div>

Every character uses a [d4](#d4), [d6](#d6), [d8](#d8), [d10](#d10) and a
[d12](#d12) for everything he's doing. The higher the die, the better the chance
on rolling **higher**, which is **better**.

### Fractions

All fractions are **always** rounded down.

When a Skill is divided, divide the number of sides of the die. Flat modifiers
are added to the sides of the die.

<div class="left" markdown="1">

!!! example "Skill Fraction"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="result">6</span> =
      <span data-bracket-top="12">d12</span> /
      <span data-bracket-bottom="divisor">2</span>
    </div>

</div>
<div class="right" markdown="1">

!!! example "Skill Fraction"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="result">7</span> = (
      <span data-bracket-top="15">d12 + 3</span> ) /
      <span data-bracket-bottom="divisor">2</span>
    </div>

</div>

<div style="clear: both;"></div>

### Negative Values

Some values cannot be negative, e.g. [Resources](/character#resources-res). If
such a value were to drop to below 0, it either prohibits certain actions, it
has consequences or it's simply ignored and the value set to 0.

## Die Rolls

There are three different kind of die rolls:

* **Task** rolls, which include Attribute and Skill rolls including Attacks,
* **Damage** rolls, and
* **Random** rolls.

All creatures are defined by Attributes and Skills, which are used for all
**Task** rolls and *some* **Damage** rolls.

Every roll uses a set amount of dice. **Task** rolls use the corresponding
Attribute's or Skill's die. **Damage** rolls use the weapon's corresponding
dice. **Random** rolls use the random table's corresponding dice.

**Task** and **Damage** rolls can receive bonuses and penalties from the
creature's Talents, Race, role-playing, etc.

**Task** rolls are made with a Chance die in addition to the Attribute's or
Skill's die. A Chance die isn't added to the result. See [Critical
Failures](#critical-failures).

### Task Difficulty

A task's [Difficulty Level](/crisis#difficulty) is **always** 4. The only
exceptions are passive values in combat, e.g. a character's Parry value.

A check has to be equal to or higher a [Difficulty Level](/crisis#difficulty) in
order to succeed. Otherwise, the check fails. The [Difficulty
Level](/crisis#difficulty) can be modified by adding or substracting from the
rolls resulting number.

!!! info "Check Failures"
    A failed check doesn't necessarily mean, that the check completely failed.
    E.g. when climbing, a failed check might simply mean, that there was no
    progress while climbing. Or a failed sailing check might mean, that the
    voyage takes a few days longer.

<div class="left" markdown="1">

### Critical Failures

If the Chance die comes up with a 1, and the **Task**'s die also comes up with a
1, the task critically fails.

A critical fail causes other penalties in addition to failing the check, such as
loss of resources, items, reputation etc.

</div>
<div class="right" markdown="1">

### Critical Successes

Whenever a die is rolled with its highest possible result (e.g. rolling a 10 on
a [d10](#d10)), the die *explodes*. This allows you to roll the die again, and
add the result to your check. A die can explode multiple times.

</div>
<div class="clearfix"></div>

### Contests

When two parties compete with each other in the same Skill or even different
Skills and stats, both parties have to roll. The party with the higher result
wins the contest. On a tie both parties roll again.

## Getting Started

Get started by reading the [Character Creation](/character/character-creation)
section.

## Glossary

[Action point](/crisis#actions)
:   AP, used for atomic actions in a crisis.

Base Value
:   A base value that's used for rolls or to determine values. It's the same for
all characters and creatures.

*Failure*{.qs-f}
:   This indicates, that a check failed or has to be failed for the described
outcome.

Roleplaying Circumstance
:   Usually added by a race, perks or flaws. Roleplaying circumstances include
prejudice, others liking or disliking you, being a known criminal, etc.

*Success*{.qs-s}
:   This indicates, that a check was succeeded or has to be succeeded for the
described outcome.

Weight
:   The minimum requirement of [Might](/character#might-mi) to *use* items.
Weight exceeding a character's [Might](/character#might-mi) imposes penalties.

## Abbreviations

<div class="dl-horizontal" markdown="1">
<div class="col-layout-start"></div>

* Attributes

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

* Acquisitions

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
:   [Credits](/equipment#credits)

HIT
:   [Hit bonus](/equipment/#weapons)

END
:   [Endurance damage](/equipment/#weapons)

DMG
:   [Health damage](/equipment/#weapons)

RNG
:   [Range](/equipment/#weapons)

MAG
:   [Magazines](/equipment/#weapons)

CAP
:   [Capacity](/equipment/#weapons)

RoF
:   [Rate of fire](/equipment/#weapons)

REL
:   [Reload](/equipment/#weapons)

* Crisis

AP
: [Action points](/crisis#actions)

<div class="col-layout-end clearfix"></div>
</div>
