# FpProj 123
NVM - narzedzie do instalacji roznych wersji nodejs
https://github.com/coreybutler/nvm-windows

Angular dev tools plugin
https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh

custom preloading:
https://www.npmjs.com/package/ngx-quicklink

Rxjs in angular
https://angular.io/guide/rx-library

rxjs
https://rxjs.dev/
https://www.learnrxjs.io/
https://bytethisstore.com/articles/pg/rxjs-unsubscribe

stackblitz
https://stackblitz.com/


# ZADANIA
1. Stworzyc komponenty HomeComponent, ContactComponent za pomoca CLI
`npx ng g c nazwa-komponentu`
2. Dodaj nową ściezke /contact i załaduj tam ContactComponent
3. Stwórz strone 404 ładujacą nowo utworzony komponent PageNotFoundComponent  pod wszystkimi nieobsługiwanymi ściezkami:
podpowiedz: https://angular.io/guide/router-tutorial#using-angular-routes-in-a-single-page-application
4. Dodaj link do /contact do nawigacji. Opakuj nawigację komponentem NavigationComponent
5. Dodaj model Product ( id: strig, name: string, description?: string, price: number)
6. Stwórz moduł products z routingiem (npx ng g m products --routing). Moduł ma sie zaladowac pod adresem /products. Dodaj link w nawigacji
7. W module dodaj następujące komponenty: ProductList, ProductItem, ProductDetail, ProductAdd, ProductEdit, ProductForm
8. Dodaj routing /products -> ProductList, /products/add -> ProductAdd, /products/edit/:id -> ProductEdit, /products/:id -> ProductDetail
9. W komponencie ProductsList stwórz kolekcję 3 produktów zgodnych z interfejsem. Wyswietl prostą listę produktów zawierających nazwe i cenę. Wyswietlanie produktu zaimplementuj w ProductItem do którego przekazuj za pomocą Inputa `[product]` pojedynczy produkt. Użyj ngFor żeby wyswietlic tyle komponentów productItem ile jest ich w kolekcji.
10. Stwórz productsService, zarejestruj go w productsModule i przenieś dane z komponentu productList do serwisu. Wykorzystaj dane z serwisu w komponencie.
