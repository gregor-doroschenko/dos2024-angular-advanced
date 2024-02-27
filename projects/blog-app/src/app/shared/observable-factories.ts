import { Observable } from "rxjs";

export function simpleObservable(): Observable<string> {
  return new Observable((observer) => {
    observer.next("Wert 1");
    observer.next("Wert 2");

    // observer.error("Fehler");

    observer.complete();

    return () => {
        console.log("Observer wird beendet");
    }
  });
}