class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

const assert = require('chai').assert;
const mocha=require('mocha')
describe('HolidayPackage', function () {
    let holidayPackage;

    beforeEach(function () {
        holidayPackage = new HolidayPackage('Italy', 'Summer');
    });

    it('constructor should set destination and season properties correctly', function () {
        assert.equal(holidayPackage.destination, 'Italy');
        assert.equal(holidayPackage.season, 'Summer');
    });

    it('insuranceIncluded should get the correct value;', function () {
        const expected = false;
        const actual = holidayPackage.insuranceIncluded;

        assert.equal(actual, expected);
    });

    it('insuranceIncluded should throw error when the value\'s type is invalid', function () {
        assert.throw(() => holidayPackage.insuranceIncluded = 5, 'Insurance status must be a boolean');
    });

    it('insuranceIncluded should set the value correctly when the value is boolean', function () {
        holidayPackage.insuranceIncluded = true;
        ;

        const expected = true;
        const actual = holidayPackage.insuranceIncluded;

        assert.equal(actual, expected);
    });

    it('addVacationer should throw error when the parameter is invalid', function () {
        assert.throw(() => holidayPackage.addVacationer([]), 'Vacationer name must be a non-empty string');
        assert.throw(() => holidayPackage.addVacationer(' '), 'Vacationer name must be a non-empty string');
    });

    it('addVacationer should throw error when the parameter is invalid', function () {
        assert.throw(() => holidayPackage.addVacationer([]),
            'Vacationer name must be a non-empty string');

        assert.throw(() => holidayPackage.addVacationer(' '),
            'Vacationer name must be a non-empty string');
    });

    it('addVacationer should throw error when the parameter\'s length is different', function () {
        assert.throw(() => holidayPackage.addVacationer('Ivan'),
            'Name must consist of first name and last name');
    });

    it('addVacationer should add the vacationer correctly when the parameter is valid', function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Georgi Ivanov');

        const expected = '[Ivan Ivanov,Georgi Ivanov]';
        const actual = JSON.stringify(holidayPackage.vacationers);
    });

    it('showVacationers should return the correct string when there are no vacationers', function () {
        const expected = 'No vacationers are added yet';
        const actual = holidayPackage.showVacationers();

        assert.equal(actual, expected);
    });

    it('showVacationers should return the correct string when there are no vacationers', function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.addVacationer('Georgi Ivanov');

        const expected = 'Vacationers:\nIvan Ivanov\nGeorgi Ivanov';
        const actual = holidayPackage.showVacationers();

        assert.equal(actual, expected);
    });

    it('generateHolidayPackage should throw error when there are no vacationers', function () {
        assert.throw(() => holidayPackage.generateHolidayPackage(),
            'There must be at least 1 vacationer added');
    });

    it('generateHolidayPackage should calculate correctly when the season is different from summer and winter', function () {
        holidayPackage = new HolidayPackage('Italy', 'Spring');
        holidayPackage.addVacationer('Ivan Ivanov');

        const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 400';
        const actual = holidayPackage.generateHolidayPackage();

        assert.equal(actual, expected);
    });
    it('generateHolidayPackage should calculate correctly when there are extras', function () {
        holidayPackage.addVacationer('Ivan Ivanov');
        holidayPackage.insuranceIncluded = true;

        const expected = 'Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 700';
        const actual = holidayPackage.generateHolidayPackage();

        assert.equal(actual, expected);
    });
});