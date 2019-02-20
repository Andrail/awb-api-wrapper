export class Config {
    public url: string = "https://www.awbkoeln.de/sensis/trashdate.php";
    public streetnumber: number;
    public streetcode: number;
    public startyear: number;
    public endyear: number;
    public startmonth: number;
    public endmonth: number;
    public form: string = 'json';

    constructor(config: ConfigInterface) {
        this.streetnumber = config.streetnumber;
        this.streetcode = config.streetcode;
        this.startyear = config.startyear;
        this.endyear = config.endyear;
        this.startmonth = config.startmonth;
        this.endmonth = config.endmonth;
    }
}

export interface ConfigInterface {
    streetnumber: number;
    streetcode: number;
    startyear: number;
    endyear: number;
    startmonth: number;
    endmonth: number;
}

