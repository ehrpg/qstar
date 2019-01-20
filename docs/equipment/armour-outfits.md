
# Armor & Outfits

### Armor

> Armor is the first layer of defenses and prevents some damage a character
> receives.

Armor provides Damage Reduction (DR) for these damage types:

- [Physical][] (including Kinetic) Damage,
- [Fire][] (including Explosive) Damage,
- [Cold][] Damage,
- [Acid][] (including Radiation, Biohazard) Damage.

An armor blocks an amount of damage equal to its DR value for the type of the
damage.

If the damage received is less than the armor's DR, the armor's Durability is
still reduced by 2 points. If the armor doesn't block all damage with its DR,
the armor's Durability is reduced by the blocked damage---its DR value.

| Name        | Durability | [Physical][] | [Fire][] | [Cold][] | [Acid][] | Bulk |   Cost | [RES][] |
|-------------|:----------:|:------------:|:--------:|:--------:|:--------:|:----:|-------:|:-------:|
| Light Armor |     25     |      4       |    2     |    4     |    2     |  2   |  1.000 |    0    |
| Heavy Armor |    100     |      8       |    4     |    2     |    4     |  5   | 10.000 |    3    |
| Hazmat Suit |     50     |      0       |    4     |    6     |    8     |  4   |  2.500 |    2    |

!!! example "Armor, DR and Durablity"
    An opponent wears a *Light Armor* and his hit for 4 Physical Damage. The
    Armor's DR blocks all the incoming damage, so the Armor's Durablity is
    only reduced by 2 points.
    <br>
    Next time, the opponent his hit harder with 9 Physical Damage. The Armor's
    DR blocks 5 damage, so the opponent only receives 4 Physical Damage. The
    Armor's Durability is reduced by 5 points.

#### Repairing Armor

Armor that reaches 0 Durability does not provide DR anymore. It has to be
repaired first, which costs half its **Cost**.

### Outfits

Outfits are worn on a character's body, but do not provide DR. They provide
other bonus, such as additional **MAG** capacity, bonuses on [Stealth][] rolls,
etc.

<div class="qs-list-test full-width" markdown="1">

##### Chest Rig

You receive 2 additional **MAG**s for your primary and secondary weapon. Also
you get an additional thrown weapon slot.

[RES][]
:   1

[Bulk][]
:   2

##### Chest Carrier

You receive 3 additional **MAG**s for your primary weapon and 4 for your
secondary weapon. Also you get two additional thrown weapon slots.

[RES][]
:   2

[Bulk][]
:   5

</div>

--8<--
_links.md
--8<--
