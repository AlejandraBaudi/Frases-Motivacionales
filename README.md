# Frases Motivacionales 
Esta es una página web simple que te da una frase motivacional aleatoria usando tu nombre, haciéndola un poco más personalizada.

---

## Deploy
La aplicación esta publicada en GitHub Pages: https://alejandrabaudi.github.io/Frases-Motivacionales/

---

## ¿Cómo funciona?
1. Ingresás tu nombre. 
2. Muestra una frase motivadora junto a tu nombre ingresado anteriormente. 
3. Podes volver atrás para ingresar otro nombre. 

---

## Tecnologías usadas
- HTML
- CSS
- JavaScript

---

 ## Cómo usar
 1. Cloná este repositorio o descargalo:
    ```bash
    git clone https://github.com/AlejandraBaudi/Frases-Motivacionales.git
    ```
 2. Abrí el archivo 'index.html' en tu navegador.
 3. Listo! Empeza a usarla para motivarte cuando lo necesites. 

 ---
 
 ## Estructura del Proyecto
 - 'index.html' - Estructura principal de la pagina.
 - 'style.css' - Estilos visuales
 - 'script.js' - Logica para mostrar frases motivacionales.
 - 'screenshot.png' - Captura de pantalla de la aplicación.
 - 'github/workflows/ci.yml' - Configuracion de CI con GitHub Actions

 ---

 ## CI/CD con GitHub Actions
 Se implementó un flujo de trabajo de CI/CD usando GitHub Actions:
 **CI**
   - Se ejecuta automaticamente al hacer push o PR a 'develop'.
   - Verifica que existen los archivos base ('index.html', 'style.css', 'script.js')
 **CD**
   - La aplicación se publica automáticamente al hacer 'push' a la rama 'master' mediante GitHub Pages. 

 ---
 ## GitFlow aplicado
 El proyecto sigue el modelo de ramas GitFlow:
 - 'master' - Contiene la version en producción.
 - 'develop' - Rama de integración y pruebas.
 - 'feature/*' - Ramas para agregar nuevas frases.

 ---

 ## Hecho por 
 Alejandra Leonor Baudi 

 ---

 ## Captura de pantalla
 ![Captura de pantalla](screenshot.png)