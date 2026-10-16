import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailCoursComponent } from './detail-cours';

describe('DetailCours', () => {
  let component: DetailCoursComponent;
  let fixture: ComponentFixture<DetailCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCoursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCoursComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
