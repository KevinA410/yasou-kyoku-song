(function (win, doc) {
    var player = doc.getElementById('player');
    var lyrics = doc.getElementById('lyrics');
    var syncData = [
        { 'visible': false, 'text': '♫...', 'start': '00.00', 'end': '71.00' },
        { 'visible': false, 'text': 'Suavemente', 'start': '71.00', 'end': '73.50' },
        { 'visible': false, 'text': 'mis dedos tocan las gotas de la noche.', 'start': '73.70', 'end': '79.80' },
        { 'visible': false, 'text': 'La ventana de la luna está brillando', 'start': '80.20', 'end': '86.70' },
        { 'visible': false, 'text': 'de repente,', 'start': '89.17', 'end': '90.73' },
        { 'visible': false, 'text': 'sin razón, mis lagrimas se derraman', 'start': '90.73', 'end': '97.50' },
        { 'visible': false, 'text': 'del fondo de mi corazón', 'start': '97.80', 'end': '105.25' },
        { 'visible': false, 'text': 'incluso con este tipo de, este tipo de dolor', 'start': '106.30', 'end': '110.90' },
        { 'visible': false, 'text': 'pretendo como si no lo sintiera', 'start': '110.90', 'end': '115.00' },
        { 'visible': false, 'text': 'riendo e incluso llorando,', 'start': '115.60', 'end': '119.6' },
        { 'visible': false, 'text': 'Yo', 'start': '119.6', 'end': '120.66' },
        { 'visible': false, 'text': 'estoy actuando, no soy nadie.', 'start': '121.00', 'end': '126.41' },
        { 'visible': false, 'text': 'Oh!', 'start': '126.41', 'end': '128.61' },
        { 'visible': false, 'text': 'Ah,', 'start': '128.61', 'end': '130.21' },
        { 'visible': false, 'text': 'cuando despierto de este sueño', 'start': '130.21', 'end': '135.90' },
        { 'visible': false, 'text': 'están aún ahí los invariables días', 'start': '137.20', 'end': '141.33' },
        { 'visible': false, 'text': 'del escenario monocromático.', 'start': '141.33', 'end': '146.14' },
        { 'visible': false, 'text': 'Hey,', 'start': '146.14', 'end': '147.70' },
        { 'visible': false, 'text': 'alguien digame el significado de vivir', 'start': '147.70', 'end': '154.28' },
        { 'visible': false, 'text': 'creciendo sin color y con una vida a medias,', 'start': '154.28', 'end': '158.96' },
        { 'visible': false, 'text': 'sin rumbo, avanzando por este zigzagueante camino.', 'start': '158.96', 'end': '168.25' },
        { 'visible': false, 'text': '♫...', 'start': '168.4', 'end': '214.84' },
        { 'visible': false, 'text': 'Mañana', 'start': '214.84', 'end': '217.48' },
        { 'visible': false, 'text': 'si este mundo llegase a su fin', 'start': '217.48', 'end': '223.97' },
        { 'visible': false, 'text': '¿Qué podría desear?', 'start': '224.54', 'end': '231.57' },
        { 'visible': false, 'text': 'Si solo uno, sólo uno pudiese volverse realidad', 'start': '231.57', 'end': '237.47' },
        { 'visible': false, 'text': 'quisiera saber la razón de por qué nací', 'start': '237.47', 'end': '241.34' },
        { 'visible': false, 'text': 'pero incluso si lo deseo, incluso si lo deseo', 'start': '241.34', 'end': '246.46' },
        { 'visible': false, 'text': 'sigo sin saberlo, que triste es esto', 'start': '246.46', 'end': '252.97' },
        { 'visible': false, 'text': 'Oh!', 'start': '252.97', 'end': '255.2' },
        { 'visible': false, 'text': 'Digo, si yo muriera', 'start': '255.2', 'end': '263.24' },
        { 'visible': false, 'text': 'y me convirtiera en ceniza el mundo seguiría girando', 'start': '263.24', 'end': '272.63' },
        { 'visible': false, 'text': 'Incluso si no sé nada, el tiempo sigue fluyendo', 'start': '272.63', 'end': '281.60' },
        { 'visible': false, 'text': 'la historia continua', 'start': '281.60', 'end': '285.19' },
        { 'visible': false, 'text': 'con cada tipo de velocidad', 'start': '285.19', 'end': '289.48' },
        { 'visible': false, 'text': 'Si pudiera estar junto a ti por siempre', 'start': '289.48', 'end': '298.33' },
        { 'visible': false, 'text': 'no habría nada más', 'start': '298.33', 'end': '307.56' },
        { 'visible': false, 'text': 'No necesito nada, ni de nadie más en este mundo', 'start': '307.56', 'end': '316.55' },
        { 'visible': false, 'text': 'sólo diré que desde ahora', 'start': '316.55', 'end': '320.23' },
        { 'visible': false, 'text': 'me des tu mano y caminemos juntos.', 'start': '320.23', 'end': '329.74' },
        { 'visible': false, 'text': '♫...', 'start': '329.74', 'end': '378.00' },
    ];

    syncData.forEach((element, index) => {
        var p = doc.createElement('p');
        p.setAttribute('id', `p_${index}`);
        p.innerText = element.text + " ";
        lyrics.appendChild(p);
        p.classList.add('box', 'faded-out');
    });

    player.addEventListener('timeupdate', () => {
        syncData.forEach((element, index) => {
            if (player.currentTime >= element.start && player.currentTime <= element.end) {
                var p = document.getElementById(`p_${index}`);
                if (!element.visible) {
                    requestAnimationFrame(() => p.classList.remove('faded-out'));
                    element.visible = true;
                }
                p.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
            }
        });
    });
}(window, document));