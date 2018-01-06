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

| Ability  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
|----------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Modifier | -5  | -4  | -3  | -2  | -1  | +0  | +1  | +2  | +3  | +4  | +5  |

If an ability drops to zero, the character dies.

### Might ![](){ .qstar-biceps }

**Might** (MI) represents the character's physical **strength** and
**resilience**. [Endurance](#endurance){ .qstar-electric } and
[health](#health){ .qstar-heart-beats } are derived from might. Your melee weapon
damage also derives from might.

### Speed ![](){ .qstar-wingfoot }

**Speed** (SP) measures the character's reflexes and hand-eye coordination. It
is used for subversive actions (such as sneaking, or lock picking) and is used
to **better hit** with melee weapons and ranged weapons.

### Intelligence ![](){ .qstar-brain }

**Intelligence** (IN) describes how well your character learns new things, and
how well he remembers already existing things. It is a key factor in skills like
hacking, medicine or engineering.

### Charisma ![](){ .qstar-minions }

**Charisma** (CA) represents the character's physical attractiveness, force of
personality and his ability to lead. It is mostly used in **social
interactions** between characters and NPCs.

## Pools

Each creature has two pools: [Endurance](#endurance){ .qstar-electric } and
[health](#health){ .qstar-heart-beats }. Objects only have a
[health](#health){ .qstar-heart-beats } pool.

### Endurance ![](){ .qstar-electric }

*Endurance represents the character's short time well being and constitution.*

A character that reaches zero [endurance](#endurance){ .qstar-electric } becomes
exhausted and is an easy target in combat or otherwise impaired. Being exhausted
reduces the amount of actions per round to **1**.

[Endurance](#endurance){ .qstar-electric } is determined by rolling a number of
dice equal to your [Might](#might){ .qstar-biceps } **rank** and then adding the
base [endurance](#endurance){ .qstar-electric } pool of your race to the
results. Which dice are rolled is also determined by the race.

Endurance recovers once the character has had enough time to rest (usually
resting eight hours) without interruptions. Whenever you permanently increase or
decrease [Might](#might){ .qstar-biceps } you must roll the
[endurance](#endurance){ .qstar-electric } dice and add or subtract that value
from your [endurance](#endurance){ .qstar-electric } pool.

!!! summary "How to determine *Endurance*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    <a href="#endurance" class="qstar-electric">Endurance</a>
    =
    <span data-bracket-bottom="base (race)">15</span>
    <span style="margin-left: 12px;">+</span>
    <span data-bracket-bottom="might rank" style="margin-left: 12px;">n</span>
    *
    <span data-bracket-top="endurance die (race)">d10</span>
    </div>

### Health ![](){ .qstar-heart-beats }

*Health represents the overall long-term physical health and well being of a
character. Severe wounds, illness and temporary handicaps (such as broken arms
or legs) are abstracted away in the health pool.*

If [health](#health){ .qstar-heart-beats } drops to zero, the character is
heavily wounded and near death. He is **incapacitated**, and automatically dies
soon after if not medically treated. Receiving damage while the
[health](#health){ .qstar-heart-beats } pool is at zero instantly kills the
character.

[Health](#health){ .qstar-heart-beats } is determined by rolling a number of
dice equal to your [Might](#might){ .qstar-biceps } **rank** and then adding the
base [health](#health){ .qstar-heart-beats } pool of your race to the results.
Which dice are rolled is also determined by race.

[Health](#health){ .qstar-heart-beats } cannot recovered by resting, and
requires external methods (medicine, first aid etc.) to recover. Whenever you
permanently increase or decrease [Might](#might){ .qstar-biceps } you must roll
the [health](#health){ .qstar-heart-beats } dice and add or subtract that value
from your [health](#health){ .qstar-heart-beats } pool.

!!! summary "How to determine *Health*"
    This formular uses the [Human](#human) race as an example.
    <div class="formula formula-top formula-bottom">
    <a href="#health" class="qstar-heart-beats">Health</a>
    =
    <span data-bracket-bottom="base (race)">5</span>
    <span style="margin-left: 12px;">+</span>
    <span data-bracket-bottom="might rank" style="margin-left: 12px;">n</span>
    *
    <span data-bracket-top="health die (race)">d6</span>
    </div>

## Skills

Skills are areas of expertise a character may acquire throughout the
course of gameplay. Whenever a character attempts a task a skill roll
is involved.

A skill has five ranks: **untrained**, **proficient**, **trained**,
**experienced**, **master**. The ranks are numbered 1 (untrained) through 5
(master) respectively. Each rank provides additional bonuses to skill checks and
allows the selection of additional [perks](#perks){ .qstar-present }.

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

    Also, a task that's so easy for a character that she doesn't have to roll if
    the roleplay bonus was 0, can be skipped as well, even if no roleplaying is
    done.

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
*successful*{ .qstar-success }. If the skill check is less than the **DC** the
skill check is a *failure*{ .qstar-failure }.

!!! summary "Succeeding and failing a task"
    Skill check ≥ Task DC ⇒ *success*{ .qstar-success }

    Skill check < Task DC ⇒ *failure*{ .qstar-failure }

### Aiding

At the game master's discretion, it is possible for one or more characters to
aid another in an upcoming task (henceforth called the *main task*). The players
aiding must be able to declare, and be able to perform the aid before the main
task is attempted (i.e. rolled for). Then they must perform the same skill check
(consuming an action) within their turn. Every *success*{ .qstar-success } of
those aiding translates into a tangible benefit for the main task. Such benefits
could include (but are not limited to):

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

## Perks ![](){ .qstar-present } / Flaws ![](){ .qstar-broken-bone }

[Perks](#perks-flaws){ .qstar-present }, and [flaws](#perks-flaws){
.qstar-broken-bone }, are gained through your race and give your character
special abilities or drawbacks. [Perks](#perks-flaws){ .qstar-present } and
[flaws](#perks-flaws){ .qstar-broken-bone } aim at making a character more
unique. It is up to the game master whether
[perks](#perks-flaws){ .qstar-present } can be freely purchased. A game master
may also give them out based on experience throughout game play, or based on a
character's background story.

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

| New Rank    |    Cost |
|-------------|--------:|
| Untrained   |       0 |
| Proficient  |   1 000 |
| Trained     |  31 000 |
| Experienced |  81 000 |
| Master      | 151 000 |

Formula: `cost = ((max(x-1, 0) * 100) ^ 2) - 9000`

Buying [perks](#perks-flaws){ .qstar-present } may be done at any time, and the
[perks](#perks-flaws){ .qstar-present } description lists the price.

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
    or
    <div class="formula formula-top formula-bottom">
    Defence (melee) = <span data-bracket-top="skill check">3d6 + skill modifiers</span>
    </div>

#### Cover

| Cover       | Bonus | Notes                                                                                            | Example                                                       |
|-------------|------:|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Light Cover |    +2 | -2 endurance damage, Allows Stealth                                                              | Foliage, Smoke, Low Light                                     |
| Heavy Cover |    +4 | -4 endurance damage                                                                              | Complete darkness, Chest high inpenetrable wall               |
| Entrenched  |    +6 | -6 endurance damage, immunity to [critical hits](#critical-hit) while endurance is larger than 0 | Combined through Low and Heavy Cover, inside a literal trench |

### Attack

Any attack roll is done using a weapon and its related skill. Attacks beyond a
weapons effective range impose penalties to the attack roll.

Some weapons allow multiple shots to be fired, denoted by the
[RoF](./equipment#stats) value of a weapon. If a weapons
[RoF](./equipment#stats) value is higher than one, additional shots
**may** be fired to increase the hit chance and [critical hit](#critical-hit)
chance.

!!! note "RoF Example"
    If a weapon has a RoF value of 2, you may fire an extra bullet and add
    **1d6** to your attack, resulting in **4d6** total.

If the **attack** is equal to or higher than the targets **defence** attack is
*successful*{ .qstar-success }.

If the **attack** is less than the targets **defence** value the attack *fails*{ .qstar-failure }.

On a hit you can deal [damage](#damage){ .qstar-gunshot } and potential
[critical damage](#critical-damage){ .qstar-headshot-2 }.

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

Armour provides [DR](./equipment#damage-reduction){ .qstar-riot-shield } (damage
reduction). If a targets
[DR](./equipment#damage-reduction){ .qstar-riot-shield } is higher than the
inflicted damage, they don't take any damage at all (except for [critical
damage](#critical-damage){ .qstar-headshot-2 }).

Normal damage always targets [endurance](#endurance){ .qstar-electric }. If
[endurance](#endurance){ .qstar-electric } is zero, all exceeding and subsequent
damage is dealt to [health](#health){ .qstar-heart-beats } instead.

Damaging objects is the same as damaging another player or NPC, except that
inanimate objects have no [endurance](#endurance){ .qstar-electric }, just
health.

!!! summary "Damaged characters"
    If [endurance](#endurance){ .qstar-electric } drops to zero the character
    becomes **incapacitated**.<br> If [health](#health){ .qstar-heart-beats }
    drops to zero the character is **dead**.

#### Critical Hit

Whenever you roll for an attack and **hit**, every **6** you rolled with a
**d6**, including extra dice from [RoF](./equipment/#stats){ .qstar-bullets },
causes additional [critical damage](#critical-damage){ .qstar-headshot-2 }.

#### Critical Damage ![](){ .qstar-headshot-2 }

[Critical damage](){ .qstar-headshot-2 } inflicts additional damage to the
health pool, even if the targets [endurance](#endurance){ .qstar-electric }
isn't at 0 yet.

[Critical damage](){ .qstar-headshot-2 } is also reduced by the target's
[DR](./equipment#damage-reduction){ .qstar-riot-shield }, but cannot be less than 1. Every critical hit
deals at least 1 damage, disregarding any armour the target may have.

Each weapon specifies its own [critical damage](){ .qstar-headshot-2 }.

### Status

#### Incapacitated

A creature becomes incapacitated once its
[endurance](#endurance){ .qstar-electric } drops to zero. An incapacitated
creature needs some time (at least a few minutes, up to hours) to become
concious again.

Most of the time an incapacitated creature needs medical attention to regain
conciousness.

#### Dead

A creature is dead if its [health](#health){ .qstar-heart-beats } drops to
zero.

## Crisis

Whenever time and order of action is of critical concern a **crisis** starts.
Combat is always a crisis, but other dangerous situation are also considered
a crisis, such as escaping a space ship that is about to explode. What
constitutes a crisis is always up the game master.

### Turn order ![](){ .qstar-sprint }

When a crisis starts, all involved have to determine their turn order. Roll a 6
sided die (d6) and add your [Speed](#speed){ .qstar-wingfoot } and
[Intelligence](#intelligence){ .qstar-brain } modifiers to the result.
[Perks](#perks-flaws){ .qstar-present } and [flaws](#perks-flaws){
.qstar-broken-bone } may give additional bonuses or penalties to
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

Once it is a player's turn in a crisis, he or she may do **two actions**. An
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
purchase increases in abilities, skills or even 
[perks](#perks-flaws){ .qstar-present }. If your game master allows it, you can
take [flaws](#perks-flaws){ .qstar-broken-bone } and decrease abilities to
increase your starting fund. If you decrease an ability you gain as much money
as it would have cost you to increase that ability to the old value.

You should increase relevant attributes, and buy ranks in the skills that best
suit your character.

### Third: Roll Endurance and Health

Use your race's [endurance](#endurance){ .qstar-electric } and
[health](#health){ .qstar-heart-beats } die, and your new 
[Might](#might){ .qstar-biceps } **rank** to roll 
[endurance](#endurance){ .qstar-electric } and 
[health](#health){ .qstar-heart-beats }. Note these values on your character
sheet.

### Fourth: Buy equipment

Last but not least buy equipment that suits your character. See
[equipment](./equipment).

## Available Skills

The following skills are available in the base system of Q*:

### Might ![](){ .qstar-biceps } Skills

* **Athletics** (MI) is used to perform actions such as jumping, climbing,
  tumbling, lifting, dragging or rope walking. Extra ability modifiers may be
  spent on completing a task faster, or to avoid extra falling damage in case of
  controlled jumps. Athletics is also used to move out of harms way. It can be
  used to dodge hazards such as a falling debris.
* **Melee** (MI) is the skill involved with all sorts of melee weapons, such as
  blades, axes, clubs or bare fists and kicks. Extra ability modifiers can be
  used to purchase extra damage (1 modifier per point) or extra critical damage
  (1 modifier per two points). It's also used for defending against a melee
  attack, either by deflecting, blocking or dodging an attack.
* **Micro Gravity** (MI) is the skill that replaces **Athletics** in micro
  gravity environments. It is used to manoeuvre in such weightless conditions.

### Speed ![](){ .qstar-wingfoot } Skills

* **Driving** (SP) allows someone to steer land or sea based vehicles, such as
  cars, motorcycles and tanks.
* **Heavy Weapons** (SP) allows operations of heavy or stationary guns. Such
  guns are usually mounted turrets on ships and tanks, but can also be land
  based artillery or very large man portable weapons such as rocket launchers
  or guided missile platforms.  Extra ability modifiers can be spend
  on either extra normal (1 modifier per point) or critical damage (1 modifier
  per two points).
* **Light Weapons** (SP) is used to operate firearms such as pistols, rifles,
  or shotguns. Light weapons also applies to man portable weapons such as
  grenade launchers or light machine guns. Extra ability modifiers can be
  spent on extra damage. Extra ability modifiers can be spend on either extra
  normal (1 modifier per point) or critical damage (1 modifier per two points).
* **Piloting** (SP) is used to pilot any air or space borne vehicle. It's also
  used in vessel combat to attack and defend.
* **Stealth** (SP) is used to sneak about, hide, hide things or use sleight
  of hand to conceal items. Its counter skill is **Notice**.

### Intelligence ![](){ .qstar-brain } Skills

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
* **Knowledge** (IN) is chosen for a particular area, e.g. history, religion,
  etc. For all other knowledge skills, the character only has basic, common
  knowledge.
* **Notice** (IN) is used to spot hidden things or notice small details that
  would otherwise be missed. It is the counter part skill to stealth.
* **Science** (IN) is chosen for a particular scientific field, e.g. geology,
  biology, astronomy, medicine, etc. For all other scientific areas that weren't
  chosen, the character has basic knowledge. They only know common knowledge in
  these areas (according to their education), but nothing special.

### Charisma ![](){ .qstar-minions } Skills
* **Oratory** (CA) is used to sway another in ones favour through social
  interactions. It allows a character to bargain, bluff, intimidate or charm
  another. The counter skill is called **Sense Motive**.
* **Sense Motive** (CA) allows to spot bluffs in conversations, resist an
  intimidation attempt, notice lies etc. It is the counter part skill to
  **Oratory**.
