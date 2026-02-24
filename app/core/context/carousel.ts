import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { createContext } from "react";

export type CarouselApi = UseEmblaCarouselType[1];

export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

export type CarouselOptions = UseCarouselParameters[0];

export type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

export type EmblaCarouselApi = ReturnType<typeof useEmblaCarousel>[1];

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: EmblaCarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

export const CarouselContext = createContext<CarouselContextProps | null>(null);
