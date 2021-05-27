export interface ThemeContextData extends ThemeData {}

export interface ThemeData {
   type: ThemeType
}

export enum ThemeType {
   Light,
   Dark
}
