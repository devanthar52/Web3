# Veranstaltungseinheit Backbone.JS

## Erste Erfahrungen mit Backbone Models

### Ziel der Übung

Sie haben ihre erste Backbone.JS Applikation um Persistenz und Collections erweitert.

### Todo Applikation Allgemein

Eine Todo Liste enthält klassisch folgende Elemente:

 * Eine Möglichkeit neue Aufgaben zu erstellen (Todo Model)
 * Eine Möglichkeit eine Liste bestehender Aufgaben anzuzeigen, zu speichern und
   zu persistieren(TodoList Collection)
 * Eine Möglichkeit bestehende Aufgaben zu editieren
 * Eine Möglichkeit eine bestehende Aufgabe als "erledigt" zu markieren
 * Eine Möglichkeit eine bestehende Aufgabe zu löschen
 * Eine Möglichkeit nach "erledigten" oder "verbleibenden" Aufgaben zu filtern

Dies sind die klassischen CRUD Methoden (Create, Read, Update, Delete).


### Aufgabenstellung

In diesem Labor entwickeln Sie in Backbone.JS die zum Todo Model gehörige
TodoList Collection und persistieren diese mit BackboneJS Localstorage.

Für alle Aufgaben haben haben Sie fertige Specs im Projekt.

* Erstellen Sie eine TodoList Collection
    * Persistieren Sie die TodoList mit dem HTML5 localStorage mit Hilfe des backbone.localStorage.js Plugins (siehe Ressourcen)
    * Implementieren Sie die TodoList Methode `completed()` mit der Sie
      erledigte auf Aufgaben filtern können
    * Implementieren Sie die Todo Methode `toggle()` mit der Sie den Zustand
      `completed` invertieren können

### Erwartete Resultate und Abgabe

* Erweitern der Funktionalität, sodass die Jasmine Specs fehlerfrei durchlaufen
* Abgabe während des Labors
* Hinweis: Ein Verändern der Specs (ohne hinterlassenen Grund) führt zu
  Punktabzug

### Ressourcen

* [Backbone.localStorage](https://github.com/jeromegn/Backbone.localStorage)
