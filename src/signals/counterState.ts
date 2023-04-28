import { signal, computed } from "@preact/signals-react";

export const counter = signal(1);
export const complexSignal = signal({ a: 1, b: 2, c: {d: 3, e:4, f: {g:5}} });