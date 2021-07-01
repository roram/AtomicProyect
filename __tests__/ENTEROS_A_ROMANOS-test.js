import { EnteroARomano } from '../app/helpers/EnteroARomano';

//*******************//
//TESTS OF TYPE OF DATA
it('Given a integer type number of 4000, EnteroARomano() returns a false boolean because you can\'t write '+
   'a three times the same symbol (MMMM).',() =>{
    expect(EnteroARomano(4000)).toBe(false);
});

it('Given a integer type number of 0, EnteroARomano(), returns a boolean type of false because you can\'t '+
   'write a 0 in roman.'
,() =>{
    expect(EnteroARomano(0)).toBe(false);
});

it('Given a integer type number of 1.5, EnteroARomano(), returns a boolean type of false because you can\'t '+
   'write a decimal number in this test.'
,() =>{
    expect(EnteroARomano(1.5)).toBe(false);
});

it('Given a negative integer type number of -1, EnteroARomano(), returns a boolean type of false' +
    'because you can\'t write negative number.'
,() =>{
    expect(EnteroARomano(-1)).toBe(false);
});

//**********************//
//TEST UNITS OF THOUSANDS
it('Given a integer type number of 3000, EnteroARomano() returns a string type of \"MMM\".',() =>{
    expect(EnteroARomano(3000)).toBe("MMM");
});

it('Given a integer type number of 2000, EnteroARomano() returns a string type of \"MM\".',() =>{
    expect(EnteroARomano(2000)).toBe("MM");
});

it('Given a integer type number of 1000, EnteroARomano() returns a string type of \"M\".',() =>{
    expect(EnteroARomano(1000)).toBe("M");
});

//*********************//
//TEST UNITS OF HUNDREDS

it('Given a integer type number of 900, EnteroARomano() returns a string type of \"CM\".',() =>{
    expect(EnteroARomano(900)).toBe("CM");
});

it('Given a integer type number of 800, EnteroARomano() returns a string type of \"DCCC\".',() =>{
    expect(EnteroARomano(800)).toBe("DCCC");
});

it('Given a integer type number of 700, EnteroARomano() returns a string type of \"DCC\".',() =>{
    expect(EnteroARomano(700)).toBe("DCC");
});

it('Given a integer type number of 600, EnteroARomano() returns a string type of \"DC\".',() =>{
    expect(EnteroARomano(600)).toBe("DC");
});

it('Given a integer type number of 500, EnteroARomano() returns a string type of \"D\".',() =>{
    expect(EnteroARomano(500)).toBe("D");
});

it('Given a integer type number of 400, EnteroARomano() returns a string type of \"CD\".',() =>{
    expect(EnteroARomano(400)).toBe("CD");
});

it('Given a integer type number of 300, EnteroARomano() returns a string type of \"CCC\".',() =>{
    expect(EnteroARomano(300)).toBe("CCC");
});

it('Given a integer type number of 300, EnteroARomano() returns a string type of \"CC\".',() =>{
    expect(EnteroARomano(200)).toBe("CC");
});

it('Given a integer type number of 100, EnteroARomano() returns a string type of \"C\".',() =>{
    expect(EnteroARomano(100)).toBe("C");
});

//*****************//
//TEST UNITS OF TENS

it('Given a integer type number of 90, EnteroARomano() returns a string type of \"XC\".',() =>{
    expect(EnteroARomano(90)).toBe("XC");
});

it('Given a integer type number of 80, EnteroARomano() returns a string type of \"LXXX\".',() =>{
    expect(EnteroARomano(80)).toBe("LXXX");
});

it('Given a integer type number of 70, EnteroARomano() returns a string type of \"LXX\".',() =>{
    expect(EnteroARomano(70)).toBe("LXX");
});

it('Given a integer type number of 60, EnteroARomano() returns a string type of \"LX\".',() =>{
    expect(EnteroARomano(60)).toBe("LX");
});

it('Given a integer type number of 50, EnteroARomano() returns a string type of \"L\".',() =>{
    expect(EnteroARomano(50)).toBe("L");
});

it('Given a integer type number of 40, EnteroARomano() returns a string type of \"XL\".',() =>{
    expect(EnteroARomano(40)).toBe("XL");
});

it('Given a integer type number of 30, EnteroARomano() returns a string type of \"XXX\".',() =>{
    expect(EnteroARomano(30)).toBe("XXX");
});

it('Given a integer type number of 20, EnteroARomano() returns a string type of \"XX\".',() =>{
    expect(EnteroARomano(20)).toBe("XX");
});

it('Given a integer type number of 10, EnteroARomano() returns a string type of \"X\".',() =>{
    expect(EnteroARomano(10)).toBe("X");
});

//*****************//
//TEST UNITS OF UNIT

it('Given a integer type number of 9, EnteroARomano() returns a string type of \"IX\".',() =>{
    expect(EnteroARomano(9)).toBe("IX");
});

it('Given a integer type number of 8, EnteroARomano() returns a string type of \"VIII\".',() =>{
    expect(EnteroARomano(8)).toBe("VIII");
});

it('Given a integer type number of 7, EnteroARomano() returns a string type of \"VII\".',() =>{
    expect(EnteroARomano(7)).toBe("VII");
});

it('Given a integer type number of 6, EnteroARomano() returns a string type of \"VI\".',() =>{
    expect(EnteroARomano(6)).toBe("VI");
});

it('Given a integer type number of 5, EnteroARomano() returns a string type of \"V\".',() =>{
    expect(EnteroARomano(5)).toBe("V");
});

it('Given a integer type number of 4, EnteroARomano() returns a string type of \"IV\".',() =>{
    expect(EnteroARomano(4)).toBe("IV");
});

it('Given a integer type number of 3, EnteroARomano() returns a string type of \"III\".',() =>{
    expect(EnteroARomano(3)).toBe("III");
});

it('Given a integer type number of 2, EnteroARomano() returns a string type of \"II\".',() =>{
    expect(EnteroARomano(2)).toBe("II");
});

it('Given a integer type number of 1, EnteroARomano() returns a string type of \"I\".',() =>{
    expect(EnteroARomano(1)).toBe("I");
});

//*************/
// RANDOM TESTS

it('Given a integer type number of 2967, EnteroARomano() returns a string type of \"MMCMLXVII\".',() =>{
    expect(EnteroARomano(2967)).toBe("MMCMLXVII");
});

it('Given a integer type number of 435, EnteroARomano() returns a string type of \"CDXXXV\".',() =>{
    expect(EnteroARomano(435)).toBe("CDXXXV");
});

it('Given a integer type number of 754, EnteroARomano() returns a string type of \"DCCLIV\".',() =>{
    expect(EnteroARomano(754)).toBe("DCCLIV");
});

it('Given a integer type number of 1031, EnteroARomano() returns a string type of \"MXXXI\".',() =>{
    expect(EnteroARomano(1031)).toBe("MXXXI");
});

it('Given a integer type number of 101, EnteroARomano() returns a string type of \"CI\".',() =>{
    expect(EnteroARomano(101)).toBe("CI");
});

it('Given a integer type number of 444, EnteroARomano() returns a string type of \"CDXLIV\".',() =>{
    expect(EnteroARomano(444)).toBe("CDXLIV");
});

/* REWRITING TESTS
it('Given a integer type number of 3500, EnteroARomano() returns a string type of \"MMMD\".',() =>{
    expect(EnteroARomano(3500)).toBe("MMMD");
});

it('Given a integer type number of 3550, EnteroARomano() returns a string type of \"MMMDL\".',() =>{
    expect(EnteroARomano(3550)).toBe("MMMDL");
});

it('Given a integer type number of 3555, EnteroARomano() returns a string type of \"MMMDLV\".',() =>{
    expect(EnteroARomano(3555)).toBe("MMMDLV");
});

it('Given a integer type number of 3655, EnteroARomano() returns a string type of \"MMMDCLV\".',() =>{
    expect(EnteroARomano(3655)).toBe("MMMDCLV");
});

it('Given a integer type number of 3755, EnteroARomano() returns a string type of \"MMMDCCLV\".',() =>{
    expect(EnteroARomano(3755)).toBe("MMMDCCLV");
});

it('Given a integer type number of 3855, EnteroARomano() returns a string type of \"MMMDCCCLV\".',() =>{
    expect(EnteroARomano(3855)).toBe("MMMDCCCLV");
});

it('Given a integer type number of 3955, EnteroARomano() returns a string type of \"MMMCMLV\".',() =>{
    expect(EnteroARomano(3955)).toBe("MMMCMLV");
});

it('Given a integer type number of 3455, EnteroARomano() returns a string type of \"MMMCDLV\".',() =>{
    expect(EnteroARomano(3455)).toBe("MMMCDLV");
});

it('Given a integer type number of 3355, EnteroARomano() returns a string type of \"MMMCCCLV\".',() =>{
    expect(EnteroARomano(3355)).toBe("MMMCCCLV");
});

it('Given a integer type number of 3255, EnteroARomano() returns a string type of \"MMMCCLV\".',() =>{
    expect(EnteroARomano(3255)).toBe("MMMCCLV");
});

it('Given a integer type number of 3155, EnteroARomano() returns a string type of \"MMMCLV\".',() =>{
    expect(EnteroARomano(3155)).toBe("MMMCLV");
});

it('Given a integer type number of 3055, EnteroARomano() returns a string type of \"MMMLV\".',() =>{
    expect(EnteroARomano(3055)).toBe("MMMLV");
});

it('Given a integer type number of 3065, EnteroARomano() returns a string type of \"MMMLXV\".',() =>{
    expect(EnteroARomano(3065)).toBe("MMMLXV");
});

it('Given a integer type number of 3075, EnteroARomano() returns a string type of \"MMMLXXV\".',() =>{
    expect(EnteroARomano(3075)).toBe("MMMLXXV");
});

it('Given a integer type number of 3085, EnteroARomano() returns a string type of \"MMMLXXXV\".',() =>{
    expect(EnteroARomano(3085)).toBe("MMMLXXXV");
});

it('Given a integer type number of 3095, EnteroARomano() returns a string type of \"MMMXCV\".',() =>{
    expect(EnteroARomano(3095)).toBe("MMMXCV");
});

it('Given a integer type number of 3045, EnteroARomano() returns a string type of \"MMMXLV\".',() =>{
    expect(EnteroARomano(3045)).toBe("MMMXLV");
});

it('Given a integer type number of 3035, EnteroARomano() returns a string type of \"MMMXXXV\".',() =>{
    expect(EnteroARomano(3035)).toBe("MMMXXXV");
});

it('Given a integer type number of 3025, EnteroARomano() returns a string type of \"MMMXXV\".',() =>{
    expect(EnteroARomano(3025)).toBe("MMMXXV");
});

it('Given a integer type number of 3016, EnteroARomano() returns a string type of \"MMMXVI\".',() =>{
    expect(EnteroARomano(3016)).toBe("MMMXVI");
});

it('Given a integer type number of 3017, EnteroARomano() returns a string type of \"MMMXVII\".',() =>{
    expect(EnteroARomano(3017)).toBe("MMMXVII");
});

it('Given a integer type number of 3018, EnteroARomano() returns a string type of \"MMMXVIII\".',() =>{
    expect(EnteroARomano(3018)).toBe("MMMXVIII");
});

it('Given a integer type number of 3019, EnteroARomano() returns a string type of \"MMMXIX\".',() =>{
    expect(EnteroARomano(3019)).toBe("MMMXIX");
});

it('Given a integer type number of 3014, EnteroARomano() returns a string type of \"MMMXIV\".',() =>{
    expect(EnteroARomano(3014)).toBe("MMMXIV");
});

it('Given a integer type number of 3013, EnteroARomano() returns a string type of \"MMMXIII\".',() =>{
    expect(EnteroARomano(3013)).toBe("MMMXIII");
});

it('Given a integer type number of 3012, EnteroARomano() returns a string type of \"MMMXII\".',() =>{
    expect(EnteroARomano(3012)).toBe("MMMXII");
});

it('Given a integer type number of 3011, EnteroARomano() returns a string type of \"MMMXI\".',() =>{
    expect(EnteroARomano(3011)).toBe("MMMXI");
});

it('Given a integer type number of 3010, EnteroARomano() returns a string type of \"MMMX\".',() =>{
    expect(EnteroARomano(3010)).toBe("MMMX");
});
*/