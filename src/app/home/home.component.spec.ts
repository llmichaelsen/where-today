import { DataService } from './../data/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let service: DataService;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(DataService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    fixture.autoDetectChanges(true);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Teste para geração de restaurantes.', () => {

    service.generateRestaurants();

    const rests = service.getRestaurants();
    expect(rests.length).toBeGreaterThan(0);
  });

  it('Teste para geração de votação.', () => {

    service.generateRestaurants();
    service.generateVoting();

    const votes = service.getVotes();
    expect(votes.length).toBeGreaterThan(0);
  });

  it('Testando votar no restaurante ganhador. (não pode)', () => {

    spyOn(window, 'alert');
    service.generateRestaurants();
    service.generateVoting();

    component.dayWinner = service.getDayWinner();

    component.selectedRestaurant = component.dayWinner.id;
    component.vote(null);

    expect(window.alert).toHaveBeenCalledWith('Restaurante selecionado já foi escolhido esta semana!');
  });

  it('Testando votar mais de uma vez. (não pode)', () => {

    spyOn(window, 'alert');

    service.generateRestaurants();
    service.generateVoting();

    component.dayWinner = service.getDayWinner();

    const restaurantes = service.getRestaurants();
    let restauranteParaVoto;

    restauranteParaVoto = restaurantes[0].id === component.dayWinner.id ? restaurantes[1].id : restaurantes[0].id;
    component.selectedRestaurant = restauranteParaVoto;
    component.vote(null);

    fixture.detectChanges();

    expect(de.query(By.css('#botao-votar'))).toBeFalsy();
    expect(de.query(By.css('#voted-message')).nativeElement.innerText).toEqual('Obrigado por participar.');
  });

  it('Verificando se ganhador está sendo mostrado na página', () => {

    service.generateRestaurants();
    service.generateVoting();

    component.ngOnInit();

    fixture.detectChanges();

    expect(de.query(By.css('h1.text-white.font-weight-light')).nativeElement.innerText).toContain(service.getDayWinner().name);

  });
});
