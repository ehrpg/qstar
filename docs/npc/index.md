# Non-Player Characters

Most characters the GM is playing and enemies are Non-Player Characters (NPCs).
NPCs reduce the rule overhead to make it easier for the GM to manage multiple
characters at once.

A GM can however create normal characters in place of NPCs to flesh them out
more.


## Difficulty Level

NPCs don't use [Downtime](/character#downtime). Instead an NPC has a [Difficulty
Level](/crisis#difficulty) that describes how well trained, tough and strong it
is.

## Attributes & Skills

An NPC can make all [Attribute](/character#attributes) or [Skill](/skills#skills)
checks with its [Difficulty Level](/crisis#difficulty) divided by 2 as a
modifier.

!!! summary "[Attribute](/character#attributes) and [Skill](/skills#skills) checks"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">3d6</span> +
        <span data-bracket-top="Base">Difficulty Level / 2</span> +
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

### Specialized NPCs

Specialized NPCs receive their full [Difficulty Level](/crisis#difficulty) on a
set amount of [Skills](/skills#skills). All other skills do not gain a bonus
from [Difficulty Level](/crisis#difficulty). The formular below shows how many
specialized [Skills](/skills#skills) a specialized NPC has.

!!! summary "Specialized NPCs and [Skills](/skills#skills)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">1</span> +
        <span data-bracket-top="Base">Difficulty Level / 3</span> +
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

[Attributes](/character#attributes) are not effected by this.

## Defence

NPCs don't have to roll for defending.

!!! summary "NPC Defence"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">8</span> +
        <span data-bracket-top="Base">Difficulty Level</span> +
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

## Pools

### Health (HP)

!!! summary "Maximum [Health](/npc/#health-hp)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">Difficulty Level</span>
        <span data-bracket-top="Base">x5</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

### Endurance (EP)

!!! summary "Maximum [Endurance](/npc/#endurance-ep)"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Attribute Modifier">Difficulty Level</span>
        <span data-bracket-top="Base">x10</span> ±
        <span data-bracket-bottom="Perks / Flaws / Race">Circumstance</span>
    </div>

## Damage

An NPC can use weapons normally, dealing their respective **END** and **DMG**
values as damage.

!!! summary "Simplified [Health](/npc/#health-hp) damage"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">(1 + Difficulty Level)</span> x
        <span data-bracket-top="Base">2</span>
    </div>

!!! summary "Simplified [Endurance](/npc/#endurance-ep) damage"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">(1 + Difficulty Level)</span> x
        <span data-bracket-top="Base">5</span>
    </div>

## Loot

An NPC can drop items, but doesn't have to. E.g. animals do not drop items, but
can be butchered for food, or skinned to make a profit later.

[Credits](/equipment#credits) only make a small portion of the loot, if any at
all. The most valuable kind of loot are [Resources](/character#resources-res).

### Credits

If an NPC can drop [Credits](/equipment#credits), they can also have a
**Wealth** descriptor. The **Wealth** of an NPC adjusts the
[Credits](/equipment#credits) that can be looted.

!!! summary "[Credits](/equipment#credits) loot"
    <div class="formula formula-top formula-bottom">
        <span data-bracket-bottom="Base">50</span> x
        <span data-bracket-top="Base">(2 + Difficulty Level)</span> x
        <span data-bracket-bottom="Wealth">(0.5 or 1 or 2)</span>
    </div>

### Items

Items an NPC was using can also be looted. Depending on the combat, most items
have a bad [Equipment Condition](/equipment#equipment-condition)
though.

#### Equipment Condition

Stronger NPCs with a higher [Difficulty Level](/crisis#difficulty) use better
items.