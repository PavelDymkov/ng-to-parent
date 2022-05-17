import { Message } from "ng-to-parent";

export const empty = new Message<void>();
export const primitivePayload = new Message<string>();
export const objectPayload = new Message<Payload>();

export interface Payload {
    text: string;
    number: number;
}
