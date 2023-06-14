import { AppModule } from '@app/module/app.module';
import { BootstrapConsole } from 'nestjs-console';

const bootstrap = new BootstrapConsole({
  module: AppModule,
  useDecorators: true,
});
bootstrap.init().then(async (app) => {
  try {
    await app.init();
    await bootstrap.boot();
    app.close();

    process.exit(0);
  } catch (e) {
    app.close();

    process.exit(1);
  }
});
