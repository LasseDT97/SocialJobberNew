###Til SocialJobber:
- Vi skal have tilføjet et sted man kan opdatere sin profil så
man ikke skal gøre det undervejs i profiloprettelsen.

  - Det vil giver mere mening da vi herved simplificere registrering.
  Registreringen skal så navigate til en Profil side. Her skal
  man kunne klikke på editer bruger, docs her: https://firebase.google.com/docs/auth/web/manage-users#web-version-9
  og på den måde tildele displayName osv.
  
###Til virksomhedsprofil
- Vi skal have implementeret måden at oprette flere 
CustomListItems. Disse skal kunne laves fra brugeren, så vi
på den måde holder SocialJobber og Virksomheds-track adskilt.

- Vi skal have implementeret en måde at have det som kortvisning
også. Eventuelt en headerRight der kan navigere til kort.

 ###Overvejelser:
- Overvej at duplikere det hele og lave 2 af hver screen. 
Det gør det bare nemmere at styre retningen, da der er små
forskelle afhængig af profiltype.

 ###Ændringer: 
- I stedet for ListItem skal det være React Native Element Card
- På det Card kan man bruge Pricing elemetet til at vise antal timer, løn osv.
- Udregningen af hvor mange penge og hele progressionsdelen der skal
visualiseres, kan laves med elementet Linear Progress.
- I videre arbejde kan der arbejdes med React Native elementerne:
  - Rating, til at rate socialjobbere og virksomheder.
  - SearchBar, til at kunne søge efter jobs, virksomheder osv.
  - SocialIcon hvor virksomhederne kan få brugere til at læse mere.
  - Speed Dial til at have flere actions end opret job, det kan være overskudsmad etc.
  - Badge til at styre notifikationer om nye jobs, beskeder osv.

