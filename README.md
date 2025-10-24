# 🍽️ Mi Restaurante

**Mi Restaurante** es una aplicación web creada con **React + Vite** que permite mostrar la carta de un restaurante de forma moderna e interactiva.  
El proyecto está pensado para practicar el uso de componentes, hooks y estilos modulares en React.

![Vista previa del proyecto](./src/assets/PG.jpg)


---

## 🧾 Descripción

Esta aplicación muestra distintos platos de un restaurante organizados por categorías.  
Cada plato se presenta en una tarjeta con su nombre, imagen, descripción y precio.  
La estructura del proyecto está dividida en componentes reutilizables y bien organizados.

---

## 🧩 Estructura del proyecto

```
src
│ App.css
│ App.jsx
│ index.css
│ main.jsx
│
├───assets
│ react.svg
│
├───component
│ ├───Card
│ │ │ BackgroundCard.css
│ │ │ BackgroundCard.jsx
│ │ │ HeaderCard.css
│ │ │ HeaderCard.jsx
│ │ │ ImageCard.css
│ │ │ ImageCard.jsx
│ │ │ InfoCard.css
│ │ │ InfoCard.jsx
│ │ └───info
│ │ CategoryCard.css
│ │ CategoryCard.jsx
│ │ PriceCard.css
│ │ PriceCard.jsx
│ │
│ ├───main
│ │ PanelMain.css
│ │ PanelMain.jsx
│ │ ResultsSearch.css
│ │ ResultsSearch.jsx
│ │
│ └───web
│ │ WebMenu.css
│ │ WebMenu.jsx
│ ├───footer
│ │ Footer.css
│ │ Footer.jsx
│ ├───header
│ │ WebBackHeader.css
│ │ WebBackHeader.jsx
│ └───menu
│ CategorySelec.css
│ CategorySelec.jsx
│
└───hooks
```

## Menu principal

Este es mi menu que bueno he intentado realizar por primera vez de esta manera y es por lo que me he tardado mas tiempo pero... BUENO.

![Vista previa del proyecto](./src/assets/menu.jpg)

En esta parte los usuarios veran el logo de la empreza. Interactuar de forma que pueden cambiar categorias, en ⚠️<span style="color:red">**profimas actualizaciones podran incluso buscar por precio**</span>⚠️.


## ⚙️ Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Adrianbien43/AdrianBien-restaurante.git