// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { ClassService } from '../../services/class.service';
// Import Models
import { Student } from '../../domain/school-app_db/student';
import { Class } from '../../domain/school-app_db/class';
import { Mark } from '../../domain/school-app_db/mark';

// START - USED SERVICES
/**
* StudentService.create
*	@description CRUD ACTION create
*
* StudentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* StudentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ClassService.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    externalClass__student: Class[];
    externalMark__student: Mark[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalClass__student = [];
        this.externalMark__student = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.classService.findBy_student(id).subscribe(list => this.externalClass__student = list);
                this.markService.findBy_student(id).subscribe(list => this.externalMark__student = list);
            }
            // Get relations
        });
    }


    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



