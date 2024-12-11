var started = false;
var next_count = 0;
var qrow;
var qcol;
var isPractice = false;
var isStuck = false;
var chosen;

var q2row;
var q2col;

var agent;
// var svgChessboard;
var size;
// var svgChessboard1;
var beam;

function start() {
    started = true;
    agent.resume()

    for (let i = 0; i < agent.beamWidth; i++) {
        console.log(i)
        updateValue(agent.iters, agent.curr[i].h, i, true);
    }

    agent.beamSearch();
}

document.getElementById('reset').addEventListener('click', () => {
    agent.reset();
});

document.getElementById('next').addEventListener('click', async () => {

    if (started) {
        if (next_count == 0) {
            agent.nextMove();
            next_count = 1;
        }
        else {
            agent.QueenMove();
            next_count = 0;
        }
    }

});

function updateValue(iteration, heuristic, number, init = false) {
    const history = document.getElementById('history');

    if (init && number === 0) {
        // history.innerHTML += `<hr style="border-style: solid; margin: 0px 0px" />`;

        history.innerHTML += `
            <div style="margin:5px 0px;">
                <p style="font-size:18px; color:red"><b> ${size} Queens Problem</b></p>
            </div>`;

        // history.innerHTML += `<hr style="border-style: dotted; margin-top: 0px; margin-bottom:2px" />`;
    }

    if (number === 0) {
        history_new = `
        <div style="margin:5px 0px;">
            <p><b> Iteration:</b> ${iteration} &nbsp;<b>BHV:</b> ${heuristic}</p>
        </div>
    `;
        
        if (number === agent.beamWidth - 1) {
            history_new += `<hr style="background-color:black; margin-top: 0px; margin-bottom:1px, height:0.08px" />`;
        }
            

        history.innerHTML += history_new;


    }

    if (number === 1) {
        history_new = `
        <div style="margin:5px 0px;">
            <p><b> Iteration:</b> ${iteration} &nbsp;<b>SBHV:</b> ${heuristic}</p>
        </div>
    `;

        if (number === agent.beamWidth - 1) {
            history_new += `<hr style="background-color:black; margin-top: 0px; margin-bottom:1px, height:0.2px" />`;
        }

        history.innerHTML += history_new;


    }

    if (number === 2) {
        history_new = `
        <div style="margin:5px 0px;">
            <p><b> Iteration:</b> ${iteration} &nbsp;<b>TBHV:</b> ${heuristic}</p>
        </div>
    `;

        if (number === agent.beamWidth - 1) {
            history_new += `<hr style="background-color:black; margin-top: 0px; margin-bottom:1px, height:0.25px" />`;
        }

        history.innerHTML += history_new;

    }



}

// for (let i = 0; i < agent.beamWidth; i++) {

//     agent.svgs[i].addEventListener('click', function(event)  {
//         const container_size = chessboard.getBoundingClientRect().width;
//         const squareSize = container_size / (size);

//         const rect = chessboard.getBoundingClientRect();
//         console.log(event.clientX - rect.left)
//         console.log(event.clientY - rect.top)
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;

//         console.log(squareSize)

//         // Calculate the row and column based on the clicked position
//         const col = Math.floor(x / squareSize);
//         const row = Math.floor(y / squareSize);

//         console.log("clicked on", col, row)

//         if(isQ2) {
//             ans2(col, row)
//         }
//     });

// }


// 5 configurations for each grid size (hardcode these configurations) 
// 15 boards in total

// fix beam size as 2 for beam search in demo

// pretest 6 question and post test 6 questions (2 for each difficuly (easy, medium, hard))

// practice will different grid sizes and the grid configuration will be xompletely randomised
// beam search practice user can select 1, 2, 3 beam sizes