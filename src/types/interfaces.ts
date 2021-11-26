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

export interface INextPokemonsProps {
    navigation: INavigation;
    item: IPokemon;
}

export interface INextPageButtonProps {
    OnPress: () => void
}

export interface IPreviousPageButtonProps {
    OnPress: () => void
}

export interface IPokemon {
    name: string;
    url: string;
    id: string;
    height: number;
    weight: number;
    sprites: {
    front_default: string,
    back_default: string,
    }
}

export interface INextPokemon {
    next: string,
    results: [ 
        name: string,
        url: string,
        id: string,
        height: number,
        weight: number,
        sprites: {
        front_default: string,
        back_default: string,
        }
    ]
}

export interface IPokemonsData {
    data: IPokemon[];
}

export interface IAxiosPokemonsData {
    data: IPokemonsData;
}

export interface IAxiosNextPokemonsData {
    data: INextPokemon;
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