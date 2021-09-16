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
      <li><a href="#features">Features</a></li>
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

<div class="relativeImage">
  <img src="../images/other/wind_1.png"/><img src="../images/other/wind_2.png"/><img src="../images/other/wind_3.png"/>
</div>

If you linger on the same floor inside a dungeon for a long time, a strong wind begins to blow.<br/>
(Also occurs inside the Training Hall and Napus Storage)

The gusts occur 3 times, and Shiren is swept back to Napus Village on the third gust of wind.<br/>
Being swept away by wind is equivalent to collapsing, so you'll lose all items and Gitan.<br/>
Asuka and Mamo's items will not be lost, and items on the floor inside Napus Storage will be safe.

- First gust of wind occurs on turn 1500
- Second gust of wind occurs on turn 1800
- Third gust of wind occurs on turn 2100

Recollections that play after resuming a suspended game will include wind in the playback,<br/>
so you can use that to check how many gusts of wind occurred.

### Map Types

There are 2 map types for dungeons, which are called "Shuffle" and "Random".

#### Shuffle

<div class="relativeImage">
  <img src="../images/other/shuffle_dungeon_1.png"/><img src="../images/other/shuffle_dungeon_2.png"/>
</div>

<br/>

- The map for the floor is randomly selected from a set of predefined patterns.
    - The same pattern will never be repeated during an adventure.
    - Boss floors such as Shuten Trail Hard 15F only have one pattern.
- The maps are generally very pretty, and have many fine details depicting nature.
    - It's thought that Shiren 2 is among the most detailed games made for the Nintendo 64.
    - Hallways and rooms vary in shape and feel more natural compared to lines<br/>and rectangles seen elsewhere.
- Monster Houses and dungeon shops will never be generated. (Traders can still appear)
- Some item and monster special attack effects are nullified in this map type.
    - Any effect that alters the shape of the map is nullified.
    - (Pickaxe, Wonder Pick, Tunnel Staff, Great Hall Scroll, Rock Beast, Boulder Beast, explosions)
    - Nothing happens to the water on the current floor when Evaporate or Freeze scrolls are read.
    - Characters can't pass through walls. (Pumphantasm family, Typhoon, Phantasm Bracelet)
    - Items with piercing properties still pierce through objects and walls. (Pierce Bracelet, etc.)
- Nothing happens if you step on a Flood Trap, and Pitfalls deal damage without changing floors.
    - These traps are never generated in this map type, but can be brought in.
    - Shuten Trail Mid 12F is the only exception, where falling into a Pitfall returns you to 11F.
- There's a glitch that hard-locks the game in Shuffle maps. →Glitches
- This map type is only used in Shuten Trails, boss floors, and Golden Intervals.
    - In other words, Shuffle maps are rarely seen in post-game dungeons.

Dungeons:

- Small Valley
- Shuten Easy (1~4F, 7F, 9~10F)
- Shuten Mid (3~4F, 6~7F, 9~13F)
- Shuten Hard (1~2F, 10~15F)
- Golden Interval
- Onigashima (16F, 25F)

#### Random

<div class="relativeImage">
  <img src="../images/other/random_dungeon_3.png"/><img src="../images/other/random_dungeon_2.png"/>
</div>

<br/>

- There are no predefined patterns, and each floor is generated completely randomly.
- Every tile is a ground, water, ice, wall, or unbreakable wall tile. (No air tiles)
    - Rooms can have features such as water or ice, single column wall tiles spaced<br/>throughout the room, item islands, maze-like terrain with a 1 tile field of view, etc.
- Waterways can be generated, which sometimes have a similar appearance to hallways.
- Monster Houses, dungeon shops, and Traders have a chance of being generated.
- Golden Stairs that lead to Golden Intervals can rarely be found hidden in a wall tile.
- All dungeons starting with Onigashima are Random maps, and have a limited field of view.

Dungeons:

- Shuten Easy (5~6F, 8F)
- Shuten Mid (1~2F, 5F, 8F)
- Shuten Hard (3~9F)
- Onigashima
- Shrine's Hidden Hole
- Halfway Well
- Sealed Room
- Road to the End

### Field of View

<div class="relativeImage screenshotImage">
  <img src="../images/dungeon/onigashima.png"/>
</div>

<br/>

- Shiren has a set distance he can see called field of view.
    - The view radius is 1 tile in hallways, and the entire room + 1 tile along the edge in rooms.
    - The location of items, monsters, and statues are visible on the map if Shiren can see them.
    - Single room floors and some Shuffle maps don't differentiate between rooms and hallways,<br/>and instead have a 5 tile field of view. (In other words, 11 tile radius)
    - It's possible to see past Shiren's field of view in Shuffle maps,<br/>but not in darker dungeons such as Onigashima.
- Monsters also have their own field of view.
    - They'll attack Shiren if he is visible, and will chase after him if they see him enter a hallway.
    - They seem to detect Shiren from 2 tiles away in hallways, but won't use special attacks until adjacent.
        - Monsters in a room will move toward Shiren if he is standing on a tile right outside the room.
    - Monsters that can pass through walls can detect Shiren from anywhere on the current floor.
    - Some monsters use special attacks toward Shiren or other monsters even if they aren't in view,<br/>like Porky throwing stones at Shiren, or Bat Kangaroo swinging its staff at other monsters.
- Statues and items like scrolls that affect the entire room don't include the tile right outside the room.
    - Except for Rock (castle material) items, which can hit monsters right outside the room.

### Features

#### Shops

Shops are occasionally generated in Random type maps.

- Shops can be generated in Shuten Trail (Mid, Hard), Onigashima, Halfway Well, and Road to the End.
    - However, shops will never be generated on Shuffle map floors.
- A maximum number of 2 shops can be generated on a floor.
- Items are placed in the center of the room as merchandise.
    - There are typically 9 items in a shop, but smaller shops can have fewer items.
    - Items for sale can include a N'dubba disguised as an item.
- Traps can be generated inside shops.
    - Recommended to check for traps so you don't step on a Spring.
- There are either 1 or 2 entrances to a shop, and Shopkeepers always stands at the entrance.
- Items can't be placed on the ground where Shopkeepers stand, including the entrance.
    - Droplet Ninja monsters will never place traps on a shop's entrance tile when defeated.
- The individual items for sale vary, and are based on each dungeon's item table.
- 2 types of shops can be generated - regular shops, and specialty shops.
    - Specialty shops only sell 1 category of item, such as only grass items, or only bracelets.
- Shopkeepers block the exit when Shiren picks up merchandise, and ask for Gitan when you talk.
    - Pay the amount of Gitan they ask for, and the item will become yours.
- Exiting the shop without paying for the item will trigger Thief Mode.
    - For details about stealing, check out the Stealing Techniques page.
- If you want to sell items, simply place them on the ground.
    - Shopkeepers will ask if you want to sell the items you placed when you talk to them,<br/>so select [Yes] to sell the items.
- Shopkeepers fight back if attacked, but defeating a Shopkeeper will not trigger Thief Mode.
    - They also attack monsters that deal damage to them, and level up when they defeat monsters.
- Merchandise can be refreshed by reading a Restock Scroll.
    - All merchandise on the ground vanishes, and new items are generated in the center of the room.
    - Merchandise in specialty shops will still be the same category of items.
    - Restocking always generates 9 items (or fewer based on room size),<br/>no matter how many items were on the ground.


#### Walls

Walls can be found in Random type maps.<br/>
They can be destroyed by Pickaxes, Tunnel Staff, monster special attacks, and explosions.<br/>
However, explosions that occur above water will not destroy walls.

Characters that can pass through walls:

- Cannot dig using Pickaxes while inside a wall, but Tunnel Staff can be used while inside a wall.
- Cannot throw items or roll Cannonballs while inside a wall.
    - It's possible to throw items or roll Cannonballs if you have a Pierce Bracelet equipped.
- Characters that don't have the ability to wall-clip will warp elsewhere if they enter a wall.
- You still receive damage from explosions and Archdragon's fire breath inside walls.
- Items that arc can hit targets inside walls.

#### Unbreakable Walls

Unbreakable walls can be found in select Random type maps.<br/>
They cannot be destroyed by Pickaxes, Tunnel Staff, monster special attacks, or explosions.<br/>
The only way to destroy unbreakable walls is to read a Great Hall Scroll.

Characters that can pass through walls:

- Cannot enter unbreakable walls, even if they can wall-clip.
    - Example: Shiren with a Phantasm Bracelet equipped.
- Cannot move through corners of unbreakable walls.
- It's possible to attack around corners of unbreakable walls.
    - Typhoon and Asuka with a Phantasm Bracelet won't attack around corners.

#### Waterways

Waterways can be found in select Random and Shuffle type maps.<br/>
Unlike walls, you can move and attack through corners.

Items can fall in water, such as from stepping on a Trip Stone.<br/>
Submerged items cannot be picked up even with a Phantasm Bracelet equipped,<br/>
and magic bullets from staves will simply travel above the item.<br/>

Waterways can be turned into dry ground by reading an Evaporate or Great Hall scroll.

#### Frozen Floors

Frozen floors can be found in select Random type maps.<br/>
They can be generated naturally, or by reading a Freeze Scroll on a floor with waterways.<br/>
Characters will slide up to 4 tiles in a straight line when they move across frozen floors.<br/>
The sliding will stop if the character moves on top of an item or trap.<br/>
Disguised N'dubbas can be picked up as an item if Shiren was 2\~4 tiles away before sliding to it.<br/>
Monsters that float can move across frozen floors without sliding.

Stairs cannot be moved onto frozen floors.

Frozen floor tiles will turn into regular ground tiles when a Great Hall Scroll is read.

Fire can be generated on top of frozen floors, and the frozen floor does not melt. (Example: Fire Staff)<br/>Monsters that are frozen in ice cannot be damaged by fire.

#### Maze Rooms

Maze rooms can be found in select Random type maps.<br/>
The room resembles a maze and consists of branching hallways.<br/>
Shiren 2 doesn't generate floor-wide mazes, so maze rooms are usually rather small.<br/>
Items, traps, and stairs can be generated within the maze, unlike regular hallways.<br/>
Field of view is the same as hallways, and monsters can only detect Shiren if they are adjacent.

#### Treasure Rooms

Treasure rooms can be found in select Random type maps.<br/>
They are extremely rare, only having a 1% chance of being generated on certain types of floors.

These 4x4 rooms don't have an entrance or exit, and include 15 bags of 500 Gitan + 1 Spring.<br/>
You'll likely never enter one playing normally, and they can be tricky to find to begin with.<br/>
Locate them using a Scout Bracelet, or by using the Scout Bracelet-like effect of Monster Houses.<br/>
You'll need items like Great Hall Scroll, Tunnel Staff, Phantasm Bracelet, etc. to enter the room.

### Random Map Patterns

#### 1 Large Room

The entire floor is 1 large room. Shops are never generated in this map type.<br/>
Rectangular walls or waterways are generated in the room.<br/>
Both Shiren and monsters have a field of view of 5 tiles. (11 tile radius)<br/>
Scrolls with effects that normally affect the entire room will only affect the field of view.<br/>
Statues will only affect tiles in a 11 tile radius, centered around the statue.<br/>
It can take a little while to find the stairs, thanks to the limited field of view.

iDash can be used to navigate to items or stairs without regard to the field of view,<br/>
but it's not recommended due to the risk of running into or getting surrounded by monsters.<br/>
Unlike other games in the series, this map type is not guaranteed to be a Monster House.<br/>
Underwater Houses will never be generated when walls are present.<br/>
Shiren 2 doesn't have regular Monster Houses in this map type.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/1_large_room.png"/>
</div>

#### 1 Medium Room

The entire floor is 1 medium sized room.<br/>
Walls and waterways are never generated, but statues can be present.<br/>
Like single large rooms, the field of view is limited to 5 tiles. (11 tile radius)<br/>
Due to the smaller size, this map type often ends up being more dangerous than<br/>
single large rooms, since there's a greater chance of encountering multiple monsters.

The outer wall can be broken using items like Tunnel Staff and Pickaxe,<br/>
so one strategy would be to create a tunnel and then swing a Fire Staff<br/>
or shoot Silver Arrows to clear out lines of enemies that follow you.<br/>
Unlike other games in the series, this map type is not guaranteed to be a Monster House.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/1_medium_room.png"/>
</div>

#### 1 Large Frozen Room

The entire floor is 1 large room with frozen floors.<br/>
Monster Houses and shops will never be generated in this map pattern.<br/>
Walls and waterways are never generated, but statues can be present.<br/>
Like single large rooms, the field of view is limited to 5 tiles. (11 tile radius)<br/>
It's easy to get caught in traps on these floors due to all of the sliding on ice.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/1_large_frozen_room.png"/>
</div>

#### 2 Rooms

The entire floor is 2 large rectangular rooms connected by a single hallway.<br/>
It's common for the hallway to have turns, rather than being a straight horizontal line.<br/>
Monster Houses are not guaranteed, and shops will never be generated.<br/>
The field of view is not limited, so scrolls and statues affect everything in the room.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/2_rooms.png"/>
</div>

#### 4 Rooms

Four rectangular rooms connected by hallways in a 2x2 layout.<Br/>
Monster Houses are not guaranteed, and shops will never be generated.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/4_rooms.png"/>
</div>

#### 2 Rooms (Dumbbell Shape)

The entire floor is 2 circular rooms connected by a single horizontal hallway.<br/>
Monster Houses and shops will never be generated.<br/>
Items and monsters are generated in the opposite room from where Shiren starts.<br/>
The start of the floor is safe, but monsters quickly flow in from the opposite room.<br/>
Items like Fire Staff and Silver Arrows can make quick work of monsters.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/2_rooms_dumbbell.png"/>
</div>

#### 4 Rooms (2 Hallways)

The entire floor is 4 rooms placed in cardinal directions connected by 2 hallways.<br/>
Shops will never be generated in this map pattern.<br/>
Each room has four entrances, and each set of two hallways leads to the next room.<br/>
It's more efficient in terms of number of turns and fullness depletion to explore<br/>the floor using the inner hallways rather than the outer hallways.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/4_rooms_2_hallways.png"/>
</div>

#### 8 Rooms

The entire floor is 8 rooms in a 4x2 layout, with one hallway going around the outside.<br/>
It's best to explore the floor using the inner hallways when possible, since monsters<br/>tend to end up circling the floor in the outer hallway.<br/>
Unlike previous games, this map type doesn't have a greater chance of generating shops.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/8_rooms.png"/>
</div>

#### 12 Rooms

The entire floor is a hallway grid layout with a total of 12 rooms placed on the end points.<br/>
It can take quite a few turns to explore the floor due to the number of rooms,<br/>
combined with having to return to the hallways after checking each end point.<br/>
Consider using a Pickaxe or Tunnel Staff to create shortcuts between rooms.<br/>
Unlike previous games, this map type doesn't have a greater chance of generating shops.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/12_rooms.png"/>
</div>

#### 1 Medium Room + Small Rooms (Octopus Shape)

The entire floor is 1 medium sized room with individual hallways leading to single rooms.<br/>
Also called "Crab Shape", "Sun Shape", "Radial Shape", and "Octopus Shape".<br/>
Expect to encounter many monsters due to having to return to the center after checking each room.<br/>
Be careful not to get surrounded at the start, since monsters will quickly flow into the center room.<br/>
Particularly tricky when monsters with ranged attacks are present, such as Sky Dragon.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/octopus_shape.png"/>
</div>

#### Single Branched Rooms

The entire floor consists of rooms connected by 1 hallway between each room.<br/>
(The number of hallways = number of rooms - 1).<br/>
Each branch eventually leads to a room as a dead end, so it's common to encounter monsters.<br/>
On rare occasions, hallways can end up looping or having branches (such as a cross-shape).<br/>
One of the most common patterns, with Road to the End having 30 floors of this or Single Path.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/single_branched_rooms.png"/>
</div>

#### Single Path

The entire floor consists of a single path between rooms without any branching hallways.<br/>
(The number of hallways = number of rooms - 1).<br/>
Expect to encounter every monster on the floor, often having to fight multiple in a row.

<div class="relativeImage screenshotImage">
  <img src="../images/maps/single_path.png"/>
</div>

Map Images source: [風来のシレン2 鬼襲来！シレン城！ 攻略Wiki](http://shiren2.lsx3.com/?%B4%F0%CB%DC%A5%B7%A5%B9%A5%C6%A5%E0#r9dd5da8)

### Item / Character Limits

There's a maximum number of items and characters that can be present on a floor.

#### Item limit

- The max number of items (including both inventory and the ground) is 160, including traps.
- Monsters will no longer drop new items or traps when the number of items is at the limit.
- Actions that increase the number of items are nullified.
    - Shooting an arrow from a stack would add 1 item. (99 arrows → 98 + 1)
    - Some monsters like Bow Boy won't be able to use their special attack.
    - A monster inside a Monster Pot is counted as 1 item, so you can't capture monsters.
    - Ally monsters can't return to their pot if the item limit is reached while they're out.
- Items on the ground inside Napus Storage will begin to vanish if there are 161 or more items<br/>between your inventory and the number of items on the ground. 

<br/>

<pre class="preDiagram">
  16BGLQV  If there are 161 items,<br/>
  27CHMRW  the item at position 1 will vanish,<br/>
  38DINSX  and if there are 170 items,<br/>
  49EJOTY  items at positions 1~A will vanish.<br/>
  5AFKPUZ
</pre>

#### Character Limit

- The max number of characters is 30.
    - Includes Shiren, monsters, allies, NPCs, statues, decoys, and figures.
- Monsters stop spawning, and Shadow Scroll and Soil won't generate shadows or figures.
- Ally monsters can't be sent out of their pots when the character limit is reached.

### Score (Leaderboards)

Score is calculated when you either clear a dungeon, or collapse and return from a dungeon.<br/>
The leaderboard keeps track of 30 placements per dungeon.

#### Score Formula

- The dungeon must be cleared for selling price of items and clear bonus to apply.

<br/>

<pre class="preDiagram">
  Score = (Floor - 1) * 5000 + (Gitan) + (selling price of items) + (clear bonus)
</pre>

#### Clear Bonus

- Shuten Trails, Onigashima, Road to the End = 5,000.
- Sealed Room = 450,000.
    - You can't obtain the clear bonus once all 5 children have been rescued.
    - The floor number you rescue a child on does not affect the clear bonus.
    - Floor = 20 in the score formula when Sealed Room is cleared.
- Halfway Well = 500,000.
    - Floor = 10 in the score formula when Halfway Well is cleared.

## Item

### Synthesis

Synthesis is a mechanic that lets you modify one item using another item.


- The item to be modified is called the base, and the secondary item is called the ingredient.
    - In a broad sense, the base can also be considered an ingredient.
- The first item inserted into a Synthesis Pot or thrown at a Mixer becomes the base,<br/>and items inserted or thrown afterward are the ingredients.
- Generally, the item used as a base will not be lost or transformed.
    - However, items used as ingredients will be consumed and lost.
- Weapons, shields, and staves are the three item categories that can act as a base.
    - Ingredients must be the same category as the base item when using a Synthesis Pot.

#### Staff Synthesis

Only staves with identical names can be synthesized together.<br/>
Synthesizing staves will add the number of uses together, and will also identify the staff.

#### Weapon, Shield Synthesis

- Synthesize weapons with weapons, or shields with shields.
- Upgrade value and special abilities will be added / transferred to the base item.
    - Special abilities on equipment are called seals in Shiren 2.
    - Seals are depicted as a single Japanese character.
    - Upgrade value is the + or - number after the item's name, such as Katana+1.
- The max upgrade value for all weapons and shields is +99.
- Weapons and shields have a limited number of seal slots.
    - Unlike other games, you cannot fit every seal in the game into one weapon or shield.
- Each weapon or shield has a set number of slots, but the number of slots can be increased.
    - The max number of slots is 16.
- Plating (金) and curse (呪) are counted as seals in Shiren 2.
- Effects can stack when the same seal is synthesized multiple times.
    - Example: 1 弟 seal restores 4 HP, 2 弟 seals restores 7 HP, and so on.
- Some two-handed weapons and shields can only be used as a base in synthesis.

Things that affect seals:

- Synthesis Pot
- Plating Scroll
- Purify Scroll
- Mixer monsters
- Straw Voodoll monsters
- Monsoon Doll
- Gyandora
- Blacksmith (Shuten Halfway)
- 帰 seal

Things that affect seal slots:

- Blank Scroll
- Mixer monsters
- Gyandora

#### Mixer Synthesis

- Synthesize different category items when a weapon or shield is used as a base.
    - Example: Grasses, scrolls, etc.
- Different category items can only be synthesized by throwing items at a Mixer monster.
    - To be clear, you cannot synthesize different category items using a Synthesis Pot.

List of ingredients and resulting seals:<br/>
(See Seals for details)

- Dragon Grass (火)
- Flame Grass (火)
- Otogiriso (弟)
- Herb (薬)
- Life Grass (命)
- Antidote Grass (消 - shield only)
- Strength Grass (ち - weapon only)
- Happy Grass (幸)
- Angel Seed (天)
- Unlucky Seed (不, 呪)
- Disaster Seed (超, 呪)
- Slumber Scroll (眠)
- Purify Scroll (祓)
- Identify Scroll (識)
- Retreat Scroll (帰)
- Blank Scroll (seal slot +1)
- Riceball (飯)
- Large Riceball (飯)
- Giant Riceball (飯)
- Specialty Riceball (飯)
- Silver Arrow (銀)
- Dragon Tile Bracelet (中)

#### Seal Order

- Seals will be added in the same order as the order of ingredients.
- If an ingredient has an innate seal, that seal will be added before the other seals.
- Example 1: Katana (三回○○○), then Drain Buster+2 (目○○○○) = Katana+2 (三回ド目○)
- Example 2: Katana (三回○○○), then Drain Buster+2 (目竜月火○) = Katana+2 (三回ド目竜)
    - The (月火) are lost because the number of seals exceeds the number of slots.
    - So remember, seals are added from the left, and innate seals are added before others.
- Example 3: Katana+2 (三回ド目○), then Homing Blade-1 (呪○○) = Katana+1 (三回ド目必)
    - Homing Blade's innate seal (必) was added first, so the curse (呪) didn't transfer.
    - The + and - values were added together, resulting in -1 upgrade value.
    - Nice if you find cursed equipment and want to add the innate seal but not the curse.
- Example 4: Katana+7 (三回ド目必), then Disposable Sword+3 (○○○) = Katana+10 (三回ド目必)
    - Disposable Sword's innate seal (捨) was not transferred, because the Katana's slots were full.
    - So as long as the base equipment's slots are filled, you can add upgrade values<br/>without adding undesirable seals.

#### Special Synthesis

- If you synthesize specific seals onto certain pieces of equipment, the item turns into a new item.
- Think of these as secret recipes to create powerful equipment.
    - Check the the item and seal pages for details regarding the mentioned items.
    - Special synthesis recipes are also listed in the item pages.

Weapons:

- Kaburasutegi
- Daisangen Sword
- Fiery Fuuma
- Healing Sword
- Wonder Pickaxe
- Ryujin Sword

Shields:

- Helix Shield
- Daisangen Shield
- Nirvana Shield

### Durability

#### Weapon Durability



#### Bracelet Durability




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


