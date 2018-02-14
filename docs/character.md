# Character

Every player character, non-player character (NPC) and creature such as animals,
monsters or even robots, etc. fall under this category and are created using the
following rules.

## Stats

Primary stats are **fixed** values every character has. These stats are only
modified by *fatal events* while adventuring, or by *taking damage*.

!!! tip "Tracking stats"
    Always write the current primary and secondary stat value down separately
    from your character's maximum. Certain actions decrease and increase those
    stats very often, while the maximum doesn't change that frequently.

### Primary

Primary stats or abilities are used for a number of things:

* define how much damage the character can sustain,
* enable perks and upgrades
* enable certain action, e.g. carrying heavy stuff requires a minimal strength
  value.

Every character has 12 points to spend between the four primary stats upon
creation. Each primary stat has the initial value of 0. Points can only be
added, not subtracted from the ability. Abilities can never be higher than 5.

Any ability score at 5 means that the character is almost superhuman in that
ability. An ability score at 0 means that the character is somehow impaired, and
an ability score at -5 means that the character is dead.

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

Secondary stats are bound to change quite often. Every secondary stat has a
maximum value modified by circumstances, perks, and permanently due to
[experience](#experience). The current value of a secondary stat can **never**
exceed the maximum value. All exceeding points are usually lost.

#### Loot

> Loot is traded for money and resources. One unit of loot is called a parcel. 4
> parcels make up one storage unit.

**GAINED**{.hf} by looting enemies, or as reward from adventures and quests.

**USED**{.hf} to sell for profits and acquiring resources.

**SELLING**{.hf} loot nets `500 Cr.` per parcel sold. Selling 4 parcels at once
nets an extra `500 Cr.` on top (resulting in `2 500 Cr.` total).

**BUYING**{.hf} loot usually implies some kind of trade run. Buying loot this
way costs `250 Cr.` per parcel. If no trade run is done, the parcel costs `500
Cr.` instead.

**EXCHANGING**{.hf} loot for [resources](#resources) is done at an exchange rate
of 12 loot parcels per resource point.

One storage space splits up to 4 parcels. One unit of loot equals one parcels,
so 4 units of loot equal one storage unit.

A character can carry loot up to his [might](#might) value. Transporting more
loot at a time requires vessels or some other type of storage. Loot that exceeds
this storage limit is lost.

!!! summary "Maximum Loot"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="character">Might</span> +
      <span data-bracket-top="Upgrades">other bonuses</span>
    </div>


!!! info "Loot and storage example"
    Max is a character with a [might](#might) value of 5. He stumbles about a
    secret stash containing 10 units of loot. Since he is on his own, he can
    only carry 5 units of loot. The other 5 units are still in the cash. He
    decides to go back to his transporter and loads the loot onto it. The
    transporter has a storage capacity of 4, resulting in a maximum storage of
    16 parcels (or units of loot). The transporter now uses 5 of its 16 parcels.
    Max goes back to the stash, and gets the other 5 units of loot, loading it
    on the transporter, resulting in 10 of 16 total parcels used.

#### Downtime

> Downtime represents the time a character can invest in downtime activities.

**GAINED**{.hf} in the course of time. A character gains more downtime in
between adventures and longer periods of downtime during adventures. A character
gains 1 downtime each session.

**USED**{.hf} to recuperate, craft, repair and upgrade items and vessels and to
improve a character.

A character can never have more than 10 downtime at any time. Downtime gained,
if the maximum is reached, is lost.

Actions that take longer, like repairing a damaged vessel consume downtime.
Usually, a task that consumes downtime has a DC of 12. Better skill checks can
reduce downtime and/or resources used, while bad skill checks can increase
downtime and/or resources used. This DC *may* be lowered or increased depending
on the situation the characters are in.

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

**USED**{.hf} to create, repair, upgrade and acquire equipment and vessels.

Resources are mainly used for equipment that are very powerful and usually add
[stunts](/stunts).

!!! summary "Maximum Resources"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

#### Technology

Certain ugprades require technology in order to be unlocked. Upgrades have to be
unlocked only once, and *can* be shared between characters. Unlocking upgrades
enables the acquisition of better equipment.

!!! summary "Maximum Technology"
    <div class="formula formula-top formula-bottom">
      <span data-bracket-bottom="Experience">XP</span> +
      <span data-bracket-top="Base">2</span> +
      <span data-bracket-bottom="Circumstance">other bonuses</span>
    </div>

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
