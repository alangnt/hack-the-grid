// Learn more at developers.reddit.com/docs
import { Devvit, useState } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: 'Post the game',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    ui.showToast("Submitting your post - upon completion you'll navigate there.");
    
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: '_0',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" gap={"large"} alignment="middle center">
          <image
            url={'icon.png'}
            imageWidth={'75px'}
            imageHeight={'75px'}
          />
          <text size="large">Hack the Grid</text>
        </vstack>
      ),
    });
    ui.navigateTo(post);
  },
});

type Cell = 0 | 1 | null;
type Board = Cell[];

// Add a post type definition
Devvit.addCustomPostType({
  name: 'Experience Post',
  height: 'regular',
  render: (_context) => {
    const boards: Board[][] = [
      // Board 0
      [
        [0, null, 1, 1, null, null],
        [0, null, null, null, 1, null],
        [null, null, null, null, 1, null],
        [null, null, 1, null, 0, 0],
        [0, null, null, null, null, null],
        [null, null, 1, null, 0, null]
      ],
      // Board 1
      [
        [1, null, 0, null, 1, null],
        [null, 1, null, 0, null, 1],
        [1, null, 1, null, 0, null],
        [null, 0, null, 1, null, 1],
        [1, null, 0, null, 1, null],
        [null, 1, null, 0, null, 1]
      ],
      // Board 2
      [
        [0, null, 1, 0, null, 0],
        [1, 0, null, 1, 0, null],
        [null, 0, 1, null, 1, null],
        [0, null, 0, 1, null, 1],
        [1, 0, 1, null, 0, 1],
        [0, 1, null, 1, 1, null]
      ],
      // Board 3
      [
        [0, null, 0, 1, null, 1],
        [null, 0, 1, null, 1, 0],
        [0, 1, null, 0, 0, null],
        [1, null, 0, 1, null, 0],
        [0, 1, 0, null, 0, 1],
        [1, null, 1, 0, 1, null]
      ],
      // Board 4
      [
        [1, null, 0, 0, null, 0],
        [0, 0, 1, null, 0, 1],
        [null, 0, 1, 0, 1, null],
        [0, 1, null, 1, null, 1],
        [null, 0, null, 1, 1, null],
        [0, null, 1, 0, 0, 1]
      ],
      // Board 5
      [
        [0, null, 1, 1, null, 1],
        [1, 1, null, 0, 1, 0],
        [0, 1, 0, null, 0, null],
        [1, null, 1, 0, 1, null],
        [0, null, null, 0, 1, 0],
        [null, 0, 0, null, 0, null]
      ],
      // Board 6
      [
        [1, null, 1, null, 0, 1],
        [null, 1, null, 1, 1, null],
        [1, null, 0, 1, null, 1],
        [null, 1, 1, null, 1, null],
        [1, null, 1, 0, null, 1],
        [0, 1, null, 1, 1, null]
      ],
      // Board 7
      [
        [0, null, 1, 0, 0, 1],
        [null, 0, 0, 1, null, null],
        [0, 1, null, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [1, null, null, 0, 0, null],
        [0, 1, null, 1, 1, 0]
      ],
      // Board 8
      [
        [null, null, 0, null, 0, 0],
        [0, null, 1, 0, 1, null],
        [null, 0, null, 0, 1, 0],
        [0, 1, null, 1, 0, null],
        [1, null, null, 1, 1, 0],
        [null, 1, 1, null, null, 1]
      ],
      // Board 9
      [
        [0, null, 1, null, 1, 1],
        [1, 1, 0, 1, 0, null],
        [null, 1, 0, 1, null, 0],
        [1, null, 1, 0, 0, 1],
        [null, 1, 1, null, 1, 0],
        [1, null, null, 1, 0, 1]
      ],
      // Board 10
      [
        [1, 0, 1, 1, null, null],
        [null, null, 0, 0, 1, 1],
        [1, 0, 0, null, 1, null],
        [null, 1, 1, null, null, 1],
        [1, null, 1, 0, null, null],
        [0, 1, 0, 1, 0, 1]
      ],
      // Board 11
      [
        [0, 1, null, null, 1, 0],
        [null, 0, 0, 1, 0, null],
        [0, 1, 0, 1, 0, 1],
        [null, null, 1, null, 1, 0],
        [0, 1, 1, 0, null, 1],
        [1, null, 0, 1, 1, 0]
      ],
      // Board 12
      [
        [1, 1, null, null, 1, 0],
        [null, null, 1, 1, null, null],
        [1, null, 1, 0, 1, 0],
        [null, 1, 0, null, 0, 1],
        [1, null, 0, 1, 1, 0],
        [0, 1, null, 0, 0, null]
      ],
      // Board 13
      [
        [null, null, 0, 1, null, 1],
        [1, 0, 1, 0, null, 0],
        [1, 0, 0, 1, 0, 1],
        [null, null, 1, null, 1, 0],
        [1, null, 1, 0, null, 1],
        [0, 1, 0, 1, 1, 0]
      ],
      // Board 14
      [
        [1, null, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, null],
        [1, 0, null, 0, 1, null],
        [null, 1, 0, null, 0, 1],
        [null, null, 0, 0, null, 0],
        [0, null, 1, 1, null, 1]
      ]
    ];
    
    const [activeBoardIndex, setActiveBoardIndex] = useState<number>(() =>
      Math.floor(Math.random() * boards.length)
    );
    
    const originalBoard: Board[] = boards[activeBoardIndex].map(row => [...row]);
    
    const [initialBoard, setInitialBoard] = useState<Board[]>(() =>
      originalBoard.map(row => [...row])
    );
    
    const validBoards: Board[][] = [
      // Valid Board 0
      [
        [0, 0, 1, 1, 0, 1],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 0, 1, 1, 0, 0]
      ],
      // Valid Board 1
      [
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1]
      ],
      // Valid Board 2
      [
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0]
      ],
      // Valid Board 3
      [
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0]
      ],
      // Valid Board 4
      [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1]
      ],
      // Valid Board 5
      [
        [0, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1]
      ],
      // Valid Board 6
      [
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0]
      ],
      // Valid Board 7
      [
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0]
      ],
      // Valid Board 8
      [
        [1, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1]
      ],
      // Valid Board 9
      [
        [0, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1]
      ],
      // Valid Board 10
      [
        [1, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1]
      ],
      // Valid Board 11
      [
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 0]
      ],
      // Valid Board 12
      [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1]
      ],
      // Valid Board 13
      [
        [0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0]
      ],
      // Valid Board 14
      [
        [1, 0, 0, 1, 0, 1],
        [0, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1]
      ]
    ];
    
    const [isValid, setIsValid] = useState<boolean>(false);
    
    const handleClick = (cell: Cell, row: number, col: number) => {
      let newValue: Cell;
      if (cell === null) newValue = 0;
      else if (cell === 0) newValue = 1;
      else newValue = null;
      
      const newBoard: Board[] = initialBoard.map((currentRow, rowIndex) =>
        rowIndex === row
          ? currentRow.map((currentCell, colIndex) =>
            colIndex === col ? newValue : currentCell
          )
          : currentRow
      );
      
      if (JSON.stringify(newBoard) === JSON.stringify(validBoards[activeBoardIndex])) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
      
      setInitialBoard(newBoard);
    };
    
    const refreshBoard = () => {
      const newIndex = Math.floor(Math.random() * boards.length);
      setActiveBoardIndex(newIndex);
      setInitialBoard(boards[newIndex].map(row => [...row]));
      setIsValid(false);
    };
    
    return (
      <hstack height="100%" width="100%" gap="large" alignment="center middle">
        <vstack gap="small">
          {initialBoard.map((row, rowIndex) => (
            <hstack key={`row-${rowIndex}`} gap="small">
              {row.map((cell, colIndex) => (
                <button
                  width="40px"
                  height="40px"
                  appearance={isValid ? 'success' : undefined}
                  disabled={originalBoard[rowIndex][colIndex] !== null}
                  key={`cell-${rowIndex}-${colIndex}`}
                  onPress={() => {
                    if (isValid) return;
                    handleClick(cell, rowIndex, colIndex);
                  }}
                >
                  {cell === null ? '' : cell.toString()}
                </button>
              ))}
            </hstack>
          ))}
        </vstack>
        
        <vstack>
          <button appearance={"plain"} onPress={refreshBoard}>New Board</button>
        </vstack>
        
        <vstack gap="medium">
          <vstack>
            <text>The grid consists of</text>
            <text>6 columns and 6 rows</text>
          </vstack>
          <vstack>
            <text>Each row and column must</text>
            <text>contain exactly 3 zeros (0)</text>
            <text>and 3 ones (1)</text>
          </vstack>
          <vstack>
            <text>No more than two consecutive</text>
            <text>zeros (0 0 0) or ones (1 1 1)</text>
            <text>are allowed horizontally</text>
            <text>or vertically</text>
          </vstack>
          <vstack>
            <text>The puzzle must be</text>
            <text>solvable using logic,</text>
            <text>no guessing required</text>
          </vstack>
        </vstack>
      </hstack>
    );
  },
});

export default Devvit;
