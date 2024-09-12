import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 4 buttons', waitForAsync(() => {
    expect(fixture.nativeElement.querySelectorAll('button').length).toEqual(4);
  }));

  it('should display "Испытай удачу" as headline', () => {
    expect(fixture.nativeElement.querySelector('.title').textContent).toEqual('ИСПЫТАЙ УДАЧУ!');
  });

});
