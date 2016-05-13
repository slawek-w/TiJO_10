describe('app', function () {
    'use strict';

    var app = window.app;
    var answer = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Nick', '5/10/2012')).toEqual({
                name: 'Zack', age: 4, course: 'kids'
            });
        });
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Tom', '17/02/1992')).toEqual({
                name: 'Zack', age: 24, course: 'adults'
            });
        });
    });

    describe('calculateArea', function () {
        it('should return false when first element is not a number', function () {
            expect(answer.calculateArea('a', 10, 10, 'Sukces', 'Niepowodzenie')).toBe(false);
        });
        it('should return false when second element is not a number', function () {
            expect(answer.calculateArea(10, 'a', 10, 'Sukces', 'Niepowodzenie')).toBe(false);
        });
        it('should return false when third element is not a number', function () {
            expect(answer.calculateArea(10, 10, 'a', 'Sukces', 'Niepowodzenie')).toBe(false);
        });
        it('should return false when fourth element is not a string', function () {
            expect(answer.calculateArea(10, 10, 10, 123, 'Niepowodzenie')).toBe(false);
        });
        it('should return false when fifth element is not a string', function () {
            expect(answer.calculateArea(10, 10, 10, 'Sukces', 123)).toBe(false);
        });
        it('should return false when not enough elementss', function () {
            expect(answer.calculateArea(10, 10)).toBe(false);
        });
    });
});


