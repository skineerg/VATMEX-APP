import { Component, OnInit } from '@angular/core';
import { VatsimService } from '../../services/vatsim.service';

@Component({
  selector: 'app-online-members',
  templateUrl: './online-members.page.html',
  styleUrls: ['./online-members.page.scss'],
})
export class OnlineMembersPage implements OnInit {
  members: any[] = [];
  totalMembers: number = 0; // Nueva propiedad para almacenar el total

  constructor(private vatsimService: VatsimService) {}

  ngOnInit() {
    this.vatsimService.getOnlineMembers().subscribe(
      (data) => {
        this.members = data;
        this.totalMembers = this.members.length; // Asigna el total de miembros
      },
      (error) => {
        console.error('Error al leer la data:', error);
      }
    );
  }
}
