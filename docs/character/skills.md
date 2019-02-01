# Skills

> [Skills][] abstract your character's education, hobbies and fields of
> expertise.

Anything your character does is a Task. A Task implies a die roll: it's subject
to chance and its outcome is uncertain.

### Skill Ranks

Every [Skill][] has either a [d4][], [d6][], [d8][], [d10][], or [d12][]
assigned to it.

Every [Skill][] has an **initial value** of a [d4][].

## Skill Rolls

Tasks require a [Skill][] check. Every check is done with a die roll. If the
roll is equal to or higher than the [Difficulty
Level](/crisis#difficulty)---**4** by default---the task succeeds. Otherwise, it
fails.

After you roll add all modifiers to your die roll and tell the GM your result.
The GM tells you if you succeeded or failed.

### Raises

**Combat only**{.block}
After a successful roll, divide the final roll by `4` and subtract `1`. This is
the amount of *Raises* you get for the check. An *Extra* improves certain
values, e.g. the damage you deal after a successful Attack. The *Raises* cannot
be lower than 0.

!!! summary "Skill Raises"
    <div class="formula formula-top formula-bottom">
        <span>Raises</span> =
        <span data-bracket-bottom="Final Roll with all modifiers">Roll / 4</span> -
        <span data-bracket-top="Base">1</span>
    </div>

!!! example "Raises"
    A character makes a **Light Weapon** check to Attack someone. His [Skill][]
    is a [d6][]. For the check he rolls `9` in total. `9` divided by `4` minus
    `1` results in 1 Extra.

### Skill Modifiers

Any modifier can influence the final roll for a [Skill][]. For example, bad
weather gives you a `-1` penalty, or having the right tool at hand might give
you a `+1` bonus. Modifiers make it harder or easier for a Task to succeed.

#### Skill Dice

Under some circumstances, a die can be modified beyond a [d12][] or below a
[d4][]. If it's increased beyond a [d12][], you gain a `+1` bonus on all checks.
If a [d4][] is decreased, you cannot use the [Skill][] anymore but for very
basic tasks.

#### Skill Familiarization

Most [Skills][] are very vaguely described and not very specific to simplify
character creation and gameplay. Sometimes you might want to emphasize however,
that a [Skill][] is dramatically different than how the character would normale
use it. In this case, the [Skill][] roll should suffer a `-2` penalty. For
exceptional knowledge about a certain topic, the GM may provide a `+2` bonus to
the roll.

### Skill Contests

Whenever two or more opponents pit against each other, e.g. rolling **Stealth**
versus **Perception**, they enter a Skill Contest.

In a Contest the opponents roll on their respective [Skills][]. The higher roll
wins the contest. On a tie, the active party wins.

## Improving A Skill

Raising a [Skill][] by 1, e.g. from **untrained** to a [d4][], or from a [d4][]
to a [d6][] costs 1 Skill Point. You cannot raise the [Skill][] above a [d12][],
nor decrease a [Skill][]. Increasing a [Skill][] higher than its associated
[Attribute][] costs 2 Skill Points instead.

## Aiding Others

Supporting another character requires you to roll the same [Skill][] check, but
with a [Difficulty Level][] of 4. A successful check adds a `+2` bonus to the
supported character's [Skill][] check.

There can be multiple supporters to increase the chance of someone succeeding on
the [Skill][] check, but the bonus doesn't stack.

Supporters can critically fail on their [Skill][] check. Each critical fail
imposes a `-2` penalty to the supported character's [Skill][] check.

## Skill Categories

Each [Skill][] is associated to an [Attribute][].

!!! tip "Available Skills"
    Like any other RPG system, Q* provides the GM and players with a set of
    [Skills][]. Neither the system nor characters are limited to these
    [Skills][]: if you require different [Skills][] to suite your needs, then
    add them to your game.

### Action

This category contains all [Skills][] that rely on might, speed, and have some
sort of physical interaction like running, swimming, climbing, shooting,
swinging a sword, etc.

<div class="qs-list-test full-width" markdown="1">

##### Athletics

is used for climbing, jumping, running, swimming, dodging, dodging away from
falling debris, etc.
<br>
With this [Skill][] being **untrained**, the character **cannot** swim.

| Climbing Modifier | Example                        |
|:-----------------:|--------------------------------|
|       `-2`        | Sparce or only thin handholds. |
|       `-2`        | Surface is slippery            |

##### Force

is used for breaching doors, break down treasure chests, holding doors shut etc.

##### Heavy Weapons

is used when using heavy weapons such as rocket launchers, vehicle mounted
machine guns, or firing any vessel's weapons.

##### Light Weapons

is used for ranged weapon attacks with weapons like bows, pistols, lasguns, etc.

##### Lockpick

is used to lockpick, break open vaults, break the combination to a safe, etc.

##### Melee

is used when using melee weapons or parrying a melee attack.

##### Operate

is used for driving, piloting or steering a vessel and remote controlling
drones. Specify which type of vessel your want to operate.

##### Stealth

is used to hide from others, sneak around, lockpicking, etc.
<br>
It's opposed by the **Search** [Skill][].

| Modifier | Example        |
|:--------:|----------------|
|   `+2`   | Crawling       |
|   `-2`   | Running        |
|   `+1`   | Dim Light      |
|   `+2`   | Darkness       |
|   `+4`   | Pitch Darkness |
|   `+2`   | Light Cover    |
|   `+4`   | Heavy Cover    |

</div>

### Knowledge

This category contains all [Skills][] that rely on education and intelligence,
like science, engineering, etc.

<div class="qs-list-test full-width" markdown="1">

##### Engineering

is used for repairing mechanical or electronical motors, operate advanced
machinery, etc.

##### Explosives

is used to handle and craft explosives, disarm mines, etc.

##### Linguistics

is used to decipher scripts, forge documents, etc.

##### Medicine

is used to determine the cause of a wound, provide insights on diseases and
sicknesses, [Healing](/crisis#healing) wounds, etc.

##### Politics

is used for insights in politics, history and behaviours of nations, peoples,
cities, gangs, groups, etc.

##### Science

is used for Anatomy, Biology, Chemistry, Computer, etc. checks.

##### Search

is used to actively search for hidden things.

##### Survival

is used to survive in the wilderness, find edible food, figure out where north
is, tracking animals and people, etc.

| Tracking Modifier | Example                        |
|:-----------------:|--------------------------------|
|       `+2`        | Tracking more than 5 creatures |
|       `+4`        | Recent snow                    |
|       `+2`        | Mud                            |
|       `+1`        | Dust                           |
|       `-4`        | Raining                        |
|       `-2`        | Dim Light                      |
|       `-2`        | Tracks are older than 1 day    |
|       `-2`        | Creature tried to hide tracks  |

</div>

### Social

This category contains all [Skills][] that rely on charisma and have some sort
of social interaction like bluffing, empathy, diplomacy, commerce,
intimidating, etc.

<div class="qs-list-test full-width" markdown="1">

##### Bluffing

is used for lying. This [Skill][] is opposed by **Empathy**.

##### Command

is used to command crews, give orders on a vessel, lead others, etc.

##### Commerce

covers appraising goods, bartering, haggling, etc. It's often used for [Spare
Time][] rolls when acquiring rare items.

##### Empathy

is used to determine if somebody is sad, lying, nervous, etc. It opposes
**Bluffing**.

##### Intimidate

is used to strike fear into somebody to get information, help, etc.

##### Perform

is used to act, dance, sing, etc.

##### Persuade

is used to sweaten the deal for somebody to get information, help, etc.

##### Tactics

is used to non-verbally communicate with party members in combat, tactically
breach into buildings or rooms, etc.

</div>

!!! tip "Intimidate and Persuade"
    The outcome of Intimidate and Persuade are often the same, but some people
    are easier to intimidate than to persuade, and vice versa.

--8<-- "_links.md"
