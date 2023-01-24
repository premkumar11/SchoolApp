// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { MarkService } from '../../services/mark.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Mark } from '../../domain/school-app_db/mark';
import { Student } from '../../domain/school-app_db/student';

// START - USED SERVICES
/**
* MarkService.create
*	@description CRUD ACTION create
*
* MarkService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* MarkService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* StudentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Mark
 */
@Component({
    selector: 'app-mark-edit',
    templateUrl: 'mark-edit.component.html',
    styleUrls: ['mark-edit.component.css']
})
export class MarkEditComponent implements OnInit {
    item: Mark;
    list_student: Student[];
    model: Mark;
    formValid: Boolean;

    constructor(
    private markService: MarkService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Mark();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.markService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_student = list);
        });
    }


    /**
     * Save Mark
     *
     * @param {boolean} formValid Form validity check
     * @param Mark item Mark to save
     */
    save(formValid: boolean, item: Mark): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.markService.update(item).subscribe(data => this.goBack());
            } else {
                this.markService.create(item).subscribe(data => this.goBack());
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



