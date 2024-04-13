import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    return `${Math.floor(duration / 60)}h ${Math.round(duration % 60)}min`;
  }
}
