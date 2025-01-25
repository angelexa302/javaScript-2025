const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode, e.key);
    // console.log(limitStage);
    // console.log(limitBall);
    
    

    switch (e.keyCode) {
        
        case 37: //izquierda
        if(limitBall.left>limitStage.left){ 
        e.preventDefault();
        x--;
        }
        break;
        
        case 38: //arriba
        if(limitBall.top>limitStage.top) {
        e.preventDefault();
         y--;
        }
        break;
        
        case 39: //derecha
        if(limitBall.right<limitStage.right) {
        e.preventDefault();
         x++;
        }
        break;

        case 40: //abajo
        if(limitBall.bottom<limitStage.bottom) {
        e.preventDefault();
         y++;
            }
        break;
        
        default:
            break;
        }
        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcut(e) {


    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta.");

    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una alerta de confirmación.");

    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado una confirmación.");

    }
}