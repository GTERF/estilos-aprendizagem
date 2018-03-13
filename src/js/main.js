function solve1() {
    var A = [1, 6, 11, 14, 20, 23, 32, 35, 39, 40];
    var B = [2, 5, 10, 15, 19, 24, 31, 33, 34, 36];
    var C = [3, 7, 9, 16, 18, 25, 27, 28, 30, 37];
    var D = [4, 8, 12, 13, 17, 21, 22, 26, 29, 38];

    solve(A, B, C, D, 40, 'ck', 'A', 'B', 'C', 'D');
}

function solve2() {
    var A = [3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77];
    var B = [10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79];
    var C = [2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80];
    var D = [1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76];

    solve(A, B, C, D, 80, 'cj', 'ATIVO', 'REFLEXIVO', 'TEÓRICO', 'PRAGMÁTICO');
}

function solve(A, B, C, D, size, prefix, nameA, nameB, nameC, nameD) {
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    for (var i = 1; i <= size; i++) {
        if($('#'+prefix+i).is(':checked')) {
            if ($.inArray(i, A) != -1) a++;
            else if ($.inArray(i, B) != -1) b++;
            else if ($.inArray(i, C) != -1) c++;
            else if ($.inArray(i, D) != -1) d++;
        }
    }

    if (a === 0 && b === 0 && c === 0 && d === 0) {
        $('#result'+prefix).html('<div class="alert alert-danger" role="alert">Selecione as alternativas acima!</div>');
    } else {
        var name = a >= b && a >= c && a >= d ? nameA : b >= c && b >= d ? nameB : c >= d ? nameC : nameD;
        $('#result'+prefix).html('<div class="alert alert-info" role="alert">Total ' + nameA + ': ' + a + '</br>Total ' + nameB + ': ' + b + '</br>Total ' + nameC + ': ' + c + '</br>Total ' + nameD + ': ' + d + '</br>Seu perfil é ' + name + '</div>');
    }

    $('html, body').animate({
        scrollTop: $('#result'+prefix).offset().top
    }, 1000);
}