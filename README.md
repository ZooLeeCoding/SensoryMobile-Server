# Adatgyűjtő szerver

Az Ionic alkalmazáshoz tartozó adatgyűjtő szerver, amely a feltöltött .csv fájlokat az uploads mappába helyezi át

Buildelés menete:

```javascript
$ npm install
$ node server
```

Ahhoz, hogy a szerver prezentálható legyen, biztosítani kell, hogy elérhető legyen külső eszközről is url segítségével. Mivel nem akartunk domain vásárlással, szerverbérléssel, tűzfalbeállításokkal is tovább bonyolítani a féléves anyag komplexitását, az ngrok nevű ingyenes alkalmazást használjuk erre a célra, amely képes egy tunnelt, átjárót nyitni a saját szerverükön keresztül a localhost egyik portjára. Az ngrok Windows-os indítófájlját be is tettem ebbe a projektbe (más operációs rendszerekre szintén ingyenesen letölthető), használatához mindössze annyi kell, hogy miután a szerver elindult, nyitunk egy új terminálablakot a projekt mappában, és kiadjuk:

```javascript
$ ngrok http 3000
```

Ahol 3000 az a localhost port, amin elindítottuk az adatgyűjtő szervert. A parancssorban ekkor megjelenik az ngrok url-je (ebből a http:// és az ngrok.io közötti részt kell beírni az Ionic app beállításainál) és a beérkező http kérésekről is minimális információkat jelenít meg.

Fontos: mivel az ngrok külső alkalmazás, semmiképp ne küldjetek el rajta keresztül bizalmas, személyes adatokat, pl. jelszót!

Felelős fejlesztő: Szabó Zoltán

