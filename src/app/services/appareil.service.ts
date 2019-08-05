export class AppareilService {
    appareils = [
        {
          id: 1,
          name: 'oridinateur',
          status: 'on'
        },
        {
          id: 2,
         name: 'telephone',
         status: 'off'
       },
       {
         id: 3,
         name: 'tablette',
         status: 'on'
       }
      ];     

      getAppareilById(id: number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            return appareilObject.id === id;
          }
        );

        return appareil;
      }
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