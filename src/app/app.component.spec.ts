import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).createComponent(AppComponent);
  }));

  it('should render the component', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
