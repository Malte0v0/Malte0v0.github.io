import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleCard } from './article-card';
import { provideRouter } from '@angular/router';

describe('ArticleCard', () => {
  let component: ArticleCard;
  let fixture: ComponentFixture<ArticleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("article", {
      slug: "test-article",
      title: "test article",
      date: new Date("2020-05-05"),
      summary: "summary of test",
      content: "wdadawd"
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show article title", () => {
    expect(fixture.nativeElement.textContent).toContain("test article");
  });
});
