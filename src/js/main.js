"use strict";
var Profile = (function () {
    function Profile(name, alternatives) {
        this.count = 0;
        this.name = name;
        this.alternatives = alternatives;
    }
    Profile.prototype.increment = function () {
        this.count++;
    };
    Profile.prototype.isZero = function () {
        return this.count === 0;
    };
    return Profile;
}());
var Handle = (function () {
    function Handle(prefix, profiles) {
        this.prefix = prefix;
        this.profiles = profiles;
        this.size = this.alternativesSize();
    }
    Handle.prototype.alternativesSize = function () {
        return this.profiles
            .map(function (p) { return p.alternatives.length; })
            .reduce(function (previous, current) { return previous + current; });
    };
    Handle.prototype.isChecked = function (index) {
        return $('#' + this.prefix + index).is(':checked');
    };
    Handle.prototype.moveToResult = function () {
        $('html, body').animate({
            scrollTop: $('#result' + this.prefix).offset().top
        }, 1000);
    };
    Handle.prototype.solve = function () {
        for (var i = 1; i <= this.size; i++) {
            if (this.isChecked(i))
                incrementProfile(i, this.profiles);
        }
        $('#result' + this.prefix).html(createMessage(this.profiles));
        this.moveToResult();
    };
    return Handle;
}());
function selectNameTheLager(profiles) {
    var larger = profiles.filter(function (p, _, array) { return p.count == array[0].count; }).map(function (p) { return p.name; });
    return concatString(larger);
}
function concatString(strings) {
    switch (strings.length) {
        case 0: return '';
        case 1: return strings[0];
        case 2: return strings[0] + " e " + strings[1];
        default:
            var r = strings[0];
            for (var _i = 0, _a = strings.filter(function (_, i) { return i > 0 && i < strings.length - 1; }); _i < _a.length; _i++) {
                var s = _a[_i];
                r = r + ', ' + s;
            }
            return r + " e " + strings[strings.length - 1];
    }
}
function createMessage(profiles) {
    if (profiles.every(function (p) { return p.isZero(); })) {
        return '<div class="alert alert-danger" role="alert">Selecione as alternativas acima!</div>';
    }
    sortProfiles(profiles);
    var result = '<div class="alert alert-info" role="alert">';
    for (var _i = 0, profiles_1 = profiles; _i < profiles_1.length; _i++) {
        var p = profiles_1[_i];
        result += "Total " + p.name + ": " + p.count + "</br>";
    }
    result += "Seu perfil \u00E9 " + selectNameTheLager(profiles);
    return result + "</div>";
}
function incrementProfile(n, profiles) {
    for (var _i = 0, profiles_2 = profiles; _i < profiles_2.length; _i++) {
        var p = profiles_2[_i];
        if (p.alternatives.indexOf(n) > -1) {
            p.increment();
            break;
        }
    }
}
function sortProfiles(profiles) {
    profiles.sort(function (a, b) { return a.count - b.count; }).reverse();
}
var App = (function () {
    function App() {
        var _this = this;
        $('#solve1').click(function() { return _this.solve1(); })
        $('#solve2').click(function() { return _this.solve2(); })
    }
    App.prototype.solve1 = function () {
        var a = new Profile("A", [1, 6, 11, 14, 20, 23, 32, 35, 39, 40]);
        var b = new Profile("B", [2, 5, 10, 15, 19, 24, 31, 33, 34, 36]);
        var c = new Profile("C", [3, 7, 9, 16, 18, 25, 27, 28, 30, 37]);
        var d = new Profile("D", [4, 8, 12, 13, 17, 21, 22, 26, 29, 38]);
        new Handle('ck', [a, b, c, d]).solve();
    };
    App.prototype.solve2 = function () {
        var a = new Profile("ATIVO", [3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77]);
        var b = new Profile("REFLEXIVO", [10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79]);
        var c = new Profile("TEÓRICO", [2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80]);
        var d = new Profile("PRAGMÁTICO", [1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76]);
        new Handle('cj', [a, b, c, d]).solve();
    };
    return App;
}());
$(document).ready(function() {
    new App();
});