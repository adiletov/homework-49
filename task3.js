var chessBoard = function(size){
    var hash;
    var space = '   ';
    for (var i = 1; i < 14; i++)
    {
        hash += '\n';
        for (var j = 0; j < size; j++)
        {
            if((i +j) % 2 === 0)
            {
                hash  += space
            }
            else
            {
                hash  += "███"
            }
        }
    }
    console.log(hash)
}(15);
