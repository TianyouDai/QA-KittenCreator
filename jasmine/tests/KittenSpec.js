describe("KittenTest", function() {
    it("should correctly convert degrees to radians", function() {
        expect(d2r(180)).toEqual(Math.PI);
        expect(d2r(90)).toEqual(Math.PI/2);
        expect(d2r(-45)).toEqual(-Math.PI/4);
    });

    it("should find correct value of x", function() {
        expect(getX(1, 180)).toEqual(-1);
    });

    it("should find correct value of y", function() {
        expect(getY(1, 90)).toEqual(1);
    });
});
