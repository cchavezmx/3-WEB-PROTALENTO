#Teoria del testing

---

# <p align="center">Tipos de pruebas</p>

- ### **Pruebas unitarias:**

  Son pruebas que se enfocan en verificar el comportamiento individual de cada unidad o componente de código. Se realizan en un entorno controlado y aislado, y se utilizan para garantizar que cada componente funciona correctamente antes de integrarlos juntos.

- ### **Pruebas de integración**

  Son pruebas que se enfocan en verificar la interacción entre diferentes componentes o unidades de código. Se realizan para asegurarse de que los componentes trabajen juntos de manera efectiva y produzcan resultados esperados.

- ### **Pruebas end-to-end**
  Son pruebas que se enfocan en verificar el funcionamiento completo de un sistema, desde el inicio hasta el final. Se realizan para simular la experiencia del usuario final y asegurarse de que el sistema funciona como se espera en un entorno realista.

---

# <p align="center">¿Cúales hago?</p>

# Piramide de pruebas

![Piramide de pruebas](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)
_Discurso de apertura de la Conferencia de Automatización de Pruebas de Google de 2014_

La mayor parte de sus pruebas son pruebas unitarias en la parte inferior de la pirámide. A medida que asciende en la pirámide, sus pruebas se hacen más grandes, pero al mismo tiempo el número de pruebas (el ancho de su pirámide) se hace más pequeño.

Como primera suposición, Google suele sugerir una división 70/20/10: 70 % de pruebas unitarias, 20 % de pruebas de integración y 10 % de pruebas de extremo a extremo. La combinación exacta será diferente para cada equipo, pero en general, debe conservar esa forma de pirámide. Intenta evitar estos antipatrones:

**Pirámide invertida/cono de helado:**
El equipo se basa principalmente en pruebas de extremo a extremo, utilizando pocas pruebas de integración e incluso menos pruebas unitarias.

**Reloj de arena**
El equipo comienza con muchas pruebas unitarias, luego usa pruebas de extremo a extremo donde se deben usar pruebas de integración. El reloj de arena tiene muchas pruebas unitarias en la parte inferior y muchas pruebas de extremo a extremo en la parte superior, pero pocas pruebas de integración en el medio.

Al igual que una pirámide regular tiende a ser la estructura más estable en la vida real, la pirámide de prueba también tiende a ser la estrategia de prueba más estable.

[fuente](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

---

## Articulos recomendados

- [Errores comunes de prueba](https://kentcdodds.com/blog/common-testing-mistakes)

  - Pobar detalles de implementación
  - 100% de cobertura de código no significa que esté probando todo

- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

- [Mitos sobre las pruebas de interfaz de usuario](https://kentcdodds-com.translate.goog/blog/ui-testing-myths?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp)

---

# <p align="center">Primeros pasos</p>

Assertions
Testing Frameworks
Mocking / Spying / Stubbing / Faking

```js
const { sum } = require("../math");

const result = sum(3, 7);
const expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
```

**¿cuál es la diferencia entre un marco de prueba y una biblioteca de aserciones?**

Un marco de prueba es una herramienta que te permite escribir, ejecutar y gestionar tus pruebas de software. Proporciona una estructura y un conjunto de características para hacer más fácil y eficiente el proceso de testing. Algunos ejemplos de marcos de prueba son Jest, Vitest, playwright.

Una biblioteca de aserciones, por otro lado, es un conjunto de funciones que te permiten hacer afirmaciones sobre el comportamiento de tu código. Estas afirmaciones pueden incluir verificaciones de igualdad, verificaciones de tipos, verificaciones de valores, etc. Las bibliotecas de aserciones se utilizan en combinación con un marco de prueba para hacer más fácil y claro el proceso de escribir pruebas.

En resumen, un marco de prueba es una herramienta más amplia que incluye una biblioteca de aserciones y otras características adicionales para hacer más fácil y eficiente el proceso de testing, mientras que una biblioteca de aserciones es un conjunto específico de funciones que se utilizan para hacer afirmaciones en tus pruebas.

---

# <p align="center">¿Por qué hacemos pruebas?</p>

Creo que es importante recordar por qué escribimos pruebas en primer lugar. ¿Por qué escribes pruebas? ¿Es porque te lo dije? ¿Es porque su PR será rechazada a menos que incluya pruebas? ¿Es porque las pruebas mejoran su flujo de trabajo? La razón más grande e importante por la que escribo pruebas es la CONFIANZA. Quiero estar seguro de que el código que estoy escribiendo para el futuro no dañará la aplicación que tengo actualmente en producción. Entonces, haga lo que haga, quiero asegurarme de que los tipos de pruebas que escribo me brinden la mayor confianza posible y necesito ser consciente de las concesiones que estoy haciendo al realizar las pruebas. **_-Kent C. Dodds_**

---

## Para saber más

- [Google Testing Blog](https://testing.googleblog.com/)
- [Kent C Dodds](https://kentcdodds.com/blog?q=testing)

---

# <p align="center">Integrar test a react</p>

## Instalación

```bash
  npm i -D happy-dom
  npm install -D vitest
  npm i -D jsodom
  npm i -D @vitejs/plugin-react
  npm i -D @types/react-test-renderer
  npm i -D vite-plugin-react
```
