/ * nodo eslint-env * /
const axios = require('axios');
const addDays = require('fecha-fns / addDays');

function getDate(d = new Date()) {
    devuelve d.toJSON().split('T')[0];
}

// prueba la estructura del json es la forma en que esperamos
prueba de funcionamiento() {
    volver axios
        .obtener(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=$ {getDate ()} & api_key = DEMO_KEY`
        )
        .entonces(({ datos }) => {
            const día = getDate(addDays(nueva fecha(), 1));

            // esto también arrojará si no podemos acceder al valor
            let dayData = null;
            tratar {
                dayData = data.near_earth_objects[día];
            } captura(e) {
                lanzar un nuevo error
                'Estructura de datos inesperada, estaba buscando: root.near_earth_objects [matriz]'
        );
}

if (!dayData) {
    lanzar nuevo Error('Falta algún día para mañana');
}

const primero = dayData[0];
if (typeof first.is_potentially_hazardous_asteroid === 'undefined') {
    lanzar un nuevo error
    'Falta la clave "is_potentially_hazardous_asteroid" del primer punto de datos, suponiendo que los datos restantes son incorrectos.'
        );
}
    });
}

prueba().captura((e) => {
    console.log(`Falló: $ {e.message}`);
    process.exit(1);
});