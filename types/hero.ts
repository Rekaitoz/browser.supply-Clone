import { ReactNode } from "react";

export interface HeroButton {
  name: string;
  path: string;
}

export interface HeroData {
  badge?: {
    text: string;
    icon?: boolean;
  };

  title: ReactNode;

  description: string;

  button?: HeroButton;
}
