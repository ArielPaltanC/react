### VUE 

### Creacion de la app 
Para crear la app se usa lo siquiente
```bash
vue create mi-app-vue
```
### Firebase 
Instalar firebase 
```bash
npm install firebase
```
## Hosting 
Para inicializar el hosting usamos el sigueinte comando:
```bash
firebase init
```
En la carpeta publica, aqui va ```dist```

##Database
Luego creamos nuestro archivo firebase.js con las credenciales del proyecto 
```bash
npm install -g firebase-tools
```
  Inicializamos el proyecto 
```bash
firebase login
```
Generamos el build con 
```bash
npm run build
```
Y luego hacemos un deploy
```bash
firebase deploy
```

### REACT 
## CREAR UN PROYECTO  
Para crear un proyecto en react ser usa el siguiente comando: 
```branch
npx create-react-app nombreapp
```
Instalamos el firebase 
```branch
npm install firebase
```
 Instala la CLI de Firebase:
```bash
npm install -g firebase-tools
```
En este caso, usamos el firebase.js para la configuracion el firestore database

## HOSTING

En la carpeta publica, aqui va ```build```

b. Inicia sesión:
```bash
firebase login
```
c. Inicializa Firebase Hosting:
```bash
firebase init
```
Luego:
```bash
npm run build
```
Y hacemos un deploy 
```bash
firebase deploy
```
https://github.com/diegobravo10/practica_prueba

