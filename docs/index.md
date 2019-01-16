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

"Receive a bonus" and "suffer a penalties" only lower a single roll, not a
value. They refer to [Modifiers](/character/skills/#skill-modifiers).

## Prerequisites

### Dice

All players and the GM need at least one pair of a [d%][], called percentile
dice, or two ten-sided dice.

## Basics

<div class="content" markdown="1">
<table>
<tbody>
<tr>
<td><i class="game-icon-rolling-dices"></i></td>
<td>
Every character uses a [d%][] (or two [d10][]s) for everything he's doing.
Rolling **lower** is **better**.
</td>
</tr>
<tr>
<td>7.5</td>
<td>
All fractions are **always** rounded down.
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
multiplier, e.g. for `d%` times 2 you roll `2d%`, and add the result together.
Multiplying modifiers works as usual, e.g. a `+2` times 2 becomes a `+4`.

Multiple multipliers don't multiply each other. E.g. two doubles result in a
triple, not a quadruple. Each extra multiple adds 1 less than its value to the
first multiple. E.g. a triple times a double would result in a quadruple (`×3 +
×1 = ×4`).

--8<-- "_links.md"
