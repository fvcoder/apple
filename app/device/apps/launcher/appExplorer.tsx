import { Carousel } from "~/core/components/carousel";
import { useCarousel } from "~/core/hooks/useCarousel";

export function AppExplorerRoot({ children }: { children: React.ReactNode }) {
  return <Carousel className="flex-1">{children}</Carousel>;
}

export function AppExplorerContent() {
  const carousel = useCarousel();

  return (
    <div ref={carousel.carouselRef} className="size-full flex-1 overflow-hidden" data-slot="carousel-content">
      <div className="flex size-full">
        <div
          role="group"
          aria-roledescription="slide"
          data-slot="carousel-item"
          className="size-full min-w-0 flex-1 shrink-0 grow-0 basis-full"
        >
          <div className="mx-auto grid h-full w-94.5 grid-cols-4 grid-rows-6 gap-x-7">
            {Array.from({ length: 6 * 4 }).map((_, i) => (
              <div key={`launcher-app-item-${i}`}>
                <div className="aspect-square w-full">
                  <div className="size-full rounded-2xl bg-yellow-500">asa</div>
                </div>
                <div className="line-clamp-1 text-center">Nombre de una app muy extenso</div>
              </div>
            ))}
          </div>
        </div>
        <div
          role="group"
          aria-roledescription="slide"
          data-slot="carousel-item"
          className="size-full min-w-0 flex-1 shrink-0 grow-0 basis-full"
        >
          <div className="mx-auto grid h-full w-94.5 grid-cols-4 grid-rows-6 gap-x-7">
            {Array.from({ length: 6 * 4 }).map((_, i) => (
              <div key={`launcher-app-item-p2-${i}`}>
                <div className="aspect-square w-full">
                  <div className="size-full rounded-2xl bg-yellow-500">asa</div>
                </div>
                <div className="line-clamp-1 text-center">Nombre de una app muy extenso</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const AppExplorer = {
  Root: AppExplorerRoot,
  Content: AppExplorerContent,
};
