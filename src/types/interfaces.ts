interface INavigation {
    push: (path: string, params: IParams) => void;
    pop: () => void;
}

interface IParams {
    pokemonURL: string;
}

interface IRoute {
    params: IParams;
}

export interface IPokemonDetailsProp {
    route: IRoute;
    navigation: INavigation;
}

export interface IHomeProps {
    navigation: INavigation;
}

export interface IPokemon {
    name: string;
    url: string;
    id: string;
    height: number;
    weight: number;
    sprites: string
}

export interface IPokemonsData {
    data: IPokemon[];
}

export interface IAxiosPokemonsData {
    data: IPokemonsData;
}

export interface IAxiosPokemonDetailsData {
    data: IPokemon;
}

export interface IPokemonsProps {
    item: IPokemon;
}

export interface IPokemonListProps {
    pokemon: IPokemon;
    handleDetails: (pokemonURL: string) => void;
}

export interface IBackButtonProps {
    OnPress: () => void
}