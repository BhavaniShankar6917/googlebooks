import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  sequence,
  stagger,
} from '@angular/animations';
export const sidenavAnimation = trigger('sidenav', [
  transition(':enter', [
    style({ width: 0, overflow: 'hidden' }),
    query('.filters', [style({ opacity: 0, transform: 'translateX(-300px)' })]),
    sequence([
      animate('250ms', style({ width: '*' })),
      query('.menu-item', [
        stagger(-50, [
          animate('250ms ease', style({ opacity: 1, transform: 'none' })),
        ]),
      ]),
    ]),
  ]),
]);
