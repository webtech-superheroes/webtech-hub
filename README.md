# WebTech Hub
WebTech Superheroes social hub is a place where people passionate about web technologies learn and share experience

## Instructiuni instalare

Arhitectura aplicației este de tip Single-Page Applicațion. Partea de frontend conține o interfață dezvoltată folosind ReactJS, iar backend-ul permite accesul la date prin intermediul unui API RESTful dezvoltat cu NodeJS și ExpressJS. Datele sunt stocate într-o baza de date relațională (MySQL).

### Configurare backend
Vei avea nevoie de o versiune de NodeJS > 8

1. Pentru a descărca codul sursă:

```bash
git clone https://github.com/webtech-superheroes/webtech-hub
```


2. Înstalează modulele node

```bash
npm install
```

3. Configurează un server MySQL și crează o bază de date

4. În directorul ```./backend/config/``` crează un fișier ```db.json``` cu structura indicată în fișierul ```db.sample.json```

5. Adaugă setările pentru baza de date în fișierul ```db.json```

6. Execută scriptul ```createdb.js``` pentru a realiza structura bazei de date

```bash
node createdb.js
```
7. Obține credențiale de autentificare cu Google OAuth2 și configurează cheile secrete în fișierul ```secrets.json``` din directorul ```./backend/config/``` cu structura indicată în fișierul ```secrets.sample.json```

### Configurare frontend

1. Navighează în directorul ```./frontend```
2. Înstalează modulele node

```bash
npm install
```

3. Execută comanda

```bash
npm run build
```

## Pornire aplicație 

Execută următoarea comandă

```bash
node server.js
```

## Pornire aplicație în mod dezvoltare

1. Pornește server.js

```bash
node server.js
```

2. Navighează în directorul frontend și pornește aplicația de React

```bash
npm start
```

Aplicația react va rula pe portul 3000, iar serverul pe portul 3001 







