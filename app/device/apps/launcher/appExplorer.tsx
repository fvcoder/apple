import { Carousel } from "~/core/components/carousel";
import { useCarousel } from "~/core/hooks/useCarousel";

export function AppExplorerRoot({ children }: { children: React.ReactNode }) {
  return <Carousel className="flex-1">{children}</Carousel>;
}

const AppList = Array.from({ length: 6 * 4 * 2.5 }).map((_, i) => ({
  id: `app-id-${i}`,
  name: `App ${i + 1}`,
}));

export function AppExplorerContent() {
  const carousel = useCarousel();
  const itemsPerPage = 6 * 4; // 6 rows and 4 columns
  const itemsPages = AppList.reduce<(typeof AppList)[]>((pages, item, index) => {
    const pageIndex = Math.floor(index / itemsPerPage);
    if (!pages[pageIndex]) {
      pages[pageIndex] = [];
    }
    pages[pageIndex].push(item);

    return pages;
  }, []);

  return (
    <div ref={carousel.carouselRef} className="size-full flex-1 overflow-hidden" data-slot="carousel-content">
      <div className="flex size-full">
        {itemsPages.map((page, pageIndex) => (
          <div
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            className="size-full min-w-0 flex-1 shrink-0 grow-0 basis-full"
          >
            <div key={pageIndex} className="mx-auto grid h-full w-94.5 grid-cols-4 grid-rows-6 gap-x-7">
              {page.map((item, i) => (
                <div key={`launcher-app-list-${pageIndex}-item-${i}`}>
                  <div className="aspect-square w-full">
                    <div className="size-full rounded-2xl bg-yellow-500"></div>
                  </div>
                  <div className="mt-1 line-clamp-1 text-center text-xs select-none">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AppExplorer = {
  Root: AppExplorerRoot,
  Content: AppExplorerContent,
};
