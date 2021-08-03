import LocationService from "./LocationService";

describe('Testing service to get Location', () => {

    // Para que este teste funcione, o Jest busca a implementação
    // mock na raiz do projeto de forma a conseguir entender a função
    // relacionada a Library instalada e referenciada no mock.
    it('Should return a latitude & longitude from current location', async () => {
        const position = await LocationService.getCurrentPosition();
        expect(position).toEqual({
            latitude: 0,
            longitude: 0,
        });
    });

});
