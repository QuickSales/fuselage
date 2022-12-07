import type { LayoutBlock } from '@quickchat.vn/ui-kit';

export type ItemProps = {
  label: string;
  layer: number;
  payload?: readonly LayoutBlock[];
  children?: ReadonlyArray<JSX.Element>;
};

export type ItemBranch = {
  label: string;
  branches?: Item;
  payload?: readonly LayoutBlock[];
};

export type Item = ItemBranch[];
