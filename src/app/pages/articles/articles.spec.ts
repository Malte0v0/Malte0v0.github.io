import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Articles } from './articles';
import { provideRouter } from '@angular/router';

describe('Articles', () => {
  let component: Articles;
  let fixture: ComponentFixture<Articles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articles],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Articles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
