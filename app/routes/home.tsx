import { IPhoneDevice } from "~/core/device/iphone";

export function meta() {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  return (
    <div className="mx-auto w-fit">
      <div className="">
        <IPhoneDevice />
      </div>
    </div>
  );
}
