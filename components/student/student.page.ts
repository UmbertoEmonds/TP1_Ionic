import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(private route: ActivatedRoute, private http: StudentService) { }

  private userId: string
  student: Student

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {

        this.userId = params.get("id")
        this.http.findAllById(Number(this.userId)).subscribe((response) => {
          this.student = response.body as Student
          console.log(this.student)

        }, (error) => {
          console.log(error)
        })
      })
  }

}