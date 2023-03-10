import { ActionsRepo, IActionsRepo } from "./actions.repo";
import { ImportPostmanCollectionPayload } from "./actions.types";

export interface IActionsService {
    parsePostmanCollectionv21(payload: ImportPostmanCollectionPayload): Promise<void>
}

export default class ActionsService {


    actionsRepo: IActionsRepo;
    constructor () {

        this.actionsRepo = ActionsRepo;

    }

    async parsePostmanCollectionv21(payload: ImportPostmanCollectionPayload): Promise<void> {
        return this.actionsRepo.parsePostmanCollectionV21(payload);
    }

}