const roles = {
    superAdmin: 'super-admin',
    company: 'company',
    humanRessources: 'human-ressources',
  };
  const cities={
    ariana:'Ariana',
    beja: 'Beja',
    benArous:'Ben Arous',
    bizerte:'Bizerte',
    gabes:'Gabès',
    gafsa:'Gafsa',
    jendouba:'Jendouba',
    kairouan:'Kairouan',
    kasserine:'Kasserine',
    kebili:'Kebili',
    kef:'Kef',
    mahdia:'Mahdia',
    manouba:'Manouba',
    medenine:'Medenine',
    monastir:'Monastir',
    nabeul:'Nabeul',
    sfax:'Sfax',
    sidiBouzid:'Sidi Bouzid',
    siliana:'Siliana',
    sousse:'Sousse',
    tataouine:'Tataouine',
    touzeur:'Touzeur',
    tunis:'Tunis',
    zaghouan:'Zaghouan'
  }

  Object.freeze(roles);
  module.exports = {
    roles,
    cities
  };