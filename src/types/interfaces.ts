interface INavigation {
    navigate: (path: string) => void;
}

export interface IHomeProps {
    navigation: INavigation;
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonsData {
    data: IPokemon[];
}

export interface IAxiosPokemonsData {
    data: IPokemonsData;
}