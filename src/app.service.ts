import { Injectable } from '@nestjs/common';
import * as data from './mock/mock.json';

@Injectable()
export class AppService {

    getEstados(): any {
        return data.estados;
    }

    getPopulacao(uf: string): any {
        return data.populacao.find(d => d.uf === uf.toUpperCase());
    }

    getMerge(): any {
        return data.estados.map(e => Object.assign({}, e, { populacao: this.getPopulacao(e.uf).populacao }));
    }

}
