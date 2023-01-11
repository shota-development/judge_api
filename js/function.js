//let counter_1, counter_2, counter_3, counter_4;
let counter_1, counter_2, counter_3, counter_4;
let counter_side_1, counter_side_2, counter_side_3, counter_side_4;
let n_1, n_2, n_3, n_4, n_5, n_6;
let check_table, checks;
let check_1, check_2, check_3, check_4;
let a_memorys, b_memorys;
let player_turn, player_name;
let player, turn, turn_line, player_sig;
const f_memory = [false, false, false, false, 0, 0, 0, 0, 0, 0];

function chenge_color(target, player_name) {
    if (target == "energy") {
        if (checks[0].checked) {
            check_1.style.background = "#7c7c7c";
        } else {
            check_1.style.background = "#0a8b2a";
        }
    }
    else if (target == "support") {
        if (checks[1].checked) {
            check_2.style.background = "#7c7c7c";
        } else {
            check_2.style.background = "#0a8b2a";
        }
    }
    else if (target == "escape") {
        if (checks[2].checked) {
            check_3.style.background = "#7c7c7c";
        } else {
            check_3.style.background = "#0a8b2a";
        }
    } 
    else if (target == "stadium") {
        if (checks[3].checked) {
            check_4.style.background = "#7c7c7c";
        } else {
            check_4.style.background = "#0a8b2a";
        }
    } 
    else if (target == "turn") {
        if (player_name == "先攻") {
            turn_line.style.background = "#d11e1e";
            player.style.color = "#d11e1e";
        } else if (player_name == "後攻") {
            turn_line.style.background = "#3657be";
            player.style.color = "#3657be";
        }
    }
}

function reset_color(player_name) {
    chenge_color("energy");
    chenge_color("support");
    chenge_color("escape");
    chenge_color("stadium");
    chenge_color("turn", player_name);
}

function paging(value) {
    // 格納
    var memory = [];
    for (let i = 0; i < checks.length; i++) {
        memory.push(checks[i].checked);
    }
    memory.push(n_1);
    memory.push(n_2);
    memory.push(n_3);
    memory.push(n_4);
    memory.push(n_5);
    memory.push(n_6);

    if (player_name == "先攻") {
        a_memorys[player_turn] = memory;
    } else if (player_name == "後攻") {
        b_memorys[player_turn] = memory;
    }

    // ターンの切り替え
    if (player_name == "先攻") {
        if (value == "previous" & player_turn > 1) {
            player_name = "後攻";
            player_turn -= 1;
            turn.innerHTML = player_turn;
        } else if (value == "next") {
            player_name = "後攻";
        }
        player.innerHTML = player_name;
    } else if (player_name == "後攻") {
        player_name = "先攻"
        player.innerHTML = player_name;
        if (value == "next") {
            player_turn += 1;
            turn.innerHTML = player_turn;
        }
    }

    //カウンタの切り替え
    if (player_name == "先攻") {
        var n_memory = a_memorys[player_turn]
    } else if (player_name == "後攻") {
        var n_memory = b_memorys[player_turn]
    }
    checks[0].checked = n_memory[0];
    checks[1].checked = n_memory[1];
    checks[2].checked = n_memory[2];
    checks[3].checked = n_memory[3];
    reset_color(player_name);
    n_1 = n_memory[4];
    n_2 = n_memory[5];
    n_3 = n_memory[6];
    n_4 = n_memory[7];
    n_5 = n_memory[8];
    n_6 = n_memory[9];
    counter_1.innerHTML = n_1;
    counter_2.innerHTML = n_2;
    counter_3.innerHTML = n_3;
    counter_4.innerHTML = n_4;
    counter_side_3.innerHTML = n_5;
    counter_side_4.innerHTML = n_6;
}

function addCount(num, sign){
    // 値設定
    if (sign == "+") {
        value = 1;
    } else if (sign == "-") {
        value = -1;
    }
    // 計算
    if (num == 1) {
        n_1 += value;
        if (n_1 < 0) {
            n_1 = 0;
        }
    }
    else if (num == 2) {
        n_2 += value;
        if (n_2 < 0) {
            n_2 = 0;
        }
    }
    else if (num == 3) {
        n_3 += value;
        if (n_3 < 0) {
            n_3 = 0;
        }
    }
    else if (num == 4) {
        n_4 += value;
        if (n_4 < 0) {
            n_4 = 0;
        }
    }
    else if (num == 5) {
        turn_side_num = n_5 + value;
        total_side_num = parseInt(counter_side_1.textContent) - value;
        if (total_side_num < 0) {
            alert("先攻プレイヤーのサイドは0枚です。")
        } else if (total_side_num < 7) {
            if (!(turn_side_num < 0)) {
                n_5 = turn_side_num;
                counter_side_1.innerHTML = total_side_num;
            }
        }    
    }
    else if (num == 6) {
        turn_side_num = n_6 + value;
        total_side_num = parseInt(counter_side_2.textContent) - value;
        if (total_side_num < 0) {
            alert("後攻プレイヤーのサイドは0枚です。")
        } else if (total_side_num < 7) {
            if (!(turn_side_num < 0)) {
                n_6 = turn_side_num;
                counter_side_2.innerHTML = total_side_num;
            }
        }
    }
    else if (num == 0) {
        n_1 = 0;
        n_2 = 0;
        n_3 = 0;
        n_4 = 0;
        n_5 = 0;
        n_6 = 0;
    }
    counter_1.innerHTML = n_1;
    counter_2.innerHTML = n_2;
    counter_3.innerHTML = n_3;
    counter_4.innerHTML = n_4;
    counter_side_3.innerHTML = n_5;
    counter_side_4.innerHTML = n_6;
}

function memory_clear() {
    player_name = "先攻";
    player.innerHTML = player_name;
    player_turn = 1;
    turn.innerHTML = player_turn;
    a_memorys = {1: f_memory, 2: f_memory, 3: f_memory, 4: f_memory, 5: f_memory, 
                    6: f_memory, 7: f_memory, 8: f_memory, 9: f_memory, 10: f_memory};
    b_memorys = {1: f_memory, 2: f_memory, 3: f_memory, 4: f_memory, 5: f_memory, 
                    6: f_memory, 7: f_memory, 8: f_memory, 9: f_memory, 10: f_memory};
    check_reset();
}

function check_reset() {
    for (let i = 0; i < checks.length; i++) {
        checks[i].checked = false;
    }
    addCount(0);
    reset_color(player_name);
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter_1 = document.getElementById("counter-1");
    counter_2 = document.getElementById("counter-2");
    counter_3 = document.getElementById("counter-3");
    counter_4 = document.getElementById("counter-4");
    counter_side_1 = document.getElementById("counter-side-1");
    counter_side_2 = document.getElementById("counter-side-2");
    counter_side_3 = document.getElementById("counter-side-3");
    counter_side_4 = document.getElementById("counter-side-4");
    check_1 = document.getElementById("check_energy");
    check_2 = document.getElementById("check_support");
    check_3 = document.getElementById("check_escape");
    check_4 = document.getElementById("check_stadium");
    checks = document.getElementsByClassName("label-check");
    player = document.getElementById("player");
    turn_line = document.getElementById("turn-line");
    turn = document.getElementById("turn");
    test1 = document.getElementById("test1");
    test2 = document.getElementById("test2");
    n_1 = 0;
    n_2 = 0;
    n_3 = 0;
    n_4 = 0;
    n_5 = 0;
    n_6 = 0;
    player_name = "先攻";
    player_turn = 1;
    check_1.style.background = "#0a8b2a";
    check_2.style.background = "#0a8b2a";
    check_3.style.background = "#0a8b2a";
    check_4.style.background = "#0a8b2a";
    a_memorys = {1: f_memory, 2: f_memory, 3: f_memory, 4: f_memory, 5: f_memory, 
                    6: f_memory, 7: f_memory, 8: f_memory, 9: f_memory, 10: f_memory};
    b_memorys = {1: f_memory, 2: f_memory, 3: f_memory, 4: f_memory, 5: f_memory, 
                    6: f_memory, 7: f_memory, 8: f_memory, 9: f_memory, 10: f_memory};
});