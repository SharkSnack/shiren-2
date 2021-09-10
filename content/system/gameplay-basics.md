---
title: "Gameplay Basics"
metaTitle: "Gameplay Basics - Shiren the Wanderer 2: Oni Invasion! Wiki"
metaDescription: "Gameplay Guide for Shiren the Wanderer 2: Oni Invasion!"
---

## Overview

This page provides information for Shiren 2's various gameplay systems and mechanics.

<ul class="quickLinksUL">
  <li><a href="#dungeon">Dungeon</a>
    <ul>
      <li><a href="#turns">Turns</a></li>
      <li><a href="#wind">Wind</a></li>
      <li><a href="#map-types">Map Types</a></li>
      <li><a href="#field-of-view">Field of View</a></li>
      <li><a href="#mechanics">Mechanics</a></li>
      <li><a href="#random-map-patterns">Random Map Patterns</a></li>
      <li><a href="#item-/-character-limits">Item / Character Limits</a></li>
      <li><a href="#score-(leaderboards)">Score (Leaderboards)</a></li>
    </ul>
  </li>
  <li><a href="#item">Item</a>
    <ul>
      <li><a href="#synthesis">Synthesis</a></li>
      <li><a href="#durability">Durability</a></li>
      <li><a href="#fire-pillars">Fire Pillars</a></li>
      <li><a href="#ally-items">Ally Items</a></li>
    </ul>
  </li>
  <li><a href="#status">Status</a>
    <ul>
      <li><a href="#level-/-growth">Level / Growth</a></li>
      <li><a href="#hp">HP</a></li>
      <li><a href="#strength">Strength</a></li>
      <li><a href="#fullness">Fullness</a></li>
    </ul>
  </li>
  <li><a href="#combat">Combat</a>
    <ul>
      <li><a href="#attack">Attack</a></li>
      <li><a href="#defense">Defense</a></li>
      <li><a href="#damage-calculation">Damage Calculation</a></li>
      <li><a href="#accuracy">Accuracy</a></li>
    </ul>
  </li>
  <li><a href="#facilities">Facilities</a>
    <ul>
      <li><a href="#storage">Storage</a></li>
      <li><a href="#blacksmith">Blacksmith</a></li>
      <li><a href="#trader-shops">Trader Shops</a></li>
      <li><a href="#bank">Bank</a></li>
      <li><a href="#training-hall">Training Hall</a></li>
    </ul>
  </li>
  <li><a href="#save-data">Save Data</a>
    <ul>
      <li><a href="#creating-a-journal">Creating a Journal</a></li>
      <li><a href="#copy-a-journal-/-return-to-napus-village">Copy a Journal / Return to Napus Village</a></li>
      <li><a href="#checking-if-a-journal-is-a-copy">Checking if a Journal is a Copy</a></li>
      <li><a href="#controller-pak">Controller Pak</a></li>
      <li><a href="#save-data-loss">Save Data Loss</a></li>
    </ul>
  </li>
</ul>

## Dungeon

### Turns

#### Turns and Turn-Ending Actions

Being a turn-based roguelike, Shiren and monsters take turns when performing actions.<br/>Generally, turn-ending actions include movement, attacking, using an item, and stepping in place.<br/>Your turn <span class="blueText">does not</span> end from idling, checking item details, or otherwise navigating menus.

The following actions are easy to forget / mistake:

- Equipping a weapon, shield, or bracelet <span class="redText">does</span> end the turn, but equipping a projectile <span class="blueText">does not</span>.
- Talking to an ally character <span class="blueText">does not</span> end the turn.
- Talking to a Shopkeeper or Trader <span class="redText">does</span> end the turn.
- Placing a trap on the ground <span class="blueText">does not</span> end the turn.
- Failing to place an item on the ground <span class="blueText">does not</span> end the turn.
- Successfully taking control of a monster using a Possession Staff <span class="blueText">does not</span> end the turn.
- Cancelling a possession and returning to your body <span class="blueText">does not</span> end the turn.

#### Turns Elapsing

Various effects or events occur based on the number of turns that have elapsed.<br/>
Try your best to not waste turns with meaningless actions.


- HP regenerates every turn at a rate of 0.5% of your max HP. (decimals accumulate)
- Fullness decreases by 1% every 10 turns.
- A new monster is generated every 50 turns.
- A Sheriff or Guard Dog is generated once per turn during Thief Mode.
- Wind sweeps you out of the dungeon when 2100 turns have elapsed.

#### Turn Processing Order

1. Shiren's action
2. Fire weakens
3. Enemy movement
4. Traps
5. Fire damage (movement)
6. Enemy attack
7. Fire damage
8. Turn End

Enemies standing on tiles that are on fire who received fire damage due to an action by Shiren<br/>won't take additional fire damage on the same turn unless they move to a different tile that is on fire.

Characters other than Shiren with double or triple movement speed who received fire damage<br/>by moving to a tile that is on fire will end their turn when they receive the fire damage.

### Wind

### Map Types

### Field of View

### Mechanics

### Random Map Patterns

### Item / Character Limits

### Score (Leaderboards)

## Item

### Synthesis

### Durability

### Fire Pillars

### Ally Items

## Status

### Level / Growth

### HP

### Strength

### Fullness

## Combat

### Attack

### Defense

### Damage Calculation

### Accuracy

## Facilities

### Storage

### Blacksmith

### Trader Shops

### Bank

### Training Hall

## Save Data

### Creating a Journal

### Copy a Journal / Return to Napus Village

### Checking if a Journal is a Copy

### Controller Pak

### Save Data Loss


