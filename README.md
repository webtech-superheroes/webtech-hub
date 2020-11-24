# WebTech Hub

WebTech Superheroes Hub is a place where people passionate about web technologies learn and share experience

## Instructiuni instalare

Arhitectura aplicației este de tip Single-Page Applicațion. Partea de frontend conține o interfață dezvoltată folosind ReactJS, iar backend-ul permite accesul la date prin intermediul unui API RESTful dezvoltat cu NodeJS și ExpressJS. Datele sunt stocate într-o baza de date relațională (MySQL).

### Configurare backend
Vei avea nevoie de o versiune de NodeJS > 8

1. Pentru a descărca codul sursă:

```bash
git clone https://github.com/webtech-superheroes/webtech-hub
```

2. Navigează in directorul backend

```bash
cd backend
```

3. Înstalează modulele npm

```bash
npm install
```

4. Configurează un server MySQL și crează o bază de date

5. În directorul ```./backend/config/``` crează un fișier ```db.json``` cu structura indicată în fișierul ```db.sample.json```

6. Adaugă setările pentru baza de date în fișierul ```db.json```

7. Execută scriptul ```createdb.js``` pentru a realiza structura bazei de date

```bash
node createdb.js
```
8. Obține credențiale de autentificare cu Google OAuth2 și configurează cheile secrete în fișierul ```secrets.json``` din directorul ```./backend/config/``` cu structura indicată în fișierul ```secrets.sample.json```. 
9. Urmăriți instrucțiunile de aici pentru a obține cheile de la [Google](https://developers.google.com/identity/protocols/OAuth2)  

### Configurare frontend

1. Navighează în directorul frontend

```
cd frontend
```
2. Înstalează modulele npm

```bash
npm install
```

3. Adăugați setările pentru mediu în fișierul .env

```
REACT_APP_API_BASEURL="http://ip:3001"
REACT_APP_BASEURL="http://ip:3000"
```

* pentru adresa locala folositi localhost sau 127.0.0.1

## Pornire aplicație în mod dezvoltare

1. Navighează in directorul backend și pornește aplicația backend

```bash
node server.js
```

2. Navighează în directorul frontend și pornește aplicația de React

```bash
npm start
```

Aplicația react va rula pe portul 3000, iar serverul pe portul 3001 

# Referințe

Aplicația a fost creată folosind următoarele pachete npm:

* Create React App pentru partea de frontend - https://create-react-app.dev/
* MaterialUI pentru componente de interfață - https://material-ui.com/
* Axios pentru cereri HTTP - https://github.com/axios/axios
* PassportJS pentru autentificare cu servicii externe - http://www.passportjs.org/
* Sequelize pentru interacținea cu baza de date - https://sequelize.org/







