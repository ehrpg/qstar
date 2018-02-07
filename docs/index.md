# Q*

Q* is the working title for a bunch of modifications for the Endless Horizons
Pen & Paper game.

## Introduction

You will need a game master, someone who is willing to run and guide the game,
and at least two other players. Furthermore you will need a pencil, eraser, and
some paper. To play you also need a few six sided dice (d6).

## Abilities

Each character, NPC or even monster is defined by four abilities and describe
their physical and mental capabilities.

!!! important
    Any character starts with 12 points which can be distributed amongst the 4
    abilities.

    Abilities range from 0 to 5.

An ability rating of 0 means impairement of some
kind, while a rating of 5 means that the character is extremely powerful with
that ability.

Abilities are used to:

* determine if certain perks or flaws can be taken,
* add bonuses to skills,
* and if an action can be attempted or not.

### Might

**Might** (MI) represents the characters physical **strength** and
**resilience**. [Endurance](#endurance) and [health](#health) are derived from
might. Your melee weapon damage also derives from might.

### Speed

**Speed** (SP) measures the characters reflexes and hand-eye coordination. It is
used for subversive actions (such as sneaking, or lock picking) and is used to
**better hit** with melee weapons and ranged weapons.

### Intelligence

**Intelligence** (IN) describes how well your character learns new things, and
how well he remembers already existing things. It is a key factor in skills like
hacking, medicine or engineering.

### Charisma

**Charisma** (CA) represents the characters physical attractiveness, force of
personality and his ability to lead. It is mostly used in **social
interactions** between characters and NPCs.

## Pools

Each creature has two pools: [Endurance](#endurance) and [health](#health).
Objects only have a [health](#health) pool.

### Endurance

*Endurance represents the characters short time well being and constitution.*

[Endurance](#endurance) is determined by rolling a number of dice equal to your
[Might](#might) **rank** and then adding the base [endurance](#endurance) pool
of your race to the results. Which dice are rolled is also determined by the
race.

[Endurance](#endurance) recovers completely once the character has had enough
time to rest (usually resting eight hours) without interruptions. Whenever you
permanently increase or decrease [Might](#might) you must roll the
[endurance](#endurance) dice and add or subtract that value from your
[endurance](#endurance) pool.

A character that reaches zero [endurance](#endurance) is **incapacitated**.

!!! summary "How to determine *Endurance*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    <a href="#endurance" class="qstar-electric">Endurance</a>
    =
    <span data-bracket-bottom="base (race)">15</span>
    <span style="margin-left: 12px;">+</span>
    <span data-bracket-top="might rank" style="margin-left: 12px;">n</span>
    *
    <span data-bracket-bottom="endurance die (race)">d10</span>
    </div>

### Health

*Health represents the overall long-term physical health and well being of a
character. Severe wounds, illness and temporary handicaps (such as broken arms
or legs) are abstracted away in the health pool.*

[Health](#health) is determined by rolling a number of dice equal to your
[Might](#might) **rank** and then adding the base [health](#health) pool of your
race to the results. Which dice are rolled is also determined by race.

[Health](#health) cannot recovered by resting, and requires external methods
(medicine, first aid etc.) to recover. Whenever you permanently increase or
decrease [Might](#might) you must roll the [health](#health) dice and add or
subtract that value from your [health](#health) pool.

If [health](#health) drops to zero, the character is killed.

!!! summary "How to determine *Health*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    <a href="#health" class="qstar-heart-beats">Health</a>
    =
    <span data-bracket-bottom="base (race)">5</span>
    <span style="margin-left: 12px;">+</span>
    <span data-bracket-top="might rank" style="margin-left: 12px;">n</span>
    *
    <span data-bracket-bottom="health die (race)">d6</span>
    </div>

## Skills

Skills are areas of expertise a character may acquire throughout the
course of gameplay. Whenever a character attempts a task a skill roll
is involved.

A skill has five ranks: **untrained**, **proficient**, **trained**,
**experienced**, **master**. Each rank provides additional bonuses to skill
checks and allows the selection of additional [perks](#perks).

| Rank        | Skill Bonus |
|-------------|------------:|
| Untrained   |          -2 |
| Proficient  |          +0 |
| Trained     |          +1 |
| Experienced |          +2 |
| Master      |          +4 |

Each skill is associated with an attribute. Ability modifiers are used
from the corresponding associated skill. Every character starts with
every skill at the untrained level.

In addition to abilities and skills, skill checks also receive a bonus or
drawback from roleplaying. Good roleplay should be rewarded by awarding a bonus
to the skill check, while bad roleplay or none at all should impose a penalty.

Skills impose penalties or add bonuses to the outcome when you either roll two
ones or two sixes on any skill check. These only apply however, if the skill
itself fails or succeeds. Rolling two ones or sixes does not automatically make
you fail or succeed on the task. The [available skills](#available-skills) list
some examples of additional outcomes.

!!! summary "How to make a **skill check**"
    <div class="formula formula-top formula-bottom">
    Skill check =
    <span data-bracket-bottom="base">3d6</span>
    ±
    <span data-bracket-top="modifier">ability</span>
    ±
    <span data-bracket-bottom="bonus">skill</span>
    ±
    <span data-bracket-top="-2 to +2">roleplay</span>
    </div>

!!! tip "Roleplaying bonuses"
    You, as a DM, can allow players to completely ignore a skill check / DC if
    they are roleplaying very well and/or playing to their characters strengths
    and weaknesses.

    Also, a task that's trivial or that's so easy for a character that she
    doesn't have to roll if the roleplay bonus was 0, can be skipped as well,
    even if no roleplaying is done.

### Tasks

Often characters perform tasks such as repairing, shooting or flying a space
craft. It is the game masters job to come up with a difficulty check (**DC**).
These DCs are recognized by the following categories:

| Name      |    DC |
|-----------|------:|
| Very easy |   1-8 |
| Easy      |  9-12 |
| Moderate  | 13-15 |
| Hard      | 16-17 |
| Very Hard |   18+ |

If a skill check meets or exceeds the set **DC** the skill check is
*successful*{.qs-s}. If the skill check is less than the **DC** the
skill check is a *failure*{.qs-f}.

!!! summary "Succeeding and failing a task"
    Skill check ≥ Task DC ⇒ *success*{.qs-s}

    Skill check < Task DC ⇒ *failure*{.qs-f}

#### Aiding

At the game masters discretion, it is possible for one or more characters to aid
another in an upcoming task. A character has to perform a relevant skill check,
not necessarily the same, and beat a fixed DC of `10`. If the character's skill
check is successful, the assisted player gains `+1` to their skill check.

#### Competing

When two characters, or a character and an NPC, pitch their skills against each
other both roll the respective skills. Whoever has the highest skill check wins.
On a tie the participant on the defensive side wins. If there is no defensive
participant, reroll until a winner is decided.

#### Retrying

A skill check can be rolled for again if a character failed at it. The character
can attempt the skill check again. If the skill check happens shortly after the
previous one, the skill check is rolled with a `-4` penalty.

## Perks & Flaws

[Perks](#perks), and [flaws](#flaws), are gained through your race and give your
character special abilities or drawbacks. [Perks](#perks) and [flaws](#flaws)
aim at making a character more unique. It is up to the game master whether
[perks](#perks) or [flaws](#flaws) can be freely purchased.

### Perks

[Perks](#perks) add positive modifiers, make a character better or enable
certain actions. [Perks](#perks) have requirements and require Credits to be
unlocked. A game master may also give them out based on experience throughout
game play, or based on a characters background story.

### Flaws

[Flaws](#flaws) reduce values, make a character weaker or disable certain
actions. Usually [flaws](#flaws) can't be taken freely while playing.
[Flaws](#flaws) should be chosen during character creation with the GMs help, or
assigned to by the character while playing. Also, each [flaw](#flaws) awards a
benefit in return, but can also give Credits to the character instead.

## Improving your character

Characters are not improved by experience but by spending time and money.
Money can buy time at the gym, implants and most importantly training
lessons for skills.

### Abilities

Abilities can only be increased or lowered at the GM's discretion, or as a
temporary or permanent effect from adventuring (such as scars, wounds, etc.).

Improving an ability costs `100 000` Credits per point added. You don't gain
Credits from an ability being lowered.

### Skills

Improving skills can usually be done at any time in the adventure, while the
character has some downtime, i.e. while resting or in between adventures.

Improving a skill costs:

| New Rank    | Rank level |   Cost |
|-------------|-----------:|-------:|
| Untrained   |          0 |      0 |
| Proficient  |          1 |  1 000 |
| Trained     |          2 |  4 000 |
| Experienced |          3 | 25 000 |
| Master      |          4 | 82 000 |

Formula: `cost = ((x - 1) ^ 3) * 3000 + 1000`

Buying [perks](#perks) may be done at any time, and the [perks](#perks)
description lists the price.

## Combat

### Actions in Combat

#### Kneel Down #### {.dt}

gives a +1 bonus to ranged [attacks](#attack).
<br>
**Requires**: 1 action

#### Move #### {.dt}

allows you to change your position on the battlefield, unless otherwise
impaired.
<br>
**Requires**: 1 action

#### Prone #### {.dt}

gives a +2 bonus to ranged [attacks](#attack).
<br>
**Requires**: 1 action to lie down and 2 actions to change stance from being
prone.

#### Take Aim #### {.dt}

converts the lowest *1d6*{.qs-1d6} of your weapon attack to a six, resuling in a
critical hit, if the attack hits. If two ones are rolled, the negative effect of
the failed skill still apply, if the attack *misses*{.qs-f}. If the target
moves, all accumulated bonuses are lost.
<br> **Requires**: 2 actions, multiple uses stack

#### Take Cover #### {.dt}

gives you additional bonuses based on the [cover](#cover) the character is
behind.
<br>
**Requires**: usually part of a move action

#### Use Item #### {.dt}

allows you to perform the action defined by the item.
<br>
**Requires**: variable, defined by item

#### Use Skill #### {.dt}

allows you to use any skill in combat.
<br>
**Requires**: usually 1 action, depends on the skill use.

### Conditions

#### Drunk #### {.dt}

gives a -2 penalty to all skill checks.

#### Incapacitated #### {.dt}

makes a character unable to act and interact, usually acquired through the
characters [endurance](#endurance) dropping to 0. Incapacitated doesn't
necessarily mean, that the character is unconcious.

#### In cover #### {.dt}

gives you additional bonuses based on the [cover](#cover) the character is
behind.

#### Prone #### {.dt}

gives a +2 bonus to ranged [attacks](#attack). You do not gain any bonuses to
defensive or offensive melee skill checks.

#### Stunned #### {.dt}

gives a -5 penalty to all checks.

### Defence

Any attack roll has to be equal to or exceed a creatures defence value. The
defence value of a creature is described by its speed and cover. If the target
is attacked in melee combat, the defence value equals the targets melee skill
check result.

!!! summary "How to determine *Defence*"
    <div class="formula formula-top formula-bottom">
    Defence = <span data-bracket-bottom="base">10</span>
    +
    <span data-bracket-top="modifier">Speed</span>
    +
    <span>Cover</span>
    </div>
    <div style="text-align: center;">or</div>
    <div class="formula formula-top formula-bottom">
    Defence (melee) = <span data-bracket-top="skill check">3d6 + skill modifiers</span>
    </div>

#### Cover

Cover provides vital bonuses to the creatures defence.

| Cover       | Bonus | Notes                                                                        | Example                                                        |
|-------------|------:|------------------------------------------------------------------------------|----------------------------------------------------------------|
| Light Cover |    +2 | -2 [endurance damage](#damage)<br>Allows Stealth                             | Foliage, Smoke, Low Light                                      |
| Heavy Cover |    +4 | -4 [endurance damage](#damage)                                               | Complete darkness, Chest high inpenetrable wall                |
| Entrenched  |    +6 | -6 [endurance damage](#damage)<br>immunity to [critical hits](#critical-hit) | Combined through Low and Heavy Cover, behind solid metal doors |

!!! info "Immunity to [critical hits](#critical-hit)"
    The immunity does not apply for weapons that bypass cover, such as grenades
    thrown right into the cover. The bonus from cover still applies to defence
    however.

    The DM may decide that the bonus to cover does not apply.

### Attack ![](){ .qstar-crosshair }

Any attack roll is done using a weapon and its related skill. Attacks beyond a
weapons effective range impose penalties to the attack roll.

Some weapons allow multiple shots to be fired, denoted by the
[RoF](./equipment?rof#stats) value of a weapon. If a weapons
[RoF](./equipment?rof#stats) value is higher than one, additional shots **may**
be fired to increase the hit chance and [critical hit](#critical-hit) chance.

!!! note "RoF Example"
    If a weapon has a [RoF](./equipment?rof#stats) value of 2, you may fire an
    extra bullet and add **1d6** to your attack, resulting in **4d6** total.

If the [attack](#attack) is equal to or higher than the targets **defence**
attack is *successful*{.qs-s}.

If the [attack](#attack) is less than the targets **defence** value the attack
*fails*{.qs-f}.

On a hit you can deal [damage](#damage) and potential [critical
damage](#critical-damage).

!!! summary "How to roll an *Attack*"
    <div class="formula formula-top formula-bottom">
    Attack = <span data-bracket-bottom="base">3d6</span>
    +
    <span data-bracket-top="'hit' value">weapon</span>
    +
    <span data-bracket-bottom="for the used weapon">skill</span>
    +
    <span data-bracket-top="per RoF &gt; 1">1d6</span>
    -
    <span>range penalty</span>
    </div>

### Damage ![](){ .qstar-gunshot }

*Damage is dealt by environment, traps or simply by successful attacks from
creatures and characters.*

Armour provides [DR](./equipment#damage-reduction) (damage reduction). If a
targets [DR](./equipment#damage-reduction) is higher than the inflicted damage,
they don't take any damage at all (except for [critical
damage](#critical-damage)).

Normal damage always targets [endurance](#endurance) first, called [endurance
damage](#damage). If [endurance](#endurance) is zero, all exceeding and
subsequent damage is dealt to [health](#health) instead, called [health
damage](#damage).

Damaging objects is the same as damaging another player or NPC, except that
inanimate objects have no [endurance](#endurance), just [health](#health).

!!! summary "Damaged characters"
    If [endurance](#endurance) drops to zero the character becomes
    **incapacitated**.<br> If [health](#health) drops to zero the character is
    **dead**.

#### Critical Hit

Whenever you roll for an attack and **hit**, every **6** you rolled with a
**d6**, including extra dice from [RoF](./equipment?rof#stats), causes
additional [critical damage](#critical-damage).

#### Critical Damage ![](){ .qstar-headshot-2 }

[Critical damage](#critical-damage) inflicts additional damage to the health
pool, even if the targets [endurance](#endurance) isn't at 0 yet.

[Critical damage](#critical-damage) is also reduced by the targets
[DR](./equipment#damage-reduction), but cannot be less than 1. Every critical
hit deals at least 1 damage, disregarding any armour the target may have.

Each weapon specifies its own [critical damage](#critical-damage).

### Status

#### Incapacitated

A creature becomes incapacitated once its
[endurance](#endurance) drops to zero. An incapacitated
creature needs some time (at least a few minutes, up to hours) to become
concious again.

Most of the time an incapacitated creature needs medical attention to regain
conciousness.

#### Dead

A creature is dead if its [health](#health) drops to zero.

## Crisis

Whenever time and order of action is of critical concern a **crisis** starts.
Combat is always a crisis, but other dangerous situation are also considered
a crisis, such as escaping a space ship that is about to explode. What
constitutes a crisis is always up the game master.

### Turn order ![](){ .qstar-sprint }

When a crisis starts, all involved have to determine their turn order. Roll 3d6
and add your [Speed](#speed){ .qstar-wingfoot } and
[Intelligence](#intelligence){ .qstar-brain } modifiers to the result.
[Perks](#perks) and [flaws](#flaws) may give additional bonuses or penalties to
[initiative](#turn-order){ .qstar-sprint }. Players, NPCs and monsters start in
the order of the highest [initiative](#turn-order){ .qstar-sprint } to lowest.
In case of a tie the person with the highest die result wins. If there is still
a tie roll again.

!!! summary "How to determine *turn order*"
    <div class="formula formula-top formula-bottom">
    [Turn Order](#turn-order){ .qstar-sprint }
    =
    <span data-bracket-bottom="base">3d6</span>
    ±
    <span data-bracket-top="modifier">
      <a href="#speed" class="qstar-wingfoot">Speed</a>
    </span>
    ±
    <span data-bracket-bottom="modifier">
      <a href="#intelligence" class="qstar-brain">Intelligence</a>
    </span>
    ±
    <span data-bracket-top="external factors">
      Circumstance
    </span>
    </div>

## Actions

Once it is a players turn in a crisis, he or she may do **two actions**. An
action takes a small amount of time, and may involve a skill check. The game
master may decide that a task takes more than one action, or even takes a couple
of rounds. Any number of actions may be converted to **ready actions**. These
are specific conditions set by the player that trigger when an external event
occurs. If the condition does not occur before his or her next turn, the **ready
action** is lost.

Everything you do in a crisis as part of an action is almost all of the time
solvable through a skill check. Movement in combat is done through
**Athletics**, hitting an enemy with a sword through **Melee** or getting a
blast door open uses **Hacking**.

### Free Actions

A game master may also decide that something takes so little time, that it does
not count towards the players amount of actions in that round. These actions are
called **free actions**. For example, the game master may decide that letting go
of a ledge takes no time and is thus a **free action**.

### Reactions

Reactions are skill checks that a player or NPC must make upon the
request of the game master. Reactions are triggered by external
events, and may happen out of turn for the player. The game master
sets a DC and a skill, which the player has to succeed or face certain
consequences. These reactions do not detract from the player or NPCs
available actions on his turn.

!!! note "Example"
    Two players climb a mountain side. One player fails his athletics check,
    slips and falls. The other player may receive a reaction to catch him.
    Should he fail his friend falls, and if he succeeds he may help is friend to
    gain footing again.

## Making a character

### First: Choose a race

Q* supports multiple races, but your game master may restrict them as necessary.
Races define basic attributes, and may grant you perks from the get go. All
races are balanced, with some having slight benefits which are weighed out by
drawbacks in other areas.

Select a race, and note their starting abilities, perks and flaws on your sheet
of paper.

#### Human

Humans are the versatile race of Q*, with having no obvious benefits or
drawbacks. They are suitable for all kinds of game play.

| Human          | Value |
|----------------|------:|
| Might          |     5 |
| Speed          |     5 |
| Intelligence   |     5 |
| Charisma       |     5 |
| Base Endurance |    15 |
| Base Health    |     5 |
| Endurance      |   d10 |
| Health         |    d6 |
| Perks          |     - |
| Flaws          |     - |

### Second: Make adaptions

The game master hands out starting money to all players. Use these funds to
purchase increases in abilities, skills or even [perks](#perks). If your game
master allows it, you can take [flaws](#flaws) and decrease abilities to
increase your starting fund. If you decrease an ability you gain as much money
as it would have cost you to increase that ability to the old value.

You should increase relevant attributes, and buy ranks in the skills that best
suit your character.

### Third: Roll Endurance and Health

Use your races [endurance](#endurance) and [health](#health) die, and your new
[Might](#might) **rank** to roll [endurance](#endurance) and [health](#health).
Note these values on your character sheet.

### Fourth: Buy equipment

Last but not least buy equipment that suits your character. See
[equipment](./equipment).
