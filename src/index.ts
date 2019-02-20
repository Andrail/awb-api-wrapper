import {TrashPickup} from "./Models/TrashPickup";
import {Config, ConfigInterface} from "./Config";
import {APIWrapper} from "./APIWrapper";
import {Trashdate, TrashdatesResponse} from "./TrashdatesResponseInterface";

export default class AwbApiWrapper {
    private config: Config;
    private client: APIWrapper;

    constructor(config: ConfigInterface) {
        this.config = new Config(config);
        this.client = new APIWrapper(this.config);
    }

    public get(): Promise<Array<TrashPickup>> {
        return this.client.get().then((response: TrashdatesResponse) => {


            return AwbApiWrapper.getArrayFromResponse(response);
        });
    }

    public updateConfig(config: ConfigInterface): void {
        this.config = new Config(config);
        this.client.setConfig(this.config);
    }

    private static getArrayFromResponse(response: TrashdatesResponse): Array<TrashPickup> {
        let result: Array<TrashPickup> = [];
        let trashdate: Trashdate;

        for (trashdate of response.trashdates.trashdate) {
            let trashPickup: TrashPickup = new TrashPickup(trashdate.typ, trashdate.day, trashdate.month, trashdate.year);
            result.push(trashPickup);
        }

        return result;
    }
}
