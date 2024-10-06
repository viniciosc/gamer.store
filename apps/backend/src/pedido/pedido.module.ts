import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { DbModule } from 'src/db/db.module';
import { PedidoPrisma } from './pedido.prisma';

@Module({
  imports: [DbModule],
  controllers: [PedidoController],
  providers:[PedidoPrisma]
})
export class PedidoModule {}
