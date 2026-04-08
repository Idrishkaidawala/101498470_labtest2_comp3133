import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpacexService } from '../spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatGridListModule, MatProgressSpinnerModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  missions = signal<Mission[]>([]);
  isLoading = signal<boolean>(true);

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe({
      next: (data) => {
        this.missions.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching missions', err);
        this.isLoading.set(false);
      }
    });
  }
}
