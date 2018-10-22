'use strict';

const locations = {
    'home': {
        'title': 'Minha casa',
        'position': {
            'lat': -19.84420992756324,
            'lng': -44.02327867511599
        },
        'description': 'Local onde moro'
    },
    'college': {
        'title': 'CEFET-MG Campus II',
        'position': {
            'lat': -19.939387771031402,
            'lng': -43.99924625977172
        },
        'description': 'Local onde estudo'
    },
    'work': {
        'title': 'Portulan',
        'position': {
            'lat': -19.94792713656676,
            'lng': -43.926387748132356
        },
        'description': 'Local onde trabalho'
    }
};

let myLocation = (() => {
    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();
    let locale = locations.home;

    if (day == 1) {
        if (hour >= 13 && hour <= 18) {
            locale = locations.work;
        }
    } else if (day >= 2 && day <= 4) {
        if (hour >= 10 && hour < 13) {
            locale = locations.college;
        } else if (hour >= 13 && hour <= 18) {
            locale = locations.work;
        }
    } else if (day == 5) {
        if (hour >= 8 && hour < 11) {
            locale = locations.college;
        } else if (hour >= 11 && hour <= 16) {
            locale = locations.work;
        }
    }

    return locale;
})();

function getWeatherInfo(lat, lon, callback) {
    const APIkey = '5776215ec77ae477b583a359b80aaecd';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&units=metric&appid=${APIkey}`);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.response);
            }
        }
    };
    xhr.send();
}

((lat, lon) => {
    let description = {
        200: 'está trovoando com chuva leve. Traga seu guarda-chuva.',
        201: 'está trovoando com chuva. Traga seu guarda-chuva.',
        202: 'está trovoando com chuva forte. Recomendo que espere um pouco antes de sair de casa.',
        210: 'está com trovoada leve. Talvez possa chover. Se prepare.',
        211: 'está trovoando. Talvez possa chover. Se prepare.',
        212: 'está com trovoada pesada. Talvez possa chover. Se prepare.',
        221: 'está com trovoada irregular. Talvez possa chover. Se prepare.',
        230: 'está trovoando com garoa fraca. Se não estiver de chapinha, venha despreocupado.',
        231: 'está trovoando com garoa. Traga seu guarda-chuva.',
        232: 'está trovoando com garoa pesada. Traga seu guarda-chuva.',
        300: 'está com garoa fraca. Se não estiver de chapinha, venha despreocupado.',
        301: 'está garoando. Traga seu guarda-chuva.',
        302: 'está com garoa intensa. Traga seu guarda-chuva.',
        310: 'está com chuva leve. Traga seu guarda-chuva.',
        311: 'está com chuva fraca. Traga seu guarda-chuva.',
        312: 'está com chuva forte. Recomendo que espere um pouco antes de sair de casa.',
        321: 'está com chuva de garoa. Traga seu guarda-chuva.',
        500: 'está com chuva fraca. Traga seu guarda-chuva.',
        501: 'está com chuva moderada. Traga seu guarda-chuva.',
        502: 'está com chuva pesada. Recomendo que espere um pouco antes de sair de casa.',
        503: 'está com chuva muito forte. Recomendo que espere um pouco antes de sair de casa.',
        504: 'está com chuva forte. Recomendo que espere um pouco antes de sair de casa.',
        511: 'está com chuva com congelamento. Recomendo que espere um pouco antes de sair de casa.',
        520: 'está com chuva moderada. Traga seu guarda-chuva.',
        521: 'está chuvendo. Traga seu guarda-chuva.',
        522: 'está com chuva pesada. Recomendo que espere um pouco antes de sair de casa.',
        701: 'está com névoa. Dirija com atenção.',
        711: 'está com fumaça. Dirija com atenção.',
        721: 'está com neblina. Dirija com atenção.',
        731: 'está com turbilhões de areia/poeira. Dirija com atenção.',
        741: 'está com neblina. Dirija com atenção.',
        800: 'está com céu claro. Tempo perfeito para uma caminhada.',
        801: 'está com algumas nuvens, mas isso não é motivo para se preocupar!',
        802: 'está com nuvens dispersas, mas isso não é motivo para se preocupar!',
        803: 'está com nuvens quebradas, mas isso não é motivo para se preocupar!',
        804: 'está com tempo nublado, mas isso não é motivo para se preocupar!',
        900: 'tem um tornado acontecendo. Não venha por agora!',
        901: 'tem uma tempestade tropical acontecendo. Traga seu guarda-chuva.',
        902: 'tem um furacão acontecendo. Não venha por agora!',
        903: 'está bem frio. Traga agasalhos.',
        904: 'está bem quente. Traga uma bebida refrescante.',
        905: 'está ventando. Que tal trazer uma pipa?',
        906: 'está caindo granizo. Não venha por agora!',
        950: 'o clima está ameno. Tempo perfeito para uma caminhada.',
        951: 'o calmo. Tempo perfeito para uma caminhada.',
        952: 'está com uma briza leve. Tempo perfeito para uma caminhada.',
        953: 'está com uma briza gentil. Tempo perfeito para uma caminhada.',
        954: 'está com uma briza moderada. Tempo perfeito para uma caminhada.',
        955: 'está com uma briza fresca. Tempo perfeito para uma caminhada.',
        956: 'está com uma briza forte. Não venha de chapeu!',
        957: 'está com ventos fortes. Não venha de paraquedas!',
        958: 'tem um vendaval acontecendo. Não venha de paraquedas!',
        959: 'tem um vendaval forte acontecendo. Não venha de paraquedas!',
        960: 'tem uma tempestade acontecendo. Não venha por agora!',
        961: 'tem uma tempestade violenta acontecendo. Não venha por agora!',
        962: 'tem um furacão acontecendo. Não venha por agora!'
    };
    let temp = document.querySelector('#temp');
    let info = document.querySelector('#info');
    getWeatherInfo(lat, lon, (weather) => {
        temp.innerHTML = weather.main.temp;
        info.innerHTML = description[weather.weather[0].id] ?
            description[weather.weather[0].id] : '. Não sei bem como está o clima por aqui.';
        temp.parentElement.classList.remove('hidden');
    });
})(myLocation.position.lat, myLocation.position.lng);

function initMap() {
    let infoWindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    
    const map = new google.maps.Map(document.getElementById('map'));
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directionsPanel'));

    const placeMarkers = (arrLocations) => {
        let markers = arrLocations.map((value) => {
            value.map = map;
            return new google.maps.Marker(value);
        });

        markers.forEach((marker) => {
            bounds.extend(marker.position);
            google.maps.event.addListener(marker, 'click', () => {
                infoWindow.setContent(marker.description);
                infoWindow.open(map, marker);
            });
        })

        map.setCenter(bounds.getCenter());
        map.fitBounds(bounds);
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            locations.user = {
                'title': 'Sua localização',
                'position': {
                    'lat': position.coords.latitude,
                    'lng': position.coords.longitude
                },
                'description': 'Local onde você se encontra'
            };

            directionsService.route({
                origin: locations.user.position,
                destination: myLocation.position,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            }, (response, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        });
    } else {
        placeMarkers([locations.home,locations.college, locations.work]);
        document.getElementById('directionsPanel').remove();
    }
}