import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SpacexService } from '../spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent implements OnInit {
  years: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  
  filteredMissions = signal<Mission[]>([]);
  activeYear = signal<number | null>(null);
  activeLaunchSuccess = signal<boolean | null>(null);
  activeLandSuccess = signal<boolean | null>(null);

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    // Load initial data (all missions) to match screenshot layout which likely defaults to everything without a filter or initial set
    this.fetchData();
  }

  fetchData(): void {
    const year = this.activeYear();
    if (year) {
      this.spacexService.getMissionsByYear(year.toString()).subscribe({
        next: (data) => {
          this.applyLocalFilters(data);
        },
        error: (err) => console.error(err)
      });
    } else {
      this.spacexService.getMissions().subscribe({
        next: (data) => {
          this.applyLocalFilters(data);
        },
        error: (err) => console.error(err)
      });
    }
  }

  applyLocalFilters(data: Mission[]): void {
    let filtered = data;
    
    // Additional filtering for launch success
    const ls = this.activeLaunchSuccess();
    if (ls !== null) {
      filtered = filtered.filter(m => m.launch_success === ls);
    }
    
    // Additional filtering for land success
    const land_s = this.activeLandSuccess();
    if (land_s !== null) {
      filtered = filtered.filter(m => {
        // Find if any core recorded land success matching
        if (!m.rocket?.first_stage?.cores) return false;
        return m.rocket.first_stage.cores.some(c => c.land_success === land_s);
      });
    }

    this.filteredMissions.set(filtered);
  }

  filterByYear(year: number): void {
    this.activeYear.set(year);
    this.fetchData();
  }

  filterByLaunch(success: boolean): void {
    this.activeLaunchSuccess.set(success);
    this.fetchData();
  }

  filterByLand(success: boolean): void {
    this.activeLandSuccess.set(success);
    this.fetchData();
  }
}
