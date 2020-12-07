import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TestComponent } from '../components/test/test.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  avatarImage: string = "assets/lama.png"

  students: Student[]

  numFastStudents: number
  message: string = ""

  constructor(private popoverCtrl: PopoverController, private studentService:StudentService) {

    this.studentService.findAll().subscribe((response) => {

      this.students = response.body as Student[]
      this.numFastStudents = this.getDoneProject().length

    }, (error) => {
      console.log(error)
    })

  }

  onClick(student:Student){
    this.message = student.comment
  }

  onChange(e: any, index: number){
    this.students[index].isProjectDone = e.target.checked
    this.numFastStudents = this.getDoneProject().length
  }

  // retourne les etudiants ayant terminé leur projet
  private getDoneProject(): Student[]{
    return this.students.filter(student => student.isProjectDone)
  }

  async testPopover(){
    let popover = await this.popoverCtrl.create({
      component: TestComponent
    })
    await popover.present()
  }

}