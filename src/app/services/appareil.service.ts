export class AppareilService {
    appareils = [
        {
          name: 'oridinateur',
          status: 'on'
        },
        {
         name: 'telephone',
         status: 'off'
       },
       {
         name: 'oridinateur',
         status: 'on'
       }
      ];     

      switchOnAll(){
          for(let appareil of this.appareils){
                appareil.status = 'on';
          }
      }

      switchOffAll(){
        for(let appareil of this.appareils){
              appareil.status = 'off';
        }
    }

    switchOnOn(index: number){
        this.appareils[index].status = 'on';
    }

    switchOfOn(index: number){
        this.appareils[index].status = 'off';
    }
}