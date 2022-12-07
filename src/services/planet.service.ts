import { Planet } from "../model/planet";

const url = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': String(process.env.KEY_PLANET_API),
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

export async function getPlanets() {

    const list: Planet[] = await fetch(`${url}/planet/list`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
    
    list.sort((a,b) => a.id - b.id);

    list.map((item: any) => ({ 
        id: item.id,
        key: item.key,
        name: item.name,
        description: item.description,
        imgUrl: item.imgSrc[0].img,
        mass: item.basicDetails[0].mass,
        volume: item.basicDetails[0].volume,
    } as Planet));

    return list;
}