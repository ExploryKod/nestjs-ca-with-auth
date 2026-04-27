import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcomTexts(): { title: string, description: string } {
    return {
      title: 'NestJs Web Api',
      description:
        'Authentification, profils utilisateurs, santé. La documentation des routes est dans Swagger.',
    };
  }
  getBtnTexts(): { docs: string } {
    return ({
      docs: 'Consulter les docs (swagger)'
    });
  }
}
