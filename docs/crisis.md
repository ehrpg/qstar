# Crisis

Everything that requires you to make an [Attribute](/character#attributes) or
[Skill](/character/skills#skills) check is essentially a crisis. Some crisis
only last for a single roll, while others last over multiple **turns**.

Whenever characters compete against each other or the environment the crisis
lasts longer. In a crisis time slows down and actions become more atomic.

## Difficulty

Every task's Difficulty Level is 4. Any check has to be equal or above this
Difficulty Level in order to succeed, otherwise the check fails.

Not all tasks require a check however. For example, finding some information
inside books can be done without a skill check given enough time. A skill check
might only speed up the task.

### Difficulty Modifier

Certain circumstances modify the difficulty level, either positively or
negatively.

Multiple modifiers stack, but can never modify the Diffculty Level more than 2
in any direction.

| Name                     | Diffculty Level | Description                               |
|--------------------------|----------------:|-------------------------------------------|
| Asset                    |              -1 | Having the correct tools at hand.         |
| Unfavorable Circumstance |              +1 | E.g. climbing a cliff while it's raining. |

## Turn Order

Every involved character in a crisis has to roll to determine the turn order.
The character with the highest result acts first. Once every character has
acted, a new **turn** begins.

If two or more characters have rolled the same result roll again. The characters
retain their original roll, but rolls to resolve the conflict change the turn
order.

!!! summary "[Turn Order](#turn-order)"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Attribute">Intelligence</span> ±
      <span data-bracket-top="Attribute">Speed</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

### Surprise Round

If you attack an enemy who has not noticed you and is not combat ready, you gain
an additional turn before actual combat starts.

## Actions

Actions within a crisis require Action Points (AP) to be spent.

Each character has a maximum of 6 AP. At the start of each turn, including the
beginning of a crisis, the character gains 4 AP. Action points can never exceed
6 or be lower than 0. Exceeding AP are lost, while actions that require more
than the remaining AP are disabled until enough AP are accumulated.

!!! tip "Tracking AP"
    Tracking AP is very easy. Get a d6, put it front of you, and let it face the
    number of AP your character has. If you are at zero AP, put the die aside.

If an action states an AP cost higher than 6, this indicates that the action has
to be executed over multiple subsequent turns. Executing any other action while
this action isn't completed yet cancels it.

!!! example "Reloading a flintlock musket"
    Reloading a flintlock musket takes 10 AP. You can immediatly spend all your
    AP on reloading. Each subsequent turn you can spend another 4 AP on
    reloading.

    A character begins reloading a flintlock musket with 3 AP left. After 2 more
    rounds he would have accumulated 11 AP. So after these 2 rounds he has 1 AP
    left and his weapon is reloaded.

!!! info "Actions in parallel"
    Not all actions require your utmost attention. E.g. while reloading you can
    still give short commands to e.g. other party members. This is up to the GM
    however.

### Available Actions

All characters can perform basic actions. [Perks](/character/perks) and
[Equipment](/character/equipment) make additional actions available.

This table provides a guideline for actions and their AP cost. These apply
unless stated otherwise, e.g. attacking with an oversized weapon may require
more AP.

#### Movement & Stances

<div class="qs-list-test full-width" markdown="1">

##### Move

You can move up to the character's [Pace](/character#pace).

AP Cost
:   1

##### Crawl

You can move up to 2 meters while crawling.

Effect
:   Ranged attacks against you suffer a -2 penalty.

AP Cost
:   2

##### Crouch

You can move up to half the character's [Pace](/character#pace).

Effect
:   Ranged attacks against you suffer a -1 penalty. Also counts as sneaking.

AP Cost
:   2

##### Kneel down / Stand Up

You kneel down on your kneews or stand up.

Effect
:   Toggles the Kneeling Condition. When Kneeling, going prone only costs 1 AP.

AP Cost
:   1

##### Go Prone / Stand Up

You lie down or stand up.

Effect
:   Toggles the Prone Condition. When being prone, kneeling down only costs 1
AP.

AP Cost
:   2

</div>

#### Combat

<div class="qs-list-test full-width" markdown="1">

##### Attack

Attack with a *normal* weapon.

AP Cost
:   2, or as indicated by the weapon.

##### Hide

Hide from others, provided they have no direct vision of you.

AP Cost
:   3

##### Overwatch

You delay your turn and can use your AP for Attack actions in somebody else's
turn.

AP Cost
:   -

##### Take Aim

Line up your shot. Can be used multiple times.

Effect
:   Per Take Aim action you gain a +1 bonus to ranged attacks.

AP Cost
:   2, or as indicated by the weapon.

##### Use Item

You use an item.

Effect
:   The used item specifies the effect of this action.

AP Cost
:   2, or as indicated by the item.

</div>

## Conditions

Certain actions become available or unavailable when characters are affected by
various conditions. Conditions can be inflicted by other characters, by
themselves or the environment.


<div class="qs-list-test full-width" markdown="1">

##### Drunk

All checks suffer a -1 penalty. Checks that rely on speed and balance suffer a
-2 penalty.

##### Exhausted

You only regain 2 AP per round.

##### Kneeling

*Kneeling down gives you better control over recoil and weapon sway.*

Bonus
:   You count as being in Light Cover. You gain a +1 bonus on attacks using
ranged weapons.

Penalty
:   Melee attacks against you gain a +1 bonus.

##### Prone

*Being prone gives gives you even better control over recoil and weapon sway.*

Bonus
:   You count as being in Heavy Cover. You gain a +2 bonus on attacks using
ranged weapons.

Penalty
:   Melee attacks against you gain a +2 bonus.

##### Stunned

You can't act or react on the current turn and do not regain AP.

</div>

## Combat

Combat is the most common kind of a crisis.

!!! danger "Combat reduces [Endurance](/character#endurance)"
    A combat crisis strains your character no matter the outcome. Each combat
    reduces the character's current [Endurance](/character#endurance) by 5,
    which can be restored as usual.

Combat uses two different kind of checks and rolls:

* Attack vs. Defence
* Damage vs. Toughness

<div class="left" markdown="1">

### Attack

An Attack is a [Skill](/character/skills#skills) check using the weapon's
associated [Skill](/character/skills#skills). The Difficulty Level is equal to
the Defence of the target. Circumstances such as range, visibility, etc.
influence the [Skill](/character/skills#skills) check.

If the roll's result, including bonuses and penalties, is higher than the
target's Defence, the target is hit.

A successful hit **always** reduces the target's
[Endurance](/character#endurance) whether you deal [Health](/character#health)
damage to it or not. The amount of
[Endurance](/character#endurance) damage dealt is indicated by the weapon.

!!! summary "Making an Attack"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Weapon's associated Skill">Skill</span> ±
      <span data-bracket-top="Weapon modifier">Hit</span> ±
      <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

</div>
<div class="right" markdown="1">

### Defence

Every character has a Defence value.

#### Melee Defence

Your melee Defence is your character's Parry value.

#### Ranged Defence

Every creatures ranged Defence value is 4.

#### Cover

> Cover provides additional defensive bonuses for melee and ranged combat.

Cover is always relative to other targets. A character can be in total cover for
an enemy, but in plain sight for another.

| Name        |    Defence |
|-------------|-----------:|
| Light Cover |         +1 |
| Heavy Cover |         +2 |
| Total Cover | unhittable |

!!! tip "Cover and firearms"
    When hiding behind materials that are penetrable by bullets or other
    projectiles decrease your Cover by one step. E.g. total cover becomes heavy
    cover, while in in light cover you count as not being behind cover at all.

</div>

<div class="left" markdown="1">

### Damage

When hitting a target you can deal [Health](/character#health) damage to it.
Roll the weapon's associated damage dice. You deal the result as
[Health](/character#health) damage to the target.

The damage roll has to be equal to or higher than the target's Toughness to deal
the weapon's indicated [Health](/character#health) damage.

!!! summary "Dealing Damage"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Weapon's Damage dice">Damage</span>
    </div>

</div>
<div class="right" markdown="1">

### Toughness

Every character has a Toughness value.

Toughness is influenced by the character's donned armor and other defensive
equipment.



!!! note "Toughness"
    As a GM don't call out the target's Toughness (e.g. for NPCs). The players
    should tell you their damage roll. You substract the target's Toughness from
    the roll.

!!! example "Toughness"
    A target has a Toughness of 9. Mary attacks the target and rolls a 16 with
    her weapon's damage dice. The GM substracts 9 from 16, resulting in 7. The
    result is higher than 0, so Mary can deal the weapon's
    [Health](/character#health) damage to the target. She tells the GM her
    weapon's damage.

    The GM also determines that she deals one additional
    [Health](/character#health) damage for reaching 4. If she rolled 1 higher
    (resulting in 8), she would deal another one additional
    [Health](/character#health) damage.

</div>

### Healing

#### Endurance

[Endurance](/character#endurance-ep) is restored over time. Items such as
[Adrenalin Shots](/character/equipment#adrenalin-shot) increase
[Endurance](/character#endurance-ep) instantly. Usually, taking a 10 minute
break restores all [Endurance](/character#endurance-ep). The time required
varies, as e.g. a long march requires more time to restore
[Endurance](/character#endurance-ep).

#### Health

[Health](/character#health-hp) is restored slowly over time. A character heals 1
point of [Health](/character#health-hp) damage every day they can take a rest.
Resting Acquisitions that the character can only do light downtime activities,
like reading.

#### Healing a dying character

A *dying* character requires medical attention from any other character or even
himself. Using the **Science (Medicine)** [Skill](/character/skills#skills) is
required to treat a *dying* character. The Difficulty Level for this check is
the treated character's negative [Health](/character#health-hp).

First Aid requires one minute. If the check fails, the character loses one HP
due to *dying*. First Aid can be attempted multiple times, until the character
is healed or *dead*.

A *dying* character can be administered a medical item, which adds bonsues to
the check, or even eliminates the need of a [Skill](/character/skills#skills)
check.

#### Healing a wounded character

Medical installations, doctors and medical supplies increase the amount of
[Health](/character#health-hp) healed. Per day a **Science (Medicine)** check
can be attempted for a single character.

Translate the result of the check to the **Difficulty Level** of the
[Difficulty](#difficulty) table. The character heals that amount additionally
that single day, given they can take a rest.

!!! summary "Healing"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">1 per day</span> +
        <span data-bracket-top="X = Difficulty Level">X per day</span>
    </div>

Medical installation, medibots, etc. make **Science (Medicine)** check with
their respective modifiers likewise.

Medical items heal a fixed amount of HP without requiring a **Science
(Medicine)** check.
