import {makeAutoObservable} from 'mobx';

export default class EventStore{
  constructor() {
    this._events = []
    
    this._user_event = [
      {id: 1, email: 'example@mail.com', full_name: 'Pes Patron', event_id: 1},
      {id: 2, email: 'example@mail.com', full_name: 'Pes Patron', event_id: 1},
      {id: 3, email: 'example@mail.com', full_name: 'Pes Patron', event_id: 1},
      {id: 4, email: 'example@mail.com', full_name: 'Pes Patron', event_id: 2},
      {id: 5, email: 'example@mail.com', full_name: 'Pes Patron', event_id: 2} 
    ]
    makeAutoObservable(this)
  }

  setEvent(event){
    this._events = event
  }

  get getEvents() {
    return this.events;
  }

  setUserEvent(userEvent){
    this._user_event = userEvent
  }

  get userEvents(){
    return this._user_event
  }

  addUserEvent(userEvent) {
    this._user_event.push(userEvent);
  }

  findEventById(id) {
    return this._events.find(event => event.id === id);
  }

}