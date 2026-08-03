# React router

Creare il front-end del mini e-commerce e le sue pagine principali.
Usare Fake Store API come back-end fittizio per simulare i dati dei prodotti.


# Obiettivi Parte 1

1. Installare **React Router DOM:** `npm i react-router-dom`.
2. Creare almeno 3 pagine principali:
  - Homepage 
  - Chi siamo
  - Prodotti
3. Implementare una Navbar visibile in tutte le pagine per navigare tra di esse.

# Bonus Parte 1

- Centralizzare la Navbar usando un componente `Layout`.
- Gestire la classe `active` per i link attivi nella Navbar.



# Obiettivi Parte 2

- Nella pagina **Prodotti**, ogni prodotto deve essere linkato alla **pagina di dettaglio** usando `<Link>`.
- Aggiungiure la **pagina di dettaglio** per ogni prodotto, con le informazioni prese dall'API. 
- Configurare il routing dinamico per leggere l’`id` del prodotto dalla URL.

# Bonus Parte 2

- Aggiungere una navigazione programmatica che riporti alla pagina di listato se viene cercato un prodotto che non esiste.
- Aggiungere una pagina 404.
- Aggiungere un loading per caricamento del dettaglio prodotto.

# Super Bonus Parte 2

- Aggiungere nella **pagina di dettaglio** dei pulsanti per navigare al prodotto precedente o successivo usando `useNavigate()` programmaticamente.


# Note

L'API utlizzate sono:
- `https://fakestoreapi.com/products` per la lista dei prodotti.
- `https://fakestoreapi.com/products/:id` per la **pagina di dettaglio** dei prodotti.
