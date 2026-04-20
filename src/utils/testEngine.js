// src/utils/testEngine.js
export function setupTest(preguntas, asignaturaNombre) {
    let indiceActual = 0;
    let aciertos = 0;
    let fallos = 0;

    const enunciadoEl = document.getElementById('enunciado');
    const opcionesContenedor = document.getElementById('opciones');

    function renderizarPregunta() {
        const p = preguntas[indiceActual];
        enunciadoEl.innerText = p.enunciado;
        opcionesContenedor.innerHTML = ''; // Limpiar botones anteriores

        p.opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            btn.innerText = opcion;
            btn.className = "p-4 border rounded-xl hover:bg-gray-100 transition";
            btn.onclick = () => comprobarRespuesta(index, p.correcta);
            opcionesContenedor.appendChild(btn);
        });
    }

    function comprobarRespuesta(seleccionado, correcta) {
        if (seleccionado === correcta) {
            aciertos++;
            // Feedback visual verde...
        } else {
            fallos++;
            // Feedback visual rojo...
        }

        // Lógica de pasar a la siguiente o terminar
        if (indiceActual < preguntas.length - 1) {
            indiceActual++;
            setTimeout(renderizarPregunta, 500);
        } else {
            finalizarTest();
        }
    }

    function finalizarTest() {
        // Guardar en LocalStorage y mostrar resultados
        const resultado = { asignaturaNombre, aciertos, fallos, fecha: new Date() };
        // ... lógica de guardado
    }

    renderizarPregunta();
}