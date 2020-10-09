import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import RabbitmqServer from './shared/rabbitmq.server';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('estados')
  getEstados(): any {
    return this.appService.getEstados();
  }

  @Get('populacao/:uf')
  getPopulacao(@Param('uf') uf: string): any {
    return this.appService.getPopulacao(uf);
  }

  @Get('estados/fila')
  async getEstadosFila(): Promise<any> {
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672')
    await server.start();
    await server.publishInQueue('lista_uf_atualizada', JSON.stringify(this.appService.getMerge())); 
    return {};
  }

  @Get('estados/rest')
  getEstadosCompleto(): any {
    return this.appService.getMerge(); 
  }

}
