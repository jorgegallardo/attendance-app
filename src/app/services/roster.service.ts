import { Injectable } from "@angular/core";

@Injectable()
export class RosterService {
  roster = [
    {
      id: 1,
      name: 'Davey Gravy',
      status: 'absent'
    },
    {
      id: 2,
      name: 'Gaspare Rasper',
      status: 'absent',
      absentTo: ['period 1', 'period 2']
    },
    {
      id: 3,
      name: 'Joshy Washy',
      status: 'absent',
      absentTo: ['period 1', 'period 2', 'period 3']
    },
    {
      id: 4,
      name: 'Tee Pee',
      status: 'present'
    },
    {
      id: 5,
      name: 'Nisha Peesha',
      status: 'present',
      late: true
    },
    {
      id: 6,
      name: 'Mau Tao',
      status: 'present',
      late: true
    },
    {
      id: 7,
      name: 'Caitlin Fatelin',
      status: 'present'
    },
    {
      id: 8,
      name: 'Doyle Boyle',
      status: 'absent'
    },
    {
      id: 9,
      name: 'Polly Molly',
      status: 'absent'
    }
  ];
}