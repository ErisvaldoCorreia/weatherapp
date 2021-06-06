// Este é um mock reconhecido pelo Jest para simular
// os resultados dentro de uma library de forma que conseguimos
// realizar nossos testes.

// As informações usadas para montar o mock foram 
// retiradas da documentação da Lib.
function getCurrentPosition() {
    return Promise.resolve({
        latitude: 0,
        longitude: 0,
        altitude: 0,
        accuracy: 0,
        speed: 0,
        time: 0,
        bearing: 0,
        provider: 0,
        verticalAccuracy: 0,
        course: 0,
    });
};

export default { getCurrentPosition };
