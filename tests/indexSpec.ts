import countries from ".."

describe('Fetch Countries using axios', ()=>{
    it('should fetch all countries', async ()=>{
        const result = await countries.getAllCountries();
        expect(result.length).toEqual(250);
        expect(result).toBeInstanceOf(Array);
    })
    it('should fetch all countries in a region', async ()=>{
        const result = await countries.getCountriesByRegion();
        expect(result.length).toEqual(59)
        expect(result).toBeInstanceOf(Array);
    })
    it('should countries name', async ()=>{
        const result = await countries.getCountriesByName();
        expect(result.length).toEqual(2)
        expect(result).toBeInstanceOf(Array);
    })
})