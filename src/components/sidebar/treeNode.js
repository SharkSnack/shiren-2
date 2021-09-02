import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'bracelets': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'bracelets', title: 'Bracelets', url: '/items/bracelets'};
        items[4] = { items:[], label: 'grass', title: 'Grass', url: '/items/grass'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'pots', title: 'Pots', url: '/items/pots'};
        items[8] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        items[9] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        items[10] = { items:[], label: 'castle-decorations', title: 'Decorations', url: '/items/castle-decorations'};
        items[11] = { items:[], label: 'castle-materials', title: 'Materials', url: '/items/castle-materials'};
        items[12] = { items:[], label: 'other', title: 'Other', url: '/items/other'};
        break;
      case 'allies': // system
        items[0] = { items:[], label: 'gameplay-basics', title: 'Gameplay Basics', url: '/system/gameplay-basics'};
        items[1] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[2] = { items:[], label: 'synthesis-seals', title: 'Seals', url: '/system/synthesis-seals'};
        items[3] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        items[4] = { items:[], label: 'statues', title: 'Statues', url: '/system/statues'};
        items[5] = { items:[], label: 'allies', title: 'Allies', url: '/system/allies'};
        items[6] = { items:[], label: 'castle', title: 'Castle', url: '/system/castle'};
        items[7] = { items:[], label: 'golden-interval', title: 'Golden Interval', url: '/system/golden-interval'};
        items[8] = { items:[], label: 'monster-house', title: 'Monster House', url: '/system/monster-house'};
        items[9] = { items:[], label: 'monster-kingdom', title: 'Monster Kingdom', url: '/system/monster-kingdom'};
        items[10] = { items:[], label: 'status-conditions', title: 'Status Conditions', url: '/system/status-conditions'};
        break;
      case 'halfway-well': // dungeons
        items[0] = { items:[], label: 'small-valley', title: 'Small Valley', url: '/dungeons/small-valley'};
        items[1] = { items:[], label: 'shuten-trail-easy', title: 'Shuten Trail Easy', url: '/dungeons/shuten-trail-easy'};
        items[2] = { items:[], label: 'shuten-trail-mid', title: 'Shuten Trail Mid', url: '/dungeons/shuten-trail-mid'};
        items[3] = { items:[], label: 'shuten-trail-hard', title: 'Shuten Trail Hard', url: '/dungeons/shuten-trail-hard'};
        items[4] = { items:[], label: 'onigashima', title: 'Onigashima', url: '/dungeons/onigashima'};
        items[5] = { items:[], label: 'shrines-hidden-hole', title: 'Hidden Hole', url: '/dungeons/shrines-hidden-hole'};
        items[6] = { items:[], label: 'shrines-hidden-hole-b', title: 'Hidden Hole (B)', url: '/dungeons/shrines-hidden-hole-b'};
        items[7] = { items:[], label: 'sealed-room', title: 'Sealed Room', url: '/dungeons/sealed-room'};
        items[8] = { items:[], label: 'halfway-well', title: 'Halfway Well', url: '/dungeons/halfway-well'};
        items[9] = { items:[], label: 'road-to-the-end', title: 'Road to the End', url: '/dungeons/road-to-the-end'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
