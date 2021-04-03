/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
  addonRoutes as defaultAddonRoutes,
} from '@plone/volto/config';

import MainIntroViewBlock from '@package/components/Blocks/MainIntro/View';
import MainIntroEditBlock from '@package/components/Blocks/MainIntro/Edit';
import HighlightsViewBlock from '@package/components/Blocks/Highlights/View';
import HighlightsEditBlock from '@package/components/Blocks/Highlights/Edit';
import sliderSVG from '@plone/volto/icons/slider.svg';


const customBlocks = {
  mainintro: {
    id: 'mainintro',
    title: 'Main Intro',
    icon: sliderSVG,
    group: 'common',
    view: MainIntroViewBlock,
    edit: MainIntroEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  },
  highlights: {
    id: 'highlights',
    title: 'Highlights',
    icon: sliderSVG,
    group: 'common',
    view: HighlightsViewBlock,
    edit: HighlightsEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    }
  }
};

defaultBlocks.blocksConfig = { ...defaultBlocks.blocksConfig, ...customBlocks };
defaultBlocks.requiredBlocks = [];

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};

export const addonRoutes = [...defaultAddonRoutes];
export const addonReducers = { ...defaultAddonReducers };
