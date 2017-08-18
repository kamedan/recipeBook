import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/dataStorage.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:Response;

  constructor(private dataStorageService:DataStorageService, private authService:AuthService) { }

  ngOnInit() {
  }
  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response:Response) => {
        console.log(response);
      }
    );
  }

  onGetData(){
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}