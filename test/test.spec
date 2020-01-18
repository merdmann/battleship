describe('3 block battleship', function () {
    it( 'all blocks have the same vaessel name', function () {
        let id = shipX( 2, 2, 3)
        let vessel = cell[2][1]

        let inrow = true;
        inrow = inrow & ( vessel === cell[2][2] )
        inrow = inrow & ( vessel === cell[2][3] )

        console.log( "vessel " + cell[2][2]);
        console.log( 'id :' + id)
        assert.equal(inrow, true)
    }); 
    it('should return some usefull vessel id like BB<nbr>', function () {
        let vessel = cell[2][2];

        assert.equal(vessel.charAt(1), 'B');
        assert.equal(vessel.charAt(0), 'B');
    });
});
