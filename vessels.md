# Vessels

## Type

All vessels are given one more types defining in which environments they
operate in. The environment can impose penalties to a vessel, or simply disable,
damage, or destroy it.

Space means that the vessel is capable of manoeuvring in outer
space, air means that is also capable of flying through an atmosphere. If a
vessel has both space and air listed, the vessel is capable of making a
transition from atmosphere to outer space and vice versa. Land means that the
vessel moves on land, and water means that it moves on or in water.

## Vessel Statistics

### Attack

Any vessel is outfitted with electronics for aim assistance, maneuvering and so
forth. Bigger and better vessels have better and more sophisticated electronics
than smaller and cheaper vessels. The attack value is a bonus the pilot of a
small vessel or officer of a bigger vessel gains when attacking.

### Defense

Ships also have an armour rating. Armour reduces the incoming damage (both
normal and critical) by the listed damage reduction amount. Any damage above the
damage reduction is passed on to the ships shield hitpoints or hull integrity.
The full damage is subtracted from the hit points of the armour. If the armour
reaches zero hit points its damage reduction drops to zero and thus stops being
useful. 

A vessel can outfit multiple armour platings. The damage reduction is not
cummulative, but the armour hitpoints are, given the armour is of the same type.
Damage is always substracted from the armour providing the most damage reduction
first.

### Speed

Smaller vessels have the upper hand when it comes to maneuvering. As such, they
gain a bonus to evading enemy fire, while bigger, slower vessels are penalised.

### Shield Hitpoints

Shiels come in great variety to protect a vessel versus any kind of damage. F.e.
a shield might be a simple sand screen that deflects beam and laser weapons.
Also, point-defense versus small fighter wings, or missiles add to the shield
hitpoints value. The hitpoints abstract the recharge speed of shields, or reload
speed of point defense.

### Hull Integrity

Hull Integrity is the Health for vessels, and depends on the size and quality of
the vessel. If the hull integrity drops below one half of the maximum, the
vessel is venting atmosphere, which itself might be deadly in a space combat
scenario. If the hull integrity reaches zero, it is utterly destroyed in a
blast. Certain weapons are designed to drop the hull integrity temporarily, so
that the vessel can be boarded rather than destroyed. See vessel equipment for
details.

### Size

Every vessel is categorised into small, medium, large, or capital vessels. The
vessel statistics also provide a single value for its size. The size defines how
much space there is on a vessel for cargo, rooms such as quarters, or even
specialised modules like docking bays.

## Vessel Combat

### Attacking and Defending

Attacking and defending follow the melee rules of Q*. The pilot of a vessel can
make an attack roll using their dice pool of the associated skill. Besides any
ability modifiers, the attacker also gains or loses the vessels attack value.
The same rules apply to the defender.

Example: An attacker is trained with piloting the vessel, and thus has 3 dice
for the check. The character also has a +2 modifier on the associated ability,
and the vessel has +1 on its attack value, resulting in +3, that can be spent
across any of the 3 dice. The defender also rolls on the associated piloting
skill in which they are trained, has a +1 modifier on the associated ability,
but a -1 speed value due to the vessel size. Both attacker and defender can
apply positive modifiers or have to substract negative ones. The one with the
higher result succeeds.

### Damaging

If the attack succeeds, the attacker can deal damage to the attacked vessel. The
damage is reduced by the attacked vessels damage reduction. Any exceeding damage
is substracted from the ships shield hitpoints or hull integrity.

Example: The attacking ship fires a missile that would deal 20 points of damage
to the attacked vessel. The attacked vessel has four armour plates with 10
damage reduction and 50 hitpoints, resulting in a total of 10 damage reduction
and 200 hitpoints. The damage of the missile is reduced by 10 by the armours
damage reduction, reducing the armour hitpoints by 20 to a total of 180, and the
ships shield hitpoints or hull integrity by 10.