import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  constructor() { }
  fashionList: fashionDetails[] = [
    {
      name: 'saman',
      suitable: 'women',
      price: 559,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/c/q/s/free-3050-divastri-unstitched-original-imagg7g82bk6uybh.jpeg?q=70',
    },
    {
      name: 'satyam weaves',
      suitable: 'women',
      price: 959,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l5jxt3k0/sari/k/v/m/free-nt15-d-divastri-unstitched-original-imagg7dsbqfkpfaf.jpeg?q=70',
    },
    {
      name: 'being banarasi',
      suitable: 'women',
      price: 859,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l5jxt3k0/sari/l/p/q/free-nt15-d-divastri-unstitched-original-imagg7dtdfcacyzc.jpeg?q=70',
    },
    {
      name: 'saara',
      suitable: 'women',
      price: 1059,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l5jxt3k0/sari/d/b/7/free-nt15-d-divastri-unstitched-original-imagg7dsxgggugke.jpeg?q=70',
    },
    {
      name: 'pisara',
      suitable: 'women',
      price: 789,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/sari/y/9/3/free-nt32-d-divastri-unstitched-original-imagg9gg3ffh7mmd.jpeg?q=70',
    },
    {
      name: 'vebnor',
      suitable: 'men',
      price: 459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70',
    },
    {
      name: 'Rebok',
      suitable: 'men',
      price: 595,
      image:
        'https://rukminim1.flixcart.com/image/612/612/ksuowi80/shirt/e/k/s/xxl-frml-st2-vebnor-original-imag6bkekuzzuq7q.jpeg?q=70',
    },
    {
      name: 'puma',
      suitable: 'men',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/2/y/b/s-frml-st2-vebnor-original-imag7bckuhzxjuza-bb.jpeg?q=70',
    },
    {
      name: 'wrangular',
      suitable: 'men',
      price: 1299,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/i/j/m/l-frml-st2-vebnor-original-imag6qbcn8jbyzuf-bb.jpeg?q=70',
    },
    {
      name: 'HRX',
      suitable: 'men',
      price: 759,
      image:
        'https://rukminim1.flixcart.com/image/612/612/ktd9mkw0/shirt/b/a/o/xxl-frml-st2-vebnor-original-imag6qdundnv9az9.jpeg?q=70',
    },
    {
      name: 'sara',
      suitable: 'women',
      price: 459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuef2q80/sari/r/d/q/free-s185469-wt-fabwomen-unstitched-original-imag7j6wqz5fgdtb.jpeg?q=70',
    },
    {
      name: 'pisara',
      suitable: 'women',
      price: 359,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuef2q80/sari/8/h/u/free-s185467-wt-fabwomen-unstitched-original-imag7j6wjyud4qc4.jpeg?q=70',
    },
    {
      name: 'banarasi',
      suitable: 'women',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/km9ht3k0/sari/j/g/l/free-s185459-f-fabwomen-unstitched-original-imagf7gxufz5smbx.jpeg?q=70',
    },
    {
      name: 'Divyasri',
      suitable: 'women',
      price: 799,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kklhbbk0/sari/v/0/h/free-s188501-fab-women-unstitched-original-imafzwvynhpuhgbr.jpeg?q=70',
    },
    {
      name: 'Fabwomen',
      suitable: 'women',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuef2q80/sari/z/h/b/free-s189976-wt-fabwomen-unstitched-original-imag7j6whujdvrc6.jpeg?q=70',
    },
    
    {
      name: 'linenclub',
      suitable: 'men',
      price: 2459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kst9gnk0/shirt/r/s/t/xxl-frml-st2-vebnor-original-imag6at4hgjrvyun.jpeg?q=70',
    },
    {
      name: 'mufti',
      suitable: 'men',
      price:849,
      image:
        'https://rukminim1.flixcart.com/image/612/612/ku4ezrk0/shirt/p/k/b/l-frml-st2-vebnor-original-imag7bdt7rqjzaxg.jpeg?q=70',
    },
    {
      name: 'reymond',
      suitable: 'men',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/e/3/s/s-frml-st2-vebnor-original-imagd8g7zhphx8db-bb.jpeg?q=70',
    },
    {
      name: 'killer',
      suitable: 'men',
      price: 1099,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l1qrjbk0/shirt/n/5/x/xl-frml-st2-vebnor-original-imagd8gff9d76avf.jpeg?q=70',
    },

    {
      name: 'Rollex',
      suitable: 'men',
      price: 2559,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/q/2/i/42-men-regular-slim-fit-solid-button-down-collar-formal-shirt-original-imagf4nbrwdqgnc6-bb.jpeg?q=70',
    },
    /*women*/
  
    /*boys*/
    {
      name: 'allensolly',
      suitable: 'boys',
      price: 459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuwzssw0/sweatshirt/k/l/f/7-8-years-ccobpss20776y05-cherokee-original-imag7xjjttscw2uz.jpeg?q=70',
    },
    {
      name: 'Rebook',
      suitable: 'boys',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kwcfngw0/sweatshirt/f/x/j/-original-imag9fbdbfjzx6gq.jpeg?q=70',
    },
    {
      name: 'mufti',
      suitable: 'boys',
      price: 1359,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuvkcy80/sweatshirt/5/a/8/8-9-years-ccobpss20759r05-cherokee-original-imag7w7qykfdkjmk.jpeg?q=70',
    },
    {
      name: 'puma',
      suitable: 'boys',
      price: 1399,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuvkcy80/sweatshirt/e/8/h/7-8-years-ccobpss20758n01-cherokee-original-imag7w8dybmyzkg3.jpeg?q=70',
    },
    {
      name: 'Hrx',
      suitable: 'boys',
      price: 959,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kw9krrk0/sweatshirt/n/j/g/-original-imag8zcwe4ewgjtp.jpeg?q=70',
    },
    {
      name: 'wrangular',
      suitable: 'boys',
      price: 899,
      image:
        'https://rukminim1.flixcart.com/image/612/612/km3s1ow0/sweatshirt/w/k/d/2-3-years-abstcrgpl96764-allen-solly-original-imagf2x5gwuzqheq.jpeg?q=70',
    },
    {
      name: 'club',
      suitable: 'boys',
      price: 679,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kwb07m80/sweatshirt/n/x/a/-original-imag9yaavkqny7m8.jpeg?q=70',
    },
    {
      name: 'linen',
      suitable: 'boys',
      price: 500,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kw9krrk0/sweatshirt/v/b/m/-original-imag8zcnhguzxfm8.jpeg?q=70',
    },
    {
      name: 'rollex',
      suitable: 'boys',
      price: 909,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kwb07m80/sweatshirt/n/k/g/-original-imag9yaaddmgxqhw.jpeg?q=70',
    },
    {
      name: 'vebnor',
      suitable: 'boys',
      price: 539,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kwb07m80/sweatshirt/2/k/4/-original-imag9yab8gp4kf7g.jpeg?q=70',
    },
    /*girls*/
    {
      name: 'ebnor',
      suitable: 'girls',
      price: 659,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/kids-dress/b/c/a/-original-imaghfayrpzrvske.jpeg?q=70',
    },
    {
      name: 'Sfc Fashions',
      suitable: 'girls',
      price: 899,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l3xcr680/kids-dress/z/9/q/-original-imagexskggjnmawg.jpeg?q=70',
    },
    {
      name: 'Kaarigari',
      suitable: 'girls',
      price: 859,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kiqbma80-0/kids-dress/i/d/e/2-3-years-aigdrprghg67254-allen-solly-original-imafyggtxk6gtqth.jpeg?q=70',
    },
    {
      name: 'billion',
      suitable: 'girls',
      price: 479,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/kids-dress/i/c/j/9-10-years-agdrergfc99666-allen-solly-original-imaggayg7emnuudz.jpeg?q=70',
    },
    {
      name: 'tonu bohu',
      suitable: 'girls',
      price: 899,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/kids-dress/n/u/x/-original-imagemzgxurmbqkz.jpeg?q=70',
    },
    {
      name: 'bella moda',
      suitable: 'girls',
      price: 890,
      image:
        'https://rukminim1.flixcart.com/image/612/612/jljri4w0/kids-dress/z/n/t/5-6-years-hit001-digimart-original-imaf8n4qhkpzabfr.jpeg?q=70',
    },
    {
      name: 'Billion',
      suitable: 'girls',
      price: 670,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kdnf98w0hlty2aw-0/kids-dress/n/d/m/2-3-years-1-multi-ftc-fashions-original-imafukztyfqprksc.jpeg?q=70',
    },
    {
      name: 'tfc ',
      suitable: 'girls',
      price: 959,
      image:
        'https://rukminim1.flixcart.com/image/612/612/l0cr4i80/kids-dress/l/u/f/5-6-years-redb-ftc-fashions-original-imagc5p8uftfugph.jpeg?q=70',
    },
    {
      name: 'vimala',
      suitable: 'girls',
      price: 1459,
      image:
        'https://rukminim1.flixcart.com/image/612/612/kuzuoi80/kids-dress/t/2/m/6-7-years-new-blackjali-ftc-fashions-original-imag7zghqg4vgbd7.jpeg?q=70',
    },
    {
      name: 'krusta',
      suitable: 'girls',
      price: 1859,
      image:
        'https://rukminim1.flixcart.com/image/612/612/xif0q/kids-dress/d/z/0/1-2-years-skyrosenet-ftc-fashions-original-imaggcznr4zfkkyy.jpeg?q=70',
    },
  ];
}
interface fashionDetails {
  name: string;
  suitable: string;
  price: number;
  image: string;
}

