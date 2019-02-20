export class TrashPickup {
    public readonly date: Date;
    public readonly type: string;

    public constructor(type: string, day: number, month: number, year: number) {
        this.date = TrashPickup.getFormattedDate(day, month, year);
        this.type = type;
    }

    private static getFormattedDate(day: number, month: number, year: number): Date {
        let dateString = year + '-' + TrashPickup.singleDigitString(month) + '-' + TrashPickup.singleDigitString(day);

        return new Date(dateString);
    }

    private static singleDigitString(n: number): string {
        if (n < 10) {
            return '0' + n.toString();
        }

        return n.toString();
    }
}