import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetail } from './article-detail';
import { provideRouter } from '@angular/router';

describe('ArticleDetail', () => {
  let component: ArticleDetail;
  let fixture: ComponentFixture<ArticleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleDetail],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDetail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("slug", "article-slug");
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
