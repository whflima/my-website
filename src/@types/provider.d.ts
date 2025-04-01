export interface IMyProviderContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export type ProjectDropdownProps = {
  site: {
    url: string;
    blocked?: boolean;
  };
  github: {
    url: string;
    blocked?: boolean;
  };
};

export type ProjectDropdownItemProps = {
  url: string;
  title: string;
  icon: IconType;
  blocked?: boolean;
};
