# Introduction

Q* is an easy-to-learn and adaptable RPG system for games such as pen and paper
games. It's heavily enspired by great RPGs and RPG systems such as Divinity:
Original Sin, Dungeons & Dragons, Mindjammer, Fragged Empire, Savage Worlds, How
to be a hero, etc.

It aims to provide an RPG system that's usable for any kind of play and for any
setting such as medieval, fantasy, modern, sci-fi settings or even a combination
of any of these, although the base rule set is built with mainly modern and
sci-fi settings in mind.

## Prerequisites

### Dice

All players and the GM need one of each of the following dice: a [d4](#d4), a
[d6](#d6), a [d8](#d8), a [d10](#d10) and a [d12](#d12).

A GM should also have a d20 and a d100 to roll on random tables.

## Basic Mechanics

<div class="content" markdown="1">
<table>
<tbody>
<tr>
<td><i class="qstar-d12"></i></td>
<td>
Every character uses a [d4](#d4), [d6](#d6), [d8](#d8), [d10](#d10) and a
[d12](#d12) for everything he's doing. Every roll is made with a single die. The
higher the die, the better the chance on rolling **higher**, which is
**better**.
</td>
</tr>
<tr>
<td>7.5</td>
<td>
All fractions are **always** rounded down.
When a [Skill][] is divided, divide the number of sides of the die. Flat modifiers
are added to the sides of the die before the sides are divided.

!!! example "Skill Fraction"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="15">( d12 + 3 )</span> /
      <span data-bracket-top="divisor">2</span> =
      <span data-bracket-bottom="result">7</span>
    </div>
</td>
</tr>
<tr>
<td>-1</td>
<td>
Some values cannot be negative, e.g. [Resources][]. If such a value were to drop
to below 0, it either prohibits certain actions, it has **consequences** or it's
simply ignored and the value set to 0.
</td>
</tr>
<tr>
<td><i class="qstar-tornado"></i></td>
<td>
Most of the formulas and values can be influenced by circumstance, such as
racial traits, talents, equipment, environmental factors such as bad or
particularly good visibility, wind, etc.
</td>
</tr>
</tbody>
</table>
</div>

## Die Rolls

There are three different kinds of die rolls:

* **Skill** rolls, which include Attack rolls,
* **Damage** rolls, and
* **Random** rolls.

All creatures are defined by their [Skills][], which are used for all **Skill**
and **Damage** rolls. **Random** rolls use the random table's corresponding
dice.

### Task Difficulty

A task's [Difficulty Level](/crisis#difficulty) is **always** 4. The only
exceptions are combat values, such as parrying.

A check has to be equal to or higher this [Difficulty Level](/crisis#difficulty)
in order to succeed. Otherwise, the check fails. Circumstances modify the check
positively or negatively.

!!! info "Check Failures"
    A failed check doesn't necessarily mean, that the check completely failed.
    E.g. when climbing, a failed check might simply mean, that there was no
    progress while climbing. Or a failed sailing check might mean, that the
    voyage takes a few days longer.

### Critical Failures

If the die for a Skill roll comes up with a **1**, it critically fails.

A critical fail can not be prevented by any means, and the character has to
suffer the consequences of the outcome.

### Critical Successes

Whenever a die is rolled with its highest possible result (e.g. rolling a 10 on
a [d10](#d10)), the die *explodes*. This allows you to roll the die again, and
add the result to your check. A die can *explode* multiple times. If a **1**
comes up while the die is exploded, the check does not critically fail.

### Contests

When two parties compete with each other in the same Skill or even different
Skills and stats, both parties have to roll. The party with the higher result
wins the contest. On a tie both parties roll again.

--8<-- "_links.md"
