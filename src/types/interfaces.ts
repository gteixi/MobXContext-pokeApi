
// REVIEW: try to use interfaces from react-navigation instead or rewriting your own interfaces or you'll need to rewrite all the functions definitions (for example, you'll need to rewrite navigate and goBack)...
// also try to keep your interfaces separated for domain. This is a good practice to keep your code clean and easy to read.

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

// REVIEW: you can reuse the definition of IPokemon from the previous interface
// REVIEW2: probably this is a bad name, is not a pokemon, is a list of pokemons
export interface INextPokemon {
    next: string,
    results: IPokemon[],
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