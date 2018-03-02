import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { moveIn , fallIn ,moveInLeft} from '../animations/router.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [moveIn(), fallIn(),moveInLeft()],
})
export class UsersComponent implements OnInit {

  state: string = '';
  public Users  = [];
  p : number = 1;
  public userDetail  = [];
  show : boolean = false;
  name : string = "";
  message: boolean = false;

  constructor(private users: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  getDetails(id){
    this.ShowHide();

    this.users.getUserDetail(id).subscribe(
      response => {
        this.userDetail = response['user_detail'];
        console.log(this.userDetail);

        if(this.userDetail.length == 0){
          this.message = true;
        }
        else{
          this.name = this.userDetail[0]['name'];
        }
      }
    );
  }

  ShowHide(){
    this.show = !this.show;
  }

  loadUsers(){
    this.users.getUsers().subscribe(
      response => {
        if(response['success']== true ){
          this.Users = response["users_list"];
          console.log(this.Users);
        }
      }
    );
  }

}
