interface INavigation {
    navigate: (path: string) => void;
}

export interface IHomeProps {
    navigation: INavigation;
}

export interface IPokemon {
    name: string;
    url: string;
    _id: string;
}

export interface IPokemonsData {
    data: IPokemon[];
}

export interface IAxiosPokemonsData {
    data: IPokemonsData;
}

export interface IPokemonsProps {
    item: IPokemon[];
}

export interface IPokemonListProps {
    pokemon: IPokemon;
}
