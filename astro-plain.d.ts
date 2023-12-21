// Remove the declaration of the module "astro-plain"
// declare module "astro-plain";

export type Meta = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  [key: string]: string | undefined;
};

export type HeadProps = {
  charSet?: string;
  title?: string;
  titleJoiner?: string;
  author?: string;
  canonical?: string;
  serviceWorkerScript?: string;
  manifest?: string;
  favicon?: string;
  faviconType?: string;
  tmid?: string;
  appleTouchIcons?: string[];
  webComponents?: string[];
  externalStyles?: string[];
  externalScripts?: string[];
  criticalStyles?: string;
  criticalScripts?: string;
  image?: string;
  meta?: Meta;
  lang?: string;
  twitterMeta?: boolean;
  ogMeta?: boolean;
};

export type HeadComponent = (props: HeadProps) => string;

export type Props = {
  title?: string;
  titleJoiner?: string;
  charSet?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  class?: string;
  serviceWorkerScript?: string;
  manifest?: string;
  favicon?: string;
  faviconType?: string;
  tmid?: string;
  appleTouchIcons?: string[];
  webComponents?: string[];
  externalStyles?: string[];
  externalScripts?: string[];
  criticalStyles?: string;
  criticalScripts?: string;
  image?: string;
  meta?: Meta;
  lang?: string;
  twitterMeta?: boolean;
  ogMeta?: boolean;
};

export type HeadComponent = (props: HeadProps) => string;
export type AstroPlain = (props: Props) => string;

declare module "astro-plain" {
  export const Head: HeadComponent;
  export const Body: AstroPlain;
}
