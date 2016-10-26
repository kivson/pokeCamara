import {Component, OnInit, Input} from "@angular/core";
import {CongressistaService} from "../services/congressista.service";
import {Congressista} from "../model/congressista";
import {Observable} from "rxjs";

@Component({
    selector: 'app-carta',
    templateUrl: './carta.component.html',
    styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

    @Input() parlamentarId;

    congressista: Observable<Congressista>;

    constructor(public congressistaService: CongressistaService) {
    }

    ngOnInit() {
        this.congressista = this.congressistaService.by_parlamenta_id(this.parlamentarId);
    }

}
