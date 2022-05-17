import { ElementRef, Injectable, Optional } from "@angular/core";
import { not } from "logical-not";
import { filter, fromEvent, map, Observable, tap } from "rxjs";

const event = `-${Math.random().toString(16).slice(2)}-${Date.now()}`;

export class Message<T> {}

@Injectable({ providedIn: "root" })
export class ToParent {
    constructor(@Optional() private readonly hostRef: ElementRef<HTMLElement>) {
        if (not(hostRef)) throwInjectError(ToParent);
    }

    send<T>(message: Message<T>, data: T): void {
        const transfer: Transfer<T> = {
            message,
            data,
        };
        const connectionEvent: CustomEvent<Transfer<T>> = new CustomEvent(
            event,
            {
                bubbles: true,
                detail: transfer,
            },
        );

        this.hostRef.nativeElement.dispatchEvent(connectionEvent);
    }
}

@Injectable({ providedIn: "root" })
export class FromChild {
    constructor(@Optional() private readonly hostRef: ElementRef<HTMLElement>) {
        if (not(hostRef)) throwInjectError(FromChild);
    }

    listen<T>(message: Message<T>): Observable<T> {
        return listen(this.hostRef.nativeElement, message);
    }

    pipe<T>(message: Message<T>): Observable<T> {
        return listen(this.hostRef.nativeElement, message, true);
    }
}

function listen<T>(
    host: HTMLElement,
    message: Message<T>,
    pipe = false,
): Observable<T> {
    return fromEvent<CustomEvent<Transfer<T>>>(host, event).pipe(
        filter(({ detail }) => {
            return detail.message === message;
        }),
        tap((event) => {
            if (not(pipe)) event.stopPropagation();
        }),
        map(({ detail: { data } }) => {
            return data;
        }),
    );
}

function throwInjectError({ name }: { name: string }): never {
    const message = `
Inject error: class ${name} must be provide in component:
  @Component({
      ...
      providers: [${name}]
  })
    `.trim();

    throw new Error(message);
}

interface Transfer<T> {
    message: Message<T>;
    data: T;
}
