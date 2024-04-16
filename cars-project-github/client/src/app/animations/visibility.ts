import { animate, style, transition, trigger } from "@angular/animations";

export const visibility = trigger('visibility', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(800, style({
            opacity: 1
        }))
    ])
])