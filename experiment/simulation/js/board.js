class NQueens {
    constructor(cols, seed = None, board = null) {
        this.seed = seed
        this.size = cols;
        this.board = board;

        if (this.board == null) {
            this.makeBoard();
        }
    }

    makeBoard() {
        Math.seedrandom(this.seed);
        this.board = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.board[i] = Math.floor(Math.random() * this.size);
        }
    }


    placeQueen(row, col) {
        this.board[col] = row;
    }

    drawBoard(svgElement, heuristics = null, moved = { row: -1, col: -1 }, i, appeared, question1 = false) {


        const container_size = svgElement.getBoundingClientRect().width;
        const squareSize = container_size / (this.size);

        console.log("moving appeared", appeared, "i", i, "moved", moved)

        if(appeared && i == 1) { 
            console.log("not cleared")
            if (moved.row !== -1 && moved.col !== -1) {
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square.setAttribute('x', moved.col * squareSize);
                square.setAttribute('y', moved.row * squareSize);
                square.setAttribute('width', squareSize);
                square.setAttribute('height', squareSize);
                square.setAttribute('fill', 'blue');
                square.setAttribute('opacity', '0.3');
                svgElement.appendChild(square);

            }

            return;
        
        }

        if(appeared && i == 2) { 
            if (moved.row !== -1 && moved.col !== -1) {
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square.setAttribute('x', moved.col * squareSize);
                square.setAttribute('y', moved.row * squareSize);
                square.setAttribute('width', squareSize);
                square.setAttribute('height', squareSize);
                square.setAttribute('fill', 'orange');
                square.setAttribute('opacity', '0.3');
                svgElement.appendChild(square);

            }

            return;
        
        }

        svgElement.innerHTML = "";


        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square.setAttribute('x', x * squareSize);
                square.setAttribute('y', y * squareSize);
                square.setAttribute('width', squareSize);
                square.setAttribute('height', squareSize);
                square.setAttribute('fill', (x + y) % 2 === 0 ? '#eeeeee' : '#5b5b5b');

                svgElement.appendChild(square);

                svgElement.appendChild(square);
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', x * squareSize + 5);
                text.setAttribute('y', y * squareSize + 10);
                text.setAttribute('font-size', '8px');
                text.setAttribute('fill', (x + y) % 2 === 0 ? '#5b5b5b' : '#eeeeee');
                text.textContent = `(${y},${x})`;
                svgElement.appendChild(text);
            }
        }

        if (question1) {
            if (heuristics) {
                for (let i = 0; i < this.size; i++) {
                    for (let j = 0; j < this.size; j++) {

                        if (heuristics[i * this.size + j] != -1) {
                            if (i == moved.col && j == moved.row) {
                                continue;
                            }

                            else {
                                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                text.setAttribute('x', i * squareSize + squareSize / 2);
                                text.setAttribute('y', j * squareSize + squareSize / 2);
                                text.setAttribute('text-anchor', 'middle');
                                text.setAttribute('dominant-baseline', 'central');
                                text.setAttribute('font-size', '20px');
                                text.textContent = heuristics[i * this.size + j];
                                svgElement.appendChild(text);
                            }
                        }
                    }
                }
            }

            if (moved.row !== -1 && moved.col !== -1) {
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                square.setAttribute('x', moved.col * squareSize);
                square.setAttribute('y', moved.row * squareSize);
                square.setAttribute('width', squareSize);
                square.setAttribute('height', squareSize);
                square.setAttribute('fill', 'red');
                square.setAttribute('opacity', '0.3');
                svgElement.appendChild(square);

            }

        }

        else {
            if (heuristics) {
                for (let i = 0; i < this.size; i++) {
                    for (let j = 0; j < this.size; j++) {

                        if (heuristics[i * this.size + j] != -1) {
                            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            text.setAttribute('x', i * squareSize + squareSize / 2);
                            text.setAttribute('y', j * squareSize + squareSize / 2);
                            text.setAttribute('text-anchor', 'middle');
                            text.setAttribute('dominant-baseline', 'central');
                            text.setAttribute('font-size', '20px');
                            text.textContent = heuristics[i * this.size + j];
                            svgElement.appendChild(text);
                        }
                    }
                }
            }

            console.log("i in draw ", i);

            if ( i === 0) {

                if (moved.row !== -1 && moved.col !== -1) {
                    const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    square.setAttribute('x', moved.col * squareSize);
                    square.setAttribute('y', moved.row * squareSize);
                    square.setAttribute('width', squareSize);
                    square.setAttribute('height', squareSize);
                    square.setAttribute('fill', 'green');
                    square.setAttribute('opacity', '0.3');
                    svgElement.appendChild(square);

                }
            }


            if ( i === 1) {

                if (moved.row !== -1 && moved.col !== -1) {
                    const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    square.setAttribute('x', moved.col * squareSize);
                    square.setAttribute('y', moved.row * squareSize);
                    square.setAttribute('width', squareSize);
                    square.setAttribute('height', squareSize);
                    square.setAttribute('fill', 'blue');
                    square.setAttribute('opacity', '0.3');
                    svgElement.appendChild(square);

                }
            }


            if ( i === 2) {

                if (moved.row !== -1 && moved.col !== -1) {
                    const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    square.setAttribute('x', moved.col * squareSize);
                    square.setAttribute('y', moved.row * squareSize);
                    square.setAttribute('width', squareSize);
                    square.setAttribute('height', squareSize);
                    square.setAttribute('fill', 'orange');
                    square.setAttribute('opacity', '0.3');
                    svgElement.appendChild(square);

                }
            }
        }

    }

    drawQueen(svgElement) {

        const container_size = svgElement.getBoundingClientRect().width;
        const squareSize = container_size / (this.size);

        fetch('images/queen.svg')
            .then(response => response.text())
            .then(svgData => {
                const parser = new DOMParser();
                const queenSvg = parser.parseFromString(svgData, 'image/svg+xml').querySelector('svg');
                queenSvg.setAttribute('width', squareSize); // Adjust queen size as needed
                queenSvg.setAttribute('height', squareSize);

                this.board.forEach((row, col) => {
                    // console.log(row, col)
                    const queenElement = queenSvg.cloneNode(true);
                    queenElement.setAttribute('x', col * squareSize);
                    queenElement.setAttribute('y', row * squareSize);
                    svgElement.appendChild(queenElement);
                });
            });

    }
}

class Node {
    constructor(state, heuristic) {
        this.state = state;
        this.h = heuristic;
    }
}

class Agent {
    constructor(init_state, init_svgs, beam, seed = 42) {
        this.curr = this.getNodes(init_state);
        this.speed = 1000;
        this.paused = true;
        this.initState = this.getNodes(init_state);
        this.svgs = init_svgs;
        this.iters = 0;
        this.children = [];
        this.heuristics = [];
        this.curr_store = this.getNodes(init_state);
        this.prev_store = this.getNodes(init_state);
        this.moved = [{ row: -1, col: -1 }];
        this.new_states = [];
        this.beamWidth = beam;
    }

    getNodes(states) {
        const nodes = [];
        for (let state of states) {
            nodes.push(new Node(state, this.h(state)));
        }
        
        return nodes;
    }

    h(state) {
        let total = 0;

        for (let col = 0; col < state.size; col++) {
            const row = state.board[col];
            for (let i = col + 1; i < state.size; i++) {
                if (state.board[i] === row) {
                    total += 1;
                }
                if (state.board[i] === row - (col - i)) {
                    total += 1;
                }
                if (state.board[i] === row + (col - i)) {
                    total += 1;
                }
            }
        }

        return total;
    }

    expandChild(state) {
        const children = [];
        const heuristics = [];
        const cols = state.size;
        let min_h = -1;

        console.log(state.board)

        const col_list = Array.from({ length: cols }, (_, i) => i);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < cols; j++) {

                if (state.board[i] != j) {
                    const temp = new NQueens(cols, state.seed, [...state.board],);
                    // const old_qp = temp.board[i];
                    temp.placeQueen(j, i);
                    const temp_node = new Node(temp, this.h(temp));
                    heuristics.push(temp_node.h);
                }

                else {
                    heuristics.push(-1);
                }
            }
        }

        col_list.sort(() => Math.random() - 0.5);

        for (const i of col_list) {
            for (let j = 1; j < cols; j++) {
                const temp = new NQueens(cols, state.seed, [...state.board],);
                const old_qp = temp.board[i];
                temp.placeQueen((old_qp + j) % cols, i);
                const temp_node = new Node(temp, this.h(temp));

                if (min_h < 0 || temp_node.h < min_h) {
                    min_h = temp_node.h;
                    children.push(temp_node);
                }
            }
        }

        return { children, heuristics };
    }

    beamSearch() {
        console.log(isPractice)
        this.prev_store = this.curr;
        this.curr_store = this.curr;

        console.log(this.curr_store)

        for (let i = 0; i < this.curr_store.length; i++) {
            let { children, heuristics } = this.expandChild(this.curr_store[i].state);
            // this.children = {children: children, parent: };
            const childTuples = children.map(child => [i, child]);
            // this.children.push(...{children: children, parent: i})
            this.children.push(...childTuples);
            this.new_states.push(...children);
            this.heuristics.push(heuristics);

        }

        // console.log(this.new_states)

    }


    async nextMove() {
        if (this.paused) return;
        if (isQuestion) return;

        document.getElementById('next').disabled = true;

        // Update iteration number
        this.iters++;
        const iterationNumberElement = document.getElementById('iteration-number');
        iterationNumberElement.textContent = this.iters;

        if (this.curr_store[0].h === 0 || this.curr_store[1].h === 0) {

            for (let i = 0; i < this.beamWidth; i++) { 
                this.updateBoard(this.curr_store[i], this.svgs[i])
                this.updateQueen(this.curr_store[i], this.svgs[i]);
            }

            console.log("Problem Solved!");
            document.getElementById('next').disabled = false;
            started = false;
            return;
        }

        this.new_states = [];
        this.heuristics = [];
        this.children = [];
        console.log(this.curr_store)

        for (let i = 0; i < this.curr_store.length; i++) {
            let { children, heuristics } = this.expandChild(this.curr_store[i].state);
            // this.children = {children: children, parent: };
            const childTuples = children.map(child => [i, child]);
            // this.children.push(...{children: children, parent: i})
            this.children.push(...childTuples);
            this.new_states.push(...children);
            this.heuristics.push(heuristics);

        }

        this.new_states.sort((a, b) => a.h - b.h);
        
        this.children.sort((a, b) => a[1].h - b[1].h)

        this.prev_store = this.curr_store;
        this.curr_store = this.new_states.slice(0, this.beamWidth);

        this.moved = [];

        // this.curr_store = neighbour;

        for (let i = 0; i < this.prev_store.length; i++) {
            const parent = this.children[i][0];
            const moved = this.calculateMove(this.prev_store[parent], this.curr_store[i]);
            this.moved.push(moved)
        }

        if (!NoQuestion && this.iters !== 1) {
            await this.getQuestion();
        }

        if (!isQuestion && isAnswer) {

            let encountered = new Set();
            encountered.clear();
            console.log("encountered ", encountered);
            
            console.log("beam width ", this.beamWidth);
            // console.log("children ", this.children)


            for (let i = 0; i < this.beamWidth; i++)
            {
                let appeared = false;
                const parent = this.children[i][0];
                // console.log("i", i, "appeared", appeared)

                if(encountered.has(parent)) {
                    appeared = true;
                }

                encountered.add(parent);

                console.log("appeared i", i);
                await this.updateGreen(this.curr_store[parent], this.prev_store[parent], this.svgs[parent], this.moved[i], this.heuristics[parent], i, appeared);
                // console.log(parent)
                if(!encountered.has(i)) {
                    this.updateBoard(this.curr_store[i], this.svgs[i], this.heuristics[i])
                    this.updateQueen(this.prev_store[i], this.svgs[i]);
                }
            }

        }
    }


    async getQuestion() {

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(this.speed / 4);

        var rand = Math.random();
        var q;
        console.log(rand)

        if (rand < chance) {
            isQuestion = true;
            isAnswer = false;
            console.log("Question!");
            q = question();
            console.log("q", q)

            if (q == 0) {
                isQ1 = true;
                chosen = Math.floor(Math.random() * this.beamWidth);
                await this.type1(this.svgs[chosen], chosen);

            }
            else {
                isQ2 = true;
                chosen = Math.floor(Math.random() * this.beamWidth);
                await this.type2(this.svgs[chosen], chosen);

            }
        }
    }

    async type1(svgElement, chosen) {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        qrow = Math.floor(Math.random() * this.curr[chosen].state.size);
        qcol = Math.floor(Math.random() * this.curr[chosen].state.size);

        console.log(qrow, qcol)

        if (this.prev_store[chosen].state.board[qcol] == qrow) {
            qrow = (qrow + 1) % this.curr[chosen].state.size;
        }

        var moved = { row: qrow, col: qcol }

        console.log("moved", moved)

        await delay(this.speed / 4);
        this.curr_store[chosen].state.drawBoard(svgElement, this.heuristics[chosen], moved, 0, false, true);
        this.prev_store[chosen].state.drawQueen(svgElement)

    }

    async type2(svgElement, chosen) {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        q2col = this.moved[chosen].col
        console.log("chosen", chosen)
        let parent = this.children[chosen][0]
        q2row = this.prev_store[parent].state.board[q2col]
        var moved = { row: q2row, col: q2col }

        console.log(moved)

        await delay(this.speed / 4);
        this.curr_store[chosen].state.drawBoard(svgElement, this.heuristics[chosen], moved,0, false, true);
        this.prev_store[parent].state.drawQueen(svgElement)
        // this.svgs[chosen].style.border = '2px solid red';

        await delay(this.speed / 4);
    }

    async updateGreen(curr, prev, svgElement, moved, heuristics, i = 0, appeared = false) {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        await delay(this.speed / 4);
        this.updateBoard(curr, svgElement, heuristics, moved, i, appeared);
        this.updateQueen(prev, svgElement);

        document.getElementById('next').disabled = false;

    }

    async QueenMove() {
        document.getElementById('next').disabled = true;

        await this.update();
        document.getElementById('next').disabled = false;
    }

    async update() {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        // console.log("curr_store ", this.curr_store);
        for (let i = 0; i < this.beamWidth; i++) {
            await delay(this.speed / 4);
            this.updateBoard(this.curr_store[i], this.svgs[i], this.heuristics[this.children[i][0]], this.moved[i]);
            this.updateQueen(this.curr_store[i], this.svgs[i]);

            await delay(this.speed / 4);
            this.updateHeuristicValue(this.curr_store[i], i);

            await delay(this.speed / 4);
            updateValue(this.iters, this.curr_store[i].h, i);

        }

    }

    updateHeuristicValue(curr, i) {
        
        if (i === 0)
        {
            const heuristicValueElement = document.getElementById('heuristic-number');
            heuristicValueElement.textContent = curr.h;
        }

        if (i === 1)
        {
            const heuristicValueElement = document.getElementById('2-heuristic-number');
            heuristicValueElement.textContent = curr.h;
        }

        if (i === 2)
        {
            const heuristicValueElement = document.getElementById('3-heuristic-number');
            heuristicValueElement.textContent = curr.h;
        }
            
    }

    updateBoard(curr, svgElement, heuristics, moved = { row: -1, col: -1 }, i = 0, appeared = false) {
        curr.state.drawBoard(svgElement, heuristics, moved, i , appeared);
    }

    updateQueen(curr, svgElement) {
        curr.state.drawQueen(svgElement);

    }

    calculateMove(prevState, currState) {

        const prevBoard = prevState.state.board;
        const currBoard = currState.state.board;

        for (let i = 0; i < prevState.state.size; i++) {
            if (prevBoard[i] !== currBoard[i]) {
                return { row: currBoard[i], col: i };
            }
        }

        return { row: -1, col: -1 };
    }


    reset(svgElement) {
        clearInterval(this.interval);
        started = false;

        this.paused = true;
        this.speed = 1000;
        this.iters = 0;

        const iterationNumberElement = document.getElementById('iteration-number');
        iterationNumberElement.textContent = '0';

        const heuristicValueElement = document.getElementById('heuristic-number');
        heuristicValueElement.textContent = this.curr.h;

        const history = document.getElementById('history');
        history.innerHTML = "";

        for (let i = 0; i < this.beamWidth; i++)
        {
            this.curr[i].state.drawBoard(this.svgs[i]);
            this.curr[i].state.drawQueen(this.svgs[i]);
        }

        isQ1 = false;
        isQ2 = false;
        isQuestion = false;
        isStuck = false;

        next_count = 0;
        this.moved = { row: -1, col: -1 };
        this.children = []
        this.heuristics = []

    }

    resume() {
        this.paused = false;
    }

}

var numBoards = document.getElementById('svi').value;
// let chessboards = [];

document.addEventListener('DOMContentLoaded', () => {

    const sviInput = document.getElementById('svi');
    const grid = document.getElementById('grid-sizes');
    let chessboards = [];

    sviInput.addEventListener('input', (event) => {
        event.preventDefault();
        console.log("here")
        numBoards = document.getElementById('svi').value;
        chessboards = [];

        grid.dispatchEvent(new Event('change'));

    });

    grid.addEventListener('change', (event) => {
        event.preventDefault();
        started = false;

        const container = document.getElementById('canvas_container');
        container.innerHTML = "";

        size = parseInt(event.target.value);
        var op = size % 10;
        size = Math.floor(size / 10);
        chessboards = [];

        console.log("op ", op);

        if (numBoards <= Number(document.getElementById('svi').max) && numBoards >= Number(document.getElementById('svi').min))
        {   
            console.log("numBoards", numBoards);

            // console.log() 
            for (let i = 0; i < numBoards; i++) {
                const chessboardContainer = document.createElement('div');
                chessboardContainer.classList.add('column', 'is-6-desktop', 'is-12-tablet', 'is-12-mobile');
                
                const chessboard = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                chessboard.classList.add('chessboard');
                chessboard.style.width = '100%';
                chessboard.style.display = 'flex';
                chessboard.style.border = '2px solid black';
                chessboard.oncontextmenu = () => false;
                // console.log("container size ", chessboard.getBoundingClientRect().width)
            
                chessboardContainer.appendChild(chessboard);
                container.appendChild(chessboardContainer);

                const container_size = chessboard.getBoundingClientRect().width;
                chessboard.setAttribute('height', container_size);

                if (isPractice) {
                    const nQueens = new NQueens(size, null);
                    nQueens.drawBoard(chessboard);
                    nQueens.drawQueen(chessboard);

                    chessboards.push({ board: nQueens, svg: chessboard })
                } else {
                    const nQueens = new NQueens(size, 20 + op + i);
                    nQueens.drawBoard(chessboard);
                    nQueens.drawQueen(chessboard);

                    chessboards.push({ board: nQueens, svg: chessboard })
                }
            }

            console.log(chessboards)

            container.style.display = 'flex';
            container.style.flexDirection = 'row';
            container.style.flexWrap = 'wrap';
            container.style.justifyContent = 'center';

            const queens = [];

            for (let i = 0; i < numBoards; i++) {
                queens.push(chessboards[i].board)
            }

            const svgs = []

            for (let i = 0; i < numBoards; i++) {
                svgs.push(chessboards[i].svg)
            }

            agent = new Agent(queens, svgs, numBoards);
            console.log("agent", agent)

        }

        const heuristicValueElement = document.getElementById('heuristic-number');
    });



    sviInput.dispatchEvent(new Event('input'));

});
