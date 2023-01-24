// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ClassService } from '../../services/class.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Class } from '../../domain/school-app_db/class';
import { Student } from '../../domain/school-app_db/student';

// START - USED SERVICES
/**
* ClassService.create
*	@description CRUD ACTION create
*
* ClassService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ClassService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* StudentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Class
 */
@Component({
    selector: 'app-class-edit',
    templateUrl: 'class-edit.component.html',
    styleUrls: ['class-edit.component.css']
})
export class ClassEditComponent implements OnInit {
    item: Class;
    list_student: Student[];
    model: Class;
    formValid: Boolean;

    constructor(
    private classService: ClassService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Class();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.classService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Class
     *
     * @param {boolean} formValid Form validity check
     * @param Class item Class to save
     */
    save(formValid: boolean, item: Class): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.classService.update(item).subscribe(data => this.goBack());
            } else {
                this.classService.create(item).subscribe(data => this.goBack());
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



