//USER FUNCTIONS
var user = {
    //find (row and column) numbers
    reverseLookup: function(gridNo, rowCount){
        //need to know square size (rowCount + colCount)
        //var rowCount = squareCount;             //var rowCount = 4;
        //var colCount = squareCount;             //var colCount = 4;

        //test (7)
        // 0    1   2   3
        // 4    5   6   7
        // 8    9   10  11
        // 12   13  14  15

        //get column
        //var m = 7 % rowCount;                 //m - mod
        var column = gridNo % rowCount;
        //get row
        //var w = Math.floor(7 / rowCount);     //w - whole number
        var row = Math.floor(gridNo / rowCount);       //use floor (not round) so it doesn't round up (just need the whole #)

        var result = [ row, column ];      //return (row, column);
        return result;
    },
    //find gridNo (from row and column)
    gridNo: function(row, column, rowCount){
        var result = (rowCount * row) + column;
        return result;
    }
}