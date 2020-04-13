# Proyecto : Data Lovers (LoL)

## Índice: 🕹️
* [1. Resúmen del proyecto](#1-Resúmen-del-proyecto)
* [2. Imagen final del proyecto](#2-Imagen-final-del-proyecto)
* [3. Proceso de desarrollo](#3-Proceso-de-desarrollo)
* [3.1. Investigación UX](#3.1.-Investigación-UX)
* [3.1.1. Principales usuarios del producto](3.1.1.-Principales-usuarios-del-producto)
* [3.1.2. Objetivos de estos usuarios en relación con el producto?](#3.1.2.-Objetivos-de-estos-usuarios-en-relacion-con-el-producto)
* [3.1.3. El producto creado está resolviendo problemas de los usuarios](#3.1.3.-El-producto-creado-está-resolviendo-problemas-de-los-usuarios)
* [3.2. Prototipado](#3.2-Prototipado)
* [3.2.1. Bosquejo en papel](#3.2.1.-Bosquejo-en-papel)
* [3.2.2. Prototipo en baja fidelidad](#3.2.2.-Prototipo-en-baja-fidelidad)
* [4. Interfaz de usuario](#4-Interfaz-de-usuario)
* [4.1. Prototipo en alta fidelidad](#4.1.-Prototipo-en-alta-fidelidad)
* [5. Objetivos de aprensizaje](#5.-Objetivos-de-aprensizaje)
* [6. Feedback](#6-Feedback)

***

## 1. Resúmen del proyecto
__________________________________

En este proyecto se ha construido una página web para visualizar un conjunto de datos que se adecua a las necesidades de usuarios principiates del e-sport denominado League of Legends.
Como entregable final la página web que permite visualizar la data, filtrarla, ordenarla y finalmente un cálculo agregado el cuál puede visualizarse a traves de un gráfico generado con la librería chart.js, cabe recalcar que este muestra información aún más relevante para los usuarios.
El área de interés que evidentemente se ha elegido es trabajr con la data de LOL, para ello se se buscó entender quién es el usuario y qué necesita saber o ver exactamente; a partir de allí se construye la interfaz que ayuda al usuario interactuar y entender mejor esos datos.

## 2. Imagen final del proyecto
____________________________________
**Header**
![](./src/assets/  )

**Main**
![](./src/assets   )

**Footer**
![](./src/assets   )


## 3. Proceso de desarrollo
_____________________________
Para cumplir con el objetivo principal de este proyecto se tuvo que identificar y entender las necesidades de los usuarios, con ello se estableció dinalmente aprender a diseñar y construir una interfaz web donde se pueda visualizar y manipular data.
La estrategia de trabajo individual y de equipo se basa principalmente en revisa la lista de objetivos de aprendizaje y reflexionar sobre estos, seguir consecuentemente con la ivestigación UX, UI y finalmente darle funcionalidad frontEnd con Javascript. 

**3.1. Investigación UX**

***3.1.1. Principales usuarios del producto***<br>
Jugadores principiantes que deseen mejorar o "armar" mejores estrategias de juego o simplemente que deseen explorar y conocer LOL, frente a usuarios experimentados.

***3.1.2. Objetivos de estos usuarios en relación con el producto***<br>
Conocer a los campeones de manera general y de manera específica. Para ello se cuenta con la opción de elección regún roles y posteriormente elección según habilidad más popular. la arqiutectura de la información fue la más adecuada bajo feedback de `(jugadores experimentados)`, así ya casi convencido del campeón que busca, y con el alcance de un click en la imagen final se muestra información mucho más detallada bajo la concepción de un gráfico estadístico.
Todo ello se explica en 11 historias de usuario, basadas en investigación UX previa:<br>
**--** HU1 Mostrar la coleccción de campeones.<br>
**--** HU2 Opciones de elección de campeones según rol.<br>
**--** HU3 Contar con la opción (botón) Habilidad de más popular.<br>
**--** HU4 Opción de elección según la habilidad "Rango de ataque".<br>
**--** HU5 Opción de elección según la habilidad "Velocidad".<br>
**--** HU6 Opción de elección según la habilidad "Daño crítico".<br>
**--** HU7 Opción de elección según la habilidad "Dificultad de dominación".<br>
**--** HU8 Añadir un buscador.<br>
**--** HU9 Información más detallada con un click en la imagen.<br>
**--** HU10 Opción para ordenarlos alfabeticamente (A-Z / Z-A).<br>

Así mismo cabe mencionar que estas hisorias de usuario fueron formuladas bajo la siguiente estructura:<br>
    => YO COMO...<br>
    => QUIERO ... <br>
    => PARA ...<br>

Paralelamente a allo se desarrollan los CRITERIOS DE ACEPTACIÓN de cada historia de usuario y DEFINITION OF DO.
Todo lo antes mecionado se puede observar más detalladamente en Trello ➡️ [📅](https://trello.com/b/alwHl1ug/data-lovers-lol) que responde claramente a la planificación.

***3.1.3. El producto creado está resolviendo problemas de los usuarios***<br>
Muestra información de manera general y detallada para conocer mejor a los campeones, ello permite planear una posible estrategia como jugador principiante ya que le permite conocer mejor al campeón que va escoger y lo que puede utilizar a su favor, según las habilidades que el campeón posea, así como sus características para emorender una batalla.

**3.2. Prototipado**<br>
Para diseñar pensando en el usuario y entregarle finalmente una experiencia que le devuelva a los usuarios objetivo su sentido de agencia y asombro con nuestra aplicación web, y además apoyándonos en los recursos que se tenían al alcance, se tuvo que bosquejar primeramente con lapiz y a mano alzada en papel. Fue una experiencia bastante enriquecedora, pues se pudo aterrizar la posible arquitectura de la información en la interfaz.
En segundo lugar bajo el testing de los bosquejos se pudo realizar prototipos de baja fidelidad aunque francamente los prptotipos de alta fidelidad y los bosquejos fueron de mucha más ayuda. Gracias a todo ese proceso se pudo obtener el feedback adecuado para diseñar y desarrollar este proyecto que esperamos sea útil. Cabe recalcar que esta etapa del proceso fue totalmente útil para no derrochar recursos en el trascuros del desarrollo de la interfaz.

***3.2.1. Bosquejo en papel***<br>
<p align="left"> <img src="https://user-images.githubusercontent.com/55680887/79031744-97177900-7b66-11ea-8a7c-72e95b68421b.png" width = "300px" height="200px"> </p>
<p align="left"> <img src="https://user-images.githubusercontent.com/55680887/79031763-dba31480-7b66-11ea-8e83-872c714b1305.png" width = "300px" height="200px"> </p>
<p align="center"> <img src="https://user-images.githubusercontent.com/55680887/79031772-f5dcf280-7b66-11ea-8aa1-701cc84cd657.png" width = "300px" height="200px"> </p>
<p align="center"> <img src="https://user-images.githubusercontent.com/55680887/79031804-363c7080-7b67-11ea-8448-04ac85d68228.png" width = "300px" height="200px"> </p>
<p align="right"> <img src="https://user-images.githubusercontent.com/55680887/79031823-54a26c00-7b67-11ea-84b2-3b336f3c7a9c.png" width = "300px" height="200px"> </p>
<p align="right"> <img src="https://user-images.githubusercontent.com/55680887/79031874-b7940300-7b67-11ea-9f40-a2de4ec5bda7.png" width = "300px" height="200px"> </p>


***3.2.2. Prototipo en baja fidelidad***<br>
Todo el proceso puede verse más detalladamente en el siguiente enlace: ➡️ [📅](https://www.figma.com/file/oGWU3AgP3gtj71dg3KyP7r/prototipo-web-bajaF?node-id=0%3A1)

-Colección:

<img src="https://user-images.githubusercontent.com/55680887/79031280-5702c700-7b63-11ea-966f-43c8eb2dd36d.png" width = "300px" height="200px">

-Filtros desplegados

<img src="https://user-images.githubusercontent.com/55680887/79031393-0b9ce880-7b64-11ea-8d65-bd9fcbf9b00a.png" width = "300px" height="200px">

-Selección

<img src="https://user-images.githubusercontent.com/55680887/79031448-4acb3980-7b64-11ea-9cc7-e66c426d82aa.png" width = "300px" height="200px">

## 4. Interfaz de usuario
____________________________________

**4.1. Prototipo en alta fidelidad**<br>
El diseño final representa el ideal de la solución, luego de muchos feedback de expertos en el desarrollo UX y a travez de los testeos de usabilidad con jugadores profesioanles de LOL. Se ha implementado las funcionalidades necesarias para cumplir con cada sprint y con entregables funcionales. Además, tu diseño cumplimos con que el diseño sigue los fundamentos de visual design, sin embargo cualquier tipo de feedback es totalmente aceptado posterior a esta lectura.
El resultado final del prototipo así como el posible flujo de información o interacción puede verse más detalladamente en el siguiente enlace: ➡️ [📅](https://www.figma.com/file/vrUnw0AuYA4fW3fDIKJvRf/Untitled)
<br>
<p align="center"> <img src="https://user-images.githubusercontent.com/55680887/79031568-30de2680-7b65-11ea-926e-dbc5f1d9a88e.png" width = "700px" height="400px"> </p>
<p align="center"> <img src="https://user-images.githubusercontent.com/55680887/79031608-874b6500-7b65-11ea-8c84-5caca4ceb2b0.png" width = "700px" height="400px"> </p>
<p align="center"> <img src="https://user-images.githubusercontent.com/55680887/79031631-b8c43080-7b65-11ea-84a8-4d21d6bbe203.png" width = "700px" height="170px"> </p>

Con los testeos de usabilidad se pudo identificar que el tipo de letra no era la más adecuada por tanto los jugadores no se sentían familiarizados con LOL, por tanto fue un punto a mejorar.
Además tambien se pudo identificar que el tipo de background y el escudo tendrían que ser mucho más actualizados que los que se podían observvar en los prototipos.
Finalmente cumplimos con mostrar la data en una interfaz en un card, también permitir al usuario interactuar para obtener la infomación que necesita, as{i mismo ser responsive, y que la interfaz siga los fundamentos de visual design.

## 5. Objetivos de Aprendizaje
_______________________________________________

#### UX

- [✔️] Diseñar la aplicación pensando y entendiendo al usuario.
- [✔️] Crear prototipos para obtener _feedback_ e iterar.
- [✔️] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [✔️] Planear y ejecutar _tests_ de usabilidad.

#### HTML y CSS

- [✔️] Entender y reconocer por qué es importante el HTML semántico.
- [✔️] Identificar y entender tipos de selectores en CSS.
- [✔️] Entender como funciona `flexbox` en CSS.
- [✔️] Construir tu aplicación respetando el diseño planeado (maquetación).

#### DOM

- [✔️] Entender y reconocer los selectores del DOM (`querySelector` | `querySelectorAll`).
- [✔️] Manejar eventos del DOM. (`addEventListener`)
- [✔️] Manipular dinámicamente el DOM. (`createElement`, `appendchild`, `innerHTML`, `value`)

#### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [✔️] Manipular objects (key | value).
- [✔️] Entender el uso de condicionales (`if-else` | `switch`).
- [ ] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.planos
- [ ] Utilizar funciones (`parámetros` | `argumentos` | `valor de retorno`).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [ ] Utilizar ES Modules (`import` | `export`).

#### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

#### Git y GitHub
- [✔️] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [✔️] Utilizar los repositorios de GitHub (`clone` | `fork` | `gh-pages`).
- [✔️] Colaborar en Github (`pull requests`).

#### Buenas prácticas de desarrollo
- [✔️] Organizar y dividir el código en módulos (Modularización).
- [✔️] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [✔️] Utilizar linter para seguir buenas prácticas (ESLINT).

## 6. Feedback
_______________________________

