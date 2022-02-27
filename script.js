(function (win, doc) {
    var player = doc.getElementById('player');
    var lyrics = doc.getElementById('lyrics');
    var syncData = [
        { 'flag': false, 'text': '♫...', 'start': '00.00', 'end': '71.00' },
        { 'flag': false, 'text': 'Suavemente', 'start': '71.00', 'end': '73.50' },
        { 'flag': false, 'text': 'mis dedos tocan las gotas de la noche.', 'start': '73.70', 'end': '79.80' },
        { 'flag': false, 'text': 'La ventana de la luna está brillando', 'start': '80.20', 'end': '86.70' },
        { 'flag': false, 'text': 'de repente,', 'start': '89.17', 'end': '90.73' },
        { 'flag': false, 'text': 'sin razón, mis lagrimas se derraman', 'start': '90.73', 'end': '97.50' },
        { 'flag': false, 'text': 'del fondo de mi corazón', 'start': '97.80', 'end': '105.25' },
        { 'flag': false, 'text': 'incluso con este tipo de, este tipo de dolor', 'start': '106.30', 'end': '110.90' },
        { 'flag': false, 'text': 'pretendo como si no lo sintiera', 'start': '110.90', 'end': '115.00' },
        { 'flag': false, 'text': 'riendo e incluso llorando,', 'start': '115.60', 'end': '119.6' },
        { 'flag': false, 'text': 'Yo', 'start': '119.6', 'end': '120.66' },
        { 'flag': false, 'text': 'estoy actuando, no soy nadie.', 'start': '121.00', 'end': '126.41' },
        { 'flag': false, 'text': 'Oh!', 'start': '126.41', 'end': '128.61' },
        { 'flag': false, 'text': 'Ah,', 'start': '128.61', 'end': '130.21' },
        { 'flag': false, 'text': 'cuando despierto de este sueño', 'start': '130.21', 'end': '135.90' },
        { 'flag': false, 'text': 'están aún ahí los invariables días', 'start': '137.20', 'end': '141.33' },
        { 'flag': false, 'text': 'del escenario monocromático.', 'start': '141.33', 'end': '146.14' },
        { 'flag': false, 'text': 'Hey,', 'start': '146.14', 'end': '147.70' },
        { 'flag': false, 'text': 'alguien digame el significado de vivir', 'start': '147.70', 'end': '154.28' },
        { 'flag': false, 'text': 'creciendo sin color y con una vida a medias,', 'start': '154.28', 'end': '158.96' },
        { 'flag': false, 'text': 'sin rumbo, avanzando por este zigzagueante camino.', 'start': '158.96', 'end': '168.25' },
        { 'flag': false, 'text': '♫...', 'start': '168.4', 'end': '214.84' },
        { 'flag': false, 'text': 'Mañana', 'start': '214.84', 'end': '217.48' },
        { 'flag': false, 'text': 'si este mundo llegase a su fin', 'start': '217.48', 'end': '223.97' },
        { 'flag': false, 'text': '¿Qué podría desear?', 'start': '224.54', 'end': '231.57' },
        { 'flag': false, 'text': 'Si solo uno, sólo uno pudiese volverse realidad', 'start': '231.57', 'end': '237.47' },
        { 'flag': false, 'text': 'quisiera saber la razón de por qué nací', 'start': '237.47', 'end': '241.34' },
        { 'flag': false, 'text': 'pero incluso si lo deseo, incluso si lo deseo', 'start': '241.34', 'end': '246.46' },
        { 'flag': false, 'text': 'sigo sin saberlo, que triste es esto', 'start': '246.46', 'end': '252.97' },
        { 'flag': false, 'text': 'Oh!', 'start': '252.97', 'end': '255.2' },
        { 'flag': false, 'text': 'Digo, si yo muriera', 'start': '255.2', 'end': '263.24' },
        { 'flag': false, 'text': 'y me convirtiera en ceniza el mundo seguiría girando', 'start': '263.24', 'end': '272.63' },
        { 'flag': false, 'text': 'Incluso si no sé nada, el tiempo sigue fluyendo', 'start': '272.63', 'end': '281.60' },
        { 'flag': false, 'text': 'la historia continua', 'start': '281.60', 'end': '285.19' },
        { 'flag': false, 'text': 'con cada tipo de velocidad', 'start': '285.19', 'end': '289.48' },
        { 'flag': false, 'text': 'Si pudiera estar junto a ti por siempre', 'start': '289.48', 'end': '298.33' },
        { 'flag': false, 'text': 'no habría nada más', 'start': '298.33', 'end': '307.56' },
        { 'flag': false, 'text': 'No necesito nada, ni de nadie más en este mundo', 'start': '307.56', 'end': '316.55' },
        { 'flag': false, 'text': 'sólo diré que desde ahora', 'start': '316.55', 'end': '320.23' },
        { 'flag': false, 'text': 'me des tu mano y caminemos juntos.', 'start': '320.23', 'end': '329.74' },
        { 'flag': false, 'text': '♫...', 'start': '329.74', 'end': '378.00' },
    ];

    player.addEventListener('timeupdate', function (e) {
        syncData.forEach(function (element, index, array) {
            if (player.currentTime >= element.start && player.currentTime <= element.end) {
                var p;
                if (!element.flag) {
                    var id = `p_${index}`;

                    p = doc.createElement('p');
                    p.innerText = element.text + ' ';
                    p.setAttribute('id', id);
                    lyrics.appendChild(p);
                    p.classList.add('box', 'faded-out');

                    requestAnimationFrame(() => {
                        p.classList.remove('faded-out')
                    });

                    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.flag = true;
                } else {
                    document.getElementById(`p_${index}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });
}(window, document));