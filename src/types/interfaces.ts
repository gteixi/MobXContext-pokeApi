interface INavigation {
    navigate: (path: string) => void;
}

export interface IHomeProps {
    navigation: INavigation;
}