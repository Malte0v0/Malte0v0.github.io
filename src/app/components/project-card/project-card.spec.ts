import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';
import { provideRouter } from '@angular/router';
import { PROJECTS } from '../../data/projects';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("project", {
      id: 0,
      name: "testproj",
      description: "this is a test project",
      stack: ["angular"]
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should show project name", () => {
    expect(fixture.nativeElement.textContent).toContain("testproj");
  });
});
