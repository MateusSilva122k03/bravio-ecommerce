// Produtos categorizados
import { wc2026Products } from './wc2026';
import { newWc2026Products } from './new_wc2026';
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
}
const normalizeImageUrl = (url: string): string => {
  if (url && url.startsWith('//')) return 'https:' + url;
  if (url && url.startsWith('http:')) return url.replace('http:', 'https:');
  return url || '';
};
export interface Category {
  key: string;
  name: string;
  products: Product[];
}
export const categories: Category[] = [
  {
    key: 'copa_mundo_2026',
    name: '🏆 COPA DO MUNDO 2026 🏆',
    products: [
      // Products from Minejerseys - World Cup 2026
      { id: 'mj_wc2026_0', name: 'Côte d\'Ivoire Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260205/9231153365d19800876a3501a985e807ecf6c44648f=f3381zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_1', name: 'Morocco Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260205/b13166335a9daf7fad72a0e6d530d5e6e8172390d2a=027e6zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_2', name: 'Czech Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251225/6e311433edac5d4ca582a9e5e631f0ac51f64992f8c=af78czo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_3', name: 'Brazil Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260202/fb318a33aa70deb8e54dd269c56002346f6dfaddc60=ffcdczo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_4', name: 'Uruguay Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251220/7b31213380a74775d8b8a5af9d93048ee4569754d61=a3012zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_5', name: 'France Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251218/9d31f1335b23d63a10d37c562276e8fef8d30ba0a6d=f9db2zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_6', name: 'Croatia Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251220/6231bd3383477dcc2f4500bf3586d5c6e2e1264e281=07131zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_7', name: 'Greece Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260104/2c31b933248c847ccbc70aed782adfc5209c152cd4a=f7e6fzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_8', name: 'Iceland Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251216/e23102337329d6517741d698db4685ce5ee2a461626=5e131zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_9', name: 'Austria Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251216/f631ce33a4b01a78cb34b2f342b87f49bfeca49cb8d=f520fzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_10', name: 'Qatar Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251211/5831583376dd77dc5a0691d2ad51a1094db38485c70=51ef2zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_11', name: 'Northern Ireland Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251201/8931be33fd48a444271b1e225efe49dd50f491160de=97924zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_12', name: 'Canada Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260121/6a3185338f6705fcc609748a47158fb0a596685ef70=3dd0fzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_13', name: 'Wales Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251126/cc31a6336cec1654973e8d7efda7f5d87c16da7d3b3=51571zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_14', name: 'Scotland Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251126/7131623353590cd88b85e61b0f94c444987a97efe64=12c69zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_15', name: 'England Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260203/c131c133efe9bbedcc93f326029593b4cd3be4641ae=7d856zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_16', name: 'Costa Rica Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251121/0931b63308fcde7bc253202200311d48a933191a6d1=ab4dfzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_17', name: 'United Arab Emirates Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251121/78318533e412d4a6be68eef0ef5a2cb124e41398fdc=b49b8zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_18', name: 'Ukraine Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251120/b73159335a4548f86713b769e2da545c897ef9f2e2f=0e505zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_19', name: 'Tunisia Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251119/0e31233330d07e9bf45e8ed2e6418c5853a0ffd5f52=1651czo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_20', name: 'Saudi Arabia Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251119/8a31333399f98db6ba4a5c8ad5b68fc96f6b990b6e1=44deczo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_21', name: 'Algeria Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251119/54316633fc7a4101d14cb554859c41bb20a504df4de=b462azo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_22', name: 'Peru Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251119/5f3127338540e12f730e314ad43833541066b99ec04=de1abzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_23', name: 'Senegal Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251120/56316a33cf58a5535dc07abbda35b0dd710a20cf6ae=2fdb0zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_24', name: 'Sweden Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251118/e231763335d31012d20ab58d3fee0c9257f832bb302=3fafbzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_25', name: 'Spain Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251118/4f31a5338e30340bc206e8833f774a1fa851b7457fe=3b58azo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_26', name: 'Venezuela Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251118/f131c933f5dfed0ae68a8b9bba255cb26d6b8a5619a=7e1f5zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_27', name: 'Switzerland Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251201/49313233f87e8030c61643fe40d6f577b2d43d39932=62802zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_28', name: 'Hungary Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260119/273134336506d57609fe3af3cb4ea925ab7a7e9ac8f=ce465zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_29', name: 'Chile Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/41313e33edb83466fa64f37a8fd5a9a2b1d1657f9db=a31cezo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_30', name: 'Colombia Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251107/e73129333bbb9b95dbcc6286e89fb91282a620ac929=ae9a9zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_31', name: 'Belgium Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251107/ea311a33c28e596dc57ef0a376bebd97861fb93215a=29d4fzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_32', name: 'Italy Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251107/8c318733c035436be056c35489a870e1bc94923ab29=8cd30zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_33', name: 'Japan Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251107/5931ba331c1bfe970ebd5524db58e5e478666ffdb72=59fb3zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_34', name: 'Portugal Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251210/32318f331d1b0484afe05324434c00909571c465389=a46b3zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_35', name: 'Mexico Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/f2312f33d73767ad0ba86e8ef58f3019a78f8b68de7=de1f7zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_36', name: 'Germany Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251030/9731ee33b02d1a08cdedef8759250301a592f4d433b=cad08zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_37', name: 'Argentina Home Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251030/c431d533ac198bc3a162468ad1f037ce036c85b20ee=d9421zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_38', name: 'Egypt Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260205/ea31ca333cf70432374dff3585f92cdc64b337f0b79=c20b1zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_39', name: 'England Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260202/d4310b33aebaf7c9d41faa7d47713a57086c4285969=65a88zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_40', name: 'Belgium Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20260115/a8315c3372e198545e983892ae1864a8f22926e0036=1ca67zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_41', name: 'Germany Pre Match Training Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251226/5731e833902c5fc84aaff9abb8196fb67087bf952c4=5ecddzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_42', name: 'Algeria Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251220/c23157336650d0a850feabad2c6cc1d2515895e7a2f=f76e5zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_43', name: 'Croatia Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251220/f231ce33469c8a18e4da304bc205e815c5fa0fc926f=9761azo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_44', name: 'Uruguay Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251219/c631c733c7fb83891ebc276b8034cc33b3bc6b578fd=3b63bzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_45', name: 'Japan Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251220/a431a3334895d19e42e1d9fff4177877f3942dcd378=33919zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_46', name: 'Colombia Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251217/61319a3309776cc6dcc05c5f65523d479b11edf4676=78664zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_47', name: 'Wales Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251126/c23146334c365fb5df2630add031742b349a31ac9c7=b75d5zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_48', name: 'Portugal Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251124/49310c3306fdcdfbbb93b137a906a14a8543997b009=2cbbbzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_49', name: 'Brazil Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251121/043135332732a0a93ccc37a030c188f635b2765f71c=87c09zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_50', name: 'Switzerland Goalkeeper Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251119/1431ff3344dd0b6abdb68f04f77e2e42520761118a8=b100dzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_51', name: 'Scotland Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251118/a4318b33dff0d5894f7040a9b426101486605fee6ec=c5bdbzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_52', name: 'Argentina Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/a631a533eb723e4f1d4fe3c027285f9017bde107bfc=5c566zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_53', name: 'Italy Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/b5319a33adf19c6f1f0350b7df75d73f5377b0aed9c=c3b3dzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_54', name: 'Germany Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/75316733f9ecd0c2133950977c9b8663febe164cde0=7bb46zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_55', name: 'Mexico Away Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/cf31fd332ca0f550863997de404a8dc2bf042048649=1f562zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_56', name: 'Argentina Goalkeeper Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251216/ec317b335dccd9189811f8860f099194ac359c6b95f=0514bzo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_57', name: 'Portugal Black Panther Special Edition Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251105/b1312633ee33bdc973c46c6d126ce5db858ea95ca18=f76e4zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_58', name: 'Italy Pre Match Training Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251216/38314733e2333d48d8b68bb63602b309cfdc9e91914=0f9d6zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
      { id: 'mj_wc2026_59', name: 'Germany Pre Match Training Jersey World Cup 2026', price: 199.90, image: normalizeImageUrl('https://cf.minejerseys.ru/upload/ttmall/img/20251216/4c315133df5476db33fccf02d9fb3a8a3863b0e6dba=fc459zo6vvl6vvufowebp.jpg'), category: 'copa_mundo_2026', subcategory: '' },
    ]
  },
  {
    key: 'brasileirao',
    name: 'BRASILEIRÃO',
    products: [
      {
        id: 'prod_159',
        name: 'Camisa Atlético de Madrid - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-away1-3b1ee313909cb2521517513967134878-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_160',
        name: 'Camisa Atlético de Madrid - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-home1-1f257215ea8a907bb917422428922086-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_161',
        name: 'Camisa Atlético de Madrid - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-third1-c2077c60428c4f975717216744722696-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_162',
        name: 'Camisa Atlético Mineiro - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-home1-40b872d6963a926b2217706777956574-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_163',
        name: 'Camisa Atlético Mineiro - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-away1-9e49644a925df9c2e617513959307552-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_164',
        name: 'Camisa Atlético Mineiro - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-away-feminina1-4d0285cfca8f200a2017603724734210-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_165',
        name: 'Camisa Atlético Mineiro - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-home-feminina1-2335f0cea409bf2d5017706774712300-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_166',
        name: 'Camisa Atlético Mineiro - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-third1-ab233db59a40f79ec017624541604981-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_167',
        name: 'Camisa Atlético Mineiro - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-third-feminina1-c59c2c31a2e5ae9b0117624537937431-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_168',
        name: 'Camisa Atlético Mineiro - Treino',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-treino1-2fb7f3dddc0359b87017514002380829-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_169',
        name: 'Camisa Atlético Nacional - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-nacional-away1-3fa32252214eb77e1d17488959888604-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_170',
        name: 'Camisa Atlético Nacional - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-nacional-home1-04677ec9d099c7c08f17422427157793-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_208',
        name: 'Camisa Botafogo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-away1-2bcdf494606165696b17589039049709-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_209',
        name: 'Camisa Botafogo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-away-feminina1-2c9b135d687b30f2f317589135912955-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_210',
        name: 'Camisa Botafogo - Fourth',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-fourth-16c1332f25f7bbe12317459573252621-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_211',
        name: 'Camisa Botafogo - Fourth Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-fourth-feminina1-43bf8a6f1a9f6d120d17494894419323-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_212',
        name: 'Camisa Botafogo - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-goleiro1-521684c2af62a98d2f17513912611321-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_213',
        name: 'Camisa Botafogo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-home1-5930b1551b27bf6d3017533888394742-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_214',
        name: 'Camisa Botafogo - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-home-feminina1-2c04bad15829ffc74a17193570868771-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_215',
        name: 'Camisa Botafogo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-third1-97e682833ad9b9abb917624541028802-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_240',
        name: 'Camisa Cruzeiro - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-away1-808284bf6ac9f6105517459574189356-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_241',
        name: 'Camisa Cruzeiro - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-away1-909e80d615c98f481b17589137034375-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_242',
        name: 'Camisa Cruzeiro - Feminina Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-home1-d77156288411c3a79f17494898709419-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_243',
        name: 'Camisa Cruzeiro - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-home1-5f4b731da7440803de17449300753667-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_244',
        name: 'Camisa Cruzeiro - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-third1-5fff9907f6c0d0311b17624540463786-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_245',
        name: 'Camisa Cruzeiro - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-treino1-86a447073713674acb17377344149378-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_284',
        name: 'Camisa Flamengo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away1-e3ac284eced77fc61d17473400643706-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_285',
        name: 'Camisa Flamengo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away-feminina1-abbf09eaf5e4be087717473399705457-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_286',
        name: 'Camisa Flamengo - Casual Retrô',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-casual-retro1-904fc30c6f2fbfe7a317272139415195-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_287',
        name: 'Camisa Flamengo - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-especial1-cafd335ac0db64bc8517652210357789-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_288',
        name: 'Camisa Flamengo - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-goleiro1-bc2d2f419b94b49b0717422414945238-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_289',
        name: 'Camisa Flamengo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home1-7d48f68bc5a146987917422432415116-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_290',
        name: 'Camisa Flamengo - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home-manga-longa1-4d60e02215a71b801e17693775378218-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_291',
        name: 'Camisa Flamengo - Pré-Jogo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-pre-jogo1-6d1477d826872f590c17693768264805-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_292',
        name: 'Camisa Flamengo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-third1-5548bb338c9df4daed17569279417870-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_293',
        name: 'Camisa Flamengo - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-third-feminina1-f629673982c6966bc217603719863214-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_294',
        name: 'Camisa Flamengo - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-treino1-830f18b4e1dcb2a21017428535747309-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_295',
        name: 'Camisa Fluminense - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-away1-25a8a4f7989d725d0017706776662715-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_296',
        name: 'Camisa Fluminense - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-away-feminina1-edb2b8357755c3f49b17321198672110-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_297',
        name: 'Camisa Fluminense - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-goleiro1-388316f5a205ce871d17187762471317-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_298',
        name: 'Camisa Fluminense - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-home1-7d7a01e8275dfe5d7b17706775629436-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_299',
        name: 'Camisa Fluminense - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-home-feminina1-f18d412cf977a6acb717513999791707-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_300',
        name: 'Camisa Fluminense - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-third1-696b51ac949d3c113317652214962308-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_301',
        name: 'Camisa Fluminense - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-third-feminina1-fef97bd22adabe8e7e17693766026707-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_315',
        name: 'Camisa Grêmio - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-away1-be68271466d1d6f0e017525027489998-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_316',
        name: 'Camisa Grêmio - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-away-feminina1-bce517186049288cca17145094616532-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_317',
        name: 'Camisa Grêmio - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-home1-05ef7dec283296ce7d17473419019768-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_318',
        name: 'Camisa Grêmio - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-home-feminina1-0dfd84a242a971ad3b17459570043702-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_319',
        name: 'Camisa Grêmio - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-third1-afbc12989ab6a97e0317624542126232-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_320',
        name: 'Camisa Grêmio - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-third-feminina1-d64a494488258b981e17652217763137-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_339',
        name: 'Camisa Internacional - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-away1-36e2aa509fda9199dd17513916240604-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_340',
        name: 'Camisa Internacional - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-away1-7fc428b88b5e94548e17589053866857-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_341',
        name: 'Camisa Internacional - Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-home1-aa8bbfca793e243ce917459571071450-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_342',
        name: 'Camisa Internacional - Feminina Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-third1-9e34d85b17244f4e8717624537244773-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_343',
        name: 'Camisa Internacional - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-home1-76afba42c5ff86602017436101291859-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_344',
        name: 'Camisa Internacional - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-third1-af183f819130dcaf8717635668958382-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_414',
        name: 'Camisa Palmeiras - 1997',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-19971-b362fddb8c84d6154917289420833413-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_415',
        name: 'Camisa Palmeiras - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-away1-9bf20304634708c18417693748720869-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_416',
        name: 'Camisa Palmeiras - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-away-feminina1-711bb591e7249c819c17428533330244-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_417',
        name: 'Camisa Palmeiras - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-especial1-3d87ec9412fdf515c217193560911232-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_418',
        name: 'Camisa Palmeiras - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-goleiro1-7f2c7d05eaba9b017717459575901787-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_419',
        name: 'Camisa Palmeiras - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home1-72aabd5bde8a6ef43417706778780690-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_420',
        name: 'Camisa Palmeiras - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home-feminina1-f8cc651ea9b25422b217428530789717-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_421',
        name: 'Camisa Palmeiras - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-third1-47f02b87df952d34c817624539258483-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_422',
        name: 'Camisa Palmeiras - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-third-feminina01-b24ab828944cc177f417280781151069-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_472',
        name: 'Camisa São Paulo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-away1-d75ff4eda19aefca1317473429577988-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_473',
        name: 'Camisa São Paulo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-away-feminina1-d7b608db70278e7e5b17473342167470-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_474',
        name: 'Camisa São Paulo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-home1-e83d6d3abd5824895917422426157675-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_475',
        name: 'Camisa São Paulo - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-home-feminina1-a74a9ea744732328bc17428528179951-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_476',
        name: 'Camisa São Paulo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third1-94e65b7c39eb94209317589053145287-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_477',
        name: 'Camisa São Paulo - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third-feminina1-a3c72d1f437cbd056d17624535490627-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_478',
        name: 'Camisa São Paulo - Third - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third-manga-longa1-e211428d3e9656912517693779729088-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
      {
        id: 'prod_509',
        name: 'Camisa Vasco da Gama - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vasco-da-gama-home1-ed76ea964b11bcea4217706771670950-640-0.webp'),
        category: 'brasileirao',
        subcategory: ''
      },
    ]
  },
  {
    key: 'selecoes',
    name: 'SELEÇÕES',
    products: [
      {
        id: 'prod_123',
        name: 'Camisa Alemanha - 1990 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-1990-home1-8bd6ab0dae800af4ae17320613644461-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_124',
        name: 'Camisa Alemanha - 2014 Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-2014-away1-73be715151cbad055a17187766406741-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_125',
        name: 'Camisa Alemanha - 2018 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-2018-home1-c32a2019b73fd82a0f17320568352985-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_126',
        name: 'Camisa Alemanha - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-away1-52e06f17dc934c753917693726725516-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_127',
        name: 'Camisa Alemanha - Copa 1994 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-copa-1994-home1-1aec8cb45da103d4e117436088442939-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_128',
        name: 'Camisa Alemanha - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-goleiro1-de442e8f95b4267f0e17183244475184-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_129',
        name: 'Camisa Alemanha - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-home1-9196ab0ca1d326997917121679512012-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_138',
        name: 'Camisa América do México - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-home1-8e5642bca81bcfcf3c17525014978317-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_139',
        name: 'Camisa América do México - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-away1-0a32ba8d54086d09fc17430197779600-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_141',
        name: 'Camisa Argentina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-home1-8065af368c2bc0518817652199488939-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_142',
        name: 'Camisa Argentina - 1986 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-19861-fb34d859eac2daa42117320580186319-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_143',
        name: 'Camisa Argentina - 1994 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-1994-011-1dbc97f1826ab6b68a16776169348854-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_144',
        name: 'Camisa Argentina - 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-1998-011-c1e9aee46e300993b716655355375053-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_145',
        name: 'Camisa Argentina - 2006 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-2006-011-9a3ca08d652ce40c9416655261080353-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_146',
        name: 'Camisa Argentina - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-away1-8be4fc3e5ec5e2219817693759180167-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_147',
        name: 'Camisa Argentina - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-goleiro1-1dcf0bcb41bcaf614917164858908450-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_148',
        name: 'Camisa da Argentina - Home Jogador',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-argentina-home-jogador1-fe3808558a5492612417679921566648-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_222',
        name: 'Camisa Canadá - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-canada-home1-b89b7274ee1377640917652197614336-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_235',
        name: 'Camisa Coreia do Sul - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-coreia-do-sul-home1-2cadd0d6f86f00377317488965326693-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_236',
        name: 'Camisa Coreia do Sul - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-coreia-do-sul-away1-9dd9bf64085299896117164884780575-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_248',
        name: 'Camisa da Espanha - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-goleiro1-78060e2efa74382c7d17652206449044-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_249',
        name: 'Camisa da Inglaterra - Home - Jogador',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-inglaterra-home-jogador1-a0b38a738969967f9217652226064587-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_252',
        name: 'Camisa de Portugal - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-de-portugal-goleiro1-d56a4f72405578aa7117428566609728-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_253',
        name: 'Camisa de Portugal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-de-portugal-home-5890f730e9ae58d92517652222140000-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_262',
        name: 'Camisa México - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-mexico-home1-990fc4664df890d90d17652222827950-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_267',
        name: 'Camisa da Espanha - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-home1-f7f03d2538c5836c5917652213481809-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_268',
        name: 'Camisa Espanha - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-espanha-home-manga-longa1-f6f2a0744210cfb6ab17693813852930-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_270',
        name: 'Camisa da Espanha - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-away1-7b6dae27a595e7548e17430189677107-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_302',
        name: 'Camisa França - 1982 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-1982-011-25cdda0438529118e216657185777275-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_303',
        name: 'Camisa França - Copa 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-1998-011-bd9c8bafae9ca4208a16657184697977-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_304',
        name: 'Camisa França - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-franca-away-c1635725c2c92f5a8717624549776850-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_305',
        name: 'Camisa França Feminina - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-feminina-away1-f9428215230ac152c817358499422709-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_306',
        name: 'Camisa França Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-feminina-home1-b79bf3a6330f778a6f17513919055242-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_307',
        name: 'Camisa França - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-goleiro1-f5b24a69e3a4464ea117164847902846-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_308',
        name: 'Camisa França - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-home1-2c2f9a9fccc57fa87417473424787160-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_322',
        name: 'Camisa Holanda - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-home1-c12ad80318928782cd17525006922732-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_323',
        name: 'Camisa Holanda - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-19951-a820549b98f052e33317187733321002-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_324',
        name: 'Camisa Holanda - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-away1-47924d21641ed6acdc17525007490857-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_325',
        name: 'Camisa Inglaterra - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-away1-028f3b9323457feea417206463576529-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_326',
        name: 'Camisa Inglaterra - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-goleiro1-a800e754e90e46fc0517164869660930-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_327',
        name: 'Camisa Inglaterra - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-home1-50094b696e85aa7cc817206459326885-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_345',
        name: 'Camisa Italia - 1994 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-1994-011-64a1e931a2b463a09416651827454023-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_346',
        name: 'Camisa Italia - 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-1998-011-ac02a859b21cac30a416651771686128-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_347',
        name: 'Camisa Italia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-away1-a88d5cee4c279555e817044209116573-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_348',
        name: 'Camisa Italia - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-goleiro1-e6b0ad30c2251072d717164859513582-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_349',
        name: 'Camisa Italia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-home1-1d144e954ad5bb9aa117693771308465-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_350',
        name: 'Camisa Japão - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-away01-db99d526419f7367c516981731256367-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_351',
        name: 'Camisa Japão - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-home1-530383e3a11ed8592117652225264509-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_352',
        name: 'Camisa Japão - Naruto',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-naruto1-7b64a4b900523036db17428522751239-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_384',
        name: 'Camisa Marrocos - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-marrocos-home1-ab91c11c86bb5249cd17693769518808-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_385',
        name: 'Camisa do México - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-mexico-away1-13eb65e8d9d86d03a617436102214130-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_405',
        name: 'Camisa Nigéria - 2018 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nigeria-2018-011-c579e3eabe250d67ea16862464807975-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_406',
        name: 'Camisa Nigéria - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nigeria-home1-881c390f0af08b558c17488953676553-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_425',
        name: 'Camisa Peru - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-peru-away1-6f8a3ea4b05e8ba23f17358508960614-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_426',
        name: 'Camisa Peru - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-peru-home1-cb1e52c67ae63cb3cf17652190785072-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_433',
        name: 'Camisa Portugal - 2006 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-2006-home2-17639bf71198c3940717429306536260-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_434',
        name: 'Camisa de Portugal - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-de-portugal-away1-e95c9126b8844b751717652207748212-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_435',
        name: 'Camisa Portugal Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-feminina-home1-71a06e3484213660c417430192130544-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_436',
        name: 'Camisa Portugal - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-home-manga-longa1-09e2a60f3537ec7b1317693816631659-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_437',
        name: 'Camisa Portugal - Treino',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-treino1-70ec772a2906aced2617422413276387-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_501',
        name: 'Camisa Universidad do Chile - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-universidad-do-chile-away1-0e7faa36156cbaaf6317346500028660-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_502',
        name: 'Camisa Universidad do Chile - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-universidad-do-chile-home1-c723a25a38d9b37f2a17346500840112-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_503',
        name: 'Camisa Uruguai - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uruguai-away1-e4df331e33856c756317693752750913-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
      {
        id: 'prod_504',
        name: 'Camisa Uruguai - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uruguai-home1-454bdd301a3548878717473401338557-640-0.webp'),
        category: 'selecoes',
        subcategory: ''
      },
    ]
  },
  {
    key: 'europa',
    name: 'TIMES EUROPEUS',
    products: [
      {
        id: 'prod_119',
        name: 'Camisa Ajax - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-home1-c5844574bc49a4ee3017513963617019-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_121',
        name: 'Camisa Ajax - 1995/1996 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-1995-1996-011-fbdcd2e7443e072c9516657187910546-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_122',
        name: 'Camisa Ajax - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-away1-345c4421321341cf0917187751349480-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_149',
        name: 'Camisa Arsenal - Away',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-away1-6991107887e85d0b3817525031774781-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_150',
        name: 'Camisa Arsenal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-home1-fe68ff6f2413d269fd17488941451597-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_151',
        name: 'Camisa Arsenal - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-third1-fa557e6ebd03fad4cf17589140846571-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_172',
        name: 'Camisa Barcelona - 2007/2008 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20072008-home2-8c30431642c77a408217428509511591-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_173',
        name: 'Camisa Barcelona - 2008/2009 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-0809-011-24cb6db921249eb34016643974899778-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_174',
        name: 'Camisa Barcelona - 2013/2014 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20132014-away11-99797d9b345ffc31af16935110931433-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_175',
        name: 'Camisa Barcelona - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-away1-324891ab79652e267817525002798225-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_176',
        name: 'Camisa Barcelona - Fourth',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-4-011-d217b4573d1782f57d16776164472438-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_177',
        name: 'Camisa Barcelona - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-01-b90c1e0d94693c8fc117449291867995-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_178',
        name: 'Camisa Barcelona - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-third1-3e9bb7e312d85f140b17550758912148-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_179',
        name: 'Camisa Bayer Leverkusen - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-home1-67ea7f37f917fec36817525011861287-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_180',
        name: 'Camisa Bayer Leverkusen - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-away1-263f4f56620a7bdfc017525012474010-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_181',
        name: 'Camisa Bayer Leverkusen - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-third1-886b7ba3523216d95417247017234491-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_182',
        name: 'Camisa Bayern de Munique - 1997 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-1997-home1-b770ffe5d5bd9305ae17429310238667-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_183',
        name: 'Camisa Bayern de Munique - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-away1-035706944228c7e59917459577052180-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_184',
        name: 'Camisa Bayern de Munique - Goleiro',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-goleiro1-5b0d579ee5b8fcc48117488943348110-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_185',
        name: 'Camisa Bayern de Munique - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-home1-f75f3e793a2e80e49217473425625573-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_186',
        name: 'Camisa Bayern de Munique - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-third1-4d9e9535e1afa1a1c917589048271666-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_187',
        name: 'Camisa Bayern de Munique - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-treino1-a93c014d859ab586fe17234924562763-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_188',
        name: 'Camisa do Benfica - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-benfica-away1-3dd2a36685c1bc934a17513977796337-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_189',
        name: 'Camisa Benfica - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-benfica-home1-9d469f2f6d67fd999517494889014906-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_200',
        name: 'Camisa Borussia Dortmund - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-home1-50ee329a1ae1871ea317706779957311-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_201',
        name: 'Camisa Borussia Dortmund - 1989 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-1989-011-48a05581e301265ad516656730875377-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_202',
        name: 'Camisa Borussia Dortmund - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-19951996-011-43122ea318da79932a16911859564036-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_203',
        name: 'Camisa Borussia Dortmund - 2012/2013 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-20122013-011-d1ed103831d815b4a216862467480805-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_204',
        name: 'Camisa Borussia Dortmund - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-away1-cc2c03f41b0d31176417234940112464-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_205',
        name: 'Camisa Borussia Dortmund - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-third1-05019868e9351962b617253982333562-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_228',
        name: 'Camisa Chelsea - 2011/2012 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-1112-01-e3572719d2ce3d5c8f16977403603629-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_229',
        name: 'Camisa Chelsea - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-away1-78cc0a4160dadbcd1c17430200137729-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_230',
        name: 'Camisa do Chelsea - Modelo Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-home1-b099c2d775b3911a9917436103764053-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_231',
        name: 'Camisa Chelsea - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-third1-61a488772020a903fe17603712150598-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_328',
        name: 'Camisa Inter de Milão - 1997/1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-19971998-home-1-e8ea30f900a98301c717436061382041-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_329',
        name: 'Camisa Inter de Milão - 1998/1999 - Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-1998-1999-away-011-35c21c1e7f9952e0f416651811009051-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_330',
        name: 'Camisa Inter de Milão - 2004/2005 Third',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-20042005-third1-ee5aeb1a6b492484ee17436077263128-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_331',
        name: 'Camisa Inter de Milão - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-away1-ccb6cbf111790e5d5517589042019260-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_332',
        name: 'Camisa Inter de Milão - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-home1-5641df6984c033177817422428119573-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_333',
        name: 'Camisa Inter de Milão - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-third1-712c42a91bedf1d1ec17289434353601-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_334',
        name: 'Camisa Inter Miami - Away Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-away-messi1-589f1be3339daa631717422435520216-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_335',
        name: 'Camisa Inter Miami - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-away1-38e2e30b71c696ee7b17473404005831-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_336',
        name: 'Camisa Inter Miami - Feminina Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-home1-949e7bc72ade11b6ec17473405104499-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_337',
        name: 'Camisa Inter Miami - Home Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-home-messi1-bb6595c5fab7b8420217428538327571-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_338',
        name: 'Camisa Inter Miami - Third Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-third-messi1-36170df99e6c74599c17428551934025-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_353',
        name: 'Camisa Juventus - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-home1-005274e6d42d9c1ab317449297884776-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_354',
        name: 'Camisa Juventus - Home Jogador',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-home-jogador1-53b414fd901e2667e017430199218496-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_355',
        name: 'Camisa Juventus - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-third1-4311b0ad11226dd31317693720532686-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_360',
        name: 'Camisa Lazio - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-away1-33e43ed726b24f668917557274313772-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_361',
        name: 'Camisa Lazio - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-home1-e9b5726827a21c4d9317216744148066-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_369',
        name: 'Camisa Liverpool - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-liverpool-home1-42c2cf129800f011a917624546475182-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_371',
        name: 'Camisa Lyon - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lyon-home1-5fdbb186c8ee39bc1a17589046219454-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_372',
        name: 'Camisa Lyon - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lyon-away1-78253981b3c9d3c9e717525026120686-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_374',
        name: 'Camisa Manchester City - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-away1-2bcd6c768ae5d5ecc917557281116462-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_375',
        name: 'Camisa Manchester City - Fourth',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-fourth1-e39a17ec3e3844b99917550763519269-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_376',
        name: 'Camisa Manchester City - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-home1-07f3d715f6c1cc502417428529708354-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_377',
        name: 'Camisa Manchester City - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-third1-b1fb2e033812345a4e17473407120229-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_378',
        name: 'Camisa Manchester United - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-home1-279a6a673138cbfb0117473395212583-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_379',
        name: 'Camisa Manchester United - 1994/1995 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-199419951-12c6c98e5a4cbf66f317216772064296-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_380',
        name: 'Camisa Manchester United - 1998/1999 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-199819991-2e8076ae4b15a3b09217247056465225-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_381',
        name: 'Camisa Manchester United - 2002/2003 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-20022003-home2-759146e5eff0c10cc317429300659147-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_382',
        name: 'Camisa Manchester United - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-away1-8d4557607f5883c02017473379641817-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_383',
        name: 'Camisa Manchester United - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-third1-ce10ff98797ad6832b17494906174202-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_386',
        name: 'Camisa Milan - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-19951996-home1-839591320fa578da3017436074044482-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_387',
        name: 'Camisa Milan - 2004/2005 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20042005-home1-c7d0169880f3627b3917436072696765-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_388',
        name: 'Camisa Milan - 2006/2007 - Home - Manga Longa',
        price: 229.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20062007-home-manga-longa1-711c01b13663c65ba017693837765452-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_389',
        name: 'Camisa Milan - 2009/2010 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20092010-home1-52eaec408976ffd7dc17436066258516-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_390',
        name: 'Camisa Milan - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-away1-95aa1d9d1464cb04e317473387102875-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_391',
        name: 'Camisa Milan - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-goleiro1-459ec5bab9898e90e817473394356749-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_392',
        name: 'Camisa Milan - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-home1-477fad8fc8e99f04a917436111398820-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_393',
        name: 'Camisa Milan - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-third1-dd9f67544bbda4333117473412205929-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_397',
        name: 'Camisa Napoli - 1988/1989 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-19881989-home1-7ccc3d4f7fc0dc489317436069592393-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_398',
        name: 'Camisa Napoli - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-away1-eb63bf1da0a8fb060717550757830956-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_399',
        name: 'Camisa Napoli - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-home1-8bbd78abcd8b0eeb5d17550755976011-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_400',
        name: 'Camisa Napoli - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-third1-a78c987903c90f102316977502789937-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_401',
        name: 'Camisa Newcastle - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-home1-3639db51b88424d79317459572048407-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_402',
        name: 'Camisa Newcastle United - 1997/1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-united-011-c78b06ac2fbacca0f016656984383046-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_403',
        name: 'Camisa Newcastle - 2000/2001 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-2000-2001-011-8d3791a70b8e68776116656975745259-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_404',
        name: 'Camisa Newcastle - Away',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-away1-4e19b7d4bf4f093b0c17603726948687-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_411',
        name: 'Camisa Olympique de Marseille - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-olympique-de-marseille-home1-6957dbcd1450196f0f17525008323292-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_412',
        name: 'Camisa Olympique de Marseille - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-olympique-de-marseille-away1-df767f44b9e530bfbb17525016552417-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_429',
        name: 'Camisa Porto - 2003/2004 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-20032004-home1-a5e6b026d485f3cb8a17429308622071-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_430',
        name: 'Camisa Porto - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-away1-18158ce5a320f9e79517473346770115-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_431',
        name: 'Camisa Porto - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-home1-98746a3e538f3e898a17473345464488-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_432',
        name: 'Camisa Porto - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-third1-536d7742599f92d0b017533881765273-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_438',
        name: 'Camisa Psg - 1998/1999 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-19981999-home1-7c3c8a0c807b90a43d17428478558542-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_439',
        name: 'Camisa PSG - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-away1-d423b662de77d76e0d17183288006615-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_440',
        name: 'Camisa do PSG - Modelo Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-home1-79ff5c52e70b36d20b17488950643302-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_441',
        name: 'Camisa PSV - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psv-away1-9f50aa4adfaf78eaac17525025344531-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_442',
        name: 'Camisa PSV - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psv-home1-3d2b26ff76c0deccdb17533889259996-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_450',
        name: 'Camisa RB Leipzig - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-leipzig-away1-04cdfee845ec18813f17525021040067-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_451',
        name: 'Camisa RB Leipzig - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-leipzig-home1-53b5410e30a8bd630c17428556507790-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_452',
        name: 'Camisa Real Madrid - 2004/2005 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-200420051-8b53143f534f41e6d217320584184589-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_453',
        name: 'Camisa Real Madrid - 2011/2012 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-2011-2012-011-d440c52ae36acb24ab16657023691894-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_454',
        name: 'Camisa Real Madrid - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-away1-b876e59a2b912b586017234949320749-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_455',
        name: 'Camisa Real Madrid - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-goleiro1-e2d0bc9f8dc360352217216709427983-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_456',
        name: 'Camisa Real Madrid - Home 2025/2026',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-20252026-d1bc7f4bca93bf73d817459593241738-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_457',
        name: 'Camisa Real Madrid - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-feminina1-db4c86dcfb5a646bec17473405738325-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_458',
        name: 'Camisa Real Madrid - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-manga-longa1-0dfe9d9766ed16ad7d17693793586575-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_459',
        name: 'Camisa Real Madrid - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-third1-22637452edafdcd8c017488962383412-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_470',
        name: 'Camisa Roma - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-roma-away1-dd5c52d82e71e6434117247034191483-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_471',
        name: 'Camisa Roma - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-roma-home1-abcb6535e74abba8ac17525011136884-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_482',
        name: 'Camisa Sevilla - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sevilla-away1-2712c84c785891d17a17550752402130-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_483',
        name: 'Camisa Sevilla - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sevilla-home1-f4ac60c53256a8301417533882562638-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_484',
        name: 'Camisa Sporting - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-home1-136acc4703c8d46ee917488959185889-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_485',
        name: 'Camisa Sporting - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-away1-7e6797a68c0df7991d17533883436372-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_486',
        name: 'Camisa Sporting Gijon - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-gijon-away1-5a1259ac775b8ba99717624544906778-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_487',
        name: 'Camisa Sporting Gijon - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-gijon-home1-d87c0f390a062b8d2017550756796080-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_510',
        name: 'Camisa Lazio - 1999/2000 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-199920001-257e56b462f28e994817346488434473-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
      {
        id: 'prod_511',
        name: 'Camisa Lazio 2000/2001 - Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-011-fc57c8cf67c1e822e316815127215929-640-0.webp'),
        category: 'europa',
        subcategory: ''
      },
    ]
  },
  {
    key: 'asia_america',
    name: 'ÁSIA E AMÉRICA',
    products: [
      {
        id: 'prod_130',
        name: 'Camisa Al-Hilal - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-away-branca-neymar1-ea6384e9e06c931b2f17247038821344-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_131',
        name: 'Camisa Al-Hilal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-home1-fe285cde1b37d78f9417513197812315-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_132',
        name: 'Camisa Al-Hilal - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-third-neymar1-a944c30c589cdb48c017259169196284-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_133',
        name: 'Camisa Al-Ittihad - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-ittihad-third1-fece8f011d815d105a16977410689863-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_135',
        name: 'Camisa Al-Nassr - Away Cristiano Ronaldo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-away-cristiano-ronaldo1-d6d12bb053aa39224d17280782751588-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_136',
        name: 'Camisa Al-Nassr - Home Cristiano Ronaldo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-home-cristiano-ronaldo1-dbe88d889f91b7d6df17550754712405-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_137',
        name: 'Camisa Al-Nassr - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-third1-a9eb2a59167724f00117525026778103-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_158',
        name: 'Camisa Atlanta United - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atlanta-united-home1-821b8e3ecdff4542d517430198378936-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_275',
        name: 'Camisa FC Los Angeles - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fc-los-angeles-home1-e687da2c44968f117817183295638320-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_276',
        name: 'Camisa FC Los Angeles - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fc-los-angeles-away1-aeb693ebd267af9b1b17422416934037-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_356',
        name: 'Camisa Kashima Antlers - Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kashima-antlers-away1-3cd2a4c909c2ed179217085442751707-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_357',
        name: 'Camisa Kashima Antlers - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kashima-antlers-home1-a753656ad3070f033a17085442270450-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_358',
        name: 'Camisa Kawasaki Frontale - Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kawasaki-frontale-home1-6a1ad639a3d08d189117346492932093-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_370',
        name: 'Camisa Los Angeles Galaxy - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-los-angeles-galaxy-home1-1cfe09730f81add22a17183171250946-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_513',
        name: 'Camisa Vissel Kobe - Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vissel-kobe-away1-8a21c744e8859bcd8b17085443421950-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },
      {
        id: 'prod_514',
        name: 'Camisa Vissel Kobe - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vissel-kobe-home1-f2763689733687078f17346496600315-640-0.webp'),
        category: 'asia_america',
        subcategory: ''
      },

    ]
  }
,

    {
      key: 'novos',
      name: 'NOVOS PRODUTOS',
      products: [
      {
        id: 'capita_1',
        name: 'Camisa Ajax - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-home1-c5844574bc49a4ee3017513963617019-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_2',
        name: 'Camisa Ajax - 1995/1996 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-1995-1996-011-fbdcd2e7443e072c9516657187910546-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_3',
        name: 'Camisa Ajax - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ajax-away1-345c4421321341cf0917187751349480-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_4',
        name: 'Camisa Alemanha - 1990 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-1990-home1-8bd6ab0dae800af4ae17320613644461-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_5',
        name: 'Camisa Alemanha - 2014 Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-2014-away1-73be715151cbad055a17187766406741-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_6',
        name: 'Camisa Alemanha - 2018 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-2018-home1-c32a2019b73fd82a0f17320568352985-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_7',
        name: 'Camisa Alemanha - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-away1-52e06f17dc934c753917693726725516-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_8',
        name: 'Camisa Alemanha - Copa 1994 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-copa-1994-home1-1aec8cb45da103d4e117436088442939-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_9',
        name: 'Camisa Alemanha - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-goleiro1-de442e8f95b4267f0e17183244475184-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_10',
        name: 'Camisa Alemanha - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-alemanha-home1-9196ab0ca1d326997917121679512012-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_11',
        name: 'Camisa Al-Hilal - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-away-branca-neymar1-ea6384e9e06c931b2f17247038821344-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_12',
        name: 'Camisa Al-Hilal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-home1-fe285cde1b37d78f9417513197812315-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_13',
        name: 'Camisa Al-Hilal - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-hilal-third-neymar1-a944c30c589cdb48c017259169196284-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_14',
        name: 'Camisa Al-Ittihad - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-ittihad-third1-fece8f011d815d105a16977410689863-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_15',
        name: 'Camisa Almeria - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-almeria-home1-b78040f2e5fd328ca417253967064932-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_16',
        name: 'Camisa Al-Nassr - Away Cristiano Ronaldo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-away-cristiano-ronaldo1-d6d12bb053aa39224d17280782751588-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_17',
        name: 'Camisa Al-Nassr - Home Cristiano Ronaldo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-home-cristiano-ronaldo1-dbe88d889f91b7d6df17550754712405-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_18',
        name: 'Camisa Al-Nassr - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-al-nassr-third1-a9eb2a59167724f00117525026778103-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_19',
        name: 'Camisa América do México - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-home1-8e5642bca81bcfcf3c17525014978317-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_20',
        name: 'Camisa América do México - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-america-do-mexico-away1-0a32ba8d54086d09fc17430197779600-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_21',
        name: 'Camisa Argélia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argelia-home1-94756a891bbd6daebb17652211859931-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_22',
        name: 'Camisa Argentina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-home1-8065af368c2bc0518817652199488939-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_23',
        name: 'Camisa Argentina - 1986 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-19861-fb34d859eac2daa42117320580186319-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_24',
        name: 'Camisa Argentina - 1994 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-1994-011-1dbc97f1826ab6b68a16776169348854-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_25',
        name: 'Camisa Argentina - 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-1998-011-c1e9aee46e300993b716655355375053-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_26',
        name: 'Camisa Argentina - 2006 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-2006-011-9a3ca08d652ce40c9416655261080353-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_27',
        name: 'Camisa Argentina - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-away1-8be4fc3e5ec5e2219817693759180167-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_28',
        name: 'Camisa Argentina - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-argentina-goleiro1-1dcf0bcb41bcaf614917164858908450-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_29',
        name: 'Camisa da Argentina - Home Jogador',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-argentina-home-jogador1-fe3808558a5492612417679921566648-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_30',
        name: 'Camisa Arsenal - Away',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-away1-6991107887e85d0b3817525031774781-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_31',
        name: 'Camisa Arsenal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-home1-fe68ff6f2413d269fd17488941451597-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_32',
        name: 'Camisa Arsenal - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-arsenal-third1-fa557e6ebd03fad4cf17589140846571-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_33',
        name: 'Camisa Aston Villa - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-aston-villa-away1-390246c931153a5e2717513968866797-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_34',
        name: 'Camisa Aston Villa - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-aston-villa-home1-90531ddee2c6f4208817624547298204-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_35',
        name: 'Camisa Atalanta - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atalanta-away1-029f498b9c1355347e17377313783758-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_36',
        name: 'Camisa Atalanta - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atalanta-home1-4a33b165a1a2ba989517533889690896-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_37',
        name: 'Camisa Athletic Bilbao - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-athletic-bilbao-away1-31f22c7d51ef0db9e317525029471061-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_38',
        name: 'Camisa Athletic Bilbao - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-athletic-bilbao-home1-12f1dfe03666bf4c4217494890589773-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_39',
        name: 'Camisa Atlanta United - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atlanta-united-home1-821b8e3ecdff4542d517430198378936-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_40',
        name: 'Camisa Atlético de Madrid - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-away1-3b1ee313909cb2521517513967134878-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_41',
        name: 'Camisa Atlético de Madrid - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-home1-1f257215ea8a907bb917422428922086-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_42',
        name: 'Camisa Atlético de Madrid - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-de-madrid-third1-c2077c60428c4f975717216744722696-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_43',
        name: 'Camisa Atlético Mineiro - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-home1-40b872d6963a926b2217706777956574-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_44',
        name: 'Camisa Atlético Mineiro - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-away1-9e49644a925df9c2e617513959307552-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_45',
        name: 'Camisa Atlético Mineiro - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-away-feminina1-4d0285cfca8f200a2017603724734210-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_46',
        name: 'Camisa Atlético Mineiro - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-home-feminina1-2335f0cea409bf2d5017706774712300-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_47',
        name: 'Camisa Atlético Mineiro - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-third1-ab233db59a40f79ec017624541604981-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_48',
        name: 'Camisa Atlético Mineiro - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-third-feminina1-c59c2c31a2e5ae9b0117624537937431-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_49',
        name: 'Camisa Atlético Mineiro - Treino',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-mineiro-treino1-2fb7f3dddc0359b87017514002380829-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_50',
        name: 'Camisa Atlético Nacional - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-nacional-away1-3fa32252214eb77e1d17488959888604-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_51',
        name: 'Camisa Atlético Nacional - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-atletico-nacional-home1-04677ec9d099c7c08f17422427157793-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_52',
        name: 'Camisa Áustria - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-austria-home1-96370a6f8bc91b860c17183245727317-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_53',
        name: 'Camisa Barcelona - 2007/2008 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20072008-home2-8c30431642c77a408217428509511591-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_54',
        name: 'Camisa Barcelona - 2008/2009 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-0809-011-24cb6db921249eb34016643974899778-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_55',
        name: 'Camisa Barcelona - 2013/2014 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-20132014-away11-99797d9b345ffc31af16935110931433-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_56',
        name: 'Camisa Barcelona - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-away1-324891ab79652e267817525002798225-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_57',
        name: 'Camisa Barcelona - Fourth',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-4-011-d217b4573d1782f57d16776164472438-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_58',
        name: 'Camisa Barcelona - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-01-b90c1e0d94693c8fc117449291867995-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_59',
        name: 'Camisa Barcelona - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-third1-3e9bb7e312d85f140b17550758912148-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_60',
        name: 'Camisa Bayer Leverkusen - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-home1-67ea7f37f917fec36817525011861287-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_61',
        name: 'Camisa Bayer Leverkusen - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-away1-263f4f56620a7bdfc017525012474010-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_62',
        name: 'Camisa Bayer Leverkusen - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayer-leverkusen-third1-886b7ba3523216d95417247017234491-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_63',
        name: 'Camisa Bayern de Munique - 1997 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-1997-home1-b770ffe5d5bd9305ae17429310238667-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_64',
        name: 'Camisa Bayern de Munique - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-away1-035706944228c7e59917459577052180-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_65',
        name: 'Camisa Bayern de Munique - Goleiro',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-goleiro1-5b0d579ee5b8fcc48117488943348110-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_66',
        name: 'Camisa Bayern de Munique - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-home1-f75f3e793a2e80e49217473425625573-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_67',
        name: 'Camisa Bayern de Munique - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-third1-4d9e9535e1afa1a1c917589048271666-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_68',
        name: 'Camisa Bayern de Munique - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bayern-de-munique-treino1-a93c014d859ab586fe17234924562763-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_69',
        name: 'Camisa do Benfica - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-benfica-away1-3dd2a36685c1bc934a17513977796337-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_70',
        name: 'Camisa Benfica - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-benfica-home1-9d469f2f6d67fd999517494889014906-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_71',
        name: 'Camisa Betis - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-betis-away1-75a97b3b7a8e2b8a2717603726030957-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_72',
        name: 'Camisa Betis - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-betis-especial1-7d4d0a03448826621117436114172312-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_73',
        name: 'Camisa Betis - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-betis-home1-422eb3b1d7603ca4b817513200564184-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_74',
        name: 'Camisa Betis - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-betis-third1-28595e053b1161249417247029683607-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_75',
        name: 'Camisa Boca Juniors - 2002 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-2002-011-3631e9424c2f72ad3116655368198436-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_76',
        name: 'Camisa Boca Juniors - 2003 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniores-2003-011-4396a0a8af582c691216655349587216-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_77',
        name: 'Camisa Boca Juniors - 2005 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-2005-011-2fd458b87683bb16d216655358766548-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_78',
        name: 'Camisa Boca Juniors - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-away1-b63702a3a79014b1dc17525013216458-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_79',
        name: 'Camisa Boca Juniors - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-home1-e2624aab3c2c8bd31417473414408834-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_80',
        name: 'Camisa Boca Juniors - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-boca-juniors-third1-5f4b248bf4b0fae88a17289443553680-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_81',
        name: 'Camisa Borussia Dortmund - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-home1-50ee329a1ae1871ea317706779957311-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_82',
        name: 'Camisa Borussia Dortmund - 1989 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-1989-011-48a05581e301265ad516656730875377-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_83',
        name: 'Camisa Borussia Dortmund - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-19951996-011-43122ea318da79932a16911859564036-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_84',
        name: 'Camisa Borussia Dortmund - 2012/2013 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-20122013-011-d1ed103831d815b4a216862467480805-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_85',
        name: 'Camisa Borussia Dortmund - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-away1-cc2c03f41b0d31176417234940112464-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_86',
        name: 'Camisa Borussia Dortmund - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-dortmund-third1-05019868e9351962b617253982333562-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_87',
        name: 'Camisa Borussia Mönchengladbach - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-monchengladbach-away1-8205b83514f591797017513969804364-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_88',
        name: 'Camisa Borussia Mönchengladbach - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-borussia-monchengladbach-home1-a5a6c4e2c4085e08f317513961850124-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_89',
        name: 'Camisa Botafogo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-away1-2bcdf494606165696b17589039049709-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_90',
        name: 'Camisa Botafogo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-away-feminina1-2c9b135d687b30f2f317589135912955-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_91',
        name: 'Camisa Botafogo - Fourth',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-fourth-16c1332f25f7bbe12317459573252621-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_92',
        name: 'Camisa Botafogo - Fourth Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-fourth-feminina1-43bf8a6f1a9f6d120d17494894419323-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_93',
        name: 'Camisa Botafogo - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-goleiro1-521684c2af62a98d2f17513912611321-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_94',
        name: 'Camisa Botafogo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-home1-5930b1551b27bf6d3017533888394742-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_95',
        name: 'Camisa Botafogo - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-home-feminina1-2c04bad15829ffc74a17193570868771-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_96',
        name: 'Camisa Botafogo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-botafogo-third1-97e682833ad9b9abb917624541028802-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_97',
        name: 'Camisa Bournemouth - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-bournemouth-home1-f514d6491da066149717187761179336-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_98',
        name: 'Camisa do Brasil - Copa 1994 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-1994-1f3be22482504b472a17195143453217-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_99',
        name: 'Camisa Brentford - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brentford-away-011-1619ccdb663dfe252f16893777042981-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_100',
        name: 'Camisa Burnley - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-burnley-home1-be9c58f0bc529f941c17624545765138-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_101',
        name: 'Camisa Cadiz - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cadiz-away1-b10dc364c94b6f334217533886022780-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_102',
        name: 'Camisa Cadiz - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cadiz-home1-a021feb54b6bedae5c17513976011457-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_103',
        name: 'Camisa Canadá - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-canada-home1-b89b7274ee1377640917652197614336-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_104',
        name: 'Camisa Celta de Vigo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-celta-de-vigo-home1-0640b6eda7d54b10d217234931083951-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_105',
        name: 'Camisa Celta de Vigo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-celta-de-vigo-home1-366bd54d5396b5ca6517525014086257-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_106',
        name: 'Camisa Celtic - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-celtic-away-393e346c16e37cf4b717473398148311-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_107',
        name: 'Camisa Celtic - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-celtic-home1-a7054efd2fb1c52d4717473341217454-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_108',
        name: 'Camisa Cerro Porteno - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cerro-porteno-home1-b22ef6235ba9a271a517422423667406-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_109',
        name: 'Camisa Chelsea - 2011/2012 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-1112-01-e3572719d2ce3d5c8f16977403603629-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_110',
        name: 'Camisa Chelsea - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-away1-78cc0a4160dadbcd1c17430200137729-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_111',
        name: 'Camisa do Chelsea - Modelo Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-home1-b099c2d775b3911a9917436103764053-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_112',
        name: 'Camisa Chelsea - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-chelsea-third1-61a488772020a903fe17603712150598-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_113',
        name: 'Camisa Colômbia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-colombia-away1-756ba6f47b12e91ab617693745187448-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_114',
        name: 'Camisa Colômbia - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-colombia-especial1-4da2f7bd3b5d1c13a717358531437518-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_115',
        name: 'Camisa Colômbia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1000110802-69efada62c4ec1efd917206684997892-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_116',
        name: 'Camisa Coreia do Sul - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-coreia-do-sul-home1-2cadd0d6f86f00377317488965326693-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_117',
        name: 'Camisa Coreia do Sul - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-coreia-do-sul-away1-9dd9bf64085299896117164884780575-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_118',
        name: 'Camisa Costa Rica - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-costa-rica-home1-04a559cf4fbf735a5517652192423251-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_119',
        name: 'Camisa Croácia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-croacia-away1-ca2097540132e8f49c17693743906521-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_120',
        name: 'Camisa Croácia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-croacia-home1-0f32b6c81613e5f35417693741524300-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_121',
        name: 'Camisa Cruzeiro - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-away1-808284bf6ac9f6105517459574189356-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_122',
        name: 'Camisa Cruzeiro - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-away1-909e80d615c98f481b17589137034375-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_123',
        name: 'Camisa Cruzeiro - Feminina Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-feminina-home1-d77156288411c3a79f17494898709419-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_124',
        name: 'Camisa Cruzeiro - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-home1-5f4b731da7440803de17449300753667-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_125',
        name: 'Camisa Cruzeiro - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-third1-5fff9907f6c0d0311b17624540463786-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_126',
        name: 'Camisa Cruzeiro - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-cruzeiro-treino1-86a447073713674acb17377344149378-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_127',
        name: 'Camisa Crystal Palace - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/cp01-df67aad3e728b0a1f316977498801145-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_128',
        name: 'Camisa Crystal Palace - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-crystal-palace-home1-71cde3e584f46b9d9917550751105983-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_129',
        name: 'Camisa da Espanha - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-goleiro1-78060e2efa74382c7d17652206449044-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_130',
        name: 'Camisa da Inglaterra - Home - Jogador',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-inglaterra-home-jogador1-a0b38a738969967f9217652226064587-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_131',
        name: 'Camisa da Suíça - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-suica-home1-e11b09d28931cff1a217358506862722-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_132',
        name: 'Camisa Deportivo Alavés - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-deportivo-alaves-home1-43278e327bc679ab9817528663233972-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_133',
        name: 'Camisa de Portugal - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-de-portugal-goleiro1-d56a4f72405578aa7117428566609728-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_134',
        name: 'Camisa de Portugal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-de-portugal-home-5890f730e9ae58d92517652222140000-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_135',
        name: 'Camisa Dinamarca - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-dinamarca-away1-498b5a7593df6d54d717358504079628-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_136',
        name: 'Camisa do Brasil - Copa 2006 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-brasil-2006-0111-da56015ac0312cdc3716642174840285-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_137',
        name: 'Camisa do Brasil Amarela - Home Jogador',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-amarela-home-jogador1-c6ae98d2fd1092003617422431543878-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_138',
        name: 'Camisa do Brasil Amarela - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-amarela-home1-70bca7543cc75e3cd517697142214260-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_139',
        name: 'Camisa do Brasil Azul - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-azul-away1-f931ff93c1ec340a0c17652211085465-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_140',
        name: 'Camisa do Brasil - Copa 1994 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-copa-1994-away1-8ee85cd1eaac8db2f317430200959464-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_141',
        name: 'Camisa do Brasil Feminina - Amarela Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-feminina-amarela-home1-56918ea5ad668fc7e917473411466849-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_142',
        name: 'Camisa do Brasil Feminina - Azul Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-brasil-feminina-azul-away1-6773b33aedba5bb6f617459586738148-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_143',
        name: 'Camisa México - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-mexico-home1-990fc4664df890d90d17652222827950-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_144',
        name: 'Camisa Egito - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-egito-home1-c14a9fac305397d85917449304022196-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_145',
        name: 'Camisa Eintracht Frankfurt - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-eintracht-frankfurt-away1-e8fd9bd48754c97c6017589142958298-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_146',
        name: 'Camisa Elche - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-elche-home1-889af1428fcaea776d17272142841568-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_147',
        name: 'Camisa Equador - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-equador-home1-74ad54c3c1e7eb265d17459566059759-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_148',
        name: 'Camisa da Espanha - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-home1-f7f03d2538c5836c5917652213481809-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_149',
        name: 'Camisa Espanha - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-espanha-home-manga-longa1-f6f2a0744210cfb6ab17693813852930-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_150',
        name: 'Camisa Espanyol - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-espanyol-home1-1d9cdaf0970244557817253966108823-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_151',
        name: 'Camisa da Espanha - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-espanha-away1-7b6dae27a595e7548e17430189677107-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_152',
        name: 'Camisa Estados Unidos - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-estados-unidos-home1-6071183424489e964d17533887602889-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_153',
        name: 'Camisa Estados Unidos - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-estados-unidos-away-01-a208d4658580202ebf17175424946361-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_154',
        name: 'Camisa Everton - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-everton-away-cb8bd4e6911ddb239717603715291749-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_155',
        name: 'Camisa Everton - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-everton-home1-d64abe6f5b8d82bcb517528663858659-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_156',
        name: 'Camisa FC Los Angeles - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fc-los-angeles-home1-e687da2c44968f117817183295638320-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_157',
        name: 'Camisa FC Los Angeles - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fc-los-angeles-away1-aeb693ebd267af9b1b17422416934037-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_158',
        name: 'Camisa Feyenoord - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-feyenoord-away1-20d027b8ced441000c16981767024790-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_159',
        name: 'Camisa Feyenoord - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-feyenoord-home1-ee82bba9ae8c33300017533890695587-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_160',
        name: 'Camisa Fiorentina - 1992/1993 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fiorentina-1992-1993-011-443468756c956eb2e616651813987578-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_161',
        name: 'Camisa Fiorentina - 1995/1996 Third',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fiorentina-95-96-011-0187569dd34148165616815089821720-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_162',
        name: 'Camisa Fiorentina - 1998/1999 - Home - Manga Longa',
        price: 229.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fiorentina-19981999-home-manga-longa1-1c357481a35dca608617693843445674-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_163',
        name: 'Camisa Fiorentina - 1998/1999 Home Nintendo',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fiorentina-nintendo1-bc11d6bd966c6f484117234959727293-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_164',
        name: 'Camisa Fiorentina - 1999/2000 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fiorentina-19992000-home1-30fa3dbd54e5f6c0a117436057717949-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_165',
        name: 'Camisa Flamengo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away1-e3ac284eced77fc61d17473400643706-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_166',
        name: 'Camisa Flamengo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-away-feminina1-abbf09eaf5e4be087717473399705457-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_167',
        name: 'Camisa Flamengo - Casual Retrô',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-casual-retro1-904fc30c6f2fbfe7a317272139415195-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_168',
        name: 'Camisa Flamengo - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-especial1-cafd335ac0db64bc8517652210357789-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_169',
        name: 'Camisa Flamengo - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-goleiro1-bc2d2f419b94b49b0717422414945238-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_170',
        name: 'Camisa Flamengo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home1-7d48f68bc5a146987917422432415116-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_171',
        name: 'Camisa Flamengo - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-home-manga-longa1-4d60e02215a71b801e17693775378218-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_172',
        name: 'Camisa Flamengo - Pré-Jogo',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-pre-jogo1-6d1477d826872f590c17693768264805-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_173',
        name: 'Camisa Flamengo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-third1-5548bb338c9df4daed17569279417870-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_174',
        name: 'Camisa Flamengo - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-third-feminina1-f629673982c6966bc217603719863214-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_175',
        name: 'Camisa Flamengo - Treino',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-flamengo-treino1-830f18b4e1dcb2a21017428535747309-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_176',
        name: 'Camisa Fluminense - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-away1-25a8a4f7989d725d0017706776662715-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_177',
        name: 'Camisa Fluminense - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-away-feminina1-edb2b8357755c3f49b17321198672110-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_178',
        name: 'Camisa Fluminense - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-goleiro1-388316f5a205ce871d17187762471317-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_179',
        name: 'Camisa Fluminense - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-home1-7d7a01e8275dfe5d7b17706775629436-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_180',
        name: 'Camisa Fluminense - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-home-feminina1-f18d412cf977a6acb717513999791707-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_181',
        name: 'Camisa Fluminense - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-third1-696b51ac949d3c113317652214962308-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_182',
        name: 'Camisa Fluminense - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fluminense-third-feminina1-fef97bd22adabe8e7e17693766026707-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_183',
        name: 'Camisa França - 1982 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-1982-011-25cdda0438529118e216657185777275-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_184',
        name: 'Camisa França - Copa 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-1998-011-bd9c8bafae9ca4208a16657184697977-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_185',
        name: 'Camisa França - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-franca-away-c1635725c2c92f5a8717624549776850-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_186',
        name: 'Camisa França Feminina - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-feminina-away1-f9428215230ac152c817358499422709-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_187',
        name: 'Camisa França Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-feminina-home1-b79bf3a6330f778a6f17513919055242-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_188',
        name: 'Camisa França - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-goleiro1-f5b24a69e3a4464ea117164847902846-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_189',
        name: 'Camisa França - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-franca-home1-2c2f9a9fccc57fa87417473424787160-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_190',
        name: 'Camisa Fulham - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fulham-away1-ae4599daa1460e192e17358566134238-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_191',
        name: 'Camisa Fulham - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-fulham-home1-fd73a7f22451398e9817589047264555-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_192',
        name: 'Camisa Galatasaray - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-galatasaray-home1-c05bcec0b35416e54417524996277850-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_193',
        name: 'Camisa Girona - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-girona-away1-68756624c36135347e17488960875803-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_194',
        name: 'Camisa Girona - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-girona-home1-c1e9ba0ac55c77e3af17488961590983-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_195',
        name: 'Camisa Granada - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-granada-home1-4e3384f8845e02012a17550753271058-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_196',
        name: 'Camisa Grêmio - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-away1-be68271466d1d6f0e017525027489998-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_197',
        name: 'Camisa Grêmio - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-away-feminina1-bce517186049288cca17145094616532-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_198',
        name: 'Camisa Grêmio - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-home1-05ef7dec283296ce7d17473419019768-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_199',
        name: 'Camisa Grêmio - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-home-feminina1-0dfd84a242a971ad3b17459570043702-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_200',
        name: 'Camisa Grêmio - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-third1-afbc12989ab6a97e0317624542126232-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_201',
        name: 'Camisa Grêmio - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-gremio-third-feminina1-d64a494488258b981e17652217763137-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_202',
        name: 'Camisa Hertha Berlin - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-hertha-berlin-011-1dd2bf7d8695b5f12416732895493463-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_203',
        name: 'Camisa Holanda - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-home1-c12ad80318928782cd17525006922732-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_204',
        name: 'Camisa Holanda - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-19951-a820549b98f052e33317187733321002-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_205',
        name: 'Camisa Holanda - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-holanda-away1-47924d21641ed6acdc17525007490857-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_206',
        name: 'Camisa Inglaterra - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-away1-028f3b9323457feea417206463576529-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_207',
        name: 'Camisa Inglaterra - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-goleiro1-a800e754e90e46fc0517164869660930-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_208',
        name: 'Camisa Inglaterra - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inglaterra-home1-50094b696e85aa7cc817206459326885-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_209',
        name: 'Camisa Inter de Milão - 1997/1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-19971998-home-1-e8ea30f900a98301c717436061382041-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_210',
        name: 'Camisa Inter de Milão - 1998/1999 - Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-1998-1999-away-011-35c21c1e7f9952e0f416651811009051-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_211',
        name: 'Camisa Inter de Milão - 2004/2005 Third',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-20042005-third1-ee5aeb1a6b492484ee17436077263128-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_212',
        name: 'Camisa Inter de Milão - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-away1-ccb6cbf111790e5d5517589042019260-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_213',
        name: 'Camisa Inter de Milão - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-home1-5641df6984c033177817422428119573-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_214',
        name: 'Camisa Inter de Milão - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-de-milao-third1-712c42a91bedf1d1ec17289434353601-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_215',
        name: 'Camisa Inter Miami - Away Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-away-messi1-589f1be3339daa631717422435520216-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_216',
        name: 'Camisa Inter Miami - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-away1-38e2e30b71c696ee7b17473404005831-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_217',
        name: 'Camisa Inter Miami - Feminina Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-feminina-home1-949e7bc72ade11b6ec17473405104499-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_218',
        name: 'Camisa Inter Miami - Home Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-home-messi1-bb6595c5fab7b8420217428538327571-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_219',
        name: 'Camisa Inter Miami - Third Messi',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-inter-miami-third-messi1-36170df99e6c74599c17428551934025-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_220',
        name: 'Camisa Internacional - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-away1-36e2aa509fda9199dd17513916240604-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_221',
        name: 'Camisa Internacional - Feminina Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-away1-7fc428b88b5e94548e17589053866857-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_222',
        name: 'Camisa Internacional - Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-home1-aa8bbfca793e243ce917459571071450-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_223',
        name: 'Camisa Internacional - Feminina Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-feminina-third1-9e34d85b17244f4e8717624537244773-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_224',
        name: 'Camisa Internacional - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-home1-76afba42c5ff86602017436101291859-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_225',
        name: 'Camisa Internacional - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-internacional-third1-af183f819130dcaf8717635668958382-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_226',
        name: 'Camisa Italia - 1994 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-1994-011-64a1e931a2b463a09416651827454023-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_227',
        name: 'Camisa Italia - 1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-1998-011-ac02a859b21cac30a416651771686128-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_228',
        name: 'Camisa Italia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-away1-a88d5cee4c279555e817044209116573-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_229',
        name: 'Camisa Italia - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-goleiro1-e6b0ad30c2251072d717164859513582-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_230',
        name: 'Camisa Italia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-italia-home1-1d144e954ad5bb9aa117693771308465-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_231',
        name: 'Camisa Japão - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-away01-db99d526419f7367c516981731256367-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_232',
        name: 'Camisa Japão - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-home1-530383e3a11ed8592117652225264509-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_233',
        name: 'Camisa Japão - Naruto',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-japao-naruto1-7b64a4b900523036db17428522751239-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_234',
        name: 'Camisa Juventus - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-home1-005274e6d42d9c1ab317449297884776-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_235',
        name: 'Camisa Juventus - Home Jogador',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-home-jogador1-53b414fd901e2667e017430199218496-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_236',
        name: 'Camisa Juventus - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-juventus-third1-4311b0ad11226dd31317693720532686-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_237',
        name: 'Camisa Kashima Antlers - Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kashima-antlers-away1-3cd2a4c909c2ed179217085442751707-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_238',
        name: 'Camisa Kashima Antlers - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kashima-antlers-home1-a753656ad3070f033a17085442270450-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_239',
        name: 'Camisa Kawasaki Frontale - Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-kawasaki-frontale-home1-6a1ad639a3d08d189117346492932093-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_240',
        name: 'Camisa Las Palmas - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-las-palmas-home1-3df773d321bfe3a48f17569277599053-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_241',
        name: 'Camisa Lazio - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-away1-33e43ed726b24f668917557274313772-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_242',
        name: 'Camisa Lazio - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-home1-e9b5726827a21c4d9317216744148066-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_243',
        name: 'Camisa Leeds - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leeds-home1-5721647d24b7418c8617528664473131-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_244',
        name: 'Camisa Leganés - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leganes-home1-fad6c588a89178fa8b17557277541883-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_245',
        name: 'Camisa Leicester - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-leicester-home1-f6932be5ceb3501ed617234944794189-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_246',
        name: 'Camisa Lens - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lens-away1-3fa34dddd7a29a958a17533884754656-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_247',
        name: 'Camisa Lens - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lens-home1-ec2e132c725eebd82817525018940334-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_248',
        name: 'Camisa Lille - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lille-away1-d0d8fcc29de032742c17513918267575-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_249',
        name: 'Camisa Lille - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lille-home1-94de64c84579d6800a17514056558052-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_250',
        name: 'Camisa Liverpool - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-liverpool-home1-42c2cf129800f011a917624546475182-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_251',
        name: 'Camisa Los Angeles Galaxy - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-los-angeles-galaxy-home1-1cfe09730f81add22a17183171250946-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_252',
        name: 'Camisa Lyon - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lyon-home1-5fdbb186c8ee39bc1a17589046219454-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_253',
        name: 'Camisa Lyon - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lyon-away1-78253981b3c9d3c9e717525026120686-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_254',
        name: 'Camisa Mallorca - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-mallorca-home1-e0633c7755711fd0a617525008954029-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_255',
        name: 'Camisa Manchester City - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-away1-2bcd6c768ae5d5ecc917557281116462-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_256',
        name: 'Camisa Manchester City - Fourth',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-fourth1-e39a17ec3e3844b99917550763519269-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_257',
        name: 'Camisa Manchester City - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-home1-07f3d715f6c1cc502417428529708354-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_258',
        name: 'Camisa Manchester City - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-city-third1-b1fb2e033812345a4e17473407120229-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_259',
        name: 'Camisa Manchester United - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-home1-279a6a673138cbfb0117473395212583-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_260',
        name: 'Camisa Manchester United - 1994/1995 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-199419951-12c6c98e5a4cbf66f317216772064296-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_261',
        name: 'Camisa Manchester United - 1998/1999 Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-199819991-2e8076ae4b15a3b09217247056465225-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_262',
        name: 'Camisa Manchester United - 2002/2003 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-20022003-home2-759146e5eff0c10cc317429300659147-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_263',
        name: 'Camisa Manchester United - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-away1-8d4557607f5883c02017473379641817-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_264',
        name: 'Camisa Manchester United - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-manchester-united-third1-ce10ff98797ad6832b17494906174202-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_265',
        name: 'Camisa Marrocos - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-marrocos-home1-ab91c11c86bb5249cd17693769518808-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_266',
        name: 'Camisa do México - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-do-mexico-away1-13eb65e8d9d86d03a617436102214130-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_267',
        name: 'Camisa Milan - 1995/1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-19951996-home1-839591320fa578da3017436074044482-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_268',
        name: 'Camisa Milan - 2004/2005 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20042005-home1-c7d0169880f3627b3917436072696765-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_269',
        name: 'Camisa Milan - 2006/2007 - Home - Manga Longa',
        price: 229.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20062007-home-manga-longa1-711c01b13663c65ba017693837765452-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_270',
        name: 'Camisa Milan - 2009/2010 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-20092010-home1-52eaec408976ffd7dc17436066258516-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_271',
        name: 'Camisa Milan - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-away1-95aa1d9d1464cb04e317473387102875-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_272',
        name: 'Camisa Milan - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-goleiro1-459ec5bab9898e90e817473394356749-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_273',
        name: 'Camisa Milan - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-home1-477fad8fc8e99f04a917436111398820-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_274',
        name: 'Camisa Milan - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-milan-third1-dd9f67544bbda4333117473412205929-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_275',
        name: 'Camisa Monterrey - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-monterrey-home1-d67a995aa53a1f014a17473347612874-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_276',
        name: 'Camisa Monterrey - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-monterrey-away1-75bdd5f5bf8017bf1817603721918478-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_277',
        name: 'Camisa Nacional - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nacional-home1-6895df990f8b61f91c17473396489252-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_278',
        name: 'Camisa Napoli - 1988/1989 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-19881989-home1-7ccc3d4f7fc0dc489317436069592393-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_279',
        name: 'Camisa Napoli - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-away1-eb63bf1da0a8fb060717550757830956-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_280',
        name: 'Camisa Napoli - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-home1-8bbd78abcd8b0eeb5d17550755976011-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_281',
        name: 'Camisa Napoli - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-napoli-third1-a78c987903c90f102316977502789937-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_282',
        name: 'Camisa Newcastle - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-home1-3639db51b88424d79317459572048407-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_283',
        name: 'Camisa Newcastle United - 1997/1998 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-united-011-c78b06ac2fbacca0f016656984383046-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_284',
        name: 'Camisa Newcastle - 2000/2001 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-2000-2001-011-8d3791a70b8e68776116656975745259-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_285',
        name: 'Camisa Newcastle - Away',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-newcastle-away1-4e19b7d4bf4f093b0c17603726948687-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_286',
        name: 'Camisa Nigéria - 2018 Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nigeria-2018-011-c579e3eabe250d67ea16862464807975-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_287',
        name: 'Camisa Nigéria - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nigeria-home1-881c390f0af08b558c17488953676553-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_288',
        name: 'Camisa Noruega - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-noruega-away1-dd655bb5782df5394017164891616602-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_289',
        name: 'Camisa Noruega - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-noruega-home1-1dde9f0de518ebbcc617164850216459-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_290',
        name: 'Camisa Nottingham Forest - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nottingham-forest-away1-5595f54ad6499fd33717603723734988-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_291',
        name: 'Camisa Nottingham Forest - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-nottingham-forest-home1-183a5b8fc37e59363417603713580523-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_292',
        name: 'Camisa Olympique de Marseille - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-olympique-de-marseille-home1-6957dbcd1450196f0f17525008323292-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_293',
        name: 'Camisa Olympique de Marseille - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-olympique-de-marseille-away1-df767f44b9e530bfbb17525016552417-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_294',
        name: 'Camisa Osasuna - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-osasuna-home1-697bf865ff3479d04717253968496712-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_295',
        name: 'Camisa Palmeiras - 1997',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-19971-b362fddb8c84d6154917289420833413-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_296',
        name: 'Camisa Palmeiras - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-away1-9bf20304634708c18417693748720869-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_297',
        name: 'Camisa Palmeiras - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-away-feminina1-711bb591e7249c819c17428533330244-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_298',
        name: 'Camisa Palmeiras - Especial',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-especial1-3d87ec9412fdf515c217193560911232-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_299',
        name: 'Camisa Palmeiras - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-goleiro1-7f2c7d05eaba9b017717459575901787-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_300',
        name: 'Camisa Palmeiras - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home1-72aabd5bde8a6ef43417706778780690-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_301',
        name: 'Camisa Palmeiras - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-home-feminina1-f8cc651ea9b25422b217428530789717-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_302',
        name: 'Camisa Palmeiras - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-third1-47f02b87df952d34c817624539258483-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_303',
        name: 'Camisa Palmeiras - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-palmeiras-third-feminina01-b24ab828944cc177f417280781151069-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_304',
        name: 'Camisa Parma - 1999/2000 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-parma-19992000-home1-faf4864dbacdc6e86a17320588740117-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_305',
        name: 'Camisa Penarol - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-penarol-home1-353a09df784df0fb3817428555109996-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_306',
        name: 'Camisa Peru - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-peru-away1-6f8a3ea4b05e8ba23f17358508960614-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_307',
        name: 'Camisa Peru - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-peru-home1-cb1e52c67ae63cb3cf17652190785072-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_308',
        name: 'Camisa Polônia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-polonia-away1-88c61e961b3294f42017164848956619-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_309',
        name: 'Camisa Polônia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-polonia-home1-c9f5996a5552e40c2217164851011806-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_310',
        name: 'Camisa Porto - 2003/2004 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-20032004-home1-a5e6b026d485f3cb8a17429308622071-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_311',
        name: 'Camisa Porto - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-away1-18158ce5a320f9e79517473346770115-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_312',
        name: 'Camisa Porto - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-home1-98746a3e538f3e898a17473345464488-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_313',
        name: 'Camisa Porto - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-porto-third1-536d7742599f92d0b017533881765273-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_314',
        name: 'Camisa Portugal - 2006 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-2006-home2-17639bf71198c3940717429306536260-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_315',
        name: 'Camisa de Portugal - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-de-portugal-away1-e95c9126b8844b751717652207748212-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_316',
        name: 'Camisa Portugal Feminina - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-feminina-home1-71a06e3484213660c417430192130544-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_317',
        name: 'Camisa Portugal - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-home-manga-longa1-09e2a60f3537ec7b1317693816631659-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_318',
        name: 'Camisa Portugal - Treino',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-portugal-treino1-70ec772a2906aced2617422413276387-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_319',
        name: 'Camisa Psg - 1998/1999 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-19981999-home1-7c3c8a0c807b90a43d17428478558542-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_320',
        name: 'Camisa PSG - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-away1-d423b662de77d76e0d17183288006615-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_321',
        name: 'Camisa do PSG - Modelo Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psg-home1-79ff5c52e70b36d20b17488950643302-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_322',
        name: 'Camisa PSV - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psv-away1-9f50aa4adfaf78eaac17525025344531-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_323',
        name: 'Camisa PSV - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-psv-home1-3d2b26ff76c0deccdb17533889259996-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_324',
        name: 'Camisa Rangers - 1996/1997 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rangers-19961997-home2-fa326d457bdf195ca217429303122496-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_325',
        name: 'Camisa Rangers - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rangers-away1-64252643c2e8a7c08c17624550570229-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_326',
        name: 'Camisa Rangers - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rangers-home1-bd3814aa7fee20e7be17550761660921-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_327',
        name: 'Camisa Rayo Vallecano - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rayo-vallecano-away1-b3e02635722fcead2417589138210774-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_328',
        name: 'Camisa Rayo Vallecano - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rayo-vallecano-home1-4ae4baff99b94006f217525017232184-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_329',
        name: 'Camisa RB Bragantino - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-bragantino-away1-d8a7ac8c810d8401c117603716260865-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_330',
        name: 'Camisa RB Bragantino - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-bragantino-home1-97cd7bed8b9b73358e17603717105881-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_331',
        name: 'Camisa RB Leipzig - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-leipzig-away1-04cdfee845ec18813f17525021040067-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_332',
        name: 'Camisa RB Leipzig - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rb-leipzig-home1-53b5410e30a8bd630c17428556507790-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_333',
        name: 'Camisa Real Madrid - 2004/2005 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-200420051-8b53143f534f41e6d217320584184589-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_334',
        name: 'Camisa Real Madrid - 2011/2012 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-2011-2012-011-d440c52ae36acb24ab16657023691894-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_335',
        name: 'Camisa Real Madrid - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-away1-b876e59a2b912b586017234949320749-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_336',
        name: 'Camisa Real Madrid - Goleiro',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-goleiro1-e2d0bc9f8dc360352217216709427983-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_337',
        name: 'Camisa Real Madrid - Home 2025/2026',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-20252026-d1bc7f4bca93bf73d817459593241738-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_338',
        name: 'Camisa Real Madrid - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-feminina1-db4c86dcfb5a646bec17473405738325-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_339',
        name: 'Camisa Real Madrid - Home - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-home-manga-longa1-0dfe9d9766ed16ad7d17693793586575-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_340',
        name: 'Camisa Real Madrid - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-madrid-third1-22637452edafdcd8c017488962383412-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_341',
        name: 'Camisa Real Sociedad - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-sociedad-away1-8bf86eb58a90f3c72517247024788653-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_342',
        name: 'Camisa Real Sociedad - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-sociedad-home1-578ea90425cf40e4f317569278296877-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_343',
        name: 'Camisa Real Sociedad - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-real-sociedad-third01-bc5898fa0ce5f4e0d316999068155169-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_344',
        name: 'Camisa Red Bull - New York Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-red-bull-new-york-home1-13eede4b8e21462cec17422414109623-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_345',
        name: 'Camisa Rennes - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-rennes-home1-4b260b456831b1db0917216776008331-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_346',
        name: 'Camisa República Checa - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-republica-checa-home1-fd2265e560f45a2d1517706781185706-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_347',
        name: 'Camisa República Tcheca - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-republica-tcheca-home1-0dbf4134816d2d9d1517693756541089-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_348',
        name: 'Camisa River Plate - 1996 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-1996-011-bded5d1f3144f2e3a916655347068370-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_349',
        name: 'Camisa River Plate - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-away1-1fd698fec7949db44717513960780740-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_350',
        name: 'Camisa River Plate - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-home1-3de5af1c62e8cef70f17524997852887-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_351',
        name: 'Camisa Roma - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-roma-away1-dd5c52d82e71e6434117247034191483-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_352',
        name: 'Camisa Roma - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-roma-home1-abcb6535e74abba8ac17525011136884-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_353',
        name: 'Camisa São Paulo - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-away1-d75ff4eda19aefca1317473429577988-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_354',
        name: 'Camisa São Paulo - Away Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-away-feminina1-d7b608db70278e7e5b17473342167470-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_355',
        name: 'Camisa São Paulo - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-home1-e83d6d3abd5824895917422426157675-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_356',
        name: 'Camisa São Paulo - Home Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-home-feminina1-a74a9ea744732328bc17428528179951-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_357',
        name: 'Camisa São Paulo - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third1-94e65b7c39eb94209317589053145287-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_358',
        name: 'Camisa São Paulo - Third Feminina',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third-feminina1-a3c72d1f437cbd056d17624535490627-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_359',
        name: 'Camisa São Paulo - Third - Manga Longa',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sao-paulo-third-manga-longa1-e211428d3e9656912517693779729088-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_360',
        name: 'Camisa Schalke 04 - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-schalke-04-home1-3256c2fa66ff716e6617473402978230-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_361',
        name: 'Camisa Senegal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-senegal-home1-c65fa9f68ea4c8117a17428539115844-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_362',
        name: 'Camisa Servia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-servia-home1-06ede2b8e6a820ef0917175437087805-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_363',
        name: 'Camisa Sevilla - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sevilla-away1-2712c84c785891d17a17550752402130-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_364',
        name: 'Camisa Sevilla - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sevilla-home1-f4ac60c53256a8301417533882562638-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_365',
        name: 'Camisa Sporting - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-home1-136acc4703c8d46ee917488959185889-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_366',
        name: 'Camisa Sporting - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-away1-7e6797a68c0df7991d17533883436372-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_367',
        name: 'Camisa Sporting Gijon - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-gijon-away1-5a1259ac775b8ba99717624544906778-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_368',
        name: 'Camisa Sporting Gijon - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-sporting-gijon-home1-d87c0f390a062b8d2017550756796080-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_369',
        name: 'Camisa Suécia - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-suecia-away1-0d366a3fa96570c47117164887576633-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_370',
        name: 'Camisa Suécia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-suecia-home1-5fa6a9c69d22aed84717652203851632-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_371',
        name: 'Camisa Suíça - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-suica-away1-102429ddde3c28820b17652218768343-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_372',
        name: 'Camisa Tigres - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-tigres-away1-7c5ac1e8edc6f30d3617216769163586-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_373',
        name: 'Camisa Tigres - Home',
        price: 169.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-tigres-home1-5e8333b829da5b548817430194818148-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_374',
        name: 'Camisa River Plate - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-river-plate-third1-bc1030cf08f11155f617422422951106-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_375',
        name: 'Camisa Torino - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-torino-home1-89022295c96a6c952d17358571835553-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_376',
        name: 'Camisa Turquia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-da-turquia-home1-fac35e738ebf7a80af17358507995973-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_377',
        name: 'Camisa Ucrânia - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-ucrania-home1-cd48fd3fc9e8279fda17652203104197-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_378',
        name: 'Camisa União Soviética - 1987/1988 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uniao-sov-87-01-c84f144d78b0ceb3c817044224919238-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_379',
        name: 'Camisa Union Berlin - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-union-berlin-away1-d79cd310996da4a54017253986965071-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_380',
        name: 'Camisa Union Berlin - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-union-berlin-home1-2948df8ca12871f86f17473413091364-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_381',
        name: 'Camisa Universidad Católica - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-universidad-catolica-home1-8f9bda2f4b42328dc117422436298113-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_382',
        name: 'Camisa Universidad do Chile - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-universidad-do-chile-away1-0e7faa36156cbaaf6317346500028660-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_383',
        name: 'Camisa Universidad do Chile - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-universidad-do-chile-home1-c723a25a38d9b37f2a17346500840112-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_384',
        name: 'Camisa Uruguai - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uruguai-away1-e4df331e33856c756317693752750913-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_385',
        name: 'Camisa Uruguai - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-uruguai-home1-454bdd301a3548878717473401338557-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_386',
        name: 'Camisa Valência - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-valencia-home1-3c38acc494a02313a817514054842679-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_387',
        name: 'Camisa Valência - 2003/2004 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-valencia-20032004-home1-a4838257017c410f6c17320589959086-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_388',
        name: 'Camisa Valência - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-valencia-away1-d4768ebe6aee2210fc17488964004217-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_389',
        name: 'Camisa Valência - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-valencia-third1-0356465c92485f957817272160132234-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_390',
        name: 'Camisa Vasco da Gama - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vasco-da-gama-home1-ed76ea964b11bcea4217706771670950-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_391',
        name: 'Camisa Lazio - 1999/2000 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-199920001-257e56b462f28e994817346488434473-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_392',
        name: 'Camisa Lazio 2000/2001 - Away',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-lazio-011-fc57c8cf67c1e822e316815127215929-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_393',
        name: 'Camisa Villarreal - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/1camisa-villarreal-home-d4682f70bac7042b1e17525020298573-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_394',
        name: 'Camisa Vissel Kobe - Away',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vissel-kobe-away1-8a21c744e8859bcd8b17085443421950-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_395',
        name: 'Camisa Vissel Kobe - Home',
        price: 199.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-vissel-kobe-home1-f2763689733687078f17346496600315-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_396',
        name: 'Camisa Werder Bremen - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-werder-bremen-home1-1a43358029b658fe3417513976909598-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_397',
        name: 'Camisa West Ham - 1999/2000 Home',
        price: 209.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-west-ham-19992000-011-de290e1067f7679c9f16862531384886-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_398',
        name: 'Camisa West Ham - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-west-ham-away1-1d62b1b15254ec06c617589044622503-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_399',
        name: 'Camisa West Ham - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-west-ham-home1-3dff706dd69d5ff0ec17589043244368-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_400',
        name: 'Camisa West Ham - Third',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-west-ham-third1-cb11b7e531e83316f617234947014367-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_401',
        name: 'Camisa Wolfsburg - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolfsburg-away1-38a7d5dab96b4c8f8917488966159885-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_402',
        name: 'Camisa Wolfsburg - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolfsburg-home1-76825962d1f2c1665e17488969500603-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_403',
        name: 'Camisa Wolverhampton - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolverhampton-home1-929f20e091adf4914917488968571997-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_404',
        name: 'Camisa Wolverhampton - Away',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wolverhampton-away1-d3cd2f9497f3b9cfe517259160220897-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_405',
        name: 'Camisa Wrexham - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-wrexham-home1-3d316d96c673e97e7817624548100477-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },
      {
        id: 'capita_406',
        name: 'Camisa Zenit - Home',
        price: 175.9,
        image: normalizeImageUrl('https://acdn-us.mitiendanube.com/stores/002/322/390/products/camisa-zenit-home1-e2903327444e4ebd7d17272113138652-640-0.webp'),
        category: 'novos',
        subcategory: ''
      },

      ]
    }
];