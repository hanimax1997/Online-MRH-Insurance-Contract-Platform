import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';

@Pipe({ name: 'roundPlain', standalone: true })
export class RoundPlainPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(
    value: number | string | null | undefined,
    locale: string = this.locale
  ): string {
    if (value == null || value === '') { return ''; }

    const rounded = Math.round(+value);

    return new Intl.NumberFormat(locale, {
      useGrouping: true,       // séparateurs de milliers
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(rounded);
  }
}