import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOverviewComponent } from './movies-overview.component';

describe('MoviesOverviewComponent', () => {
  let component: MoviesOverviewComponent;
  let fixture: ComponentFixture<MoviesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
