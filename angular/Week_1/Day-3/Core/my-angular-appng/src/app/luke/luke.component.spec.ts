import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LukeComponent } from './luke.component';

describe('LukeComponent', () => {
  let component: LukeComponent;
  let fixture: ComponentFixture<LukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LukeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
