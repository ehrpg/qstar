# Q*

Q* is the working title for a bunch of modifications for the Endless Horizons
Pen & Paper game.

## Introduction

You will need a game master, someone who is willing to run and guide the game,
and at least two other players. Furthermore you will need a pencil, eraser, and
some paper. To play you also need a few six sided dice (d6).

## Abilities

Each character, NPC or even monster is defined by four abilities.

Abilities have ranks going from 1 to 10. Five (5) is the average, conferring
neither a benefit nor a drawback. Every point below or above five grants an
additional benefit. This benefit is called **ability modifier**:

| Ability  |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |   10  |
|----------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Modifier |   -5  |   -4  |   -3  |   -2  |   -1  |   +0  |   +1  |   +2  |   +3  |   +4  |   +5  |

If an ability drops to zero, the character dies.

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
**experienced**, **master**. The ranks are numbered 1 (untrained) through 5
(master) respectively. Each rank provides additional bonuses to skill checks and
allows the selection of additional [perks](#perks).

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

### Aiding

At the game masters discretion, it is possible for one or more characters to aid
another in an upcoming task (henceforth called the *main task*). The players
aiding must be able to declare, and be able to perform the aid before the main
task is attempted (i.e. rolled for). Then they must perform the same skill check
(consuming an action) within their turn. Every *success*{.qs-s} of those aiding
translates into a tangible benefit for the main task. Such benefits could
include (but are not limited to):

* Better outcome of the main task, such as less time or materials used.
* A lowered difficulty for the main task.

The actual benefits bestowed upon the main task are up to the game
master. Players should state beforehand what they are trying to
achieve by helping, for example making sure that the player who
performs the main task succeeds more easily, or that the task is done
faster. This helps the GM to design any potential benefits.

Game masters may also demand that a task is not doable alone, for
example moving furniture that is too heavy to be moved by just one
character, or a high enough wall that requires help from another to
successfully climb.

### Competition

When two characters, or a character and an NPC, pitch their skills against each
other both roll the respective skills. Whoever has the highest skill check wins.
On a tie the participant on the defensive side wins. If there is no defensive
participant, reroll until a winner is decided.

### Multiple Successes

<p style="text-decoration: line-through">If a character has more than one die
for a specific skill available, more than one action may be attempted at the
same time using that skill. The DM sets the amount of successes required and
adjusts the DC accordingly. There is still only one DC for all actions, but now
the player has roll multiple successes using the available dice.</p>

!!! info "Example"
    Mary is a good pilot and thus has 3 dice available and an ability modifier
    of +3. Her ship is under attack, and she wants to deploy counter measures at
    the right moment, and then make a sharp evasive manoeuver. As she has three
    dice, she may make those two actions at the same time. The GM decides on a
    DC of 6 and Mary rolls: 4 3 6. She expends two ability modifiers to make the
    4 a success and thus succeeds at the task.

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

Downgrading abilities may only be done at the GMs discretion, or as a temporary
or permanent effect from adventuring (such as scars, wounds, etc.).

Improving an ability costs:

| New Rank |      Cost |
|----------|----------:|
| 1        |  -512 000 |
| 2        |  -162 000 |
| 3        |   -32 000 |
| 4        |    -2 000 |
| 5        |         0 |
| 6        |     2 000 |
| 7        |    32 000 |
| 8        |   162 000 |
| 9        |   512 000 |
| 10       | 1 250 000 |

Formula: `cost = abs(mod) ^ 4 * 2000`

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
    If [endurance](#endurance) drops to zero the character
    becomes **incapacitated**.<br> If [health](#health) drops to zero the
    character is **dead**.

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

When a crisis starts, all involved have to determine their turn order. Roll a 6
sided die (d6) and add your [Speed](#speed){ .qstar-wingfoot } and
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
    <span data-bracket-bottom="base">1d6</span>
    ±
    <span data-bracket-top="modifier">
      <a href="#speed" class="qstar-wingfoot">Speed</a>
    </span>
    ±
    <span data-bracket-bottom="modifier">
      <a href="#intelligence" class="qstar-brain">Intelligence</a>
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

## Available Skills

The following skills are available in the base system of Q*:

### Might Skills

#### Athletics #### {.dt}

is used to perform actions such as jumping, climbing, tumbling, lifting,
dragging or rope walking. Extra ability modifiers may be spent on completing a
task faster, or to avoid extra falling damage in case of controlled jumps.
Athletics is also used to move out of harms way. It can be used to dodge hazards
such as a falling debris.

#### Breaching #### {.dt}

is used to break open containers, doors, etc. Some Things cannot be breached
without proper tools, explosives or other aids. 

#### Melee #### {.dt}

is the skill involved with all sorts of melee weapons, such as blades, axes,
clubs or bare fists and kicks. Extra ability modifiers can be used to purchase
extra damage (1 modifier per point) or extra critical damage (1 modifier per two
points). It's also used for defending against a melee attack, either by
deflecting, blocking or dodging an attack.

#### Micro Gravity #### {.dt}

is the skill that replaces **Athletics** in micro gravity environments. It is
used to manoeuvre in such weightless conditions.

### Speed Skills

#### Driving #### {.dt}

allows someone to steer land or sea based vehicles, such as cars, motorcycles
and tanks.

#### Heavy Weapons #### {.dt}

allows operations of heavy or stationary guns. Such guns are usually mounted
turrets on ships and tanks, but can also be land based artillery or very large
man portable weapons such as rocket launchers or guided missile platforms.
Extra ability modifiers can be spend on either extra normal (1 modifier per
point) or critical damage (1 modifier per two points).

#### Light Weapons #### {.dt}

is used to operate firearms such as pistols, rifles, or shotguns. Light weapons
also applies to man portable weapons such as grenade launchers or light machine
guns. Extra ability modifiers can be spent on extra damage. Extra ability
modifiers can be spend on either extra normal (1 modifier per point) or critical
damage (1 modifier per two points).

#### Lockpicking #### {.dt}

is used for opening closed locks. Some doors cannot be lockpicked, some may
require additional tools such as special lockpicking tools, others can be used
by opened *by hand*. The skill assumes, that the character has simple,
improvised tools to pick locks. Lockpicking is also used to break into objects
such as safes.

#### Piloting #### {.dt}

is used to pilot any air or space borne vehicle. It's also used in vessel combat
to attack and defend.

#### Stealth #### {.dt}

is used to sneak about, hide, hide things or use sleight of hand to conceal
items. Its counter skill is [Notice](#notice).

### Intelligence Skills

#### Engineering #### {.dt}

is used to construct and repair devices, buildings and vehicles. Servicing a
motorcycle is considered engineering, as is constructing fortifications or
repairing an airlock. Extra ability modifiers can be used to use less materials
or complete the action faster.

#### Explosives #### {.dt}

can be used to disarm, handle or even build explosive ordinance. When explosives
are thrown (i.e. grenades) roll Athletics instead. Otherwise defusing and
planting explosives is a competition between the one setting it, and the one
defusing it.

#### First Aid #### {.dt}

is used to treat wounds and cure health damage with the help of a medical item.
A first aid check requires a first aid kit (or similar) and doubles the amount
of dice rolled for [health](#health) and [endurance](#endurance) if the check is
*successful*{.qs-s}. If the check *fails*{.qs-f} the
normal amount of dice are applied as healing. The game master may also limit how
often first aid can actually benefit a character depending on the severity of
the wounds. See [medical items](/equipment#using-medical-items) for examples.

#### Hacking #### {.dt}

is used to bypass electronic security. Its counter skill is also hacking. Extra
ability modifiers can be used to get the job done faster.

#### Knowledge #### {.dt}

is chosen for a particular area, e.g. history, religion, etc. For all other
knowledge skills, the character only has basic, common knowledge.

#### Notice #### {.dt}

is used to spot hidden things or notice small details that would otherwise be
missed. It is the counter part skill to [Stealth](#stealth).

#### Science #### {.dt}

is chosen for a particular scientific field, e.g. geology, biology, astronomy,
medicine, etc. For all other scientific areas that weren't chosen, the character
has basic knowledge. They only know common knowledge in these areas (according
to their education), but nothing special.

### Charisma Skills

#### Oratory #### {.dt}

is used to sway another in ones favour through social interactions. It allows a
character to bargain, bluff, intimidate or charm another. The counter skill is
called **Sense Motive**.

#### Sense Motive #### {.dt}

allows to spot bluffs in conversations, resist an intimidation attempt, notice
lies etc. It is the counter part skill to **Oratory**.

<div style="clear: both;"></div>