import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'left': '0px'
        })),
        state('out', style({
            'left': '-435px'
        })),
        transition('in => out', ([
            animate('400ms ease-in-out', style({
                'left': '-435px'
            })),
        ]
        )),
        transition('out => in', ([
            animate('400ms ease-in-out', style({
                'left': '0px'
            })),
        ]
        ))
    ]),
    trigger('showHide', [
        state('in', style({
            'visibility': 'visible',
            'background-color': 'rgba(0,0,0,0.6)'
        })),
        state('out', style({
            'visibility': 'hidden',
            'background-color': 'rgba(0,0,0,0)'
        })),
        transition('in => out', ([
            animate('300ms ease-in-out', style({
                'visibility': 'hidden',
                'background-color': 'rgba(0,0,0,0)'
            })),
        ]
        )),
        transition('out => in', ([
            animate('300ms ease-in-out', style({
                'visibility': 'visible',
                'background-color': 'rgba(0,0,0,0.6)'
            })),
        ]
        )),
    ]),
];
