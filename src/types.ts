export type Modes = ModeItem[];

export interface ModeItem {
  name: ModeName;
  field: ModeField;
}

export type ModeName = string;

export type ModeField = number;
