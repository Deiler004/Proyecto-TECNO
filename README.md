# El Reino de las Matemáticas

Aventura original de plataformas 2D desarrollada con HTML5 Canvas, CSS3 y JavaScript moderno. No requiere compilación ni frameworks.

## Ejecutar

El proyecto no requiere instalación de dependencias ni compilación. Debe abrirse con un servidor HTTP local; no abras `index.html` directamente con `file://`, porque el navegador restringe la carga de los archivos JSON y módulos en ese modo.

### Opción 1: servidor de Python

1. Abre la carpeta del proyecto en VS Code.
2. Abre una terminal en VS Code (**Terminal > Nueva terminal**) y asegúrate de que la terminal esté en la carpeta raíz del proyecto, donde se encuentra `index.html`.
3. Para abrir el sitio solo en esta PC, ejecuta:

   ```powershell
   py -m http.server 8000
   ```

   Si el comando `py` no está disponible, prueba `python -m http.server 8000`.
4. Abre [http://localhost:8000](http://localhost:8000) en el navegador.
5. Para que otra PC de la misma red local pueda acceder:
   - Inicia el servidor escuchando en las interfaces de red:

     ```powershell
     py -m http.server 8000 --bind 0.0.0.0
     ```

     Si usas `python` en lugar de `py`, ejecuta `python -m http.server 8000 --bind 0.0.0.0`.
   - En la PC que ejecuta el servidor, abre otra terminal y ejecuta `ipconfig`. Busca la dirección **IPv4** del adaptador conectado a la misma red que la otra PC (por ejemplo, `192.168.1.25`).
   - En la otra PC, conectada a esa misma red, abre `http://DIRECCION-IP:8000` en el navegador, sustituyendo `DIRECCION-IP` por la dirección IPv4 encontrada; por ejemplo, `http://192.168.1.25:8000`.
   - Si Windows pregunta, permite el acceso en redes **privadas**. Si no pregunta y no hay conexión, revisa que el Firewall de Windows permita Python o el puerto 8000 en la red privada.
6. Para detener el servidor, vuelve a la terminal donde está ejecutándose y presiona **Ctrl+C**.

El servidor es para pruebas en una red local de confianza. No lo expongas directamente a Internet ni configures reenvío del puerto 8000 en el router.

### Opción 2: Live Server en VS Code

1. Instala la extensión **Live Server** si aún no la tienes.
2. Abre `index.html`, haz clic derecho en el editor y selecciona **Open with Live Server**.
3. Se abrirá el proyecto en el navegador.

## Controles

- A / ← y D / →: moverse.
- Shift: correr.
- Espacio / ↑ / W: saltar; solo se activa al estar en el suelo.
- Escape: pausar.
- Tab y Enter: navegar y activar los botones de los paneles.

## Contenido implementado

- Tres mundos de campaña seleccionables: Las Praderas Numéricas (patrones y sucesiones), el Bosque de las Fracciones (suma, resta, multiplicación y división) y las Cumbres Algebraicas (resolver ecuaciones para encontrar x).
- Cada mundo tiene una identidad ambiental propia: pradera abierta con piedras numéricas, bosque con árboles, hongos y luciérnagas, y cumbres con picos nevados, rocas y cristales.
- Recorridos ampliados a 6.000, 7.600 y 9.000 unidades, con trazados propios: pradera de saltos amplios, bosque de pasarelas irregulares y cumbres con suelo a distintas alturas.
- Dificultad gradual: los niveles 2 y 3 amplían los recorridos, presentan más huecos y enemigos más rápidos; las preguntas se limitan al tema del mundo y pasan de fácil a intermedia y difícil.
- Cada recorrido tiene 9, 13 y 16 bloques matemáticos, respectivamente, con retos distribuidos por el nivel y sin repetir una pregunta del mismo mundo hasta agotar su banco.
- Cada nivel tiene checkpoint propio, meta, escenario y conjunto propio de monedas y bloques. Completar un nivel desbloquea el siguiente.
- Monedas, efectos de partículas y bloques matemáticos, de pista y recompensa.
- 80 preguntas con respuesta y explicación, cinco temas generales y tres dificultades; cada pregunta se asigna a un mundo según su especialidad.
- Al menos dos retos de solución abierta por mundo, con patrones distintos, problemas cotidianos de fracciones y ecuaciones algebraicas contextualizadas; las ecuaciones se comprueban por su solución matemática.
- El reto permite salir sin penalización ni consumir el bloque; al acertar, la acción de salida desaparece.
- El historial visto sobrevive reinicios de campaña y, al agotar un ciclo, evita repetir inmediatamente la última pregunta.
- Las opciones de respuesta se mezclan en cada aparición; el banco elige preguntas al azar y evita repetirlas hasta agotar el tema del mundo.
- Las pistas aumentan de especificidad al reintentar: primero orientan y, tras otro fallo, muestran la explicación completa.
- Competencias por tema muestran aciertos, intentos, precisión y la siguiente meta de dominio; hitos parciales dan XP y reconocen rachas.
- Misiones acreditan y entregan su recompensa automáticamente al alcanzar el objetivo.
- Experiencia, niveles, tres misiones, cinco insignias y tienda cosmética.
- Guardado automático en LocalStorage, progreso de nivel y prevención de duplicar monedas recogidas.
- Los enemigos quedan sobre una plataforma y su patrulla se recorta al mismo tramo de suelo, sin flotar sobre huecos.
- El historial de preguntas mostradas se guarda por mundo para evitar repeticiones al recargar la partida; el banco solo vuelve a empezar al agotar sus preguntas disponibles.
- Penalizaciones: −5 monedas por golpe enemigo, −10 al caer al abismo y −5 por respuesta incorrecta; las monedas nunca bajan de cero.
- La tienda permite comprar sin equipar automáticamente, usar cualquier traje adquirido y volver al traje original; el traje elegido se guarda.
- Los errores en desafíos descuentan monedas sin revelar la respuesta; muestran una pista y permiten reintentar. Cada nuevo intento incorrecto aplica otra penalización.
- Paneles de guía, pausa, opciones, logros, tienda y desafíos; sonidos originales sintetizados con Web Audio.

## Criterios de la rúbrica

1. **Solución abierta:** cada mundo incluye un reto escrito con varias respuestas aceptadas; en patrones, fracciones y ecuaciones se pueden proponer alternativas con procedimiento. Las fracciones equivalentes se comprueban numéricamente; una propuesta matemática nueva con procedimiento se registra como alternativa explicada.
2. **Reconocimiento parcial:** cada tema reconoce hitos de 1, 3, 5, 10 y 15 aciertos con XP, y también se celebran rachas.
3. **Dificultad incremental y prueba/error:** la dificultad sube por mundo y nivel del jugador; los errores dan pistas progresivas y permiten intentar de nuevo con una penalización moderada.
4. **Alternativas:** los retos abiertos aceptan varias soluciones y el orden de las opciones cerradas cambia al presentarse.
5. **Aleatoriedad:** se elige al azar dentro del banco temático, sin repetir hasta agotar preguntas disponibles.
6. **Retroalimentación:** cada desafío muestra procedimiento; los fallos reciben primero una pista y luego una explicación más completa.
7. **Nivel de competencia:** el panel Competencias muestra aciertos, intentos, precisión y la siguiente meta en cada tema.
8. **Descubrimiento y desbloqueo:** bloques secretos e insignias reconocen exploración, y completar un mundo desbloquea el siguiente.
9. **Automatización:** guardado automático, checkpoints, progresión de dificultad y cobro automático de misiones.

La validación de texto libre no puede demostrar formalmente cualquier procedimiento; las respuestas abiertas reconocen propuestas explicadas para permitir estrategias distintas. Las interacciones recientes de salida y reinicio quedan pendientes de prueba en navegador si el servidor local no está activo.

## Guardado

La partida se guarda en el navegador con la clave `reino-matematicas-save-v1`. «Continuar» retoma el progreso guardado. «Jugar» solicita confirmación antes de borrar ese progreso. El audio se activa tras una interacción del jugador.

## Alcance actual

La campaña incluye tres niveles. Incluye efectos de sonido, pero todavía no música continua ni controles táctiles; pueden añadirse en una versión posterior.

## Comprobaciones de campaña

- Verificado en navegador: «Continuar» inicia una partida nueva si aún no hay progreso y retoma el mundo guardado después de recargar.
- Los bloques matemáticos están antes de la bandera final de cada mundo para que se puedan resolver antes de completar el nivel.
- Verificado en navegador: el mapa mantiene mundos futuros bloqueados hasta que exista progreso de campaña; los mundos desbloqueados se pueden seleccionar directamente.
- Simulación de físicas para los tres recorridos: se alcanzó la meta sin caídas, con 7, 10 y 12 saltos principales; aumentan de 7 a 10 y 13 enemigos y de 15 a 22 y 27 bloques totales.
- Verificado que los enemigos de los tres mundos están sobre terreno sólido y patrullan dentro de ese tramo; los 9, 13 y 16 bloques matemáticos tienen una plataforma cercana y altura de salto alcanzable.
- Verificado que cada mundo dispone de suficientes preguntas propias, que no se repiten dentro de un ciclo y que el historial evita repetir la última pregunta tras recargar.
- Verificado: las preguntas empiezan en fácil, pasan a intermedio en el segundo mundo y a difícil en el tercero.
- Comprobación pendiente en navegador para la versión actual: los cambios de solución abierta, competencias y misiones automáticas tienen validación estática, pero el servidor local no estuvo disponible en esta sesión.
- Verificado: los tres mundos solo seleccionan preguntas de su tema propio; el banco de fracciones incluye suma, resta, multiplicación y división, y hay varias ecuaciones difíciles distintas para practicar el valor de x.
- Verificado visualmente: cada escenario tiene siluetas, decoraciones, texturas, paleta y símbolos propios; el título del mundo ya no se superpone con los contadores del HUD.
- Verificado: la colisión con la meta emite el evento del mundo correcto en cada nivel; los paneles de pausa/reinicio funcionan.
- Diagnósticos de los módulos JavaScript: sin errores. También se corrigió una excepción detectada en el panel de pausa durante estas pruebas.
