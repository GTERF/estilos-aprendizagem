import * as $ from "jquery";

export class Profile {

    name: string;
    count: number = 0;
    alternatives: number[];
    
    constructor(name: string, alternatives: number[]) {
        this.name = name;
        this.alternatives = alternatives;
    }

    public increment() {
        this.count++;
    }

    public isZero(): boolean {
        return this.count === 0;
    }
}

class Handle {

    prefix: string;
    size: number;
    profiles: Profile[];

    constructor(prefix: string, profiles: Profile[]) {
        this.prefix = prefix;
        this.profiles = profiles;
        this.size = this.alternativesSize();
    }

    private alternativesSize(): number {
        return this.profiles
            .map(p => p.alternatives.length)
            .reduce((previous, current) => previous + current);
    } 

    private isChecked(index: number): boolean {
        return $('#' + this.prefix + index).is(':checked');
    }

    private moveToResult() {
        $('html, body').animate({
            scrollTop: $('#result'+this.prefix).offset().top
        }, 1000);
    }

    public solve() {
        for (let i = 1; i <= this.size; i++) {
            if (this.isChecked(i))
                incrementProfile(i, this.profiles);
        }
        $('#result'+this.prefix).html(createMessage(this.profiles));
        this.moveToResult();
    }
}

export function selectNameTheLager(profiles: Profile[]): string {
    let larger = profiles.filter((p, _, array) => p.count == array[0].count).map(p => p.name);
    return concatString(larger);
}

export function concatString(strings: string[]): string {
    switch (strings.length) {
        case 0: return '';
        case 1: return strings[0];
        case 2: return `${strings[0]} e ${strings[1]}`;
        default:
            let r = strings[0];
            for (let s of strings.filter((_, i) => i > 0 && i < strings.length - 1))
                r = r + ', ' + s;
            return `${r} e ${strings[strings.length - 1]}`; 
    }
}

export function createMessage(profiles: Profile[]): string {
    if (profiles.every(p => p.isZero())) {
        return '<div class="alert alert-danger" role="alert">Selecione as alternativas acima!</div>';
    }
    
    sortProfiles(profiles);
    
    let result = '<div class="alert alert-info" role="alert">'
    for (let p of profiles) {
        result += `Total ${p.name}: ${p.count}</br>`
    }

    result += `Seu perfil é ${selectNameTheLager(profiles)}`;

    return `${result}</div>`
}

export function incrementProfile(n: number, profiles: Profile[]) {
    for (let p of profiles) {
        if (p.alternatives.indexOf(n) > -1) {
            p.increment();
            break;
        }
    }
}

function sortProfiles(profiles: Profile[]) {
    profiles.sort((a, b) => a.count - b.count).reverse();
}

class App {
    constructor() {
        let button1 = document.getElementById("solve1");
        button1.addEventListener('click', e => this.solve1());

        let button2 = document.getElementById("solve2");
        button2.addEventListener('click', e => this.solve2());

        console.log("Passei aqui");
    }

    private print = (str: string) => console.log(str);

    init = () => {
        this.print('test');
    }

    private solve1() {
        const a = new Profile("A", [1, 6, 11, 14, 20, 23, 32, 35, 39, 40]);
        const b = new Profile("B", [2, 5, 10, 15, 19, 24, 31, 33, 34, 36]);
        const c = new Profile("C", [3, 7, 9, 16, 18, 25, 27, 28, 30, 37]);
        const d = new Profile("D", [4, 8, 12, 13, 17, 21, 22, 26, 29, 38]);

        new Handle('ck', [a, b, c, d]).solve();
    }

    private solve2() {
        const a = new Profile("ATIVO", [3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77]);
        const b = new Profile("REFLEXIVO", [10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79]);
        const c = new Profile("TEÓRICO", [2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80]);
        const d = new Profile("PRAGMÁTICO", [1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76]);

        new Handle('cl', [a, b, c, d]).solve();
    }

} 