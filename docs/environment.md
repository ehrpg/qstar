# Environment

### Fatigue

An hazard can either cause your character to receive a fatigue point, or
directly deals damage to him. Fatigue points reduces your character's abilities
and can even kill him.

Fatigue is messured in steps, whereas each fatigue point progresses them by one.
A character becomes fatigued with one fatigue point; exhausted with 2 fatigue
points; and incapacitated with 3 fatigue points.

Fatigue points are accumulated across hazards.

#### Fatigued

All [Attribute][] rolls, [Skill][] rolls, etc. suffer a -1 penalty. If a
fatigued character receives another fatigue point, he becomes exhausted.

#### Exhausted

All [Attribute][] rolls, [Skill][] rolls, etc. suffer a -2 penalty. If an
exhausted character receives another fatigue point, he becomes incapacitated.

#### Incapacitated

The character becomes incapacitated and cannot act anymore. Depending on the
hazard, this state has different outcomes.

#### Recovery

Each Hazard lists how to recover from the accumulated fatigue points. If no
method of recovery is specified, then simply resting for 8 hours recovers a
single fatigue point.

## Hazards

### Cold

> All temperatures below 0°C (32°F) are considered severe cold.

Every four hours in severe cold requires you to make a [Body][] check with a
[Difficulty Level][] of 4. Each 4 [Cold][] DR adds +2 to the check. If the
character does not wear warm clothing the check suffers a -2 penalty. For every
10°C (18°F) below freezing you suffer a -1 penalty (max -3).

If you fail the check, you receive a fatigue point.

**Recovery**{.block} Warmth and shelter recovers one fatigue point received from
*Cold* every 30 minutes.
**Incapacitation**{.block} You have to make a [Body][] check every hour with all
modifiers listed above. On a failed check you die.

### Disease

Depending on the disease a fatigue point has different outcomes. The disease
also states the [Attribute][] used for the checks, the frequency of rolling on
the [Attribute][], the modifiers for each roll, and how it can be treated.

### Drowning

Every minute you have to make an [Athletics][] check. Depending on the water
this check suffers penalties or receives bonuses. A failed check adds one
fatigue point.

**Recovery**{.block} Every five minutes out of liquid substances you recover
from a fatigue point.
**Incapacitation**{.block} The character dies. Within five minutes a healer can
resuscitated the character with a [Medicine][] check and a -4 penalty on the
roll.

### Falling

Per 2 tiles (~3 meters, 10 feet) of falling the Damage you received is increased
by [1d6](#d6)+1. The maximum damage is [10d6](#d6)+10 at a falling distance
of 20 tiles.

You can roll an Athletics check, similar to [Dodging](/crisis#dodging), to treat
the fall 2 tiles less. For every [Raise][] you can treat the fall 2 tiles less.

An armor's [Physical][] DR does not block this kind of damage.

#### Jumping out a moving vehicle

Jumping out a moving vehicle is similar to falling. Per 10 km/h or 6 mp/h you
are considered to fall 2 tiles.

#### Terminal velocity

Sometimes the damage can be less, if for example the gravity is lower than
Earth's gravity. Othertimes, falling long enough distances can kill you
outright.

### Heat

> All temperatures above 32°C (90°F) are considered severe heat.

With enough water, you don't have to roll to avoid a fatigue point.

Without enough water, you have to roll a [Body][] check every four hours. Each
4 [Fire][] DR adds +2 bonus to the check.

**Recovery**{.block} A chaaracter receiving enough water recovers from one
fatigue point every hour.
**Incapacitation**{.block} After a day of incapacitation, the character dies of
dehydration.

### Hunger & Thirst

A character requires 1 [Ration](/equipment/util-misc/#ration) each day. Every
day where a character doesn't eat requires you to make a [Body][] check. Per
missed meal, starting from the first, you suffer a -2 penalty on the roll. On a
failed check you suffer a fatigue point.

**Recovery**{.block} One meal per day recovers one fatigue point. Food can be
administered to incapacitated characters by others.
**Incapacitation**{.block} A day after being incapacitated the character dies.

### Poison

Depending on the poison a fatigue point has different outcomes. The poison
also states the [Attribute][] used for the checks, the frequency of rolling on
the [Attribute][], the modifiers for each roll, and how it can be treated.

### Radiation

Radiation poisoning is a special kind of [Disease](#disease).

### Sleep

A (human) character requires at least 6 hours of sleep each day. Every day where
a character doesn't sleep requires you to make a [Body][] check. For each missed
sleep, starting from the first, you suffer a -2 penalty on the roll. On a failed
check you suffer a fatigue point. Any stimulant adds a +2 to the check.

**Recovery**{.block} Getting at least 6 hours of sleep recovers one fatigue
point.
**Incapacitation**{.block} Each hour the character has to make a [Soul][] check.
On a failed check, the character falls asleep for [2d6](#d6) hours.

--8<-- "_links.md"
