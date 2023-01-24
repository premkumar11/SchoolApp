import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { MarkService } from '../../services/mark.service';
// Import Models
import { Mark } from '../../domain/school-app_db/mark';

// START - USED SERVICES
/**
* MarkService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* MarkService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Mark
 * @class MarkListComponent
 */
@Component({
    selector: 'app-mark-list',
    templateUrl: './mark-list.component.html',
    styleUrls: ['./mark-list.component.css']
})
export class MarkListComponent implements OnInit {
    list: Mark[];
    search: any = {};
    idSelected: string;
    constructor(
        private markService: MarkService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.markService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Mark to remove
     *
     * @param {string} id Id of the Mark to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Mark
     */
    deleteItem() {
        this.markService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
