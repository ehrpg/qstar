# Introduction

Q* is an easy-to-learn and adaptable RPG system for games such as pen and paper
games. It's heavily enspired by great RPGs and RPG systems such as Divinity:
Original Sin, Dungeons & Dragons, Mindjammer, Fragged Empire, Savage Worlds, How
to be a hero, etc.

It aims to provide an RPG system that's usable for any kind of play and for any
setting such as medieval, fantasy, modern, sci-fi settings or even a combination
of any of these, although the base rule set is built with mainly modern and
sci-fi settings in mind.

[Skills][], [Traits][], [Perks][], [Flaws][], [Races][], and [Equipment][] are
heavily influenced by the setting.

## Preface

### Reading the rules

Terms that are game related, e.g. "[Skills][]", or "Crisis", are either easily
recognisable by an icon, are links, or are in uppercase.

Distances, Pace, Range, etc. are all refering to tiles. A tile spans roughly 5
feet or 1,5 meters in the "real world".

### Terminology

"Increases" and "decreases" changes the inherent value of e.g. a [Skill][]. It's
changed for all circumstances, just as if a character would have improved the
[Skill][].

"Receive a bonus" and "suffer a penalty" only lower a single roll, not a value.
They refer to [Modifiers](/character/skills/#skill-modifiers).

## Prerequisites

### Dice

All players and the GM need one of each of the following dice: a [d4][], a
[d6][], a [d8][], a [d10][] and a [d12][].

A GM should also have a d20 and a d100 to roll on random tables.

## Basics

<div class="content" markdown="1">
<table>
<tbody>
<tr>
<td><i class="game-icon-d12"></i></td>
<td>
Every character uses a [d4][], [d6][], [d8][], [d10][] and a [d12][] for
everything he's doing. Every roll is made with a single die, with exception of
damage rolls. The more sides the die has the better the chance on rolling
**higher**, which is **better**.
</td>
</tr>
<tr>
<td>7.5</td>
<td>
All fractions are **always** rounded down. When an [Attribute][] or [Skill][]
is divided, divide the number of sides of the die. Flat modifiers are added to
the sides of the die before the sides are divided.

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
Some values cannot be negative, e.g. [Resources][]. The minimum value is always
0, unless otherwise stated.
</td>
</tr>
<tr>
<td><i class="game-icon-tornado"></i></td>
<td>
Most of the formulas and values can be influenced by circumstance, such as
racial traits, talents, equipment, environmental factors such as bad or
particularly good visibility, wind, etc.
</td>
</tr>
</tbody>
</table>
</div>

### Dice

A die roll is described by expressions such as `3d6+12`. This expression means
"roll three six-sided dice add them together, then add 12". The first number
indicates the amount of dice that have to be rolled. The number after the `d`
indicates how many sides the individual die has to have. Anything after that
indicates if you add or substract the specified value from the die roll.

A [d%][] is called percentile die. You roll two ten-sided dice (or `2d10`).
Before you roll, designate one of the two to be the tens digit; the other is
ones digit. Two 0s represent 100.<br>
There are also percentile dice, where one of the two already shows the tens,
which makes rolling a bit easier.

#### Natural Rolls

A *natural* roll is an unmodified roll. It's the numbers you see printed on the
dice you rolled, without adding any bonuses or substracing any penalties.

#### Critical Failures

Whenever a die is rolled and shows a `1`, the die *implodes*. Roll again; if
it's another `1` the check critically fails. Otherwise add your modifiers to
your first roll, the `1`. The check can still succeed this way, provided you
have enough positive modifiers.

A critical fail can not be prevented by any means, and the character has to
suffer the consequences of the outcome.

#### Critical Successes

Whenever a die is rolled with its highest possible result (e.g. rolling a 10 on
a [d10][]), the die *explodes*. This allows you to roll the die again, and add
the result to your check. A die can *explode* multiple times.

!!! summary "Exploding Dice"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="6">[d6][]</span> +
        <span data-bracket-top="6">[d6][]</span> +
        <span data-bracket-bottom="3">[d6][]</span> =
        <span data-bracket-top="Result">15</span>
    </div>

### Task Difficulty

Any task's [Difficulty Level](/crisis#difficulty) is usually 4. If a Task is
exceptionally difficult or easy, the [Difficulty Level](/crisis#difficulty) can
be adjusted by the GM.

A check has to be equal to or higher this [Difficulty Level](/crisis#difficulty)
in order to succeed. Otherwise, the check fails. Circumstances modify the check
positively or negatively.

!!! info "Check Failures"
    A failed check doesn't necessarily mean, that the check completely failed.
    E.g. when climbing, a failed check might simply mean, that there was no
    progress while climbing. Or a failed sailing check might mean, that the
    voyage takes a few days longer.

### Contests

When two parties compete with each other in the same Skill or even different
Skills and stats, both parties have to roll. The party with the higher result
wins the contest. On a tie both parties roll again.

Typical contests are: Melee attack vs. Parrying, Bluffing vs. Empathy, Stealth
vs. Perception.

### Modifiers

There are different types of modifiers that can influence almost any value in
the game. Modifiers are described by different types and origins. An origin
describes where modifier is coming from, e.g. an item, a race, weather, etc. The
type describes how the modifier influences the value.

If multiple modifiers have the same type and the same origin, they do not stack;
in that case only the highest bonus or penalty counts. Multiple modifiers of a
different type or origin stack. The modifier types are:

* Enhancement modifier,
* Morale modifier,
* Racial modifier, and
* Circumstancial modifier; this is the default if no type is named.

!!! example "Modifier types and origins"
    A modifier origin could be an Asset, e.g. Climbing Gear, and its modifier
    type is Circumstancial. A dwarf may get a positive modifier for knowledge
    about stones; the modifier origin is the race (dwarf) and its type is
    Racial.

### Multipliers

If you multiply dice, roll the dice a number of times specified by the
multiplier, e.g. for [d4][] times 2 you roll [2d4](#d4), and add the result
together. Multiplying modifiers works as usual, e.g. a `+2` times 2 becomes a
`+4`.

Multiple multipliers don't multiply each other. E.g. two doubles result in a
triple, not a quadruple. Each extra multiple adds 1 less than its value to the
first multiple. E.g. a triple times a double would result in a quadruple (`×3 +
×1 = ×4`).

--8<-- "_links.md"
