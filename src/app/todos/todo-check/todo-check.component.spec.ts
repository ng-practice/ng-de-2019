import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCheckComponent } from './todo-check.component';

describe('TodoCheckComponent', () => {
  let component: TodoCheckComponent;
  let fixture: ComponentFixture<TodoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
