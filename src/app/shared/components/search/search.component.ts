import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { SearchInputService } from '@app/core/services/search-input.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  public load: boolean;
  public value: string;

  constructor( public searchService: SearchInputService) { 
    this.load = false;
    this.value = '';
  } 

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
      filter(Boolean),
      debounceTime(700),
      distinctUntilChanged(),
      // tap(() => {
      //   console.log(this.input.nativeElement.value)
      // })
    )
    .subscribe({   
      next: () => { 
        this.load = ( this.value.length >= 3 )
        console.log(this.value);
      }
    });
  }

}
