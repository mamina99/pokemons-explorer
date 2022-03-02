export default interface Pokemon {
    id: number;
    abilities: {
        ability: {name: string}
    }[],
    base_experience: number,
    height: number,
    name: string,
    sprites: any,
    stats: {
        base_stat: number,
        stat: {
            name: string,
        }
    }[],
    types: {
        type: {
            name: string,
        }
    }[],
    weight: number
}