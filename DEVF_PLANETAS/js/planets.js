export const getPlanetsAsync = async () => {
    try {
        const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';
        const apiKey = 'c5292ec436msha10e1e5b11ad502p151f59jsn866faf088301';
        const host = 'planets-info-by-newbapi.p.rapidapi.com';

        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': host,
            }
        });

        const listPlanets = await resp.json();
        
        return listPlanets;
        
    } catch (err) {
        console.error(err);
    }
}




