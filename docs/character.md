# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

## Stats

Primary stats are fixed values every character has. These stats are only
modified by fatal events while adventuring, or by taking damage.

### Primary

Primary stats or abilities are used for a number of things:

* add a bonus to various checks,
* define how much damage the character can sustain,
* enable perks
* enable certain action, e.g. carrying heavy stuff requires a minimal strength
  value.

Abilities have ranks going from 1 to 10. 5 is the average, conferring neither a
benefit nor a drawback. Every point below or above five grants an additional
benefit. This benefit is called ability modifier:

| Ability  |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |   10  |
|----------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Modifier |   -5  |   -4  |   -3  |   -2  |   -1  |   +0  |   +1  |   +2  |   +3  |   +4  |   +5  |

If an ability drops to zero, the character dies.

!!! tip "Tracking primary stats"
    Always write the current primary stat value down separately from your
    character's maximum. Damage decreases abilities, but the damage can be
    healed with resources and time. Healing can never increase the ability stat
    above the maximum value.

#### Might

> Might represents the character's physical strength and resilience.

The damage of some weapons is derived from might. Also improves a character's
toughness.

#### Speed

> Speed measures the character's reflexes and hand-eye coordination.

Speed adds a bonus to most weapon attacks.

#### Intelligence

> Intelligence describes how well your character learns new things, and how well
he remembers already existing things.

Intelligence improves a character's ability to assess situations and skills
related to knowing things.

#### Charisma

> Charisma represents the character's physical attractiveness, force of personality
and his ability to lead.

Charisma is mostly used in social interactions between characters and NPCs.

### Secondary

#### Goods

TODO

<!-- > Goods are traded for money.

**GAINED**{.hf} by looting enemies, or from adventuring and quests.

**USED**{.hf} to sell for profits.

Any character with a [Might](#might) value of 3 or higher is just strong
enough to carry one singular unit of goods. Transporting more goods at a time
requires vessels or some other type of storage. Trading goods that exceed this
storage limit are lost. -->

#### Influence

> Influence represents connections, owed favours by others, fame and infamy.

**GAINED**{.hf} by making a name for yourself in the cosmos, i.e. by helping
people and factions. Influence is lost by harming and disappointing others.

**USED**{.hf} for accessing and buying items, vessels, meetings with high
ranking characters, etc.

!!! summary "Maximum Influence"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

#### Resources

> Resources represent materials used for creating, repairing, upgrading and
> acquiring equipment.

**GAINED**{.hf} by looting enemies, or completing missions, adventures and
quests.

**USED**{.hf} to creating, repairing, upgrading and acquiring equipment and
vessels.

!!! summary "Maximum Resources"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

#### Time

> Spare time represents the time a character can invest in downtime activities.

**GAINED**{.hf} in the course of time. A character gains more spare time in
between adventures and longer periods of downtime during adventures. A character
gains 1 spare time each session.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels.

A character can never have more than 10 spare time at any time. Spare time
gained, if the maximum is reached, is lost.

## Experience

> Experience is gained throughout a character's adventuring career.

Experience is gained due to noteable achievements or story completions.
Experience *may* provide a character with experience points, usually 1 at a
time.

Experience improves the maximum values of your secondary stats. This does not
necessarily make your character stronger, but make the character more
resourceful and adaptable.

Every character has 1 experience upon creation.

## Race

Every creature has a race, or at least a type that groups similar creatures into
the same category, e.g. animals or robots.

A race modifies:

* primary and secondary stats,
* adds perks or flaws,
* enables access to inherent abilities,
* and may add roleplaying circumstances.

## Pools

> Each creature has health and endurance pools. A robot may be defined as a
> character, but instead of health and endurance it has the pools integrity and
> battery, acting just the same.

### Health

???

### Endurance

A character at zero endurance is incapacitated and can only make one action per
round.

## Skills

!!! summary "Skill checks"
    <div class="formula formula-top formula-bottom">
    <span data-bracket-bottom="base">3d6</span> ±
    <span data-bracket-top="ability modifier">ability</span> ±
    <span data-bracket-bottom="skill rank">skill</span> ±
    <span data-bracket-top="-2 to +2">roleplay</span>
    </div>

## Perks & Flaws

* require ability ranks
* require skill ranks
* standing as a perk/flaw (default "commoner")
