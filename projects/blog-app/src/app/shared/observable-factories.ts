import { Observable } from "rxjs";

// Erzeugt ein einfaches Observable
export function simpleObservable(): Observable<string> {
  return new Observable((observer) => {
    // Informiert den Observer über neue Werte
    observer.next("Wert 1");
    observer.next("Wert 2");

    // Fehlermeldung
    // observer.error("Fehler");

    // Informiert den Observer über das Ende des Streams
    observer.complete();

    // Wird aufgerufen, wenn das Observable beendet wird
    return () => {
        console.log("Observer wird beendet");
    }
  });
}