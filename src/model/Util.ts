export const pickRndFromArray = <T>(array : T[], nbr : number) => {
    const picked : T[] = [];
    for(let i=0; i<nbr; i++){
        if(array.length === 0) break;
        const rndIdx = Math.floor(Math.random() * array.length);
        picked.push(array[rndIdx]);
    }
    return picked;
}