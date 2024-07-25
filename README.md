# Pokemon applicatie

# 1. Inleiding
De reden dat deze website tot stand is het volgende, ik wou een overzichtelijke en strakke manier voor het bekijken van pokemons. Daarvoor heb ik een eenvoudige tool waarmee je makkelijk pokemons kan opzoeken. De oplossing hiervoor is de tool die ik heb gemaakt, een overzicht van alle pokemons. Waarin je ook makkelijk een pokemon kan opzoeken door middel van de zoekfunctie. Daarnaast kan een gebruiker registreren als die daar behoefte aan heeft. Om vervolgens favorieten aan je account toe te kunnen voegen. De applicatie is ontwikkeld als eindopdracht voor de Frontend Leerlijn, op NOVI Hogeschool.

# 2. Screenshot
![image](https://github.com/user-attachments/assets/ed1cc23c-4d8f-4fe5-8f13-a1dab4b8add7)

# 3. Benodigdheden
Voor deze applicatie heb je een paar zaken nodig om alles goed te laten werken. Allereerst kun je de link naar de Github Repository hier vinden. Verder maakt deze applicatie gebruik van de NOVI-backend voor inloggen en registreren. De documentatie daarvoor vind je hier: https://github.com/hogeschoolnovi/novi-educational-backend-documentation?tab=readme-ov-file#0-inloggen

# 4. De applicatie draaien
Applicatie starten
Clone het project vanuit Git naar jouw lokale machine (gebruik een IDE naar keuze). Let op dat je bij het kopiëren van de link voor "SSH" kiest. Vergeet niet om Node.js & npm te installeren, omdat deze nodig zijn om de applicatie te draaien. Om de nieuwste versie te downloaden, voer je het volgende commando uit in je terminal:

npm install -g npm
Weet je niet zeker of je dit al hebt geïnstalleerd, of wil je weten welke versie je hebt? Gebruik dan de volgende commando's om dit te controleren:

node -v
npm -v
Top: Nu kun je de benodigde packages uit de node_modules installeren. Dit doe je met het volgende commando:

npm install
Na deze stap kun je de applicatie starten met het volgende commando:

npm run dev
Open http://localhost:5173/ om de pagina in je browser te bekijken. Elke keer als je een bestand opslaat, kun je de wijzigingen hier terugzien. Gebruik ook de Devtools in je browser voor extra informatie.

# 5. Overige commando’s

Om verder te werken aan dit project en je werk op te slaan, is het belangrijk om eerst de huidige repository los te koppelen. Dit doe je met het volgende commando:

git remote remove origin
Maak vervolgens een nieuwe repository aan op Git en koppel deze aan jouw project. Werk je met meerdere mensen aan hetzelfde project? Dan is het verstandig om op een feature branch te werken. Deze maak je aan met het volgende commando:

git checkout -b name-of-branch
Andere veelgebruikte commando's zijn:

git init .                         om Git te initialiseren in jouw project. LET OP! Als je een project clone't, gebeurt dit automatisch al.
git add .                          om alle wijzigingen te stagen.
git status                         om de status van gestagede bestanden te zien.
git commit -m "description"        om alle wijzigingen te committen en klaar te zetten voor de push.
git log                            om te zien welke commits er klaarstaan voor de push.
git push origin name-of-branch     om wijzigingen naar Git te pushen als je op een feature branch werkt.
git push origin main               om wijzigingen naar Git te pushen als je op de main branch werkt.

--------------
Link naar mijn project : https://github.com/Bilal2871/frontend-eindopdracht/tree/main 
