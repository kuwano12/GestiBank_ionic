import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentAffectedDemandeListPage } from './agent-affected-demande-list.page';

describe('AgentAffectedDemandeListPage', () => {
  let component: AgentAffectedDemandeListPage;
  let fixture: ComponentFixture<AgentAffectedDemandeListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAffectedDemandeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentAffectedDemandeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
