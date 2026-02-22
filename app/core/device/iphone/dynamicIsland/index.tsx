/* eslint-disable check-file/folder-naming-convention */
export function DynamicIslandIPhone() {
  return (
    <div className="absolute top-3 left-1/2 z-100 -translate-x-1/2">
      <div className="flex h-10 w-34 items-center gap-1 rounded-full bg-black">
        <div className="my-2 ml-1 flex h-8 w-auto flex-1 items-center rounded-full border-4 bg-zinc-900 px-1">
          <span className="block size-2 rounded-full bg-white"></span>
        </div>
        <span className="block size-1.5 rounded-full bg-green-500"></span>
        <div className="my-2 mr-1 size-8 rounded-full border-4">
          <div className="size-full overflow-hidden rounded-full border-4 border-zinc-900">
            <div className="size-full rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
