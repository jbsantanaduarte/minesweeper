const generatePlayerBoard = (numberOfRows, numberOfColumns) =>{
  const board = [];
  for (i = 0; i < numberOfRows; i++) {const row = [];
    for (j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    };
    board.push(row);
  };
   return board;
};

console.log(generatePlayerBoard(1,3));
