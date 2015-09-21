# Veranstaltungseinheit Node.js

## Ziel der Übung

Sie verstehen, wie Node Module funktionieren und wie Sie mittels Faye Events verarbeiten
und Nachrichten verschicken können.

Beachten Sie die [Dokumentation zu Faye](http://faye.jcoglan.com/node.html), vor allem
die Abschnitte über [Monitoring](http://faye.jcoglan.com/node/monitoring.html) und [Server Side Clients](http://faye.jcoglan.com/node/clients.html).


## Aufgaben

Erweitern Sie die Chat Anwendung um einen 'Chatbot', der verschiedene Befehle erkennt und
auf geeignete Art Antworten geben kann.

Beispielsweise könnten Sie im Chat `/help` oder `/date` eingeben und eine
(hilfreiche) Nachricht oder das aktuelle Datum im Chat bekommen. Der
Einfachheit halber kann die Antwort an alle Teilnehmer des Chats geschickt
werden (Sie müssen also nicht die verschiedenen Clients unterscheiden).

Verwenden Sie alle in der Vorlesung besprochenen Techniken:

* EventEmitter
* Node JS Module
* Faye
* Falls notwendig `inherits`

### Hinweise

Um eine bestmögliche Erweiterbarkeit zu gewährleisten, sollten Sie die
implementierten Befehle (`/help`, `/date`) in einem oder meheren Modulen
implementieren.

Hinweis: Eine Lösung, die mittels `if - then` Abfragen schaut, ob ein
bestimmter Befehl vom Benutzer eingetippt wurde, ist nicht gut wartbar und
skaliert schlecht. Es gibt bessere Methoden - denken Sie an die `Events`.

### Erwartete Resultate und Abgabe

* Funktionierendes Chatprogramm mit folgenden Eigenschaften:

      * Die Commands sind in mindestens einem Modul implementiert
      * Faye Monitoring wird genutzt
      * Events eingesetzt werden, um die verschiedenen Programmteile zu koordinieren

* Abgabe während des Labors
