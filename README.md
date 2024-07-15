# CommentsWebpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

----------------------------------------------------------------------------------------------------------------------------------

EXPLAINING THE CODE:

🇮🇹 ITALIAN: Mini applicazione realizzata in Angular su una pagina che si occupa di raccogliere dei commenti e di postarne di nuovi.

✏️ GRAFICA e STRUTTURA: Il sito utilizza le classi Bootstrap per creare un interfaccia semplice e responsive. Grazie all'uso delle rotte e dei link nel componente header ci si sposta da una pagina 
all'altra agilmente. Header e footer sono gli unici elementi fissi della pagina. Abbiamo una homepage con un breve messaggio e due pagine, una per la lista dei commenti e una per il form che permette di inviare il nuovo commento.

💻 SERVIZIO: In questo caso il servizio contiene la maggiorparte delle logiche di tutti i componenti/pagine, con le chiamate HTTPClient che creano degli observables a cui ci si sottoiscrive in metodi che troviamo dentro ai component.ts delle pagine.

📄 COMPONENTE COMMENTS-LIST: Componente che ha il compito di prendere l'observable generata da dentro il servizio e mostra la lista di tutti i commenti presenti in quel server. La grafica dei commenti prende i componenti cards di bootstrap, con l'aggiunta di due tasti: uno per mostrare il singolo commento, uno per mostrare tutti i commenti che hanno lo stesso postId.

📄 COMPONENTE SINGLE-COMMENT: Componente figlio di COMMENTS-LIST che ha due compiti: se viene cliccato il tasto sul singolo commento genera l'html di un solo commento o l'intero gruppo di commenti, il codice html rimane comunque lo stesso, poiche' l'oggetto generato risulta sempre un array che puo' avere o un solo elemento o 5 elementi.

📄 COMPONENTE NEW-COMMENT: Componente creato per ospitare il form per inviare un nuovo post, form e validazione realizzati usando il modello del Template Driven Form.


----------------------------------------------------------------------------------------------------------------------------------

🇬🇧 ENGLISH: A mini application created in Angular about a webpage that collects comments and posts new ones.

✏️ DESIGN and STRUCTURE: The page uses the Bootstrap classes to create a simple and responsive interface. By using routes and links in the header component, you can move from one page to the other. 
The Header and the footer are the only fixed elements of the page. There is a homepage with a message and then two different pages, one for the list of comments and one for the form that allows you to send the new comment.

💻 SERVICE: In this case, the service contains most of the logic of all the components/pages, with HTTPClient creating observables that are subscribed to in methods that we find inside the component.ts of the pages.

📄 COMMENTS-LIST COMPONENT: Component that has the task of taking the observable generated from within the service and shows the list of all comments present on that server. The comment graphics take the bootstrap card components, with the addition of two buttons: one to show the single comment, one to show all comments that have the same postId.

📄 SINGLE-COMMENT COMPONENT: A child component of COMMENTS-LIST that has two tasks: if the button on the single comment is clicked, it generates the html of a single comment or the entire group of comments, the html code remains the same, since the generated object is always an array that can have either a single element or 5 elements.

📄 NEW-COMMENT COMPONENT: Component created to host the form to submit a new post, form and validation created using the Template Driven Form template.
