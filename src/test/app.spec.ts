import { concatString, selectNameTheLager, Profile, createMessage, incrementProfile } from '../ts/app';
import { expect } from 'chai';
import 'mocha';

describe('Concat strings with , and e', () => {

    it('should return ola', () => {
        const result = concatString(['ola']);
        expect('ola').to.equal(result)
    });

    it('should return ola e mundo', () => {
        const result = concatString(['ola', 'mundo']);
        expect('ola e mundo').to.equal(result)
    });

    it('should return ola, mundo e pessoas', () => {
        const result = concatString(['ola', 'mundo', 'pessoas']);
        expect('ola, mundo e pessoas').to.equal(result)
    });

    it('should return ola, mundo, pessoas e animais', () => {
        const result = concatString(['ola', 'mundo', 'pessoas', 'animais']);
        expect('ola, mundo, pessoas e animais').to.equal(result)
    });
});

describe('Select name the lager profile', () => {

    it('should return ATIVO', () => {
        const ativo = new Profile('ATIVO', []);
        ativo.increment();
        ativo.increment();
        ativo.increment();

        const reflexivo = new Profile('REFLEXIVO', []);
        reflexivo.increment();

        const result = selectNameTheLager([ativo, reflexivo]);
        expect('ATIVO').to.equal(result)
    });

    it('should return ATIVO e REFLEXIVO', () => {
        const ativo = new Profile('ATIVO', []);
        ativo.increment();

        const reflexivo = new Profile('REFLEXIVO', []);
        reflexivo.increment();

        const result = selectNameTheLager([ativo, reflexivo]);
        expect('ATIVO e REFLEXIVO').to.equal(result)
    });
});

describe('Create Message to User', () => {

    it('should return Selecione as alternativas acima!', () => {
        const result = createMessage([]);
        expect('<div class="alert alert-danger" role="alert">Selecione as alternativas acima!</div>')
            .to.equal(result)
    });

    it('should return TOTAL MESSAGE', () => {
        const a = new Profile('A', []);
        a.increment(); a.increment(); a.increment();

        const b = new Profile('B', []);
        b.increment(); b.increment(); b.increment();

        const result = createMessage([a, b]);
        expect('<div class="alert alert-info" role="alert">Total B: 3</br>Total A: 3</br>Seu perfil é B e A</div>')
            .to.equal(result);
    });
});

describe('Test increment profiles', () => {

    it('count correctly', () => {
        const a = new Profile('A', [1, 3, 5, 7, 9]);
        const b = new Profile('B', [2, 4, 6, 8, 10]);
        incrementProfile(3, [a, b]);
        expect(a.count).eq(1);
        expect(b.count).eq(0);
    });
});