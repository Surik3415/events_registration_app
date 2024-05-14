import {makeAutoObservable} from 'mobx';

export default class EventStore{
  constructor() {
    this._events = [
      {id: 1, title: 'Peremoga', description: 'If you know you know'},
      {id: 2, title: 'Peremoga', description: 'If you know you know'},
      {id: 3, title: 'Peremoga', description: 'If you know you know'},
      {id: 4, title: 'Peremoga', description: 'If you know you know'},
      {id: 5, title: 'Peremoga', description: 'If you know you know'},
      {id: 6, title: 'Peremoga', description: 'If you know you know'},
      {id: 7, title: 'Peremoga', description: 'If you know you know'},
      {id: 8, title: 'Peremoga', description: 'If you know you know'},
      {id: 9, title: 'Peremoga', description: 'If you know you know'},
      {id: 10, title: 'Peremoga', description: 'If you know you know'},
      {id: 11, title: 'Peremoga', description: 'If you know you know'},
      {id: 12, title: 'Peremoga', description: 'If you know you know'},
      {id: 13, title: 'Peremoga', description: 'If you know you know'},
      {id: 14, title: 'Peremoga', description: 'If you know you know'},
      {id: 15, title: 'Peremoga', description: 'If you know you know'},
    ]
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
  get events(){
    return this._events
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