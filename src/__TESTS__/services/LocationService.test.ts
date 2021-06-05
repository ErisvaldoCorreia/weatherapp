import LocationService from "../../services/LocationService";

describe('Testing service to get Location', () => {
    it('Should return a latitude & longitude from current location', async () => {
        const position = await LocationService.getCurrentPosition();
        expect(position).toEqual({
            latitude: 0,
            longitude: 0,
        });
    });
});
