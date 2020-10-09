import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import RabbitmqServer from './shared/rabbitmq.server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
  await server.start();
  await server.consume('lista_uf_atualizada', message =>
    console.log(message.content.toString()),
  );

  await app.listen(3000);
}
bootstrap();
