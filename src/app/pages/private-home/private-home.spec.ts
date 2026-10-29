import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateHome } from './private-home';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PrivateHome', () => {
  let component: PrivateHome;
  let fixture: ComponentFixture<PrivateHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateHome],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
