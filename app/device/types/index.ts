export interface AppOptions {
  icon: () => React.JSX.Element;
}

export type App = () => React.JSX.Element & AppOptions;
