// Dados dos produtos extraídos da loja
// Organizados por categoria

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
}

// Função para normalizar URLs de imagem
const normalizeImageUrl = (url: string): string => {
  if (url.startsWith('//')) {
    return 'https:' + url;
  }
  return url;
};

// CAMISAS DE SELEÇÕES
export const selecoes: Product[] = [
  {
    id: '222027507',
    name: 'Camiseta Espanha - 2010 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-espanha-2010-away1-f5e6d6607d82124de917216778690199-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Espanha'
  },
  {
    id: '135224948',
    name: 'Camisa Uruguai - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uruguai-home1-454bdd301a3548878717473401338557-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Uruguai'
  },
  {
    id: '213973764',
    name: 'Camisa Argentina - 2014 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-2014-away1-1035235633079c737317164868763405-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Argentina'
  },
  {
    id: '243078354',
    name: 'Camisa Itália - 1982',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-19821-ead80372028a4bce7517320557194770-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Itália'
  },
  {
    id: '251958059',
    name: 'Camisa Nigéria - Home 1994',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nigeria-home-1994-1-a5f0f0effc5b62bc0e17377290755999-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Nigéria'
  },
  {
    id: '181865617',
    name: 'Camisa Portugal - 2016 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-2016-011-f79f689a6389a7db3416935128574663-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Portugal'
  },
  {
    id: '137482841',
    name: 'Camisa Internacional - Feminina Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-home1-aa8bbfca793e243ce917459571071450-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '215657721',
    name: 'Camiseta Sérvia - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-servia-home1-06ede2b8e6a820ef0917175437087805-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Sérvia'
  },
  {
    id: '137394570',
    name: 'Camiseta Equador - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-equador-home1-74ad54c3c1e7eb265d17459566059759-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Equador'
  },
  {
    id: '218414031',
    name: 'Camiseta Brasil - Copa 2002 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-copa-2002-away1-564a4d7476ba4dcfd917193627470053-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '134874667',
    name: 'Camisa Brasil - Copa 2006 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-2006-0111-da56015ac0312cdc3716642174840285-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '213985572',
    name: 'Camisa França - 2006 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-copa-20061-72c8e2016215473ab217164897098430-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'França'
  },
  {
    id: '261948190',
    name: 'Camisa do Brasil - Copa 1994 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-copa-1994-away1-8ee85cd1eaac8db2f317430200959464-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '218407475',
    name: 'Camiseta Brasil - 1991 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-1991-away1-e23513aedb8b20af8217193610664211-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '137393485',
    name: 'Camisa França - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-franca-away-c1635725c2c92f5a8717624549776850-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'França'
  },
  {
    id: '137620050',
    name: 'Camisa Portugal - 2006 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-2006-home2-17639bf71198c3940717429306536260-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Portugal'
  },
  {
    id: '324163616',
    name: 'Camisa República Checa - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-republica-checa-home1-fd2265e560f45a2d1517706781185706-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'República Tcheca'
  },
  {
    id: '197694395',
    name: 'Camiseta Inglaterra - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-away1-028f3b9323457feea417206463576529-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Inglaterra'
  },
  {
    id: '218406873',
    name: 'Camisa Brasil - Copa 1998 Goleiro',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-copa-1998-goleiro1-eb1de6ac33c25db87617193609548457-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '137310264',
    name: 'Camisa Argentina - 1998 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-1998-011-c1e9aee46e300993b716655355375053-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Argentina'
  },
  {
    id: '222027038',
    name: 'Camiseta Croácia - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-croacia-away1-ca2097540132e8f49c17693743906521-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Croácia'
  },
  {
    id: '175723951',
    name: 'Camisa Argélia - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argelia-home1-94756a891bbd6daebb17652211859931-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Argélia'
  },
  {
    id: '248948191',
    name: 'Camiseta Suíça - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-suica-away1-102429ddde3c28820b17652218768343-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Suíça'
  },
  {
    id: '251972596',
    name: 'Camisa Colombia - 2014 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-colombia-home-20141-8f16546453dc7d19d917377335910923-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Colômbia'
  },
  {
    id: '213966687',
    name: 'Camiseta Noruega - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-noruega-home1-1dde9f0de518ebbcc617164850216459-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Noruega'
  },
  {
    id: '189553553',
    name: 'Camisa Real Madrid - 2011/2012 Goleiro',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-20112012-goleiro1-0acbe608506916091817424991455880-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Espanha'
  },
  {
    id: '137697397',
    name: 'Camisa França - Copa 1998 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-1998-011-bd9c8bafae9ca4208a16657184697977-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'França'
  },
  {
    id: '137708809',
    name: 'Camisa Brasil - Copa 1998 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-1998-01-6c5e0315ddb1140dfa17192449761044-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '135945521',
    name: 'Camisa Holanda - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-away1-47924d21641ed6acdc17525007490857-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Holanda'
  },
  {
    id: '196470243',
    name: 'Camisa Holanda - 2010 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-copa-20101-3b368804340c92315d17044206603192-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Holanda'
  },
  {
    id: '218411740',
    name: 'Camiseta Brasil - 1958 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/327490/products/camisa-brasil-1958-away1-e4d707d2bf7874142717193622813645-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '136315940',
    name: 'Camisa Argentina - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-away1-8be4fc3e5ec5e2219817693759180167-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Argentina'
  },
  {
    id: '205209738',
    name: 'Camiseta Suiza - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-suica-home1-e11b09d28931cff1a217358506862722-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Suíça'
  },
  {
    id: '248948753',
    name: 'Camiseta Turquía - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-turquia-home1-fac35e738ebf7a80af17358507995973-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Turquia'
  },
  {
    id: '133891832',
    name: 'Camisa Brasil Amarela - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-amarela-home1-70bca7543cc75e3cd517697142214260-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '168458460',
    name: 'Camisa América do México - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-away1-0a32ba8d54086d09fc17430197779600-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'México'
  },
  {
    id: '159544964',
    name: 'Camisa Inter Miami - Away Messi',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-away-messi1-589f1be3339daa631717422435520216-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'EUA'
  },
  {
    id: '155343006',
    name: 'Camisa Al-Nassr - Home Cristiano Ronaldo',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-home-cristiano-ronaldo1-dbe88d889f91b7d6df17550754712405-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Arábia Saudita'
  },
  {
    id: '213966902',
    name: 'Camiseta Polônia - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-polonia-home1-c9f5996a5552e40c2217164851011806-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Polônia'
  },
  {
    id: '137680411',
    name: 'Camisa América do México - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-home1-8e5642bca81bcfcf3c17525014978317-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'México'
  },
  {
    id: '213627936',
    name: 'Camiseta Áustria - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-austria-home1-e80f6a17d1813a943317163220880657-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Áustria'
  },
  {
    id: '159408952',
    name: 'Camisa Peru - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-peru-home1-cb1e52c67ae63cb3cf17652190785072-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Peru'
  },
  {
    id: '189545055',
    name: 'Camisa Senegal - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-senegal-home1-c65fa9f68ea4c8117a17428539115844-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Senegal'
  },
  {
    id: '248947934',
    name: 'Camiseta Dinamarca - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-dinamarca-away1-498b5a7593df6d54d717358504079628-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Dinamarca'
  },
  {
    id: '218410232',
    name: 'Camiseta Brasil - Copa 1998 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-copa-1998-away1-e0c13bea03875a0f8c17193619098833-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '218415588',
    name: 'Camiseta Brasil - Copa 2022 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-copa-2022-away1-1a2ee6a3d888e1650917193631604996-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '218415437',
    name: 'Camiseta Brasil - Copa 2022 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-copa-20221-d55f265d7df90b0b2517193630804113-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '218411224',
    name: 'Camiseta Brasil - 1958 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-19581-58bcae96e0d50c1abf17193621859889-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  },
  {
    id: '218405297',
    name: 'Camiseta Colômbia - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-colombia-away1-756ba6f47b12e91ab617693745187448-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Colômbia'
  },
  {
    id: '168450496',
    name: 'Camisa Canadá - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-canada-home1-b89b7274ee1377640917652197614336-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Canadá'
  },
  {
    id: '146292815',
    name: 'Camisa Coreia do Sul - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-coreia-do-sul-home1-2cadd0d6f86f00377317488965326693-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Coreia do Sul'
  },
  {
    id: '177877817',
    name: 'Camisa Japão - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-home1-530383e3a11ed8592117652225264509-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Japão'
  },
  {
    id: '189544475',
    name: 'Camisa Egito - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-egito-home1-c14a9fac305397d85917449304022196-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Egito'
  },
  {
    id: '216930413',
    name: 'Camisa Ucrânia - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ucrania-home1-cd48fd3fc9e8279fda17652203104197-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Ucrânia'
  },
  {
    id: '311801122',
    name: 'Camisa Costa Rica - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-costa-rica-home1-04a559cf4fbf735a5517652192423251-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Costa Rica'
  },
  {
    id: '134068043',
    name: 'Camisa Brasil Azul - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-azul-away1-f931ff93c1ec340a0c17652211085465-1024-1024.webp'),
    category: 'selecoes',
    subcategory: 'Brasil'
  }
];

// TIMES DE CLUBES
export const times: Product[] = [
  {
    id: '213625475',
    name: 'Camiseta Manchester City - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-home1-07f3d715f6c1cc502417428529708354-1024-1024.webp'),
    category: 'times',
    subcategory: 'Manchester City'
  },
  {
    id: '137669039',
    name: 'Camisa Real Madrid - 2011/2012 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-2011-2012-011-d440c52ae36acb24ab16657023691894-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Madrid'
  },
  {
    id: '137672904',
    name: 'Camisa Real Madrid - 2005/2006 Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-20052006-home1-2d639325b9c4bfb1ac17428481621764-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Madrid'
  },
  {
    id: '181858917',
    name: 'Camisa Real Madrid - 2017/2018 Third',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-20172018-11-73e2d63cb70c451d1a16935108302185-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Madrid'
  },
  {
    id: '320684004',
    name: 'Camisa Real Madrid - Home - Manga Longa',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-manga-longa1-0dfe9d9766ed16ad7d17693793586575-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Madrid'
  },
  {
    id: '137680079',
    name: 'Camiseta Real Madrid - Home 2025/2026',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-20252026-d1bc7f4bca93bf73d817459593241738-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Madrid'
  },
  {
    id: '137673826',
    name: 'Camisa Barcelona - 2015/2016 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20152016-home2-b5b041233d17342efd17428480207452-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '137668342',
    name: 'Camisa Barcelona - 2010/2011 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20102011-home1-3ba2501a00414be26b17428490408109-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '225337868',
    name: 'Camiseta Barcelona - 1995/1996 Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-19951996-home1-395be68608179c0d7c17234952887023-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '137669893',
    name: 'Camisa Barcelona - 1992/1993 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-19921993-home1-242a6ffc91f4ff77fc17428486983067-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '151665152',
    name: 'Camisa Barcelona - 2005/2006 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-2006-2007-011-7c1a98aee49f72a08716733040330836-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '137677548',
    name: 'Camisa Barcelona - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-third1-3e9bb7e312d85f140b17550758912148-1024-1024.webp'),
    category: 'times',
    subcategory: 'Barcelona'
  },
  {
    id: '320682324',
    name: 'Camisa Flamengo - Home - Manga Longa',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home-manga-longa1-4d60e02215a71b801e17693775378218-1024-1024.webp'),
    category: 'times',
    subcategory: 'Flamengo'
  },
  {
    id: '182221512',
    name: 'Camisa Flamengo - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home1-7d48f68bc5a146987917422432415116-1024-1024.webp'),
    category: 'times',
    subcategory: 'Flamengo'
  },
  {
    id: '182227021',
    name: 'Camisa Flamengo - Away Jogador',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away-jogador1-1454e0fa7fa2ad8d7b17216794930079-1024-1024.webp'),
    category: 'times',
    subcategory: 'Flamengo'
  },
  {
    id: '182226448',
    name: 'Camisa Flamengo - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away1-e3ac284eced77fc61d17473400643706-1024-1024.webp'),
    category: 'times',
    subcategory: 'Flamengo'
  },
  {
    id: '248952120',
    name: 'Camisa Flamengo - Treino',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-treino1-830f18b4e1dcb2a21017428535747309-1024-1024.webp'),
    category: 'times',
    subcategory: 'Flamengo'
  },
  {
    id: '248951175',
    name: 'Camisa Fluminense - 2012 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-2012-home1-5f865753918d76438017358522864359-1024-1024.webp'),
    category: 'times',
    subcategory: 'Fluminense'
  },
  {
    id: '218423309',
    name: 'Camiseta Fluminense - 2012 Third',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-2012-third-1-37eaf91ca4304e9b5617422361755907-1024-1024.webp'),
    category: 'times',
    subcategory: 'Fluminense'
  },
  {
    id: '320680466',
    name: 'Camisa Fluminense - Third Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-third-feminina1-fef97bd22adabe8e7e17693766026707-1024-1024.webp'),
    category: 'times',
    subcategory: 'Fluminense'
  },
  {
    id: '190699371',
    name: 'Camisa Fluminense - Home Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-home-feminina1-f18d412cf977a6acb717513999791707-1024-1024.webp'),
    category: 'times',
    subcategory: 'Fluminense'
  },
  {
    id: '182225188',
    name: 'Camisa Fluminense - Goleiro',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-goleiro1-388316f5a205ce871d17187762471317-1024-1024.webp'),
    category: 'times',
    subcategory: 'Fluminense'
  },
  {
    id: '320682860',
    name: 'Camisa São Paulo - Third - Manga Longa',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third-manga-longa1-e211428d3e9656912517693779729088-1024-1024.webp'),
    category: 'times',
    subcategory: 'São Paulo'
  },
  {
    id: '218422474',
    name: 'Camiseta São Paulo - 1997 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-1997-away1-2245bd54d4c4cf11ae17193665140993-1024-1024.webp'),
    category: 'times',
    subcategory: 'São Paulo'
  },
  {
    id: '229775532',
    name: 'Camiseta São Paulo - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third1-94e65b7c39eb94209317589053145287-1024-1024.webp'),
    category: 'times',
    subcategory: 'São Paulo'
  },
  {
    id: '215655592',
    name: 'Camiseta São Paulo - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-home1-e83d6d3abd5824895917422426157675-1024-1024.webp'),
    category: 'times',
    subcategory: 'São Paulo'
  },
  {
    id: '251975871',
    name: 'Camisa Palmeiras - 1997 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-1997-away1-9f67be178be301274517377338600104-1024-1024.webp'),
    category: 'times',
    subcategory: 'Palmeiras'
  },
  {
    id: '182222753',
    name: 'Camisa Palmeiras - Away Jogador',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-away-jogador1-626bfa3a3be330caa017459590800884-1024-1024.webp'),
    category: 'times',
    subcategory: 'Palmeiras'
  },
  {
    id: '190691788',
    name: 'Camisa Palmeiras - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home1-72aabd5bde8a6ef43417706778780690-1024-1024.webp'),
    category: 'times',
    subcategory: 'Palmeiras'
  },
  {
    id: '218414031',
    name: 'Camiseta Botafogo - 1995 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-1995-home1-5e2a3ed7a78418351617428547742934-1024-1024.webp'),
    category: 'times',
    subcategory: 'Botafogo'
  },
  {
    id: '182220468',
    name: 'Camisa Botafogo - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-away1-2bcdf494606165696b17589039049709-1024-1024.webp'),
    category: 'times',
    subcategory: 'Botafogo'
  },
  {
    id: '182220318',
    name: 'Camisa Botafogo - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-home1-5930b1551b27bf6d3017533888394742-1024-1024.webp'),
    category: 'times',
    subcategory: 'Botafogo'
  },
  {
    id: '243084407',
    name: 'Camisa Manchester United - 2018/2019 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-20182019-away1-ad9f83cc04c48d72d717320575631964-1024-1024.webp'),
    category: 'times',
    subcategory: 'Manchester United'
  },
  {
    id: '243086904',
    name: 'Camisa Manchester United - 2007/2008 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-20072008-home1-22cc6c6fd847db1b0c17320586410608-1024-1024.webp'),
    category: 'times',
    subcategory: 'Manchester United'
  },
  {
    id: '137663382',
    name: 'Camisa Manchester United - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-home1-279a6a673138cbfb0117473395212583-1024-1024.webp'),
    category: 'times',
    subcategory: 'Manchester United'
  },
  {
    id: '137645011',
    name: 'Camisa Manchester United - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-away1-8d4557607f5883c02017473379641817-1024-1024.webp'),
    category: 'times',
    subcategory: 'Manchester United'
  },
  {
    id: '248949364',
    name: 'Camisa Arsenal - Away',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-away1-6991107887e85d0b3817525031774781-1024-1024.webp'),
    category: 'times',
    subcategory: 'Arsenal'
  },
  {
    id: '248949198',
    name: 'Camisa Arsenal - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-third1-fa557e6ebd03fad4cf17589140846571-1024-1024.webp'),
    category: 'times',
    subcategory: 'Arsenal'
  },
  {
    id: '248949654',
    name: 'Camisa Arsenal - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-home1-fe68ff6f2413d269fd17488941451597-1024-1024.webp'),
    category: 'times',
    subcategory: 'Arsenal'
  },
  {
    id: '248949198',
    name: 'Camisa Liverpool - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-liverpool-home1-42c2cf129800f011a917624546475182-1024-1024.webp'),
    category: 'times',
    subcategory: 'Liverpool'
  },
  {
    id: '136567716',
    name: 'Camisa Milan - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-home1-477fad8fc8e99f04a917436111398820-1024-1024.webp'),
    category: 'times',
    subcategory: 'Milan'
  },
  {
    id: '240502342',
    name: 'Camisa Milan - 1988/1989',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-198819891-9c3ee05ec1ec5c12f217307478473775-1024-1024.webp'),
    category: 'times',
    subcategory: 'Milan'
  },
  {
    id: '243080094',
    name: 'Camisa Inter de Milão - 2009/2010 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-20092010-home1-c0fdb14f255d3832fa17320564429116-1024-1024.webp'),
    category: 'times',
    subcategory: 'Inter de Milão'
  },
  {
    id: '213979451',
    name: 'Camisa Juventus - 2001/2002 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-200120021-c3b19b7c176b2d7fb617164885528266-1024-1024.webp'),
    category: 'times',
    subcategory: 'Juventus'
  },
  {
    id: '263121837',
    name: 'Camisa Chelsea - 2006/2007 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-20062007-home1-0dd0c3503c481dbacc17436105344387-1024-1024.webp'),
    category: 'times',
    subcategory: 'Chelsea'
  },
  {
    id: '137664628',
    name: 'Camisa do Chelsea - Modelo Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-home1-b099c2d775b3911a9917436103764053-1024-1024.webp'),
    category: 'times',
    subcategory: 'Chelsea'
  },
  {
    id: '178650701',
    name: 'Camisa Borussia Dortmund - 1995/1996 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-19951996-011-43122ea318da79932a16911859564036-1024-1024.webp'),
    category: 'times',
    subcategory: 'Borussia Dortmund'
  },
  {
    id: '136454178',
    name: 'Camisa Borussia Dortmund - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-home1-50ee329a1ae1871ea317706779957311-1024-1024.webp'),
    category: 'times',
    subcategory: 'Borussia Dortmund'
  },
  {
    id: '135960068',
    name: 'Camisa River Plate - Home',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-home1-3de5af1c62e8cef70f17524997852887-1024-1024.webp'),
    category: 'times',
    subcategory: 'River Plate'
  },
  {
    id: '173390050',
    name: 'Camisa River Plate - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-away1-1fd698fec7949db44717513960780740-1024-1024.webp'),
    category: 'times',
    subcategory: 'River Plate'
  },
  {
    id: '137312307',
    name: 'Camisa Boca Juniors - 2002 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-2002-011-3631e9424c2f72ad3116655368198436-1024-1024.webp'),
    category: 'times',
    subcategory: 'Boca Juniors'
  },
  {
    id: '137614411',
    name: 'Camisa Peñarol - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-penarol-home1-353a09df784df0fb3817428555109996-1024-1024.webp'),
    category: 'times',
    subcategory: 'Peñarol'
  },
  {
    id: '181854787',
    name: 'Camisa Porto - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-third1-536d7742599f92d0b017533881765273-1024-1024.webp'),
    category: 'times',
    subcategory: 'Porto'
  },
  {
    id: '137619168',
    name: 'Camisa Porto - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-home1-98746a3e538f3e898a17473345464488-1024-1024.webp'),
    category: 'times',
    subcategory: 'Porto'
  },
  {
    id: '137698322',
    name: 'Camisa Sporting - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-home1-136acc4703c8d46ee917488959185889-1024-1024.webp'),
    category: 'times',
    subcategory: 'Sporting'
  },
  {
    id: '151564745',
    name: 'Camisa Benfica - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-benfica-away1-3dd2a36685c1bc934a17513977796337-1024-1024.webp'),
    category: 'times',
    subcategory: 'Benfica'
  },
  {
    id: '137618227',
    name: 'Camisa Benfica - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-benfica-home1-9d469f2f6d67fd999517494889014906-1024-1024.webp'),
    category: 'times',
    subcategory: 'Benfica'
  },
  {
    id: '653483454',
    name: 'Camisa Bayern de Munique - Treino',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-treino1-a93c014d859ab586fe17234924562763-1024-1024.webp'),
    category: 'times',
    subcategory: 'Bayern de Munique'
  },
  {
    id: '137560328',
    name: 'Camisa Bayern de Munique - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-home1-f75f3e793a2e80e49217473425625573-1024-1024.webp'),
    category: 'times',
    subcategory: 'Bayern de Munique'
  },
  {
    id: '213629793',
    name: 'Camisa Atlético Mineiro - Treino',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-treino1-2fb7f3dddc0359b87017514002380829-1024-1024.webp'),
    category: 'times',
    subcategory: 'Atlético Mineiro'
  },
  {
    id: '182224391',
    name: 'Camisa Grêmio - Home Jogador',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gre-home-jogador11-fc64ba140f4e87238716938571145790-1024-1024.webp'),
    category: 'times',
    subcategory: 'Grêmio'
  },
  {
    id: '182213910',
    name: 'Camisa Grêmio - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-away1-be68271466d1d6f0e017525027489998-1024-1024.webp'),
    category: 'times',
    subcategory: 'Grêmio'
  },
  {
    id: '190704451',
    name: 'Camisa Grêmio - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-home1-05ef7dec283296ce7d17473419019768-1024-1024.webp'),
    category: 'times',
    subcategory: 'Grêmio'
  },
  {
    id: '172454662',
    name: 'Camisa Girona - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-girona-home1-c1e9ba0ac55c77e3af17488961590983-1024-1024.webp'),
    category: 'times',
    subcategory: 'Girona'
  },
  {
    id: '228841026',
    name: 'Camiseta Osasuna - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-osasuna-home1-697bf865ff3479d04717253968496712-1024-1024.webp'),
    category: 'times',
    subcategory: 'Osasuna'
  },
  {
    id: '177881737',
    name: 'Camisa Leganés - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leganes-home1-fad6c588a89178fa8b17557277541883-1024-1024.webp'),
    category: 'times',
    subcategory: 'Leganés'
  },
  {
    id: '190717632',
    name: 'Camiseta Real Sociedad - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-sociedad-away1-8bf86eb58a90f3c72517247024788653-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Sociedad'
  },
  {
    id: '190718250',
    name: 'Camiseta Real Sociedad - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-sociedad-third01-bc5898fa0ce5f4e0d316999068155169-1024-1024.webp'),
    category: 'times',
    subcategory: 'Real Sociedad'
  },
  {
    id: '181873395',
    name: 'Camisa Cadiz - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cadiz-away1-b10dc364c94b6f334217533886022780-1024-1024.webp'),
    category: 'times',
    subcategory: 'Cádiz'
  },
  {
    id: '228840322',
    name: 'Camiseta Espanyol - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-espanyol-home1-1d9cdaf0970244557817253966108823-1024-1024.webp'),
    category: 'times',
    subcategory: 'Espanyol'
  },
  {
    id: '183042578',
    name: 'Camisa Granada - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-granada-home1-4e3384f8845e02012a17550753271058-1024-1024.webp'),
    category: 'times',
    subcategory: 'Granada'
  },
  {
    id: '148106926',
    name: 'Camisa Wolverhampton - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolverhampton-home1-929f20e091adf4914917488968571997-1024-1024.webp'),
    category: 'times',
    subcategory: 'Wolverhampton'
  },
  {
    id: '137624129',
    name: 'Camisa Celtic - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-celtic-home1-a7054efd2fb1c52d4717473341217454-1024-1024.webp'),
    category: 'times',
    subcategory: 'Celtic'
  },
  {
    id: '165814399',
    name: 'Camisa Zenit - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-zenit-home1-e2903327444e4ebd7d17272113138652-1024-1024.webp'),
    category: 'times',
    subcategory: 'Zenit'
  },
  {
    id: '151610226',
    name: 'Camisa Hertha Berlin - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-hertha-berlin-011-1dd2bf7d8695b5f12416732895493463-1024-1024.webp'),
    category: 'times',
    subcategory: 'Hertha Berlin'
  },
  {
    id: '171641325',
    name: 'Camisa Wolfsburg - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolfsburg-away1-38a7d5dab96b4c8f8917488966159885-1024-1024.webp'),
    category: 'times',
    subcategory: 'Wolfsburg'
  },
  {
    id: '176302706',
    name: 'Camisa Brentford - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brentford-away-011-1619ccdb663dfe252f16893777042981-1024-1024.webp'),
    category: 'times',
    subcategory: 'Brentford'
  },
  {
    id: '175666383',
    name: 'Camisa Newcastle - Away',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-away1-4e19b7d4bf4f093b0c17603726948687-1024-1024.webp'),
    category: 'times',
    subcategory: 'Newcastle'
  },
  {
    id: '213978542',
    name: 'Camisa Newcastle - 1998/1999 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-199819991-5c820307138333629817164883276955-1024-1024.webp'),
    category: 'times',
    subcategory: 'Newcastle'
  },
  {
    id: '175665858',
    name: 'Camisa Leicester - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leicester-home1-f6932be5ceb3501ed617234944794189-1024-1024.webp'),
    category: 'times',
    subcategory: 'Leicester'
  },
  {
    id: '168458164',
    name: 'Camisa Leeds - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leeds-home1-5721647d24b7418c8617528664473131-1024-1024.webp'),
    category: 'times',
    subcategory: 'Leeds'
  },
  {
    id: '137656915',
    name: 'Camisa Newcastle - 2000/2001 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-2000-2001-011-8d3791a70b8e68776116656975745259-1024-1024.webp'),
    category: 'times',
    subcategory: 'Newcastle'
  },
  {
    id: '161345079',
    name: 'Camisa Nottingham Forest - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nottingham-forest-home1-183a5b8fc37e59363417603713580523-1024-1024.webp'),
    category: 'times',
    subcategory: 'Nottingham Forest'
  },
  {
    id: '137678933',
    name: 'Camisa Villarreal - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-villarreal-home-d4682f70bac7042b1e17525020298573-1024-1024.webp'),
    category: 'times',
    subcategory: 'Villarreal'
  },
  {
    id: '172459825',
    name: 'Camisa Rennes - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rennes-home1-4b260b456831b1db0917216776008331-1024-1024.webp'),
    category: 'times',
    subcategory: 'Rennes'
  },
  {
    id: '183041371',
    name: 'Camisa Lille - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lille-away1-d0d8fcc29de032742c17513918267575-1024-1024.webp'),
    category: 'times',
    subcategory: 'Lille'
  },
  {
    id: '187565740',
    name: 'Camisa Lyon - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lyon-away1-78253981b3c9d3c9e717525026120686-1024-1024.webp'),
    category: 'times',
    subcategory: 'Lyon'
  },
  {
    id: '177877066',
    name: 'Camisa Olympique de Marseille - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-olympique-de-marseille-away1-df767f44b9e530bfbb17525016552417-1024-1024.webp'),
    category: 'times',
    subcategory: 'Olympique de Marseille'
  },
  {
    id: '175719574',
    name: 'Camisa Atlético Nacional - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-nacional-away1-3fa32252214eb77e1d17488959888604-1024-1024.webp'),
    category: 'times',
    subcategory: 'Atlético Nacional'
  },
  {
    id: '173933924',
    name: 'Camisa Tigres - Home',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-tigres-home1-5e8333b829da5b548817430194818148-1024-1024.webp'),
    category: 'times',
    subcategory: 'Tigres'
  },
  {
    id: '137681007',
    name: 'Camisa Los Angeles Galaxy - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-los-angeles-galaxy-home1-1cfe09730f81add22a17183171250946-1024-1024.webp'),
    category: 'times',
    subcategory: 'LA Galaxy'
  },
  {
    id: '181848397',
    name: 'Camisa Al-Ittihad - Third',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-ittihad-third1-fece8f011d815d105a16977410689863-1024-1024.webp'),
    category: 'times',
    subcategory: 'Al-Ittihad'
  },
  {
    id: '180929823',
    name: 'Camisa Lazio - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-away1-33e43ed726b24f668917557274313772-1024-1024.webp'),
    category: 'times',
    subcategory: 'Lazio'
  },
  {
    id: '213984527',
    name: 'Camiseta Roma - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-roma-home1-abcb6535e74abba8ac17525011136884-1024-1024.webp'),
    category: 'times',
    subcategory: 'Roma'
  },
  {
    id: '213618224',
    name: 'Camiseta Atlético de Madrid - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-home1-1f257215ea8a907bb917422428922086-1024-1024.webp'),
    category: 'times',
    subcategory: 'Atlético de Madrid'
  },
  {
    id: '251961972',
    name: 'Camisa Arsenal - 1996/1997 Away',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-19961997-away1-744f9f8c30f212c68917377300788021-1024-1024.webp'),
    category: 'times',
    subcategory: 'Arsenal'
  },
  {
    id: '251967251',
    name: 'Camisa Vasco da Gama - 1988 Home',
    price: 209.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vasco-da-gama-1988-home1-4d698bdb5ad14c5df617377317443880-1024-1024.webp'),
    category: 'times',
    subcategory: 'Vasco da Gama'
  },
  {
    id: '324160387',
    name: 'Camisa Vasco da Gama - Home Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vasco-da-gama-home-feminina1-5a3bfac79e0e73258e17706773384228-1024-1024.webp'),
    category: 'times',
    subcategory: 'Vasco da Gama'
  },
  {
    id: '215656736',
    name: 'Camiseta Cruzeiro - Feminina Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-away1-909e80d615c98f481b17589137034375-1024-1024.webp'),
    category: 'times',
    subcategory: 'Cruzeiro'
  },
  {
    id: '213968807',
    name: 'Camiseta Cruzeiro - Feminina Home',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-home1-d77156288411c3a79f17494898709419-1024-1024.webp'),
    category: 'times',
    subcategory: 'Cruzeiro'
  },
  {
    id: '215657436',
    name: 'Camiseta Cruzeiro - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-away1-808284bf6ac9f6105517459574189356-1024-1024.webp'),
    category: 'times',
    subcategory: 'Cruzeiro'
  },
  {
    id: '213630908',
    name: 'Camisa Cruzeiro - Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-home1-5f4b731da7440803de17449300753667-1024-1024.webp'),
    category: 'times',
    subcategory: 'Cruzeiro'
  },
  {
    id: '190690109',
    name: 'Camisa Palmeiras - Home Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home-feminina1-f8cc651ea9b25422b217428530789717-1024-1024.webp'),
    category: 'times',
    subcategory: 'Palmeiras'
  }
];

// KITS INFANTIS
export const kits_infantis: Product[] = [
  {
    id: '187551335',
    name: 'Kit Infantil Palmeiras - Third',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-palmeiras-third1-522c8a44ecfb5b383a17624533331655-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Palmeiras'
  },
  {
    id: '190699887',
    name: 'Kit Infantil Fluminense - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-fluminense-home1-9a33e9f1068f3a610317436109002098-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Fluminense'
  },
  {
    id: '221983361',
    name: 'Kit Infantil Manchester City - Third',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-manchester-city-third1-93082df8faf97f297717569276487883-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Manchester City'
  },
  {
    id: '213977805',
    name: 'Kit Infantil Espanha - Away',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-espanha-away1-2b68aa63a9426596b117488944900049-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Espanha'
  },
  {
    id: '181848867',
    name: 'Kit Infantil Al-Hilal - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-al-hilal-home-neymar1-fb03310738e1ba6a2e17346458248393-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Al-Hilal'
  },
  {
    id: '182220662',
    name: 'Kit Infantil Al-Nassr - Away Cristiano Ronaldo',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-al-nassr-away-cristiano-ronaldo1-0e7487617dec2728d517260002354605-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Al-Nassr'
  },
  {
    id: '173380268',
    name: 'Kit Infantil PSG - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-psg-home1-7b8e093edff1987abc17473348426328-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'PSG'
  },
  {
    id: '181873623',
    name: 'Kit Infantil PSG - Away',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-psg-away1-4302db995e01b023a017216767818537-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'PSG'
  },
  {
    id: '216922572',
    name: 'Kit Infantil Bayern de Munique - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-bayern-de-munique-home1-1d0808de0a7a61e12217514053941709-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Bayern de Munique'
  },
  {
    id: '134898586',
    name: 'Kit Infantil Brasil - Azul Away',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-brasil-azul01-5229c9a0ff8ae0f6eb17202229382266-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Brasil'
  },
  {
    id: '182764478',
    name: 'Kit Infantil Brasil - Amarela Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-do-brasil-amarela-home1-c16fe5b364f723d3c117459582254407-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Brasil'
  },
  {
    id: '216931564',
    name: 'Kit Infantil Espanha - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-espanha-home1-25a77aad6172bad18b17652212619231-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Espanha'
  },
  {
    id: '205202826',
    name: 'Kit Infantil Alemanha - Home',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-alemanha-home1-01a37df5632b08c27117652215902603-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Alemanha'
  },
  {
    id: '182224549',
    name: 'Kit Infantil Grêmio - Home',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-gremio-home1-42432d53d8c3d049ef17473381833533-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Grêmio'
  },
  {
    id: '222003326',
    name: 'Kit Infantil Manchester City - Away',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-manchester-city-away1-0eca66d6a9e15db1dc17488956233378-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Manchester City'
  },
  {
    id: '215656905',
    name: 'Kit Infantil Manchester City - Home',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-manchester-city-home1-2fd1aa8388a54629ec17430195625830-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Manchester City'
  },
  {
    id: '175726272',
    name: 'Kit Infantil Barcelona - Home',
    price: 184.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-barcelona-home1-72849d358f8abba73217473349472434-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Barcelona'
  },
  {
    id: '187553714',
    name: 'Kit Infantil Botafogo - Home',
    price: 199.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/kit-infantil-botafogo-home1-fe406f371bfc6ae13a17358539543275-1024-1024.webp'),
    category: 'kits_infantis',
    subcategory: 'Botafogo'
  }
];

// FEMININO
export const feminino: Product[] = [
  {
    id: '187556606',
    name: 'Camisa flamengo - third feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-third-feminina1-f629673982c6966bc217603719863214-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Flamengo'
  },
  {
    id: '182221053',
    name: 'Camisa Flamengo - Home Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home-feminina1-428d9030f7807d0aa317428531841369-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Flamengo'
  },
  {
    id: '182227296',
    name: 'Camisa Flamengo - Away Feminina',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away-feminina1-abbf09eaf5e4be087717473399705457-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Flamengo'
  },
  {
    id: '178649097',
    name: 'Camisa Inter Miami - Feminina Home',
    price: 169.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-home1-949e7bc72ade11b6ec17473405104499-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Inter Miami'
  },
  {
    id: '178650122',
    name: 'Camisa Inter Miami - Feminina Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-away1-38e2e30b71c696ee7b17473404005831-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Inter Miami'
  },
  {
    id: '134713069',
    name: 'Camisa Brasil Feminina - Amarela Home',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-feminina-amarela-home1-56918ea5ad668fc7e917473411466849-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'Brasil'
  },
  {
    id: '136355801',
    name: 'Camisa França Feminina - Away',
    price: 175.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-feminina-away1-f9428215230ac152c817358499422709-1024-1024.webp'),
    category: 'feminino',
    subcategory: 'França'
  }
];

// SHORTS
export const shorts: Product[] = [
  {
    id: '535242467',
    name: 'Shorts Brasil - Azul',
    price: 124.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/shorts-brasil-azul1-dc2f42c36f9c329ede17216792942638-1024-1024.webp'),
    category: 'shorts',
    subcategory: 'Brasil'
  },
  {
    id: '1162080521',
    name: 'Shorts São Paulo - Branco',
    price: 124.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/shorts-sao-paulo-branco1-40455b3ece450dc1bb17430190441957-1024-1024.webp'),
    category: 'shorts',
    subcategory: 'São Paulo'
  },
  {
    id: '936819834',
    name: 'Shorts Flamengo',
    price: 124.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/shorts-flamengo1-bb159b9f139f5fa9d617430193601616-1024-1024.webp'),
    category: 'shorts',
    subcategory: 'Flamengo'
  }
];

// CORTA-VENTOS
export const corta_ventos: Product[] = [
  {
    id: '674040564',
    name: 'Corta Vento - Chelsea',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-chelsea1-d33b5f5beaeb4d0f1617398208509724-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Chelsea'
  },
  {
    id: '1002956349',
    name: 'Corta Vento da Seleção Brasileira Retrô',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-da-selecao-brasileira-retro1-c0c2fdeab508f1d78717247060650887-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Brasil'
  },
  {
    id: '804262715',
    name: 'Corta Vento - Palmeiras',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-palmeiras1-6cfa03df3470187c3217398211501454-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Palmeiras'
  },
  {
    id: '658196024',
    name: 'Corta-Vento - Itália',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-italia1-ceb5822a9d0561be5d17398216262084-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Itália'
  },
  {
    id: '814148381',
    name: 'Corta-Vento da Seleção Brasileira',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-da-selecao-brasileira1-8216a894be45ee988e17398225011572-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Brasil'
  },
  {
    id: '534168446',
    name: 'Corta-Vento - Boca Juniors',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-boca-juniors1-66ec18136e3dbd487617164841299835-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Boca Juniors'
  },
  {
    id: '658195276',
    name: 'Corta-Vento - Argentina',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-argentina1-fccdb4b144c0e36d8817398219061135-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Argentina'
  },
  {
    id: '1129199730',
    name: 'Corta Vento Flamengo',
    price: 299.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/corta-vento-flamengo1-6115bb0b69b60da62517398212771296-1024-1024.webp'),
    category: 'corta_ventos',
    subcategory: 'Flamengo'
  }
];

// NBA
export const nba: Product[] = [
  {
    id: '1097520201',
    name: 'Regata NBA Miami Heat BUTLER 22 - Icon Edition',
    price: 259.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/regata-nba-miami-heat-butler-22-icon-edition1-518c23d70580e9233817359534596286-480-0.webp'),
    category: 'nba',
    subcategory: 'NBA'
  },
  {
    id: '1097522843',
    name: 'Regata Orlando Magic Classic Edition 23/24 - Markelle Fultz',
    price: 259.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/regata-orlando-magic-classic-edition-2324-markelle-fultz1-d4f5b5b4e4d20db42917359545961798-480-0.webp'),
    category: 'nba',
    subcategory: 'NBA'
  },
  {
    id: '1097536498',
    name: 'Regata NBA Los Angeles Lakers City Edition 2024/2025 - Kobe',
    price: 259.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/regata-nba-los-angeles-lakers-22lakeshow22-city-edition-20242025-kobe-bryant1-e290644244a1b4a83f17359587619353-480-0.webp'),
    category: 'nba',
    subcategory: 'NBA'
  },
  {
    id: '1097535238',
    name: 'Regata NBA Los Angeles Lakers City Edition 2024/2025 - James Jr',
    price: 259.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/regata-nba-los-angeles-lakers-22lakeshow22-city-edition-20242025-james-jr1-d68008806947e791d917359585573934-480-0.webp'),
    category: 'nba',
    subcategory: 'NBA'
  },
  {
    id: '1097529502',
    name: 'Chicago Bulls Scottie Pippen 2022/23 Red Icon Edition',
    price: 259.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chicago-bulls-scottie-pippen-202223-red-icon-edition1-c7ca1968d6a626ae0417359568659274-480-0.webp'),
    category: 'nba',
    subcategory: 'NBA'
  }
];

// CHUTEIRAS
export const chuteiras: Product[] = [
  {
    id: '951987581',
    name: 'Chuteira Adidas Copa Pure.1 Society - Azul/Branco',
    price: 464.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-adidas-copa-pure-1-society-azulbranco1-b6e3ec52b8ac637ab317187671332928-1024-1024.webp'),
    category: 'chuteiras',
    subcategory: 'Chuteiras'
  },
  {
    id: '951940606',
    name: 'Chuteira Adidas F50 X - Campo em Promoção',
    price: 539.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-adidas-f50-x-campo-05-21e991ec03a5ebb37e17187595826639-1024-1024.webp'),
    category: 'chuteiras',
    subcategory: 'Chuteiras'
  },
  {
    id: '951958083',
    name: 'Chuteira Adidas Copa Pure 2 Elite Campo "Energy Citrus"',
    price: 539.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-adidas-copa-pure-2-elite-campo-22energy-citrus2201-fb8e8171f3576bb88917187617515878-1024-1024.webp'),
    category: 'chuteiras',
    subcategory: 'Chuteiras'
  },
  {
    id: '951959410',
    name: 'Chuteira Nike Tiempo Legend 9 Elite FG "Rising Gem Pack"',
    price: 539.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-nike-tiempo-legend-9-elite-fg-22rising-gem-pack2201-3c6a8225ec9fcbb08c17187619144307-1024-1024.webp'),
    category: 'chuteiras',
    subcategory: 'Chuteiras'
  },
  {
    id: '951963814',
    name: 'Chuteira Nike Air Zoom Mercurial Superfly 10 Elite Campo - Branco/Azul',
    price: 539.90,
    image: normalizeImageUrl('//acdn-us.mitiendanube.com/stores/002/322/390/products/chuteira-nike-air-zoom-mercurial-superfly-10-elite-campo-verdelaranja01-482c5337cbe6e9220117187622623301-1024-1024.webp'),
    category: 'chuteiras',
    subcategory: 'Chuteiras'
  }
];

// Produtos por categoria
export const productsByCategory = {
  selecoes,
  times,
  kits_infantis,
  feminino,
  shorts,
  corta_ventos,
  nba,
  chuteiras
};

// Todos os produtos
export const allProducts = [
  ...selecoes,
  ...times,
  ...kits_infantis,
  ...feminino,
  ...shorts,
  ...corta_ventos,
  ...nba,
  ...chuteiras
];
