# awb-api-wrapper

![License](https://img.shields.io/npm/l/awb-api-wrapper.svg)
![Version](https://img.shields.io/npm/v/awb-api-wrapper.svg)

A little wrapper for the [AWB API](https://offenedaten-koeln.de/anfragen/m%C3%BCllabholungstermine-der-abfallwirtschaftsbetriebe-api).

## Installation

Use npm:

> npm install awb-api-wrapper

## Example Usage

Here a little example with the address of the Cologne Cathedral:

```javascript
import AwbApiWrapper from 'awb-api-wrapper';

let config = {
    streetnumber: 4,
    streetcode: 745,
    startyear: 2019,
    endyear: 2019,
    startmonth: 2019,
    endmonth: 2019
};

let wrapper = new AwbApiWrapper(config);

wrapper.get().then((response) => {
    console.log(res);
});
```

The output should be like this:

```javascript
[ TrashPickup { date: 2019-02-01T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-05T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-07T00:00:00.000Z, type: 'blue' },
  TrashPickup { date: 2019-02-08T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-12T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-15T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-19T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-21T00:00:00.000Z, type: 'blue' },
  TrashPickup { date: 2019-02-22T00:00:00.000Z, type: 'grey' },
  TrashPickup { date: 2019-02-26T00:00:00.000Z, type: 'grey' } ]
```
