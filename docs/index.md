# Q*

Q* is the working title for a bunch of modifications for the Endless Horizons
Pen & Paper game.

## Introduction

You will need a game master, someone who is willing to run and guide the game,
and at least two other players. Furthermore you will need a pencil, eraser, and
some paper. To play you also need a few six sided dice (d6) and ten sided
dice (d10).

## Abilities

Each character, NPC or even monster is defined by four abilities. 

Abilities have ranks going from 1 to 10. Five (5) is the average, conferring
neither a benefit nor a drawback. Every point below or above five grants an
additional benefit. This benefit is called **ability modifier**:

| Ability  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Modifier | -5  | -4  | -3  | -2  | -1  | +0  | +1  | +2  | +3  | +4  | +5  |

### Might

**Might** (MI) represents the character's physical **strength** and
**resilience**. [Endurance](#endurance) and [health](#health) are derived from
might. Your melee weapon damage also derives from might.

### Speed

**Speed** (SP) measures the character's reflexes and hand-eye coordination. It
is used for subversive actions (such as sneaking, or lock picking) and is used
to **better hit** with melee weapons and ranged weapons.

### Intelligence

**Intelligence** (IN) describes how well your character learns new things, and
how well he remembers already existing things. It is a key factor in skills like
hacking, medicine or engineering.

### Charisma

**Charisma** (CA) represents the character's physical attractiveness, force of
personality and his ability to lead. It is mostly used in **social
interactions** between characters and NPCs.

## Endurance

*Endurance represents the character's short time well being and constitution.*

A character that reaches zero endurance is knocked **unconscious**.

Endurance is determined by rolling a number of dice equal to your **Migh rank**
and then adding the base endurance pool of your race to the results. Which dice
is rolled is also determined by the race.

Endurance recovers once the character has had enough time to rest (usually
resting eight hours) without interruptions. Whenever you permanently increase or
decrease **Might** you must roll the endurance dice and add or subtract that
value from your endurance pool.

!!! summary "How to determine *Endurance*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    Endurance = <span data-bracket-bottom="base (race)">20</span>
    <span style="margin-left: 18px;">+</span>
    <span data-bracket-bottom="might rank" style="margin-left: 18px;">n</span>
    *
    <span data-bracket-top="endurance die (race)" style="margin-left: 0;">d10</span>
    </div>

## Health

*Health represents the overall long-term physical health and well being of a
character. Severe wounds, illness and temporary handicaps (such as broken arms
or legs) are abstracted away in the health pool.*

If health reaches zero the character **dies**.

Health is determined by rolling a number of dice equal to your **Might rank**
and then adding the base health pool of your race to the results. Which dice is
rolled is also determined by race.

Health cannot recovered by resting, and requires external methods (medicine,
first aid etc.) to recover. Whenever you permanently increase or decrease
**Might** you must roll the health dice and add or subtract that value from your
health pool.

!!! summary "How to determine *Health*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    Endurance = <span data-bracket-bottom="base (race)">15</span>
    <span style="margin-left: 18px;">+</span>
    <span data-bracket-bottom="might rank" style="margin-left: 18px;">n</span>
    *
    <span data-bracket-top="health die (race)" style="margin-left: 0;">d6</span>
    </div>

## Damage

Normal damage always targets endurance. If endurance drops to zero the
character becomes incapacitated. **Critical damage** is dealt to health
instead. If endurance is zero, all damage is dealt to health instead.

Damaging objects is the same as damaging another player or NPC, except that
inanimate objects have no endurance, just health.

### Critical Hit and Damage

Causing a critical hit requires another success in addition to the
attack roll (see **Multiple Successes** down below). If the attack roll
and the roll to convert to a critical hit are successful, then the
damage is converted to **critical damage** and targets the **Health**
pool instead of the **Endurance** pool.

## Skills

Skills are areas of expertise a character may acquire throughout the
course of gameplay. Whenever a character attempts a task a skill roll
is involved.  A skill has five ranks: **untrained**, **proficient**,
**trained**, **experienced**, **master**. The ranks are numbered 1
(untrained) through 5 (master) respectively. The rank number denotes
how many ten sided dice (d10) you may roll when performing a skill check.

| Rank        | Dice |
| ----------- | ---- |
| Untrained   | 1d10 |
| Proficient  | 2d10 |
| Trained     | 3d10 |
| Experienced | 4d10 |
| Master      | 5d10 |

Each skill is associated with an attribute. Ability modifiers are used
from the corresponding associated skill. Every character starts with
every skill at the untrained level.

### Tasks

Often characters perform tasks such as repairing, shooting or flying a
space craft. It is the game masters job to come up with a difficulty
check (**DC**) between one and ten. A DC of one (1) is so easy that no
roll has to be performed, five (5) denotes an averagely difficult
task, and ten (10) denotes a task almost impossible to complete. To
succeed at a task a player may roll all his dice available to him from
the corresponding skill. At least one dice has to meet or exceed the
DC for the task to completed successfully.  A dice that meets or
exceeds the DC is called a **success**, and dice that do not meet the
DC are called **failures**.

### Aiding

At the game master's discretion, it is possible for one or more
characters to aid another in an upcoming task (henceforth called the
*main task*). The players aiding must be able to declare, and be able
to perform the aid before the main task is attempted (i.e. rolled
for). Then they must perform the same skill check (consuming an
action) within their turn. Every success of those aiding translates
into a tangible benefit for the main task. Such benefits could include
(but are not limited to):

* One additional modifier for each success, to be used in the roll of
  the main task.
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

When two characters, or a character and an NPC, pitch their skills against
each other both roll the respective skill dice. Whoever has the highest roll
(out of any of the dice) wins. On a tie the participant on the defensive
side wins. If there is no defensive participant, reroll until a winner is
decided. A dice that beats the other side's highest roll is called a
**success**, and a dice that does not beat the other side's highest roll
is called a **failure**.

### Multiple Successes

If a character has more than one die for a specific skill available,
more than one action may be attempted at the same time using that
skill. The DM sets the amount of successes required and adjusts the
DC accordingly. There is still only one DC for all actions, but now
the player has roll multiple successes using the available dice.

For example Mary is a good pilot and thus has 3 dice available and
an ability modifier of +3. Her ship is under attack, and she wants to
deploy counter measures at the right moment, and then make a sharp
evasive manoeuver. As she has three dice, she may make those two
actions at the same time. The GM decides on a DC of 6 and Mary rolls:
4 3 6. She expends two ability modifiers to make the 4 a success and
thus succeeds at the task.

### Ability Modifier

Ability modifiers are used every time a character makes a roll. If the
modifier is negative, then each roll incurs a -1 penalty in order of
highest to lowest. Repeat this process until the entire negative
penalty is spread across the dice rolls.  If the modifier is positive
then the player may decide where to spend the ability modifier. The
player may also spread out the positive modifier across multiple
dice, but may not exceed the total positive modifier available to
that ability.

Example: Mary has 3 dice for a Melee skill check and a +2 modifier. She
has to meet a DC 5 and rolls: 4 2 3. She expends one modifier on the 4
to make it a success, and uses the other modifier to buy extra damage.

Ability modifier may also be expended for other benefits. See the list of
skills what can be bought by expending an ability modifier.

## Perks

Perks, and flaws, are gained through your race and give your character
special abilities or drawbacks. Perks and flaws aim at making a character
more unique. It is up to the game master whether perks can be freely purchased.
A game master may also give them out based on experience throughout game
play, or based on a character's background story.

## Improving your character

Characters are not improved by experience but by spending time and money.
Money can buy time at the gym, implants and most importantly training
lessons for skills.

Improving an ability costs:

| New Rank |      Cost |
| -------- | --------: |
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

| New Rank    |    Cost |
| ----------- | ------: |
| Untrained   |       0 |
| Proficient  |   1 000 |
| Trained     |  31 000 |
| Experienced |  81 000 |
| Master      | 151 000 |

Formula: `cost = ((max(x-1, 0) * 100) ^ 2) - 9000`

Buying perks may be done at any time, and the perk's description lists the
price.

## Crisis

Whenever time and order of action is of critical concern a **crisis** starts.
Combat is always a crisis, but other dangerous situation are also considered
a crisis, such as escaping a space ship that is about to explode. What
constitutes a crisis is always up the game master.

When a crisis starts, all involved roll initiative by rolling a ten
sided die (d10) and adding their speed modifier to it. Perks and flaws
may give additional bonuses or penalties to initiative. Players, NPCs
and monsters start in the order of the highest initiative to
lowest. In case of a tie the person with the highest die result wins.

## Actions

Once it is a player's turn in a crisis, he or she may do two
actions. An action takes a small amount of time, and may involve a
skill check. The game master may decide that a task takes more than
one action, or even takes a couple of rounds. Any number of actions
may be converted to **ready actions**. These are specific conditions
set by the player that trigger when an external event occurs. If the
condition does not occur before his or her next turn, the **ready
action** is lost.

Everything you do in a crisis as part of an action is almost all of
the time solvable through a skill check. Movement in combat is done
through **Acrobatics**, hitting an enemy with a sword through
**Melee** or getting a blast door open uses **Hacking**.

### Free Actions

A game master may also decide that something takes so little time,
that it does not count towards the player's amount of actions in that
round. These actions are called **free actions**. For example, the
game master may decide that letting go of a ledge takes no time and is
thus a **free action**.

### Reactions

Reactions are skill checks that a player or NPC must make upon the
request of the game master. Reactions are triggered by external
events, and may happen out of turn for the player. The game master
sets a DC and a skill, which the player has to succeed or face certain
consequences. These reactions do not detract from the player or NPCs
available actions on his turn.

For example two players climb a mountain side. One player fails his
athletics check, slips and falls. The other player may receive a
reaction to catch him.  Should he fail his friend falls, and if he
succeeds he may help is friend to gain footing again.

## Making a character

## First: Choose a race

Q* supports multiple races, but your game master may restrict them as necessary.
Races defines basic attributes, and may grant you perks from the get go. All
races are balanced, with some having slight benefits which are weighed out by
drawbacks in other areas.

Select a race, and note their starting abilities, perks and flaws on your sheet
of paper.

### Human

Humans are the versatile race of Q*, with having no obvious benefits or
drawbacks. They are suitable for all kinds of game play.

| Human          | Value |
| -------------- | ----: |
| Might          |     5 |
| Speed          |     5 |
| Intelligence   |     5 |
| Charisma       |     5 |
| Base Endurance |    20 |
| Base Health    |    15 |
| Endurance      |   d10 |
| Health         |    d6 |
| Perks          |     - |
| Flaws          |     - |

## Second: Make adaptions

The game master hands out starting money to all players. Use these funds to
purchase increases in abilities, skills or even perks. If your game master
allows it, you can take flaws and decrease abilities to increase your starting
fund. If you decrease an ability you gain as much money as it would have cost
you to increase that ability to the old value.

You should increase relevant attributes, and buy ranks in the skills that best
suit your character.

## Third: Roll Endurance and Health

Use your race's endurance and health dice, and your new ability rank to roll
endurance and health. Note these values on your character sheet.

## Fourth: Buy equipment

Last but not least buy equipment that suits your character. See further down
below on a list of available equipment

# Available Skills

The following skills are available in Q*:

* **Athletics** (MI) is used to perform actions such as jumping, climbing,
  tumbling, lifting, dragging or rope walking. Extra ability modifiers may be
  spent on completing a task faster, or to avoid extra falling damage in case of
  controlled jumps. Athletics is also used to move out of harms way. It can be
  used to dodge hazards such as a falling debris.
* **Driving** (SP) allows someone to steer land or sea based vehicles, such as
  cars, motorcycles and tanks.
* **Engineering** (IN) is used to construct and repair devices, buildings and
  vehicles. Servicing a motorcycle is considered engineering, as is constructing
  fortifications or repairing an airlock. Extra ability modifiers can be used
  to use less materials or complete the action faster.
* **Explosives** (IN) can be used to disarm, handle or even build explosive
  ordinance. When explosives are thrown (i.e. grenades) roll Athletics instead.
  Otherwise defusing and planting explosives is a competition between the one
  setting it, and the one defusing it.
* **First Aid** (IN) is used to treat wounds and cure health damage. A
  successful first aid check requires a first aid kit (or similar) and cures
  an amount of **Health** as defined by the first aid kit. The game master may
  also limit how often first aid can actually benefit a character depending on
  the severity of the wounds. Extra ability modifiers can be used to cure extra
  health damage.
* **Hacking** (IN) is used to bypass electronic security. Its counter skill is
  also hacking. Extra ability modifiers can be used to get the job done faster.
* **Heavy Weapons** (SP) allows operations of heavy or stationary guns. Such
  guns are usually mounted turrets on ships and tanks, but can also be land
  based artillery or very large man portable weapons such as rocket launchers
  or guided missile platforms.  Extra ability modifiers can be spend
  on either extra normal (1 modifier per point) or critical damage (1 modifier
  per two points).
* **Knowledge** (IN) is chosen for a particular area, e.g. history, religion,
  etc. For all other knowledge skills, the character only has basic, common
  knowledge. 
* **Light Weapons** (SP) is used to operate firearms such as pistols, rifles,
  or shotguns. Light weapons also applies to man portable weapons such as
  grenade launchers or light machine guns. Extra ability modifiers can be
  spent on extra damage. Extra ability modifiers can be spend on either extra
  normal (1 modifier per point) or critical damage (1 modifier per two points).
* **Melee** (MI) is the skill involved with all sorts of melee weapons, such as
  blades, axes, clubs or bare fists and kicks. Extra ability modifiers can be
  used to purchase extra damage (1 modifier per point) or extra critical damage
  (1 modifier per two points). It's also used for defending against a melee
  attack, either by deflecting, blocking or dodging an attack.
* **Micro Gravity** (MI) is the skill that replaces **Athletics** in micro
  gravity environments. It is used to manoeuvre in such weightless conditions.
* **Notice** (IN) is used to spot hidden things or notice small details that
  would otherwise be missed. It is the counter part skill to stealth.
* **Oratory** (CA) is used to sway another in ones favour through social
  interactions. It allows a character to bargain, bluff, intimidate or charm
  another. The counter skill is called **Sense Motive**.
* **Piloting** (SP) is used to pilot any air or space borne vehicle. It's also
  used in vessel combat to attack and defend.
* **Science** (IN) is chosen for a particular scientific field, e.g. geology,
  biology, astronomy, medicine, etc. For all other scientific areas that weren't
  chosen, the character has basic knowledge. They only know common knowledge in
  these areas (according to their education), but nothing special.
* **Sense Motive** (CA) allows to spot bluffs in conversations, spot an resist
  an intimidation attempt or otherwise realise when ones belly is rubbed with
  honey. It is the counter part skill to **Oratory**.
* **Stealth** (SP) is used to sneak about, hide, hide things or use sleight
  of hand to conceal items. Its counter skill is **Notice**.
