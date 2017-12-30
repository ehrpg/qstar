<!-- TOC -->

- [Type](#type)
- [Vessel Statistics](#vessel-statistics)
  - [Attack](#attack)
  - [Defence](#defence)
  - [Speed](#speed)
  - [Shield Hit Points](#shield-hit-points)
  - [Hull Integrity](#hull-integrity)
  - [Size](#size)
- [Vessel Combat](#vessel-combat)
  - [Attacking and Defending](#attacking-and-defending)
    - [Smart Weapons](#smart-weapons)
    - [Multiple Weapons](#multiple-weapons)
      - [Spread Fire Mode](#spread-fire-mode)
      - [Focused Fire Mode](#focused-fire-mode)
  - [Damaging](#damaging)
  - [Boarding](#boarding)
- [Optional](#optional)
  - [Fuel](#fuel)
  - [Power](#power)

<!-- /TOC -->

# Type

All vessels are given one more types defining in which environments they operate
in. The environment can impose penalties to a vessel, or simply disable, damage,
or destroy it.

Space means that the vessel is capable of manoeuvring in outer space, air means
that is also capable of flying through an atmosphere. If a vessel has both space
and air listed, the vessel is capable of making a transition from atmosphere to
outer space and vice versa. Land means that the vessel moves on land, and water
means that it moves on or in water.

# Vessel Statistics

## Attack

Any vessel is outfitted with electronics for aim assistance, manoeuvring and so
forth. Bigger and better vessels have better and more sophisticated electronics
than smaller and cheaper vessels. The attack value is a bonus the pilot of a
small vessel or officer of a bigger vessel gains when attacking.

## Defence

Ships also have an armour rating. Armour reduces the incoming damage (both
normal and critical) by the listed damage reduction amount. Any damage above the
damage reduction is passed on to the ships shield hit points or hull integrity.
The full damage is subtracted from the hit points of the armour. If the armour
reaches zero hit points its damage reduction drops to zero and thus stops being
useful.

A vessel can outfit multiple armour plating. The damage reduction is not
cumulative, but the armour hit points are, given the armour is of the same type.
Damage is always subtracted from the armour providing the most damage reduction
first.

## Speed

Smaller vessels have the upper hand when it comes to manoeuvring. As such, they
gain a bonus to evading enemy fire, while bigger, slower vessels are penalised.

## Shield Hit Points

Shields come in great variety to protect a vessel versus any kind of damage.
F.e. a shield might be a simple sand screen that deflects beam and laser
weapons. Also, point-defence versus small fighter wings, boarding pods, or
missiles add to the shield hit points value. The hit points abstract the
recharge speed of shields, or reload speed of point defence.

## Hull Integrity

Hull Integrity is the Health for vessels, and depends on the size and quality of
the vessel. When dropping below the maximum, the vessel begins venting
atmosphere or becomes otherwise impeded, which might be dangerous by itself. If
the hull integrity drops below one half of the maximum, the vessel's power
supply is cut, disabling all functions. If the hull integrity reaches zero, the
vessel is utterly destroyed in a blast. Certain weapons are designed to drop the
hull integrity temporarily, so that the vessel can be boarded rather than
destroyed. See vessel equipment for details.

## Size

Every vessel is categorised into small, medium, large, or capital vessels. The
vessel statistics also provide a single value for its size. The size defines how
much space there is on a vessel for cargo, rooms such as quarters, or even
specialised modules like docking bays.

# Vessel Combat

## Attacking and Defending

Attacking and defending follow the competition rules of Q*. The pilot of a
vessel can make an attack roll using their dice pool of the associated skill.
Besides any ability modifiers, the attacker also gains or loses the vessels
attack value. The same rules apply to the defender.

Example: An attacker is trained with piloting the vessel, and thus has 3 dice
for the check. The character also has a +2 modifier on the associated ability,
and the vessel has +1 on its attack value, resulting in +3, that can be spent
across any of the 3 dice. The defender also rolls on the associated piloting
skill in which they are trained, has a +1 modifier on the associated ability,
but a -1 speed value due to the vessel size. Both attacker and defender can
apply positive modifiers or have to subtract negative ones. The one with the
higher result succeeds.

### Smart Weapons

Weapons with guided weapon systems such as missiles or torpedos do not depend on
the pilots skills. The statistics for these weapon provide their own *skill
rank* and *attack value*. If the vessel has multiple launchers for these
weapons, follow the **multiple weapons** rules.

### Multiple Weapons

Weapons of the same type can be fired in groups to a maximum of 5. There are two
kinds of bonuses for having more than 1 weapon, which the attacker can choose
when firing.

#### Spread Fire Mode

Every additional weapon reduces the defender's *speed value* by one, until it
reaches 0. The *speed value* due to multiple weapons can't fall below 0.

Example: An attacker is firing a battery of 4 rail guns upon a small vessel with
a *speed value* of +2. The attacker has 4 dice and +4 on his attack due to the
pilot's skill. Because the attacker has 4 rail guns, they could reduce any
defender's *speed value* by 3, to a minimum of 0. In this case the defender's
*speed value* is reduced to 0. The attack succeeds, and deals damage.

#### Focused Fire Mode

Every die that exceeds the defender's highest roll results in another hit.

Example: An attacker is firing a battery of 4 rail guns upon a small vessel with
a *speed value* of +2. The attacker has 4 dice and +4 on his attack due to the
pilots skill. The attacker decides to add additional damage rather than reducing
the enemy's speed value. Two of his dice, after applying bonuses, exceed the
defender's defence roll. Instead of dealing damage once, the attacker deals
damage twice.

## Damaging

If the attack succeeds, the attacker can deal damage to the attacked vessel. The
damage is reduced by the attacked vessels damage reduction. Any exceeding damage
is subtracted from the ships shield hit points or hull integrity.

Example: The attacking ship fires a missile that would deal 20 points of damage
to the attacked vessel. The attacked vessel has four armour plates with 10
damage reduction and 50 hit points, resulting in a total of 10 damage reduction
and 200 hit points. The damage of the missile is reduced by 10 by the armours
damage reduction, reducing the armour hit points by 20 to a total of 180, and
the ships shield hit points or hull integrity by 10.

## Boarding

Boarding only becomes an option once the shield hit points of a vessel are
reduced to 0.

# Optional

## Fuel

## Power