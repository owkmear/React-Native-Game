export enum Grades {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

export type Theme = {
  id: string;
  name: string;
};

export type Themes = {
  [key: string]: Theme;
};
